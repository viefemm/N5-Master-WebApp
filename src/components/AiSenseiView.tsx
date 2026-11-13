import React, { useState, useRef, useEffect } from 'react';
import { FuriganaText } from './FuriganaText';
import {
  Send,
  User,
  RotateCcw,
  BookOpen,
  Languages,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'sensei';
  text: string;
  timestamp: string;
}

const WELCOME_TEXT_KANJI =
  'Konnichiwa! (こんにちは！) Saya Tanaka-sensei (田中先生[たなかせんせい]). Ada materi Minna no Nihongo I (Bab 1–25), Kotoba, atau Kanji Master N5 (118 Kanji) yang ingin kamu tanyakan?\n\nKamu bisa bertanya penjelasan tata bahasa, meminta koreksi partikel & konjugasi kalimat Jepang (例[れい]: 私[わたし]は毎日[まいにち]日本語[にほんご]を勉強[べんきょう]します), atau latihan percakapan (会話[かいわ]) bersama Sensei!';

const WELCOME_TEXT_KANA =
  'Konnichiwa! (こんにちは！) Saya Tanaka-sensei (たなかせんせい). Ada materi Minna no Nihongo I (Bab 1–25), Kotoba, atau Kanji Master N5 yang ingin kamu tanyakan?\n\nKamu bisa bertanya penjelasan tata bahasa, meminta koreksi partikel & konjugasi kalimat Jepang (れい: わたしは まいにち にほんごを べんきょうします), atau latihan percakapan (かいわ) dalam Full Kana bersama Sensei!';

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  sender: 'sensei',
  text: WELCOME_TEXT_KANJI,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

const CHAPTER_SCOPES = [
  { value: 'Minna no Nihongo I (Bab 1–25) & Kanji Master N5', label: 'Semua Materi N5 (Bab 1–25 & 118 Kanji)' },
  { value: 'Minna no Nihongo Bab 1–5 (Perkenalan, Benda, Tempat, Waktu & Tujuan)', label: 'Bab 1–5: Partikel Dasar & Perpindahan' },
  { value: 'Minna no Nihongo Bab 6–12 (Objek, Pemberian, Kata Sifat & Keberadaan)', label: 'Bab 6–12: Kata Sifat, Keberadaan & Hitungan' },
  { value: 'Minna no Nihongo Bab 13–17 (Keinginan, Bentuk -Te, Izin & Bentuk -Nai)', label: 'Bab 13–17: Bentuk -Te (て形) & Bentuk -Nai (ない形)' },
  { value: 'Minna no Nihongo Bab 18–25 (Bentuk Kamus, Bentuk -Ta, Futsuukei & Pengandaian)', label: 'Bab 18–25: Bentuk Kamus, Lampau & Anak Kalimat' },
  { value: 'Kanji Master N5 (Bab 1–15: 118 Karakter Kanji Arc Academy)', label: 'Kanji Master N5: 15 Bab Tematik (118 Kanji)' },
];

export const AiSenseiView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME_MESSAGE]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [mode, setMode] = useState<'grammar' | 'correction' | 'kaiwa'>('grammar');
  const [chapterScope, setChapterScope] = useState<string>(CHAPTER_SCOPES[0].value);
  const [kanjiMode, setKanjiMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const quickPrompts = [
    {
      label: 'Beda partikel は (wa) dan が (ga)',
      prompt: 'Sensei, tolong jelaskan perbedaan partikel は dan が dalam kalimat bahasa Jepang level N5 beserta contohnya.',
      type: 'grammar' as const,
    },
    {
      label: 'Cara membedakan Golongan 1, 2, dan 3',
      prompt: 'Bagaimana cara mudah membedakan kata kerja Golongan 1 (Godan), Golongan 2 (Ichidan), dan Golongan 3 untuk N5?',
      type: 'grammar' as const,
    },
    {
      label: 'Koreksi: 私は学校でにいきます',
      prompt: 'Tolong koreksi kalimat saya: 「私は学校でにいきます」, apakah partikelnya sudah benar?',
      type: 'correction' as const,
    },
    {
      label: 'Latihan Kaiwa: Pesan Makanan di Restoran',
      prompt: 'Sensei, ayo kita latihan percakapan (kaiwa) di restoran Jepang. Sensei jadi pelayan restorannya dulu ya!',
      type: 'kaiwa' as const,
    },
  ];

  const handleResetChat = () => {
    setMessages([
      {
        ...INITIAL_WELCOME_MESSAGE,
        text: kanjiMode ? WELCOME_TEXT_KANJI : WELCOME_TEXT_KANA,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleSendMessage = async (textToSend?: string, overrideMode?: 'grammar' | 'correction' | 'kaiwa') => {
    const text = (textToSend ?? inputPrompt).trim();
    const activeMode = overrideMode ?? mode;
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Build multi-turn history from previous messages (excluding initial welcome, up to 10 messages)
    const historyPayload = messages
      .filter(m => m.id !== 'welcome')
      .slice(-10)
      .map(m => ({
        role: m.sender === 'user' ? ('user' as const) : ('model' as const),
        text: m.text,
      }));

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) {
      setInputPrompt('');
    }
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-sensei', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          type: activeMode,
          chapterContext: chapterScope,
          history: historyPayload,
          kanjiMode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }

      const senseiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'sensei',
        text: data.reply || 'Maaf, sensei belum bisa menghasilkan jawaban saat ini.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, senseiMsg]);
    } catch (err: any) {
      console.error('Error communicating with /api/ai-sensei:', err);

      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'sensei',
        text: `Maaf, terjadi kendala saat memproses jawaban: ${err?.message || 'Gagal menghubungi Gemini API'}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Sensei Profile Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-stone-200 bg-rose-50">
            <img
              src="/src/assets/images/sensei_avatar_1794480666724.jpg"
              alt="Tanaka Sensei"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-xl font-bold text-stone-900">
                  {kanjiMode ? (
                    <FuriganaText text="Tanaka-sensei (田中先生[たなかせんせい])" floatingOnly />
                  ) : (
                    'Tanaka-sensei (たなかせんせい)'
                  )}
                </h1>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-xs text-stone-500 mt-0.5">
                  <span>Tutor Interaktif JLPT N5</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {kanjiMode
                      ? 'Mode Kanji ON (Arahkan kursor / tahan sentuhan pada Kanji untuk Furigana)'
                      : 'Mode Kanji OFF (Sensei menjawab Full Kana)'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setKanjiMode(prev => !prev)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                    kanjiMode
                      ? 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
                      : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                  }`}
                  title={
                    kanjiMode
                      ? 'Mode Kanji Aktif: Furigana mengambang saat Kanji disentuh/diarahkan kursor. Klik untuk ubah ke Full Kana.'
                      : 'Mode Kanji Nonaktif: Sensei menjawab dengan Full Kana (Hiragana/Katakana). Klik untuk mengaktifkan Kanji.'
                  }
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>{kanjiMode ? 'Kanji: ON (Furigana Mengambang)' : 'Kanji: OFF (Full Kana)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetChat}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  title="Mulai ulang sesi percakapan"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Chat</span>
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Tutor pribadi berbasis buku autentik <strong>Minna no Nihongo Shokyu I (Bab 1–25)</strong> &{' '}
              <strong>Kanji Master N5 (118 Kanji)</strong>. Saat <strong>Kanji ON</strong>, arahkan pointer atau
              sentuh-tahan pada Kanji di balasan Sensei untuk melihat furigana mengambang. Saat{' '}
              <strong>Kanji OFF</strong>, Sensei membalas dalam Full Kana.
            </p>
          </div>
        </div>

        {/* Mode & Chapter Context Controls */}
        <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Segmented Mode Control */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-center sm:self-auto">
            <button
              type="button"
              onClick={() => setMode('grammar')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                mode === 'grammar'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tanya Tata Bahasa
            </button>
            <button
              type="button"
              onClick={() => setMode('correction')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                mode === 'correction'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Koreksi Kalimat
            </button>
            <button
              type="button"
              onClick={() => setMode('kaiwa')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                mode === 'kaiwa'
                  ? 'bg-stone-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Latihan Kaiwa
            </button>
          </div>

          {/* Chapter Scope Selector */}
          <div className="flex items-center gap-2 text-xs">
            <BookOpen className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <label htmlFor="chapter-scope-select" className="text-stone-500 whitespace-nowrap shrink-0">
              Fokus Materi:
            </label>
            <select
              id="chapter-scope-select"
              value={chapterScope}
              onChange={e => setChapterScope(e.target.value)}
              className="flex-1 sm:w-60 bg-stone-50 border border-stone-200 text-stone-800 rounded-lg px-2.5 py-1.5 text-xs focus:outline-hidden focus:border-stone-400"
            >
              {CHAPTER_SCOPES.map(scope => (
                <option key={scope.value} value={scope.value}>
                  {scope.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quick Starter Prompts */}
      <div className="space-y-1.5">
        <div className="text-xs text-stone-500 font-medium">Contoh Pertanyaan & Latihan Cepat:</div>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setMode(qp.type);
                handleSendMessage(qp.prompt, qp.type);
              }}
              disabled={isLoading}
              className="px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-400 disabled:opacity-50 text-stone-700 rounded-lg text-xs transition-colors shadow-2xs text-left"
            >
              {qp.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-6 shadow-xs min-h-[380px] max-h-[520px] overflow-y-auto space-y-4">
        {messages.map(msg => {
          const isSensei = msg.sender === 'sensei';
          const displayText =
            msg.id === 'welcome'
              ? kanjiMode
                ? WELCOME_TEXT_KANJI
                : WELCOME_TEXT_KANA
              : msg.text;

          return (
            <div key={msg.id} className={`flex gap-3 ${isSensei ? 'justify-start' : 'justify-end'}`}>
              {isSensei && (
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-stone-200 bg-rose-50">
                  <img
                    src="/src/assets/images/sensei_avatar_1794480666724.jpg"
                    alt="Sensei"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-2 ${
                  isSensei ? 'bg-stone-50 border border-stone-200 text-stone-900' : 'bg-stone-900 text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] text-stone-400">
                  <span className={`font-semibold ${isSensei ? 'text-stone-700' : 'text-stone-200'}`}>
                    {isSensei ? 'Tanaka-sensei' : 'Anda'}
                  </span>
                  <span className="tabular-nums">{msg.timestamp}</span>
                </div>

                <div className="whitespace-pre-line font-jp leading-7">
                  {isSensei && kanjiMode ? (
                    <FuriganaText text={displayText} floatingOnly />
                  ) : (
                    displayText.replace(/\[([^\]]+)\]/g, '')
                  )}
                </div>
              </div>

              {!isSensei && (
                <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 font-bold flex items-center justify-center text-xs shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 items-center text-stone-500 text-xs">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-stone-200 bg-rose-50">
              <img
                src="/src/assets/images/sensei_avatar_1794480666724.jpg"
                alt="Sensei"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span>Tanaka-sensei sedang menyusun penjelasan...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2 bg-white rounded-xl border border-stone-200 p-2 shadow-xs focus-within:border-stone-400"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={e => setInputPrompt(e.target.value)}
          placeholder={
            mode === 'grammar'
              ? 'Tanyakan pola tata bahasa N5 atau lanjutan obrolan sebelumnya...'
              : mode === 'correction'
              ? 'Tulis kalimat bahasa Jepang N5 yang ingin diperiksa partikel & konjugasinya...'
              : 'Balas percakapan bahasa Jepang dengan Tanaka-sensei...'
          }
          disabled={isLoading}
          className="flex-1 px-3 py-2 text-xs sm:text-sm bg-transparent focus:outline-hidden text-stone-900"
        />

        <button
          type="submit"
          disabled={!inputPrompt.trim() || isLoading}
          className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-30 disabled:hover:bg-stone-900 text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium whitespace-nowrap shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Kirim</span>
        </button>
      </form>
    </div>
  );
};
