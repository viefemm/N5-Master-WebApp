# Dokumentasi Lengkap Proyek N5 Master (`README.md`)

Rencana ini menyusun file dokumentasi utama berbahasa Indonesia untuk **N5 Master: Minna no Nihongo & Kanji Master** yang menjelaskan keseluruhan fitur pembelajaran JLPT N5, arsitektur aplikasi full-stack, sistem pemutar audio terkompresi, integrasi tutor AI, serta panduan instalasi dan pengembangan bagi pengguna maupun pengembang.

---

### User Review & Critical Decisions

> [!IMPORTANT] Seluruh preferensi struktur, bahasa, dan gaya visual dokumentasi telah dikonfirmasi pada tahap klarifikasi sebelumnya.

- **Confirmed Decision 1 (Bahasa Dokumentasi)**: Seluruh isi `README.md` ditulis dalam **Bahasa Indonesia** yang jelas dan profesional dengan mempertahankan istilah teknis standar (React, Express, TypeScript, REST API) serta terminologi resmi bahasa Jepang (*Bunkei*, *Reibun*, *Kaiwa*, *Kotoba*, *Kakijun*, *Furigana*).
- **Confirmed Decision 2 (Cakupan Audiens)**: Dokumentasi disusun **lengkap untuk Pengguna dan Developer**, mencakup panduan fitur belajar interaktif hingga detail arsitektur sistem, manajemen state, variabel lingkungan, skrip perintah, dan kontrak endpoint backend.
- **Confirmed Decision 3 (Format & Elemen Visual)**: Menggunakan format Markdown kaya visual berupa **Badges teknologi**, **Daftar Isi (Table of Contents)** ber-tautan langsung, **tabel terstruktur**, serta **diagram arsitektur ASCII** agar mudah dipindai dan dipahami dengan cepat.

---

### 1. Overview & Core Concept

- **What It Does**: Menghadirkan satu sumber kebenaran (*single source of truth*) pada root proyek yang mendokumentasikan secara menyeluruh aplikasi pembelajaran bahasa Jepang tingkat **JLPT N5** berbasis kurikulum autentik *Minna no Nihongo Shokyu I (Bab 1–25)* dan *Kanji Master N5 (Arc Academy, 15 Bab Tematik)*.
- **Target Audience / Persona**:
  - **Pembelajar / Pengguna Akhir**: Ingin memahami seluruh modul belajar (Materi Minna, Kotoba, Kanji Master, Konjugasi, Simulasi Ujian, dan Tanya Sensei) beserta cara kerja fitur seperti *Furigana mengambang* dan *Kanvas Masume*.
  - **Developer / Kontributor**: Membutuhkan gambaran cepat mengenai *tech stack*, alur data frontend–backend, mekanisme pemutaran audio *HTTP Range 206*, persistensi `localStorage`, serta langkah menjalankan server secara lokal maupun produksi.
- **Key Value**: Menghilangkan kebutuhan menelusuri kode sumber secara manual untuk memahami skala konten, arsitektur sistem, dan persyaratan konfigurasi lingkungan (`GEMINI_API_KEY`).

---

### 2. User Experience & Visual Design

- **Reader Flow (Alur Pembacaan Terstruktur)**:
  1. **Header & Badges**: Judul proyek, deskripsi singkat sesuai identitas resmi aplikasi, serta lencana teknologi (*React 19*, *TypeScript*, *Vite 8*, *Tailwind CSS v4*, *Express*, *Google Gemini API*).
  2. **Daftar Isi (Table of Contents)**: Navigasi cepat ke setiap bab utama dokumentasi.
  3. **Ikhtisar Kurikulum & Statistik Konten**: Ringkasan angka terverifikasi langsung dari basis data aplikasi (**25 Bab** *Minna no Nihongo I*, **606 Kosakata** *Kotoba*, **118 Karakter Kanji**, **139 Kata Kerja** Konjugasi, **20 Soal** Simulasi Ujian JLPT N5, dan **2.417 Klip Audio** *Azure Neural TTS*).
  4. **Panduan Fitur Utama**: Penjelasan mendetail tiap tab navigasi (*Materi Minna*, *Kotoba*, *Kanji Master N5*, *Tabel Konjugasi*, *Simulasi Ujian N5*, dan *Tanya Sensei*) lengkap dengan mode latihan interaktifnya.
  5. **Arsitektur Sistem & Aliran Data**: Diagram ASCII yang memetakan hubungan antarmuka pengguna, utilitas audio/furigana, penyimpanan lokal, serta server proxy backend ke Gemini API.
  6. **Spesifikasi Teknis & Panduan Developer**: Prasyarat perangkat lunak, tabel variabel lingkungan, daftar perintah skrip proyek, struktur direktori tingkat tinggi, skema persistensi `localStorage`, dan dokumentasi endpoint `/api/ai-sensei`.
- **Visual Style & Formatting**:
  - Menggunakan tabel Markdown untuk perbandingan cepat (statistik kurikulum, daftar skrip, variabel lingkungan, dan kunci `localStorage`).
  - Menggunakan blok kutipan (`> [!NOTE]` / catatan penting) untuk informasi krusial seperti konfigurasi kunci API dan perilaku audio offline/bundle.
  - Blok diagram kotak ASCII yang bersih agar tampil konsisten di editor kode maupun pratinjau GitHub/AI Studio.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Memverifikasi Seluruh Metrik Konten dari Data Aktual**
  - *Chosen Approach*: Mencantumkan angka pasti berdasarkan dataset terverifikasi (misalnya 606 entri Kotoba, 118 Kanji dalam 15 Bab, 139 kata kerja konjugasi, 20 soal ujian dalam 3 seksi, dan 2.417 klip audio dalam bundel MP3 17,28 MB).
  - *Why*: Menjaga akurasi dokumentasi dan menghindari klaim angka perkiraan yang tidak sinkron dengan aplikasi berjalan.
  - *Alternatives Considered*: Menggunakan angka generik atau estimasi kasar (ditolak karena mengurangi kredibilitas dokumentasi teknis).

- **Decision 2: Menjelaskan Mekanisme Khusus (Packed Audio Bundle & Furigana Engine)**
  - *Chosen Approach*: Menyediakan sub-bagian khusus yang menjelaskan cara kerja pemutar audio (*FNV-1a hash* + *HTTP Range 206* pada bundel MP3 tunggal dengan fallback *full-buffer*) serta cara kerja parser *Furigana* (`Kanji[furigana]`, penyelarasan blok kana, dan kamus fallback N5).
  - *Why*: Kedua mekanisme tersebut merupakan keunggulan teknis utama aplikasi yang tidak langsung terlihat hanya dari daftar dependensi standar.
  - *Alternatives Considered*: Hanya mencantumkan daftar pustaka npm (ditolak karena tidak menjelaskan arsitektur inti aplikasi).

- **Decision 3: Cakupan Tunggal pada File `README.md` Tanpa Mengubah Kode Aplikasi**
  - *Chosen Approach*: Hanya membuat dokumentasi `README.md` di root workspace tanpa menyentuh logika aplikasi, tampilan UI, ataupun konfigurasi build.
  - *Why*: Memenuhi permintaan pengguna secara presisi dan aman tanpa risiko regresi pada aplikasi yang sudah stabil.
  - *Alternatives Considered*: Memecah dokumentasi ke banyak file terpisah (ditolak karena pengguna secara spesifik meminta satu file `README.md` yang menerangkan semua tentang proyek).

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram (Model yang Akan Didokumentasikan)**:

```
┌───────────────────────────────────────────────────────────────────────────┐
│                     KLIEN SPA (React 19 + Vite + Tailwind v4)             │
├───────────────────────────────────────────────────────────────────────────┤
│  Navigasi & State Global                                                  │
│  • 6 Tab Utama: Minna | Kotoba | Kanji | Konjugasi | Ujian | Tanya Sensei │
│  • Preferensi Tampilan: Show/Hide Furigana & Romaji                       │
│  • Persistensi Lokal (localStorage): Progres Bab, Hafalan, Bookmark, Skor │
├───────────────────────────────┬───────────────────────────────────────────┤
│  Modul Utilitas Inti          │  Dataset Kurikulum Statis                 │
│  • Mesin Furigana (<ruby> &   │  • 25 Bab Minna no Nihongo I + Latihan    │
│    Tooltip Mengambang)        │  • 606 Kotoba N5 + PDF Modul Bab 1–50     │
│  • Kanvas Kanji Masume        │  • 118 Kanji Master N5 (15 Bab + Latihan) │
│    (4 Kuadran + Undo/Brush)   │  • 139 Kata Kerja (Golongan I, II, III)   │
│  • Pemutar Audio Bundle       │  • 20 Soal Simulasi JLPT N5 (180 Poin)    │
│    (FNV-1a Hash + Range 206)  │                                           │
└──────────────┬────────────────┴────────────────────────┬──────────────────┘
               │ Fetch Range / JSON                      │ POST /api/ai-sensei
               ▼                                         ▼
┌──────────────────────────────┐        ┌───────────────────────────────────┐
│  Aset Statis Publik          │        │  SERVER EXPRESS (server.ts)       │
│  • Bundel Audio MP3 (17,28MB)│        │  • Vite Middleware (Mode Dev)     │
│  • Indeks Offset 2.417 Klip  │        │  • Static Serving dist/ (Prod)    │
│  • Modul PDF Kotoba          │        │  • Proxy Gemini API (Tanaka-sensei│
└──────────────────────────────┘        │    via @google/genai)             │
                                        └───────────────────────────────────┘
```

- **Data Model & State**: Dokumentasi akan merangkum seluruh kunci `localStorage` beserta fungsi masing-masing (penyimpanan progres bab selesai, kanji dikuasai, kotoba dihafal, bookmark kosakata & kanji, preferensi Furigana/Romaji, dan maksimal 5 riwayat skor ujian terakhir).
- **API & Integration Mapping**: Menjelaskan kontrak permintaan (`prompt`, `type`, `chapterContext`, `history`, `kanjiMode`) dan respons JSON pada endpoint `POST /api/ai-sensei` termasuk penanganan error `400`, `401`, dan `500` serta instruksi sistem untuk mode `grammar`, `correction`, dan `kaiwa`.
- **Execution & Verification Strategy**: Setelah rencana disetujui pada tahap eksekusi, `README.md` akan dibuat secara lengkap di root proyek dan ditinjau ulang kelengkapan tautan Daftar Isi, akurasi perintah skrip, serta keterbacaan format Markdown-nya.
