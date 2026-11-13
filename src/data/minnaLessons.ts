import { MinnaLesson } from '../types';

export const minnaLessons: MinnaLesson[] = [
  {
    chapter: 1,
    titleId: 'Bab 1: Perkenalan Diri & Kalimat Nominal',
    titleJp: '第1課：自己紹介・名詞文',
    description: 'Mempelajari cara memperkenalkan diri, menyatakan nama, kebangsaan, profesi, serta penggunaan partikel は (wa), も (mo), の (no), dan akhiran です (desu).',
    summaryGrammar: [
      'N1 は N2 です (N1 adalah N2)',
      'N1 は N2 じゃありません / ではありません (N1 bukan N2)',
      'N1 は N2 ですか (Apakah N1 adalah N2?)',
      'N も (N juga)',
      'N1 の N2 (N2 milik/bagian dari N1)',
      'Akhiran penghormatan: ～さん'
    ],
    vocab: [
      { id: '1-1', kanji: '私', kana: 'わたし', romaji: 'watashi', indonesian: 'saya', wordType: 'kata benda', exampleJp: '私はマイク・ミラーです。', exampleKana: 'わたしはマイク・ミラーです。', exampleRomaji: 'Watashi wa Maiku Miraa desu.', exampleId: 'Saya adalah Mike Miller.' },
      { id: '1-2', kanji: '貴方', kana: 'あなた', romaji: 'anata', indonesian: 'anda / kamu', wordType: 'kata benda', exampleJp: 'あなたは学生ですか。', exampleKana: 'あなたはがくせいですか。', exampleRomaji: 'Anata wa gakusei desu ka.', exampleId: 'Apakah Anda seorang mahasiswa?' },
      { id: '1-3', kanji: '人', kana: 'ひと (あのひと)', romaji: 'hito (ano hito)', indonesian: 'orang (orang itu)', wordType: 'kata benda', exampleJp: 'あの人は誰ですか。', exampleKana: 'あのひとはだれですか。', exampleRomaji: 'Ano hito wa dare desu ka.', exampleId: 'Orang itu siapa?' },
      { id: '1-4', kanji: '先生', kana: 'せんせい', romaji: 'sensei', indonesian: 'guru / dosen (panggilan/profesi orang lain)', wordType: 'kata benda', exampleJp: '田中先生は日本人です。', exampleKana: 'たなかせんせいはにほんじんです。', exampleRomaji: 'Tanaka-sensei wa nihonjin desu.', exampleId: 'Pak Guru Tanaka adalah orang Jepang.' },
      { id: '1-5', kanji: '教師', kana: 'きょうし', romaji: 'kyoushi', indonesian: 'guru / pengajar (profesi diri sendiri)', wordType: 'kata benda', exampleJp: '私は日本語の教師です。', exampleKana: 'わたしはにほんごのきょうしです。', exampleRomaji: 'Watashi wa nihongo no kyoushi desu.', exampleId: 'Saya adalah pengajar bahasa Jepang.' },
      { id: '1-6', kanji: '学生', kana: 'がくせい', romaji: 'gakusei', indonesian: 'mahasiswa / pelajar', wordType: 'kata benda', exampleJp: 'サントスさんは学生じゃありません。', exampleKana: 'サントスさんはがくせいじゃありません。', exampleRomaji: 'Santosu-san wa gakusei ja arimasen.', exampleId: 'Tuan Santos bukan mahasiswa.' },
      { id: '1-7', kanji: '会社員', kana: 'かいしゃいん', romaji: 'kaishain', indonesian: 'pegawai perusahaan', wordType: 'kata benda', exampleJp: 'ミラーさんはIMCの社員です。', exampleKana: 'ミラーさんはIMCのしゃいんです。', exampleRomaji: 'Miraa-san wa IMC no shain desu.', exampleId: 'Miller adalah pegawai IMC.' },
      { id: '1-8', kanji: '社員', kana: 'しゃいん', romaji: 'shain', indonesian: 'karyawan (dipakai bersama nama perusahaan)', wordType: 'kata benda' },
      { id: '1-9', kanji: '銀行員', kana: 'ぎんこういん', romaji: 'ginkouin', indonesian: 'pegawai bank', wordType: 'kata benda' },
      { id: '1-10', kanji: '医者', kana: 'いしゃ', romaji: 'isha', indonesian: 'dokter', wordType: 'kata benda' },
      { id: '1-11', kanji: '研究者', kana: 'けんきゅうしゃ', romaji: 'kenkyuusha', indonesian: 'peneliti', wordType: 'kata benda' },
      { id: '1-12', kanji: '大学', kana: 'だいがく', romaji: 'daigaku', indonesian: 'universitas', wordType: 'kata benda' },
      { id: '1-13', kanji: '病院', kana: 'びょういん', romaji: 'byouin', indonesian: 'rumah sakit', wordType: 'kata benda' },
      { id: '1-14', kanji: '誰', kana: 'だれ (どなた)', romaji: 'dare (donata)', indonesian: 'siapa (donata lebih sopan)', wordType: 'kata benda' },
      { id: '1-15', kanji: '歳', kana: '～さい / なんさい (おいくつ)', romaji: '~sai / nansai (oikutsu)', indonesian: 'umur ... tahun / berapa umurnya?', wordType: 'kata benda' },
      { id: '1-16', kanji: '日本', kana: 'にほん / にっぽん', romaji: 'nihon / nippon', indonesian: 'Jepang', wordType: 'kata benda' },
      { id: '1-17', kanji: 'インドネシア', kana: 'インドネシア', romaji: 'Indoneshia', indonesian: 'Indonesia', wordType: 'kata benda' },
      { id: '1-18', kanji: '初めまして', kana: 'はじめまして', romaji: 'hajimemashite', indonesian: 'Senang berkenalan dengan Anda (salam awal perkenalan)', wordType: 'ungkapan' },
      { id: '1-19', kanji: 'どうぞよろしく', kana: 'どうぞよろしく[おねがいします]', romaji: 'douzo yoroshiku [onegaishimasu]', indonesian: 'Mohon bimbingan dan kerja samanya', wordType: 'ungkapan' }
    ],
    bunkei: [
      {
        id: '1-b1',
        title: 'Kalimat Positif: N1 は N2 です',
        pattern: 'N1 は N2 です',
        explanation: 'Partikel「は」(dibaca wa) berfungsi sebagai penanda TOPIK pembicaraan.「です」(desu) diletakkan di akhir kalimat untuk menyatakan penegasan sopan (predikat nominal).',
        formula: 'Subjek/Topik + は + Predikat Nominal + です',
        reibun: [
          { japanese: '私はマイク・ミラーです。', kana: 'わたしはマイク・ミラーです。', romaji: 'Watashi wa Maiku Miraa desu.', indonesian: 'Saya adalah Mike Miller.' },
          { japanese: 'ワンさんは医者です。', kana: 'ワンさんはいしゃです。', romaji: 'Wan-san wa isha desu.', indonesian: 'Tuan Wang adalah seorang dokter.' },
          { japanese: 'カリナさんはインドネシア人です。', kana: 'カリナさんはインドネシアじんです。', romaji: 'Karina-san wa Indoneshia-jin desu.', indonesian: 'Karina adalah orang Indonesia.' }
        ]
      },
      {
        id: '1-b2',
        title: 'Kalimat Negatif: N1 は N2 じゃありません',
        pattern: 'N1 は N2 じゃありません / ではありません',
        explanation: 'Bentuk negatif dari「です」adalah「じゃありません」(percakapan sehari-hari) atau「ではありません」(lebih formal/tertulis).',
        formula: 'Subjek + は + Predikat + じゃありません',
        reibun: [
          { japanese: 'サントスさんは学生じゃありません。', kana: 'サントスさんはがくせいじゃありません。', romaji: 'Santosu-san wa gakusei ja arimasen.', indonesian: 'Tuan Santos bukan seorang mahasiswa.' },
          { japanese: 'ミラーさんは会社員ではありません。', kana: 'ミラーさんはかいしゃいんではありません。', romaji: 'Miraa-san wa kaishain dewa arimasen.', indonesian: 'Miller bukan pegawai perusahaan (formal).' }
        ]
      },
      {
        id: '1-b3',
        title: 'Kalimat Tanya: N1 は N2 ですか',
        pattern: 'N1 は N2 ですか',
        explanation: 'Partikel「か」(ka) berfungsi seperti tanda tanya (?) dalam bahasa Indonesia. Intonasi akhir kalimat sedikit naik.',
        reibun: [
          { japanese: 'ミラーさんはアメリカ人ですか。…はい、アメリカ人です。', kana: 'ミラーさんはアメリカじんですか。…はい、アメリカじんです。', romaji: 'Miraa-san wa amerikajin desu ka. ...Hai, amerikajin desu.', indonesian: 'Apakah Miller orang Amerika? ...Ya, orang Amerika.' },
          { japanese: 'あの人は誰ですか。…木村さんです。', kana: 'あのひとはだれですか。…きむらさんです。', romaji: 'Ano hito wa dare desu ka. ...Kimura-san desu.', indonesian: 'Orang itu siapa? ...Ibu Kimura.' }
        ]
      },
      {
        id: '1-b4',
        title: 'Partikel も (mo - Juga) & の (no - Kepemilikan/Afiliasi)',
        pattern: 'N1 も / N1 の N2',
        explanation: '「も」menggantikan「は」ketika predikatnya sama ("juga").「の」menghubungkan dua kata benda untuk kepemilikan, asal instansi, atau penjelasan.',
        reibun: [
          { japanese: 'グプタさんも会社員です。', kana: 'グプタさんもかいしゃいんです。', romaji: 'Guputa-san mo kaishain desu.', indonesian: 'Tuan Gupta juga seorang pegawai kantor.' },
          { japanese: 'ミラーさんはIMCの社員です。', kana: 'ミラーさんはIMCのしゃいんです。', romaji: 'Miraa-san wa IMC no shain desu.', indonesian: 'Miller adalah pegawai dari perusahaan IMC.' }
        ]
      }
    ],
    kaiwa: {
      title: '初めまして (Hajimemashite - Senang Berkenalan)',
      situation: 'Mike Miller baru pertama kali tiba di kantor IMC Jepang dan memperkenalkan diri kepada rekan kerja barunya, Sato Keiko.',
      dialogue: [
        { speaker: '佐藤', role: 'Pegawai IMC', japanese: 'おはようございます。', kana: 'おはようございます。', romaji: 'Ohayou gozaimasu.', indonesian: 'Selamat pagi.' },
        { speaker: 'ミラー', role: 'Pegawai Baru', japanese: 'おはようございます。初めまして。マイク・ミラーです。アメリカから来ました。どうぞよろしく。', kana: 'おはようございます。はじめまして。マイク・ミラーです。アメリカからきました。どうぞよろしく。', romaji: 'Ohayou gozaimasu. Hajimemashite. Maiku Miraa desu. Amerika kara kimashita. Douzo yoroshiku.', indonesian: 'Selamat pagi. Senang berkenalan dengan Anda. Saya Mike Miller. Berasal dari Amerika Serikat. Mohon bantuannya.' },
        { speaker: '佐藤', role: 'Pegawai IMC', japanese: '佐藤けい子です。どうぞよろしくお願いします。', kana: 'さとうけいこです。どうぞよろしくおねがいします。', romaji: 'Satou Keiko desu. Douzo yoroshiku onegaishimasu.', indonesian: 'Saya Keiko Sato. Senang berkenalan dengan Anda, mohon kerja samanya juga.' }
      ]
    },
    exercises: [
      {
        id: '1-e1',
        type: 'multiple-choice',
        question: 'Pilihlah partikel yang tepat: わたし ____ ミラーです。',
        options: ['は', 'が', 'を', 'に'],
        correctAnswer: 'は',
        explanation: 'Partikel は (dibaca "wa") digunakan sebagai penanda topik utama kalimat "Saya adalah Miller".'
      },
      {
        id: '1-e2',
        type: 'multiple-choice',
        question: 'Bentuk negatif dari "がくせい です" yang benar adalah...',
        options: ['がくせい じゃありません', 'がくせい ですか', 'がくせい ありませんでした', 'がくせい じゃない'],
        correctAnswer: 'がくせい じゃありません',
        explanation: 'Dalam bentuk sopan dasar Minna no Nihongo, negasi dari です adalah じゃありません (atau ではありません).'
      },
      {
        id: '1-e3',
        type: 'sentence-order',
        question: 'Susunlah kata-kata berikut menjadi kalimat: "Apakah orang itu seorang dokter?"',
        words: ['あの人は', '医者', 'ですか', '誰'],
        correctAnswer: ['あの人は', '医者', 'ですか'],
        explanation: 'Urutan yang benar: あの人は (Orang itu) + 医者 (dokter) + ですか (apakah?).'
      }
    ]
  },
  {
    chapter: 2,
    titleId: 'Bab 2: Menunjuk Benda (Kore, Sore, Are, Kono, Sono, Ano)',
    titleJp: '第2課：指示詞（これ・それ・あれ・この・その・あの）',
    description: 'Menunjuk benda di dekat pembicara (kore), lawan bicara (sore), jauh dari keduanya (are), serta kata penunjuk atributif kono/sono/ano + kata benda.',
    summaryGrammar: [
      'これ / それ / あれ は N です (Ini / Itu / Itu jauh adalah N)',
      'この / その / あの N は ... です (Benda ini / itu ...)',
      'そう です / そうじゃありません (Benar demikian / Bukan)',
      'N1 ですか、N2 ですか (Kalimat pilihan: Apakah N1 atau N2?)',
      'N1 の N2 (Kepemilikan benda & isi buku/kaset)',
      'この本は 私の です (Buku ini adalah milik saya - penyingkatan N)'
    ],
    vocab: [
      { id: '2-1', kanji: 'これ', kana: 'これ', romaji: 'kore', indonesian: 'ini (dekat pembicara)', wordType: 'kata benda' },
      { id: '2-2', kanji: 'それ', kana: 'それ', romaji: 'sore', indonesian: 'itu (dekat lawan bicara)', wordType: 'kata benda' },
      { id: '2-3', kanji: 'あれ', kana: 'あれ', romaji: 'are', indonesian: 'itu (jauh dari keduanya)', wordType: 'kata benda' },
      { id: '2-4', kanji: 'この', kana: 'この', romaji: 'kono', indonesian: '... ini (harus diikuti kata benda)', wordType: 'kata benda' },
      { id: '2-5', kanji: 'その', kana: 'その', romaji: 'sono', indonesian: '... itu (harus diikuti kata benda)', wordType: 'kata benda' },
      { id: '2-6', kanji: 'あの', kana: 'あの', romaji: 'ano', indonesian: '... itu jauh (harus diikuti kata benda)', wordType: 'kata benda' },
      { id: '2-7', kanji: '本', kana: 'ほん', romaji: 'hon', indonesian: 'buku', wordType: 'kata benda' },
      { id: '2-8', kanji: '辞書', kana: 'じしょ', romaji: 'jisho', indonesian: 'kamus', wordType: 'kata benda' },
      { id: '2-9', kanji: '雑誌', kana: 'ざっし', romaji: 'zasshi', indonesian: 'majalah', wordType: 'kata benda' },
      { id: '2-10', kanji: '新聞', kana: 'しんぶん', romaji: 'shinbun', indonesian: 'surat kabar / koran', wordType: 'kata benda' },
      { id: '2-11', kanji: '手帳', kana: 'てちょう', romaji: 'techou', indonesian: 'buku catatan saku / agenda', wordType: 'kata benda' },
      { id: '2-12', kanji: '名刺', kana: 'めいし', romaji: 'meishi', indonesian: 'kartu nama', wordType: 'kata benda' },
      { id: '2-13', kanji: '鉛筆', kana: 'えんぴつ', romaji: 'enpitsu', indonesian: 'pensil', wordType: 'kata benda' },
      { id: '2-14', kanji: '時計', kana: 'とけい', romaji: 'tokei', indonesian: 'jam tangan / jam dinding', wordType: 'kata benda' },
      { id: '2-15', kanji: '傘', kana: 'かさ', romaji: 'kasa', indonesian: 'payung', wordType: 'kata benda' },
      { id: '2-16', kanji: '鞄', kana: 'かばん', romaji: 'kaban', indonesian: 'tas', wordType: 'kata benda' },
      { id: '2-17', kanji: '車', kana: 'くるま', romaji: 'kuruma', indonesian: 'mobil', wordType: 'kata benda' },
      { id: '2-18', kanji: '鍵', kana: 'かぎ', romaji: 'kagi', indonesian: 'kunci', wordType: 'kata benda' },
      { id: '2-19', kanji: '何', kana: 'なん / なに', romaji: 'nan / nani', indonesian: 'apa', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '2-b1',
        title: 'Kata Tunjuk Benda: これ / それ / あれ は N です',
        pattern: 'これ / それ / あれ は N です',
        explanation: 'これ (dekat pembicara), それ (dekat lawan bicara), あれ (jauh dari keduanya). Berdiri sendiri sebagai kata ganti benda.',
        reibun: [
          { japanese: 'これは辞書です。', kana: 'これはじしょです。', romaji: 'Kore wa jisho desu.', indonesian: 'Ini adalah kamus.' },
          { japanese: 'それは何ですか。…これは時計です。', kana: 'それはなんですか。…これはとけいです。', romaji: 'Sore wa nan desu ka. ...Kore wa tokei desu.', indonesian: 'Itu apa? ...Ini adalah jam tangan.' },
          { japanese: 'あれは私の車です。', kana: 'あれはわたしのくるまです。', romaji: 'Are wa watashi no kuruma desu.', indonesian: 'Itu (di sana) adalah mobil saya.' }
        ]
      },
      {
        id: '2-b2',
        title: 'Penggabungan Kata Tunjuk & Benda: この / その / あの + N',
        pattern: 'この / その / あの + N は ... です',
        explanation: 'Berbeda dengan これ/それ/あれ, kata この/その/あの HARUS langsung diikuti oleh kata benda.',
        reibun: [
          { japanese: 'この傘はあなたのですか。', kana: 'このかさはあなたのですか。', romaji: 'Kono kasa wa anata no desu ka.', indonesian: 'Apakah payung ini milik Anda?' },
          { japanese: 'あの人は誰ですか。…木村さんです。', kana: 'あのひとはだれですか。…きむらさんです。', romaji: 'Ano hito wa dare desu ka. ...Kimura-san desu.', indonesian: 'Orang itu siapa? ...Ibu Kimura.' }
        ]
      },
      {
        id: '2-b3',
        title: 'Kalimat Pilihan: N1 ですか、N2 ですか',
        pattern: 'A ですか、B ですか',
        explanation: 'Meminta lawan bicara memilih antara dua hal. Dalam menjawab, TIDAK menggunakan はい (hai) atau いいえ (iie), langsung sebutkan pilihannya.',
        reibun: [
          { japanese: 'これは「９」ですか、「７」ですか。…「７」です。', kana: 'これは「きゅう」ですか、「なな」ですか。…「なな」です。', romaji: 'Kore wa "kyuu" desu ka, "nana" desu ka. ..."Nana" desu.', indonesian: 'Apakah ini angka "9" atau "7"? ...Angka "7".' }
        ]
      }
    ],
    kaiwa: {
      title: 'これから お世話に なります (Mulai sekarang mohon kerja samanya)',
      situation: 'Santos (kamar 408) mengunjungi tetangga barunya, Yamada Ichirou, untuk memperkenalkan diri dan memberikan kopi sebagai salam perkenalan tetangga.',
      dialogue: [
        { speaker: '山田一郎', role: 'Penghuni Apartemen', japanese: 'はい。どなたですか。', kana: 'はい。どなたですか。', romaji: 'Hai. Donata desu ka.', indonesian: 'Ya. Siapakah di luar?' },
        { speaker: 'サントス', role: 'Tetangga Baru', japanese: '408の サントスです。', kana: 'よんまるはちの サントスです。', romaji: 'Yon-maru-hachi no Santosu desu.', indonesian: 'Saya Santos dari kamar 408.' },
        { speaker: 'サントス', role: 'Tetangga Baru', japanese: 'こんにちは。サントスです。これから お世話に なります。どうぞ よろしく お願いします。', kana: 'こんにちは。サントスです。これから おせわに なります。どうぞ よろしく おねがいします。', romaji: 'Konnichiwa. Santosu desu. Kore kara osewa ni narimasu. Douzo yoroshiku onegaishimasu.', indonesian: 'Selamat siang. Saya Santos. Mulai sekarang saya akan merepotkan Anda/mohon kerja samanya. Mohon bantuannya.' },
        { speaker: '山田一郎', role: 'Penghuni Apartemen', japanese: 'こちらこそ よろしく お願いします。', kana: 'こちらこそ よろしく おねがいします。', romaji: 'Kochira koso yoroshiku onegaishimasu.', indonesian: 'Sama-sama, saya juga mohon bantuannya.' },
        { speaker: 'サントス', role: 'Tetangga Baru', japanese: 'あのう、これ、コーヒーです。どうぞ。', kana: 'あのう、これ、コーヒーです。どうぞ。', romaji: 'Anou, kore, koohii desu. Douzo.', indonesian: 'Em, ini kopi (sedikit tanda mata). Silakan.' },
        { speaker: '山田一郎', role: 'Penghuni Apartemen', japanese: 'どうも ありがとう ございます。', kana: 'どうも ありがとう ございます。', romaji: 'Doumo arigatou gozaimasu.', indonesian: 'Terima kasih banyak.' }
      ]
    },
    exercises: [
      {
        id: '2-e1',
        type: 'multiple-choice',
        question: 'Lengkapi kalimat: "_____ かばんは わたしのです。" (dekat pembicara, melekat pada kata benda)',
        options: ['この', 'これ', 'ここ', 'そこ'],
        correctAnswer: 'この',
        explanation: 'Karena langsung diikuti kata benda "かばん", kita wajib memakai kata sifat penunjuk "この".'
      },
      {
        id: '2-e2',
        type: 'multiple-choice',
        question: 'A: それは 何の 本ですか。 B: ______________。',
        options: ['自動車の 本です', 'はい、本です', 'いいえ、辞書です', 'これです'],
        correctAnswer: '自動車の 本です',
        explanation: 'Pertanyaan "何の N" menanyakan tema/isi/kategori dari buku tersebut.'
      }
    ]
  },
  {
    chapter: 3,
    titleId: 'Bab 3: Menunjuk Tempat & Lokasi (Koko, Soko, Asoko, Doko)',
    titleJp: '第3課：場所の指示詞（ここ・そこ・あそこ・どこ）',
    description: 'Menunjuk lokasi tempat di sekitar kita, lantai gedung, negara asal, kantor/toko, serta menanyakan harga barang (ikura).',
    summaryGrammar: [
      'ここ / そこ / あそこ は N (tempat) です',
      'N は ここ / そこ / あそこ です',
      'どこ / どちら (Di mana / Bentuk sopan)',
      'N1 の N2 (Buatan mana / asal produk)',
      'これは いくら ですか (Berapa harganya?)'
    ],
    vocab: [
      { id: '3-1', kanji: 'ここ', kana: 'ここ', romaji: 'koko', indonesian: 'di sini (tempat pembicara)', wordType: 'kata benda' },
      { id: '3-2', kanji: 'そこ', kana: 'そこ', romaji: 'soko', indonesian: 'di situ (tempat lawan bicara)', wordType: 'kata benda' },
      { id: '3-3', kanji: 'あそこ', kana: 'あそこ', romaji: 'asoko', indonesian: 'di sana (jauh dari keduanya)', wordType: 'kata benda' },
      { id: '3-4', kanji: 'どこ', kana: 'どこ', romaji: 'doko', indonesian: 'di mana', wordType: 'kata benda' },
      { id: '3-5', kanji: '教室', kana: 'きょうしつ', romaji: 'kyoushitsu', indonesian: 'ruang kelas', wordType: 'kata benda' },
      { id: '3-6', kanji: '食堂', kana: 'しょくどう', romaji: 'shokudou', indonesian: 'kantin / ruang makan', wordType: 'kata benda' },
      { id: '3-7', kanji: '事務所', kana: 'じむしょ', romaji: 'jimusho', indonesian: 'kantor', wordType: 'kata benda' },
      { id: '3-8', kanji: '会議室', kana: 'かいぎしつ', romaji: 'kaigishitsu', indonesian: 'ruang rapat', wordType: 'kata benda' },
      { id: '3-9', kanji: '受付', kana: 'うけつけ', romaji: 'uketsuke', indonesian: 'resepsionis / meja informasi', wordType: 'kata benda' },
      { id: '3-10', kanji: '部屋', kana: 'へや', romaji: 'heya', indonesian: 'kamar', wordType: 'kata benda' },
      { id: '3-11', kanji: 'お手洗い', kana: 'おてあらい (トイレ)', romaji: 'otearai (toire)', indonesian: 'toilet / kamar kecil', wordType: 'kata benda' },
      { id: '3-12', kanji: '階段', kana: 'かいだん', romaji: 'kaidan', indonesian: 'tangga', wordType: 'kata benda' },
      { id: '3-13', kanji: 'エレベーター', kana: 'エレベーター', romaji: 'erebeetaa', indonesian: 'lift / elevator', wordType: 'kata benda' },
      { id: '3-14', kanji: '会社', kana: 'かいしゃ', romaji: 'kaisha', indonesian: 'perusahaan', wordType: 'kata benda' },
      { id: '3-15', kanji: '家', kana: 'うち / いえ', romaji: 'uchi / ie', indonesian: 'rumah', wordType: 'kata benda' },
      { id: '3-16', kanji: '幾ら', kana: 'いくら', romaji: 'ikura', indonesian: 'berapa harganya', wordType: 'kata benda' },
      { id: '3-17', kanji: '百', kana: 'ひゃく', romaji: 'hyaku', indonesian: 'seratus', wordType: 'kata benda' },
      { id: '3-18', kanji: '千', kana: 'せん', romaji: 'sen', indonesian: 'seribu', wordType: 'kata benda' },
      { id: '3-19', kanji: '万', kana: 'まん', romaji: 'man', indonesian: 'sepuluh ribu', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '3-b1',
        title: 'Menyatakan Letak Tempat: ここ / そこ / あそこ は N です',
        pattern: 'ここ / そこ / あそこ は N (tempat) です',
        explanation: 'Digunakan untuk menunjukkan tempat atau ruangan di sekitar gedung atau area.',
        reibun: [
          { japanese: 'ここは食堂です。', kana: 'ここはしょくどうです。', romaji: 'Koko wa shokudou desu.', indonesian: 'Di sini adalah kantin.' },
          { japanese: 'お手洗いはあそこです。', kana: 'おてあらいはあそこです。', romaji: 'Otearai wa asoko desu.', indonesian: 'Toilet ada di sebelah sana.' }
        ]
      },
      {
        id: '3-b2',
        title: 'Menanyakan Lokasi: N は どこ / どちら ですか',
        pattern: 'N は どこ (どちら) ですか',
        explanation: 'どこ digunakan untuk menanyakan lokasi. どちら adalah bentuk lebih sopan (arah/posisi).',
        reibun: [
          { japanese: '事務所はどこですか。…あちらです。', kana: 'じむしょはどこですか。…あちらです。', romaji: 'Jimusho wa doko desu ka. ...Achira desu.', indonesian: 'Kantor di mana? ...Di sebelah sana (sopan).' },
          { japanese: 'お国はどちらですか。…インドネシアです。', kana: 'おくにはどちらですか。…インドネシアです。', romaji: 'Okuni wa dochira desu ka. ...Indoneshia desu.', indonesian: 'Negara asal Anda dari mana? ...Indonesia.' }
        ]
      },
      {
        id: '3-b3',
        title: 'Menanyakan Asal Buatan Produk & Harga Barang',
        pattern: 'N は どこの N ですか / いくら ですか',
        explanation: 'どこの N menanyakan negara/perusahaan pembuat produk. いくら menanyakan harga barang.',
        reibun: [
          { japanese: 'これは日本の時計です。', kana: 'これはにほんのとけいです。', romaji: 'Kore wa nihon no tokei desu.', indonesian: 'Ini adalah jam tangan buatan Jepang.' },
          { japanese: 'この靴はいくらですか。…8,500円です。', kana: 'このくつはいくらですか。…はっせんごひゃくえんです。', romaji: 'Kono kutsu wa ikura desu ka. ...Hassen go-hyaku en desu.', indonesian: 'Sepatu ini berapa harganya? ...8.500 Yen.' }
        ]
      }
    ],
    kaiwa: {
      title: 'これをください (Kore o kudasai - Tolong berikan yang ini)',
      situation: 'Maria sedang berbelanja pakaian di department store Jepang dan menanyakan asal produksi serta harga jaket kepada penjual.',
      dialogue: [
        { speaker: 'マリア', role: 'Pembeli', japanese: 'すみません。ワイン売り場はどこですか。', kana: 'すみません。ワインうりばはどこですか。', romaji: 'Sumimasen. Wain uriba wa doko desu ka.', indonesian: 'Permisi. Tempat penjualan anggur di sebelah mana?' },
        { speaker: '店員', role: 'Pelayan Toko', japanese: '地下1階でございます。', kana: 'ちかいっかいでございます。', romaji: 'Chika ikkai de gozaimasu.', indonesian: 'Ada di lantai bawah tanah 1 (sopan).' },
        { speaker: 'マリア', role: 'Pembeli', japanese: 'そのワインをください。', kana: 'そのワインをください。', romaji: 'Sono wain o kudasai.', indonesian: 'Tolong berikan anggur yang itu.' }
      ]
    },
    exercises: [
      {
        id: '3-e1',
        type: 'multiple-choice',
        question: 'Bagaimana cara sopan menanyakan negara asal seseorang?',
        options: ['お国は どちらですか', '国は どこですか', '国は いくらですか', '国は だれですか'],
        correctAnswer: 'お国は どちらですか',
        explanation: 'Bentuk sopan untuk menanyakan negara atau instansi asal adalah "お国は どちらですか".'
      }
    ]
  },
  {
    chapter: 4,
    titleId: 'Bab 4: Jam, Waktu & Bentuk Masu (V-masu)',
    titleJp: '第4課：時間・動詞の「ます」形',
    description: 'Mempelajari membaca jam (ji) dan menit (fun/pun), hari dalam sepekan, konjugasi dasar kata kerja bentuk positif/negatif/lampau, serta partikel に (ni), から (kara), まで (made).',
    summaryGrammar: [
      '今 ～時 ～分 です (Sekarang jam ... menit ...)',
      'V-ます (Positif masa kini/akan datang)',
      'V-ません (Negatif masa kini/akan datang)',
      'V-ました (Positif lampau)',
      'V-ませんでした (Negatif lampau)',
      'Waktu に V (Melakukan aksi pada titik waktu spesifik)',
      'N1 から N2 まで (Dari N1 sampai N2)'
    ],
    vocab: [
      { id: '4-1', kanji: '今', kana: 'いま', romaji: 'ima', indonesian: 'sekarang', wordType: 'kata benda' },
      { id: '4-2', kanji: '～時', kana: '～じ', romaji: '~ji', indonesian: 'jam ...', wordType: 'kata benda' },
      { id: '4-3', kanji: '～分', kana: '～ふん / ～ぷん', romaji: '~fun / ~pun', indonesian: 'menit ...', wordType: 'kata benda' },
      { id: '4-4', kanji: '半', kana: 'はん', romaji: 'han', indonesian: 'setengah (30 menit)', wordType: 'kata benda' },
      { id: '4-5', kanji: '午前 / 午後', kana: 'ごぜん / ごご', romaji: 'gozen / gogo', indonesian: 'AM (pagi) / PM (siang-malam)', wordType: 'kata benda' },
      { id: '4-6', kanji: '朝', kana: 'あさ', romaji: 'asa', indonesian: 'pagi', wordType: 'kata benda' },
      { id: '4-7', kanji: '昼', kana: 'ひる', romaji: 'hiru', indonesian: 'siang', wordType: 'kata benda' },
      { id: '4-8', kanji: '晩 / 夜', kana: 'ばん / よる', romaji: 'ban / yoru', indonesian: 'malam', wordType: 'kata benda' },
      { id: '4-9', kanji: '起きます', kana: 'おきます', romaji: 'okimasu', indonesian: 'bangun tidur', wordType: 'kata kerja 2' },
      { id: '4-10', kanji: '寝ます', kana: 'ねます', romaji: 'nemasu', indonesian: 'tidur', wordType: 'kata kerja 2' },
      { id: '4-11', kanji: '働きます', kana: 'はたらきます', romaji: 'hatarakimasu', indonesian: 'bekerja', wordType: 'kata kerja 1' },
      { id: '4-12', kanji: '休みます', kana: 'やすみます', romaji: 'yasumimasu', indonesian: 'beristirahat / libur', wordType: 'kata kerja 1' },
      { id: '4-13', kanji: '勉強します', kana: 'べんきょうします', romaji: 'benkyoushimasu', indonesian: 'belajar', wordType: 'kata kerja 3' },
      { id: '4-14', kanji: '終わります', kana: 'おわります', romaji: 'owarimasu', indonesian: 'selesai', wordType: 'kata kerja 1' },
      { id: '4-15', kanji: '月曜日', kana: 'げつようび', romaji: 'getsuyoubi', indonesian: 'hari Senin', wordType: 'kata benda' },
      { id: '4-16', kanji: '火曜日', kana: 'かようび', romaji: 'kayoubi', indonesian: 'hari Selasa', wordType: 'kata benda' },
      { id: '4-17', kanji: '水曜日', kana: 'すいようび', romaji: 'suiyoubi', indonesian: 'hari Rabu', wordType: 'kata benda' },
      { id: '4-18', kanji: '木曜日', kana: 'もくようび', romaji: 'mokuyoubi', indonesian: 'hari Kamis', wordType: 'kata benda' },
      { id: '4-19', kanji: '金曜日', kana: 'きんようび', romaji: 'kinyoubi', indonesian: 'hari Jumat', wordType: 'kata benda' },
      { id: '4-20', kanji: '土曜日', kana: 'どようび', romaji: 'doyoubi', indonesian: 'hari Sabtu', wordType: 'kata benda' },
      { id: '4-21', kanji: '日曜日', kana: 'にちようび', romaji: 'nichiyoubi', indonesian: 'hari Minggu', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '4-b1',
        title: 'Menyatakan Waktu Sekarang: 今 ～時 ～分 です',
        pattern: '今 [Jam]時 [Menit]分 です',
        explanation: 'Perhatikan angka khusus pada jam: 4 (yo-ji), 7 (shichi-ji), 9 (ku-ji).',
        reibun: [
          { japanese: '今 何時ですか。…7時半です。', kana: 'いま なんじですか。…しちじはんです。', romaji: 'Ima nan-ji desu ka. ...Shichi-ji han desu.', indonesian: 'Sekarang jam berapa? ...Jam setengah 8 (7:30).' }
        ]
      },
      {
        id: '4-b2',
        title: 'Konjugasi 4 Bentuk Kata Kerja Sopan (ます形)',
        pattern: 'V-ます / V-ません / V-ました / V-ませんでした',
        explanation: 'Menyatakan kebiasaan, masa depan, atau peristiwa yang telah berlalu (lampau).',
        reibun: [
          { japanese: '私は毎朝6時に起きます。', kana: 'わたしはまいあさろくじにおきます。', romaji: 'Watashi wa maiasa roku-ji ni okimasu.', indonesian: 'Saya bangun setiap pagi jam 6.' },
          { japanese: '昨日の晩勉強しませんでした。', kana: 'きのうのばんべんきょうしませんでした。', romaji: 'Kinou no ban benkyoushimasen deshita.', indonesian: 'Tadi malam saya tidak belajar.' }
        ]
      },
      {
        id: '4-b3',
        title: 'Partikel Waktu: ～から ～まで & ～に',
        pattern: 'Waktu spesifik に V / Waktu1 から Waktu2 まで',
        explanation: '「に」hanya dipakai pada waktu yang mengandung angka pasti (jam, tanggal).「から」berarti dari,「まで」berarti sampai.',
        reibun: [
          { japanese: '銀行は9時から3時までです。', kana: 'ぎんこうはくじからさんじまでです。', romaji: 'Ginkou wa ku-ji kara san-ji made desu.', indonesian: 'Bank buka dari jam 9 sampai jam 3.' },
          { japanese: '日曜日に奈良へ行きます。', kana: 'にちようびに ならへ いきます。', romaji: 'Nichiyoubi ni Nara e ikimasu.', indonesian: 'Pada hari Minggu saya pergi ke Nara.' }
        ]
      }
    ],
    kaiwa: {
      title: 'そちらは 何時までですか (Di sana buka sampai jam berapa?)',
      situation: 'Mike Miller meminta nomor telepon toko "あすか" kepada Sato, lalu menelepon toko tersebut untuk menanyakan jam buka dan hari libur.',
      dialogue: [
        { speaker: 'ミラー', role: 'Pegawai IMC', japanese: 'すみません、「あすか」の 電話番号は 何番ですか。', kana: 'すみません、「あすか」の でんわばんごうは なんばんですか。', romaji: 'Sumimasen, "Asuka" no denwa-bangou wa nan-ban desu ka.', indonesian: 'Permisi, nomor telepon "Asuka" nomor berapa?' },
        { speaker: '佐藤', role: 'Pegawai IMC', japanese: '「あすか」ですか。5275の 2725です。', kana: '「あすか」ですか。ごーにーななごの ななにーごです。', romaji: '"Asuka" desu ka. Go-ni-nana-go no nana-ni-go desu.', indonesian: '"Asuka"? Nomornya 5275-2725.' },
        { speaker: 'ミラー', role: 'Pegawai IMC', japanese: 'どうも ありがとう ございます。', kana: 'どうも ありがとう ございます。', romaji: 'Doumo arigatou gozaimasu.', indonesian: 'Terima kasih banyak.' },
        { speaker: '店の 人', role: 'Penjaga Toko', japanese: 'はい、「あすか」です。', kana: 'はい、「あすか」です。', romaji: 'Hai, "Asuka" desu.', indonesian: 'Halo, dengan toko "Asuka".' },
        { speaker: 'ミラー', role: 'Penelepon', japanese: 'すみません。そちらは 何時までですか。', kana: 'すみません。そちらは なんじまでですか。', romaji: 'Sumimasen. Sochira wa nan-ji made desu ka.', indonesian: 'Permisi. Di sana buka sampai jam berapa?' },
        { speaker: '店の 人', role: 'Penjaga Toko', japanese: '10時までです。', kana: 'じゅうじまでです。', romaji: 'Juu-ji made desu.', indonesian: 'Buka sampai jam 10 malam.' },
        { speaker: 'ミラー', role: 'Penelepon', japanese: '休みは 何曜日ですか。', kana: 'やすみは なんようびですか。', romaji: 'Yasumi wa nan-youbi desu ka.', indonesian: 'Hari liburnya hari apa?' },
        { speaker: '店の 人', role: 'Penjaga Toko', japanese: '日曜日です。', kana: 'にちようびです。', romaji: 'Nichiyoubi desu.', indonesian: 'Hari Minggu.' },
        { speaker: 'ミラー', role: 'Penelepon', japanese: 'そうですか。どうも。', kana: 'そうですか。どうも。', romaji: 'Sou desu ka. Doumo.', indonesian: 'Begitu ya. Terima kasih.' }
      ]
    },
    exercises: [
      {
        id: '4-e1',
        type: 'multiple-choice',
        question: 'Pilihlah bentuk lampau negatif yang benar: きのう べんきょう ____。',
        options: ['しませんでした', 'しません', 'しました', 'する'],
        correctAnswer: 'しませんでした',
        explanation: 'Karena ada keterangan waktu lampau "きのう" (kemarin) dan bentuk negatif lampau, digunakan "しませんでした".'
      }
    ]
  },
  {
    chapter: 5,
    titleId: 'Bab 5: Perpindahan Tempat & Kendaraan (e, de, to)',
    titleJp: '第5課：移動の動詞（へ・で・と）',
    description: 'Kata kerja perpindahan (ikimasu/pergi, kimasu/datang, kaerimasu/pulang) dengan partikel arah へ (e), alat transportasi で (de), dan teman と (to).',
    summaryGrammar: [
      'N (tempat) へ 行きます / 来ます / 帰ります (Pergi/Datang/Pulang ke tempat N)',
      'どこ[へ]も 行きません (Tidak pergi ke mana pun)',
      'N (kendaraan) で 行きます (Pergi dengan kendaraan N)',
      'N (orang) と 行きます (Pergi bersama orang N)',
      'いつ 日本へ 来ましたか (Kapan datang ke Jepang?)'
    ],
    vocab: [
      { id: '5-1', kanji: '行きます', kana: 'いきます', romaji: 'ikimasu', indonesian: 'pergi', wordType: 'kata kerja 1' },
      { id: '5-2', kanji: '来ます', kana: 'きます', romaji: 'kimasu', indonesian: 'datang', wordType: 'kata kerja 3' },
      { id: '5-3', kanji: '帰ります', kana: 'かえります', romaji: 'kaerimasu', indonesian: 'pulang', wordType: 'kata kerja 1' },
      { id: '5-4', kanji: '学校', kana: 'がっこう', romaji: 'gakkou', indonesian: 'sekolah', wordType: 'kata benda' },
      { id: '5-5', kanji: '駅', kana: 'えき', romaji: 'eki', indonesian: 'stasiun', wordType: 'kata benda' },
      { id: '5-6', kanji: '飛行機', kana: 'ひこうき', romaji: 'hikouki', indonesian: 'pesawat terbang', wordType: 'kata benda' },
      { id: '5-7', kanji: '船', kana: 'ふね', romaji: 'fune', indonesian: 'kapal laut', wordType: 'kata benda' },
      { id: '5-8', kanji: '電車', kana: 'でんしゃ', romaji: 'densha', indonesian: 'kereta listrik', wordType: 'kata benda' },
      { id: '5-9', kanji: '地下鉄', kana: 'ちかてつ', romaji: 'chikatetsu', indonesian: 'kereta bawah tanah (subway)', wordType: 'kata benda' },
      { id: '5-10', kanji: '新幹線', kana: 'しんかんせん', romaji: 'shinkansen', indonesian: 'kereta peluru Shinkansen', wordType: 'kata benda' },
      { id: '5-11', kanji: 'バス', kana: 'バス', romaji: 'basu', indonesian: 'bus', wordType: 'kata benda' },
      { id: '5-12', kanji: 'タクシー', kana: 'タクシー', romaji: 'takushii', indonesian: 'taksi', wordType: 'kata benda' },
      { id: '5-13', kanji: '自転車', kana: 'じてんしゃ', romaji: 'jitensha', indonesian: 'sepeda', wordType: 'kata benda' },
      { id: '5-14', kanji: '歩いて', kana: 'あるいて', romaji: 'aruite', indonesian: 'jalan kaki (tanpa partikel で)', wordType: 'kata keterangan' },
      { id: '5-15', kanji: '友達', kana: 'ともだち', romaji: 'tomodachi', indonesian: 'teman', wordType: 'kata benda' },
      { id: '5-16', kanji: '彼 / 彼女', kana: 'かれ / かのじょ', romaji: 'kare / kanojo', indonesian: 'dia laki-laki / dia perempuan (pacar)', wordType: 'kata benda' },
      { id: '5-17', kanji: '家族', kana: 'かぞく', romaji: 'kazoku', indonesian: 'keluarga', wordType: 'kata benda' },
      { id: '5-18', kanji: '一人で', kana: 'ひとりで', romaji: 'hitori de', indonesian: 'sendirian', wordType: 'kata keterangan' },
      { id: '5-19', kanji: 'いつ', kana: 'いつ', romaji: 'itsu', indonesian: 'kapan', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '5-b1',
        title: 'Partikel Arah へ (e): Tempat へ 行きます / 来ます / 帰ります',
        pattern: 'Tempat へ 行きます',
        explanation: 'Partikel「へ」(ditulis he, dilafalkan "e") menandakan arah tujuan perjalanan.',
        reibun: [
          { japanese: '私は京都へ行きます。', kana: 'わたしはきょうとへいきます。', romaji: 'Watashi wa Kyouto e ikimasu.', indonesian: 'Saya pergi ke Kyoto.' },
          { japanese: '先週日本へ来ました。', kana: 'せんしゅうにほんへきました。', romaji: 'Senshuu nihon e kimashita.', indonesian: 'Saya datang ke Jepang minggu lalu.' }
        ]
      },
      {
        id: '5-b2',
        title: 'Partikel Sarana Kendaraan: Kendaraan で 行きます',
        pattern: 'Kendaraan で 行きます',
        explanation: 'Partikel「で」(de) menandakan alat atau kendaraan yang dipakai. Pengecualian: jalan kaki memakai 歩いて (aruite) tanpa で.',
        reibun: [
          { japanese: '電車で行きます。', kana: 'でんしゃでいきます。', romaji: 'Densha de ikimasu.', indonesian: 'Pergi naik kereta.' },
          { japanese: '駅から歩いて帰りました。', kana: 'えきからあるいてかえりました。', romaji: 'Eki kara aruite kaerimashita.', indonesian: 'Pulang dengan jalan kaki dari stasiun.' }
        ]
      },
      {
        id: '5-b3',
        title: 'Partikel Bersama Teman: Orang と 行きます',
        pattern: 'Orang と 行きます / 一人で 行きます',
        explanation: 'Partikel「と」(to) berarti "bersama/dengan". Jika sendirian, gunakan「一人で」(hitori de).',
        reibun: [
          { japanese: '友達と東京へ行きます。', kana: 'ともだちととうきょうへいきます。', romaji: 'Tomodachi to Toukyou e ikimasu.', indonesian: 'Pergi ke Tokyo bersama teman.' }
        ]
      }
    ],
    kaiwa: {
      title: 'この 電車は 甲子園へ 行きますか (Apakah kereta ini pergi ke Koshien?)',
      situation: 'Jose Santos membeli tiket kereta ke stadion Koshien, menanyakan peron, dan memastikan jenis kereta lokal (Futsuu) kepada sesama penumpang.',
      dialogue: [
        { speaker: 'サントス', role: 'Penumpang', japanese: 'すみません。甲子園まで いくらですか。', kana: 'すみません。こうしえんまで いくらですか。', romaji: 'Sumimasen. Koushien made ikura desu ka.', indonesian: 'Permisi. Sampai ke Koshien berapa ongkosnya?' },
        { speaker: '女の 人', role: 'Penjual Tiket', japanese: '350円です。', kana: 'さんびゃくごじゅうえんです。', romaji: 'San-byaku go-juu en desu.', indonesian: '350 Yen.' },
        { speaker: 'サントス', role: 'Penumpang', japanese: '350円ですね。ありがとう ございました。', kana: 'さんびゃくごじゅうえんですね。ありがとう ございました。', romaji: 'San-byaku go-juu en desu ne. Arigatou gozaimashita.', indonesian: '350 Yen ya. Terima kasih banyak.' },
        { speaker: '女の 人', role: 'Penjual Tiket', japanese: 'どう いたしまして。', kana: 'どう いたしまして。', romaji: 'Dou itashimashite.', indonesian: 'Sama-sama.' },
        { speaker: 'サントス', role: 'Penumpang', japanese: 'すみません。甲子園は 何番線ですか。', kana: 'すみません。こうしえんは なんばんせんですか。', romaji: 'Sumimasen. Koushien wa nan-ban-sen desu ka.', indonesian: 'Permisi. Jurusan Koshien di peron jalur berapa?' },
        { speaker: '駅員', role: 'Petugas Stasiun', japanese: '5番線です。', kana: 'ごばんせんです。', romaji: 'Go-ban-sen desu.', indonesian: 'Peron jalur 5.' },
        { speaker: 'サントス', role: 'Penumpang', japanese: 'どうも。', kana: 'どうも。', romaji: 'Doumo.', indonesian: 'Terima kasih.' },
        { speaker: 'サントス', role: 'Penumpang', japanese: 'あのう、この 電車は 甲子園へ 行きますか。', kana: 'あのう、この でんしゃは こうしえんへ いきますか。', romaji: 'Anou, kono densha wa Koushien e ikimasu ka.', indonesian: 'Permisi, apakah kereta ini pergi ke Koshien?' },
        { speaker: '男の 人', role: 'Penumpang Lain', japanese: 'いいえ。次の「普通」ですよ。', kana: 'いいえ。つぎの「ふつう」ですよ。', romaji: 'Iie. Tsugi no "futsuu" desu yo.', indonesian: 'Bukan. Kereta berikutnya yang jenis "Lokal (Futsuu)".' },
        { speaker: 'サントス', role: 'Penumpang', japanese: 'そうですか。どうも。', kana: 'そうですか。どうも。', romaji: 'Sou desu ka. Doumo.', indonesian: 'Begitu ya. Terima kasih.' }
      ]
    },
    exercises: [
      {
        id: '5-e1',
        type: 'particle',
        question: 'Pilihlah partikel yang tepat: わたしは バス _____ うちへ かえります。',
        options: ['で', 'へ', 'に', 'を'],
        correctAnswer: 'で',
        explanation: 'Partikel で digunakan untuk menunjukkan sarana/kendaraan (dengan bus).'
      }
    ]
  },
  {
    chapter: 6,
    titleId: 'Bab 6: Objek Kalimat & Ajakan (o, de, issho ni)',
    titleJp: '第6課：目的語・勧誘（を・で・いっしょに）',
    description: 'Kata kerja transitif dengan partikel objek を (o), tempat melakukan kegiatan で (de), serta pola ajakan (～ませんか dan ～ましょう).',
    summaryGrammar: [
      'N を V-ます (Melakukan tindakan terhadap objek N)',
      'N (tempat) で V-ます (Melakukan kegiatan di tempat N)',
      '一緒に V-ませんか (Maukah melakukan V bersama?)',
      'V-ましょう (Ayo kita lakukan V!)',
      '何 を しますか (Apa yang akan kamu lakukan?)'
    ],
    vocab: [
      { id: '6-1', kanji: '食べます', kana: 'たべます', romaji: 'tabemasu', indonesian: 'makan', wordType: 'kata kerja 2' },
      { id: '6-2', kanji: '飲みます', kana: 'のみます', romaji: 'nomimasu', indonesian: 'minum', wordType: 'kata kerja 1' },
      { id: '6-3', kanji: '吸います', kana: 'すいます (たばこを~)', romaji: 'suimasu', indonesian: 'merokok / menghisap', wordType: 'kata kerja 1' },
      { id: '6-4', kanji: '見ます', kana: 'みます', romaji: 'mimasu', indonesian: 'melihat / menonton', wordType: 'kata kerja 2' },
      { id: '6-5', kanji: '聞きます', kana: 'ききます', romaji: 'kikimasu', indonesian: 'mendengar / mendengarkan', wordType: 'kata kerja 1' },
      { id: '6-6', kanji: '読みます', kana: 'よみます', romaji: 'yomimasu', indonesian: 'membaca', wordType: 'kata kerja 1' },
      { id: '6-7', kanji: '書きます', kana: 'かきます', romaji: 'kakimasu', indonesian: 'menulis / menggambar', wordType: 'kata kerja 1' },
      { id: '6-8', kanji: '買います', kana: 'かいます', romaji: 'kaimasu', indonesian: 'membeli', wordType: 'kata kerja 1' },
      { id: '6-9', kanji: '撮ります', kana: 'とります (しゃしんを~)', romaji: 'torimasu', indonesian: 'mengambil (foto)', wordType: 'kata kerja 1' },
      { id: '6-10', kanji: '会います', kana: 'あいます (ともだちに~)', romaji: 'aimasu', indonesian: 'bertemu (dengan teman memakai partikel に)', wordType: 'kata kerja 1' },
      { id: '6-11', kanji: 'ご飯', kana: 'ごはん', romaji: 'gohan', indonesian: 'nasi / makan', wordType: 'kata benda' },
      { id: '6-12', kanji: 'パン', kana: 'パン', romaji: 'pan', indonesian: 'roti', wordType: 'kata benda' },
      { id: '6-13', kanji: '肉', kana: 'にく', romaji: 'niku', indonesian: 'daging', wordType: 'kata benda' },
      { id: '6-14', kanji: '魚', kana: 'さかな', romaji: 'sakana', indonesian: 'ikan', wordType: 'kata benda' },
      { id: '6-15', kanji: '水', kana: 'みず', romaji: 'mizu', indonesian: 'air putih', wordType: 'kata benda' },
      { id: '6-16', kanji: 'お茶', kana: 'おちゃ', romaji: 'ocha', indonesian: 'teh hijau', wordType: 'kata benda' },
      { id: '6-17', kanji: '一緒に', kana: 'いっしょに', romaji: 'issho ni', indonesian: 'bersama-sama', wordType: 'kata keterangan' },
      { id: '6-18', kanji: 'ちょっと', kana: 'ちょっと', romaji: 'chotto', indonesian: 'sebentar / sedikit (juga ungkapan menolak halus)', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '6-b1',
        title: 'Partikel Objek を (o): N を V-ます',
        pattern: 'Objek を Kata Kerja',
        explanation: 'Partikel「を」(ditulis wo, dilafalkan "o") menandakan objek langsung dari kata kerja transitif.',
        reibun: [
          { japanese: '私はご飯を食べます。', kana: 'わたしはごはんをたべます。', romaji: 'Watashi wa gohan o tabemasu.', indonesian: 'Saya makan nasi.' },
          { japanese: 'ジュースを飲みます。', kana: 'ジュースをのみます。', romaji: 'Juusu o nomimasu.', indonesian: 'Minum jus.' }
        ]
      },
      {
        id: '6-b2',
        title: 'Tempat Aksi: Tempat で V-ます',
        pattern: 'Tempat で V-ます',
        explanation: 'Partikel「で」(de) menandakan lokasi terjadinya suatu aktivitas atau perbuatan.',
        reibun: [
          { japanese: '図書館で本を読みます。', kana: 'としょかんでほんをよみます。', romaji: 'Toshokan de hon o yomimasu.', indonesian: 'Membaca buku di perpustakaan.' }
        ]
      },
      {
        id: '6-b3',
        title: 'Pola Ajakan: ～ませんか & ～ましょう',
        pattern: 'V-ませんか (Maukah?) / V-ましょう (Ayo!)',
        explanation: '「～ませんか」mengajak dengan sopan dan memberi kesempatan lawan bicara memilih.「～ましょう」mengajak secara proaktif atau menyetujui ajakan.',
        reibun: [
          { japanese: '一緒に京都へ行きませんか。…ええ、行きましょう。', kana: 'いっしょにきょうとへいきませんか。…ええ、いきましょう。', romaji: 'Issho ni Kyouto e ikimasen ka. ...Ee, ikimashou.', indonesian: 'Maukah pergi ke Kyoto bersama? ...Ya, ayo kita pergi!' }
        ]
      }
    ],
    kaiwa: {
      title: '一緒に行きませんか (Maukah pergi bersama?)',
      situation: 'Miller mengajak Sato untuk menonton pertandingan bisbol di hari Sabtu.',
      dialogue: [
        { speaker: 'ミラー', role: 'Pegawai', japanese: '佐藤さん、日曜日一緒に野球を見に行きませんか。', kana: 'さとうさん、にちようびいっしょにやきゅうをみにいきませんか。', romaji: 'Satou-san, nichiyoubi issho ni yakyuu o mi ni ikimasen ka.', indonesian: 'Ibu Sato, di hari Minggu maukah pergi menonton bisbol bersama?' },
        { speaker: '佐藤', role: 'Rekan Kerja', japanese: '日曜日ですか。いいですね。行きましょう。', kana: 'にちようびですか。いいですね。いきましょう。', romaji: 'Nichiyoubi desu ka. Ii desu ne. Ikimashou.', indonesian: 'Hari Minggu ya? Bagus sekali! Ayo kita pergi.' }
      ]
    },
    exercises: [
      {
        id: '6-e1',
        type: 'multiple-choice',
        question: 'Partikel untuk kalimat: "わたしは レストラン ____ ひるごはんを たべます。"',
        options: ['で', 'に', 'を', 'へ'],
        correctAnswer: 'で',
        explanation: 'Tempat melakukan aktivitas memakai partikel で.'
      }
    ]
  },
  {
    chapter: 7,
    titleId: 'Bab 7: Sarana & Memberi/Menerima (de, agemasu, moraimasu)',
    titleJp: '第7課：手段・授受表現（で・あげます・もらいます）',
    description: 'Menyatakan alat/bahasa (de), memberi (agemasu), menerima (moraimasu), dan tindakan yang sudah selesai (mou V-mashita).',
    summaryGrammar: [
      'Alat / Bahasa で V-ます (Menggunakan alat atau bahasa)',
      'Orang に N を あげます (Memberikan N kepada orang)',
      'Orang に N を もらいます (Menerima N dari orang)',
      'もう V-ました (Sudah melakukan V)',
      'まだ です (Belum)'
    ],
    vocab: [
      { id: '7-1', kanji: '切ります', kana: 'きります', romaji: 'kirimasu', indonesian: 'memotong', wordType: 'kata kerja 1' },
      { id: '7-2', kanji: '送ります', kana: 'おくります', romaji: 'okurimasu', indonesian: 'mengirim', wordType: 'kata kerja 1' },
      { id: '7-3', kanji: 'あげます', kana: 'あげます', romaji: 'agemasu', indonesian: 'memberikan', wordType: 'kata kerja 2' },
      { id: '7-4', kanji: 'もらいます', kana: 'もらいます', romaji: 'moraimasu', indonesian: 'menerima / mendapatkan', wordType: 'kata kerja 1' },
      { id: '7-5', kanji: '貸します', kana: 'かします', romaji: 'kashimasu', indonesian: 'meminjamkan', wordType: 'kata kerja 1' },
      { id: '7-6', kanji: '借ります', kana: 'かります', romaji: 'karimasu', indonesian: 'meminjam', wordType: 'kata kerja 2' },
      { id: '7-7', kanji: '教えます', kana: 'おしえます', romaji: 'oshiemasu', indonesian: 'mengajar / memberi tahu', wordType: 'kata kerja 2' },
      { id: '7-8', kanji: '習います', kana: 'ならいます', romaji: 'naraimasu', indonesian: 'belajar (dari seseorang)', wordType: 'kata kerja 1' },
      { id: '7-9', kanji: 'かけます', kana: 'かけます (でんわを~)', romaji: 'kakemasu', indonesian: 'menelepon', wordType: 'kata kerja 2' },
      { id: '7-10', kanji: '手', kana: 'て', romaji: 'te', indonesian: 'tangan', wordType: 'kata benda' },
      { id: '7-11', kanji: '箸', kana: 'はし', romaji: 'hashi', indonesian: 'sumpit', wordType: 'kata benda' },
      { id: '7-12', kanji: 'スプーン / ナイフ / フォーク', kana: 'スプーン / ナイフ / フォーク', romaji: 'supuun / naifu / fooku', indonesian: 'sendok / pisau / garpu', wordType: 'kata benda' },
      { id: '7-13', kanji: '花', kana: 'はな', romaji: 'hana', indonesian: 'bunga', wordType: 'kata benda' },
      { id: '7-14', kanji: '荷物', kana: 'にもつ', romaji: 'nimotsu', indonesian: 'barang bawaan / paket', wordType: 'kata benda' },
      { id: '7-15', kanji: 'もう', kana: 'もう', romaji: 'mou', indonesian: 'sudah', wordType: 'kata keterangan' },
      { id: '7-16', kanji: 'まだ', kana: 'まだ', romaji: 'mada', indonesian: 'belum', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '7-b1',
        title: 'Alat & Bahasa: Alat で V-ます',
        pattern: 'Alat / Bahasa で V-ます',
        explanation: 'Partikel で menyatakan perkakas/sarana atau bahasa yang digunakan.',
        reibun: [
          { japanese: '箸でご飯を食べます。', kana: 'はしでごはんをたべます。', romaji: 'Hashi de gohan o tabemasu.', indonesian: 'Makan nasi dengan sumpit.' },
          { japanese: '日本語でレポートを書きます。', kana: 'にほんごでレポートをかきます。', romaji: 'Nihongo de repooto o kakimasu.', indonesian: 'Menulis laporan dalam bahasa Jepang.' }
        ]
      },
      {
        id: '7-b2',
        title: 'Memberi & Menerima: あげます & もらいます',
        pattern: 'Penerima に N を あげます / Pemberi に/から N を もらいます',
        explanation: 'あげます berarti memberikan kepada orang lain. もらいます menerima dari orang lain (partikel に atau から).',
        reibun: [
          { japanese: '私は木村さんに花をあげました。', kana: 'わたしはきむらさんにはなをあげました。', romaji: 'Watashi wa Kimura-san ni hana o agemashita.', indonesian: 'Saya memberikan bunga kepada Kimura.' },
          { japanese: '私は母にプレゼントをもらいました。', kana: 'わたしはははにプレゼントをもらいました。', romaji: 'Watashi wa haha ni purezento o moraimashita.', indonesian: 'Saya menerima hadiah dari ibu.' }
        ]
      },
      {
        id: '7-b3',
        title: 'Menanyakan Kesiapan: もう V-ましたか',
        pattern: 'もう V-ましたか。…はい、もう V-ました / いいえ、まだです。',
        explanation: 'Jika sudah selesai jawab "はい、もう～". Jika belum selesai, jawab "いいえ、まだです" (JANGAN menjawab V-ませんでした karena artinya tidak melakukan sama sekali).',
        reibun: [
          { japanese: 'もう昼ご飯を食べましたか。…いいえ、まだです。', kana: 'もうひるごはんをたべましたか。…いいえ、まだです。', romaji: 'Mou hirugohan o tabemashita ka. ...Iie, mada desu.', indonesian: 'Apakah sudah makan siang? ...Belum.' }
        ]
      }
    ],
    kaiwa: {
      title: 'いらっしゃい (Selamat Datang)',
      situation: 'Jose berkunjung ke rumah Yamada dan membawa suvenir.',
      dialogue: [
        { speaker: '山田', role: 'Tuan Rumah', japanese: 'いらっしゃい。どうぞお上がりください。', kana: 'いらっしゃい。どうぞおあがりください。', romaji: 'Irasshai. Douzo oagari kudasai.', indonesian: 'Selamat datang! Silakan masuk.' },
        { speaker: 'ホセ', role: 'Tamu', japanese: '失礼します。これ、お土産です。どうぞ。', kana: 'しつれいします。これ、おみやげです。どうぞ。', romaji: 'Shitsurei shimasu. Kore, omiyage desu. Douzo.', indonesian: 'Permisi. Ini ada oleh-oleh. Silakan.' }
      ]
    },
    exercises: [
      {
        id: '7-e1',
        type: 'multiple-choice',
        question: 'A: もう レポートを 送りましたか。 B: いいえ、_________。',
        options: ['まだです', '送りませんでした', 'もう送りました', 'まだでした'],
        correctAnswer: 'まだです',
        explanation: 'Untuk menjawab pertanyaan "sudahkah...?" yang belum dilakukan tapi akan dilakukan nanti, jawaban standar adalah "いいえ、まだです".'
      }
    ]
  },
  {
    chapter: 8,
    titleId: 'Bab 8: Kata Sifat (Keiyoushi -i & -na)',
    titleJp: '第8課：形容詞（い形容詞・な形容詞）',
    description: 'Dua golongan kata sifat dalam bahasa Jepang: -i dan -na, cara memodifikasi kata benda, bentuk positif dan negatif.',
    summaryGrammar: [
      'い-keiyoushi: ～いです / ～くないです (Negatif: buang i + kunai desu)',
      'な-keiyoushi: ～です / ～じゃありません (Sama seperti kata benda)',
      'Modifikasi: [Kata sifat-i] + N / [Kata sifat-na]+な + N',
      'とても (sangat) / あまり～ない (tidak begitu)',
      'どんな N ですか (N yang seperti apa?)'
    ],
    vocab: [
      { id: '8-1', kanji: '大きい', kana: 'おおきい', romaji: 'ookii', indonesian: 'besar', wordType: 'kata sifat-i' },
      { id: '8-2', kanji: '小さい', kana: 'ちいさい', romaji: 'chiisai', indonesian: 'kecil', wordType: 'kata sifat-i' },
      { id: '8-3', kanji: '新しい', kana: 'あたらしい', romaji: 'atarashii', indonesian: 'baru', wordType: 'kata sifat-i' },
      { id: '8-4', kanji: '古い', kana: 'ふるい', romaji: 'furui', indonesian: 'lama / kuno', wordType: 'kata sifat-i' },
      { id: '8-5', kanji: '良い', kana: 'いい (よい)', romaji: 'ii (yoi)', indonesian: 'bagus / baik (negatif: よくない)', wordType: 'kata sifat-i' },
      { id: '8-6', kanji: '悪い', kana: 'わるい', romaji: 'warui', indonesian: 'buruk / jelek', wordType: 'kata sifat-i' },
      { id: '8-7', kanji: '暑い / 熱い', kana: 'あつい', romaji: 'atsui', indonesian: 'panas (cuaca / benda)', wordType: 'kata sifat-i' },
      { id: '8-8', kanji: '寒い / 冷たい', kana: 'さむい / つめたい', romaji: 'samui / tsumetai', indonesian: 'dingin (cuaca / benda)', wordType: 'kata sifat-i' },
      { id: '8-9', kanji: '難しい', kana: 'むずかしい', romaji: 'muzukashii', indonesian: 'sulit / sukar', wordType: 'kata sifat-i' },
      { id: '8-10', kanji: '易しい', kana: 'やさしい', romaji: 'yasashii', indonesian: 'mudah / ramah', wordType: 'kata sifat-i' },
      { id: '8-11', kanji: '高い', kana: 'たかい', romaji: 'takai', indonesian: 'mahal / tinggi', wordType: 'kata sifat-i' },
      { id: '8-12', kanji: '安い', kana: 'やすい', romaji: 'yasui', indonesian: 'murah', wordType: 'kata sifat-i' },
      { id: '8-13', kanji: '親切', kana: 'しんせつ[な]', romaji: 'shinsetsu[na]', indonesian: 'ramah / baik hati', wordType: 'kata sifat-na' },
      { id: '8-14', kanji: '便利', kana: 'べんり[な]', romaji: 'benri[na]', indonesian: 'praktis', wordType: 'kata sifat-na' },
      { id: '8-15', kanji: '静か', kana: 'しずか[な]', romaji: 'shizuka[na]', indonesian: 'tenang / sunyi', wordType: 'kata sifat-na' },
      { id: '8-16', kanji: '賑やか', kana: 'にぎやか[な]', romaji: 'nigiyaka[na]', indonesian: 'ramai', wordType: 'kata sifat-na' },
      { id: '8-17', kanji: '有名', kana: 'ゆうめい[な]', romaji: 'yuumei[na]', indonesian: 'terkenal', wordType: 'kata sifat-na' },
      { id: '8-18', kanji: '綺麗', kana: 'きれい[な]', romaji: 'kirei[na]', indonesian: 'cantik / bersih (kata sifat -na walau berakhiran i)', wordType: 'kata sifat-na' }
    ],
    bunkei: [
      {
        id: '8-b1',
        title: 'Konjugasi Kata Sifat -i (い形容詞)',
        pattern: 'Positif: ～いです / Negatif: ～くないです',
        explanation: 'Kata sifat-i diakhiri huruf "i" (seperti takai, atarashii). Negatifnya: huruf i paling akhir diubah menjadi くない (kunai). Khusus いい menjadi よくない.',
        reibun: [
          { japanese: '富士山は高いです。', kana: 'ふじさんはたかいです。', romaji: 'Fujisan wa takai desu.', indonesian: 'Gunung Fuji tinggi.' },
          { japanese: 'この本はおもしろくないです。', kana: 'このほんはおもしろくないです。', romaji: 'Kono hon wa omoshirokunai desu.', indonesian: 'Buku ini tidak menarik.' }
        ]
      },
      {
        id: '8-b2',
        title: 'Konjugasi Kata Sifat -na (な形容詞)',
        pattern: 'Positif: ～です / Negatif: ～じゃありません',
        explanation: 'Kata sifat-na diperlakukan persis seperti kata benda saat berfungsi sebagai predikat.',
        reibun: [
          { japanese: '奈良は静かな町です。', kana: 'ならはしずかなまちです。', romaji: 'Nara wa shizukana machi desu.', indonesian: 'Nara adalah kota yang tenang.' },
          { japanese: 'この町はあまり賑やかじゃありません。', kana: 'このまちはあまりにぎやかじゃありません。', romaji: 'Kono machi wa amari nigiyaka ja arimasen.', indonesian: 'Kota ini tidak begitu ramai.' }
        ]
      }
    ],
    kaiwa: {
      title: 'そろそろ失礼します (Sudah saatnya saya pamit)',
      situation: 'Maria berkunjung ke rumah Yamada, menikmati teh, lalu pamit pulang.',
      dialogue: [
        { speaker: '山田', role: 'Tuan Rumah', japanese: '日本の生活はどうですか。', kana: 'にほんのせいかつはどうですか。', romaji: 'Nihon no seikatsu wa dou desu ka.', indonesian: 'Bagaimana kehidupan di Jepang?' },
        { speaker: 'マリア', role: 'Tamu', japanese: '毎日とても楽しいです。でも、ちょっと物価が高いです。', kana: 'まいにちとてもたのしいです。でも、ちょっとぶっかがたかいです。', romaji: 'Mainichi totemo tanoshii desu. Demo, chotto bukka ga takai desu.', indonesian: 'Setiap hari sangat menyenangkan. Tapi, harga barang sedikit mahal.' }
      ]
    },
    exercises: [
      {
        id: '8-e1',
        type: 'multiple-choice',
        question: 'Perhatikan kata "きれい". Bentuk negasi sopannya adalah...',
        options: ['きれいじゃありません', 'きれいくないです', 'きれいくありません', 'きれいじゃないでした'],
        correctAnswer: 'きれいじゃありません',
        explanation: 'Walau diakhiri bunyi "i", きれい (kirei) dan ゆうめい (yuumei) tergolong Kata Sifat -NA, sehingga negasinya adalah きれいじゃありません.'
      }
    ]
  },
  {
    chapter: 9,
    titleId: 'Bab 9: Kesukaan, Kemampuan & Kepemilikan (ga)',
    titleJp: '第9課：嗜好・能力・所有（が）',
    description: 'Menyatakan rasa suka/tidak suka (suki/kirai), mahir/pandai (jouzu/heta), mengerti (wakarimasu), ada/memiliki (arimasu), dan alasan (kara).',
    summaryGrammar: [
      'N が 好きです / 嫌いです (Suka / Benci N)',
      'N が 上手です / 下手です (Pandai / Tidak pandai N)',
      'N が わかります (Mengerti N)',
      'N が あります (Punya / Ada benda mati N)',
      'Alasan から、Akibat (Karena alasan, maka akibat)'
    ],
    vocab: [
      { id: '9-1', kanji: '好き', kana: 'すき[な]', romaji: 'suki[na]', indonesian: 'suka', wordType: 'kata sifat-na' },
      { id: '9-2', kanji: '嫌い', kana: 'きらい[な]', romaji: 'kirai[na]', indonesian: 'tidak suka / benci', wordType: 'kata sifat-na' },
      { id: '9-3', kanji: '上手', kana: 'じょうず[な]', romaji: 'jouzu[na]', indonesian: 'mahir / pandai (untuk orang lain)', wordType: 'kata sifat-na' },
      { id: '9-4', kanji: '下手', kana: 'へた[な]', romaji: 'heta[na]', indonesian: 'kurang pandai / buruk', wordType: 'kata sifat-na' },
      { id: '9-5', kanji: 'わかります', kana: 'わかります', romaji: 'wakarimasu', indonesian: 'mengerti / paham', wordType: 'kata kerja 1' },
      { id: '9-6', kanji: 'あります', kana: 'あります', romaji: 'arimasu', indonesian: 'ada / mempunyai (benda mati)', wordType: 'kata kerja 1' },
      { id: '9-7', kanji: '料理', kana: 'りょうり', romaji: 'ryouri', indonesian: 'masakan', wordType: 'kata benda' },
      { id: '9-8', kanji: '飲み物 / 食べ物', kana: 'のみもの / たべもの', romaji: 'nomimono / tabemono', indonesian: 'minuman / makanan', wordType: 'kata benda' },
      { id: '9-9', kanji: 'スポーツ', kana: 'スポーツ', romaji: 'supootsu', indonesian: 'olahraga', wordType: 'kata benda' },
      { id: '9-10', kanji: '歌', kana: 'うた', romaji: 'uta', indonesian: 'lagu', wordType: 'kata benda' },
      { id: '9-11', kanji: 'お金', kana: 'おかね', romaji: 'okane', indonesian: 'uang', wordType: 'kata benda' },
      { id: '9-12', kanji: '時間', kana: 'じかん', romaji: 'jikan', indonesian: 'waktu', wordType: 'kata benda' },
      { id: '9-13', kanji: '用事', kana: 'ようじ', romaji: 'youji', indonesian: 'urusan / urusan pribadi', wordType: 'kata benda' },
      { id: '9-14', kanji: '約束', kana: 'やくそく', romaji: 'yakusoku', indonesian: 'janji', wordType: 'kata benda' },
      { id: '9-15', kanji: 'どうして', kana: 'どうして', romaji: 'doushite', indonesian: 'mengapa / kenapa', wordType: 'kata keterangan' },
      { id: '9-16', kanji: '～から', kana: '～から', romaji: '~kara', indonesian: 'karena ... (diletakkan di akhir klausa alasan)', wordType: 'partikel' }
    ],
    bunkei: [
      {
        id: '9-b1',
        title: 'Predikat Emosi & Potensi memakai Partikel が (ga)',
        pattern: 'N が 好き / 嫌い / 上手 / 下手 です',
        explanation: 'Objek rasa suka, kebencian, kemahiran, dan pemahaman TIDAK memakai を, melainkan partikel「が」(ga).',
        reibun: [
          { japanese: '私はイタリア料理が好きです。', kana: 'わたしはイタリアりょうりがすきです。', romaji: 'Watashi wa Itaria ryouri ga suki desu.', indonesian: 'Saya suka masakan Italia.' },
          { japanese: 'マリアさんは日本語が上手です。', kana: 'マリアさんはにほんごがじょうずです。', romaji: 'Maria-san wa nihongo ga jouzu desu.', indonesian: 'Maria pandai bahasa Jepang.' },
          { japanese: '私は平仮名がわかります。', kana: 'わたしはひらがながわかります。', romaji: 'Watashi wa hiragana ga wakarimasu.', indonesian: 'Saya mengerti hiragana.' }
        ]
      },
      {
        id: '9-b2',
        title: 'Menyatakan Alasan: Alasan から、Akibat',
        pattern: 'Alasan から、[Hasil/Tindakan]',
        explanation: '「から」diletakkan langsung setelah klausa alasan ("karena...").',
        reibun: [
          { japanese: '時間がありませんから、タクシーで行きます。', kana: 'じかんがありませんから、タクシーでいきます。', romaji: 'Jikan ga arimasen kara, takushii de ikimasu.', indonesian: 'Karena tidak ada waktu, saya pergi naik taksi.' }
        ]
      }
    ],
    kaiwa: {
      title: '残念ですが (Sayang sekali...)',
      situation: 'Miller diajak menonton konser musik klasik oleh temannya, tetapi terpaksa menolak karena ada janji.',
      dialogue: [
        { speaker: '木村', role: 'Teman', japanese: 'ミラーさん、クラシックのコンサートのチケットがあります。一緒に行きませんか。', kana: 'ミラーさん、クラシックのコンサートのチケットがあります。いっしょにいきませんか。', romaji: 'Miraa-san, kurashikku no konsaato no chiketto ga arimasu. Issho ni ikimasen ka.', indonesian: 'Miller, saya ada tiket konser musik klasik. Maukah pergi bersama?' },
        { speaker: 'ミラー', role: 'Miller', japanese: 'いいですね。いつですか。', kana: 'いいですね。いつですか。', romaji: 'Ii desu ne. Itsu desu ka.', indonesian: 'Wah asyik. Kapan?' },
        { speaker: '木村', role: 'Teman', japanese: '来週の金曜日です。', kana: 'らいしゅうのきんようびです。', romaji: 'Raishuu no kinyoubi desu.', indonesian: 'Hari Jumat minggu depan.' },
        { speaker: 'ミラー', role: 'Miller', japanese: '金曜日ですか。金曜日はちょっと約束がありますから、残念ですが…。', kana: 'きんようびですか。きんようびはちょっとやくそくがありますから、ざんねんですが…。', romaji: 'Kinyoubi desu ka. Kinyoubi wa chotto yakusoku ga arimasu kara, zannen desu ga...', indonesian: 'Jumat ya? Hari Jumat saya ada janji, sayang sekali (tidak bisa)...' }
      ]
    },
    exercises: [
      {
        id: '9-e1',
        type: 'multiple-choice',
        question: 'わたしは 日本の アニメ ____ すきです。',
        options: ['が', 'を', 'に', 'で'],
        correctAnswer: 'が',
        explanation: 'Kata sifat suki (suka) menggunakan partikel が untuk menandai objek yang disukai.'
      }
    ]
  },
  {
    chapter: 10,
    titleId: 'Bab 10: Keberadaan Benda & Makhluk Hidup (arimasu / imasu)',
    titleJp: '第10課：存在表現（あります・います）',
    description: 'Menyatakan keberadaan benda mati (arimasu) dan makhluk hidup bernyawa (imasu), posisi spasial (ue, shita, mae, ushiro, tonari, naka).',
    summaryGrammar: [
      'Tempat に Benda が あります (Ada benda mati di tempat)',
      'Tempat に Orang/Hewan が います (Ada orang/hewan di tempat)',
      'Benda/Orang は Tempat に あります / います (Topik berada di tempat)',
      'Posisi: N1 の 上 / 下 / 前 / 後ろ / 隣 / 中 に',
      'N1 や N2 [など] (Dan lain-lain)'
    ],
    vocab: [
      { id: '10-1', kanji: 'あります', kana: 'あります', romaji: 'arimasu', indonesian: 'ada (benda mati, tumbuhan)', wordType: 'kata kerja 1' },
      { id: '10-2', kanji: 'います', kana: 'います', romaji: 'imasu', indonesian: 'ada (makhluk hidup bernyawa: manusia, hewan)', wordType: 'kata kerja 2' },
      { id: '10-3', kanji: '上', kana: 'うえ', romaji: 'ue', indonesian: 'atas', wordType: 'kata benda' },
      { id: '10-4', kanji: '下', kana: 'した', romaji: 'shita', indonesian: 'bawah', wordType: 'kata benda' },
      { id: '10-5', kanji: '前', kana: 'まえ', romaji: 'mae', indonesian: 'depan', wordType: 'kata benda' },
      { id: '10-6', kanji: '後ろ', kana: 'うしろ', romaji: 'ushiro', indonesian: 'belakang', wordType: 'kata benda' },
      { id: '10-7', kanji: '右', kana: 'みぎ', romaji: 'migi', indonesian: 'kanan', wordType: 'kata benda' },
      { id: '10-8', kanji: '左', kana: 'ひだり', romaji: 'hidari', indonesian: 'kiri', wordType: 'kata benda' },
      { id: '10-9', kanji: '中', kana: 'なか', romaji: 'naka', indonesian: 'dalam', wordType: 'kata benda' },
      { id: '10-10', kanji: '外', kana: 'そと', romaji: 'soto', indonesian: 'luar', wordType: 'kata benda' },
      { id: '10-11', kanji: '隣', kana: 'となり', romaji: 'tonari', indonesian: 'sebelah / samping yang sejenis', wordType: 'kata benda' },
      { id: '10-12', kanji: '近く', kana: 'ちかく', romaji: 'chikaku', indonesian: 'dekat', wordType: 'kata benda' },
      { id: '10-13', kanji: '間', kana: 'あいだ', romaji: 'aida', indonesian: 'di antara', wordType: 'kata benda' },
      { id: '10-14', kanji: '箱', kana: 'はこ', romaji: 'hako', indonesian: 'kotak', wordType: 'kata benda' },
      { id: '10-15', kanji: '猫', kana: 'ねこ', romaji: 'neko', indonesian: 'kucing', wordType: 'kata benda' },
      { id: '10-16', kanji: '犬', kana: 'いぬ', romaji: 'inu', indonesian: 'anjing', wordType: 'kata benda' },
      { id: '10-17', kanji: '棚', kana: 'たな', romaji: 'tana', indonesian: 'rak buku/barang', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '10-b1',
        title: 'Perbedaan あります (Benda Mati) dan います (Makhluk Hidup)',
        pattern: 'Tempat に [Benda] が あります / [Makhluk] が います',
        explanation: 'あります untuk benda mati/tanaman/gedung. います khusus untuk manusia dan hewan yang bergerak sendiri.',
        reibun: [
          { japanese: '机の上に本があります。', kana: 'つくえのうえにほんがあります。', romaji: 'Tsukue no ue ni hon ga arimasu.', indonesian: 'Di atas meja ada buku.' },
          { japanese: '庭に犬がいます。', kana: 'にわにいぬがいます。', romaji: 'Niwa ni inu ga imasu.', indonesian: 'Di halaman ada anjing.' }
        ]
      },
      {
        id: '10-b2',
        title: 'Menyebutkan Contoh Terbuka: N1 や N2 [など]',
        pattern: 'N1 や N2 など',
        explanation: 'Partikel「や」(ya) mendaftar beberapa contoh representatif (tidak tuntas), sering diakhiri など (dan lain-lain).',
        reibun: [
          { japanese: '箱の中に写真や手紙[など]があります。', kana: 'はこのなかにしゃしんやてがみ[など]があります。', romaji: 'Hako no naka ni shashin ya tegami [nado] ga arimasu.', indonesian: 'Di dalam kotak ada foto, surat, dan lain-lain.' }
        ]
      }
    ],
    kaiwa: {
      title: 'ナンプラー、ありますか (Apakah ada Nam Pla / kecap ikan?)',
      situation: 'Mike Miller mencari toko makanan Asia untuk membeli bumbu "Nam Pla" (kecap ikan khas Thailand) dan bertanya letaknya kepada pelayan toko.',
      dialogue: [
        { speaker: 'ミラー', role: 'Mike Miller', japanese: 'すみません。アジアストアは どこですか。', kana: 'すみません。アジアストアは どこですか。', romaji: 'Sumimasen. Ajia-sutoa wa doko desu ka.', indonesian: 'Permisi. Toko Asia (Asia Store) ada di mana ya?' },
        { speaker: '女の 人', role: 'Pejalan Kaki', japanese: 'アジアストアですか。あそこに 白い ビルが ありますね。あの ビルの 中です。', kana: 'アジアストアですか。あそこに しろい ビルが ありますね。あの ビルの なかです。', romaji: 'Ajia-sutoa desu ka. Asoko ni shiroi biru ga arimasu ne. Ano biru no naka desu.', indonesian: 'Toko Asia? Di sebelah sana ada gedung putih, kan? Ada di dalam gedung itu.' },
        { speaker: 'ミラー', role: 'Mike Miller', japanese: 'そうですか。どうも すみません。', kana: 'そうですか。どうも すみません。', romaji: 'Sou desu ka. Doumo sumimasen.', indonesian: 'Begitu ya. Terima kasih banyak.' },
        { speaker: '女の 人', role: 'Pejalan Kaki', japanese: 'いいえ。', kana: 'いいえ。', romaji: 'Iie.', indonesian: 'Sama-sama.' },
        { speaker: 'ミラー', role: 'Mike Miller', japanese: 'あのう、ナンプラー、ありますか。', kana: 'あのう、ナンプラー、ありますか。', romaji: 'Anou, nanpuraa, arimasu ka.', indonesian: 'Permisi, apakah ada Nam Pla (kecap ikan Thailand)?' },
        { speaker: '店員', role: 'Pegawai Toko', japanese: 'はい。あちらに タイ料理の コーナーが あります。ナンプラーは いちばん 下です。', kana: 'はい。あちらに タイりょうりの コーナーが あります。ナンプラーは いちばん したです。', romaji: 'Hai. Achira ni Tai-ryouri no koonaa ga arimasu. Nanpuraa wa ichiban shita desu.', indonesian: 'Ya, ada. Di sebelah sana ada bagian masakan Thailand. Nam Pla ada di rak paling bawah.' },
        { speaker: 'ミラー', role: 'Mike Miller', japanese: 'わかりました。どうも。', kana: 'わかりました。どうも。', romaji: 'Wakarimashita. Doumo.', indonesian: 'Baik, saya mengerti. Terima kasih.' }
      ]
    },
    exercises: [
      {
        id: '10-e1',
        type: 'multiple-choice',
        question: 'あそこに たなかせんせいが ____。',
        options: ['います', 'あります', 'です', 'します'],
        correctAnswer: 'います',
        explanation: 'Karena Tanaka-sensei adalah manusia (makhluk bernyawa), kita menggunakan kata kerja います.'
      }
    ]
  },
  {
    chapter: 11,
    titleId: 'Bab 11: Kata Bilangan & Frekuensi (Counters: hitotsu, hon, mai, nin)',
    titleJp: '第11課：助数詞・期間・頻度',
    description: 'Mempelajari cara menghitung barang (hitotsu, futatsu), lembar (mai), batang (hon), orang (nin), mesin (dai), serta durasi waktu dan frekuensi.',
    summaryGrammar: [
      'N を [Jumlah] V-ます (Penempatan kata bilangan langsung sebelum kata kerja)',
      'Durasi に [Jumlah]回 V-ます (Frekuensi: 1 minggu 2 kali)',
      'どのくらい かかりますか (Berapa lama memakan waktu/biaya?)',
      'Counter: ～つ, ～人 (nin), ～台 (dai), ～枚 (mai), ～本 (hon)'
    ],
    vocab: [
      { id: '11-1', kanji: '一つ / 二つ / 三つ', kana: 'ひとつ / ふたつ / みっつ', romaji: 'hitotsu / futatsu / mittsu', indonesian: 'satu / dua / tiga buah', wordType: 'kata benda' },
      { id: '11-2', kanji: '四つ / 五つ / 六つ', kana: 'よっつ / いつつ / むっつ', romaji: 'yottsu / itsutsu / muttsu', indonesian: 'empat / lima / enam buah', wordType: 'kata benda' },
      { id: '11-3', kanji: '七つ / 八つ / 九つ / 十', kana: 'ななつ / やっつ / ここのつ / とお', romaji: 'nanatsu / yattsu / kokonotsu / too', indonesian: 'tujuh / delapan / sembilan / sepuluh buah', wordType: 'kata benda' },
      { id: '11-4', kanji: '幾つ', kana: 'いくつ', romaji: 'ikutsu', indonesian: 'berapa buah', wordType: 'kata benda' },
      { id: '11-5', kanji: '一人 / 二人', kana: 'ひとり / ふたり', romaji: 'hitori / futari', indonesian: '1 orang / 2 orang (3 orang dst: san-nin, yo-nin...)', wordType: 'kata benda' },
      { id: '11-6', kanji: '～台', kana: '～だい', romaji: '~dai', indonesian: 'unit (mesin, mobil, komputer)', wordType: 'kata benda' },
      { id: '11-7', kanji: '～枚', kana: '～まい', romaji: '~mai', indonesian: 'lembar (kertas, baju, piring)', wordType: 'kata benda' },
      { id: '11-8', kanji: '～回', kana: '～かい', romaji: '~kai', indonesian: 'kali (frekuensi)', wordType: 'kata benda' },
      { id: '11-9', kanji: '～本', kana: '～ほん / ～ぽん / ～ぼん', romaji: '~hon / ~pon / ~bon', indonesian: 'batang (pensil, botol, pohon)', wordType: 'kata benda' },
      { id: '11-10', kanji: 'どのくらい', kana: 'どのくらい', romaji: 'dono kurai', indonesian: 'berapa lama / berapa banyak', wordType: 'kata keterangan' },
      { id: '11-11', kanji: '～時間 / ～週間', kana: '～じかん / ～しゅうかん', romaji: '~jikan / ~shuukan', indonesian: '... jam / ... minggu', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '11-b1',
        title: 'Posisi Kata Bilangan dalam Kalimat',
        pattern: 'Kata Benda を [Jumlah] Kata Kerja',
        explanation: 'Dalam bahasa Jepang, kata bilangan diletakkan langsung di depan kata kerja tanpa partikel tambahan.',
        reibun: [
          { japanese: 'りんごを4つ買いました。', kana: 'りんごをよっつかいました。', romaji: 'Ringo o yottsu kaimashita.', indonesian: 'Saya membeli 4 buah apel.' },
          { japanese: '教室に学生が10人います。', kana: 'きょうしつにがくせいがじゅうにんいます。', romaji: 'Kyoushitsu ni gakusei ga juu-nin imasu.', indonesian: 'Di ruang kelas ada 10 orang siswa.' }
        ]
      },
      {
        id: '11-b2',
        title: 'Menyatakan Frekuensi: Jangka Waktu に [Jumlah]回',
        pattern: 'Periode に Jumlah 回',
        explanation: '1 bulan 2 kali = 1か月に2回 (ikkagetsu ni ni-kai).',
        reibun: [
          { japanese: '1か月に2回映画を見ます。', kana: 'いっかげつににかいえいがをみます。', romaji: 'Ikkagetsu ni ni-kai eiga o mimasu.', indonesian: 'Saya menonton film 2 kali dalam sebulan.' }
        ]
      }
    ],
    kaiwa: {
      title: 'これをお願いします (Tolong kirimkan ini)',
      situation: 'Seorang pelanggan mengirim paket kilat di kantor pos.',
      dialogue: [
        { speaker: '客', role: 'Pengirim', japanese: 'オーストラリアまで航空便でお願いします。いくらですか。', kana: 'オーストラリアまでこうくうびんでおねがいします。いくらですか。', romaji: 'Oosutoraria made koukuubin de onegaishimasu. Ikura desu ka.', indonesian: 'Tolong lewat pos udara sampai ke Australia. Berapa biayanya?' },
        { speaker: '郵便局員', role: 'Petugas Pos', japanese: '7,600円です。5日くらいかかります。', kana: 'ななせんろっぴゃくえんです。いつかくらいかかります。', romaji: 'Nana-sen roppyaku en desu. Itsuka kurai kakarimasu.', indonesian: '7.600 Yen. Memakan waktu sekitar 5 hari.' }
      ]
    },
    exercises: [
      {
        id: '11-e1',
        type: 'multiple-choice',
        question: 'Hitungan untuk 2 lembar tiket kertas adalah...',
        options: ['2枚 (にまい)', '2台 (にだい)', '2本 (にほん)', '2つ (ふたつ)'],
        correctAnswer: '2枚 (にまい)',
        explanation: 'Kertas, tiket, prangko, baju yang tipis dan pipih dihitung menggunakan akhiran -枚 (まい).'
      }
    ]
  },
  {
    chapter: 12,
    titleId: 'Bab 12: Lampau Kata Sifat & Perbandingan (yori, hou ga, ichiban)',
    titleJp: '第12課：形容詞の過去形・比較表現',
    description: 'Bentuk lampau kata sifat (katta / deshita), kalimat perbandingan antara dua hal (N1 wa N2 yori... / N1 no hou ga), dan perbandingan paling unggul (ichiban).',
    summaryGrammar: [
      'い-keiyoushi lampau: ～かったです / ～くなかったです',
      'な-keiyoushi lampau: ～でした / ～じゃありませんでした',
      'N1 は N2 より [Kata Sifat] です (N1 lebih ... daripada N2)',
      'N1 と N2 と どちらが [Kata Sifat] ですか (Antara N1 dan N2 mana yang lebih...?)',
      'Kategori の 中で N が いちばん [Kata Sifat] です (Di antara kategori, N yang paling...)'
    ],
    vocab: [
      { id: '12-1', kanji: '簡単', kana: 'かんたん[な]', romaji: 'kantan[na]', indonesian: 'mudah / sederhana', wordType: 'kata sifat-na' },
      { id: '12-2', kanji: '近い / 遠い', kana: 'ちかい / とおい', romaji: 'chikai / tooi', indonesian: 'dekat / jauh', wordType: 'kata sifat-i' },
      { id: '12-3', kanji: '速い / 早い', kana: 'はやい', romaji: 'hayai', indonesian: 'cepat / pagi-pagi', wordType: 'kata sifat-i' },
      { id: '12-4', kanji: '遅い', kana: 'おそい', romaji: 'osoi', indonesian: 'lambat / terlambat', wordType: 'kata sifat-i' },
      { id: '12-5', kanji: '多い / 少ない', kana: 'おおい / すくない', romaji: 'ooi / sukunai', indonesian: 'banyak / sedikit', wordType: 'kata sifat-i' },
      { id: '12-6', kanji: '暖かい / 涼しい', kana: 'あたたかい / すずしい', romaji: 'atatakai / suzushii', indonesian: 'hangat / sejuk', wordType: 'kata sifat-i' },
      { id: '12-7', kanji: '甘い / 辛い', kana: 'あまい / からい', romaji: 'amai / karai', indonesian: 'manis / pedas', wordType: 'kata sifat-i' },
      { id: '12-8', kanji: '重い / 軽い', kana: 'おもい / かるい', romaji: 'omoi / karui', indonesian: 'berat / ringan', wordType: 'kata sifat-i' },
      { id: '12-9', kanji: '季節', kana: 'きせつ', romaji: 'kisetsu', indonesian: 'musim', wordType: 'kata benda' },
      { id: '12-10', kanji: '春 / 夏 / 秋 / 冬', kana: 'はる / なつ / あき / ふゆ', romaji: 'haru / natsu / aki / fuyu', indonesian: 'musim semi / panas / gugur / dingin', wordType: 'kata benda' },
      { id: '12-11', kanji: '一番', kana: 'いちばん', romaji: 'ichiban', indonesian: 'paling / nomor satu', wordType: 'kata keterangan' },
      { id: '12-12', kanji: 'ずっと', kana: 'ずっと', romaji: 'zutto', indonesian: 'jauh lebih ...', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '12-b1',
        title: 'Konjugasi Lampau Kata Sifat -i dan -na',
        pattern: '-i: ～かったです / -na: ～でした',
        explanation: 'Kemarin dingin: 昨日は寒かったです (Kinou wa samukatta desu). Dulu tenang: 静かでした (Shizuka deshita).',
        reibun: [
          { japanese: '昨日は天気が良かったです。', kana: 'きのうはてんきがよかったです。', romaji: 'Kinou wa tenki ga yokatta desu.', indonesian: 'Kemarin cuacanya bagus.' },
          { japanese: 'お祭りはとても賑やかでした。', kana: 'おまつりはとてもにぎやかでした。', romaji: 'Omatsuri wa totemo nigiyaka deshita.', indonesian: 'Festivalnya sangat ramai.' }
        ]
      },
      {
        id: '12-b2',
        title: 'Perbandingan Dua Hal: N1 は N2 より ... です',
        pattern: 'N1 は N2 より [Kata Sifat] です',
        explanation: 'Menyatakan bahwa N1 lebih unggul sifatnya dibanding N2.',
        reibun: [
          { japanese: '新幹線は飛行機より安いです。', kana: 'しんかんせんはひこうきよりやすいです。', romaji: 'Shinkansen wa hikouki yori yasui desu.', indonesian: 'Shinkansen lebih murah daripada pesawat.' },
          { japanese: '日本とインドネシアとどちらが暑いですか。…インドネシアのほうが暑いです。', kana: 'にほんとインドネシアとどちらがあついですか。…インドネシアのほうがあついです。', romaji: 'Nihon to Indoneshia to dochira ga atsui desu ka. ...Indoneshia no hou ga atsui desu.', indonesian: 'Antara Jepang dan Indonesia mana yang lebih panas? ...Indonesia yang lebih panas.' }
        ]
      },
      {
        id: '12-b3',
        title: 'Perbandingan Superlatif: [Kategori] の 中で N が いちばん ... です',
        pattern: 'Kategori の 中で 何/どこ/だれ が いちばん [Sifat] ですか',
        explanation: 'Menanyakan atau menyatakan yang "paling" di antara suatu kelompok/kategori.',
        reibun: [
          { japanese: '1年の中で夏がいちばん好きです。', kana: 'いちねんのなかでなつがいちばんすきです。', romaji: 'Ichi-nen no naka de natsu ga ichiban suki desu.', indonesian: 'Dalam 1 tahun, saya paling suka musim panas.' }
        ]
      }
    ],
    kaiwa: {
      title: '祇園祭はどうでしたか (Bagaimana Festival Gion?)',
      situation: 'Miller menanyakan pengalaman temannya yang baru kembali dari Kyoto.',
      dialogue: [
        { speaker: 'ミラー', role: 'Teman', japanese: '京都の祇園祭はどうでしたか。', kana: 'きょうとのぎおんまつりはどうでしたか。', romaji: 'Kyouto no Gion matsuri wa dou deshita ka.', indonesian: 'Bagaimana Festival Gion di Kyoto kemarin?' },
        { speaker: '木村', role: 'Teman', japanese: 'とても面白かったです。でも、人が多かったです。', kana: 'とてもおもしろかったです。でも、ひとがおおかったです。', romaji: 'Totemo omoshirokatta desu. Demo, hito ga ookatta desu.', indonesian: 'Sangat menarik! Tapi, orangnya banyak sekali.' }
      ]
    },
    exercises: [
      {
        id: '12-e1',
        type: 'multiple-choice',
        question: 'きのうは あまり __________。(さむい)',
        options: ['さむくなかったです', 'さむくありませんでした', 'さむいでした', 'さむくなかったでした'],
        correctAnswer: 'さむくなかったです',
        explanation: 'Bentuk lampau negatif dari kata sifat-i さむい adalah さむくなかったです.'
      }
    ]
  },
  {
    chapter: 13,
    titleId: 'Bab 13: Keinginan & Tujuan (hoshii, V-tai, ni ikimasu)',
    titleJp: '第13課：希望・移動の目的（欲しい・～たい・～に行く）',
    description: 'Menyatakan keinginan memiliki barang (hoshii), keinginan melakukan aktivitas (V-tai), serta bepergian dengan tujuan tertentu (V-masu buang masu + ni ikimasu).',
    summaryGrammar: [
      'N が 欲しいです (Ingin memiliki N)',
      'V-たいです (Ingin melakukan kegiatan V)',
      'V-たくないです (Tidak ingin melakukan kegiatan V)',
      'Tempat へ [V-masu tanpa masu / N] に 行きます / 来ます / 帰ります (Pergi untuk melakukan ...)'
    ],
    vocab: [
      { id: '13-1', kanji: '欲しい', kana: 'ほしい', romaji: 'hoshii', indonesian: 'ingin / mau (benda)', wordType: 'kata sifat-i' },
      { id: '13-2', kanji: '寂しい', kana: 'さびしい', romaji: 'sabishii', indonesian: 'kesepian', wordType: 'kata sifat-i' },
      { id: '13-3', kanji: '広い / 狭い', kana: 'ひろい / せまい', romaji: 'hiroi / semai', indonesian: 'luas / sempit', wordType: 'kata sifat-i' },
      { id: '13-4', kanji: 'プール', kana: 'プール', romaji: 'puuru', indonesian: 'kolam renang', wordType: 'kata benda' },
      { id: '13-5', kanji: '川', kana: 'かわ', romaji: 'kawa', indonesian: 'sungai', wordType: 'kata benda' },
      { id: '13-6', kanji: '美術', kana: 'びじゅつ', romaji: 'bijutsu', indonesian: 'seni rupa', wordType: 'kata benda' },
      { id: '13-7', kanji: '釣り', kana: 'つり (～をします)', romaji: 'tsuri', indonesian: 'memancing', wordType: 'kata benda' },
      { id: '13-8', kanji: 'スキー', kana: 'スキー (～をします)', romaji: 'sukii', indonesian: 'ski', wordType: 'kata benda' },
      { id: '13-9', kanji: '買い物', kana: 'かいもの', romaji: 'kaimono', indonesian: 'berbelanja', wordType: 'kata benda' },
      { id: '13-10', kanji: '散歩', kana: 'さんぽ (～をします)', romaji: 'sanpo', indonesian: 'jalan-jalan santai', wordType: 'kata benda' },
      { id: '13-11', kanji: '喉が渇きます', kana: 'のどがかわきます', romaji: 'nodo ga kawakimasu', indonesian: 'haus (tenggorokan kering)', wordType: 'kata kerja 1' },
      { id: '13-12', kanji: 'お腹が空きます', kana: 'おなかがすきます', romaji: 'onaka ga sukimasu', indonesian: 'lapar (perut kosong)', wordType: 'kata kerja 1' }
    ],
    bunkei: [
      {
        id: '13-b1',
        title: 'Keinginan Memiliki Benda: N が 欲しいです',
        pattern: 'Kata Benda が 欲しいです',
        explanation: 'Menyatakan keinginan orang pertama (saya) untuk memiliki suatu benda fisik. Mengikuti aturan konjugasi kata sifat-i.',
        reibun: [
          { japanese: '私は新しいパソコンが欲しいです。', kana: 'わたしはあたらしいパソコンがほしいです。', romaji: 'Watashi wa atarashii pasokon ga hoshii desu.', indonesian: 'Saya ingin laptop/komputer baru.' }
        ]
      },
      {
        id: '13-b2',
        title: 'Keinginan Melakukan Aksi: V-たいです',
        pattern: 'V-masu (buang masu) + たいです',
        explanation: 'Digunakan saat pembicara ingin melakukan suatu tindakan. Partikel objek boleh を atau が.',
        reibun: [
          { japanese: '日本へ行きたいです。', kana: 'にほんへいきたいです。', romaji: 'Nihon e ikitai desu.', indonesian: 'Saya ingin pergi ke Jepang.' },
          { japanese: '今何も食べたくないです。', kana: 'いまなにもたべたくないです。', romaji: 'Ima nani mo tabetakunai desu.', indonesian: 'Sekarang saya tidak ingin makan apa pun.' }
        ]
      },
      {
        id: '13-b3',
        title: 'Tujuan Perjalanan: Tempat へ V-masu (buang masu) に 行きます',
        pattern: 'Tempat へ [Tujuan V / N] に 行きます',
        explanation: 'Menyatakan pergi/datang ke suatu tempat untuk tujuan tertentu.',
        reibun: [
          { japanese: 'デパートへ服を買いに行きます。', kana: 'デパートへふくをかいにいきます。', romaji: 'Depaato e fuku o kai ni ikimasu.', indonesian: 'Pergi ke department store untuk membeli pakaian.' }
        ]
      }
    ],
    kaiwa: {
      title: '別々に お願いします (Tolong hitung terpisah masing-masing)',
      situation: 'Yamada dan Miller makan siang bersama di restoran Jepang "つるや (Tsuruya)", lalu saat membayar di kasir meminta tagihan dipisahkan.',
      dialogue: [
        { speaker: '山田', role: 'Pegawai IMC', japanese: 'もう 12時ですよ。昼ごはんを 食べに 行きませんか。', kana: 'もう じゅうにじですよ。ひるごはんを たべに いきませんか。', romaji: 'Mou juu-ni-ji desu yo. Hirugohan o tabe ni ikimasen ka.', indonesian: 'Sudah jam 12 lho. Maukah pergi makan siang bersama?' },
        { speaker: 'ミラー', role: 'Pegawai IMC', japanese: 'ええ。', kana: 'ええ。', romaji: 'Ee.', indonesian: 'Ayo.' },
        { speaker: '山田', role: 'Pegawai IMC', japanese: 'どこへ 行きますか。', kana: 'どこへ いきますか。', romaji: 'Doko e ikimasu ka.', indonesian: 'Mau pergi ke mana?' },
        { speaker: 'ミラー', role: 'Pegawai IMC', japanese: 'そうですね。きょうは 日本料理が 食べたいですね。', kana: 'そうですね。きょうは にほんりょうりが たべたいですね。', romaji: 'Sou desu ne. Kyou wa Nihon-ryouri ga tabetai desu ne.', indonesian: 'Iya ya. Hari ini saya ingin makan masakan Jepang.' },
        { speaker: '山田', role: 'Pegawai IMC', japanese: 'じゃ、「つるや」へ 行きましょう。', kana: 'じゃ、「つるや」へ いきましょう。', romaji: 'Ja, "Tsuruya" e ikimashou.', indonesian: 'Kalau begitu, ayo ke restoran "Tsuruya".' },
        { speaker: '店の 人', role: 'Pelayan Restoran', japanese: 'ご注文は？', kana: 'ごちゅうもんは？', romaji: 'Go-chuumon wa?', indonesian: 'Mau pesan apa?' },
        { speaker: 'ミラー', role: 'Pegawai IMC', japanese: 'わたしは てんぷら定食。', kana: 'わたしは てんぷらていしょく。', romaji: 'Watashi wa tenpura-teishoku.', indonesian: 'Saya set menu tempura.' },
        { speaker: '山田', role: 'Pegawai IMC', japanese: 'わたしは 牛どん。', kana: 'わたしは ぎゅうどん。', romaji: 'Watashi wa gyuudon.', indonesian: 'Saya gyudon (mangkuk nasi sapi).' },
        { speaker: '店の 人', role: 'Pelayan Restoran', japanese: 'てんぷら定食と 牛どんですね。少々 お待ち ください。', kana: 'てんぷらていしょくと ぎゅうどんですね。しょうしょう おまち ください。', romaji: 'Tenpura-teishoku to gyuudon desu ne. Shoushou omachi kudasai.', indonesian: 'Satu set menu tempura dan satu gyudon ya. Mohon tunggu sebentar.' },
        { speaker: '店の 人', role: 'Kasir', japanese: '1,680円で ございます。', kana: 'せんろっぴゃくはちじゅうえんで ございます。', romaji: 'Sen roppyaku hachijuu en de gozaimasu.', indonesian: 'Totalnya 1.680 Yen.' },
        { speaker: 'ミラー', role: 'Pegawai IMC', japanese: 'すみません。別々に お願いします。', kana: 'すみません。べつべつに おねがいします。', romaji: 'Sumimasen. Betsubetsu ni onegaishimasu.', indonesian: 'Permisi. Tolong hitung terpisah masing-masing.' },
        { speaker: '店の 人', role: 'Kasir', japanese: 'はい。てんぷら定食は 980円、牛どんは 700円です。', kana: 'はい。てんぷらていしょくは きゅうひゃくはちじゅうえん、ぎゅうどんは ななひゃくえんです。', romaji: 'Hai. Tenpura-teishoku wa kyuuhyaku hachijuu en, gyuudon wa nanahyaku en desu.', indonesian: 'Baik. Set menu tempura 980 Yen, dan gyudon 700 Yen.' }
      ]
    },
    exercises: [
      {
        id: '13-e1',
        type: 'multiple-choice',
        question: 'わたしは えきへ ともだちを ________ に いきます。',
        options: ['迎え (むかえ)', '迎えます', '迎えて', '迎える'],
        correctAnswer: '迎え (むかえ)',
        explanation: 'Pola tujuan perjalanan menggunakan akar kata kerja bentuk masu (buang masu): むかえ[ます] + に いきます.'
      }
    ]
  },
  {
    chapter: 14,
    titleId: 'Bab 14: Bentuk -Te (て形) & Permintaan (te kudasai)',
    titleJp: '第14課：動詞の「て」形・指示（～てください・～ています）',
    description: 'Aturan konjugasi pembentukan Bentuk -Te (te-kei) Golongan 1, 2, dan 3, memohon/meminta tolong (～てください), sedang berlangsung (～ています), dan menawarkan bantuan (～ましょうか).',
    summaryGrammar: [
      'Konjugasi Bentuk -Te (Grup 1: -te/-de, Grup 2: -te, Grup 3: shite/kite)',
      'V-てください (Tolong lakukan V)',
      'V-ています (Sedang melakukan V saat ini)',
      'V-ましょうか (Bagaimana kalau saya bantu lakukan V?)'
    ],
    vocab: [
      { id: '14-1', kanji: 'つけます', kana: 'つけます (でんきを~)', romaji: 'tsukemasu', indonesian: 'menyalakan (lampu)', wordType: 'kata kerja 2' },
      { id: '14-2', kanji: '消します', kana: 'けします', romaji: 'keshimasu', indonesian: 'mematikan (lampu, api)', wordType: 'kata kerja 1' },
      { id: '14-3', kanji: '開けます', kana: 'あけます (ドアを~)', romaji: 'akemasu', indonesian: 'membuka (pintu)', wordType: 'kata kerja 2' },
      { id: '14-4', kanji: '閉めます', kana: 'しめます', romaji: 'shimemasu', indonesian: 'menutup', wordType: 'kata kerja 2' },
      { id: '14-5', kanji: '急ぎます', kana: 'いそぎます', romaji: 'isogimasu', indonesian: 'bergegas / buru-buru', wordType: 'kata kerja 1' },
      { id: '14-6', kanji: '待ちます', kana: 'まちます', romaji: 'machimasu', indonesian: 'menunggu', wordType: 'kata kerja 1' },
      { id: '14-7', kanji: '止めます', kana: 'とめます', romaji: 'tomemasu', indonesian: 'menghentikan / memarkir', wordType: 'kata kerja 2' },
      { id: '14-8', kanji: '見せます', kana: 'みせます', romaji: 'misemasu', indonesian: 'memperlihatkan', wordType: 'kata kerja 2' },
      { id: '14-9', kanji: '手伝います', kana: 'てつだいます', romaji: 'tetsudaimasu', indonesian: 'membantu', wordType: 'kata kerja 1' },
      { id: '14-10', kanji: '呼びます', kana: 'よびます', romaji: 'yobimasu', indonesian: 'memanggil', wordType: 'kata kerja 1' },
      { id: '14-11', kanji: '話します', kana: 'はなします', romaji: 'hanashimasu', indonesian: 'berbicara', wordType: 'kata kerja 1' },
      { id: '14-12', kanji: '雨', kana: 'あめ (～がふります)', romaji: 'ame', indonesian: 'hujan (hujan turun)', wordType: 'kata benda' },
      { id: '14-13', kanji: '荷物', kana: 'にもつ', romaji: 'nimotsu', indonesian: 'barang bawaan', wordType: 'kata benda' },
      { id: '14-14', kanji: 'ゆっくり', kana: 'ゆっくり', romaji: 'yukkuri', indonesian: 'pelan-pelan / santai', wordType: 'kata keterangan' },
      { id: '14-15', kanji: 'もう一度', kana: 'もういちど', romaji: 'mou ichido', indonesian: 'sekali lagi', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '14-b1',
        title: 'Hukum Perubahan Bentuk -Te (て形)',
        pattern: 'Aturan Konjugasi Golongan 1, 2, 3',
        explanation: 'Golongan 1: (i, chi, ri -> tte), (mi, bi, ni -> nde), (ki -> ite / ikimasu -> itte), (gi -> ide), (shi -> shite). Golongan 2: buang masu + te. Golongan 3: shimasu -> shite, kimasu -> kite.',
        reibun: [
          { japanese: 'ちょっと待ってください。', kana: 'ちょっとまってください。', romaji: 'Chotto matte kudasai.', indonesian: 'Tolong tunggu sebentar.' },
          { japanese: '名前を書いてください。', kana: 'なまえをかいてください。', romaji: 'Namae o kaite kudasai.', indonesian: 'Tolong tulis nama Anda.' }
        ]
      },
      {
        id: '14-b2',
        title: 'Sedang Berlangsung: V-ています',
        pattern: 'V-て います',
        explanation: 'Menyatakan perbuatan yang sedang terjadi pada detik pembicara berbicara.',
        reibun: [
          { japanese: '今雨が降っています。', kana: 'いまあめがふっています。', romaji: 'Ima ame ga futte imasu.', indonesian: 'Sekarang sedang turun hujan.' },
          { japanese: 'ミラーさんは電話をかけています。', kana: 'ミラーさんはでんわをかけています。', romaji: 'Miraa-san wa denwa o kakete imasu.', indonesian: 'Miller sedang menelepon.' }
        ]
      },
      {
        id: '14-b3',
        title: 'Menawarkan Bantuan: V-ましょうか',
        pattern: 'V-ましょうか',
        explanation: 'Menawarkan diri secara sopan untuk membantu lawan bicara.',
        reibun: [
          { japanese: '荷物を持ちましょうか。…ありがとうございます。', kana: 'にもつをもちましょうか。…ありがとうございます。', romaji: 'Nimotsu o mochimashou ka. ...Arigatou gozaimasu.', indonesian: 'Bolehkah saya bantu bawakan barangnya? ...Terima kasih banyak.' }
        ]
      }
    ],
    kaiwa: {
      title: 'みどり町までお願いします (Tolong antarkan sampai ke Midori-chou)',
      situation: 'Miller naik taksi dan memberikan arahan kepada supir taksi.',
      dialogue: [
        { speaker: 'ミラー', role: 'Penumpang', japanese: 'みどり町までお願いします。', kana: 'みどりちょうまでおねがいします。', romaji: 'Midori-chou made onegaishimasu.', indonesian: 'Tolong antarkan sampai ke kota Midori.' },
        { speaker: '運転手', role: 'Supir Taksi', japanese: 'はい、かしこまりました。', kana: 'はい、かしこまりました。', romaji: 'Hai, kashikomarimashita.', indonesian: 'Baik, dimengerti.' },
        { speaker: 'ミラー', role: 'Penumpang', japanese: 'あの信号を右へ曲がってください。', kana: 'あのしんごうをみぎへまがってください。', romaji: 'Ano shingou o migi e magatte kudasai.', indonesian: 'Tolong belok ke kanan di lampu lalu lintas depan itu.' }
      ]
    },
    exercises: [
      {
        id: '14-e1',
        type: 'multiple-choice',
        question: 'Bentuk -Te yang benar dari kata kerja "かきます (menulis)" adalah...',
        options: ['かいて', 'かって', 'かちて', 'かんで'],
        correctAnswer: 'かいて',
        explanation: 'Kata kerja Golongan 1 berakhiran -ki berubah menjadi -ite: かきます -> かいて.'
      }
    ]
  },
  {
    chapter: 15,
    titleId: 'Bab 15: Izin & Larangan (te mo ii desu, te wa ikemasen)',
    titleJp: '第15課：許可・禁止（～てもいい・～てはいけない）',
    description: 'Meminta atau memberi izin (～てもいいですか), menyatakan larangan keras (～てはいけません), serta menyatakan status keadaan yang menetap (menikah, tinggal, mengenal).',
    summaryGrammar: [
      'V-てもいいですか (Bolehkah saya melakukan V?)',
      'V-てはいけません (Tidak boleh / Dilarang melakukan V)',
      'V-ています (Status berkelanjutan: 結婚しています, 住んでいます, 知っています)'
    ],
    vocab: [
      { id: '15-1', kanji: '置きます', kana: 'おきます', romaji: 'okimasu', indonesian: 'meletakkan / menaruh', wordType: 'kata kerja 1' },
      { id: '15-2', kanji: '作ります / 造ります', kana: 'つくります', romaji: 'tsukurimasu', indonesian: 'membuat / memproduksi', wordType: 'kata kerja 1' },
      { id: '15-3', kanji: '売ります', kana: 'うります', romaji: 'urimasu', indonesian: 'menjual', wordType: 'kata kerja 1' },
      { id: '15-4', kanji: '知ります', kana: 'しります (しっています)', romaji: 'shirimasu', indonesian: 'mengenal / mengetahui (bentuk negatif: しりません)', wordType: 'kata kerja 1' },
      { id: '15-5', kanji: '住みます', kana: 'すみます (すんでいます)', romaji: 'sumimasu', indonesian: 'tinggal / menetap', wordType: 'kata kerja 1' },
      { id: '15-6', kanji: '研究します', kana: 'けんきゅうします', romaji: 'kenkyuushimasu', indonesian: 'meneliti', wordType: 'kata kerja 3' },
      { id: '15-7', kanji: '資料', kana: 'しりょう', romaji: 'shiryou', indonesian: 'data / dokumen', wordType: 'kata benda' },
      { id: '15-8', kanji: 'カタログ', kana: 'カタログ', romaji: 'katarogu', indonesian: 'katalog', wordType: 'kata benda' },
      { id: '15-9', kanji: '時刻表', kana: 'じこくひょう', romaji: 'jikokuhyou', indonesian: 'jadwal keberangkatan', wordType: 'kata benda' },
      { id: '15-10', kanji: '服', kana: 'ふく', romaji: 'fuku', indonesian: 'pakaian', wordType: 'kata benda' },
      { id: '15-11', kanji: '製品', kana: 'せいひん', romaji: 'seihin', indonesian: 'produk jadi', wordType: 'kata benda' },
      { id: '15-12', kanji: '独身', kana: 'どくしん', romaji: 'dokushin', indonesian: 'lajang / belum menikah', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '15-b1',
        title: 'Meminta Izin: V-てもいいですか',
        pattern: 'V-て も いいですか',
        explanation: 'Digunakan untuk meminta izin kepada lawan bicara secara sopan.',
        reibun: [
          { japanese: 'ここで写真を撮ってもいいですか。…はい、いいですよ。', kana: 'ここでしゃしんをとってもいいですか。…はい、いいですよ。', romaji: 'Koko de shashin o totte mo ii desu ka. ...Hai, ii desu yo.', indonesian: 'Bolehkah saya mengambil foto di sini? ...Ya, silakan boleh.' }
        ]
      },
      {
        id: '15-b2',
        title: 'Menyatakan Larangan: V-てはいけません',
        pattern: 'V-て は いけません',
        explanation: 'Menyatakan peraturan atau larangan tegas ("dilarang / tidak boleh").',
        reibun: [
          { japanese: 'ここに車を止めてはいけません。', kana: 'ここにくるまをとめてはいけません。', romaji: 'Koko ni kuruma o tomete wa ikemasen.', indonesian: 'Dilarang memarkir mobil di sini.' }
        ]
      },
      {
        id: '15-b3',
        title: 'Status Keberlanjutan: V-ています',
        pattern: 'Bentuk -Te + います untuk hasil kondisi',
        explanation: 'Bukan sekadar sedang melakukan aksi, melainkan keadaan yang terus bertahan setelah perbuatan terjadi (misalnya tinggal di Tokyo, kenal seseorang, menikah). Khusus "tidak tahu" menggunakan 知りません (shirimasen).',
        reibun: [
          { japanese: '私は東京に住んでいます。', kana: 'わたしはとうきょうにすんでいます。', romaji: 'Watashi wa Toukyou ni sunde imasu.', indonesian: 'Saya tinggal di Tokyo.' },
          { japanese: 'ミラーさんを知っていますか。…いいえ、知りません。', kana: 'ミラーさんをしっていますか。…いいえ、しりません。', romaji: 'Miraa-san o shitte imasu ka. ...Iie, shirimasen.', indonesian: 'Apakah Anda mengenal Miller? ...Tidak, saya tidak kenal.' }
        ]
      }
    ],
    kaiwa: {
      title: 'ご家族は？ (Bagaimana dengan keluarga Anda?)',
      situation: 'Sato menanyakan latar belakang keluarga Miller yang tinggal di New York.',
      dialogue: [
        { speaker: '佐藤', role: 'Rekan', japanese: 'ミラーさんのご家族はどちらにいらっしゃいますか。', kana: 'ミラーさんのごかぞくはどちらにいらっしゃいますか。', romaji: 'Miraa-san no gokazoku wa dochira ni irasshaimasu ka.', indonesian: 'Keluarga Miller tinggal di mana?' },
        { speaker: 'ミラー', role: 'Miller', japanese: '両親はニューヨークの近くに住んでいます。姉は結婚しています。', kana: 'りょうしんはニューヨークのちかくにすんでいます。あねはけっこんしています。', romaji: 'Ryoushin wa Nyuu Yooku no chikaku ni sunde imasu. Ane wa kekkon shite imasu.', indonesian: 'Orang tua saya tinggal di dekat New York. Kakak perempuan saya sudah menikah.' }
      ]
    },
    exercises: [
      {
        id: '15-e1',
        type: 'multiple-choice',
        question: 'A: たなかさんの でんわばんごうを しっていますか。 B: いいえ、___________。',
        options: ['知りません', '知っていません', '知らなかったです', '知りませんでした'],
        correctAnswer: '知りません',
        explanation: 'Meskipun pertanyaannya しっていますか, bentuk penyangkalan/negatifnya selalu しりません (bukan しっていません).'
      }
    ]
  },
  {
    chapter: 16,
    titleId: 'Bab 16: Urutan Tindakan (te, te kara, dou yatte)',
    titleJp: '第16課：動作の順序（～て、～てから・どうやって）',
    description: 'Menyambung beberapa kata kerja berturutan (V1-te, V2-te, V3-masu), melakukan aksi setelah aksi lain selesai (～てから), serta menanyakan cara melakukan sesuatu (dou yatte).',
    summaryGrammar: [
      'V1-て、V2-て、V3-ます (Urutan kegiatan kronologis)',
      'V1-てから、V2 (Setelah V1 selesai, barulah melakukan V2)',
      'N1 は [Fitur Badan/Benda] が [Sifat] です (Topik memiliki bagian yang...)',
      'どうやって (Bagaimana caranya / naik apa)'
    ],
    vocab: [
      { id: '16-1', kanji: '乗ります', kana: 'のります (でんしゃに~)', romaji: 'norimasu', indonesian: 'naik (kendaraan memakai partikel に)', wordType: 'kata kerja 1' },
      { id: '16-2', kanji: '降ります', kana: 'おります (でんしゃを~)', romaji: 'orimasu', indonesian: 'turun (dari kendaraan memakai partikel を)', wordType: 'kata kerja 2' },
      { id: '16-3', kanji: '乗り換えます', kana: 'のりかえます', romaji: 'norikaemasu', indonesian: 'ganti/transit kendaraan', wordType: 'kata kerja 2' },
      { id: '16-4', kanji: '浴びます', kana: 'あびます (シャワーを~)', romaji: 'abimasu', indonesian: 'mandi (shower)', wordType: 'kata kerja 2' },
      { id: '16-5', kanji: '入れます', kana: 'いれます', romaji: 'iremasu', indonesian: 'memasukkan', wordType: 'kata kerja 2' },
      { id: '16-6', kanji: '出します', kana: 'だします', romaji: 'dashimasu', indonesian: 'mengeluarkan / menyerahkan', wordType: 'kata kerja 1' },
      { id: '16-7', kanji: '下ろします', kana: 'おろします (おかねを~)', romaji: 'oroshimasu', indonesian: 'menarik uang (ATM/bank)', wordType: 'kata kerja 1' },
      { id: '16-8', kanji: '入ります', kana: 'はいります (だいがくに~)', romaji: 'hairimasu', indonesian: 'masuk (universitas)', wordType: 'kata kerja 1' },
      { id: '16-9', kanji: '出ます', kana: 'でます (だいがくを~)', romaji: 'demasu', indonesian: 'lulus / keluar', wordType: 'kata kerja 2' },
      { id: '16-10', kanji: '背が高い / 低い', kana: 'せがたかい / ひくい', romaji: 'se ga takai / hikui', indonesian: 'badan tinggi / pendek', wordType: 'kata sifat-i' },
      { id: '16-11', kanji: '頭が良い', kana: 'あたまがいい', romaji: 'atama ga ii', indonesian: 'pintar / cerdas', wordType: 'kata sifat-i' },
      { id: '16-12', kanji: 'どうやって', kana: 'どうやって', romaji: 'dou yatte', indonesian: 'bagaimana caranya', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '16-b1',
        title: 'Menyambung Kegiatan Kronologis: V1-て、V2-て、V3-ます',
        pattern: 'V1-て、V2-て、V3-ます',
        explanation: 'Digunakan untuk menghubungkan beberapa tindakan yang terjadi berurutan dalam satu waktu.',
        reibun: [
          { japanese: '朝ジョギングをして、シャワーを浴びて、会社へ行きます。', kana: 'あさジョギングをして、シャワーをあびて、かいしゃへいきます。', romaji: 'Asa jogingu o shite, shawaa o abite, kaisha e ikimasu.', indonesian: 'Pagi hari saya joging, mandi shower, lalu pergi ke kantor.' }
        ]
      },
      {
        id: '16-b2',
        title: 'Urutan Mutlak: V1-てから、V2',
        pattern: 'V1-てから、V2',
        explanation: 'Menegaskan bahwa V2 baru dimulai setelah V1 benar-benar tuntas diselesaikan.',
        reibun: [
          { japanese: '国へ帰ってから、父の会社で働きます。', kana: 'くにへかえってから、ちちのかいしゃではたらきます。', romaji: 'Kuni e kaette kara, chichi no kaisha de hatarakimasu.', indonesian: 'Setelah pulang ke negara asal, saya akan bekerja di perusahaan ayah.' }
        ]
      }
    ],
    kaiwa: {
      title: '使い方を教えてください (Tolong ajari cara pakainya)',
      situation: 'Maria belajar cara menarik uang tunai di mesin ATM bank Jepang dengan bantuan petugas.',
      dialogue: [
        { speaker: 'マリア', role: 'Nasabah', japanese: 'すみません。このキャッシュカードでお金を下ろしたいんですが、使い方を教えてください。', kana: 'すみません。このキャッシュカードでおかねをおろしたいんですが、つかいかたをおしえてください。', romaji: 'Sumimasen. Kono kyasshu kaado de okane o oroshitai n desu ga, tsukaikata o oshiete kudasai.', indonesian: 'Permisi. Saya ingin menarik uang dengan kartu ATM ini, tolong ajari cara menggunakannya.' },
        { speaker: '行員', role: 'Petugas Bank', japanese: 'まずここを押してください。暗証番号を入れてから、金額を押してください。', kana: 'まずここをおしてください。あんしょうばんごうをいれてから、きんがくをおしてください。', romaji: 'Mazu koko o oshite kudasai. Anshou bangou o irete kara, kingaku o oshite kudasai.', indonesian: 'Pertama tekan di sini. Setelah memasukkan nomor PIN, baru tekan jumlah uangnya.' }
      ]
    },
    exercises: [
      {
        id: '16-e1',
        type: 'multiple-choice',
        question: 'ばんごはんを __________、テレビを みます。 (setelah makan malam)',
        options: ['たべてから', 'たべたから', 'たべないで', 'たべるから'],
        correctAnswer: 'たべてから',
        explanation: 'Pola ~てから (te kara) menyatakan "setelah melakukan aksi A, baru melakukan aksi B".'
      }
    ]
  },
  {
    chapter: 17,
    titleId: 'Bab 17: Bentuk -Nai (ない形) & Keharusan (nakereba narimasen)',
    titleJp: '第17課：動詞の「ない」形・義務・不要（～なければならない）',
    description: 'Aturan konjugasi bentuk negatif kasual -Nai, larangan halus (～ないでください), keharusan (～なければなりません), dan tidak perlu (～なくてもいいです).',
    summaryGrammar: [
      'Konjugasi Bentuk -Nai (Grup 1: -anai, Grup 2: buang masu + nai, Grup 3: shinai / konai)',
      'V-ないでください (Tolong jangan lakukan V)',
      'V-なければなりません (Harus / Wajib melakukan V)',
      'V-なくてもいいです (Tidak usah / Tidak perlu melakukan V)',
      'Topik penegas: N は ～までに V-ます (Paling lambat sampai waktu N)'
    ],
    vocab: [
      { id: '17-1', kanji: '覚えます', kana: 'おぼえます', romaji: 'oboemasu', indonesian: 'mengingat / menghafal', wordType: 'kata kerja 2' },
      { id: '17-2', kanji: '忘れます', kana: 'わすれます', romaji: 'wasuremasu', indonesian: 'lupa', wordType: 'kata kerja 2' },
      { id: '17-3', kanji: 'なくします', kana: 'なくします', romaji: 'nakushimasu', indonesian: 'menghilangkan', wordType: 'kata kerja 1' },
      { id: '17-4', kanji: '払います', kana: 'はらいます', romaji: 'haraimasu', indonesian: 'membayar', wordType: 'kata kerja 1' },
      { id: '17-5', kanji: '返します', kana: 'かえします', romaji: 'kaeshimasu', indonesian: 'mengembalikan', wordType: 'kata kerja 1' },
      { id: '17-6', kanji: '出かけます', kana: 'でかけます', romaji: 'dekakemasu', indonesian: 'pergi keluar rumah', wordType: 'kata kerja 2' },
      { id: '17-7', kanji: '脱ぎます', kana: 'ぬぎます', romaji: 'nugimasu', indonesian: 'melepas (baju, sepatu)', wordType: 'kata kerja 1' },
      { id: '17-8', kanji: '持って来ます', kana: 'もってきます', romaji: 'motte kimasu', indonesian: 'membawa datang', wordType: 'kata kerja 3' },
      { id: '17-9', kanji: '心配します', kana: 'しんぱいします', romaji: 'shinpaishimasu', indonesian: 'khawatir / cemas', wordType: 'kata kerja 3' },
      { id: '17-10', kanji: '残業します', kana: 'ざんぎょうします', romaji: 'zangyoushimasu', indonesian: 'lembur kerja', wordType: 'kata kerja 3' },
      { id: '17-11', kanji: '保険証', kana: 'ほけんしょう', romaji: 'hokenshou', indonesian: 'kartu asuransi kesehatan', wordType: 'kata benda' },
      { id: '17-12', kanji: '熱', kana: 'ねつ (～があります)', romaji: 'netsu', indonesian: 'demam / panas badan', wordType: 'kata benda' },
      { id: '17-13', kanji: '病気', kana: 'びょうき', romaji: 'byouki', indonesian: 'sakit / penyakit', wordType: 'kata benda' },
      { id: '17-14', kanji: '薬', kana: 'くすり (～をのみます)', romaji: 'kusuri', indonesian: 'obat (meminum obat)', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '17-b1',
        title: 'Konjugasi Bentuk -Nai (ない形)',
        pattern: 'G1: kolom -i -> -a + ない / G2: buang masu + ない / G3: しない・こない',
        explanation: 'Khusus vokal -i pada grup 1 berubah ke bunyi -wa (contoh: かいます -> かわない). Khusus あります menjadi ない.',
        reibun: [
          { japanese: 'ここで写真を撮らないでください。', kana: 'ここでしゃしんをとらないでください。', romaji: 'Koko de shashin o toranaide kudasai.', indonesian: 'Tolong jangan mengambil foto di sini.' }
        ]
      },
      {
        id: '17-b2',
        title: 'Keharusan: V-なければなりません',
        pattern: 'V-ない (buang i) + ければなりません',
        explanation: 'Menyatakan kewajiban atau keharusan mutlak ("harus").',
        reibun: [
          { japanese: '薬を飲まなければなりません。', kana: 'くすりをのまなければなりません。', romaji: 'Kusuri o nomanakereba narimasen.', indonesian: 'Saya harus meminum obat.' }
        ]
      },
      {
        id: '17-b3',
        title: 'Tidak Perlu: V-なくてもいいです',
        pattern: 'V-ない (buang i) + くてもいいです',
        explanation: 'Menyatakan tidak ada kewajiban ("tidak perlu / tidak usah").',
        reibun: [
          { japanese: '明日は来なくてもいいです。', kana: 'あしたはこなくてもいいです。', romaji: 'Ashita wa konakute mo ii desu.', indonesian: 'Besok Anda tidak perlu datang.' }
        ]
      }
    ],
    kaiwa: {
      title: 'どうしましたか (Ada apa dengan Anda?)',
      situation: 'Miller pergi ke klinik dokter karena merasa tidak enak badan dan demam.',
      dialogue: [
        { speaker: '医者', role: 'Dokter', japanese: 'どうしましたか。', kana: 'どうしましたか。', romaji: 'Dou shimashita ka.', indonesian: 'Ada keluhan apa?' },
        { speaker: 'ミラー', role: 'Pasien', japanese: '昨日から頭が痛くて、熱もあります。', kana: 'きのうからあたまがいたくて、ねつもあります。', romaji: 'Kinou kara atama ga itakute, netsu mo arimasu.', indonesian: 'Sejak kemarin kepala saya sakit dan juga ada demam.' },
        { speaker: '医者', role: 'Dokter', japanese: '風邪ですね。今日はお風呂に入らないで、ゆっくり休んでください。', kana: 'かぜですね。きょうはおふろにはいらないで、ゆっくりやすんでください。', romaji: 'Kaze desu ne. Kyou wa ofuro ni hairanaide, yukkuri yasunde kudasai.', indonesian: 'Kena flu ya. Hari ini tolong jangan berendam di bak mandi air panas, dan istirahatlah yang cukup.' }
      ]
    },
    exercises: [
      {
        id: '17-e1',
        type: 'multiple-choice',
        question: 'Bentuk -Nai dari kata kerja "はなします (berbicara)" adalah...',
        options: ['はなさない', 'はなしない', 'はなさなくて', 'はなしないです'],
        correctAnswer: 'はなさない',
        explanation: 'Golongan 1 berakhiran -shi berubah ke baris -sa + nai: はなします -> はなさない.'
      }
    ]
  },
  {
    chapter: 18,
    titleId: 'Bab 18: Bentuk Kamus (辞書形) & Kemampuan (koto ga dekimasu)',
    titleJp: '第18課：動詞の辞書形・可能・趣味（～ことができる）',
    description: 'Bentuk kamus (Jisho-kei), menyatakan kemampuan/bisa (～ことができます), hobi (趣味は～ことです), dan sebelum melakukan sesuatu (～前に).',
    summaryGrammar: [
      'Konjugasi Bentuk Kamus / Jisho-kei (G1: baris u, G2: +ru, G3: suru/kuru)',
      'V-る ことができます (Bisa / Mampu melakukan V)',
      '私の趣味は V-る ことです (Hobi saya adalah...)',
      'V1-る 前に、V2 (Sebelum melakukan V1, lakukan V2)',
      'なかなか (Jarang / Susah sekali - diikuti kalimat negatif)'
    ],
    vocab: [
      { id: '18-1', kanji: 'できます', kana: 'できます', romaji: 'dekimasu', indonesian: 'bisa / dapat / mampu', wordType: 'kata kerja 2' },
      { id: '18-2', kanji: '洗います', kana: 'あらいます', romaji: 'araimasu', indonesian: 'mencuci', wordType: 'kata kerja 1' },
      { id: '18-3', kanji: '弾きます', kana: 'ひきます (ピアノを~)', romaji: 'hikimasu', indonesian: 'memainkan (alat musik petik/tuts seperti piano/gitar)', wordType: 'kata kerja 1' },
      { id: '18-4', kanji: '歌います', kana: 'うたいます', romaji: 'utaimasu', indonesian: 'menyanyi', wordType: 'kata kerja 1' },
      { id: '18-5', kanji: '集めます', kana: 'あつめます', romaji: 'atsumemasu', indonesian: 'mengumpulkan / mengoleksi', wordType: 'kata kerja 2' },
      { id: '18-6', kanji: '捨てます', kana: 'すてます', romaji: 'sutemasu', indonesian: 'membuang', wordType: 'kata kerja 2' },
      { id: '18-7', kanji: '換えます', kana: 'かえます', romaji: 'kaemasu', indonesian: 'menukar / mengganti', wordType: 'kata kerja 2' },
      { id: '18-8', kanji: '運転します', kana: 'うんてんします', romaji: 'untenshimasu', indonesian: 'mengemudi / menyetir', wordType: 'kata kerja 3' },
      { id: '18-9', kanji: '予約します', kana: 'よやくします', romaji: 'yoyakushimasu', indonesian: 'memesan / reservasi', wordType: 'kata kerja 3' },
      { id: '18-10', kanji: 'ピアノ', kana: 'ピアノ', romaji: 'piano', indonesian: 'piano', wordType: 'kata benda' },
      { id: '18-11', kanji: '趣味', kana: 'しゅみ', romaji: 'shumi', indonesian: 'hobi / kegemaran', wordType: 'kata benda' },
      { id: '18-12', kanji: '日記', kana: 'にっき', romaji: 'nikki', indonesian: 'buku harian / diary', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '18-b1',
        title: 'Menyatakan Kemampuan: V-る ことができます',
        pattern: 'Kata Kerja (Bentuk Kamus) + ことができます',
        explanation: 'Mengubah kata kerja menjadi nomina dengan menambahkan こと (koto), lalu diikuti ができます (bisa/mampu).',
        reibun: [
          { japanese: 'ミラーさんは漢字を読むことができます。', kana: 'ミラーさんはかんじをよむことができます。', romaji: 'Miraa-san wa kanji o yomu koto ga dekimasu.', indonesian: 'Miller bisa membaca kanji.' },
          { japanese: 'ここでカードを払うことができますか。', kana: 'ここでカードをはらうことができますか。', romaji: 'Koko de kaado o harau koto ga dekimasu ka.', indonesian: 'Apakah di sini bisa membayar dengan kartu?' }
        ]
      },
      {
        id: '18-b2',
        title: 'Sebelum Melakukan Sesuatu: V-る 前に',
        pattern: 'V-Bentuk Kamus 前に / Kata Benda の 前に',
        explanation: 'Menyatakan urutan waktu sebelum melakukan aktivitas.',
        reibun: [
          { japanese: '寝る前に、本を読みます。', kana: 'ねるまえに、ほんをよみます。', romaji: 'Neru mae ni, hon o yomimasu.', indonesian: 'Sebelum tidur, saya membaca buku.' },
          { japanese: '食事の前に、手を洗います。', kana: 'しょくじのまえに、てをあらいます。', romaji: 'Shokuji no mae ni, te o araimasu.', indonesian: 'Sebelum makan, saya mencuci tangan.' }
        ]
      }
    ],
    kaiwa: {
      title: '趣味は何ですか (Apa hobi Anda?)',
      situation: 'Yamada dan Miller mengobrol tentang koleksi koin kuno dan hobi musik.',
      dialogue: [
        { speaker: '山田', role: 'Rekan', japanese: 'ミラーさんの趣味は何ですか。', kana: 'ミラーさんのしゅみはなんですか。', romaji: 'Miraa-san no shumi wa nan desu ka.', indonesian: 'Apa hobi Miller?' },
        { speaker: 'ミラー', role: 'Miller', japanese: '古いコインを集めることです。日本のコインも持っていますよ。', kana: 'ふるいコインをあつめることです。にほんのコインももっていますよ。', romaji: 'Furui koin o atsumeru koto desu. Nihon no koin mo motte imasu yo.', indonesian: 'Mengoleksi koin kuno. Saya juga punya koin Jepang lho.' }
      ]
    },
    exercises: [
      {
        id: '18-e1',
        type: 'multiple-choice',
        question: 'わたしは くるまを ____________ ことが できます。',
        options: ['運転する (うんてんする)', '運転して', '運転します', '運転した'],
        correctAnswer: '運転する (うんてんする)',
        explanation: 'Pola ~ことが できます wajib didahului oleh Kata Kerja Bentuk Kamus (Jisho-kei): うんてんする.'
      }
    ]
  },
  {
    chapter: 19,
    titleId: 'Bab 19: Bentuk -Ta (た形) & Pengalaman (koto ga arimasu)',
    titleJp: '第19課：動詞の「た」形・経験・列挙（～たことがある・～たり～たりする）',
    description: 'Aturan konjugasi bentuk lampau kasual -Ta (persis seperti te-form), menyatakan pengalaman pernah/belum pernah (～たことがあります), perbuatan bolak-balik/contoh acak (～たり～たりします), dan perubahan kondisi (narimasu).',
    summaryGrammar: [
      'Konjugasi Bentuk -Ta (sama persis dengan Bentuk -Te: te -> ta, de -> da)',
      'V-た ことがあります (Pernah memiliki pengalaman V)',
      'V1-たり、V2-たり します (Melakukan kegiatan seperti V1, V2, dsb)',
      'Kata Sifat / Benda に なります (Menjadi...)'
    ],
    vocab: [
      { id: '19-1', kanji: '登ります', kana: 'のぼります (やまに~)', romaji: 'noborimasu', indonesian: 'mendaki (gunung)', wordType: 'kata kerja 1' },
      { id: '19-2', kanji: '泊まります', kana: 'とまります (ホテルに~)', romaji: 'tomarimasu', indonesian: 'menginap (di hotel)', wordType: 'kata kerja 1' },
      { id: '19-3', kanji: '掃除します', kana: 'そうじします', romaji: 'soujishimasu', indonesian: 'membersihkan ruangan', wordType: 'kata kerja 3' },
      { id: '19-4', kanji: '洗濯します', kana: 'せんたくします', romaji: 'sentakushimasu', indonesian: 'mencuci pakaian', wordType: 'kata kerja 3' },
      { id: '19-5', kanji: '練習します', kana: 'れんしゅうします', romaji: 'renshuushimasu', indonesian: 'berlatih', wordType: 'kata kerja 3' },
      { id: '19-6', kanji: 'なります', kana: 'なります', romaji: 'narimasu', indonesian: 'menjadi', wordType: 'kata kerja 1' },
      { id: '19-7', kanji: '眠い', kana: 'ねむい', romaji: 'nemui', indonesian: 'mengantuk', wordType: 'kata sifat-i' },
      { id: '19-8', kanji: '強い / 弱い', kana: 'つよい / よわい', romaji: 'tsuyoi / yowai', indonesian: 'kuat / lemah', wordType: 'kata sifat-i' },
      { id: '19-9', kanji: 'お茶', kana: 'おちゃ (～をたてます)', romaji: 'ocha', indonesian: 'upacara minum teh (Chado)', wordType: 'kata benda' },
      { id: '19-10', kanji: '日', kana: 'ひ', romaji: 'hi', indonesian: 'hari / tanggal', wordType: 'kata benda' },
      { id: '19-11', kanji: '調子', kana: 'ちょうし', romaji: 'choushi', indonesian: 'kondisi kesehatan / mesin', wordType: 'kata benda' },
      { id: '19-12', kanji: '一度も', kana: 'いちども', romaji: 'ichido mo', indonesian: 'sekali pun belum pernah (diikuti negatif)', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '19-b1',
        title: 'Menyatakan Pernah Berpengalaman: V-た ことがあります',
        pattern: 'V-た ことがあります (Pernah) / ありません (Belum pernah)',
        explanation: 'Digunakan untuk menceritakan peristiwa yang pernah dialami di masa lalu seumur hidup.',
        reibun: [
          { japanese: '富士山に登ったことがあります。', kana: 'ふじさんにのぼったことがあります。', romaji: 'Fujisan ni nobotta koto ga arimasu.', indonesian: 'Saya pernah mendaki Gunung Fuji.' },
          { japanese: 'すしを食べたことがありません。', kana: 'すしをたべたことがありません。', romaji: 'Sushi o tabeta koto ga arimasen.', indonesian: 'Saya belum pernah makan sushi.' }
        ]
      },
      {
        id: '19-b2',
        title: 'Menyebutkan Contoh Kegiatan Acak: V1-たり、V2-たり します',
        pattern: 'V1-たり、V2-たり します / しました',
        explanation: 'Menyebutkan beberapa tindakan representatif yang dilakukan tanpa terikat urutan kaku.',
        reibun: [
          { japanese: '日曜日はテニスをしたり、映画を見たりしました。', kana: 'にちようびはテニスをしたり、えいがをみたりしました。', romaji: 'Nichiyoubi wa tenisu o shitari, eiga o mitari shimashita.', indonesian: 'Pada hari Minggu saya bermain tenis, menonton film, dan lain sebagainya.' }
        ]
      },
      {
        id: '19-b3',
        title: 'Menjadi: ～になります',
        pattern: 'い-keiyoushi (-ku) / な-keiyoushi & N (+ ni) + なります',
        explanation: 'Menyatakan perubahan wujud atau status kondisi.',
        reibun: [
          { japanese: '寒くなりました。', kana: 'さむくなりました。', romaji: 'Samuku narimashita.', indonesian: 'Cuaca sudah menjadi dingin.' },
          { japanese: '元気になりました。', kana: 'げんきになりました。', romaji: 'Genki ni narimashita.', indonesian: 'Saya sudah menjadi sehat kembali.' }
        ]
      }
    ],
    kaiwa: {
      title: 'ダイエットは明日からします (Dietnya mulai besok saja)',
      situation: 'Maria dan temannya mengobrol saat disuguhi kue lezat saat bertamu.',
      dialogue: [
        { speaker: '友子', role: 'Teman', japanese: 'マリアさん、ケーキをどうぞ。私が作ったんですよ。', kana: 'マリアさん、ケーキをどうぞ。わたしがつくったんですよ。', romaji: 'Maria-san, keeki o douzo. Watashi ga tsukutta n desu yo.', indonesian: 'Maria, silakan cicipi kuenya. Saya sendiri yang buat lho.' },
        { speaker: 'マリア', role: 'Maria', japanese: 'わあ、美味しそう！でも私、今ダイエットをしているんです。', kana: 'わあ、おいしそう！でもわたし、いまだいえっとをしているんです。', romaji: 'Waa, oishisou! Demo watashi, ima daietto o shite iru n desu.', indonesian: 'Wah kelihatan enak sekali! Tapi saya sekarang sedang diet.' },
        { speaker: '友子', role: 'Teman', japanese: '1つだけなら大丈夫ですよ。', kana: 'ひとつだけならだいじょうぶですよ。', romaji: 'Hitotsu dake nara daijoubu desu yo.', indonesian: 'Kalau cuma 1 buah saja tidak apa-apa kok.' },
        { speaker: 'マリア', role: 'Maria', japanese: 'じゃ、いただきます。ダイエットは明日からします！', kana: 'じゃ、いただきます。だいえっとはあしたからします！', romaji: 'Ja, itadakimasu. Daietto wa ashita kara shimasu!', indonesian: 'Kalau begitu saya santap ya. Dietnya mulai besok saja!' }
      ]
    },
    exercises: [
      {
        id: '19-e1',
        type: 'multiple-choice',
        question: '日本へ ________ ことが ありますか。 (pernah pergi)',
        options: ['行った (いった)', '行く (いく)', '行って (いって)', '行かない (いかない)'],
        correctAnswer: '行った (いった)',
        explanation: 'Pola pengalaman ~ことがある menggunakan kata kerja bentuk -Ta (lampau biasa): 行った.'
      }
    ]
  },
  {
    chapter: 20,
    titleId: 'Bab 20: Bentuk Biasa / Kasual (普通形 - Futsuukei)',
    titleJp: '第20課：普通形と丁寧形（タメ口・日常会話）',
    description: 'Perbedaan antara Bahasa Sopan (Teineigo: desu/masu) dan Bahasa Biasa/Kasual (Futsuukei: jisho, nai, ta, da), digunakan saat mengobrol santai dengan teman akrab atau keluarga.',
    summaryGrammar: [
      'Tabel Konversi Teineikei <-> Futsuukei (Positif, Negatif, Lampau, Lampau Negatif)',
      'Percakapan kasual: partikel か dihilangkan, intonasi naik',
      'だ (da) sering dihilangkan dalam percakapan kasual untuk kata benda/sifat-na',
      'Penggunaan partikel kasual: うん (Ya), ううん (Tidak)'
    ],
    vocab: [
      { id: '20-1', kanji: '要ります', kana: 'いります (ビザが~)', romaji: 'irimasu', indonesian: 'memerlukan / butuh (visa)', wordType: 'kata kerja 1' },
      { id: '20-2', kanji: '調べます', kana: 'しらべます', romaji: 'shirabemasu', indonesian: 'memeriksa / mencari tahu', wordType: 'kata kerja 2' },
      { id: '20-3', kanji: '直します', kana: 'なおします', romaji: 'naoshimasu', indonesian: 'memperbaiki', wordType: 'kata kerja 1' },
      { id: '20-4', kanji: '修理します', kana: 'しゅうりします', romaji: 'shuurishimasu', indonesian: 'mereparasi (mesin/mobil)', wordType: 'kata kerja 3' },
      { id: '20-5', kanji: '電話します', kana: 'でんわします', romaji: 'denwashimasu', indonesian: 'menelepon', wordType: 'kata kerja 3' },
      { id: '20-6', kanji: '僕', kana: 'ぼく', romaji: 'boku', indonesian: 'aku (dipakai pria secara kasual)', wordType: 'kata benda' },
      { id: '20-7', kanji: '君', kana: 'きみ', romaji: 'kimi', indonesian: 'kamu (kasual kepada orang sebaya/bawahan)', wordType: 'kata benda' },
      { id: '20-8', kanji: '～君', kana: '～くん', romaji: '~kun', indonesian: 'akhiran sapaan untuk anak/rekan pria', wordType: 'kata benda' },
      { id: '20-9', kanji: 'うん / ううん', kana: 'うん / ううん', romaji: 'un / uun', indonesian: 'ya / tidak (kasual)', wordType: 'ungkapan' }
    ],
    bunkei: [
      {
        id: '20-b1',
        title: 'Matriks Futsuukei (普通形)',
        pattern: 'Kata Kerja / Sifat-i / Sifat-na / Kata Benda dalam 4 Dimensi',
        explanation: 'Kata Kerja: iku, ikanai, itta, ikanakatta. Kata Benda: da, ja nai, datta, ja nakatta. Kata Sifat-i: takai, takakunai, takakatta, takakunakatta.',
        reibun: [
          { japanese: '明日東京へ行く？…うん、行く。', kana: 'あしたとうきょうへいく？…うん、いく。', romaji: 'Ashita Toukyou e iku? ...Un, iku.', indonesian: 'Besok kamu pergi ke Tokyo? ...Ya, pergi.' },
          { japanese: '今日暇？…ううん、暇じゃない。', kana: 'きょうひま？…ううん、ひまじゃない。', romaji: 'Kyou hima? ...Uun, hima ja nai.', indonesian: 'Hari ini kamu senggang? ...Nggak, nggak senggang.' }
        ]
      }
    ],
    kaiwa: {
      title: 'いっしょに 行かない？ (Maukah pergi bersama?)',
      situation: 'Kobayashi dan rekannya Thawaphon mengobrol santai memakai bahasa biasa (Futsuukei / kasual) tentang rencana mendaki Gunung Fuji saat libur musim panas.',
      dialogue: [
        { speaker: '小林', role: 'Kobayashi', japanese: '夏休みは 国へ 帰る？', kana: 'なつやすみは くにへ かえる？', romaji: 'Natsu-yasumi wa kuni e kaeru?', indonesian: 'Liburan musim panas ini pulang ke negaramu?' },
        { speaker: 'タワポン', role: 'Thawaphon', japanese: 'ううん。帰りたいけど、……。', kana: 'ううん。かえりたいけど、……。', romaji: 'Uun. Kaeritai kedo, ...', indonesian: 'Nggak. Pengen pulang sih, tapi...' },
        { speaker: '小林', role: 'Kobayashi', japanese: 'そう。タワポン君、富士山に 登った こと ある？', kana: 'そう。タワポンくん、ふじさんに のぼった こと ある？', romaji: 'Sou. Tawapon-kun, Fuji-san ni nobotta koto aru?', indonesian: 'Begitu ya. Thawaphon-kun, pernah mendaki Gunung Fuji?' },
        { speaker: 'タワポン', role: 'Thawaphon', japanese: 'ううん、ない。', kana: 'ううん、ない。', romaji: 'Uun, nai.', indonesian: 'Nggak, belum pernah.' },
        { speaker: '小林', role: 'Kobayashi', japanese: 'じゃ、よかったら、いっしょに 行かない？', kana: 'じゃ、よかったら、いっしょに いかない？', romaji: 'Ja, yokattara, issho ni ikanai?', indonesian: 'Kalau begitu, kalau kamu mau, mau nggak pergi bareng?' },
        { speaker: 'タワポン', role: 'Thawaphon', japanese: 'うん。いつごろ？', kana: 'うん。いつごろ？', romaji: 'Un. Itsu-goro?', indonesian: 'Mau. Kira-kira kapan?' },
        { speaker: '小林', role: 'Kobayashi', japanese: '8月の 初めごろは どう？', kana: 'はちがつの はじめごろは どう？', romaji: 'Hachi-gatsu no hajime-goro wa dou?', indonesian: 'Bagaimana kalau sekitar awal bulan Agustus?' },
        { speaker: 'タワポン', role: 'Thawaphon', japanese: 'いいよ。', kana: 'いいよ。', romaji: 'Ii yo.', indonesian: 'Bagus tuh.' },
        { speaker: '小林', role: 'Kobayashi', japanese: 'じゃ、いろいろ 調べて、また 電話するよ。', kana: 'じゃ、いろいろ しらべて、また でんわするよ。', romaji: 'Ja, iroiro shirabete, mata denwa suru yo.', indonesian: 'Oke, aku cari tahu info lengkapnya dulu, nanti aku telepon lagi ya.' },
        { speaker: 'タワポン', role: 'Thawaphon', japanese: 'ありがとう。待ってるよ。', kana: 'ありがとう。まってるよ。', romaji: 'Arigatou. Matteru yo.', indonesian: 'Makasih ya. Aku tunggu kabarnya.' }
      ]
    },
    exercises: [
      {
        id: '20-e1',
        type: 'multiple-choice',
        question: 'Bentuk biasa kasual (Futsuukei) dari "きょうは あめでした" adalah...',
        options: ['きょうは 雨だった', 'きょうは 雨だ', 'きょうは 雨でした', 'きょうは 雨じゃない'],
        correctAnswer: 'きょうは 雨だった',
        explanation: 'Bentuk lampau sopan nominal "でした" dalam bentuk biasa (futsuukei) berubah menjadi "だった".'
      }
    ]
  },
  {
    chapter: 21,
    titleId: 'Bab 21: Opini & Kutipan (to omoimasu, to iimashita)',
    titleJp: '第21課：意見・引用（～と思う・～と言った）',
    description: 'Menyatakan pendapat pribadi (～と思います), mengutip ucapan orang lain (～と言いました), serta menanyakan persetujuan (～でしょう).',
    summaryGrammar: [
      'Kalimat (Bentuk Biasa) と 思います (Saya rasa / Menurut saya ...)',
      'Kalimat (Bentuk Biasa / Langsung) と 言いました (Dia berkata bahwa ...)',
      'Kalimat (Bentuk Biasa) でしょう？ (Bukankah begitu? / Kan?)'
    ],
    vocab: [
      { id: '21-1', kanji: '思います', kana: 'おもいます', romaji: 'omoimasu', indonesian: 'berpikir / berpendapat', wordType: 'kata kerja 1' },
      { id: '21-2', kanji: '言います', kana: 'いいます', romaji: 'iimasu', indonesian: 'berkata / mengucapkan', wordType: 'kata kerja 1' },
      { id: '21-3', kanji: '勝ちます / 負けます', kana: 'かちます / まけます', romaji: 'kachimasu / makemasu', indonesian: 'menang / kalah', wordType: 'kata kerja 1' },
      { id: '21-4', kanji: '役に立ちます', kana: 'やくにたちます', romaji: 'yaku ni tachimasu', indonesian: 'berguna / bermanfaat', wordType: 'kata kerja 1' },
      { id: '21-5', kanji: '動きます', kana: 'うごきます', romaji: 'ugokimasu', indonesian: 'bergerak / bekerja (mesin)', wordType: 'kata kerja 1' },
      { id: '21-6', kanji: 'やめます', kana: 'やめます (かいしゃを~)', romaji: 'yamemasu', indonesian: 'berhenti / mengundurkan diri', wordType: 'kata kerja 2' },
      { id: '21-7', kanji: '気をつけます', kana: 'きをつけます', romaji: 'ki o tsukemasu', indonesian: 'berhati-hati', wordType: 'kata kerja 2' },
      { id: '21-8', kanji: '留学します', kana: 'りゅうがくします', romaji: 'ryuugakushimasu', indonesian: 'belajar di luar negeri', wordType: 'kata kerja 3' },
      { id: '21-9', kanji: '物価', kana: 'ぶっか', romaji: 'bukka', indonesian: 'harga barang secara umum', wordType: 'kata benda' },
      { id: '21-10', kanji: '意見', kana: 'いけん', romaji: 'iken', indonesian: 'pendapat / opini', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '21-b1',
        title: 'Menyatakan Opini Pribadi: [Bentuk Biasa] と 思います',
        pattern: 'Kalimat (Futsuukei) + と 思います',
        explanation: 'Partikel「と」(to) di sini berfungsi sebagai kata penghubung isi pikiran atau kutipan ("bahwa").',
        reibun: [
          { japanese: '明日は雨が降ると思います。', kana: 'あしたはあめがふるとおもいます。', romaji: 'Ashita wa ame ga furu to omoimasu.', indonesian: 'Saya rasa besok akan turun hujan.' },
          { japanese: '日本は物価が高いと思います。', kana: 'にほんはぶっかがたかいとおもいます。', romaji: 'Nihon wa bukka ga takai to omoimasu.', indonesian: 'Menurut saya harga barang di Jepang mahal.' }
        ]
      },
      {
        id: '21-b2',
        title: 'Mengutip Ucapan Orang Lain: ～と 言いました',
        pattern: 'Kalimat + と 言いました',
        explanation: 'Mengutip kalimat langsung (dengan tanda kurung siku 「」) atau kutipan tak langsung memakai bentuk biasa.',
        reibun: [
          { japanese: '田中さんは「明日休みます」と言いました。', kana: 'たなかさんは「あしたやすみます」といいました。', romaji: 'Tanaka-san wa "Ashita yasumimasu" to iimashita.', indonesian: 'Tanaka berkata, "Besok saya libur".' }
        ]
      }
    ],
    kaiwa: {
      title: '私もそう思います (Saya juga berpikir demikian)',
      situation: 'Dua orang rekan kerja berdiskusi tentang penggunaan smartphone di kalangan anak-anak.',
      dialogue: [
        { speaker: '小林', role: 'Rekan', japanese: '最近の子供はスマートフォンを使いすぎだと思います。', kana: 'さいきんのこどもはスマートフォンをつかいすぎだとおもいます。', romaji: 'Saikin no kodomo wa sumaatofon o tsukaisugi da to omoimasu.', indonesian: 'Menurut saya anak-anak zaman sekarang terlalu banyak memakai smartphone.' },
        { speaker: 'ミラー', role: 'Miller', japanese: '私もそう思います。外で運動したほうがいいですね。', kana: 'わたしもそうおもいます。そとでうんどうしたほうがいいですね。', romaji: 'Watashi mo sou omoimasu. Soto de undou shita hou ga ii desu ne.', indonesian: 'Saya juga sependapat. Lebih baik mereka berolahraga di luar.' }
      ]
    },
    exercises: [
      {
        id: '21-e1',
        type: 'multiple-choice',
        question: '日本について どう 思いますか。…べんり_____ と 思います。',
        options: ['だ', 'な', 'に', 'で'],
        correctAnswer: 'だ',
        explanation: 'Kata sifat-na dalam bentuk biasa positif di depan と 思います harus menggunakan "だ": べんりだ と 思います.'
      }
    ]
  },
  {
    chapter: 22,
    titleId: 'Bab 22: Modifikasi Kata Benda / Klausa Relatif (連体修飾)',
    titleJp: '第22課：名詞修飾・連体節（私が作ったケーキ）',
    description: 'Menjelaskan kata benda menggunakan anak kalimat (klausa relatif). Subjek dalam anak kalimat ditandai partikel が (ga).',
    summaryGrammar: [
      '[Anak Kalimat Bentuk Biasa] + Kata Benda (Contoh: Buku yang saya beli kemarin)',
      'Subjek dalam anak kalimat penjelas selalu memakai partikel が (bukan は)',
      'Waktu / Tempat / Janji untuk melakukan V: [V-る] 時間 / 約束 / 用事'
    ],
    vocab: [
      { id: '22-1', kanji: '着ます', kana: 'きます (シャツを~)', romaji: 'kimasu', indonesian: 'mengenakan (pakaian atasan/kemeja)', wordType: 'kata kerja 2' },
      { id: '22-2', kanji: '履きます', kana: 'はきます (くつ・ズボンを~)', romaji: 'hakimasu', indonesian: 'mengenakan (sepatu, celana, rok - bawahan)', wordType: 'kata kerja 1' },
      { id: '22-3', kanji: 'かぶります', kana: 'かぶります (ぼうしを~)', romaji: 'kaburimasu', indonesian: 'mengenakan (topi di kepala)', wordType: 'kata kerja 1' },
      { id: '22-4', kanji: 'かけます', kana: 'かけます (めがねを~)', romaji: 'kakemasu', indonesian: 'memakai (kacamata)', wordType: 'kata kerja 2' },
      { id: '22-5', kanji: '生まれます', kana: 'うまれます', romaji: 'umaremasu', indonesian: 'lahir', wordType: 'kata kerja 2' },
      { id: '22-6', kanji: '帽子', kana: 'ぼうし', romaji: 'boushi', indonesian: 'topi', wordType: 'kata benda' },
      { id: '22-7', kanji: '眼鏡', kana: 'めがね', romaji: 'megane', indonesian: 'kacamata', wordType: 'kata benda' },
      { id: '22-8', kanji: '家', kana: 'いえ', romaji: 'ie', indonesian: 'rumah', wordType: 'kata benda' },
      { id: '22-9', kanji: '都合', kana: 'つごう (～がいい / わるい)', romaji: 'tsugou', indonesian: 'kondisi kelonggaran waktu / kesempatan', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '22-b1',
        title: 'Membentuk Klausa Relatif Penjelas Kata Benda',
        pattern: '[Kalimat Bentuk Biasa] + Kata Benda',
        explanation: 'Dalam bahasa Jepang tidak ada kata ganti penghubung seperti "yang" (who/which/that). Cukup letakkan kalimat bentuk biasa langsung di depan kata benda yang dijelaskan.',
        reibun: [
          { japanese: 'これは私が昨日撮った写真です。', kana: 'これはわたしがきょうとったしゃしんです。', romaji: 'Kore wa watashi ga kinou totta shashin desu.', indonesian: 'Ini adalah foto yang saya ambil kemarin.' },
          { japanese: 'あそこで本を読んでいる人は誰ですか。', kana: 'あそこでほんをよんでいるひとはだれですか。', romaji: 'Asoko de hon o yonde iru hito wa dare desu ka.', indonesian: 'Orang yang sedang membaca buku di sebelah sana itu siapa?' }
        ]
      }
    ],
    kaiwa: {
      title: 'どんな部屋をお探しですか (Kamar seperti apa yang Anda cari?)',
      situation: 'Watanabe mencari apartemen sewa di agen properti.',
      dialogue: [
        { speaker: '不動産屋', role: 'Agen Properti', japanese: 'いらっしゃいませ。どんなアパートをお探しですか。', kana: 'いらっしゃいませ。どんなアパートをおさがしですか。', romaji: 'Irasshaimase. Donna apaato o osagashi desu ka.', indonesian: 'Selamat datang. Apartemen seperti apa yang sedang Anda cari?' },
        { speaker: '渡辺', role: 'Pencari Sewa', japanese: '駅から近くて、家賃が安い部屋がいいです。', kana: 'えきからちかくて、やちんがやすいへやがいいです。', romaji: 'Eki kara chikakute, yachin ga yasui heya ga ii desu.', indonesian: 'Saya ingin kamar yang dekat dari stasiun dan uang sewanya murah.' }
      ]
    },
    exercises: [
      {
        id: '22-e1',
        type: 'multiple-choice',
        question: 'Lengkapi kalimat: "これは 母_____ 作った ケーキです。"',
        options: ['が', 'は', 'を', 'に'],
        correctAnswer: 'が',
        explanation: 'Subjek pelaku di dalam anak kalimat (klausa relatif penjelas kata benda) wajib memakai partikel が.'
      }
    ]
  },
  {
    chapter: 23,
    titleId: 'Bab 23: Waktu Kondisional (toki, to / Saat & Jika Pasti)',
    titleJp: '第23課：時・条件（～とき・～と）',
    description: 'Menyatakan ketika/saat melakukan sesuatu (～とき), serta kondisi sebab-akibat alamiah/pasti (～と, seperti arah jalan atau fungsi mesin).',
    summaryGrammar: [
      'V-る / V-た / い-adj / な-adj+な / N+の + とき (Ketika / Saat ...)',
      'V1-る と、V2 (Jika V1 dilakukan, maka pasti terjadi V2 secara otomatis)',
      'Menanyakan petunjuk jalan: [Tempat] を [Arah] へ 曲がります'
    ],
    vocab: [
      { id: '23-1', kanji: '聞きます', kana: 'ききます (せんせいに~)', romaji: 'kikimasu', indonesian: 'bertanya (kepada guru)', wordType: 'kata kerja 1' },
      { id: '23-2', kanji: '回します', kana: 'まわします', romaji: 'mawashimasu', indonesian: 'memutar (knob/setir)', wordType: 'kata kerja 1' },
      { id: '23-3', kanji: '引きます', kana: 'ひきます', romaji: 'hikimasu', indonesian: 'menarik', wordType: 'kata kerja 1' },
      { id: '23-4', kanji: '変えます', kana: 'かえます', romaji: 'kaemasu', indonesian: 'mengubah', wordType: 'kata kerja 2' },
      { id: '23-5', kanji: '触ります', kana: 'さわります (きかいに~)', romaji: 'sawarimasu', indonesian: 'menyentuh (mesin)', wordType: 'kata kerja 1' },
      { id: '23-6', kanji: '出ます', kana: 'でます (おつりが~)', romaji: 'demasu', indonesian: 'keluar (uang kembalian keluar)', wordType: 'kata kerja 2' },
      { id: '23-7', kanji: '歩きます', kana: 'あるきます', romaji: 'arukimasu', indonesian: 'berjalan kaki', wordType: 'kata kerja 1' },
      { id: '23-8', kanji: '渡ります', kana: 'わたります (はしを~)', romaji: 'watarimasu', indonesian: 'menyeberang (jembatan)', wordType: 'kata kerja 1' },
      { id: '23-9', kanji: '曲がります', kana: 'まがります (みぎへ~)', romaji: 'magarimasu', indonesian: 'berbelok (ke kanan)', wordType: 'kata kerja 1' },
      { id: '23-10', kanji: '交差点', kana: 'こうさてん', romaji: 'kousaten', indonesian: 'perempatan jalan', wordType: 'kata benda' },
      { id: '23-11', kanji: '信号', kana: 'しんごう', romaji: 'shingou', indonesian: 'lampu lalu lintas', wordType: 'kata benda' },
      { id: '23-12', kanji: '角', kana: 'かど', romaji: 'kado', indonesian: 'sudut jalan / tikungan', wordType: 'kata benda' },
      { id: '23-13', kanji: '橋', kana: 'はし', romaji: 'hashi', indonesian: 'jembatan', wordType: 'kata benda' },
      { id: '23-14', kanji: '道路 / 道', kana: 'どうろ / みち', romaji: 'douro / michi', indonesian: 'jalan raya / jalan', wordType: 'kata benda' }
    ],
    bunkei: [
      {
        id: '23-b1',
        title: 'Menyatakan Waktu/Saat: ～とき',
        pattern: 'V-Bentuk Kamus / V-Ta / Kata Sifat / Kata Benda の + とき',
        explanation: 'Perhatikan perbedaan V-る とき (sebelum/saat hendak melakukan) dan V-た とき (setelah selesai melakukan).',
        reibun: [
          { japanese: '図書館で本を借りるとき、カードが要ります。', kana: 'としょかんでほんをかりるとき、カードがいります。', romaji: 'Toshokan de hon o kariru toki, kaado ga irimasu.', indonesian: 'Saat meminjam buku di perpustakaan, dibutuhkan kartu anggota.' },
          { japanese: '朝起きたとき、窓を開けます。', kana: 'あさおきたとき、まどをあけます。', romaji: 'Asa okita toki, mado o akemasu.', indonesian: 'Saat (setelah) bangun pagi, saya membuka jendela.' }
        ]
      },
      {
        id: '23-b2',
        title: 'Kondisi Sebab Akibat Otomatis: V-る と',
        pattern: 'Kata Kerja (Bentuk Kamus) と、[Hasil Otomatis]',
        explanation: 'Menyatakan bahwa jika tindakan pertama dilakukan, pasti timbul hasil kedua yang alami atau pasti (seperti menekan tombol mesin atau petunjuk jalan).',
        reibun: [
          { japanese: 'このボタンを押すと、おつりが出ます。', kana: 'このボタンをおすと、おつりがでます。', romaji: 'Kono botan o osu to, otsuri ga demasu.', indonesian: 'Jika menekan tombol ini, uang kembalian akan keluar.' },
          { japanese: 'あの交差点を右へ曲がると、市役所があります。', kana: 'あのこうさてんをみぎへまがると、しやくしょがあります。', romaji: 'Ano kousaten o migi e magaru to, shiyakusho ga arimasu.', indonesian: 'Jika Anda belok ke kanan di perempatan itu, balai kota ada di sana.' }
        ]
      }
    ],
    kaiwa: {
      title: 'どうやって行きますか (Bagaimana cara ke sana?)',
      situation: 'Seorang pejalan kaki menanyakan jalan menuju Museum Seni Kota kepada polisi di pos polisi (Koban).',
      dialogue: [
        { speaker: '旅行者', role: 'Turis', japanese: 'すみません。美術館へ行きたいんですが、どうやって行きますか。', kana: 'すみません。びじゅつかんへいきたいんですが、どうやっていきますか。', romaji: 'Sumimasen. Bijutsukan e ikitai n desu ga, dou yatte ikimasu ka.', indonesian: 'Permisi. Saya ingin pergi ke museum seni, bagaimana jalannya?' },
        { speaker: '警官', role: 'Polisi', japanese: 'この道をまっすぐ行って、二つ目の信号を左へ曲がると、右手にありますよ。', kana: 'このみちをまっすぐいって、ふたつめのしんごうをひだりへまがると、みぎてにありますよ。', romaji: 'Kono michi o massugu itte, futatsume no shingou o hidari e magaru to, migite ni arimasu yo.', indonesian: 'Jalan lurus terus di jalan ini, jika belok kiri di lampu merah kedua, museumnya ada di sebelah kanan Anda.' }
      ]
    },
    exercises: [
      {
        id: '23-e1',
        type: 'multiple-choice',
        question: 'この つまみを みぎへ ________ と、おとが おおきく なります。',
        options: ['回す (まわす)', '回した', '回して', '回そう'],
        correctAnswer: '回す (まわす)',
        explanation: 'Pola sebab akibat otomatis ~と wajib didahului oleh Kata Kerja Bentuk Kamus (Jisho-kei): まわす.'
      }
    ]
  },
  {
    chapter: 24,
    titleId: 'Bab 24: Kebaikan & Bantuan (~te agemasu, ~te moraimasu, ~te kuremasu)',
    titleJp: '第24課：授受動詞（～てあげる・～てもらう・～てくれる）',
    description: 'Menyatakan perbuatan saling tolong-menolong: melakukan kebaikan untuk orang lain (～てあげます), menerima pertolongan dari orang lain (～てもらいます), dan orang lain berinisiatif menolong saya (～てくれます).',
    summaryGrammar: [
      'Saya は Orang に V-て あげます (Saya melakukan kebaikan V untuk orang lain)',
      'Saya は Orang に V-て もらいます (Saya menerima bantuan V dari orang lain)',
      'Orang が [Saya に] V-て くれます (Orang lain berbaik hati melakukan V untuk saya)'
    ],
    vocab: [
      { id: '24-1', kanji: 'くれます', kana: 'くれます', romaji: 'kuremasu', indonesian: 'memberi (kepada saya / keluarga saya)', wordType: 'kata kerja 2' },
      { id: '24-2', kanji: '直します', kana: 'なおします', romaji: 'naoshimasu', indonesian: 'memperbaiki', wordType: 'kata kerja 1' },
      { id: '24-3', kanji: '連れて行きます', kana: 'つれていきます', romaji: 'tsurete ikimasu', indonesian: 'mengajak / mengantar (orang)', wordType: 'kata kerja 1' },
      { id: '24-4', kanji: '連れて来ます', kana: 'つれてきます', romaji: 'tsurete kimasu', indonesian: 'membawa serta (orang) datang', wordType: 'kata kerja 3' },
      { id: '24-5', kanji: '送ります', kana: 'おくります (ひとを~)', romaji: 'okurimasu', indonesian: 'mengantar (orang pulang)', wordType: 'kata kerja 1' },
      { id: '24-6', kanji: '紹介します', kana: 'しょうかいします', romaji: 'shoukaishimasu', indonesian: 'memperkenalkan', wordType: 'kata kerja 3' },
      { id: '24-7', kanji: '案内します', kana: 'あんないします', romaji: 'annaishimasu', indonesian: 'memandu jalan', wordType: 'kata kerja 3' },
      { id: '24-8', kanji: '説明します', kana: 'せつめいします', romaji: 'setsumeishimasu', indonesian: 'menjelaskan', wordType: 'kata kerja 3' },
      { id: '24-9', kanji: 'おじいさん / おばあさん', kana: 'おじいさん / おばあさん', romaji: 'ojiisan / obaasan', indonesian: 'kakek / nenek', wordType: 'kata benda' },
      { id: '24-10', kanji: '全部', kana: 'ぜんぶ', romaji: 'zenbu', indonesian: 'semua / seluruhnya', wordType: 'kata keterangan' },
      { id: '24-11', kanji: '自分で', kana: 'じぶんで', romaji: 'jibun de', indonesian: 'oleh diri sendiri', wordType: 'kata keterangan' }
    ],
    bunkei: [
      {
        id: '24-b1',
        title: 'Perbedaan Mendasar: ～てあげます, ～てもらいます, ～てくれます',
        pattern: 'Tiga Sudut Pandang Bantuan',
        explanation: '～てあげます: pembicara membantu orang lain. ～てもらいます: pembicara meminta/menerima bantuan dari orang. ～てくれます: orang lain berbaik hati membantu pembicara atas kemauan pemberi.',
        reibun: [
          { japanese: '私は木村さんに傘を貸してあげました。', kana: 'わたしはきむらさんにかさをかしてあげました。', romaji: 'Watashi wa Kimura-san ni kasa o kashite agemashita.', indonesian: 'Saya meminjamkan payung kepada Kimura.' },
          { japanese: '鈴木さんが駅まで送ってくれました。', kana: 'すずきさんがえきまでおくってくれました。', romaji: 'Suzuki-san ga eki made okutte kuremashita.', indonesian: 'Pak Suzuki berbaik hati mengantar saya sampai ke stasiun.' },
          { japanese: '私は山田さんに日本語を教えてもらいました。', kana: 'わたしはやまださんににほんごをおしえてもらいました。', romaji: 'Watashi wa Yamada-san ni nihongo o oshiete moraimashita.', indonesian: 'Saya diajari bahasa Jepang oleh Pak Yamada (saya menerima bantuan pengajaran).' }
        ]
      }
    ],
    kaiwa: {
      title: '手伝いに 行きましょうか (Bagaimana kalau saya bantu?)',
      situation: 'Karina menawarkan bantuan kepada Wang yang akan pindahan apartemen di hari Minggu, serta menanyakan siapa saja yang ikut membantu dan urusan makan siang.',
      dialogue: [
        { speaker: 'カリナ', role: 'Karina', japanese: 'ワンさん、日曜日 引っ越しですね。手伝いに 行きましょうか。', kana: 'ワンさん、にちようび ひっこしですね。てつだいに いきましょうか。', romaji: 'Wan-san, nichiyoubi hikkoshi desu ne. Tetsudai ni ikimashou ka.', indonesian: 'Tuan Wang, hari Minggu pindahan ya? Bagaimana kalau saya datang membantu?' },
        { speaker: 'ワン', role: 'Wang Xue', japanese: 'ありがとう ございます。じゃ、すみませんが、9時ごろ お願いします。', kana: 'ありがとう ございます。じゃ、すみませんが、くじごろ おねがいします。', romaji: 'Arigatou gozaimasu. Ja, sumimasen ga, ku-ji goro onegaishimasu.', indonesian: 'Terima kasih banyak. Kalau begitu maaf merepotkan, tolong datang sekitar jam 9 ya.' },
        { speaker: 'カリナ', role: 'Karina', japanese: 'ほかに だれが 手伝いに 行きますか。', kana: 'ほかに だれが てつだいに いきますか。', romaji: 'Hoka ni dare ga tetsudai ni ikimasu ka.', indonesian: 'Selain saya, siapa lagi yang datang membantu?' },
        { speaker: 'ワン', role: 'Wang Xue', japanese: '山田さんと ミラーさんが 来て くれます。', kana: 'やまださんと ミラーさんが きて くれます。', romaji: 'Yamada-san to Miraa-san ga kite kuremasu.', indonesian: 'Pak Yamada dan Miller berbaik hati mau datang membantu.' },
        { speaker: 'カリナ', role: 'Karina', japanese: '車は？', kana: 'くるまは？', romaji: 'Kuruma wa?', indonesian: 'Mobil pengangkutnya bagaimana?' },
        { speaker: 'ワン', role: 'Wang Xue', japanese: '山田さんに 貸して もらいます。', kana: 'やまださんに かして もらいます。', romaji: 'Yamada-san ni kashite moraimasu.', indonesian: 'Saya dipinjami (mobil) oleh Pak Yamada.' },
        { speaker: 'カリナ', role: 'Karina', japanese: '昼ごはんは どう しますか。', kana: 'ひるごはんは どう しますか。', romaji: 'Hirugohan wa dou shimasu ka.', indonesian: 'Makan siangnya bagaimana?' },
        { speaker: 'ワン', role: 'Wang Xue', japanese: 'えーと……。', kana: 'えーと……。', romaji: 'Eeto...', indonesian: 'Hmm, bagaimana ya...' },
        { speaker: 'カリナ', role: 'Karina', japanese: 'わたしが お弁当を 持って 行きましょうか。', kana: 'わたしが おべんとうを もって いきましょうか。', romaji: 'Watashi ga obentou o motte ikimashou ka.', indonesian: 'Bagaimana kalau saya bawakan bekal makan siang (bento)?' },
        { speaker: 'ワン', role: 'Wang Xue', japanese: 'すみません。お願いします。', kana: 'すみません。おねがいします。', romaji: 'Sumimasen. Onegaishimasu.', indonesian: 'Maaf merepotkan, terima kasih tolong ya.' },
        { speaker: 'カリナ', role: 'Karina', japanese: 'じゃ、日曜日に。', kana: 'じゃ、にちようびに。', romaji: 'Ja, nichiyoubi ni.', indonesian: 'Baiklah, sampai ketemu hari Minggu.' }
      ]
    },
    exercises: [
      {
        id: '24-e1',
        type: 'multiple-choice',
        question: 'たなかさんが わたしに かさを かして ________。 (Pak Tanaka berbaik hati meminjamkan payung kepada saya)',
        options: ['くれました', 'あげました', 'もらいました', 'やりました'],
        correctAnswer: 'くれました',
        explanation: 'Ketika orang lain melakukan perbuatan baik untuk "saya" (watashi ni), kata kerja bantuan yang tepat adalah くれました.'
      }
    ]
  },
  {
    chapter: 25,
    titleId: 'Bab 25: Pengandaian & Konsesif (tara, temo / Jika & Walaupun)',
    titleJp: '第25課：仮定・確定条件・逆接（～たら・～ても）',
    description: 'Bab penutup Minna no Nihongo Shokyu I: Pengandaian jika/apabila di masa depan atau urutan waktu (～たら), serta kalimat konsesif bertentangan: walaupun/meskipun (～ても).',
    summaryGrammar: [
      'V-たら / い-adj かったら / な-adj だったら / N だったら (Jika / Kalau ...)',
      'V1-たら、V2 (Setelah V1 selesai, baru lakukan V2)',
      'V-ても / い-adj くても / な-adj でも / N でも (Walaupun / Meskipun ...)',
      'もし (Jika seandainya - mempertegas pola ~tara)',
      'いくら (Berapa pun / Betapa pun - mempertegas pola ~temo)'
    ],
    vocab: [
      { id: '25-1', kanji: '考えます', kana: 'かんがえます', romaji: 'kangaemasu', indonesian: 'berpikir / mempertimbangkan', wordType: 'kata kerja 2' },
      { id: '25-2', kanji: '着きます', kana: 'つきます (えきに~)', romaji: 'tsukimasu', indonesian: 'tiba / sampai (di stasiun)', wordType: 'kata kerja 1' },
      { id: '25-3', kanji: '留学します', kana: 'りゅうがくします', romaji: 'ryuugakushimasu', indonesian: 'kuliah di luar negeri', wordType: 'kata kerja 3' },
      { id: '25-4', kanji: '取ります', kana: 'とります (としを~)', romaji: 'torimasu', indonesian: 'bertambah (usia / tua)', wordType: 'kata kerja 1' },
      { id: '25-5', kanji: '田舎', kana: 'いなか', romaji: 'inaka', indonesian: 'kampung halaman / pedesaan', wordType: 'kata benda' },
      { id: '25-6', kanji: 'チャンス', kana: 'チャンス', romaji: 'chansu', indonesian: 'kesempatan / peluang', wordType: 'kata benda' },
      { id: '25-7', kanji: '億', kana: 'おく', romaji: 'oku', indonesian: 'seratus juta (100.000.000)', wordType: 'kata benda' },
      { id: '25-8', kanji: 'もし', kana: 'もし', romaji: 'moshi', indonesian: 'seandainya / jikalau', wordType: 'kata keterangan' },
      { id: '25-9', kanji: 'いくら', kana: 'いくら', romaji: 'ikura', indonesian: 'betapa pun / bagaimanapun', wordType: 'kata keterangan' },
      { id: '25-10', kanji: '頑張ります', kana: 'がんばります', romaji: 'ganbarimasu', indonesian: 'bersemangat / berusaha keras', wordType: 'kata kerja 1' }
    ],
    bunkei: [
      {
        id: '25-b1',
        title: 'Pengandaian Bersyarat: ～たら (Jika / Apabila)',
        pattern: 'V-た + ら / い-adj (-katta) + ら / な-adj & N (+datta) + ら',
        explanation: 'Menyatakan pengandaian jika suatu kondisi terpenuhi di masa depan, atau kepastian bahwa setelah hal A selesai maka hal B akan dilakukan.',
        reibun: [
          { japanese: '雨が降ったら、出かけません。', kana: 'あめがふったら、でかけません。', romaji: 'Ame ga futtara, dekakemasen.', indonesian: 'Jika hujan turun, saya tidak akan pergi keluar.' },
          { japanese: '駅に着いたら、電話をかけてください。', kana: 'えきについたら、でんわをかけてください。', romaji: 'Eki ni tsuitara, denwa o kakete kudasai.', indonesian: 'Setelah tiba di stasiun, tolong hubungi saya lewat telepon.' }
        ]
      },
      {
        id: '25-b2',
        title: 'Konsesif Perlawanan: ～ても / ～でも (Walaupun / Meskipun)',
        pattern: 'V-て + も / い-adj (-kute) + も / な-adj & N (+de) + も',
        explanation: 'Menyatakan bahwa meskipun kondisi tertentu terjadi, kenyataan atau tindakan yang dihasilkan tetap berlawanan dari dugaan umum.',
        reibun: [
          { japanese: '高くても、この辞書を買いたいです。', kana: 'たかくても、このじしょをかいたいです。', romaji: 'Takakute mo, kono jisho o kaitai desu.', indonesian: 'Meskipun mahal, saya tetap ingin membeli kamus ini.' },
          { japanese: '雨が降っても、サッカーをします。', kana: 'あめがふっても、サッカーをします。', romaji: 'Ame ga futte mo, sakkaa o shimasu.', indonesian: 'Walaupun hujan turun, kami tetap bermain sepak bola.' }
        ]
      }
    ],
    kaiwa: {
      title: 'いろいろお世話になりました (Terima kasih atas segala bantuan Anda)',
      situation: 'Miller hendak kembali ke Amerika dan berpamitan dengan hangat kepada rekan-rekannya.',
      dialogue: [
        { speaker: 'ミラー', role: 'Miller', japanese: '長い間いろいろお世話になりました。', kana: 'ながいあいだいろいろおせわになりました。', romaji: 'Nagai aida iroiro osewa ni narimashita.', indonesian: 'Terima kasih atas segala bantuan dan bimbingan selama ini.' },
        { speaker: '佐藤', role: 'Rekan', japanese: 'アメリカへ帰っても、私たちのことを忘れないでくださいね。', kana: 'アメリカへかえっても、わたしたちのことをわすれないでくださいね。', romaji: 'Amerika e kaette mo, watashitachi no koto o wasurenaide kudasai ne.', indonesian: 'Meskipun sudah pulang ke Amerika, jangan lupakan kami ya.' },
        { speaker: 'ミラー', role: 'Miller', japanese: 'はい、もちろんです。日本へ来たら、ぜひ連絡してください。', kana: 'はい、もちろんです。にほんへきたら、ぜひれんらくしてください。', romaji: 'Hai, mochiron desu. Nihon e kitara, zehi renraku shite kudasai.', indonesian: 'Tentu saja. Kalau berkunjung ke Amerika, pastikan menghubungi saya ya!' }
      ]
    },
    exercises: [
      {
        id: '25-e1',
        type: 'multiple-choice',
        question: 'あした 時間が ________、えいがを 見に 行きましょう。',
        options: ['あったら', 'あれば', 'あっても', 'あってから'],
        correctAnswer: 'あったら',
        explanation: 'Pola pengandaian "jika ada waktu besok" menggunakan bentuk ~たら: あったら.'
      }
    ]
  }
];
