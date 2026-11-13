import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // AI Sensei Tutor Endpoint - Directly powered by Google Gemini API
  app.post('/api/ai-sensei', async (req, res) => {
    const {
      prompt,
      type = 'grammar',
      context,
      chapterContext,
      history = [],
      kanjiMode = true,
    } = req.body || {};

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({
        error: 'Pertanyaan atau kalimat bahasa Jepang tidak boleh kosong.',
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      return res.status(401).json({
        error:
          'GEMINI_API_KEY belum dikonfigurasi. Silakan tambahkan GEMINI_API_KEY di panel Settings > Secrets.',
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const activeChapter = chapterContext || context || 'Bab 1–25';

      const kanjiRuleInstruction = kanjiMode
        ? `MODE KANJI ON (FURIGANA MENGAMBANG AKTIF):
- Gunakan huruf Kanji standar JLPT N5 pada setiap kosakata dan kalimat bahasa Jepang.
- WAJIB menuliskan cara baca furigana (hiragana) tepat di belakang bagian ber-Kanji menggunakan kurung siku dengan format: Kanji[furigana], misalnya: 私[わたし]は毎日[まいにち]日本語[にほんご]を勉強[べんきょう]します。, 田中先生[たなかせんせい], 食[た]べます, 行[い]きます, 新[あたら]しい.
- JANGAN menuliskan furigana di dalam tanda kurung biasa di samping kanji, karena aplikasi akan otomatis merender format Kanji[furigana] menjadi popup furigana mengambang di atas Kanji saat disentuh/diarahkan kursor.`
        : `MODE KANJI OFF (FULL KANA):
- DILARANG menggunakan huruf Kanji sama sekali di seluruh responsmu!
- Tuliskan SEMUA kata, contoh kalimat, dan dialog bahasa Jepang sepenuhnya dalam huruf Kana (Hiragana dan Katakana saja, 0% Kanji), misalnya: わたしは まいにち にほんごを べんきょうします。`;

      let systemInstruction = `Kamu adalah Tanaka-sensei, seorang guru bahasa Jepang profesional yang ramah, sabar, dan sangat menguasai kurikulum buku autentik:
1. Minna no Nihongo Shokyu I (Edisi Kedua, Bab 1 - 25 beserta Materi Pengantar Hajime ni).
2. Kanji Master N5 (Arc Academy, 15 Bab Tematik, 118 Karakter Kanji).

Tugasmu adalah membantu pembelajar berbahasa Indonesia menguasai JLPT N5 dengan penjelasan yang mudah dipahami, sistematis, dan akurat.
Aturan Penulisan:
1. ${kanjiRuleInstruction}
2. Sertakan juga cara baca romaji dan terjemahan bahasa Indonesia untuk setiap contoh kalimat Jepang.
3. Jika pengguna meminta koreksi kalimat, periksa partikel, bentuk konjugasi kata kerja/sifat (Doushi Katsuyou Golongan I, II, III), dan kesopanan (Bentuk Desu/Masu vs Futsuukei). Tunjukkan kesalahan secara ramah lalu berikan versi yang benar beserta penjelasannya.
4. Ingat konteks percakapan sebelumnya dari riwayat chat pengguna.
5. Gunakan gaya bahasa yang menyemangati.`;

      if (type === 'grammar') {
        systemInstruction += ` Fokus pada penjelasan tata bahasa (Bunkei & Reibun) Minna no Nihongo I (${activeChapter}) dan perbedaan nuansa partikel.`;
      } else if (type === 'correction') {
        systemInstruction += ` Fokus pada mengoreksi kalimat bahasa Jepang N5 yang ditulis pengguna (${activeChapter}), periksa partikel, pilihan kosakata, dan konjugasi kata kerja/sifat.`;
      } else if (type === 'kaiwa') {
        systemInstruction += ` Lakukan simulasi percakapan (Kaiwa) situasi nyata level N5 (${activeChapter}, seperti tokoh Mike Miller, Sato Keiko, Santos, Karina, atau Yamada). Balas kalimat pengguna dalam bahasa Jepang sopan (Desu/Masu), berikan cara baca romaji & terjemahan Indonesia, lalu ajukan pertanyaan balasan untuk melanjutkan dialog.`;
      }

      // Build multi-turn context
      const sanitizedHistory: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
      if (Array.isArray(history)) {
        const recentHistory = history.slice(-10);
        for (const item of recentHistory) {
          if (item && typeof item.text === 'string' && item.text.trim()) {
            sanitizedHistory.push({
              role: item.role === 'model' ? 'model' : 'user',
              parts: [{ text: item.text }],
            });
          }
        }
      }

      sanitizedHistory.push({
        role: 'user',
        parts: [{ text: prompt }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: sanitizedHistory,
        config: {
          systemInstruction,
        },
      });

      const reply = response.text || 'Maaf, sensei belum bisa menghasilkan jawaban saat ini.';
      return res.json({ reply });
    } catch (error: any) {
      console.error('Error in /api/ai-sensei calling Gemini API:', error);
      return res.status(500).json({
        error: error?.message || 'Gagal memproses permintaan dari Gemini API.',
      });
    }
  });

  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server ready on port ${PORT}`);
  });
}

startServer();
