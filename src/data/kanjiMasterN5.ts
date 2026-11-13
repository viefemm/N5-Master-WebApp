import { KanjiItem } from '../types';

export interface KanjiChapterExercise {
  chapter: number;
  chapterTitle: string;
  fukushuYomi: { q: string; kanji: string; answer: string }[];
  fukushuKaki: { q: string; kana: string; answer: string }[];
  quizType: string;
  quizQuestion: string;
  quizOptions?: string[];
  quizAnswer: string;
}

export const kanjiMasterN5: KanjiItem[] = [
  // 1章：すうじ (Numbers) - 14 Kanji (p. 11-17)
  {
    id: 'k-1',
    kanji: '一',
    strokes: 1,
    onyomi: ['イチ', 'イツ'],
    kunyomi: ['ひと', 'ひと・つ'],
    meaningId: 'Satu',
    meaningEn: 'One',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '一つ', reading: 'ひとつ', meaning: 'Satu buah' },
      { word: '一人', reading: 'ひとり', meaning: 'Satu orang / Sendirian' },
      { word: '一日', reading: 'ついたち / いちにち', meaning: 'Tanggal satu / Satu hari' },
      { word: '一月', reading: 'いちがつ', meaning: 'Bulan Januari' },
      { word: '一枚', reading: 'いちまい', meaning: 'Satu lembar' },
      { word: '一ぽん', reading: 'いっぽん', meaning: 'Satu batang' }
    ],
    sampleSentence: { jp: 'サンドイッチを一つとコーヒーを二つお願いします。', reading: 'サンドイッチをひとつとコーヒーをふたつおねがいします。', id: 'Tolong satu roti sandwich dan dua kopi.' }
  },
  {
    id: 'k-2',
    kanji: '二',
    strokes: 2,
    onyomi: ['ニ'],
    kunyomi: ['ふた', 'ふた・つ'],
    meaningId: 'Dua',
    meaningEn: 'Two',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '二つ', reading: 'ふたつ', meaning: 'Dua buah' },
      { word: '二人', reading: 'ふたり', meaning: 'Dua orang' },
      { word: '二日', reading: 'ふつか', meaning: 'Tanggal dua / 2 hari' },
      { word: '二月', reading: 'にがつ', meaning: 'Bulan Februari' },
      { word: '二階', reading: 'にかい', meaning: 'Lantai dua' },
      { word: '二台', reading: 'にだい', meaning: 'Dua unit' }
    ],
    sampleSentence: { jp: 'うちにパソコンが二台あります。', reading: 'うちにパソコンがにだいあります。', id: 'Di rumah ada dua unit komputer.' }
  },
  {
    id: 'k-3',
    kanji: '三',
    strokes: 3,
    onyomi: ['サン'],
    kunyomi: ['み', 'みっ・つ'],
    meaningId: 'Tiga',
    meaningEn: 'Three',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '三つ', reading: 'みっつ', meaning: 'Tiga buah' },
      { word: '三人', reading: 'さんにん', meaning: 'Tiga orang' },
      { word: '三日', reading: 'みっか', meaning: 'Tanggal tiga / 3 hari' },
      { word: '三月', reading: 'さんがつ', meaning: 'Bulan Maret' },
      { word: '三枚', reading: 'さんまい', meaning: 'Tiga lembar' },
      { word: '三千円', reading: 'さんぜんえん', meaning: 'Tiga ribu yen' }
    ],
    sampleSentence: { jp: 'レモンを三つとリンゴを四つ買います。', reading: 'レモンをみっつとリンゴをよっつかいます。', id: 'Membeli tiga lemon dan empat apel.' }
  },
  {
    id: 'k-4',
    kanji: '四',
    strokes: 5,
    onyomi: ['シ'],
    kunyomi: ['よ', 'よ・つ', 'よっ・つ', 'よん'],
    meaningId: 'Empat',
    meaningEn: 'Four',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '四つ', reading: 'よっつ', meaning: 'Empat buah' },
      { word: '四人', reading: 'よにん', meaning: 'Empat orang' },
      { word: '四日', reading: 'よっか', meaning: 'Tanggal empat / 4 hari' },
      { word: '四月', reading: 'しがつ', meaning: 'Bulan April' },
      { word: '四時間', reading: 'よじかん', meaning: 'Empat jam' },
      { word: '四百円', reading: 'よんひゃくえん', meaning: 'Empat ratus yen' }
    ],
    sampleSentence: { jp: '一日に四時間勉強をします。', reading: 'いちにちに よじかん べんきょうをします。', id: 'Belajar 4 jam dalam sehari.' }
  },
  {
    id: 'k-5',
    kanji: '五',
    strokes: 4,
    onyomi: ['ゴ'],
    kunyomi: ['いつ', 'いつ・つ'],
    meaningId: 'Lima',
    meaningEn: 'Five',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '五つ', reading: 'いつつ', meaning: 'Lima buah' },
      { word: '五人', reading: 'ごにん', meaning: 'Lima orang' },
      { word: '五日', reading: 'いつか', meaning: 'Tanggal lima / 5 hari' },
      { word: '五月', reading: 'ごがつ', meaning: 'Bulan Mei' },
      { word: '五分', reading: 'ごふん', meaning: 'Lima menit' },
      { word: '五階', reading: 'ごかい', meaning: 'Lantai lima' }
    ],
    sampleSentence: { jp: 'スーパーでトマトを五つ買いました。', reading: 'スーパーでトマトをいつつかいました。', id: 'Membeli lima buah tomat di supermarket.' }
  },
  {
    id: 'k-6',
    kanji: '六',
    strokes: 4,
    onyomi: ['ロク', 'ロッ'],
    kunyomi: ['む', 'むっ・つ', 'むい'],
    meaningId: 'Enam',
    meaningEn: 'Six',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '六つ', reading: 'むっつ', meaning: 'Enam buah' },
      { word: '六日', reading: 'むいか', meaning: 'Tanggal enam / 6 hari' },
      { word: '六月', reading: 'ろくがつ', meaning: 'Bulan Juni' },
      { word: '六百', reading: 'ろっぴゃく', meaning: 'Enam ratus' },
      { word: '六ぽん', reading: 'ろっぽん', meaning: 'Enam botol / batang' }
    ],
    sampleSentence: { jp: '卵を六つ買いました。', reading: 'たまごをむっつかいました。', id: 'Membeli enam butir telur.' }
  },
  {
    id: 'k-7',
    kanji: '七',
    strokes: 2,
    onyomi: ['シチ'],
    kunyomi: ['なな', 'なな・つ', 'なの'],
    meaningId: 'Tujuh',
    meaningEn: 'Seven',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '七つ', reading: 'ななつ', meaning: 'Tujuh buah' },
      { word: '七日', reading: 'なのか', meaning: 'Tanggal tujuh / 7 hari' },
      { word: '七月', reading: 'しちがつ', meaning: 'Bulan Juli' },
      { word: '七時', reading: 'しちじ', meaning: 'Jam tujuh' },
      { word: '七五三', reading: 'しちごさん', meaning: 'Perayaan Shichigosan (7-5-3)' },
      { word: '七階', reading: 'ななかい', meaning: 'Lantai tujuh' }
    ],
    sampleSentence: { jp: 'みかんを七つください。', reading: 'みかんをななつください。', id: 'Tolong beri saya tujuh buah jeruk mandarin.' }
  },
  {
    id: 'k-8',
    kanji: '八',
    strokes: 2,
    onyomi: ['ハチ', 'ハッ'],
    kunyomi: ['や', 'やっ・つ', 'よう'],
    meaningId: 'Delapan',
    meaningEn: 'Eight',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '八つ', reading: 'やっつ', meaning: 'Delapan buah' },
      { word: '八日', reading: 'ようか', meaning: 'Tanggal delapan / 8 hari' },
      { word: '八月', reading: 'はちがつ', meaning: 'Bulan Agustus' },
      { word: '八百', reading: 'はっぴゃく', meaning: 'Delapan ratus' },
      { word: '八ぽん', reading: 'はっぽん', meaning: 'Delapan batang' },
      { word: '八枚', reading: 'はちまい', meaning: 'Delapan lembar' }
    ],
    sampleSentence: { jp: 'ジュースを八本買いましょう。', reading: 'ジュースをはっぽんかいましょう。', id: 'Ayo membeli delapan botol jus.' }
  },
  {
    id: 'k-9',
    kanji: '九',
    strokes: 2,
    onyomi: ['キュウ', 'ク'],
    kunyomi: ['ここの', 'ここの・つ'],
    meaningId: 'Sembilan',
    meaningEn: 'Nine',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '九つ', reading: 'ここのつ', meaning: 'Sembilan buah' },
      { word: '九日', reading: 'ここのか', meaning: 'Tanggal sembilan / 9 hari' },
      { word: '九月', reading: 'くがつ', meaning: 'Bulan September' },
      { word: '九時', reading: 'くじ', meaning: 'Jam sembilan' },
      { word: '九人', reading: 'きゅうにん', meaning: 'Sembilan orang' }
    ],
    sampleSentence: { jp: 'ケーキを九つ買いました。', reading: 'ケーキをここのつかいました。', id: 'Membeli sembilan potong kue.' }
  },
  {
    id: 'k-10',
    kanji: '十',
    strokes: 2,
    onyomi: ['ジュウ', 'ジッ'],
    kunyomi: ['とお', 'と'],
    meaningId: 'Sepuluh',
    meaningEn: 'Ten',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '十', reading: 'とお', meaning: 'Sepuluh buah' },
      { word: '十日', reading: 'とおか', meaning: 'Tanggal sepuluh / 10 hari' },
      { word: '十月', reading: 'じゅうがつ', meaning: 'Bulan Oktober' },
      { word: '十分', reading: 'じゅっぷん', meaning: 'Sepuluh menit' },
      { word: '二十ぷん', reading: 'にじゅっぷん', meaning: 'Dua puluh menit' },
      { word: '十人', reading: 'じゅうにん', meaning: 'Sepuluh orang' }
    ],
    sampleSentence: { jp: 'うちから学校まで電車で二十分です。', reading: 'うちからがっこうまででんしゃでにじゅっぷんです。', id: 'Dari rumah ke sekolah memakan waktu 20 menit naik kereta.' }
  },
  {
    id: 'k-11',
    kanji: '百',
    strokes: 6,
    onyomi: ['ヒャク', 'ビャク', 'ピャク'],
    kunyomi: [],
    meaningId: 'Ratusan',
    meaningEn: 'Hundred',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '百人', reading: 'ひゃくにん', meaning: 'Seratus orang' },
      { word: '三百', reading: 'さんびゃく', meaning: 'Tiga ratus' },
      { word: '六百', reading: 'ろっぴゃく', meaning: 'Enam ratus' },
      { word: '八百', reading: 'はっぴゃく', meaning: 'Delapan ratus' },
      { word: '三百六十五日', reading: 'さんびゃくろくじゅうごにち', meaning: '365 hari' }
    ],
    sampleSentence: { jp: '新しい学生が百人来ました。', reading: 'あたらしいがくせいがひゃくにんきました。', id: 'Ada seratus siswa baru yang datang.' }
  },
  {
    id: 'k-12',
    kanji: '千',
    strokes: 3,
    onyomi: ['セン', 'ゼン'],
    kunyomi: ['ち'],
    meaningId: 'Ribuan',
    meaningEn: 'Thousand',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '千円', reading: 'せんえん', meaning: 'Seribu yen' },
      { word: '三千', reading: 'さんぜん', meaning: 'Tiga ribu' },
      { word: '八千', reading: 'はっせん', meaning: 'Delapan ribu' },
      { word: '九千八百円', reading: 'きゅうせんはっぴゃくえん', meaning: '9.800 yen' },
      { word: '千円札', reading: 'せんえんさつ', meaning: 'Uang kertas seribu yen' }
    ],
    sampleSentence: { jp: 'この鞄は九千八百円でした。', reading: 'このかばんはきゅうせんはっぴゃくえんでした。', id: 'Tas ini harganya 9.800 yen.' }
  },
  {
    id: 'k-13',
    kanji: '万',
    strokes: 3,
    onyomi: ['マン'],
    kunyomi: [],
    meaningId: 'Sepuluh Ribu',
    meaningEn: 'Ten Thousand',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '一万', reading: 'いちまん', meaning: 'Sepuluh ribu' },
      { word: '一万円札', reading: 'いちまんえんさつ', meaning: 'Uang kertas 10.000 yen' },
      { word: '七百万', reading: 'ななひゃくまん', meaning: 'Tujuh juta' },
      { word: '三百万', reading: 'さんびゃくまん', meaning: 'Tiga juta' }
    ],
    sampleSentence: { jp: '私の町は七百万人の人が住んでいます。', reading: 'わたしのまちはななひゃくまんにんのひとがすんでいます。', id: 'Kota saya dihuni oleh 7 juta orang.' }
  },
  {
    id: 'k-14',
    kanji: '円',
    strokes: 4,
    onyomi: ['エン'],
    kunyomi: ['まる・い'],
    meaningId: 'Yen / Lingkaran',
    meaningEn: 'Yen / Round',
    chapter: 1,
    category: '1章 すうじ',
    grade: 'N5',
    compounds: [
      { word: '円', reading: 'えん', meaning: 'Yen (mata uang Jepang)' },
      { word: '百円', reading: 'ひゃくえん', meaning: 'Seratus yen' },
      { word: '五百円', reading: 'ごひゃくえん', meaning: 'Lima ratus yen' }
    ],
    sampleSentence: { jp: '五百ドルを円に変えてください。', reading: 'ごひゃくドルをえんにかえてください。', id: 'Tolong tukarkan 500 dolar ke yen.' }
  },

  // 2章：カレンダー (Calendar) - 8 Kanji (p. 23-26)
  {
    id: 'k-15',
    kanji: '月',
    strokes: 4,
    onyomi: ['ゲツ', 'ガツ'],
    kunyomi: ['つき'],
    meaningId: 'Bulan (Moon & Month)',
    meaningEn: 'Moon / Month',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '月', reading: 'つき', meaning: 'Bulan di langit' },
      { word: '月曜日', reading: 'げつようび', meaning: 'Hari Senin' },
      { word: '今月', reading: 'こんげつ', meaning: 'Bulan ini' },
      { word: '九月', reading: 'くがつ', meaning: 'Bulan September' },
      { word: '一か月', reading: 'いっかげつ', meaning: 'Satu bulan lamanya' }
    ],
    sampleSentence: { jp: '今夜は月がとても綺麗です。', reading: 'こんやはつきがとてもきれいです。', id: 'Malam ini bulannya sangat indah.' }
  },
  {
    id: 'k-16',
    kanji: '火',
    strokes: 4,
    onyomi: ['カ'],
    kunyomi: ['ひ'],
    meaningId: 'Api',
    meaningEn: 'Fire',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '火', reading: 'ひ', meaning: 'Api' },
      { word: '火曜日', reading: 'かようび', meaning: 'Hari Selasa' },
      { word: 'たばこの火', reading: 'たばこのひ', meaning: 'Api rokok' }
    ],
    sampleSentence: { jp: 'だんろの火は暖かいです。', reading: 'だんろのひはあたたかいです。', id: 'Api di perapian terasa hangat.' }
  },
  {
    id: 'k-17',
    kanji: '水',
    strokes: 4,
    onyomi: ['スイ'],
    kunyomi: ['みず'],
    meaningId: 'Air',
    meaningEn: 'Water',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '水', reading: 'みず', meaning: 'Air' },
      { word: '水曜日', reading: 'すいようび', meaning: 'Hari Rabu' },
      { word: '水泳', reading: 'すいえい', meaning: 'Berenang' },
      { word: '香水', reading: 'こうすい', meaning: 'Minyak wangi / Parfum' }
    ],
    sampleSentence: { jp: '喉が渇きました。水が飲みたいです。', reading: 'のどがかわきました。みずがのみたいです。', id: 'Tenggorokan haus. Saya ingin minum air.' }
  },
  {
    id: 'k-18',
    kanji: '木',
    strokes: 4,
    onyomi: ['ボク', 'モク'],
    kunyomi: ['き'],
    meaningId: 'Pohon',
    meaningEn: 'Tree',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '木', reading: 'き', meaning: 'Pohon' },
      { word: '木曜日', reading: 'もくようび', meaning: 'Hari Kamis' },
      { word: 'さくらの木', reading: 'さくらのき', meaning: 'Pohon sakura' },
      { word: '大木', reading: 'たいぼく', meaning: 'Pohon besar' }
    ],
    sampleSentence: { jp: '駅の前に桜の木があります。', reading: 'えきのまえにさくらのきがあります。', id: 'Di depan stasiun ada pohon sakura.' }
  },
  {
    id: 'k-19',
    kanji: '金',
    strokes: 8,
    onyomi: ['キン'],
    kunyomi: ['かね'],
    meaningId: 'Emas / Uang',
    meaningEn: 'Gold / Money',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: 'お金', reading: 'おかね', meaning: 'Uang' },
      { word: '金', reading: 'きん', meaning: 'Emas' },
      { word: '金曜日', reading: 'きんようび', meaning: 'Hari Jumat' },
      { word: '料金', reading: 'りょうきん', meaning: 'Biaya / Tarif' },
      { word: '現金', reading: 'げんきん', meaning: 'Uang tunai (cash)' }
    ],
    sampleSentence: { jp: 'レジでお金を払います。', reading: 'レジでおかねをはらいます。', id: 'Membayar uang di kasir.' }
  },
  {
    id: 'k-20',
    kanji: '土',
    strokes: 3,
    onyomi: ['ド'],
    kunyomi: ['つち'],
    meaningId: 'Tanah',
    meaningEn: 'Soil',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '土', reading: 'つち', meaning: 'Tanah' },
      { word: '土曜日', reading: 'どようび', meaning: 'Hari Sabtu' }
    ],
    sampleSentence: { jp: '毎週土曜日は休みです。', reading: 'まいしゅうどようびはやすみです。', id: 'Setiap hari Sabtu libur.' }
  },
  {
    id: 'k-21',
    kanji: '日',
    strokes: 4,
    onyomi: ['ニチ', 'ジツ'],
    kunyomi: ['ひ', '-び', '-ぴ', 'か'],
    meaningId: 'Matahari / Hari',
    meaningEn: 'Day / Sun',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '日曜日', reading: 'にちようび', meaning: 'Hari Minggu' },
      { word: '母の日', reading: 'ははのひ', meaning: 'Hari Ibu' },
      { word: '生年月日', reading: 'せいねんがっぴ', meaning: 'Tanggal lahir' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'Hari libur' }
    ],
    sampleSentence: { jp: '生年月日を教えてください。', reading: 'せいねんがっぴをおしえてください。', id: 'Tolong beritahukan tanggal lahir Anda.' }
  },
  {
    id: 'k-22',
    kanji: '年',
    strokes: 6,
    onyomi: ['ネン'],
    kunyomi: ['とし'],
    meaningId: 'Tahun',
    meaningEn: 'Year',
    chapter: 2,
    category: '2章 カレンダー',
    grade: 'N5',
    compounds: [
      { word: '年', reading: 'とし', meaning: 'Tahun / Usia' },
      { word: '毎年', reading: 'まいとし / まいねん', meaning: 'Setiap tahun' },
      { word: '去年', reading: 'きょねん', meaning: 'Tahun lalu' },
      { word: '二年まえ', reading: 'にねんまえ', meaning: '2 tahun lalu' }
    ],
    sampleSentence: { jp: '二年まえイタリアへ旅行に行きました。', reading: 'にねんまえイタリアへりょこうにいきました。', id: 'Dua tahun lalu saya pergi berwisata ke Italia.' }
  },

  // 3章：人 (People / Body) - 7 Kanji (p. 31-34)
  {
    id: 'k-23',
    kanji: '人',
    strokes: 2,
    onyomi: ['ジン', 'ニン'],
    kunyomi: ['ひと'],
    meaningId: 'Orang',
    meaningEn: 'Person',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '人', reading: 'ひと', meaning: 'Orang' },
      { word: '日本人', reading: 'にほんじん', meaning: 'Orang Jepang' },
      { word: '何人', reading: 'なんにん / なんにん', meaning: 'Berapa orang' },
      { word: '人口', reading: 'じんこう', meaning: 'Populasi penduduk' },
      { word: '三人', reading: 'さんにん', meaning: 'Tiga orang' }
    ],
    sampleSentence: { jp: '東京は人が多いです。', reading: 'とうきょうはひとがおおいです。', id: 'Tokyo memiliki banyak orang.' }
  },
  {
    id: 'k-24',
    kanji: '口',
    strokes: 3,
    onyomi: ['コウ'],
    kunyomi: ['くち', '-ぐち'],
    meaningId: 'Mulut / Pintu Masuk-Keluar',
    meaningEn: 'Mouth / Opening',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '口', reading: 'くち', meaning: 'Mulut' },
      { word: '大きい口', reading: 'おおきいくち', meaning: 'Mulut besar' },
      { word: '改札口', reading: 'かいさつぐち', meaning: 'Pintu gerbang tiket stasiun' },
      { word: '口紅', reading: 'くちべに', meaning: 'Lipstik' }
    ],
    sampleSentence: { jp: '口を開けてください。', reading: 'くちをあけてください。', id: 'Silakan buka mulut Anda.' }
  },
  {
    id: 'k-25',
    kanji: '目',
    strokes: 5,
    onyomi: ['モク'],
    kunyomi: ['め'],
    meaningId: 'Mata / Urutan',
    meaningEn: 'Eye',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '目', reading: 'め', meaning: 'Mata' },
      { word: 'いくつ目', reading: 'いくつめ', meaning: 'Nomor ke berapa' },
      { word: '目薬', reading: 'めぐすり', meaning: 'Obat tetes mata' },
      { word: '目覚まし時計', reading: 'めざましどけい', meaning: 'Jam beker alarm' },
      { word: '目的', reading: 'もくてき', meaning: 'Tujuan' }
    ],
    sampleSentence: { jp: '目があまりよくないですから、眼鏡をかけています。', reading: 'めがあまりよくないですから、めがねをかけています。', id: 'Karena mata kurang baik, saya memakai kacamata.' }
  },
  {
    id: 'k-26',
    kanji: '耳',
    strokes: 6,
    onyomi: ['ジ'],
    kunyomi: ['みみ'],
    meaningId: 'Telinga',
    meaningEn: 'Ear',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '耳', reading: 'みみ', meaning: 'Telinga' },
      { word: '耳鼻科', reading: 'じびか', meaning: 'THT (Klinik Telinga Hidung Tenggorokan)' }
    ],
    sampleSentence: { jp: 'プールで耳に水が入りました。', reading: 'プールでみみにみずがはいりました。', id: 'Air masuk ke dalam telinga saat di kolam renang.' }
  },
  {
    id: 'k-27',
    kanji: '手',
    strokes: 4,
    onyomi: ['シュ'],
    kunyomi: ['て'],
    meaningId: 'Tangan',
    meaningEn: 'Hand',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '手', reading: 'て', meaning: 'Tangan' },
      { word: '手紙', reading: 'てがみ', meaning: 'Surat' },
      { word: '切手', reading: 'きって', meaning: 'Prangko' },
      { word: '握手', reading: 'あくしゅ', meaning: 'Jabat tangan' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: 'Supir' }
    ],
    sampleSentence: { jp: '日本人は手で寿司やおにぎりを食べます。', reading: 'にほんじんはてですしやおにぎりをたべます。', id: 'Orang Jepang memakan sushi dan onigiri menggunakan tangan.' }
  },
  {
    id: 'k-28',
    kanji: '足',
    strokes: 7,
    onyomi: ['ソク', '-ゾク'],
    kunyomi: ['あし', 'た・す'],
    meaningId: 'Kaki / Menambah / Pasang sepatu',
    meaningEn: 'Foot / Leg / Add',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '足', reading: 'あし', meaning: 'Kaki' },
      { word: '三十足', reading: 'さんじっそく', meaning: '30 pasang sepatu' },
      { word: '足して', reading: 'たして', meaning: 'Menambahkan' },
      { word: '一足', reading: 'いっそく', meaning: 'Satu pasang (sepatu/kaus kaki)' }
    ],
    sampleSentence: { jp: 'スープに少し塩を足してください。', reading: 'スープにすこししおをたしてください。', id: 'Tolong tambahkan sedikit garam pada sup.' }
  },
  {
    id: 'k-29',
    kanji: '力',
    strokes: 2,
    onyomi: ['リョク'],
    kunyomi: ['ちから'],
    meaningId: 'Tenaga / Kekuatan',
    meaningEn: 'Power / Strength',
    chapter: 3,
    category: '3章 人',
    grade: 'N5',
    compounds: [
      { word: '力', reading: 'ちから', meaning: 'Kekuatan / Tenaga' },
      { word: '火力', reading: 'かりょく', meaning: 'Kekuatan api / Daya panas' },
      { word: '協力', reading: 'きょうりょく', meaning: 'Kerja sama' },
      { word: '視力', reading: 'しりょく', meaning: 'Kemampuan penglihatan mata' },
      { word: '学力', reading: 'がくりょく', meaning: 'Kemampuan akademik' }
    ],
    sampleSentence: { jp: '彼は強くて力があります。', reading: 'かれはつよくてちからがあります。', id: 'Dia kuat dan memiliki banyak tenaga.' }
  },

  // 4章：しぜん-1 (Nature 1) - 7 Kanji (p. 39-42)
  {
    id: 'k-30',
    kanji: '山',
    strokes: 3,
    onyomi: ['サン', '-ザン'],
    kunyomi: ['やま'],
    meaningId: 'Gunung',
    meaningEn: 'Mountain',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '山', reading: 'やま', meaning: 'Gunung' },
      { word: '富士山', reading: 'ふじさん', meaning: 'Gunung Fuji' },
      { word: '山の手線', reading: 'やまのてせん', meaning: 'Jalur kereta Yamanote' },
      { word: '火山', reading: 'かざん', meaning: 'Gunung berapi' }
    ],
    sampleSentence: { jp: '日本は山がたくさんあります。', reading: 'にほんはやまがたくさんあります。', id: 'Di Jepang ada banyak gunung.' }
  },
  {
    id: 'k-31',
    kanji: '川',
    strokes: 3,
    onyomi: [],
    kunyomi: ['かわ', '-がわ'],
    meaningId: 'Sungai',
    meaningEn: 'River',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '川', reading: 'かわ', meaning: 'Sungai' },
      { word: 'ナイル川', reading: 'ナイルがわ', meaning: 'Sungai Nil' },
      { word: 'アマゾン川', reading: 'アマゾンがわ', meaning: 'Sungai Amazon' }
    ],
    sampleSentence: { jp: 'ナイル川は世界で一番長いです。', reading: 'ナイルがわはせかいでいちばんながいです。', id: 'Sungai Nil adalah yang paling panjang di dunia.' }
  },
  {
    id: 'k-32',
    kanji: '田',
    strokes: 5,
    onyomi: ['デン'],
    kunyomi: ['た', '-だ'],
    meaningId: 'Sawah padi',
    meaningEn: 'Rice Field',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '田んぼ', reading: 'たんぼ', meaning: 'Sawah' },
      { word: '水田', reading: 'すいでん', meaning: 'Sawah berair' },
      { word: '山田さん', reading: 'やまださん', meaning: 'Tuan Yamada' }
    ],
    sampleSentence: { jp: '水田で米をつくります。', reading: 'すいでんでこめをつくります。', id: 'Membuat/menanam padi di sawah.' }
  },
  {
    id: 'k-33',
    kanji: '石',
    strokes: 5,
    onyomi: ['セキ'],
    kunyomi: ['いし'],
    meaningId: 'Batu',
    meaningEn: 'Stone',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '石', reading: 'いし', meaning: 'Batu' },
      { word: '小石', reading: 'こいし', meaning: 'Batu kerikil kecil' },
      { word: '宝石', reading: 'ほうせき', meaning: 'Batu permata' },
      { word: '石田さん', reading: 'いしださん', meaning: 'Tuan Ishida' }
    ],
    sampleSentence: { jp: '危ないですから石を投げてはいけません。', reading: 'あぶないですからいしをなげてはいけません。', id: 'Karena berbahaya, tidak boleh melempar batu.' }
  },
  {
    id: 'k-34',
    kanji: '花',
    strokes: 7,
    onyomi: ['カ'],
    kunyomi: ['はな'],
    meaningId: 'Bunga',
    meaningEn: 'Flower',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '花', reading: 'はな', meaning: 'Bunga' },
      { word: '花びん', reading: 'かびん', meaning: 'Vas bunga' },
      { word: '花たば', reading: 'はなたば', meaning: 'Buket karangan bunga' },
      { word: '花火', reading: 'はなび', meaning: 'Kembang api' },
      { word: '花見', reading: 'はなみ', meaning: 'Melihat bunga sakura' }
    ],
    sampleSentence: { jp: 'テーブルの上の花瓶に花を入れてください。', reading: 'テーブルのうえのかびんにはなをいれてください。', id: 'Tolong masukkan bunga ke dalam vas bunga di atas meja.' }
  },
  {
    id: 'k-35',
    kanji: '竹',
    strokes: 6,
    onyomi: ['チク'],
    kunyomi: ['たけ'],
    meaningId: 'Bambu',
    meaningEn: 'Bamboo',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '竹', reading: 'たけ', meaning: 'Bambu' },
      { word: '竹林', reading: 'ちくりん', meaning: 'Hutan bambu' },
      { word: '竹の子', reading: 'たけのこ', meaning: 'Rebung bambu' }
    ],
    sampleSentence: { jp: 'パンダは竹が好きです。', reading: 'パンダはたけがすきです。', id: 'Panda suka bambu.' }
  },
  {
    id: 'k-36',
    kanji: '雨',
    strokes: 8,
    onyomi: ['ウ'],
    kunyomi: ['あめ'],
    meaningId: 'Hujan',
    meaningEn: 'Rain',
    chapter: 4,
    category: '4章 しぜん-1',
    grade: 'N5',
    compounds: [
      { word: '雨', reading: 'あめ', meaning: 'Hujan' },
      { word: '大雨', reading: 'おおあめ', meaning: 'Hujan lebat' },
      { word: '雨天', reading: 'うてん', meaning: 'Cuaca hujan' }
    ],
    sampleSentence: { jp: '日本は六月に雨がたくさん降ります。', reading: 'にほんはろくがつにあめがたくさんふります。', id: 'Di Jepang banyak turun hujan pada bulan Juni.' }
  },

  // 5章：ばしょ (Place & Position) - 7 Kanji (p. 47-50)
  {
    id: 'k-37',
    kanji: '上',
    strokes: 3,
    onyomi: ['ジョウ'],
    kunyomi: ['うえ', 'あ・がる', 'のぼ・る'],
    meaningId: 'Atas / Naik',
    meaningEn: 'Above / Up',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '上', reading: 'うえ', meaning: 'Atas' },
      { word: '上がりました', reading: 'あがりました', meaning: 'Naik' },
      { word: '水上スキー', reading: 'すいじょうスキー', meaning: 'Ski air' },
      { word: '年上', reading: 'としうえ', meaning: 'Lebih tua' },
      { word: '上着', reading: 'うわぎ', meaning: 'Jas / Jaket atasan' }
    ],
    sampleSentence: { jp: 'エレベーターが四階に上がりました。', reading: 'エレベーターがよんかいにあがりました。', id: 'Lift naik ke lantai 4.' }
  },
  {
    id: 'k-38',
    kanji: '下',
    strokes: 3,
    onyomi: ['ゲ'],
    kunyomi: ['した', 'さ・がる', 'くだ・る'],
    meaningId: 'Bawah / Turun',
    meaningEn: 'Below / Down',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '下', reading: 'した', meaning: 'Bawah' },
      { word: '下がります', reading: 'さがります', meaning: 'Turun' },
      { word: '坂を下る', reading: 'さかをくだる', meaning: 'Turun tanjakan' },
      { word: '下り電車', reading: 'くだりでんしゃ', meaning: 'Kereta arah luar kota' },
      { word: '下着', reading: 'したぎ', meaning: 'Pakaian dalam' }
    ],
    sampleSentence: { jp: '冬は気温が下がります。', reading: 'ふゆはきおんがさがります。', id: 'Di musim dingin suhu udara turun.' }
  },
  {
    id: 'k-39',
    kanji: '左',
    strokes: 5,
    onyomi: ['サ'],
    kunyomi: ['ひだり'],
    meaningId: 'Kiri',
    meaningEn: 'Left',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '左', reading: 'ひだり', meaning: 'Kiri' },
      { word: '左側', reading: 'ひだりがわ', meaning: 'Sisi kiri' },
      { word: '左きき', reading: 'ひだりきき', meaning: 'Kidal (tangan kiri)' },
      { word: '左折', reading: 'させつ', meaning: 'Belok kiri' }
    ],
    sampleSentence: { jp: '交差点は右と左をよく見てから渡ってください。', reading: 'こうさてんはみぎとひだりをよくみてからわたってください。', id: 'Di perempatan tolong perhatikan kanan dan kiri baik-baik sebelum menyeberang.' }
  },
  {
    id: 'k-40',
    kanji: '右',
    strokes: 5,
    onyomi: ['ウ'],
    kunyomi: ['みぎ'],
    meaningId: 'Kanan',
    meaningEn: 'Right',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '右', reading: 'みぎ', meaning: 'Kanan' },
      { word: '右側', reading: 'みぎがわ', meaning: 'Sisi kanan' },
      { word: '右きき', reading: 'みぎきき', meaning: 'Pengguna tangan kanan' },
      { word: '右折', reading: 'うせつ', meaning: 'Belok kanan' },
      { word: '左右', reading: 'さゆう', meaning: 'Kiri dan kanan' }
    ],
    sampleSentence: { jp: 'まっすぐ行ってあの角を右に曲がってください。', reading: 'まっすぐいってあのかどをみぎにまがってください。', id: 'Jalan lurus lalu belok ke kanan di sudut jalan itu.' }
  },
  {
    id: 'k-41',
    kanji: '外',
    strokes: 5,
    onyomi: ['ガイ'],
    kunyomi: ['そと'],
    meaningId: 'Luar',
    meaningEn: 'Outside',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '外', reading: 'そと', meaning: 'Luar' },
      { word: '外国', reading: 'がいこく', meaning: 'Luar negeri' },
      { word: '外出', reading: 'がいしゅつ', meaning: 'Keluar rumah / bepergian' },
      { word: '外側', reading: 'そとがわ', meaning: 'Sisi luar' }
    ],
    sampleSentence: { jp: 'みなさん教室の外に出てください。', reading: 'みなさんきょうしつのそとにでてください。', id: 'Semuanya tolong keluar ke luar ruang kelas.' }
  },
  {
    id: 'k-42',
    kanji: '内',
    strokes: 4,
    onyomi: ['ナイ'],
    kunyomi: ['うち'],
    meaningId: 'Dalam / Internal',
    meaningEn: 'Inside / Inner',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '内側', reading: 'うちがわ', meaning: 'Sisi bagian dalam' },
      { word: '国内', reading: 'こくない', meaning: 'Dalam negeri' },
      { word: '校内', reading: 'こうない', meaning: 'Area dalam sekolah' },
      { word: '内科', reading: 'ないか', meaning: 'Poli penyakit dalam' }
    ],
    sampleSentence: { jp: '風邪を引きましたから内科へ行きました。', reading: 'かぜをひきましたからないかへいきました。', id: 'Karena masuk angin saya pergi ke poli penyakit dalam.' }
  },
  {
    id: 'k-43',
    kanji: '中',
    strokes: 4,
    onyomi: ['チュウ', 'ジュウ'],
    kunyomi: ['なか'],
    meaningId: 'Tengah / Dalam / Sedang',
    meaningEn: 'Middle / Inside',
    chapter: 5,
    category: '5章 ばしょ',
    grade: 'N5',
    compounds: [
      { word: '中', reading: 'なか', meaning: 'Dalam' },
      { word: '水中', reading: 'すいちゅう', meaning: 'Di dalam air' },
      { word: '一日中', reading: 'いちにちじゅう', meaning: 'Sepanjang hari' },
      { word: '会議中', reading: 'かいぎちゅう', meaning: 'Sedang rapat' },
      { word: '授業中', reading: 'じゅぎょうちゅう', meaning: 'Sedang pelajaran' }
    ],
    sampleSentence: { jp: '車の中に鞄があります。誰の鞄ですか。', reading: 'くるまのなかにかばんがあります。だれのかばんですか。', id: 'Di dalam mobil ada tas. Tas milik siapa?' }
  },

  // 6章：学校-1 (School 1) - 8 Kanji (p. 57-60)
  {
    id: 'k-44',
    kanji: '学',
    strokes: 8,
    onyomi: ['ガク'],
    kunyomi: ['まな・ぶ'],
    meaningId: 'Belajar',
    meaningEn: 'Study / Learn',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '学校', reading: 'がっこう', meaning: 'Sekolah' },
      { word: '大学', reading: 'だいがく', meaning: 'Universitas' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'Belajar' },
      { word: '進学', reading: 'しんがく', meaning: 'Melanjutkan sekolah' },
      { word: '見学', reading: 'けんがく', meaning: 'Studi tur / Kunjungan studi' }
    ],
    sampleSentence: { jp: 'アークアカデミーで日本語を学んでいます。', reading: 'アークアカデミーでにほんごをまなんでいます。', id: 'Saya belajar bahasa Jepang di Arc Academy.' }
  },
  {
    id: 'k-45',
    kanji: '校',
    strokes: 10,
    onyomi: ['コウ'],
    kunyomi: [],
    meaningId: 'Gedung Sekolah',
    meaningEn: 'School',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '学校', reading: 'がっこう', meaning: 'Sekolah' },
      { word: '高校', reading: 'こうこう', meaning: 'SMA' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'SMP' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'SD' },
      { word: '校長先生', reading: 'こうちょうせんせい', meaning: 'Kepala sekolah' }
    ],
    sampleSentence: { jp: '校長先生のお話を聞きました。', reading: 'こうちょうせんせいのおはなしをききました。', id: 'Mendengarkan pidato bapak kepala sekolah.' }
  },
  {
    id: 'k-46',
    kanji: '先',
    strokes: 6,
    onyomi: ['セン'],
    kunyomi: ['さき'],
    meaningId: 'Terdahulu / Ujung',
    meaningEn: 'Previous / Ahead',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '先', reading: 'さき', meaning: 'Duluan / Lebih dulu' },
      { word: '先生', reading: 'せんせい', meaning: 'Guru' },
      { word: '先週', reading: 'せんしゅう', meaning: 'Minggu lalu' },
      { word: '先月', reading: 'せんげつ', meaning: 'Bulan lalu' },
      { word: '先日', reading: 'せんじつ', meaning: 'Beberapa hari yang lalu' }
    ],
    sampleSentence: { jp: '先に行ってください。', reading: 'さきにいってください。', id: 'Silakan pergi lebih dulu.' }
  },
  {
    id: 'k-47',
    kanji: '生',
    strokes: 5,
    onyomi: ['セイ', 'ショウ'],
    kunyomi: ['い・きる', 'う・まれる', 'なま'],
    meaningId: 'Hidup / Lahir / Murid',
    meaningEn: 'Life / Birth / Student',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '学生', reading: 'がくせい', meaning: 'Siswa / Mahasiswa' },
      { word: '先生', reading: 'せんせい', meaning: 'Guru' },
      { word: '生まれる', reading: 'うまれる', meaning: 'Lahir' },
      { word: '生活', reading: 'せいかつ', meaning: 'Kehidupan sehari-hari' },
      { word: '生きる', reading: 'いきる', meaning: 'Hidup' },
      { word: '人生', reading: 'じんせい', meaning: 'Kehidupan manusia' }
    ],
    sampleSentence: { jp: '私は十二月に生まれました。', reading: 'わたしはじゅうにがつにうまれました。', id: 'Saya lahir pada bulan Desember.' }
  },
  {
    id: 'k-48',
    kanji: '名',
    strokes: 6,
    onyomi: ['メイ', 'ミョウ'],
    kunyomi: ['な'],
    meaningId: 'Nama / Terkenal',
    meaningEn: 'Name / Famous',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '名前', reading: 'なまえ', meaning: 'Nama' },
      { word: '名字', reading: 'みょうじ', meaning: 'Nama keluarga' },
      { word: '有名', reading: 'ゆうめい', meaning: 'Terkenal' },
      { word: '名所', reading: 'めいしょ', meaning: 'Tempat terkenal' }
    ],
    sampleSentence: { jp: 'ここに名前を書いてください。', reading: 'ここになまえをかいてください。', id: 'Tolong tulis nama di sini.' }
  },
  {
    id: 'k-49',
    kanji: '字',
    strokes: 6,
    onyomi: ['ジ'],
    kunyomi: [],
    meaningId: 'Huruf / Aksara',
    meaningEn: 'Character / Letter',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '字', reading: 'じ', meaning: 'Huruf' },
      { word: '漢字', reading: 'かんじ', meaning: 'Kanji' },
      { word: '文字', reading: 'もじ', meaning: 'Aksara / Huruf' },
      { word: '習字', reading: 'しゅうじ', meaning: 'Kaligrafi Jepang' }
    ],
    sampleSentence: { jp: '明日漢字のテストがあります。', reading: 'あしたかんじのテストがあります。', id: 'Besok ada ujian kanji.' }
  },
  {
    id: 'k-50',
    kanji: '本',
    strokes: 5,
    onyomi: ['ホン'],
    kunyomi: ['もと'],
    meaningId: 'Buku / Asal / Batang',
    meaningEn: 'Book / Origin',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '本', reading: 'ほん', meaning: 'Buku' },
      { word: '日本', reading: 'にほん', meaning: 'Jepang' },
      { word: '日本人', reading: 'にほんじん', meaning: 'Orang Jepang' },
      { word: '一本', reading: 'いっぽん', meaning: 'Satu batang' },
      { word: '山本さん', reading: 'やまもとさん', meaning: 'Tuan Yamamoto' }
    ],
    sampleSentence: { jp: '一か月にどのくらい本を読みますか。', reading: 'いっかげつにどのくらいほんをよみますか。', id: 'Dalam sebulan berapa banyak buku yang kamu baca?' }
  },
  {
    id: 'k-51',
    kanji: '体',
    strokes: 7,
    onyomi: ['タイ'],
    kunyomi: ['からだ'],
    meaningId: 'Tubuh / Badan',
    meaningEn: 'Body',
    chapter: 6,
    category: '6章 学校-1',
    grade: 'N5',
    compounds: [
      { word: '体', reading: 'からだ', meaning: 'Tubuh / Badan' },
      { word: '体育', reading: 'たいいく', meaning: 'Pendidikan jasmani / Olahraga' },
      { word: '体育館', reading: 'たいいくかん', meaning: 'Gedung olahraga gymnasium' },
      { word: '体力', reading: 'たいりょく', meaning: 'Stamina tenaga fisik' },
      { word: '体重', reading: 'たいじゅう', meaning: 'Berat badan' }
    ],
    sampleSentence: { jp: '今日の体育は体育館でします。', reading: 'きょうのたいいくはたいいくかんでします。', id: 'Pelajaran olahraga hari ini diadakan di gedung olahraga.' }
  },

  // 7章：学校-2 (School 2) - 7 Kanji (p. 65-68)
  {
    id: 'k-52',
    kanji: '大',
    strokes: 3,
    onyomi: ['ダイ', 'タイ'],
    kunyomi: ['おお・きい'],
    meaningId: 'Besar',
    meaningEn: 'Big / Large',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '大きい', reading: 'おおきい', meaning: 'Besar' },
      { word: '大学', reading: 'だいがく', meaning: 'Universitas' },
      { word: '大好き', reading: 'だいすき', meaning: 'Sangat suka' },
      { word: '大切', reading: 'たいせつ', meaning: 'Penting / Berharga' },
      { word: '大人', reading: 'おとな', meaning: 'Orang dewasa' }
    ],
    sampleSentence: { jp: '山川さんは目が大きいです。', reading: 'やまかわさんはめがおおきいです。', id: 'Yamakawa memiliki mata yang besar.' }
  },
  {
    id: 'k-53',
    kanji: '小',
    strokes: 3,
    onyomi: ['ショウ'],
    kunyomi: ['ちい・さい', 'こ'],
    meaningId: 'Kecil',
    meaningEn: 'Small / Little',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '小さい', reading: 'ちいさい', meaning: 'Kecil' },
      { word: '小学生', reading: 'しょうがくせい', meaning: 'Murid SD' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'Sekolah dasar (SD)' },
      { word: '小銭', reading: 'こぜに', meaning: 'Uang koin receh' }
    ],
    sampleSentence: { jp: '私の弟は小学生です。', reading: 'わたしのおとうとはしょうがくせいです。', id: 'Adik laki-laki saya adalah murid SD.' }
  },
  {
    id: 'k-54',
    kanji: '高',
    strokes: 10,
    onyomi: ['コウ'],
    kunyomi: ['たか・い'],
    meaningId: 'Tinggi / Mahal',
    meaningEn: 'High / Expensive',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '高い', reading: 'たかい', meaning: 'Tinggi / Mahal' },
      { word: '高校', reading: 'こうこう', meaning: 'SMA' },
      { word: '高校生', reading: 'こうこうせい', meaning: 'Siswa SMA' },
      { word: '背が高い', reading: 'せがたかい', meaning: 'Badannya tinggi' }
    ],
    sampleSentence: { jp: '石川さんは背が高いです。', reading: 'いしかわさんはせがたかいです。', id: 'Ishikawa berbadan tinggi.' }
  },
  {
    id: 'k-55',
    kanji: '友',
    strokes: 4,
    onyomi: ['ユウ'],
    kunyomi: ['とも'],
    meaningId: 'Teman',
    meaningEn: 'Friend',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '友だち', reading: 'ともだち', meaning: 'Teman' },
      { word: '親友', reading: 'しんゆう', meaning: 'Sahabat akrab' }
    ],
    sampleSentence: { jp: '山田さんと私は親友です。', reading: 'やまださんとわたしはしんゆうです。', id: 'Yamada dan saya adalah sahabat dekat.' }
  },
  {
    id: 'k-56',
    kanji: '入',
    strokes: 2,
    onyomi: ['ニュウ'],
    kunyomi: ['はい・る', 'い・れる'],
    meaningId: 'Masuk / Memasukkan',
    meaningEn: 'Enter / Put in',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '入る', reading: 'はいる', meaning: 'Masuk' },
      { word: '入れる', reading: 'いれる', meaning: 'Memasukkan' },
      { word: '入り口', reading: 'いりぐち', meaning: 'Pintu masuk' },
      { word: '入学式', reading: 'にゅうがくしき', meaning: 'Upacara penerimaan siswa baru' }
    ],
    sampleSentence: { jp: 'ノックをしてから入ってください。', reading: 'ノックをしてからはいてください。', id: 'Silakan masuk setelah mengetuk pintu.' }
  },
  {
    id: 'k-57',
    kanji: '出',
    strokes: 5,
    onyomi: ['シュツ'],
    kunyomi: ['で・る', 'だ・す'],
    meaningId: 'Keluar / Mengeluarkan',
    meaningEn: 'Exit / Go out',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '出る', reading: 'でる', meaning: 'Keluar' },
      { word: '出す', reading: 'だす', meaning: 'Mengeluarkan / Menyerahkan' },
      { word: '出口', reading: 'でぐち', meaning: 'Pintu keluar' },
      { word: '出かけました', reading: 'でかけました', meaning: 'Pergi keluar' },
      { word: '出席', reading: 'しゅっせき', meaning: 'Hadir / Kehadiran' }
    ],
    sampleSentence: { jp: '出口はあちらです。', reading: 'でぐちはあちらです。', id: 'Pintu keluar ada di sebelah sana.' }
  },
  {
    id: 'k-58',
    kanji: '門',
    strokes: 8,
    onyomi: ['モン'],
    kunyomi: [],
    meaningId: 'Gerbang',
    meaningEn: 'Gate',
    chapter: 7,
    category: '7章 学校-2',
    grade: 'N5',
    compounds: [
      { word: '門', reading: 'もん', meaning: 'Gerbang' },
      { word: '校門', reading: 'こうもん', meaning: 'Gerbang sekolah' },
      { word: '正門', reading: 'せいもん', meaning: 'Gerbang utama' },
      { word: '専門', reading: 'せんもん', meaning: 'Keahlian khusus / Jurusan' },
      { word: '入門書', reading: 'にゅうもんしょ', meaning: 'Buku pengantar pemula' }
    ],
    sampleSentence: { jp: '門のそばに車を止めました。', reading: 'もんのそばにくるまをとめました。', id: 'Memarkir mobil di dekat gerbang.' }
  },

  // 8章：かぞく (Family) - 7 Kanji (p. 73-76)
  {
    id: 'k-59',
    kanji: '父',
    strokes: 4,
    onyomi: ['フ'],
    kunyomi: ['ちち'],
    meaningId: 'Ayah',
    meaningEn: 'Father',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '父', reading: 'ちち', meaning: 'Ayah kandung saya' },
      { word: 'お父さん', reading: 'おとうさん', meaning: 'Ayah orang lain / Panggilan' },
      { word: '父の日', reading: 'ちちのひ', meaning: 'Hari Ayah' },
      { word: '祖父', reading: 'そふ', meaning: 'Kakek saya' },
      { word: '父母', reading: 'ふぼ', meaning: 'Orang tua (Ayah dan Ibu)' }
    ],
    sampleSentence: { jp: '私の父は会社員です。', reading: 'わたしのちちはかいしゃいんです。', id: 'Ayah saya pegawai perusahaan.' }
  },
  {
    id: 'k-60',
    kanji: '母',
    strokes: 5,
    onyomi: ['ボ'],
    kunyomi: ['はは'],
    meaningId: 'Ibu',
    meaningEn: 'Mother',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '母', reading: 'はは', meaning: 'Ibu kandung saya' },
      { word: 'お母さん', reading: 'おかあさん', meaning: 'Ibu orang lain / Panggilan' },
      { word: '母の日', reading: 'ははのひ', meaning: 'Hari Ibu' },
      { word: '祖母', reading: 'そぼ', meaning: 'Nenek saya' },
      { word: '母語', reading: 'ぼご', meaning: 'Bahasa ibu' },
      { word: '母校', reading: 'ぼこう', meaning: 'Almamater sekolah asal' }
    ],
    sampleSentence: { jp: '母の日に花とカードをあげました。', reading: 'ははのひにはなとカードをあげました。', id: 'Di Hari Ibu saya memberikan bunga dan kartu ucapan.' }
  },
  {
    id: 'k-61',
    kanji: '子',
    strokes: 3,
    onyomi: ['シ'],
    kunyomi: ['こ'],
    meaningId: 'Anak',
    meaningEn: 'Child',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '子ども', reading: 'こども', meaning: 'Anak-anak' },
      { word: '女の子', reading: 'おんなのこ', meaning: 'Anak perempuan' },
      { word: '男の子', reading: 'おとこのこ', meaning: 'Anak laki-laki' },
      { word: 'お子さん', reading: 'おこさん', meaning: 'Anak Anda (sopan)' }
    ],
    sampleSentence: { jp: '川で子どもが遊んでいます。', reading: 'かわでこどもがあそんでいます。', id: 'Anak-anak sedang bermain di sungai.' }
  },
  {
    id: 'k-62',
    kanji: '男',
    strokes: 7,
    onyomi: ['ダン'],
    kunyomi: ['おとこ'],
    meaningId: 'Laki-laki / Pria',
    meaningEn: 'Man / Male',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '男', reading: 'おとこ', meaning: 'Pria' },
      { word: '男の人', reading: 'おとこのひと', meaning: 'Laki-laki' },
      { word: '男子学生', reading: 'だんしがくせい', meaning: 'Siswa laki-laki' },
      { word: '男性', reading: 'だんせい', meaning: 'Pria' },
      { word: '長男', reading: 'ちょうなん', meaning: 'Anak laki-laki sulung' }
    ],
    sampleSentence: { jp: '学校に男の先生が四人います。', reading: 'がっこうにおとこのせんせいがよにんいます。', id: 'Di sekolah ada empat orang guru laki-laki.' }
  },
  {
    id: 'k-63',
    kanji: '女',
    strokes: 3,
    onyomi: ['ジョ'],
    kunyomi: ['おんな'],
    meaningId: 'Perempuan / Wanita',
    meaningEn: 'Woman / Female',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '女', reading: 'おんな', meaning: 'Wanita' },
      { word: '女の人', reading: 'おんなのひと', meaning: 'Perempuan' },
      { word: '彼女', reading: 'かのじょ', meaning: 'Dia perempuan / Pacar' },
      { word: '女性', reading: 'じょせい', meaning: 'Wanita' },
      { word: '女子トイレ', reading: 'じょしトイレ', meaning: 'Toilet wanita' }
    ],
    sampleSentence: { jp: '私はきれいな女の人が好きです。', reading: 'わたしはきれいなおんなのひとがすきです。', id: 'Saya suka wanita yang cantik.' }
  },
  {
    id: 'k-64',
    kanji: '犬',
    strokes: 4,
    onyomi: ['ケン'],
    kunyomi: ['いぬ'],
    meaningId: 'Anjing',
    meaningEn: 'Dog',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '犬', reading: 'いぬ', meaning: 'Anjing' },
      { word: '子犬', reading: 'こいぬ', meaning: 'Anak anjing' },
      { word: '盲導犬', reading: 'もうどうけん', meaning: 'Anjing pemandu tunanetra' }
    ],
    sampleSentence: { jp: '毎朝犬の散歩をします。', reading: 'まいあさいぬのさんぽをします。', id: 'Setiap pagi mengajak anjing jalan-jalan santai.' }
  },
  {
    id: 'k-65',
    kanji: '鳥',
    strokes: 11,
    onyomi: ['チョウ'],
    kunyomi: ['とり'],
    meaningId: 'Burung',
    meaningEn: 'Bird',
    chapter: 8,
    category: '8章 かぞく',
    grade: 'N5',
    compounds: [
      { word: '鳥', reading: 'とり', meaning: 'Burung' },
      { word: '小鳥', reading: 'ことり', meaning: 'Burung kecil' },
      { word: '白鳥', reading: 'はくちょう', meaning: 'Angsa putih' }
    ],
    sampleSentence: { jp: 'きれいな鳥がベランダにとまっています。', reading: 'きれいなとりがベランダにとまっています。', id: 'Burung cantik hinggap di beranda.' }
  },

  // 9章：どうし-1 (Verbs 1) - 7 Kanji (p. 81-84)
  {
    id: 'k-66',
    kanji: '立',
    strokes: 5,
    onyomi: ['リツ'],
    kunyomi: ['た・つ'],
    meaningId: 'Berdiri',
    meaningEn: 'Stand',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '立つ', reading: 'たつ', meaning: 'Berdiri' },
      { word: '立っています', reading: 'たっています', meaning: 'Sedang berdiri' },
      { word: '国立大学', reading: 'こくりつだいがく', meaning: 'Universitas negeri' }
    ],
    sampleSentence: { jp: '窓のそばに女の人が立っています。', reading: 'まどのそばにおんなのひとがたっています。', id: 'Di dekat jendela ada seorang wanita sedang berdiri.' }
  },
  {
    id: 'k-67',
    kanji: '休',
    strokes: 6,
    onyomi: ['キュウ'],
    kunyomi: ['やす・む'],
    meaningId: 'Istirahat / Libur',
    meaningEn: 'Rest / Holiday',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '休む', reading: 'やすむ', meaning: 'Beristirahat' },
      { word: '休み', reading: 'やすみ', meaning: 'Libur / Istirahat' },
      { word: '夏休み', reading: 'なつやすみ', meaning: 'Liburan musim panas' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'Hari libur' }
    ],
    sampleSentence: { jp: '疲れましたね。少し休みませんか。', reading: 'つかれましたね。すこしやすみませんか。', id: 'Capek ya. Maukah kita istirahat sebentar?' }
  },
  {
    id: 'k-68',
    kanji: '見',
    strokes: 7,
    onyomi: ['ケン'],
    kunyomi: ['み・る', 'み・せる'],
    meaningId: 'Melihat / Memperlihatkan',
    meaningEn: 'See / Show',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '見る', reading: 'みる', meaning: 'Melihat / Menonton' },
      { word: '見せて', reading: 'みせて', meaning: 'Perlihatkan' },
      { word: '花見', reading: 'はなみ', meaning: 'Melihat sakura' },
      { word: '見学', reading: 'けんがく', meaning: 'Kunjungan studi lapangan' },
      { word: '意見', reading: 'いけん', meaning: 'Pendapat' }
    ],
    sampleSentence: { jp: 'パスポートを見せてください。', reading: 'パスポートをみせてください。', id: 'Tolong perlihatkan paspor Anda.' }
  },
  {
    id: 'k-69',
    kanji: '聞',
    strokes: 14,
    onyomi: ['ブン'],
    kunyomi: ['き・く'],
    meaningId: 'Mendengar / Bertanya',
    meaningEn: 'Hear / Listen / Ask',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '聞く', reading: 'きく', meaning: 'Mendengar / Bertanya' },
      { word: '新聞', reading: 'しんぶん', meaning: 'Koran / Surat kabar' }
    ],
    sampleSentence: { jp: 'CDを聞いて日本語を勉強します。', reading: 'CDをきいてにほんごをべんきょうします。', id: 'Mendengarkan CD dan belajar bahasa Jepang.' }
  },
  {
    id: 'k-70',
    kanji: '行',
    strokes: 6,
    onyomi: ['コウ', 'ギョウ'],
    kunyomi: ['い・く', 'おこな・う'],
    meaningId: 'Pergi / Mengadakan',
    meaningEn: 'Go / Hold event',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '行く', reading: 'いく', meaning: 'Pergi' },
      { word: '行います', reading: 'おこないます', meaning: 'Mengadakan' },
      { word: '銀行', reading: 'ぎんこう', meaning: 'Bank' },
      { word: '旅行', reading: 'りょこう', meaning: 'Perjalanan / Wisata' },
      { word: '行列', reading: 'ぎょうれつ', meaning: 'Antrean barisan' }
    ],
    sampleSentence: { jp: '今度の休みに大阪へ行きます。', reading: 'こんどのやすみにおおさかへいきます。', id: 'Pada liburan kali ini saya pergi ke Osaka.' }
  },
  {
    id: 'k-71',
    kanji: '来',
    strokes: 7,
    onyomi: ['ライ'],
    kunyomi: ['く・る', 'き・ます', 'こ・ない'],
    meaningId: 'Datang',
    meaningEn: 'Come',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '来る', reading: 'くる', meaning: 'Datang' },
      { word: '来ます', reading: 'きます', meaning: 'Datang (masu)' },
      { word: '来ない', reading: 'こない', meaning: 'Tidak datang (nai)' },
      { word: '来年', reading: 'らいねん', meaning: 'Tahun depan' },
      { word: '来日', reading: 'らいにち', meaning: 'Datang ke Jepang' }
    ],
    sampleSentence: { jp: '私は去年の三月に来日しました。', reading: 'わたしはきょねんのさんがつにらいにちしました。', id: 'Saya tiba di Jepang pada bulan Maret tahun lalu.' }
  },
  {
    id: 'k-72',
    kanji: '帰',
    strokes: 10,
    onyomi: ['キ'],
    kunyomi: ['かえ・る'],
    meaningId: 'Pulang',
    meaningEn: 'Return / Go Home',
    chapter: 9,
    category: '9章 どうし-1',
    grade: 'N5',
    compounds: [
      { word: '帰る', reading: 'かえる', meaning: 'Pulang' },
      { word: '帰り', reading: 'かえり', meaning: 'Jalan pulang' },
      { word: '帰国', reading: 'きこく', meaning: 'Kembali ke negara asal' }
    ],
    sampleSentence: { jp: '何時の電車で帰りますか。', reading: 'なんじのでんしゃでかえりますか。', id: 'Pulang naik kereta jam berapa?' }
  },

  // 10章：たべもの (Food) - 8 Kanji (p. 89-92)
  {
    id: 'k-73',
    kanji: '米',
    strokes: 6,
    onyomi: ['マイ'],
    kunyomi: ['こめ'],
    meaningId: 'Beras / Nasi',
    meaningEn: 'Rice',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '米', reading: 'こめ', meaning: 'Beras' },
      { word: '白米', reading: 'はくまい', meaning: 'Beras putih' },
      { word: '玄米', reading: 'げんまい', meaning: 'Beras cokelat' }
    ],
    sampleSentence: { jp: '日本のお米は美味しいです。', reading: 'にほんのおこめはおいしいです。', id: 'Beras Jepang sangat enak.' }
  },
  {
    id: 'k-74',
    kanji: '茶',
    strokes: 9,
    onyomi: ['チャ', 'サ'],
    kunyomi: [],
    meaningId: 'Teh',
    meaningEn: 'Tea',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: 'お茶', reading: 'おちゃ', meaning: 'Teh hijau' },
      { word: '日本茶', reading: 'にほんちゃ', meaning: 'Teh tradisional Jepang' },
      { word: '紅茶', reading: 'こうちゃ', meaning: 'Teh hitam' },
      { word: '茶色', reading: 'ちゃいろ', meaning: 'Warna cokelat' }
    ],
    sampleSentence: { jp: '寒い日に温かいお茶を飲みます。', reading: 'さむいひにあたたかいおちゃをのみます。', id: 'Pada hari yang dingin saya meminum teh hangat.' }
  },
  {
    id: 'k-75',
    kanji: '牛',
    strokes: 4,
    onyomi: ['ギュウ'],
    kunyomi: ['うし'],
    meaningId: 'Sapi',
    meaningEn: 'Cow / Beef',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '牛', reading: 'うし', meaning: 'Sapi' },
      { word: '牛乳', reading: 'ぎゅうにゅう', meaning: 'Susu sapi' },
      { word: '牛肉', reading: 'ぎゅうにく', meaning: 'Daging sapi' },
      { word: '和牛', reading: 'わぎゅう', meaning: 'Daging sapi Wagyu' }
    ],
    sampleSentence: { jp: '牧場に牛がたくさんいます。', reading: 'ぼくじょうにうしがたくさんいます。', id: 'Di peternakan ada banyak sapi.' }
  },
  {
    id: 'k-76',
    kanji: '肉',
    strokes: 6,
    onyomi: ['ニク'],
    kunyomi: [],
    meaningId: 'Daging',
    meaningEn: 'Meat',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '肉', reading: 'にく', meaning: 'Daging' },
      { word: '牛肉', reading: 'ぎゅうにく', meaning: 'Daging sapi' },
      { word: '豚肉', reading: 'ぶたにく', meaning: 'Daging babi' },
      { word: '鳥肉', reading: 'とりにく', meaning: 'Daging ayam' },
      { word: '焼肉', reading: 'やきにく', meaning: 'Daging panggang (Yakiniku)' }
    ],
    sampleSentence: { jp: '牛肉と豚肉とどちらが好きですか。', reading: 'ぎゅうにくとぶたにくとどちらがすきですか。', id: 'Antara daging sapi dan daging babi mana yang kamu sukai?' }
  },
  {
    id: 'k-77',
    kanji: '魚',
    strokes: 11,
    onyomi: ['ギョ'],
    kunyomi: ['さかな', 'うお'],
    meaningId: 'Ikan',
    meaningEn: 'Fish',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '魚', reading: 'さかな', meaning: 'Ikan' },
      { word: '魚市場', reading: 'うおいちば', meaning: 'Pasar ikan' },
      { word: '魚屋', reading: 'さかなや', meaning: 'Toko penjual ikan' },
      { word: '焼き魚', reading: 'やきざかな', meaning: 'Ikan bakar' },
      { word: '金魚', reading: 'きんぎょ', meaning: 'Ikan mas koki' }
    ],
    sampleSentence: { jp: '魚市場は朝早く始まります。', reading: 'うおいちばはあさはやくはじまります。', id: 'Pasar ikan mulai beroperasi pagi-pagi sekali.' }
  },
  {
    id: 'k-78',
    kanji: '貝',
    strokes: 7,
    onyomi: [],
    kunyomi: ['かい', '-がい'],
    meaningId: 'Kerang',
    meaningEn: 'Shellfish',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '貝', reading: 'かい', meaning: 'Kerang' },
      { word: '赤貝', reading: 'あかがい', meaning: 'Kerang darah (Akagai)' },
      { word: '貝がら', reading: 'かいがら', meaning: 'Cangkang kerang' }
    ],
    sampleSentence: { jp: '海で貝をとりました。', reading: 'うみでかいをとりました。', id: 'Mengambil kerang di laut.' }
  },
  {
    id: 'k-79',
    kanji: '好',
    strokes: 6,
    onyomi: ['コウ'],
    kunyomi: ['す・き'],
    meaningId: 'Suka',
    meaningEn: 'Like / Fond',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '好き', reading: 'すき', meaning: 'Suka' },
      { word: '大好物', reading: 'だいこうぶつ', meaning: 'Makanan paling favorit' }
    ],
    sampleSentence: { jp: '私の大好物は牛肉のステーキです。', reading: 'わたしのだいこうぶつはぎゅうにくのステーキです。', id: 'Makanan favorit utama saya adalah bistik daging sapi.' }
  },
  {
    id: 'k-80',
    kanji: '物',
    strokes: 8,
    onyomi: ['ブツ', 'モツ'],
    kunyomi: ['もの'],
    meaningId: 'Benda / Barang',
    meaningEn: 'Thing / Object',
    chapter: 10,
    category: '10章 たべもの',
    grade: 'N5',
    compounds: [
      { word: '買い物', reading: 'かいもの', meaning: 'Belanja' },
      { word: '食べ物', reading: 'たべもの', meaning: 'Makanan' },
      { word: '動物園', reading: 'どうぶつえん', meaning: 'Kebun binatang' },
      { word: '物価', reading: 'ぶっか', meaning: 'Harga barang' },
      { word: '荷物', reading: 'にもつ', meaning: 'Barang bawaan' }
    ],
    sampleSentence: { jp: '日本は物価が高いですね。', reading: 'にほんはぶっかがたかいですね。', id: 'Harga barang di Jepang mahal ya.' }
  },

  // 11章：しぜん-2 (Nature 2) - 7 Kanji (p. 99-102)
  {
    id: 'k-81',
    kanji: '林',
    strokes: 8,
    onyomi: ['リン'],
    kunyomi: ['はやし', '-ばやし'],
    meaningId: 'Hutan kecil / Rimbun',
    meaningEn: 'Woods / Grove',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '林', reading: 'はやし', meaning: 'Hutan kecil' },
      { word: '森林', reading: 'しんりん', meaning: 'Hutan belantara' },
      { word: '竹林', reading: 'ちくりん', meaning: 'Hutan bambu' }
    ],
    sampleSentence: { jp: 'うちの近くに林があります。', reading: 'うちのちかくにはやしがあります。', id: 'Di dekat rumah ada hutan kecil.' }
  },
  {
    id: 'k-82',
    kanji: '森',
    strokes: 12,
    onyomi: ['シン'],
    kunyomi: ['もり'],
    meaningId: 'Hutan lebat',
    meaningEn: 'Forest',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '森', reading: 'もり', meaning: 'Hutan lebat' },
      { word: '青森県', reading: 'あおもりけん', meaning: 'Prefektur Aomori' },
      { word: '森の中', reading: 'もりのなか', meaning: 'Di dalam hutan' }
    ],
    sampleSentence: { jp: 'きのう森の中を散歩しました。', reading: 'きのうもりのなかをさんぽしました。', id: 'Kemarin saya berjalan-jalan santai di dalam hutan.' }
  },
  {
    id: 'k-83',
    kanji: '畑',
    strokes: 9,
    onyomi: [],
    kunyomi: ['はたけ', '-ばたけ'],
    meaningId: 'Ladang kebun sayur',
    meaningEn: 'Cultivated Field',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '畑', reading: 'はたけ', meaning: 'Ladang kebun' },
      { word: '田畑', reading: 'たはた', meaning: 'Sawah dan ladang' },
      { word: 'トマト畑', reading: 'トマトばたけ', meaning: 'Kebun ladang tomat' }
    ],
    sampleSentence: { jp: '畑でトマトを作っています。', reading: 'はたけでトマトをつくっています。', id: 'Menanam tomat di ladang kebun.' }
  },
  {
    id: 'k-84',
    kanji: '岩',
    strokes: 8,
    onyomi: ['ガン'],
    kunyomi: ['いわ'],
    meaningId: 'Batu besar / Cadas',
    meaningEn: 'Rock / Boulder',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '岩', reading: 'いわ', meaning: 'Batu karang / cadas' },
      { word: '岩山', reading: 'いわやま', meaning: 'Gunung berbatu cadas' },
      { word: '溶岩', reading: 'ようがん', meaning: 'Lava batu lahar' }
    ],
    sampleSentence: { jp: 'あそこの岩の上に人が立っています。', reading: 'あそこのいわのうえにひとがたっています。', id: 'Di atas batu karang sebelah sana ada orang berdiri.' }
  },
  {
    id: 'k-85',
    kanji: '音',
    strokes: 9,
    onyomi: ['オン'],
    kunyomi: ['おと', 'ね'],
    meaningId: 'Suara / Bunyi',
    meaningEn: 'Sound',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '音', reading: 'おと', meaning: 'Suara / Bunyi' },
      { word: '音色', reading: 'ねいろ', meaning: 'Warna nada suara' },
      { word: '発音', reading: 'はつおん', meaning: 'Pelafalan ucapan (pronunciation)' },
      { word: '音楽', reading: 'おんがく', meaning: 'Musik' }
    ],
    sampleSentence: { jp: '学校で日本語の発音を練習します。', reading: 'がっこうでにほんごのはつおんをれんしゅうします。', id: 'Berlatih pelafalan bahasa Jepang di sekolah.' }
  },
  {
    id: 'k-86',
    kanji: '明',
    strokes: 8,
    onyomi: ['メイ'],
    kunyomi: ['あか・るい', 'あ・ける'],
    meaningId: 'Terang / Fajar',
    meaningEn: 'Bright / Clear',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '明るい', reading: 'あかるい', meaning: 'Terang / Ceria' },
      { word: '夜が明けて', reading: 'よがあけて', meaning: 'Malam berganti fajar' },
      { word: '説明', reading: 'せつめい', meaning: 'Penjelasan' },
      { word: '明日', reading: 'あした / あす', meaning: 'Besok' }
    ],
    sampleSentence: { jp: '私の部屋はとても明るいです。', reading: 'わたしのへやはとてもあかるいです。', id: 'Kamar saya sangat terang.' }
  },
  {
    id: 'k-87',
    kanji: '暗',
    strokes: 13,
    onyomi: ['アン'],
    kunyomi: ['くら・い'],
    meaningId: 'Gelap',
    meaningEn: 'Dark',
    chapter: 11,
    category: '11章 しぜん-2',
    grade: 'N5',
    compounds: [
      { word: '暗い', reading: 'くらい', meaning: 'Gelap' },
      { word: '暗記', reading: 'あんき', meaning: 'Hafalan ingatan' },
      { word: '暗算', reading: 'あんざん', meaning: 'Berhitung di luar kepala' }
    ],
    sampleSentence: { jp: '部屋が暗いですから、電気をつけてください。', reading: 'へやがくらいですから、でんきをつけてください。', id: 'Karena kamar gelap, tolong nyalakan lampunya.' }
  },

  // 12章：どうし-2 (Verbs 2) - 7 Kanji (p. 107-110)
  {
    id: 'k-88',
    kanji: '言',
    strokes: 7,
    onyomi: ['ゲン', 'ゴン'],
    kunyomi: ['い・う', 'こと'],
    meaningId: 'Berkata / Kata',
    meaningEn: 'Say / Word',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '言う', reading: 'いう', meaning: 'Berkata' },
      { word: '言葉', reading: 'ことば', meaning: 'Kosakata / Bahasa' },
      { word: '方言', reading: 'ほうげん', meaning: 'Dialek daerah' },
      { word: '伝言', reading: 'でんごん', meaning: 'Pesan titipan' }
    ],
    sampleSentence: { jp: '日本語で言ってください。', reading: 'にほんごでいってください。', id: 'Tolong katakan dalam bahasa Jepang.' }
  },
  {
    id: 'k-89',
    kanji: '書',
    strokes: 10,
    onyomi: ['ショ'],
    kunyomi: ['か・く'],
    meaningId: 'Menulis / Buku',
    meaningEn: 'Write / Book',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '書く', reading: 'かく', meaning: 'Menulis' },
      { word: '辞書', reading: 'じしょ', meaning: 'Kamus' },
      { word: '読書', reading: 'どくしょ', meaning: 'Membaca buku' },
      { word: '書道', reading: 'しょどう', meaning: 'Seni kaligrafi kuas Jepang' }
    ],
    sampleSentence: { jp: 'ここに名前を書いてください。', reading: 'ここになまえをかいてください。', id: 'Tolong tulis nama di sini.' }
  },
  {
    id: 'k-90',
    kanji: '読',
    strokes: 14,
    onyomi: ['ドク'],
    kunyomi: ['よ・む'],
    meaningId: 'Membaca',
    meaningEn: 'Read',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '読む', reading: 'よむ', meaning: 'Membaca' },
      { word: '読書', reading: 'どくしょ', meaning: 'Kegiatan membaca buku' },
      { word: '音読', reading: 'おんどく', meaning: 'Membaca bersuara keras' }
    ],
    sampleSentence: { jp: '毎晩本を読みます。', reading: 'まいばんほんをよみます。', id: 'Setiap malam saya membaca buku.' }
  },
  {
    id: 'k-91',
    kanji: '話',
    strokes: 13,
    onyomi: ['ワ'],
    kunyomi: ['はな・す', 'はなし'],
    meaningId: 'Berbicara / Percakapan',
    meaningEn: 'Speak / Talk',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '話す', reading: 'はなす', meaning: 'Berbicara' },
      { word: '話', reading: 'はなし', meaning: 'Cerita / Pembicaraan' },
      { word: '会話', reading: 'かいわ', meaning: 'Percakapan' },
      { word: '電話', reading: 'でんわ', meaning: 'Telepon' },
      { word: '手話', reading: 'しゅわ', meaning: 'Bahasa isyarat' }
    ],
    sampleSentence: { jp: '会話の練習をしましょう。', reading: 'かいわのれんしゅうをしましょう。', id: 'Ayo berlatih percakapan.' }
  },
  {
    id: 'k-92',
    kanji: '食',
    strokes: 9,
    onyomi: ['ショク'],
    kunyomi: ['た・べる'],
    meaningId: 'Makan / Makanan',
    meaningEn: 'Eat / Food',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '食べる', reading: 'たべる', meaning: 'Makan' },
      { word: '食べ物', reading: 'たべもの', meaning: 'Makanan' },
      { word: '食事', reading: 'しょくじ', meaning: 'Santap makan' },
      { word: '食堂', reading: 'しょくどう', meaning: 'Kantin / Ruang makan' }
    ],
    sampleSentence: { jp: '昼ご飯は何を食べましたか。', reading: 'ひるごはんはなにをたべましたか。', id: 'Tadi makan siang makan apa?' }
  },
  {
    id: 'k-93',
    kanji: '飲',
    strokes: 12,
    onyomi: ['イン'],
    kunyomi: ['の・む'],
    meaningId: 'Minum',
    meaningEn: 'Drink',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '飲む', reading: 'のむ', meaning: 'Minum' },
      { word: '飲み物', reading: 'のみもの', meaning: 'Minuman' },
      { word: '飲食店', reading: 'いんしょくてん', meaning: 'Tempat makan & minum' }
    ],
    sampleSentence: { jp: '温かいお茶を飲みます。', reading: 'あたたかいおちゃをのみます。', id: 'Minum teh hangat.' }
  },
  {
    id: 'k-94',
    kanji: '買',
    strokes: 12,
    onyomi: ['バイ'],
    kunyomi: ['か・う'],
    meaningId: 'Membeli',
    meaningEn: 'Buy',
    chapter: 12,
    category: '12章 どうし-2',
    grade: 'N5',
    compounds: [
      { word: '買う', reading: 'かう', meaning: 'Membeli' },
      { word: '買い物', reading: 'かいもの', meaning: 'Berbelanja' },
      { word: '売買', reading: 'ばいばい', meaning: 'Jual beli' }
    ],
    sampleSentence: { jp: 'きのうデパートで大きい鞄を買いました。', reading: 'きのうデパートでおおきいかばんをかいました。', id: 'Kemarin saya membeli tas besar di department store.' }
  },

  // 13章：町 (Town) - 8 Kanji (p. 115-118)
  {
    id: 'k-95',
    kanji: '町',
    strokes: 7,
    onyomi: ['チョウ'],
    kunyomi: ['まち'],
    meaningId: 'Kota / Lingkungan',
    meaningEn: 'Town',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '町', reading: 'まち', meaning: 'Kota' },
      { word: '下町', reading: 'したまち', meaning: 'Kawasan kota tua bernuansa tradisional' },
      { word: '町長', reading: 'ちょうちょう', meaning: 'Kepala kota / Camat' },
      { word: '町内', reading: 'ちょうない', meaning: 'Di dalam lingkungan kota' }
    ],
    sampleSentence: { jp: 'この町に大きなお寺があります。', reading: 'このまちにおおきなおてらがあります。', id: 'Di kota ini ada kuil Buddha yang besar.' }
  },
  {
    id: 'k-96',
    kanji: '寺',
    strokes: 6,
    onyomi: ['ジ'],
    kunyomi: ['てら'],
    meaningId: 'Kuil Buddha',
    meaningEn: 'Temple (Buddhist)',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: 'お寺', reading: 'おてら', meaning: 'Kuil Buddha' },
      { word: '法隆寺', reading: 'ほうりゅうじ', meaning: 'Kuil Horyuji (kuil kayu tertua)' }
    ],
    sampleSentence: { jp: '法隆寺は日本で一番古いお寺です。', reading: 'ほうりゅうじはにほんでいちばんふるいおてらです。', id: 'Kuil Horyuji adalah kuil tertua di Jepang.' }
  },
  {
    id: 'k-97',
    kanji: '電',
    strokes: 13,
    onyomi: ['デン'],
    kunyomi: [],
    meaningId: 'Listrik',
    meaningEn: 'Electricity',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '電車', reading: 'でんしゃ', meaning: 'Kereta listrik' },
      { word: '電話', reading: 'でんわ', meaning: 'Telepon' },
      { word: '電気', reading: 'でんき', meaning: 'Lampu listrik' },
      { word: '電力', reading: 'でんりょく', meaning: 'Daya tenaga listrik' }
    ],
    sampleSentence: { jp: 'この電車は新宿へ行きますか。', reading: 'このでんしゃはしんじゅくへいきますか。', id: 'Apakah kereta ini pergi menuju Shinjuku?' }
  },
  {
    id: 'k-98',
    kanji: '車',
    strokes: 7,
    onyomi: ['シャ'],
    kunyomi: ['くるま'],
    meaningId: 'Mobil / Kendaraan roda',
    meaningEn: 'Car / Vehicle',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '車', reading: 'くるま', meaning: 'Mobil' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'Sepeda' },
      { word: '車椅子', reading: 'くるまいす', meaning: 'Kursi roda' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'Mobil bermotor' },
      { word: '車内', reading: 'しゃない', meaning: 'Di dalam gerbong/kendaraan' }
    ],
    sampleSentence: { jp: 'うちから駅まで車で五分です。', reading: 'うちからえくまでくるまでごふんです。', id: 'Dari rumah ke stasiun memakan waktu 5 menit naik mobil.' }
  },
  {
    id: 'k-99',
    kanji: '東',
    strokes: 8,
    onyomi: ['トウ'],
    kunyomi: ['ひがし'],
    meaningId: 'Timur',
    meaningEn: 'East',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '東', reading: 'ひがし', meaning: 'Timur' },
      { word: '東口', reading: 'ひがしぐち', meaning: 'Pintu keluar timur' },
      { word: '東日本', reading: 'ひがしにほん', meaning: 'Jepang bagian timur' },
      { word: '東京', reading: 'とうきょう', meaning: 'Tokyo' },
      { word: '関東地方', reading: 'かんとうちほう', meaning: 'Wilayah Kanto' }
    ],
    sampleSentence: { jp: '学校は駅の東にありますか。西にありますか。', reading: 'がっこうはえきのひがしにありますか。にしにありますか。', id: 'Apakah sekolah berada di sebelah timur stasiun? Atau di barat?' }
  },
  {
    id: 'k-100',
    kanji: '西',
    strokes: 6,
    onyomi: ['セイ'],
    kunyomi: ['にし'],
    meaningId: 'Barat',
    meaningEn: 'West',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '西', reading: 'にし', meaning: 'Barat' },
      { word: '西口', reading: 'にしぐち', meaning: 'Pintu keluar barat' },
      { word: '西日本', reading: 'にしにほん', meaning: 'Jepang bagian barat' },
      { word: '北西', reading: 'ほくせい', meaning: 'Barat laut' },
      { word: '関西', reading: 'かんさい', meaning: 'Kansai' }
    ],
    sampleSentence: { jp: '西口に大きなデパートがあります。', reading: 'にしぐちにおおきなデパートがあります。', id: 'Di pintu keluar barat ada department store besar.' }
  },
  {
    id: 'k-101',
    kanji: '南',
    strokes: 9,
    onyomi: ['ナン'],
    kunyomi: ['みなみ'],
    meaningId: 'Selatan',
    meaningEn: 'South',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '南', reading: 'みなみ', meaning: 'Selatan' },
      { word: '南口', reading: 'みなみぐち', meaning: 'Pintu keluar selatan' },
      { word: '東南アジア', reading: 'とうなんアジア', meaning: 'Asia Tenggara' },
      { word: '南国', reading: 'なんごく', meaning: 'Negeri beriklim tropis/selatan' }
    ],
    sampleSentence: { jp: '南国のフルーツは甘くて美味しいです。', reading: 'なんごくのフルーツはあまくておいしいです。', id: 'Buah-buahan dari daerah tropis selatan manis dan enak.' }
  },
  {
    id: 'k-102',
    kanji: '北',
    strokes: 5,
    onyomi: ['ホク', 'ホッ-'],
    kunyomi: ['きた'],
    meaningId: 'Utara',
    meaningEn: 'North',
    chapter: 13,
    category: '13章 町',
    grade: 'N5',
    compounds: [
      { word: '北', reading: 'きた', meaning: 'Utara' },
      { word: '北口', reading: 'きたぐち', meaning: 'Pintu keluar utara' },
      { word: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' },
      { word: '東北地方', reading: 'とうほくちほう', meaning: 'Wilayah Tohoku' }
    ],
    sampleSentence: { jp: '北海道は日本の一番北にあります。', reading: 'ほっかいどうはにほんのいちばんきたにあります。', id: 'Hokkaido berada di ujung paling utara Jepang.' }
  },

  // 14章：時間 (Time) - 8 Kanji (p. 123-126)
  {
    id: 'k-103',
    kanji: '時',
    strokes: 10,
    onyomi: ['ジ'],
    kunyomi: ['とき'],
    meaningId: 'Waktu / Jam',
    meaningEn: 'Time / Hour',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '時', reading: 'とき', meaning: 'Waktu / Saat' },
      { word: '九時', reading: 'くじ', meaning: 'Pukul sembilan' },
      { word: '時間', reading: 'じかん', meaning: 'Waktu / Durasi' },
      { word: '時計', reading: 'とけい', meaning: 'Jam dinding / tangan' }
    ],
    sampleSentence: { jp: '毎朝九時から十二時まで勉強します。', reading: 'まいあさくじからじゅうにじまでべんきょうします。', id: 'Setiap pagi belajar dari jam 9 sampai jam 12.' }
  },
  {
    id: 'k-104',
    kanji: '間',
    strokes: 12,
    onyomi: ['カン'],
    kunyomi: ['あいだ', 'ま'],
    meaningId: 'Antara / Jeda waktu',
    meaningEn: 'Interval / Between',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '間', reading: 'あいだ', meaning: 'Di antara' },
      { word: '時間', reading: 'じかん', meaning: 'Waktu' },
      { word: '昼間', reading: 'ひるま', meaning: 'Waktu siang hari' },
      { word: '一週間', reading: 'いっしゅうかん', meaning: 'Satu minggu' },
      { word: '仲間', reading: 'なかま', meaning: 'Rekan kawan seperjuangan' },
      { word: '人間', reading: 'にんげん', meaning: 'Umat manusia' }
    ],
    sampleSentence: { jp: '銀行はスーパーとコンビニの間にあります。', reading: 'ぎんこうはスーパーとコンビニのあいだにあります。', id: 'Bank berada di antara supermarket dan toserba konbini.' }
  },
  {
    id: 'k-105',
    kanji: '半',
    strokes: 5,
    onyomi: ['ハン'],
    kunyomi: [],
    meaningId: 'Setengah / Separuh',
    meaningEn: 'Half',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '五時半', reading: 'ごじはん', meaning: 'Jam 5:30 (setengah enam)' },
      { word: '半年', reading: 'はんとし / はんねん', meaning: 'Setengah tahun' },
      { word: '半分', reading: 'はんぶん', meaning: 'Setengah porsi/bagian' }
    ],
    sampleSentence: { jp: '会社は五時半に終わります。', reading: 'かいしゃはごじはんにおわります。', id: 'Kerja kantor selesai pada jam 5:30.' }
  },
  {
    id: 'k-106',
    kanji: '分',
    strokes: 4,
    onyomi: ['フン', 'プン', 'ブン'],
    kunyomi: ['わ・ける'],
    meaningId: 'Menit / Bagian / Membagi',
    meaningEn: 'Minute / Part / Divide',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '五分', reading: 'ごふん', meaning: 'Lima menit' },
      { word: '四分の一', reading: 'よんぶんのいち', meaning: 'Seperempat (1/4)' },
      { word: '分けます', reading: 'わけます', meaning: 'Membagi' }
    ],
    sampleSentence: { jp: '燃えるゴミと燃えないゴミを分けます。', reading: 'もえるゴミともえないゴミをわけます。', id: 'Memisahkan sampah organik yang bisa dibakar dan tidak bisa dibakar.' }
  },
  {
    id: 'k-107',
    kanji: '今',
    strokes: 4,
    onyomi: ['コン'],
    kunyomi: ['いま'],
    meaningId: 'Sekarang',
    meaningEn: 'Now',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '今', reading: 'いま', meaning: 'Sekarang' },
      { word: '今月', reading: 'こんげつ', meaning: 'Bulan ini' },
      { word: '今晩', reading: 'こんばん', meaning: 'Malam ini' },
      { word: '今週', reading: 'こんしゅう', meaning: 'Minggu ini' },
      { word: '今日', reading: 'きょう', meaning: 'Hari ini' },
      { word: '今年', reading: 'ことし', meaning: 'Tahun ini' }
    ],
    sampleSentence: { jp: 'すみません。田中さんは今どこにいますか。', reading: 'すみません。たなかさんはいまどこにいますか。', id: 'Permisi. Di manakah Tanaka berada sekarang?' }
  },
  {
    id: 'k-108',
    kanji: '何',
    strokes: 7,
    onyomi: [],
    kunyomi: ['なに', 'なん'],
    meaningId: 'Apa',
    meaningEn: 'What',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '何', reading: 'なに', meaning: 'Apa' },
      { word: '何時', reading: 'なんじ', meaning: 'Jam berapa' },
      { word: '何か', reading: 'なにか', meaning: 'Sesuatu' },
      { word: '何曜日', reading: 'なんようび', meaning: 'Hari apa' },
      { word: '何月', reading: 'なんがつ', meaning: 'Bulan apa' }
    ],
    sampleSentence: { jp: '暑いですね。何か飲みませんか。', reading: 'あついですね。なにかのみませんか。', id: 'Panas ya. Maukah minum sesuatu?' }
  },
  {
    id: 'k-109',
    kanji: '夕',
    strokes: 3,
    onyomi: [],
    kunyomi: ['ゆう'],
    meaningId: 'Senja / Sore',
    meaningEn: 'Evening',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '夕日', reading: 'ゆうひ', meaning: 'Matahari terbenam senja' },
      { word: '夕方', reading: 'ゆうがた', meaning: 'Sore hari menjelang petang' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'Makan malam' },
      { word: '七夕', reading: 'たなばた', meaning: 'Festival Tanabata' }
    ],
    sampleSentence: { jp: '夕日がとてもきれいですね。', reading: 'ゆうひがとてもきれいですね。', id: 'Matahari senja sangat indah ya.' }
  },
  {
    id: 'k-110',
    kanji: '方',
    strokes: 4,
    onyomi: ['ホウ'],
    kunyomi: ['かた', '-がた'],
    meaningId: 'Arah / Cara / Orang (sopan)',
    meaningEn: 'Direction / Way / Person (polite)',
    chapter: 14,
    category: '14章 時間',
    grade: 'N5',
    compounds: [
      { word: '夕方', reading: 'ゆうがた', meaning: 'Sore hari' },
      { word: '読み方', reading: 'よみかた', meaning: 'Cara membaca' },
      { word: '書き方', reading: 'かきかた', meaning: 'Cara menulis' },
      { word: '方法', reading: 'ほうほう', meaning: 'Metode cara' },
      { word: '方向', reading: 'ほうこう', meaning: 'Arah tujuan' },
      { word: '東北地方', reading: 'とうほくちほう', meaning: 'Wilayah Tohoku' }
    ],
    sampleSentence: { jp: 'この漢字の読み方がわかりますか。', reading: 'このかんじのよみかたがわかりますか。', id: 'Apakah Anda tahu cara membaca kanji ini?' }
  },

  // 15章：けいようし (Adjectives) - 8 Kanji (p. 131-134)
  {
    id: 'k-111',
    kanji: '新',
    strokes: 13,
    onyomi: ['シン'],
    kunyomi: ['あたら・しい'],
    meaningId: 'Baru',
    meaningEn: 'New',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '新しい', reading: 'あたらしい', meaning: 'Baru' },
      { word: '新年', reading: 'しんねん', meaning: 'Tahun baru' },
      { word: '新聞', reading: 'しんぶん', meaning: 'Koran' },
      { word: '新車', reading: 'しんしゃ', meaning: 'Mobil baru' },
      { word: '新入社員', reading: 'しんにゅうしゃいん', meaning: 'Karyawan baru' }
    ],
    sampleSentence: { jp: '新年おめでとうございます。', reading: 'しんねんおめでとうございます。', id: 'Selamat Tahun Baru.' }
  },
  {
    id: 'k-112',
    kanji: '古',
    strokes: 5,
    onyomi: ['コ'],
    kunyomi: ['ふる・い'],
    meaningId: 'Lama / Kuno',
    meaningEn: 'Old (objects)',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '古い', reading: 'ふるい', meaning: 'Lama / Tua (benda)' },
      { word: '中古車', reading: 'ちゅうこしゃ', meaning: 'Mobil bekas' },
      { word: '古本', reading: 'ふるほん', meaning: 'Buku bekas' }
    ],
    sampleSentence: { jp: '京都は古い町です。', reading: 'きょうとはふるいまちです。', id: 'Kyoto adalah kota kuno bersejarah.' }
  },
  {
    id: 'k-113',
    kanji: '長',
    strokes: 8,
    onyomi: ['チョウ'],
    kunyomi: ['なが・い'],
    meaningId: 'Panjang / Ketua',
    meaningEn: 'Long / Leader',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '長い', reading: 'ながい', meaning: 'Panjang' },
      { word: '長男', reading: 'ちょうなん', meaning: 'Anak laki-laki sulung' },
      { word: '長女', reading: 'ちょうじょ', meaning: 'Anak perempuan sulung' },
      { word: '校長', reading: 'こうちょう', meaning: 'Kepala sekolah' },
      { word: '社長', reading: 'しゃちょう', meaning: 'Presiden direktur perusahaan' },
      { word: '長年', reading: 'ながねん', meaning: 'Bertahun-tahun' }
    ],
    sampleSentence: { jp: '山田さんは髪が長い人です。', reading: 'やまださんはかみがながいひとです。', id: 'Yamada adalah orang yang berambut panjang.' }
  },
  {
    id: 'k-114',
    kanji: '安',
    strokes: 6,
    onyomi: ['アン'],
    kunyomi: ['やす・い'],
    meaningId: 'Murah / Tenang',
    meaningEn: 'Cheap / Peaceful',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '安い', reading: 'やすい', meaning: 'Murah' },
      { word: '安心', reading: 'あんしん', meaning: 'Lega / Tenang hati' },
      { word: '安全', reading: 'あんぜん', meaning: 'Aman' }
    ],
    sampleSentence: { jp: 'ちょっと高いですね。もっと安いシャツはありませんか。', reading: 'ちょっとたかいですね。もっとやすいシャツはありませんか。', id: 'Agak sedikit mahal ya. Apakah tidak ada kemeja yang lebih murah?' }
  },
  {
    id: 'k-115',
    kanji: '多',
    strokes: 6,
    onyomi: ['タ'],
    kunyomi: ['おお・い'],
    meaningId: 'Banyak',
    meaningEn: 'Many / Much',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '多い', reading: 'おおい', meaning: 'Banyak' },
      { word: '多少', reading: 'たしょう', meaning: 'Sedikit banyak' },
      { word: '多数', reading: 'たすう', meaning: 'Jumlah banyak / Mayoritas' }
    ],
    sampleSentence: { jp: '今月は残業が多いです。', reading: 'こんげつはざんぎょうがおおいです。', id: 'Bulan ini ada banyak jam lembur kerja.' }
  },
  {
    id: 'k-116',
    kanji: '少',
    strokes: 4,
    onyomi: ['ショウ'],
    kunyomi: ['すく・ない', 'すこ・し'],
    meaningId: 'Sedikit / Jarang',
    meaningEn: 'Few / Little',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '少ない', reading: 'すくない', meaning: 'Sedikit / Jarang' },
      { word: '少し', reading: 'すこし', meaning: 'Sedikit' },
      { word: '少年', reading: 'しょうねん', meaning: 'Remaja putra' },
      { word: '少女', reading: 'しょうじょ', meaning: 'Remaja putri' },
      { word: '少数', reading: 'しょうすう', meaning: 'Jumlah sedikit / Minoritas' }
    ],
    sampleSentence: { jp: '少し漢字を読むことができます。', reading: 'すこしかんじをよむことができます。', id: 'Saya bisa membaca sedikit kanji.' }
  },
  {
    id: 'k-117',
    kanji: '元',
    strokes: 4,
    onyomi: ['ゲン', 'ガン'],
    kunyomi: ['もと'],
    meaningId: 'Asal / Dasar / Awal',
    meaningEn: 'Origin / Former',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '元気', reading: 'げんき', meaning: 'Sehat / Semangat' },
      { word: '元日', reading: 'がんじつ', meaning: 'Hari pertama tahun baru (1 Januari)' },
      { word: '元小学校の先生', reading: 'もとしょうがっこうのせんせい', meaning: 'Mantan guru SD' }
    ],
    sampleSentence: { jp: 'お久しぶりですね。お元気ですか。', reading: 'おひさしぶりですね。おげんきですか。', id: 'Lama tidak berjumpa ya. Apakah Anda sehat?' }
  },
  {
    id: 'k-118',
    kanji: '気',
    strokes: 6,
    onyomi: ['キ'],
    kunyomi: [],
    meaningId: 'Energi / Semangat / Udara',
    meaningEn: 'Spirit / Mood / Air',
    chapter: 15,
    category: '15章 けいようし',
    grade: 'N5',
    compounds: [
      { word: '元気', reading: 'げんき', meaning: 'Sehat / Semangat' },
      { word: '天気', reading: 'てんき', meaning: 'Cuaca' },
      { word: '気持ち', reading: 'きもち', meaning: 'Perasaan' },
      { word: '気分', reading: 'きぶん', meaning: 'Kondisi perasaan / mood' },
      { word: '病気', reading: 'びょうき', meaning: 'Sakit' },
      { word: '電気', reading: 'でんき', meaning: 'Listrik' }
    ],
    sampleSentence: { jp: '今日は天気がいいですね。', reading: 'きょうはてんきがいいですね。', id: 'Hari ini cuacanya bagus ya.' }
  }
];

// Latihan & Kuis Bab Asli dari Buku Arc Academy
export const kanjiExercisesByChapter: KanjiChapterExercise[] = [
  {
    chapter: 1,
    chapterTitle: '1章 すうじ (Numbers)',
    fukushuYomi: [
      { q: 'すみません。みずを 三つ ください。', kanji: '三つ', answer: 'みっつ' },
      { q: 'つくえの うえに コップが 五つ あります。', kanji: '五つ', answer: 'いつつ' },
      { q: 'ペンを 一ぽん かいました。', kanji: '一ぽん', answer: 'いっぽん' },
      { q: 'すみません。きってを 二まい ください。', kanji: '二まい', answer: 'にまい' },
      { q: 'まいあさ 九じに じゅぎょうが はじまります。', kanji: '九じ', answer: 'くじ' },
      { q: 'でんしゃで 四十ぷん かかります。', kanji: '四十ぷん', answer: 'よんじゅっぷん' },
      { q: 'レストランは 七かいに あります。', kanji: '七かい', answer: 'ななかい' },
      { q: 'このふくは 三千円でした。', kanji: '三千円', answer: 'さんぜんえん' },
      { q: 'ここから しぶくまで 四百円です。', kanji: '四百円', answer: 'よんひゃくえん' },
      { q: 'がくせいが 三百にん います。', kanji: '三百にん', answer: 'さんびゃくにん' }
    ],
    fukushuKaki: [
      { q: 'きのうは よじかん ねました。', kana: 'よじかん', answer: '四時間' },
      { q: 'しちごさんは こどもの おいわいです。', kana: 'しちごさん', answer: '七五三' },
      { q: 'わたしは アパートの にかいに すんでいます。', kana: 'にかい', answer: '二階' },
      { q: 'テーブルに みかんが むっつ あります。', kana: 'むっつ', answer: '六つ' },
      { q: 'じゅうまんえんの パソコンを かいました。', kana: 'じゅうまんえん', answer: '十万円' }
    ],
    quizType: 'Urutan Nilai Angka',
    quizQuestion: 'Urutkan kanji berikut dari yang terkecil ke terbesar: 九, 二, 七',
    quizOptions: ['二 < 七 < 九', '九 < 七 < 二', '七 < 二 < 九', '二 < 九 < 七'],
    quizAnswer: '二 < 七 < 九'
  },
  {
    chapter: 2,
    chapterTitle: '2章 カレンダー (Calendar)',
    fukushuYomi: [
      { q: '3年まえに にほんへ きました。', kanji: '3年まえ', answer: 'さんねんまえ' },
      { q: 'つめたい 水が のみたいです。', kanji: '水', answer: 'みず' },
      { q: 'ここに 生年月日を かいてください。', kanji: '生年月日', answer: 'せいねんがっぴ' },
      { q: 'いま お金が ぜんぜん ありません。', kanji: 'お金', answer: 'おかね' },
      { q: '休日は うちで ゆっくり やすみます。', kanji: '休日', answer: 'きゅうじつ' },
      { q: 'こどもに 木の おもちゃを プレゼントしました。', kanji: '木', answer: 'き' },
      { q: 'まいしゅう 火曜日に かいわの れんしゅうを します。', kanji: '火曜日', answer: 'かようび' },
      { q: '五月五日は こどもの日です。', kanji: '五月五日', answer: 'ごがついつか' }
    ],
    fukushuKaki: [
      { q: 'いつか つきへ いきたいです。', kana: 'つき', answer: '月' },
      { q: 'げんきんで とけいを かいます。', kana: 'げんきん', answer: '現金' },
      { q: 'きょねん はじめて にほんへ きました。', kana: 'きょねん', answer: '去年' },
      { q: 'たばこに ひを つけます。', kana: 'ひ', answer: '火' },
      { q: 'あしたは きんようびです。', kana: 'きんようび', answer: '金曜日' }
    ],
    quizType: 'Hari & Tanggal Kalender',
    quizQuestion: 'Kanji apakah untuk hari Minggu?',
    quizOptions: ['日曜日', '月曜日', '火曜日', '金曜日'],
    quizAnswer: '日曜日'
  },
  {
    chapter: 3,
    chapterTitle: '3章 人 (People / Body)',
    fukushuYomi: [
      { q: 'ジョンさんは アメリカ人です。', kanji: 'アメリカ人', answer: 'アメリカじん' },
      { q: 'わたしは 一人で にほんへ きました。', kanji: '一人', answer: 'ひとり' },
      { q: '足を けがして びょういんへ いきました。', kanji: '足', answer: 'あし' },
      { q: 'しぶやえきの かいさつ口で ともだちと あいます。', kanji: 'かいさつ口', answer: 'かいさつぐち' },
      { q: 'いつも 目ざましどけいを 7じに セットしています。', kanji: '目ざましどけい', answer: 'めざましどけい' },
      { q: 'とうきょうの 人口を しっていますか。', kanji: '人口', answer: 'じんこう' }
    ],
    fukushuKaki: [
      { q: 'ジョンさんは ちからが とても つよいです。', kana: 'ちから', answer: '力' },
      { q: 'しんじゅくえきは ひとが とても おおいです。', kana: 'ひと', answer: '人' },
      { q: 'クラスの がくせいは ぜんぶで にじゅうにん います。', kana: 'にじゅうにん', answer: '二十人' },
      { q: 'ドラッグストアで めぐすりを かいました。', kana: 'めぐすり', answer: '目薬' },
      { q: 'みみが いたいですから びょういんへ いきました。', kana: 'みみ', answer: '耳' }
    ],
    quizType: 'Bagian Tubuh & Pakaian',
    quizQuestion: 'Barang "くつ (sepatu)" dipakai di bagian tubuh mana?',
    quizOptions: ['足', '手', '目', '耳'],
    quizAnswer: '足'
  },
  {
    chapter: 4,
    chapterTitle: '4章 しぜん-1 (Nature 1)',
    fukushuYomi: [
      { q: 'あぶないですから 石を なげてはいけません。', kanji: '石', answer: 'いし' },
      { q: '水田で こめを つくります。', kanji: '水田', answer: 'すいでん' },
      { q: 'にほんで いちばん ながい川は どこに ありますか。', kanji: '川', answer: 'かわ' },
      { q: 'にほんは 山が おおい くにです。', kanji: '山', answer: 'やま' },
      { q: '花びんを テーブルの うえに おきました。', kanji: '花びん', answer: 'かびん' },
      { q: 'はるは 竹のこが おいしいです。', kanji: '竹のこ', answer: 'たけのこ' },
      { q: 'にほんは 6月に 雨が たくさん ふります。', kanji: '雨', answer: 'あめ' }
    ],
    fukushuKaki: [
      { q: 'ことしの なつやすみは ふじさんへ いきたいです。', kana: 'ふじさん', answer: '富士山' },
      { q: 'たんぼに カエルや かもが います。', kana: 'たんぼ', answer: '田んぼ' },
      { q: 'まいあさ ベランダの はなに みずを やります。', kana: 'はな', answer: '花' },
      { q: 'なつやすみに はなびを みに いきます。', kana: 'はなび', answer: '花火' },
      { q: 'うちの ちかくの やまに ちくりんが あります。', kana: 'ちくりん', answer: '竹林' }
    ],
    quizType: 'Tebak Gambar Alam',
    quizQuestion: 'Piktograf gambar bambu menjadi huruf kanji apa?',
    quizOptions: ['竹', '花', '木', '林'],
    quizAnswer: '竹'
  },
  {
    chapter: 5,
    chapterTitle: '5章 ばしょ (Place & Position)',
    fukushuYomi: [
      { q: 'おとうとは 三さい 年下です。', kanji: '年下', answer: 'としした' },
      { q: 'かいだんで 三かいまで 上がってください。', kanji: '上がって', answer: 'あがって' },
      { q: 'つくえの 上に なにが ありますか。', kanji: '上', answer: 'うえ' },
      { q: '左右を よく みて おうだんほどうを わたってください。', kanji: '左右', answer: 'さゆう' },
      { q: '山口せんせいは いま 外出しています。', kanji: '外出', answer: 'がいしゅつ' },
      { q: 'このかどを 右に まがってください。', kanji: '右', answer: 'みぎ' }
    ],
    fukushuKaki: [
      { q: 'としうえの ひとと けっこんしたいです。', kana: 'としうえ', answer: '年上' },
      { q: 'いすの したに ねこが います。', kana: 'した', answer: '下' },
      { q: 'みなさん つくえの みぎがわに たってください。', kana: 'みぎがわ', answer: '右側' },
      { q: 'なつやすみに 一人で こくないを りょこうしました。', kana: 'こくない', answer: '国内' },
      { q: 'かばんの なかに ペットボトルの 水が あります。', kana: 'なか', answer: '中' }
    ],
    quizType: 'Simbol & Posisi',
    quizQuestion: 'Benda berada di posisi berlawanan dari "上 (atas)" adalah...',
    quizOptions: ['下', '中', '外', '左'],
    quizAnswer: '下'
  },
  {
    chapter: 6,
    chapterTitle: '6章 学校-1 (School 1)',
    fukushuYomi: [
      { q: 'とうきょう大学で にほんごを べんきょうしています。', kanji: '大学', answer: 'だいがく' },
      { q: 'たなか先生は とても やさしいです。', kanji: '先生', answer: 'せんせい' },
      { q: 'まいあさ 8じに 学生が あつまります。', kanji: '学生', answer: 'がくせい' },
      { q: 'ここに お名前を かいてください。', kanji: '名前', answer: 'なまえ' },
      { q: '漢字の 字を きれいに かきましょう。', kanji: '字', answer: 'じ' },
      { q: '本を さんさつ よみました。', kanji: '本', answer: 'ほん' },
      { q: 'からだの 調子が わるいですから 病院へ いきます。', kanji: '体', answer: 'からだ' }
    ],
    fukushuKaki: [
      { q: 'まいあさ 8じに がっこうへ いきます。', kana: 'がっこう', answer: '学校' },
      { q: 'わたしの なまえは キムです。', kana: 'なまえ', answer: '名前' },
      { q: 'せんせいに しつもんを しました。', kana: 'せんせい', answer: '先生' },
      { q: 'にほんごの ほんを かいました。', kana: 'ほん', answer: '本' },
      { q: 'かんじの れんしゅうを します。', kana: 'かんじ', answer: '漢字' }
    ],
    quizType: 'Kata Benda Sekolah',
    quizQuestion: 'Orang yang mengajar di kelas dipanggil...',
    quizOptions: ['先生', '学生', '学校', '本'],
    quizAnswer: '先生'
  },
  {
    chapter: 7,
    chapterTitle: '7章 学校-2 (School 2)',
    fukushuYomi: [
      { q: '大きな こえで はなしてください。', kanji: '大きな', answer: 'おおきな' },
      { q: '小さい こどもが あそんでいます。', kanji: '小さい', answer: 'ちいさい' },
      { q: 'このカメラは とても 高いです。', kanji: '高い', answer: 'たかい' },
      { q: 'しゅうまつに 友だちと えいがを みます。', kanji: '友だち', answer: 'ともだち' },
      { q: 'きょうしつに 入ってください。', kanji: '入って', answer: 'はいって' },
      { q: 'へやの 出口は あちらです。', kanji: '出口', answer: 'でぐち' },
      { q: '大学の 正門の まえで まちあわせを します。', kanji: '正門', answer: 'せいもん' }
    ],
    fukushuKaki: [
      { q: 'たなかさんは わたしの しんゆうです。', kana: 'しんゆう', answer: '親友' },
      { q: 'ふじさんは にほんで いちばん たかい やまです。', kana: 'たかい', answer: '高い' },
      { q: 'でんしゃの いりぐちに たたないでください。', kana: 'いりぐち', answer: '入り口' },
      { q: 'ともだちと カフェへ いきました。', kana: 'ともだち', answer: '友だち' },
      { q: 'がっこうの もんを くぐります。', kana: 'もん', answer: '門' }
    ],
    quizType: 'Antonim (Lawan Kata)',
    quizQuestion: 'Lawan kata dari "大きい (besar)" adalah...',
    quizOptions: ['小さい', '高い', '古い', '新しい'],
    quizAnswer: '小さい'
  },
  {
    chapter: 8,
    chapterTitle: '8章 かぞく (Family & Animals)',
    fukushuYomi: [
      { q: '父は 毎朝 6時に おきます。', kanji: '父', answer: 'ちち' },
      { q: '母の りょうりは とても おいしいです。', kanji: '母', answer: 'はは' },
      { q: '男の子が 公園で サッカーを しています。', kanji: '男の子', answer: 'おとこのこ' },
      { q: 'あの 女の子は だれですか。', kanji: '女の子', answer: 'おんなのこ' },
      { q: 'うちで 可愛い 子犬を かっています。', kanji: '子犬', answer: 'こいぬ' },
      { q: '空を 鳥が とんでいます。', kanji: '鳥', answer: 'とり' }
    ],
    fukushuKaki: [
      { q: 'ちちと ははに てがみを かきました。', kana: 'ちちと はは', answer: '父と母' },
      { q: 'おとうさんの おしごとは なんですか。', kana: 'おとうさん', answer: 'お父さん' },
      { q: 'こうえんで こどもたちが あそんでいます。', kana: 'こども', answer: '子ども' },
      { q: 'しろい いぬを さんぽに つれていきます。', kana: 'いぬ', answer: '犬' },
      { q: 'やきとりを たべました。', kana: 'とり', answer: '鳥' }
    ],
    quizType: 'Hubungan Keluarga',
    quizQuestion: 'Panggilan sopan untuk "Ibu orang lain" adalah...',
    quizOptions: ['お母さん', 'お父さん', '母', '父'],
    quizAnswer: 'お母さん'
  },
  {
    chapter: 9,
    chapterTitle: '9章 どうし-1 (Verbs 1)',
    fukushuYomi: [
      { q: '電車の中で 立っています。', kanji: '立って', answer: 'たって' },
      { q: '日曜日には うちで 休みます。', kanji: '休みます', answer: 'やすみます' },
      { q: '富士山を 見ました。', kanji: '見ました', answer: 'みました' },
      { q: '毎朝 ラジオを 聞きます。', kanji: '聞きます', answer: 'ききます' },
      { q: '来週 日本へ 行きます。', kanji: '行きます', answer: 'いきます' },
      { q: 'あした 友だちが 家に 来ます。', kanji: '来ます', answer: 'きます' },
      { q: '午後 6時に うちへ 帰ります。', kanji: '帰ります', answer: 'かえります' }
    ],
    fukushuKaki: [
      { q: 'あした がっこうを やすみます。', kana: 'やすみます', answer: '休みます' },
      { q: 'しんぶんを よんで テレビを みます。', kana: 'みます', answer: '見ます' },
      { q: 'おんがくを ききながら べんきょうします。', kana: 'ききながら', answer: '聞きながら' },
      { q: 'らいしゅう きょうとへ いきます。', kana: 'いきます', answer: '行きます' },
      { q: 'ふるさとへ かえります。', kana: 'かえります', answer: '帰ります' }
    ],
    quizType: 'Aktivitas Sehari-hari',
    quizQuestion: 'Kanji yang berarti "pulang ke rumah" adalah...',
    quizOptions: ['帰る', '行く', '来る', '休む'],
    quizAnswer: '帰る'
  },
  {
    chapter: 10,
    chapterTitle: '10章 たべもの (Food & Drinks)',
    fukushuYomi: [
      { q: '日本人は お米を よく たべます。', kanji: 'お米', answer: 'おこめ' },
      { q: 'あたたかい お茶を のみます。', kanji: 'お茶', answer: 'おちゃ' },
      { q: '毎朝 牛乳を 一杯 のみます。', kanji: '牛乳', answer: 'ぎゅうにゅう' },
      { q: 'スーパーで 牛肉と 豚肉を かいました。', kanji: '牛肉', answer: 'ぎゅうにく' },
      { q: '焼き魚が とても すきです。', kanji: '魚', answer: 'さかな' },
      { q: '海で 貝を ひろいました。', kanji: '貝', answer: 'かい' },
      { q: 'スポーツの中で サッカーが 一番 好きです。', kanji: '好き', answer: 'すき' },
      { q: 'デパートで 買い物を しました。', kanji: '買い物', answer: 'かいもの' }
    ],
    fukushuKaki: [
      { q: 'まいあさ ぎゅうにゅうを のみます。', kana: 'ぎゅうにゅう', answer: '牛乳' },
      { q: 'さかなの りょうりを つくります。', kana: 'さかな', answer: '魚' },
      { q: 'にほんの りょくちゃは おいしいです。', kana: 'おちゃ', answer: 'お茶' },
      { q: 'わたしの すきな たべものは なんですか。', kana: 'すきな', answer: '好きな' },
      { q: 'たべものを かいに いきます。', kana: 'たべもの', answer: '食べ物' }
    ],
    quizType: 'Makanan & Hewan',
    quizQuestion: 'Daging sapi dalam bahasa Jepang ditulis...',
    quizOptions: ['牛肉', '魚肉', '牛乳', '白米'],
    quizAnswer: '牛肉'
  },
  {
    chapter: 11,
    chapterTitle: '11章 しぜん-2 (Nature 2 & Light)',
    fukushuYomi: [
      { q: '学校の うらに 小さな 林が あります。', kanji: '林', answer: 'はやし' },
      { q: '日本の 森には 動物が たくさん います。', kanji: '森', answer: 'もり' },
      { q: 'おじいさんは 畑で 野菜を つくっています。', kanji: '畑', answer: 'はたけ' },
      { q: '川の 近くに 大きな 岩が あります。', kanji: '岩', answer: 'いわ' },
      { q: 'ラジオから 音楽が きこえます。', kanji: '音楽', answer: 'おんがく' },
      { q: '部屋が 明るいですね。', kanji: '明るい', answer: 'あかるい' },
      { q: '夜は 道が 暗いですから 気をつけてください。', kanji: '暗い', answer: 'くらい' }
    ],
    fukushuKaki: [
      { q: 'もりの なかを さんぽします。', kana: 'もり', answer: '森' },
      { q: 'はたけで トマトを とりました。', kana: 'はたけ', answer: '畑' },
      { q: 'へやの でんきを つけて あかるく します。', kana: 'あかるく', answer: '明るく' },
      { q: 'おんがくを きくのが すきです。', kana: 'おんがく', answer: '音楽' },
      { q: 'よるの みちは くらいです。', kana: 'くらい', answer: '暗い' }
    ],
    quizType: 'Radikal Pohon (木)',
    quizQuestion: 'Tiga huruf kanji 木 (pohon) digabung menjadi kanji apa?',
    quizOptions: ['森 (もり - Hutan lebat)', '林 (はやし - Hutan kecil)', '休 (やすむ - Istirahat)', '畑 (はたけ - Ladang)'],
    quizAnswer: '森 (もり - Hutan lebat)'
  },
  {
    chapter: 12,
    chapterTitle: '12章 どうし-2 (Verbs 2 - Communication & Daily)',
    fukushuYomi: [
      { q: '友だちに「ありがとう」と 言いました。', kanji: '言いました', answer: 'いいました' },
      { q: '手紙を 書いて ポストに いれました。', kanji: '書いて', answer: 'かいて' },
      { q: '毎日 新聞を 読みます。', kanji: '読みます', answer: 'よみます' },
      { q: '日本語で 電話を 話します。', kanji: '話します', answer: 'はなします' },
      { q: '朝ごはんを 食べましたか。', kanji: '食べました', answer: 'たべました' },
      { q: '冷たい 水を 飲みます。', kanji: '飲みます', answer: 'のみます' },
      { q: 'スーパーで パンと 牛乳を 買いました。', kanji: '買いました', answer: 'かいまました' }
    ],
    fukushuKaki: [
      { q: 'かんじを ノートに かきます。', kana: 'かきます', answer: '書きます' },
      { q: 'としょかんで ほんを よみます。', kana: 'よみます', answer: '読みます' },
      { q: 'にほんごで はなしましょう。', kana: 'はなしましょう', answer: '話しましょう' },
      { q: 'しょくどうで ひるごはんを たべます。', kana: 'たべます', answer: '食べます' },
      { q: 'あたらしい くつを かいました。', kana: 'かいました', answer: '買いました' }
    ],
    quizType: 'Kegiatan Berbicara & Membaca',
    quizQuestion: 'Kanji "読" digunakan dalam kata kerja...',
    quizOptions: ['読む (よむ)', '書く (かく)', '話す (はなす)', '言う (いう)'],
    quizAnswer: '読む (よむ)'
  },
  {
    chapter: 13,
    chapterTitle: '13章 町 (Town & Directions)',
    fukushuYomi: [
      { q: 'わたしの 町は 静かで きれいな 所です。', kanji: '町', answer: 'まち' },
      { q: '京都の 有名なお寺を 観光しました。', kanji: 'お寺', answer: 'おてら' },
      { q: '電車が まいりました。', kanji: '電車', answer: 'でんしゃ' },
      { q: '父は 新しい 車を 買いました。', kanji: '車', answer: 'くるま' },
      { q: '東京駅の 東口で 会いましょう。', kanji: '東口', answer: 'ひがしぐち' },
      { q: '太陽は 西に しずみます。', kanji: '西', answer: 'にし' },
      { q: '沖縄は 日本の 南に あります。', kanji: '南', answer: 'みなみ' },
      { q: '北海道は 日本の 北に あります。', kanji: '北', answer: 'きた' }
    ],
    fukushuKaki: [
      { q: 'しずかな まちに すんでいます。', kana: 'まち', answer: '町' },
      { q: 'でんしゃで がっこうへ かよいます。', kana: 'でんしゃ', answer: '電車' },
      { q: 'ひがしの そらが あかるくなりました。', kana: 'ひがし', answer: '東' },
      { q: 'きょうとで ゆうめいな おてらを みました。', kana: 'おてら', answer: 'お寺' },
      { q: 'とうきょうは にほんの どこに ありますか。', kana: 'とうきょう', answer: '東京' }
    ],
    quizType: '4 Mata Angin (方角)',
    quizQuestion: 'Mata angin yang berlawanan dari "東 (timur)" adalah...',
    quizOptions: ['西 (にし - Barat)', '南 (みなみ - Selatan)', '北 (きた - Utara)', '中 (なか - Tengah)'],
    quizAnswer: '西 (にし - Barat)'
  },
  {
    chapter: 14,
    chapterTitle: '14章 時間 (Time & Clock)',
    fukushuYomi: [
      { q: '今、何時何分ですか。', kanji: '何時何分', answer: 'なんじなんぷん' },
      { q: '会議は 2時間 かかりました。', kanji: '時間', answer: 'じかん' },
      { q: '毎朝 7時半に 起きます。', kanji: '7時半', answer: 'しちじはん' },
      { q: '今週は とても いそがしいです。', kanji: '今週', answer: 'こんしゅう' },
      { q: '夕方に 雨が ふりはじめました。', kanji: '夕方', answer: 'ゆうがた' },
      { q: 'あちらの 方へ 行ってください。', kanji: '方', answer: 'ほう' }
    ],
    fukushuKaki: [
      { q: 'いま なんじですか。', kana: 'いま', answer: '今' },
      { q: 'くじはんに えきで あいましょう。', kana: 'くじはん', answer: '九時半' },
      { q: 'ゆうがたに スーパーへ いきます。', kana: 'ゆうがた', answer: '夕方' },
      { q: 'さんじゅっぷん やすみます。', kana: 'さんじゅっぷん', answer: '三十分' },
      { q: 'こんげつは たくさん べんきょうしました。', kana: 'こんげつ', answer: '今月' }
    ],
    quizType: 'Membaca Jam & Waktu',
    quizQuestion: 'Jam 7:30 dalam kanji ditulis...',
    quizOptions: ['七時半', '八時半', '七時分', '六時半'],
    quizAnswer: '七時半'
  },
  {
    chapter: 15,
    chapterTitle: '15章 けいようし (Adjectives & Conditions)',
    fukushuYomi: [
      { q: '新しい 靴を 買いました。', kanji: '新しい', answer: 'あたらしい' },
      { q: 'この 建物は とても 古いです。', kanji: '古い', answer: 'ふるい' },
      { q: '夏休みは 長いですね。', kanji: '長い', answer: 'ながい' },
      { q: 'この店は 安くて 美味しいです。', kanji: '安くて', answer: 'やすくて' },
      { q: '駅の前に 人が 多く 集まっています。', kanji: '多く', answer: 'おおく' },
      { q: '砂糖を 少し 入れてください。', kanji: '少し', answer: 'すこし' },
      { q: 'お元気ですか。はい、元気です。', kanji: '元気', answer: 'げんき' },
      { q: '明日は 天気が よさそうです。', kanji: '天気', answer: 'てんき' }
    ],
    fukushuKaki: [
      { q: 'あたらしい くるまを かいました。', kana: 'あたらしい', answer: '新しい' },
      { q: 'ふじさんは にほんで いちばん たかいです。', kana: 'たかい', answer: '高い' },
      { q: 'やすくて おいしい レストランです。', kana: 'やすくて', answer: '安くて' },
      { q: 'いつも げんきに あいさつします。', kana: 'げんき', answer: '元気' },
      { q: 'すこし にほんごが わかります。', kana: 'すこし', answer: '少し' }
    ],
    quizType: 'Kata Sifat N5',
    quizQuestion: 'Lawan kata dari "新しい (baru)" adalah...',
    quizOptions: ['古い (ふるい)', '安い (やすい)', '高い (たかい)', '長い (ながい)'],
    quizAnswer: '古い (ふるい)'
  }
];

