# N5 Master: Minna no Nihongo & Kanji Master

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.21-000000?style=flat-square&logo=express&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini_API-GenAI-4285F4?style=flat-square&logo=google&logoColor=white)

Aplikasi web pembelajaran bahasa Jepang level **JLPT N5** yang terstruktur untuk pembelajar berbahasa Indonesia. Kurikulumnya mengacu pada dua buku standar pembelajaran bahasa Jepang pemula: ***Minna no Nihongo Shokyu I*** (Bab 1–25 beserta materi pengantar *Hajime ni*) dan ***Kanji Master N5*** (*Arc Academy*, 15 Bab Tematik), dilengkapi pemutar audio Neural TTS, kanvas latihan menulis kanji (*masume*), matriks konjugasi kata kerja, simulasi ujian JLPT N5, serta tutor AI interaktif **Tanaka-sensei**.

---

## Daftar Isi

- [Statistik Kurikulum & Konten](#statistik-kurikulum--konten)
- [Fitur Utama untuk Pengguna](#fitur-utama-untuk-pengguna)
  - [1. Materi Minna no Nihongo I (Bab 1–25)](#1-materi-minna-no-nihongo-i-bab-125)
  - [2. Kotoba N5 & Latihan Interaktif](#2-kotoba-n5--latihan-interaktif)
  - [3. Kanji Master N5 & Kanvas Masume](#3-kanji-master-n5--kanvas-masume)
  - [4. Tabel & Drill Konjugasi Kata Kerja](#4-tabel--drill-konjugasi-kata-kerja)
  - [5. Simulasi Ujian JLPT N5 (180 Poin)](#5-simulasi-ujian-jlpt-n5-180-poin)
  - [6. Tanya Tanaka-sensei (Tutor AI)](#6-tanya-tanaka-sensei-tutor-ai)
  - [7. Pelacakan Progres, Bookmark & Preferensi Baca](#7-pelacakan-progres-bookmark--preferensi-baca)
- [Arsitektur Sistem & Aliran Data](#arsitektur-sistem--aliran-data)
  - [Diagram Arsitektur](#diagram-arsitektur)
  - [Mekanisme Mesin Audio Bundel Statis](#mekanisme-mesin-audio-bundel-statis)
  - [Mekanisme Parser Furigana Otomatis](#mekanisme-parser-furigana-otomatis)
- [Struktur Direktori Proyek](#struktur-direktori-proyek)
- [Panduan Instalasi & Pengembangan (Developer)](#panduan-instalasi--pengembangan-developer)
  - [Prasyarat](#prasyarat)
  - [Variabel Lingkungan (.env)](#variabel-lingkungan-env)
  - [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
  - [Daftar Skrip NPM](#daftar-skrip-npm)
- [Referensi Teknis & API](#referensi-teknis--api)
  - [Endpoint Backend: POST /api/ai-sensei](#endpoint-backend-post-apiai-sensei)
  - [Skema Persistensi localStorage](#skema-persistensi-localstorage)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)

---

## Statistik Kurikulum & Konten

Seluruh materi tersimpan terstruktur di sisi klien agar navigasi antar-bab berjalan instan:

| Modul Pembelajaran | Cakupan Kurikulum | Jumlah Data Terverifikasi | Sumber Referensi |
| :--- | :--- | :--- | :--- |
| **Materi Minna** | Bab 1–25 + Pengantar *Hajime ni* | **25 Bab** (*Vocab*, *Bunkei*, *Kaiwa*, *Exercises*) | *Minna no Nihongo Shokyu I* (3A Corp) |
| **Kotoba N5** | Kosakata Bab 1–25 + PDF Referensi | **606 Kosakata** + PDF Bab 1–50 (`4,8 MB`) | *Kotoba Minna no Nihongo* |
| **Kanji Master N5** | 15 Bab Tematik + Latihan *Fukushuu* | **118 Karakter Kanji** + **15 Bab Latihan** | *Kanji Master N5* (*Arc Academy*) |
| **Konjugasi** | Golongan I (*Godan*), II (*Ichidan*), III | **139 Kata Kerja** (7 bentuk konjugasi) | Modul *Minna no Nihongo* Bab 4–25 |
| **Simulasi Ujian** | *Moji-Goi*, *Bunpou*, & *Dokkai* | **20 Soal** (8 Moji-Goi · 8 Bunpou · 4 Dokkai) | Standar JLPT N5 (Skala 180 Poin) |
| **Audio Bundel** | Pengucapan kata, contoh & dialog | **2.417 Klip MP3** (`17,28 MB` terindeks) | Azure Neural TTS (`ja-JP-NanamiNeural`) |

---

## Fitur Utama untuk Pengguna

### 1. Materi Minna no Nihongo I (Bab 1–25)
- **Navigasi 25 Bab + Materi Pengantar (*Hajime ni*)**: Dilengkapi modal materi pengantar halaman 5 (*Kyoushitsu no Kotoba*, salam sehari-hari, dan angka 0–10) lengkap dengan pemutar audio.
- **4 Sub-Tab per Bab**:
  - **Kosakata (*Tango*)**: Pencarian kata, filter jenis kata (kata kerja, kata benda, kata sifat, bookmark), pemutar audio, contoh kalimat, dan penanda *Bookmark*.
  - **Pola Kalimat (*Bunkei & Reibun*)**: Penjelasan rumus tata bahasa terstruktur beserta contoh kalimat ber-furigana dan audio.
  - **Percakapan (*Kaiwa*)**: Dialog situasional per bab dengan tombol putar seluruh dialog (*Play All*) maupun per baris percakapan, serta sakelar tampil/sembunyi terjemahan.
  - **Latihan Bab (*Exercises*)**: 10–12 soal latihan interaktif per bab mencakup pilihan ganda, isian partikel, dan penyusunan kalimat (*sentence ordering*) beserta pembahasan.

### 2. Kotoba N5 & Latihan Interaktif
- **Daftar Kosakata & Filter**: Filter berdasarkan Bab (1–25 atau Semua Bab), kategori kata, status penguasaan (*Sudah Dikuasai*, *Belum Dikuasai*, *Ditandai*), dan pencarian Kana/Kanji/Romaji/Indonesia.
- **5 Mode Belajar**:
  1. **Daftar Kata (`list`)**: Tampilan kamus cepat dengan audio, tombol kuasai, dan bookmark.
  2. **Flashcard (`flashcard`)**: Kartu bolak-balik interaktif lengkap dengan fitur acak urutan (*shuffle*).
  3. **Kuis 2 Arah (`quiz`)**: Pilihan ganda 3 mode arah (*Jepang → Indonesia*, *Indonesia → Jepang*, atau *Campuran*).
  4. **Latihan Audio & Ketik (`audio-typing`)**: Terdiri dari *Listening Quiz* (tebak kata dari audio) dan *Typing Drill* (mengetik Kana atau Romaji dari arti kata).
  5. **Speed Matching (`matching`)**: Permainan mencocokkan pasangan kata Jepang–Indonesia berbatas timer dengan pencatatan waktu terbaik (*best time*).
- **Pembaca PDF Bawaan**: Modal penampil dokumen asli *Kotoba Minna no Nihongo (Bab 1–50)* langsung di dalam aplikasi.

### 3. Kanji Master N5 & Kanvas Masume
- **118 Karakter Kanji dalam 15 Bab Tematik**: Mulai dari `1章 すうじ` (Angka) hingga `15章 けいようし` (Kata Sifat), lengkap dengan jumlah coretan (*kakusuu*), bacaan *Onyomi* & *Kunyomi*, arti Indonesia/Inggris, kosakata majemuk (*Jukugo*), dan contoh kalimat.
- **Kanvas Menulis Kanji 4 Kuadran (`KanjiCanvas`)**:
  - Panduan kisi tradisional *masume* (garis tengah horizontal, vertikal, diagonal, dan label 4 kuadran).
  - Penghitung coretan real-time yang membandingkan jumlah goresan pengguna dengan target coretan kanji.
  - Kontrol ukuran kuas (**Tipis**, **Sedang**, **Tebal**), sakelar bayangan contoh (*Contoh: ON/OFF*), *Undo* per coretan, dan *Hapus*.
- **4 Mode Belajar Kanji**:
  - **Daftar Kanji (`grid`)**: Kartu kisi kanji beserta modal detail + kanvas latihan menulis.
  - **Latihan Bab (`exercise`)**: Latihan autentik buku (*ふくしゅう*: *Yomimashou* baca kanji, *Kakimashou* tulis kanji langsung di kanvas *masume*, dan *Kuis Bab*).
  - **Flashcard (`flashcard`)** & **Kuis Arti Kanji (`quiz`)**.

### 4. Tabel & Drill Konjugasi Kata Kerja
- **Matriks 139 Kata Kerja N5**: Filter berdasarkan golongan kata kerja (**Golongan I / Godan**, **Golongan II / Ichidan**, **Golongan III / Irregular**) serta bab kemunculan (Bab 4–25).
- **7 Bentuk Perubahan Lengkap**: Menampilkan bentuk Kamus (*Jisho-kei*), *-Masu*, *-Te*, *-Nai*, *-Ta*, *-Nakatta*, *-Mashita*, dan *-Masen* beserta pemutar audio per sel.
- **Rumus 3 Golongan (`rules`)**: Panduan sistematis cara mengubah bentuk kata kerja.
- **Drill Quiz Interaktif (`drill`)**: Kuis konjugasi cepat untuk menguji perubahan ke bentuk kamus, *-masu*, *-te*, *-nai*, *-ta*, dan *-nakatta*.

### 5. Simulasi Ujian JLPT N5 (180 Poin)
- **Struktur 3 Seksi Resmi**: *Moji & Goi* (60 poin), *Bunpou* (60 poin), dan *Dokkai* (60 poin).
- **Dua Mode Pengerjaan**: *Timer Mundur Otomatis* (**60 menit**) atau *Latihan Mandiri* tanpa batas waktu.
- **Evaluasi Kelulusan Standar JLPT N5**: Mengikuti ambang batas resmi—dinyatakan **LULUS** jika skor total `>= 80 / 180` **DAN** skor tiap seksi masing-masing `>= 19 / 60`.
- **Laporan Skor & Pembahasan**: Menampilkan rincian skor per seksi, pembahasan tiap soal, dan menyimpan hingga 5 riwayat skor ujian terakhir.

### 6. Tanya Tanaka-sensei (Tutor AI)
- **Didukung Google Gemini API**: Terintegrasi melalui server backend (`/api/ai-sensei`) menggunakan model `gemini-4-hydrogen` dengan persona **Tanaka-sensei** yang menguasai kurikulum *Minna no Nihongo I* dan *Kanji Master N5*.
- **3 Mode Konsultasi**:
  1. **Tanya Tata Bahasa (`grammar`)**: Penjelasan pola kalimat dan perbedaan partikel.
  2. **Koreksi Kalimat (`correction`)**: Memeriksa kesalahan partikel, pilihan kata, dan konjugasi kalimat pengguna.
  3. **Latihan Kaiwa (`kaiwa`)**: Roleplay percakapan bahasa Jepang level N5.
- **Kontrol Konteks & Tampilan**: Pilihan cakupan materi (*Semua Materi*, *Bab 1–5*, *Bab 6–12*, *Bab 13–17*, *Bab 18–25*, atau *Kanji Master N5*), sakelar **Kanji ON** (dengan *Furigana Mengambang* format `Kanji[furigana]`) vs **Kanji OFF** (Full Kana), serta memori percakapan hingga 10 pesan terakhir.

### 7. Pelacakan Progres, Bookmark & Preferensi Baca
- **Sakelar Global Furigana & Romaji**: Mengatur tampilan bacaan di seluruh materi *Minna* dan *Kotoba*. Saat Furigana disembunyikan, pengguna tetap dapat mengarahkan kursor (desktop) atau menahan sentuhan (mobile) pada Kanji untuk memunculkan *tooltip* Furigana mengambang.
- **Modal Progres & Reset**: Menampilkan persentase penguasaan Bab Minna, hafalan Kotoba, hafalan Kanji, jumlah kata/kanji ditandai, riwayat nilai ujian, serta fitur reset progres dengan konfirmasi dua langkah.

---

## Arsitektur Sistem & Aliran Data

### Diagram Arsitektur

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FRONTEND SPA (React 19 + Vite + Tailwind v4)             │
├─────────────────────────────────────────────────────────────────────────────┤
│  State & Preferensi Global (src/App.tsx)                                    │
│  • 6 Tab Utama: Minna | Kotoba | Kanji | Konjugasi | Ujian | Tanya Sensei   │
│  • Preferensi Global: showFurigana & showRomaji                             │
│  • Persistensi Lokal (localStorage): progres, bookmark, & riwayat ujian     │
├──────────────────────────────────┬──────────────────────────────────────────┤
│  Komponen & Utilitas Inti        │  Dataset Kurikulum Statis (src/data/)    │
│  • FuriganaText (Parser & Ruby)  │  • minnaLessons.ts (25 Bab)              │
│  • KanjiCanvas (Kanvas Masume)   │  • minnaExercises.ts (Generator Latihan) │
│  • audio.ts (Range 206 Player)   │  • kotobaData.ts (606 Kosakata)          │
│                                  │  • kanjiMasterN5.ts (118 Kanji + 15 Bab) │
│                                  │  • conjugationData.ts (139 Kata Kerja)   │
│                                  │  • examData.ts (20 Soal Simulasi N5)     │
└───────────────┬──────────────────┴──────────────────────┬───────────────────┘
                │ Fetch JSON & HTTP Range 206             │ POST /api/ai-sensei
                ▼                                         ▼
┌──────────────────────────────────┐        ┌─────────────────────────────────┐
│  ASET STATIS PUBLIK (public/)    │        │  BACKEND EXPRESS (server.ts)    │
│  • n5_audio_bundle.mp3 (17,28MB) │        │  • Dev: Vite Middleware Mode    │
│  • n5_audio_index.json (2.417)   │        │  • Prod: Static dist/ Serving   │
│  • Modul PDF Kotoba Bab 1–50     │        │  • Proxy @google/genai          │
└──────────────────────────────────┘        │    (Model: gemini-4-hydrogen)   │
                                            └─────────────────────────────────┘
```

### Mekanisme Mesin Audio Bundel Statis
Alih-alih memuat ribuan file MP3 terpisah atau bergantung pada API TTS eksternal saat runtime, aplikasi menggunakan **Packed Audio Bundle** (`src/utils/audio.ts`):
1. Teks Jepang dibersihkan dari anotasi furigana `[...]`, catatan kurung `(...)`, dan tanda kutip oleh fungsi `cleanJapaneseAudioText()`.
2. Fungsi `getAudioFileHash()` menghitung hash deterministik 64-bit bergaya FNV-1a menjadi kunci `tts_<hex1><hex2>`.
3. Aplikasi mencocokkan kunci tersebut dengan `[offset, length]` di `/audio/n5_audio_index.json`.
4. Klip diambil dari `/audio/n5_audio_bundle.mp3` menggunakan header `Range: bytes=<offset>-<end>` (**HTTP 206 Partial Content**). Jika server/CDN mengembalikan **HTTP 200** penuh, buffer akan di-cache sekali di memori untuk pemotongan instan berikutnya.
5. Blob audio di-cache dalam `clipUrlCache` (`Map<string, string>`) agar pemutaran ulang berlangsung seketika.

### Mekanisme Parser Furigana Otomatis
Komponen `src/components/FuriganaText.tsx` mendukung tiga strategi pembacaan secara berurutan:
1. **Format Eksplisit `Kanji[furigana]`**: Digunakan pada judul materi dan balasan AI Tanaka-sensei (misalnya `田中先生[たなかせんせい]`).
2. **Penyelarasan Blok Kana (`alignKanjiAndKana`)**: Memecah string berkanji dan string kana murni menjadi blok berkanji/non-kanji, lalu menyelaraskan bacaan menggunakan karakter non-kanji sebagai jangkar (*anchor*).
3. **Kamus Fallback N5 (`N5_KANJI_FALLBACK_DICT`)**: Kamus internal ratusan kata & majemuk JLPT N5 apabila string kana berpasangan tidak tersedia.

Mode rendering menyesuaikan prop `showFurigana` dan `floatingOnly`:
- `showFurigana = true` & `floatingOnly = false`: Merender tag HTML `<ruby>` dan `<rt>` langsung di atas Kanji.
- `showFurigana = false` atau `floatingOnly = true`: Merender teks bertitik bawah (*dotted underline*) dengan tooltip mengambang saat *hover* atau *touch-and-hold*.

---

## Struktur Direktori Proyek

```text
.
├── public/
│   ├── assets/aistudio/
│   │   └── Kotoba_Minna_No_Nihongo_Bab_1-50_4babf9f0.pdf   # PDF referensi Kotoba (4,8 MB)
│   └── audio/
│       ├── n5_audio_bundle.mp3       # Bundel audio tunggal 2.417 klip (17,28 MB)
│       └── n5_audio_index.json       # Peta indeks [offset, length] berdasarkan hash
├── src/
│   ├── assets/images/                # Gambar hero & avatar Tanaka-sensei
│   ├── components/
│   │   ├── AiSenseiView.tsx          # Antarmuka chat Tutor AI Tanaka-sensei
│   │   ├── ConjugationView.tsx       # Tabel, rumus & drill konjugasi 139 kata kerja
│   │   ├── ExamView.tsx              # Simulasi ujian JLPT N5 (timer 60 menit & skor)
│   │   ├── FuriganaText.tsx          # Mesin parser & renderer furigana (<ruby>/tooltip)
│   │   ├── Header.tsx                # Bilah navigasi desktop/mobile & tombol progres
│   │   ├── KanjiCanvas.tsx           # Kanvas tulis kanji 4 kuadran (masume)
│   │   ├── KanjiMasterView.tsx       # Modul 118 Kanji Master N5 & latihan 15 bab
│   │   ├── KotobaView.tsx            # Modul 606 Kotoba + 5 mode latihan + PDF modal
│   │   └── MinnaLessonsView.tsx      # Modul 25 bab Minna no Nihongo I + Hajime ni
│   ├── data/
│   │   ├── conjugationData.ts        # Data konjugasi kata kerja & aturan 3 golongan
│   │   ├── examData.ts               # Bank soal simulasi JLPT N5
│   │   ├── kanjiMasterN5.ts          # Data 118 kanji & latihan 15 bab Kanji Master
│   │   ├── kotobaData.ts             # Data 606 kosakata Kotoba N5 (Bab 1–25)
│   │   ├── minnaExercises.ts         # Pembangun latihan per bab Minna no Nihongo
│   │   └── minnaLessons.ts           # Materi lengkap Bab 1–25 Minna no Nihongo I
│   ├── types/
│   │   └── index.ts                  # Definisi interface TypeScript kurikulum & progres
│   ├── utils/
│   │   └── audio.ts                  # Pemutar audio HTTP Range 206 & hash FNV-1a
│   ├── App.tsx                       # Root komponen, manajemen state & modal progres
│   ├── index.css                     # Konfigurasi Tailwind CSS v4 & tipografi JP
│   └── main.tsx                      # Entry point React DOM
├── .env.example                      # Templat variabel lingkungan
├── index.html                        # Entry HTML & Google Fonts (Plus Jakarta Sans, Noto Sans JP, Zen Maru Gothic)
├── metadata.json                     # Metadata & kapabilitas aplikasi
├── package.json                      # Dependensi & skrip build/dev
├── server.ts                         # Server Express (Vite middleware dev + API proxy Gemini)
├── tsconfig.json                     # Konfigurasi TypeScript
└── vite.config.ts                    # Konfigurasi Vite & Tailwind plugin
```

---

## Panduan Instalasi & Pengembangan (Developer)

### Prasyarat
- **Node.js** versi `20+` (disarankan LTS terbaru)
- **npm** atau **bun** untuk manajemen paket
- **Google Gemini API Key** (diperlukan khusus untuk fitur **Tanya Sensei**; seluruh modul belajar lainnya berjalan tanpa API key)

### Variabel Lingkungan (`.env`)

Salin file `.env.example` menjadi `.env` di direktori root dan isi nilai berikut:

```bash
cp .env.example .env
```

| Variabel | Wajib | Keterangan |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Ya (untuk fitur AI Sensei) | Kunci API Google Gemini untuk endpoint server `/api/ai-sensei`. |
| `APP_URL` | Opsional | URL tempat aplikasi di-host (disuntikkan otomatis pada lingkungan Cloud Run / AI Studio). |
| `PORT` | Opsional | Port HTTP server Express (default: `3000`). |
| `NODE_ENV` | Opsional | Atur ke `production` untuk menyajikan hasil build statis dari folder `dist/`. |
| `DISABLE_HMR` | Opsional | Jika bernilai `true`, menonaktifkan Vite HMR dan file watcher pada server dev. |

> [!NOTE]
> Jangan pernah mengekspos `GEMINI_API_KEY` ke kode klien atau menambahkan prefiks `VITE_`. Seluruh panggilan ke Gemini API dijalankan secara aman di sisi server melalui `server.ts`.

### Menjalankan Secara Lokal

1. **Instal seluruh dependensi proyek:**
   ```bash
   npm install
   ```

2. **Jalankan server pengembangan (Express + Vite Middleware di port `3000`):**
   ```bash
   npm run dev
   ```
   Buka browser dan akses `http://localhost:3000`.

3. **Build & jalankan dalam mode produksi:**
   ```bash
   npm run build
   NODE_ENV=production npm start
   ```

### Daftar Skrip NPM

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan `server.ts` via `tsx` dengan Vite dalam mode middleware pengembangan. |
| `npm run start` | Menjalankan `server.ts` via `tsx` (sajikan folder `dist/` jika `NODE_ENV=production`). |
| `npm run build` | Mem-build bundel frontend produksi ke direktori `dist/` menggunakan Vite. |
| `npm run preview` | Menjalankan pratinjau lokal hasil build Vite secara statis (tanpa proxy `/api/ai-sensei`). |
| `npm run lint` | Menjalankan pemeriksaan tipe TypeScript (`tsc --noEmit`). |
| `npm run clean` | Menghapus direktori `dist/` dan artefak `server.js`. |

---

## Referensi Teknis & API

### Endpoint Backend: `POST /api/ai-sensei`

Endpoint proxy di `server.ts` yang meneruskan pertanyaan pengguna ke **Google Gemini API** (`@google/genai`) menggunakan model `gemini-4-hydrogen`.

**Request Body (`application/json`):**

```json
{
  "prompt": "Apa perbedaan partikel は dan が?",
  "type": "grammar",
  "chapterContext": "Minna no Nihongo I (Bab 1–25) & Kanji Master N5",
  "history": [
    { "role": "user", "text": "Konnichiwa sensei" },
    { "role": "model", "text": "Konnichiwa! Ada yang bisa Sensei bantu?" }
  ],
  "kanjiMode": true
}
```

| Field | Tipe | Default | Keterangan |
| :--- | :--- | :--- | :--- |
| `prompt` | `string` | *(Wajib)* | Pertanyaan, kalimat untuk dikoreksi, atau balasan percakapan pengguna. |
| `type` | `'grammar' \| 'correction' \| 'kaiwa'` | `'grammar'` | Mode instruksi sistem Tanaka-sensei. |
| `chapterContext` | `string` | `'Bab 1–25'` | Ruang lingkup materi fokus bab. |
| `history` | `Array<{ role, text }>` | `[]` | Riwayat percakapan multi-turn (dibatasi maksimal 10 pesan terakhir di server). |
| `kanjiMode` | `boolean` | `true` | Jika `true`, AI wajib menyertakan format `Kanji[furigana]`; jika `false`, AI menjawab 100% Kana. |

**Respons:**
- `200 OK`: `{ "reply": "..." }`
- `400 Bad Request`: `{ "error": "Pertanyaan atau kalimat bahasa Jepang tidak boleh kosong." }`
- `401 Unauthorized`: `{ "error": "GEMINI_API_KEY belum dikonfigurasi..." }`
- `500 Internal Server Error`: `{ "error": "..." }`

### Skema Persistensi `localStorage`

Seluruh progres belajar pengguna disimpan otomatis di browser pada kunci berikut:

| Kunci `localStorage` | Tipe Data | Nilai Default | Fungsi |
| :--- | :--- | :--- | :--- |
| `n5_show_furigana` | `boolean` | `true` | Preferensi global tampil/sembunyi Furigana. |
| `n5_show_romaji` | `boolean` | `true` | Preferensi global tampil/sembunyi Romaji. |
| `n5_completed_chapters` | `number[]` | `[1]` | Daftar nomor Bab Minna no Nihongo yang telah selesai. |
| `n5_mastered_kanji` | `string[]` | `["k-1", "k-2", "k-3"]` | ID Kanji Master N5 yang sudah dikuasai. |
| `n5_mastered_kotoba` | `string[]` | `[]` | ID Kotoba N5 yang sudah dihafal. |
| `n5_bookmarked_vocab` | `string[]` | `[]` | ID kosakata yang ditandai pengguna. |
| `n5_bookmarked_kanji` | `string[]` | `[]` | ID kanji yang ditandai pengguna. |
| `n5_exam_scores` | `ExamScoreResult[]` | `[]` | Riwayat maksimal **5** hasil simulasi ujian JLPT N5 terbaru. |

---

## Teknologi yang Digunakan

- **Frontend**: React 19, TypeScript, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), Lucide React (`lucide-react`), Motion (`motion`)
- **Backend**: Node.js, Express 4, `dotenv`, `tsx`
- **AI SDK**: `@google/genai` (Google Gemini API)
- **Tipografi**: Google Fonts (*Plus Jakarta Sans*, *Noto Sans JP*, *Zen Maru Gothic*)
