import { LessonExercise, MinnaLesson } from '../types';

/**
 * Curated particle drills per chapter (Bab 1 - 25) aligned with Minna no Nihongo Shokyu I
 * so every chapter has authentic particle exercises in addition to its base exercises.
 */
const CHAPTER_PARTICLE_DRILLS: Record<
  number,
  Array<{
    question: string;
    audioText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }>
> = {
  1: [
    {
      question: 'わたし [ ___ ] マイク・ミラーです。',
      audioText: 'わたしは マイク・ミラーです。',
      options: ['は', 'の', 'も', 'か'],
      correctAnswer: 'は',
      explanation: 'Partikel は (wa) digunakan sebagai penanda topik atau subjek pembicaraan.',
    },
    {
      question: 'サントスさん [ ___ ] ブラジル人です。マリアさんも ブラジル人です。',
      audioText: 'サントスさんは ブラジル人です。マリアさんも ブラジル人です。',
      options: ['は', 'も', 'の', 'に'],
      correctAnswer: 'は',
      explanation: 'Kalimat pertama memperkenalkan topik サントスさん menggunakan partikel は.',
    },
    {
      question: 'ミラーさんは IMC [ ___ ] 社員です。',
      audioText: 'ミラーさんは IMCの 社員です。',
      options: ['の', 'は', 'も', 'を'],
      correctAnswer: 'の',
      explanation: 'Partikel の menghubungkan dua kata benda untuk menyatakan kepemilikan atau afiliasi (karyawan dari IMC).',
    },
  ],
  2: [
    {
      question: 'これ [ ___ ] わたしの 辞書です。',
      audioText: 'これは わたしの 辞書です。',
      options: ['は', 'の', 'を', 'に'],
      correctAnswer: 'は',
      explanation: 'Partikel は menandai kata tunjuk benda これ sebagai topik kalimat.',
    },
    {
      question: 'それは コンピューターですか、テレビ [ ___ ] ですか。',
      audioText: 'それは コンピューターですか、テレビですか。',
      options: ['か', 'の', 'も', 'は'],
      correctAnswer: 'か',
      explanation: 'Kalimat tanya pilihan membandingkan dua opsi menggunakan ～ですか、～ですか.',
    },
    {
      question: 'この かばんは だれ [ ___ ] ですか。',
      audioText: 'この かばんは だれの ですか。',
      options: ['の', 'は', 'も', 'が'],
      correctAnswer: 'の',
      explanation: 'だれの (milik siapa) menggunakan partikel の untuk menanyakan kepemilikan benda.',
    },
  ],
  3: [
    {
      question: 'トイレ [ ___ ] あそこです。',
      audioText: 'トイレは あそこです。',
      options: ['は', 'に', 'で', 'を'],
      correctAnswer: 'は',
      explanation: 'Pola [Benda/Tempat] は [Lokasi] です menggunakan partikel は sebagai penanda topik.',
    },
    {
      question: 'これは どこ [ ___ ] ワインですか。……フランスの ワインです。',
      audioText: 'これは どこの ワインですか。フランスの ワインです。',
      options: ['の', 'は', 'に', 'へ'],
      correctAnswer: 'の',
      explanation: 'どこの + Kata Benda digunakan untuk menanyakan negara atau perusahaan asal suatu produk.',
    },
  ],
  4: [
    {
      question: 'わたしは 毎朝 6時 [ ___ ] 起きます。',
      audioText: 'わたしは 毎朝 6時に 起きます。',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswer: 'に',
      explanation: 'Waktu spesifik yang mengandung angka (6時) wajib diikuti partikel に.',
    },
    {
      question: '昼休みは 12時 [ ___ ] 1時までです。',
      audioText: '昼休みは 12時から 1時までです。',
      options: ['から', 'に', 'で', 'へ'],
      correctAnswer: 'から',
      explanation: 'Partikel から berarti "dari" (titik awal waktu) dan berpasangan dengan まで ("sampai").',
    },
  ],
  5: [
    {
      question: 'わたしは 新幹線 [ ___ ] 京都へ 行きます。',
      audioText: 'わたしは 新幹線で 京都へ 行きます。',
      options: ['で', 'に', 'を', 'と'],
      correctAnswer: 'で',
      explanation: 'Partikel で setelah kendaraan (新幹線) menyatakan alat transportasi yang digunakan.',
    },
    {
      question: '日曜日に 家族 [ ___ ] 東京へ 行きました。',
      audioText: '日曜日に 家族と 東京へ 行きました。',
      options: ['と', 'で', 'に', 'を'],
      correctAnswer: 'と',
      explanation: 'Partikel と setelah orang (家族) menyatakan "bersama dengan".',
    },
  ],
  6: [
    {
      question: '毎朝 パンと 卵 [ ___ ] 食べます。',
      audioText: '毎朝 パンと 卵を 食べます。',
      options: ['を', 'に', 'で', 'へ'],
      correctAnswer: 'を',
      explanation: 'Partikel を menandai objek langsung dari kata kerja transitif (食べます).',
    },
    {
      question: 'デパート [ ___ ] 靴を 買いました。',
      audioText: 'デパートで 靴を 買いました。',
      options: ['で', 'に', 'へ', 'を'],
      correctAnswer: 'で',
      explanation: 'Partikel で menunjukkan tempat berlangsungnya suatu aksi (membeli di toserba).',
    },
  ],
  7: [
    {
      question: 'わたしは はし [ ___ ] ごはんを 食べます。',
      audioText: 'わたしは はしで ごはんを 食べます。',
      options: ['で', 'を', 'に', 'と'],
      correctAnswer: 'で',
      explanation: 'Partikel で menunjukkan alat atau sarana untuk melakukan suatu kegiatan (makan dengan sumpit).',
    },
    {
      question: 'わたしは 山田さん [ ___ ] 花を あげました。',
      audioText: 'わたしは 山田さんに 花を あげました。',
      options: ['に', 'で', 'を', 'が'],
      correctAnswer: 'に',
      explanation: 'Penerima pemberian pada kata kerja あげます ditandai dengan partikel に (kepada).',
    },
  ],
  8: [
    {
      question: '日本の 地下鉄は 便利 [ ___ ] きれいです。',
      audioText: '日本の 地下鉄は 便利で、きれいです。',
      options: ['で', 'な', 'に', 'と'],
      correctAnswer: 'で',
      explanation: 'Menghubungkan kata sifat-na (便利) dalam satu kalimat menggunakan で.',
    },
    {
      question: '奈良は 静か [ ___ ] 町です。',
      audioText: '奈良は 静かな 町です。',
      options: ['な', 'い', 'の', 'に'],
      correctAnswer: 'な',
      explanation: 'Kata sifat-na (静か) wajib menyertakan な ketika menerangkan kata benda (町) secara langsung.',
    },
  ],
  9: [
    {
      question: 'わたしは イタリア料理 [ ___ ] 好きです。',
      audioText: 'わたしは イタリア料理が 好きです。',
      options: ['が', 'を', 'に', 'で'],
      correctAnswer: 'が',
      explanation: 'Kata sifat 好き (suka), 嫌い (benci), 上手 (pandai), dan 下手 (tidak pandai) mengambil partikel が.',
    },
    {
      question: 'ミラーさんは 漢字 [ ___ ] わかります。',
      audioText: 'ミラーさんは 漢字が わかります。',
      options: ['が', 'を', 'に', 'へ'],
      correctAnswer: 'が',
      explanation: 'Kata kerja わかります (mengerti) dan あります (mempunyai) selalu menggunakan partikel が.',
    },
  ],
  10: [
    {
      question: 'あそこに 犬 [ ___ ] います。',
      audioText: 'あそこに 犬が います。',
      options: ['が', 'を', 'に', 'で'],
      correctAnswer: 'が',
      explanation: 'Keberadaan makhluk hidup (います) dan benda mati (あります) ditandai dengan partikel が.',
    },
    {
      question: '机の 上 [ ___ ] 写真が あります。',
      audioText: '机の 上に 写真が あります。',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswer: 'に',
      explanation: 'Lokasi keberadaan benda atau orang dinyatakan dengan partikel に.',
    },
  ],
  11: [
    {
      question: '1週間 [ ___ ] 2回 テニスを します。',
      audioText: '1週間に 2回 テニスを します。',
      options: ['に', 'で', 'を', 'と'],
      correctAnswer: 'に',
      explanation: 'Untuk menyatakan frekuensi dalam rentang waktu tertentu (2 kali dalam 1 minggu), gunakan [Rentang Waktu] に [Frekuensi].',
    },
    {
      question: '国から 両親 [ ___ ] 来ました。',
      audioText: '国から 両親が 来ました。',
      options: ['が', 'を', 'で', 'に'],
      correctAnswer: 'が',
      explanation: 'Subjek yang datang (両親) ditandai dengan partikel が.',
    },
  ],
  12: [
    {
      question: '飛行機は 車 [ ___ ] 速いです。',
      audioText: '飛行機は 車より 速いです。',
      options: ['より', 'ほど', 'で', 'に'],
      correctAnswer: 'より',
      explanation: 'Partikel より berarti "daripada" untuk membandingkan dua hal (Pesawat lebih cepat daripada mobil).',
    },
    {
      question: 'スポーツ [ ___ ] サッカーが いちばん 面白いです。',
      audioText: 'スポーツで サッカーが いちばん 面白いです。',
      options: ['で', 'に', 'を', 'と'],
      correctAnswer: 'で',
      explanation: 'Lingkup atau kategori perbandingan superlatif (いちばん) ditandai dengan partikel で.',
    },
  ],
  13: [
    {
      question: 'わたしは 新しい カメラ [ ___ ] ほしいです。',
      audioText: 'わたしは 新しい カメラが ほしいです。',
      options: ['が', 'を', 'に', 'へ'],
      correctAnswer: 'が',
      explanation: 'Objek keinginan pada kata sifat ほしい (ingin benda) selalu ditandai dengan partikel が.',
    },
    {
      question: 'フランスへ 料理を 習い [ ___ ] 行きます。',
      audioText: 'フランスへ 料理を 習いに 行きます。',
      options: ['に', 'で', 'を', 'と'],
      correctAnswer: 'に',
      explanation: 'Tujuan kepergian dinyatakan dengan [Bentuk Masu tanpa -masu] + に + 行きます/来ます/帰ります.',
    },
  ],
  14: [
    {
      question: '今 雨 [ ___ ] 降っています。',
      audioText: '今 雨が 降っています。',
      options: ['が', 'を', 'に', 'で'],
      correctAnswer: 'が',
      explanation: 'Fenomena alam (雨が降ります / 雪が降ります) selalu menggunakan partikel subjek が.',
    },
    {
      question: 'ここに 住所と 名前 [ ___ ] 書いて ください。',
      audioText: 'ここに 住所と 名前を 書いて ください。',
      options: ['を', 'が', 'に', 'で'],
      correctAnswer: 'を',
      explanation: 'Objek yang ditulis (住所と名前) ditandai dengan partikel を.',
    },
  ],
  15: [
    {
      question: 'ここに 車を 止めて [ ___ ] いいですか。',
      audioText: 'ここに 車を 止めても いいですか。',
      options: ['も', 'は', 'に', 'が'],
      correctAnswer: 'も',
      explanation: 'Pola ～ても いいですか digunakan untuk meminta izin ("Bolehkah ...?").',
    },
    {
      question: 'ミラーさんは 大阪 [ ___ ] 住んでいます。',
      audioText: 'ミラーさんは 大阪に 住んでいます。',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswer: 'に',
      explanation: 'Tempat tinggal pada kata kerja 住んでいます selalu menggunakan partikel に.',
    },
  ],
  16: [
    {
      question: '朝 ジョギングを して、シャワー [ ___ ] 浴びて、会社へ 行きます。',
      audioText: '朝 ジョギングを して、シャワーを 浴びて、会社へ 行きます。',
      options: ['を', 'に', 'が', 'で'],
      correctAnswer: 'を',
      explanation: 'Ungkapan mandi menggunakan frasa tetap シャワーを 浴びます.',
    },
    {
      question: '東京駅から 新幹線 [ ___ ] 乗ります。',
      audioText: '東京駅から 新幹線に 乗ります。',
      options: ['に', 'を', 'で', 'へ'],
      correctAnswer: 'に',
      explanation: 'Naik ke kendaraan (乗ります) menggunakan partikel に, sedangkan turun (降ります) menggunakan を.',
    },
  ],
  17: [
    {
      question: '薬を 飲まなければ なりません [ ___ ]、早く 帰ります。',
      audioText: '薬を 飲まなければ なりませんから、早く 帰ります。',
      options: ['から', 'まで', 'より', 'ても'],
      correctAnswer: 'から',
      explanation: 'から di akhir klausa menyatakan alasan ("karena harus minum obat").',
    },
    {
      question: 'パスポートを 見せ [ ___ ] ください。',
      audioText: 'パスポートを 見せて ください。',
      options: ['て', 'ない', 'た', 'ます'],
      correctAnswer: 'て',
      explanation: 'Permintaan tolong secara sopan menggunakan pola [Bentuk Te] + ください.',
    },
  ],
  18: [
    {
      question: 'ミラーさんは 漢字を 読む こと [ ___ ] できます。',
      audioText: 'ミラーさんは 漢字を 読む ことが できます。',
      options: ['が', 'を', 'に', 'で'],
      correctAnswer: 'が',
      explanation: 'Pola kemampuan (Bentuk Kamus + ことが できます) selalu menggunakan partikel が.',
    },
    {
      question: '寝る まえ [ ___ ]、日記を 書きます。',
      audioText: '寝る まえに、日記を 書きます。',
      options: ['に', 'で', 'を', 'から'],
      correctAnswer: 'に',
      explanation: 'Pola "sebelum melakukan..." menggunakan [Bentuk Kamus] + まえに.',
    },
  ],
  19: [
    {
      question: 'わたしは 北海道へ 行った こと [ ___ ] あります。',
      audioText: 'わたしは 北海道へ 行った ことが あります。',
      options: ['が', 'を', 'に', 'で'],
      correctAnswer: 'が',
      explanation: 'Pengalaman di masa lampau dinyatakan dengan pola [Bentuk Ta] + ことが あります.',
    },
    {
      question: '休みの 日は テニスを したり、散歩 [ ___ ] したり します。',
      audioText: '休みの 日は テニスを したり、散歩を したり します。',
      options: ['を', 'に', 'で', 'へ'],
      correctAnswer: 'を',
      explanation: 'Pola ～たり ～たり します menyebutkan beberapa contoh kegiatan.',
    },
  ],
  20: [
    {
      question: 'あした 君 [ ___ ] パーティーに 行く？',
      audioText: 'あした 君も パーティーに 行く？',
      options: ['も', 'を', 'で', 'から'],
      correctAnswer: 'も',
      explanation: 'Dalam percakapan bentuk biasa (Futsuukei), も berarti "juga" (Apakah kamu juga pergi ke pesta besok?).',
    },
    {
      question: 'ビザが いる [ ___ ] どうか、わかりません。',
      audioText: 'ビザが いるか どうか、わかりません。',
      options: ['か', 'の', 'と', 'に'],
      correctAnswer: 'か',
      explanation: 'Pola ～か どうか berarti "apakah ... atau tidak".',
    },
  ],
  21: [
    {
      question: 'あしたは 雨が 降る [ ___ ] 思います。',
      audioText: 'あしたは 雨が 降ると 思います。',
      options: ['と', 'に', 'を', 'が'],
      correctAnswer: 'と',
      explanation: 'Pendapat atau perkiraan (～と 思います) menggunakan partikel kutipan と setelah Bentuk Biasa.',
    },
    {
      question: 'ミラーさんは 来週 アメリカへ 帰る [ ___ ] 言いました。',
      audioText: 'ミラーさんは 来週 アメリカへ 帰ると 言いました。',
      options: ['と', 'を', 'に', 'で'],
      correctAnswer: 'と',
      explanation: 'Kutipan kalimat langsung maupun tidak langsung sebelum 言いました menggunakan partikel と.',
    },
  ],
  22: [
    {
      question: 'これは ミラーさん [ ___ ] 作った ケーキです。',
      audioText: 'これは ミラーさんが 作った ケーキです。',
      options: ['が', 'は', 'を', 'に'],
      correctAnswer: 'が',
      explanation: 'Subjek di dalam anak kalimat yang menerangkan kata benda (作ったケーキ) wajib menggunakan partikel が, bukan は.',
    },
    {
      question: 'わたしは 朝ごはんを 食べる 時間 [ ___ ] ありません。',
      audioText: 'わたしは 朝ごはんを 食べる 時間が ありません。',
      options: ['が', 'を', 'に', 'で'],
      correctAnswer: 'が',
      explanation: 'Kalimat "tidak ada waktu" (時間が ありません) menggunakan partikel が.',
    },
  ],
  23: [
    {
      question: '道を 渡る [ ___ ]、右と 左を よく 見ます。',
      audioText: '道を 渡るとき、右と 左を よく 見ます。',
      options: ['とき', 'まえ', 'あと', 'から'],
      correctAnswer: 'とき',
      explanation: 'Pola ～とき menyatakan "ketika / pada saat" melakukan sesuatu.',
    },
    {
      question: 'この ボタンを 押す [ ___ ]、お釣りが 出ます。',
      audioText: 'この ボタンを 押すと、お釣りが 出ます。',
      options: ['と', 'ば', 'たら', 'なら'],
      correctAnswer: 'と',
      explanation: 'Partikel pengandaian と digunakan untuk hasil yang pasti/otomatis terjadi (mesin, gejala alam, petunjuk jalan).',
    },
  ],
  24: [
    {
      question: '佐藤さんは わたし [ ___ ] クリスマスカードを くれました。',
      audioText: '佐藤さんは わたしに クリスマスカードを くれました。',
      options: ['に', 'を', 'が', 'と'],
      correctAnswer: 'に',
      explanation: 'Kata kerja くれます menyatakan orang lain memberi sesuatu kepada "saya" (わたしに).',
    },
    {
      question: 'わたしは 山田さんに 地図を 書いて [ ___ ]。',
      audioText: 'わたしは 山田さんに 地図を 書いて もらいました。',
      options: ['もらいました', 'あげました', 'くれました', 'しました'],
      correctAnswer: 'もらいました',
      explanation: 'Polanya [Saya] は [Orang] に ～て もらいました berarti saya menerima bantuan dari orang tersebut.',
    },
  ],
  25: [
    {
      question: '雨が 降っ [ ___ ]、出かけません。',
      audioText: '雨が 降ったら、出かけません。',
      options: ['たら', 'ても', 'とき', 'まえ'],
      correctAnswer: 'たら',
      explanation: 'Pola pengandaian ～たら ("kalau turun hujan, saya tidak jadi keluar") dibentuk dari Bentuk Ta + ら.',
    },
    {
      question: '安く [ ___ ]、わたしは パソコンを 買いません。',
      audioText: '安くても、わたしは パソコンを 買いません。',
      options: ['ても', 'たら', 'から', 'ので'],
      correctAnswer: 'ても',
      explanation: 'Pola konsesif ～ても berarti "meskipun / walaupun" (Walaupun murah, saya tidak membeli laptop).',
    },
  ],
};

/**
 * Splits a Japanese sentence into 4–5 clean word tokens for Sentence Ordering exercises.
 */
function tokenizeSentenceForOrder(jp: string): string[] {
  const clean = jp.replace(/。|、|？|\?/g, '').trim();
  const bySpace = clean.split(/\s+/).filter(Boolean);
  if (bySpace.length >= 4 && bySpace.length <= 6) {
    return bySpace;
  }

  // Fallback segmentation by common particles while keeping particles attached to preceding word
  const segments: string[] = [];
  let buf = '';
  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    buf += ch;
    if (
      ['は', 'を', 'に', 'で', 'へ', 'と', 'が', 'も', 'から', 'まで'].includes(ch) &&
      buf.length >= 2 &&
      segments.length < 4
    ) {
      segments.push(buf.trim());
      buf = '';
    }
  }
  if (buf.trim()) {
    segments.push(buf.trim());
  }

  if (segments.length >= 3) {
    return segments;
  }

  // Evenly slice into 4 chunks if no spaces/particles matched
  const len = Math.max(1, Math.floor(clean.length / 4));
  return [
    clean.slice(0, len),
    clean.slice(len, len * 2),
    clean.slice(len * 2, len * 3),
    clean.slice(len * 3),
  ].filter(Boolean);
}

function deterministicRotate<T>(arr: T[], seed: number): T[] {
  if (arr.length <= 1) return arr;
  const shift = (seed % (arr.length - 1)) + 1;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
}

/**
 * Generates 11 comprehensive JLPT N5 exercises for any Minna no Nihongo chapter (Bab 1–25)
 * covering 4 distinct N5 exercise types:
 * 1. Partikel (助詞 / Joshi) — 3 soal
 * 2. Tata Bahasa & Kosakata (文法・語彙) — 4 soal
 * 3. Menyusun Kalimat (並べ替え / Sentence Ordering) — 2 soal
 * 4. Konteks Percakapan (会話・応答 / Kaiwa Dialog) — 2 soal
 */
export function buildChapterExercises(lesson: MinnaLesson): LessonExercise[] {
  const ch = lesson.chapter;
  const result: LessonExercise[] = [];

  // ---------------------------------------------------------------------------
  // BAGIAN 1: PARTIKEL (助詞 / JOSHI) - 3 Soal
  // ---------------------------------------------------------------------------
  const existingParticles = lesson.exercises
    .filter(e => e.type === 'particle')
    .map((e, idx) => ({
      ...e,
      id: `${ch}-part-base-${idx}`,
      categoryLabel: 'Bagian 1 · Partikel (助詞)',
    }));

  result.push(...existingParticles);

  const curatedParticles = CHAPTER_PARTICLE_DRILLS[ch] || [];
  for (let i = 0; i < curatedParticles.length && result.length < 3; i++) {
    const drill = curatedParticles[i];
    if (!result.some(r => r.question === drill.question)) {
      result.push({
        id: `${ch}-part-curated-${i + 1}`,
        type: 'particle',
        categoryLabel: 'Bagian 1 · Partikel (助詞)',
        question: `Lengkapilah partikel yang tepat pada kalimat Bab ${ch} berikut:\n${drill.question}`,
        audioText: drill.audioText,
        options: deterministicRotate(drill.options, ch + i),
        correctAnswer: drill.correctAnswer,
        explanation: drill.explanation,
      });
    }
  }

  // If still < 3 particle questions, synthesize from chapter Reibun
  const allReibun = lesson.bunkei.flatMap(b =>
    b.reibun.map(r => ({ ...r, patternTitle: b.title }))
  );
  const particleCandidates = ['は', 'を', 'に', 'で', 'へ', 'が', 'の', 'と', 'も'];
  for (let i = 0; i < allReibun.length && result.length < 3; i++) {
    const r = allReibun[i];
    const foundP = particleCandidates.find(p => r.japanese.includes(`${p} `));
    if (foundP) {
      const masked = r.japanese.replace(`${foundP} `, ' [ ___ ] ');
      const distractors = particleCandidates.filter(p => p !== foundP).slice(0, 3);
      const opts = deterministicRotate([foundP, ...distractors], ch + i + 2);
      result.push({
        id: `${ch}-part-reibun-${i}`,
        type: 'particle',
        categoryLabel: 'Bagian 1 · Partikel (助詞)',
        question: `Pilihlah partikel yang tepat untuk melengkapi kalimat berikut:\n「${masked}」\n(${r.indonesian})`,
        audioText: r.japanese,
        options: opts,
        correctAnswer: foundP,
        explanation: `Kalimat lengkapnya adalah 「${r.japanese}」 (${r.romaji}). Partikel 「${foundP}」 digunakan sesuai pola "${r.patternTitle}".`,
      });
    }
  }

  // ---------------------------------------------------------------------------
  // BAGIAN 2: TATA BAHASA & KOSAKATA (文法・語彙) - 4 Soal
  // ---------------------------------------------------------------------------
  const existingMc = lesson.exercises
    .filter(e => e.type === 'multiple-choice')
    .map((e, idx) => ({
      ...e,
      id: `${ch}-mc-base-${idx}`,
      categoryLabel: 'Bagian 2 · Tata Bahasa & Kosakata (文法・語彙)',
    }));
  result.push(...existingMc.slice(0, 2));

  // Vocab Question 1: Japanese -> Indonesian
  if (lesson.vocab.length >= 4) {
    const vIdx = ch % Math.max(1, lesson.vocab.length - 3);
    const targetV = lesson.vocab[vIdx] || lesson.vocab[0];
    const distractors = lesson.vocab
      .filter(v => v.id !== targetV.id && v.indonesian !== targetV.indonesian)
      .slice(0, 3)
      .map(v => v.indonesian);
    const opts = deterministicRotate([targetV.indonesian, ...distractors], ch + 1);

    result.push({
      id: `${ch}-vocab-jp-id-1`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 2 · Tata Bahasa & Kosakata (文法・語彙)',
      question: `Apakah arti dari kosakata Bab ${ch} berikut:\n「${
        targetV.kanji ? `${targetV.kanji} (${targetV.kana})` : targetV.kana
      }」?`,
      audioText: targetV.kana,
      options: opts,
      correctAnswer: targetV.indonesian,
      explanation: `Kosakata 「${targetV.kanji || targetV.kana}」 (${targetV.romaji}) termasuk ${
        targetV.wordType
      } pada Bab ${ch} yang berarti "${targetV.indonesian}".`,
    });
  }

  // Vocab Question 2: Indonesian -> Japanese
  if (lesson.vocab.length >= 6) {
    const vIdx2 = (ch + 2) % Math.max(1, lesson.vocab.length - 2);
    const targetV2 = lesson.vocab[vIdx2] || lesson.vocab[2];
    const formatWord = (v: typeof targetV2) =>
      v.kanji && v.kanji !== v.kana ? `${v.kanji} (${v.kana})` : v.kana;
    const correctLabel = formatWord(targetV2);
    const distractors2 = lesson.vocab
      .filter(v => v.id !== targetV2.id)
      .slice(0, 3)
      .map(formatWord);
    const opts2 = deterministicRotate([correctLabel, ...distractors2], ch + 3);

    result.push({
      id: `${ch}-vocab-id-jp-2`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 2 · Tata Bahasa & Kosakata (文法・語彙)',
      question: `Manakah kosakata bahasa Jepang di Bab ${ch} yang memiliki arti: "${targetV2.indonesian}"?`,
      audioText: targetV2.kana,
      options: opts2,
      correctAnswer: correctLabel,
      explanation: `"${targetV2.indonesian}" dalam bahasa Jepang adalah 「${correctLabel}」 (${targetV2.romaji}).`,
    });
  }

  // Grammar Reibun Comprehension 1: Sentence -> Indonesian Meaning
  if (allReibun.length >= 1) {
    const rTarget = allReibun[0];
    const fallbackMeanings = [
      allReibun[1]?.indonesian,
      lesson.kaiwa.dialogue[0]?.indonesian,
      'Apakah besok Anda pergi ke kantor bersama Pak Yamada?',
      'Saya setiap pagi membaca koran dan minum kopi di rumah.',
    ].filter((m): m is string => Boolean(m && m !== rTarget.indonesian));

    const optsR1 = deterministicRotate(
      [rTarget.indonesian, ...fallbackMeanings.slice(0, 3)],
      ch + 4
    );

    result.push({
      id: `${ch}-bunkei-comp-1`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 2 · Tata Bahasa & Kosakata (文法・語彙)',
      question: `Terjemahan yang paling tepat untuk kalimat pola Bab ${ch} berikut adalah:\n「${rTarget.japanese}」`,
      audioText: rTarget.japanese,
      options: optsR1,
      correctAnswer: rTarget.indonesian,
      explanation: `Kalimat 「${rTarget.japanese}」 (${rTarget.romaji}) menerapkan pola "${rTarget.patternTitle}" dengan arti "${rTarget.indonesian}".`,
    });
  }

  // Grammar Reibun Comprehension 2: Indonesian -> Correct Japanese Sentence
  if (allReibun.length >= 2 && result.filter(r => r.categoryLabel?.includes('Bagian 2')).length < 4) {
    const rTarget2 = allReibun[1];
    const otherJp = [
      allReibun[0]?.japanese,
      allReibun[2]?.japanese,
      lesson.kaiwa.dialogue[0]?.japanese,
      'わたしは 毎日 日本語を 勉強します。',
    ].filter((j): j is string => Boolean(j && j !== rTarget2.japanese));

    const optsR2 = deterministicRotate([rTarget2.japanese, ...otherJp.slice(0, 3)], ch + 5);

    result.push({
      id: `${ch}-bunkei-comp-2`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 2 · Tata Bahasa & Kosakata (文法・語彙)',
      question: `Manakah kalimat bahasa Jepang yang sesuai untuk menyatakan:\n"${rTarget2.indonesian}"?`,
      audioText: rTarget2.japanese,
      options: optsR2,
      correctAnswer: rTarget2.japanese,
      explanation: `Untuk menyatakan "${rTarget2.indonesian}", kalimat yang tepat sesuai pola Bab ${ch} adalah 「${rTarget2.japanese}」 (${rTarget2.romaji}).`,
    });
  }

  // ---------------------------------------------------------------------------
  // BAGIAN 3: MENYUSUN KALIMAT (並べ替え / SENTENCE ORDERING) - 2 Soal
  // ---------------------------------------------------------------------------
  const existingOrder = lesson.exercises
    .filter(e => e.type === 'sentence-order')
    .map((e, idx) => ({
      ...e,
      id: `${ch}-order-base-${idx}`,
      categoryLabel: 'Bagian 3 · Menyusun Kalimat (並べ替え)',
    }));
  result.push(...existingOrder.slice(0, 2));

  let orderAdded = existingOrder.length;
  for (let i = 0; i < allReibun.length && orderAdded < 2; i++) {
    const r = allReibun[(i + 1) % allReibun.length];
    const tokens = tokenizeSentenceForOrder(r.japanese);
    if (tokens.length >= 3) {
      // Ensure unique tokens so word picker works cleanly
      const uniqueTokens = tokens.map((t, idx) =>
        tokens.indexOf(t) !== idx ? `${t} ` : t
      );
      const scrambled = deterministicRotate(uniqueTokens, ch + i + 2);
      result.push({
        id: `${ch}-order-auto-${i + 1}`,
        type: 'sentence-order',
        categoryLabel: 'Bagian 3 · Menyusun Kalimat (並べ替え)',
        question: `Susunlah potongan kata berikut menjadi kalimat bahasa Jepang yang benar sesuai arti:\n"${r.indonesian}"`,
        audioText: r.japanese,
        words: scrambled,
        correctAnswer: uniqueTokens,
        explanation: `Susunan kalimat yang tepat adalah: 「${uniqueTokens.join(' ')}」 (${r.romaji}).`,
      });
      orderAdded++;
    }
  }

  // ---------------------------------------------------------------------------
  // BAGIAN 4: KONTEKS PERCAKAPAN (会話・応答 / KAIWA DIALOG) - 2 Soal
  // ---------------------------------------------------------------------------
  const dialogue = lesson.kaiwa.dialogue;
  if (dialogue.length >= 2) {
    const lineA = dialogue[0];
    const lineB = dialogue[1];
    const distractorReplies = [
      dialogue[2]?.japanese,
      allReibun[0]?.japanese,
      'いいえ、まだです。これから 行きます。',
      'はい、わかりました。どうも ありがとう ございます。',
    ].filter((d): d is string => Boolean(d && d !== lineB.japanese));

    result.push({
      id: `${ch}-kaiwa-ctx-1`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 4 · Konteks Percakapan (会話)',
      question: `Perhatikan cuplikan percakapan "${lesson.kaiwa.title}" (Bab ${ch}):\n${lineA.speaker}: 「${lineA.japanese}」 (${lineA.indonesian})\nRespons ${lineB.speaker} yang paling tepat sesuai dialog adalah:`,
      audioText: lineB.japanese,
      options: deterministicRotate([lineB.japanese, ...distractorReplies.slice(0, 3)], ch + 6),
      correctAnswer: lineB.japanese,
      explanation: `Dalam dialog "${lesson.kaiwa.title}", ${lineB.speaker} menjawab: 「${lineB.japanese}」 yang berarti "${lineB.indonesian}".`,
    });
  }

  if (dialogue.length >= 3) {
    const lastIdx = dialogue.length - 1;
    const prevLine = dialogue[lastIdx - 1];
    const targetLine = dialogue[lastIdx];
    const otherMeanings = [
      prevLine.indonesian,
      dialogue[0]?.indonesian,
      'Maaf, saya harus pulang lebih awal hari ini.',
      'Permisi, di manakah letak stasiun kereta bawah tanah?',
    ].filter((m): m is string => Boolean(m && m !== targetLine.indonesian));

    result.push({
      id: `${ch}-kaiwa-ctx-2`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 4 · Konteks Percakapan (会話)',
      question: `Dalam penutup percakapan Bab ${ch}, ${targetLine.speaker} mengucapkan:\n「${targetLine.japanese}」\nApakah maksud ungkapan tersebut dalam bahasa Indonesia?`,
      audioText: targetLine.japanese,
      options: deterministicRotate([targetLine.indonesian, ...otherMeanings.slice(0, 3)], ch + 7),
      correctAnswer: targetLine.indonesian,
      explanation: `Ungkapan 「${targetLine.japanese}」 (${targetLine.romaji}) berarti "${targetLine.indonesian}".`,
    });
  } else if (dialogue.length >= 1) {
    const firstLine = dialogue[0];
    const otherMeanings = [
      allReibun[0]?.indonesian || 'Saya berasal dari Indonesia.',
      'Apakah ini kamus bahasa Jepang milik Anda?',
      'Mari kita istirahat sebentar di lobi.',
    ].filter(m => m !== firstLine.indonesian);

    result.push({
      id: `${ch}-kaiwa-ctx-2`,
      type: 'multiple-choice',
      categoryLabel: 'Bagian 4 · Konteks Percakapan (会話)',
      question: `Dalam percakapan "${lesson.kaiwa.title}" (Bab ${ch}), ${firstLine.speaker} berkata:\n「${firstLine.japanese}」\nApakah terjemahan yang tepat dari kalimat tersebut?`,
      audioText: firstLine.japanese,
      options: deterministicRotate([firstLine.indonesian, ...otherMeanings.slice(0, 3)], ch + 7),
      correctAnswer: firstLine.indonesian,
      explanation: `Kalimat 「${firstLine.japanese}」 (${firstLine.romaji}) berarti "${firstLine.indonesian}".`,
    });
  }

  return result;
}
