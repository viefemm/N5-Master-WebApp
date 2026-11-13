import { ExamQuestion } from '../types';

export const examQuestions: ExamQuestion[] = [
  // SEKSI 1: MOJI & GOI (Huruf & Kosakata - 8 Soal)
  {
    id: 'ex-1',
    section: 'moji-goi',
    subSection: 'Cara Baca Kanji (漢字読み)',
    questionText:
      '問題１：＿＿＿の言葉はどう読みますか。１・２・３・４からいちばんいいものを一つ選んでください。\n\n昨日、新しい【本】を買いました。',
    options: ['ほん', 'ぼん', 'ぽん', 'き'],
    correctIndex: 0,
    explanation: 'Kanji【本】buku dibaca "ほん" (hon). Jika diberi garis di bawah tengah adalah 木 (き - pohon).',
  },
  {
    id: 'ex-2',
    section: 'moji-goi',
    subSection: 'Cara Baca Kanji (漢字読み)',
    questionText: '【毎朝】６時に起きます。',
    options: ['まいばん', 'まいあさ', 'まいひる', 'まいよる'],
    correctIndex: 1,
    explanation: 'Kanji【毎朝】setiap pagi dibaca "まいあさ" (maiasa).',
  },
  {
    id: 'ex-3',
    section: 'moji-goi',
    subSection: 'Cara Baca Kanji (漢字読み)',
    questionText: '駅の【東口】で友だちと会います。',
    options: ['にしぐち', 'ひがしぐち', 'みなみぐち', 'きたぐち'],
    correctIndex: 1,
    explanation: 'Kanji【東口】(pintu keluar timur) dalam Bab 13 Kanji Master N5 dibaca "ひがしぐち" (higashiguchi).',
  },
  {
    id: 'ex-4',
    section: 'moji-goi',
    subSection: 'Penulisan Kanji (漢字表記)',
    questionText:
      '問題２：＿＿＿の言葉は漢字でどう書きますか。\n\n公園に【おとこのこ】が三人います。',
    options: ['女の人', '男の子', '女の子', '男の人'],
    correctIndex: 1,
    explanation: 'Kata "おとこのこ" (anak laki-laki) ditulis dengan kanji【男の子】(Bab 8 Kanji Master N5).',
  },
  {
    id: 'ex-5',
    section: 'moji-goi',
    subSection: 'Penulisan Kanji (漢字表記)',
    questionText: 'このシャツは【やすくて】いいです。',
    options: ['高くて', '安くて', '古くて', '長くて'],
    correctIndex: 1,
    explanation: 'Kata sifat "やすい" (murah) dalam bentuk sambung "やすくて" ditulis【安くて】(Bab 15 Kanji Master N5).',
  },
  {
    id: 'ex-6',
    section: 'moji-goi',
    subSection: 'Penulisan Kanji (漢字表記)',
    questionText: 'きのうの夜、【あめ】がたくさん降りました。',
    options: ['雨', '雪', '雲', '電'],
    correctIndex: 0,
    explanation: 'Kata "あめ" (hujan) ditulis dengan kanji【雨】(Bab 4 Kanji Master N5).',
  },
  {
    id: 'ex-7',
    section: 'moji-goi',
    subSection: 'Kontekstual Kosakata (文脈規定)',
    questionText:
      '問題３：（　）に何を入れますか。一番いいものを一つ選んでください。\n\n朝起きて、顔を（　　）。',
    options: ['のみました', 'あらいました', 'たべました', 'よみました'],
    correctIndex: 1,
    explanation: 'Mencuci muka menggunakan kata kerja 顔を洗う (かおを あらう) → あらいました.',
  },
  {
    id: 'ex-8',
    section: 'moji-goi',
    subSection: 'Kontekstual Kosakata (文脈規定)',
    questionText: '部屋が暗いですから、電気を（　　）ください。',
    options: ['あけて', 'しめて', 'つけて', 'きって'],
    correctIndex: 2,
    explanation: 'Menyalakan lampu menggunakan ungkapan 電気をつける (でんきを つける) → つけてください (Bab 14 Minna no Nihongo).',
  },

  // SEKSI 2: BUNPOU (Tata Bahasa & Susun Bintang ★ - 8 Soal)
  {
    id: 'ex-9',
    section: 'bunpou',
    subSection: 'Tata Bahasa Kalimat (文法形式の判断)',
    questionText:
      '問題４：（　）に何を入れますか。\n\n私は日曜日（　　）どこへも行きませんでした。',
    options: ['に', 'は', 'で', 'を'],
    correctIndex: 0,
    explanation: 'Pada titik waktu hari tertentu (日曜日), digunakan partikel に (nichiyoubi ni).',
  },
  {
    id: 'ex-10',
    section: 'bunpou',
    subSection: 'Tata Bahasa Kalimat (文法形式の判断)',
    questionText: '図書館（　　）静かに本を読みます。',
    options: ['へ', 'に', 'で', 'を'],
    correctIndex: 2,
    explanation: 'Tempat berlangsungnya suatu aksi atau kegiatan menggunakan partikel で (toshokan de - Bab 6 Minna no Nihongo).',
  },
  {
    id: 'ex-11',
    section: 'bunpou',
    subSection: 'Tata Bahasa Kalimat (文法形式の判断)',
    questionText: 'ミラーさんはギターを（　　）ことができます。',
    options: ['ひく', 'ひきます', 'ひいて', 'ひいた'],
    correctIndex: 0,
    explanation: 'Pola menyatakan kemampuan (Bab 18 Minna no Nihongo) menggunakan [Kata Kerja Bentuk Kamus / Jisho-kei] + ことができます → ひくことができます.',
  },
  {
    id: 'ex-12',
    section: 'bunpou',
    subSection: 'Tata Bahasa Kalimat (文法形式の判断)',
    questionText: 'すみませんが、この漢字の読み方を（　　）ください。',
    options: ['教えて', '教える', '教えない', '教えた'],
    correctIndex: 0,
    explanation: 'Pola permohonan sopan menggunakan kata kerja bentuk -Te + ください: 教えてください (Bab 14 Minna no Nihongo).',
  },
  {
    id: 'ex-13',
    section: 'bunpou',
    subSection: 'Tata Bahasa Kalimat (文法形式の判断)',
    questionText: 'あした雨が（　　）、サッカーをしません。',
    options: ['降ったら', '降っても', '降りたり', '降るまえに'],
    correctIndex: 0,
    explanation: 'Kalimat pengandaian bersyarat "Jika besok turun hujan, tidak bermain sepak bola" menggunakan pola ～たら: 降ったら (Bab 25 Minna no Nihongo).',
  },
  {
    id: 'ex-14',
    section: 'bunpou',
    subSection: 'Susun Kalimat Bintang (文の組み立て ★)',
    questionText:
      '問題５：★に入るものはどれですか。\n\n私＿＿　＿＿　★　＿＿行きます。\n1: と　2: は　3: 友だち　4: デパートへ',
    options: ['1: と', '2: は', '3: 友だち', '4: デパートへ'],
    correctIndex: 0,
    explanation: 'Urutan kalimat yang utuh: 私 は (2) 友だち (3) と (1:★) デパートへ (4) 行きます。 Posisi bintang ★ adalah kata "と" (Pilihan 1).',
  },
  {
    id: 'ex-15',
    section: 'bunpou',
    subSection: 'Susun Kalimat Bintang (文の組み立て ★)',
    questionText:
      '昨日の＿＿　＿＿　★　＿＿ませんでした。\n1: は　2: 晩　3: 勉強し　4: あまり',
    options: ['1: は', '2: 晩', '3: 勉強し', '4: あまり'],
    correctIndex: 3,
    explanation: 'Urutan kalimat: 昨日の 晩 (2) は (1) あまり (4:★) 勉強し (3) ませんでした。 Posisi bintang ★ adalah "あまり" (Pilihan 4).',
  },
  {
    id: 'ex-16',
    section: 'bunpou',
    subSection: 'Susun Kalimat Bintang (文の組み立て ★)',
    questionText:
      'これは＿＿　＿＿　★　＿＿ケーキです。\n1: 作った　2: が　3: 母　4: きのう',
    options: ['1: 作った', '2: が', '3: 母', '4: きのう'],
    correctIndex: 0,
    explanation: 'Klausa relatif penjelas kata benda (Bab 22): これは きのう (4) 母 (3) が (2) 作った (1:★) ケーキです ("Ini adalah kue yang dibuat Ibu kemarin"). Posisi ★ adalah "作った".',
  },

  // SEKSI 3: DOKKAI (Pemahaman Membaca Teks Pendek - 4 Soal)
  {
    id: 'ex-17',
    section: 'dokkai',
    subSection: 'Teks Pendek (短文読解)',
    passage:
      '私はマイク・ミラーです。毎朝６時半に起きて、パンと卵を食べます。コーヒーを飲みます。それから新聞を読んで、７時半にうちを出ます。会社まで電車で４０分かかります。会社は８時半から５時半までです。',
    questionText: '質問：ミラーさんは何時にうちを出ますか。',
    options: ['６時半', '７時半', '８時半', '５時半'],
    correctIndex: 1,
    explanation: 'Pada teks tertulis jelas:「７時半にうちを出ます」(pukul 7:30 berangkat meninggalkan rumah).',
  },
  {
    id: 'ex-18',
    section: 'dokkai',
    subSection: 'Teks Memo Pesan (メモ読解)',
    passage:
      '【サントスさんへ】\n机の上に、きのう借りた日本語の辞書を置きました。どうもありがとうございました。とても役に立ちました。\nそれから、今日のお昼は１２時に１階の食堂で食べませんか。\n１１月１２日　ミラーより',
    questionText: '質問：ミラーさんはサントスさんに何を返しましたか。',
    options: ['日本語の辞書', '英語の新聞', 'お弁当', 'カメラ'],
    correctIndex: 0,
    explanation: 'Pada memo tertulis:「机の上に、きのう借りた日本語の辞書を置きました」(Saya telah meletakkan kamus bahasa Jepang yang saya pinjam kemarin di atas meja).',
  },
  {
    id: 'ex-19',
    section: 'dokkai',
    subSection: 'Teks Informasi & Pengumuman (情報検索)',
    passage:
      '【日本語クラスの お知らせ】\n・日時：毎週土曜日　午前１０時～１２時\n・場所：市民センター３階　第２教室\n・お金：無料（０円）\n・持ち物：筆記用具、ノート\n※参加したい人は金曜日までに電話してください。',
    questionText: '質問：日本語クラスに参加したい人は、何をしなければなりませんか。',
    options: [
      '土曜日の朝にお金を払う。',
      '金曜日までに電話をする。',
      '土曜日に本を買う。',
      '市民センターへ行って部屋を予約する。',
    ],
    correctIndex: 1,
    explanation: 'Pada pengumuman tertulis:「※参加したい人は金曜日までに電話してください」(Yang ingin ikut harap menelepon paling lambat hari Jumat).',
  },
  {
    id: 'ex-20',
    section: 'dokkai',
    subSection: 'Teks Pengalaman Liburan (日記読解)',
    passage:
      '先週の日曜日に、友だちの山田さんと京都へ遊びに行きました。朝早く電車で行きました。京都で有名なお寺を三つ見ました。昼ごはんは駅の近くのレストランで魚料理を食べました。とても美味しかったです。でも、夕方から雨が降りましたから、早く帰りました。',
    questionText: '質問：どうして早く帰りましたか。',
    options: [
      'お寺が休みだったからです。',
      '魚料理が高くなかったからです。',
      '夕方から雨が降ったからです。',
      '電車の時間がなかったからです。',
    ],
    correctIndex: 2,
    explanation: 'Di kalimat terakhir tertulis:「夕方から雨が降りましたから、早く帰りました」(Karena sejak sore turun hujan, kami pulang lebih awal).',
  },
];
