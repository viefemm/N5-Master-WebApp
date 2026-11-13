import { KotobaItem } from '../types';
import { minnaLessons } from './minnaLessons';

// Helper to convert Hiragana/Katakana to Hepburn Romaji for supplementary module items
const KANA_TO_ROMAJI_MAP: Record<string, string> = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
  しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho',
  にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
  みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
  ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
  ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
  キャ: 'kya', キュ: 'kyu', キョ: 'kyo',
  シャ: 'sha', シュ: 'shu', ショ: 'sho',
  チャ: 'cha', チュ: 'chu', チョ: 'cho',
  ニャ: 'nya', ニュ: 'nyu', ニョ: 'nyo',
  ヒャ: 'hya', ヒュ: 'hyu', ヒョ: 'hyo',
  ミャ: 'mya', ミュ: 'myu', ミョ: 'myo',
  リャ: 'rya', リュ: 'ryu', リョ: 'ryo',
  ギャ: 'gya', ギュ: 'gyu', ギョ: 'gyo',
  ジャ: 'ja', ジュ: 'ju', ジョ: 'jo',
  ビャ: 'bya', ビュ: 'byu', ビョ: 'byo',
  ピャ: 'pya', ピュ: 'pyu', ピョ: 'pyo',
  ティ: 'ti', ディ: 'di', チェ: 'che', シェ: 'she', ジェ: 'je',
  ファ: 'fa', フィ: 'fi', フェ: 'fe', フォ: 'fo',
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'o', ん: 'n',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ア: 'a', イ: 'i', ウ: 'u', エ: 'e', オ: 'o',
  カ: 'ka', キ: 'ki', ク: 'ku', ケ: 'ke', コ: 'ko',
  サ: 'sa', シ: 'shi', ス: 'su', セ: 'se', ソ: 'so',
  タ: 'ta', チ: 'chi', ツ: 'tsu', テ: 'te', ト: 'to',
  ナ: 'na', ニ: 'ni', ヌ: 'nu', ネ: 'ne', ノ: 'no',
  ハ: 'ha', ヒ: 'hi', フ: 'fu', ヘ: 'he', ホ: 'ho',
  マ: 'ma', ミ: 'mi', ム: 'mu', メ: 'me', モ: 'mo',
  ヤ: 'ya', ユ: 'yu', ヨ: 'yo',
  ラ: 'ra', リ: 'ri', ル: 'ru', レ: 're', ロ: 'ro',
  ワ: 'wa', ヲ: 'o', ン: 'n',
  ガ: 'ga', ギ: 'gi', グ: 'gu', ゲ: 'ge', ゴ: 'go',
  ザ: 'za', ジ: 'ji', ズ: 'zu', ゼ: 'ze', Зо: 'zo', ゾ: 'zo',
  ダ: 'da', ヂ: 'ji', ヅ: 'zu', デ: 'de', ド: 'do',
  バ: 'ba', ビ: 'bi', ブ: 'bu', ベ: 'be', ボ: 'bo',
  パ: 'pa', ピ: 'pi', プ: 'pu', ペ: 'pe', ポ: 'po',
  ー: '-', '～': '~', '、': ', ', '。': '. ', '（': ' (', '）': ')',
};

export function kanaToRomaji(input: string): string {
  let res = '';
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (ch === 'っ' || ch === 'ッ') {
      const nextTwo = input.slice(i + 1, i + 3);
      const nextOne = input.slice(i + 1, i + 2);
      const nextRom = KANA_TO_ROMAJI_MAP[nextTwo] || KANA_TO_ROMAJI_MAP[nextOne] || '';
      if (nextRom) {
        res += nextRom[0];
      }
      i++;
      continue;
    }
    const two = input.slice(i, i + 2);
    if (KANA_TO_ROMAJI_MAP[two]) {
      res += KANA_TO_ROMAJI_MAP[two];
      i += 2;
      continue;
    }
    if (KANA_TO_ROMAJI_MAP[ch]) {
      res += KANA_TO_ROMAJI_MAP[ch];
    } else {
      res += ch;
    }
    i++;
  }
  return res.trim();
}

function inferCategory(kana: string, indo: string): KotobaItem['category'] {
  const cleanKana = kana.replace(/（.*）|\(.*\)/g, '').trim();
  if (cleanKana.includes('（な）') || kana.includes('（な）') || cleanKana.endsWith('な')) {
    return 'kata sifat-na';
  }
  if (
    cleanKana.endsWith('ます') ||
    cleanKana.endsWith('る') ||
    cleanKana.endsWith('く') ||
    cleanKana.endsWith('ぐ') ||
    cleanKana.endsWith('す') ||
    cleanKana.endsWith('つ') ||
    cleanKana.endsWith('ぶ') ||
    cleanKana.endsWith('む') ||
    cleanKana.endsWith('う')
  ) {
    if (
      cleanKana.endsWith('ます') ||
      ['とぶ', 'のぼる', 'はしる', 'およぐ', 'もぐる', 'とびこむ', 'さかだちする', 'はう', 'ける', 'ふる', 'もちあげる', 'なげる', 'たたく', 'ひく', 'おす', 'まげる', 'のばす', 'ころぶ', 'ふりむく'].includes(cleanKana)
    ) {
      return 'kata kerja';
    }
  }
  if (
    cleanKana.endsWith('い') &&
    (indo.toLowerCase().includes('besar') ||
      indo.toLowerCase().includes('kecil') ||
      indo.toLowerCase().includes('baru') ||
      indo.toLowerCase().includes('lama') ||
      indo.toLowerCase().includes('baik') ||
      indo.toLowerCase().includes('jelek') ||
      indo.toLowerCase().includes('panas') ||
      indo.toLowerCase().includes('dingin') ||
      indo.toLowerCase().includes('sulit') ||
      indo.toLowerCase().includes('mudah') ||
      indo.toLowerCase().includes('mahal') ||
      indo.toLowerCase().includes('murah') ||
      indo.toLowerCase().includes('rendah') ||
      indo.toLowerCase().includes('menarik') ||
      indo.toLowerCase().includes('enak') ||
      indo.toLowerCase().includes('sibuk') ||
      indo.toLowerCase().includes('senang') ||
      indo.toLowerCase().includes('putih') ||
      indo.toLowerCase().includes('hitam') ||
      indo.toLowerCase().includes('merah') ||
      indo.toLowerCase().includes('biru') ||
      indo.toLowerCase().includes('dekat') ||
      indo.toLowerCase().includes('jauh') ||
      indo.toLowerCase().includes('cepat') ||
      indo.toLowerCase().includes('lambat') ||
      indo.toLowerCase().includes('banyak') ||
      indo.toLowerCase().includes('sedikit') ||
      indo.toLowerCase().includes('hangat') ||
      indo.toLowerCase().includes('sejuk') ||
      indo.toLowerCase().includes('manis') ||
      indo.toLowerCase().includes('pedas') ||
      indo.toLowerCase().includes('berat') ||
      indo.toLowerCase().includes('ringan') ||
      indo.toLowerCase().includes('luas') ||
      indo.toLowerCase().includes('sempit') ||
      indo.toLowerCase().includes('ingin') ||
      indo.toLowerCase().includes('muda') ||
      indo.toLowerCase().includes('panjang') ||
      indo.toLowerCase().includes('pendek') ||
      indo.toLowerCase().includes('terang') ||
      indo.toLowerCase().includes('gelap') ||
      indo.toLowerCase().includes('bahaya') ||
      indo.toLowerCase().includes('sakit') ||
      indo.toLowerCase().includes('mengantuk') ||
      indo.toLowerCase().includes('kuat') ||
      indo.toLowerCase().includes('lemah') ||
      indo.toLowerCase().includes('sepi'))
  ) {
    return 'kata sifat-i';
  }
  if (
    kana.includes('～') ||
    indo.includes('?') ||
    indo.toLowerCase().includes('terima kasih') ||
    indo.toLowerCase().includes('selamat') ||
    indo.toLowerCase().includes('permisi') ||
    indo.toLowerCase().includes('maaf') ||
    indo.toLowerCase().includes('silakan')
  ) {
    return 'ungkapan';
  }
  return 'kata benda';
}

// Supplementary vocabulary from the attached PDF "Kotoba Minna No Nihongo Bab 1-50" (Bab 1-25)
const SUPPLEMENTARY_MODULE_KOTOBA: Array<{
  chapter: number;
  kana: string;
  kanji?: string;
  indonesian: string;
}> = [
  // BAB 1
  { chapter: 1, kana: 'あのひと', kanji: 'あの人', indonesian: 'Orang itu (biasa)' },
  { chapter: 1, kana: 'あのかた', kanji: 'あの方', indonesian: 'Orang itu (sopan)' },
  { chapter: 1, kana: '～ちゃん', indonesian: 'Panggilan untuk anak laki/perempuan' },
  { chapter: 1, kana: 'きょうし', kanji: '教師', indonesian: 'Guru, dosen (kalangan sendiri)' },
  { chapter: 1, kana: 'しゃいん', kanji: '社員', indonesian: 'Pegawai perusahaan' },
  { chapter: 1, kana: 'けんきゅうしゃ', kanji: '研究者', indonesian: 'Peneliti' },
  { chapter: 1, kana: 'どなた', indonesian: 'Siapa (sopan)' },
  { chapter: 1, kana: 'おいくつ', indonesian: 'Umur berapa? (sopan)' },
  { chapter: 1, kana: 'しつれいですが', kanji: '失礼ですが', indonesian: 'Permisi' },
  { chapter: 1, kana: 'おなまえは', kanji: 'お名前は', indonesian: 'Nama Anda siapa?' },
  { chapter: 1, kana: 'イギリス', indonesian: 'Inggris' },
  { chapter: 1, kana: 'インド', indonesian: 'India' },
  { chapter: 1, kana: 'かんこく', kanji: '韓国', indonesian: 'Korea' },
  { chapter: 1, kana: 'ちゅうごく', kanji: '中国', indonesian: 'China' },
  { chapter: 1, kana: 'ドイツ', indonesian: 'Jerman' },
  { chapter: 1, kana: 'フランス', indonesian: 'Perancis' },

  // BAB 2
  { chapter: 2, kana: 'てちょう', kanji: '手帳', indonesian: 'Buku agenda' },
  { chapter: 2, kana: 'めいし', kanji: '名刺', indonesian: 'Kartu nama' },
  { chapter: 2, kana: 'カード', indonesian: 'Kartu' },
  { chapter: 2, kana: 'シャープペンシル', indonesian: 'Pensil mekanik' },
  { chapter: 2, kana: 'ラジオ', indonesian: 'Radio' },
  { chapter: 2, kana: 'カメラ', indonesian: 'Kamera' },
  { chapter: 2, kana: 'コンピューター', indonesian: 'Komputer' },
  { chapter: 2, kana: 'くるま', kanji: '車', indonesian: 'Mobil' },
  { chapter: 2, kana: 'チョコレート', indonesian: 'Coklat' },
  { chapter: 2, kana: 'おみやげ', kanji: 'お土産', indonesian: 'Oleh-oleh' },
  { chapter: 2, kana: 'えいご', kanji: '英語', indonesian: 'Bahasa Inggris' },
  { chapter: 2, kana: 'ちがいます', kanji: '違います', indonesian: 'Bukan, tidak, salah' },
  { chapter: 2, kana: 'これからおせわになります', kanji: 'これからお世話になります', indonesian: 'Mulai sekarang saya akan meminta bantuannya' },
  { chapter: 2, kana: 'こちらこそよろしくおねがいします', indonesian: 'Ya sama-sama (balasan perkenalan)' },

  // BAB 3
  { chapter: 3, kana: 'かいぎしつ', kanji: '会議室', indonesian: 'Ruang rapat' },
  { chapter: 3, kana: 'うけつけ', kanji: '受付', indonesian: 'Meja informasi / resepsionis' },
  { chapter: 3, kana: 'ロビー', indonesian: 'Ruang tunggu, lobi' },
  { chapter: 3, kana: 'かいだん', kanji: '階段', indonesian: 'Tangga' },
  { chapter: 3, kana: 'エレベーター', indonesian: 'Lift' },
  { chapter: 3, kana: 'エスカレーター', indonesian: 'Eskalator, tangga berjalan' },
  { chapter: 3, kana: 'じどうはんばいき', kanji: '自動販売機', indonesian: 'Mesin jual otomatis' },
  { chapter: 3, kana: 'おくに', kanji: 'お国', indonesian: 'Negara' },
  { chapter: 3, kana: 'くつ', kanji: '靴', indonesian: 'Sepatu' },
  { chapter: 3, kana: 'ネクタイ', indonesian: 'Dasi' },
  { chapter: 3, kana: 'ワイン', indonesian: 'Anggur putih / wine' },
  { chapter: 3, kana: 'うりば', kanji: '売り場', indonesian: 'Tempat penjualan' },
  { chapter: 3, kana: 'ちか', kanji: '地下', indonesian: 'Bawah tanah, basement' },
  { chapter: 3, kana: 'おくじょう', kanji: '屋上', indonesian: 'Lantai atas / atap' },
  { chapter: 3, kana: 'ゆうえんち', kanji: '遊園地', indonesian: 'Tempat hiburan' },
  { chapter: 3, kana: 'めがね', kanji: '眼鏡', indonesian: 'Kacamata' },
  { chapter: 3, kana: 'スポーツようひん', kanji: 'スポーツ用品', indonesian: 'Peralatan olahraga' },
  { chapter: 3, kana: 'ぶんぼうぐ', kanji: '文房具', indonesian: 'Alat tulis' },
  { chapter: 3, kana: 'かぐ', kanji: '家具', indonesian: 'Perlengkapan rumah / perabot' },
  { chapter: 3, kana: 'しょっき', kanji: '食器', indonesian: 'Peralatan makan' },
  { chapter: 3, kana: 'でんかせいひん', kanji: '電化製品', indonesian: 'Barang elektronik' },
  { chapter: 3, kana: 'けしょうひん', kanji: '化粧品', indonesian: 'Kosmetik' },
  { chapter: 3, kana: 'しょくひん', kanji: '食品', indonesian: 'Makanan / bahan pangan' },

  // BAB 4
  { chapter: 4, kana: 'びじゅつかん', kanji: '美術館', indonesian: 'Gedung kesenian' },
  { chapter: 4, kana: 'おととい', kanji: '一昨日', indonesian: '2 hari yang lalu, kemarin lusa' },
  { chapter: 4, kana: 'あさって', kanji: '明後日', indonesian: 'Besok lusa' },
  { chapter: 4, kana: 'けさ', kanji: '今朝', indonesian: 'Tadi pagi' },
  { chapter: 4, kana: 'こんばん', kanji: '今晩', indonesian: 'Malam ini' },
  { chapter: 4, kana: 'ひるやすみ', kanji: '昼休み', indonesian: 'Istirahat siang' },
  { chapter: 4, kana: 'しけん', kanji: '試験', indonesian: 'Ujian' },
  { chapter: 4, kana: 'かいぎ', kanji: '会議', indonesian: 'Rapat' },
  { chapter: 4, kana: 'えいが', kanji: '映画', indonesian: 'Film' },
  { chapter: 4, kana: 'たいへんですね', kanji: '大変ですね', indonesian: 'Berat ya / sibuk ya' },
  { chapter: 4, kana: 'ばんごう', kanji: '番号', indonesian: 'Nomor' },
  { chapter: 4, kana: 'けいさつしょ', kanji: '警察署', indonesian: 'Kantor polisi' },
  { chapter: 4, kana: 'しょうぼうしょ', kanji: '消防署', indonesian: 'Pemadam kebakaran' },
  { chapter: 4, kana: 'てんきよほう', kanji: '天気予報', indonesian: 'Ramalan cuaca' },

  // BAB 5
  { chapter: 5, kana: 'ひこうき', kanji: '飛行機', indonesian: 'Pesawat terbang' },
  { chapter: 5, kana: 'ふね', kanji: '船', indonesian: 'Kapal laut' },
  { chapter: 5, kana: 'ちかてつ', kanji: '地下鉄', indonesian: 'Kereta bawah tanah' },
  { chapter: 5, kana: 'しんかんせん', kanji: '新幹線', indonesian: 'Shinkansen (kereta cepat)' },
  { chapter: 5, kana: 'じてんしゃ', kanji: '自転車', indonesian: 'Sepeda' },
  { chapter: 5, kana: 'あるいて', kanji: '歩いて', indonesian: 'Jalan kaki' },
  { chapter: 5, kana: 'かれ', kanji: '彼', indonesian: 'Dia (laki-laki) / pacar' },
  { chapter: 5, kana: 'かのじょ', kanji: '彼女', indonesian: 'Dia (perempuan) / pacar' },
  { chapter: 5, kana: 'ひとりで', kanji: '一人で', indonesian: 'Sendirian' },
  { chapter: 5, kana: 'ついたち', kanji: '一日', indonesian: 'Tanggal 1' },
  { chapter: 5, kana: 'ふつか', kanji: '二日', indonesian: 'Tanggal 2, 2 hari' },
  { chapter: 5, kana: 'みっか', kanji: '三日', indonesian: 'Tanggal 3, 3 hari' },
  { chapter: 5, kana: 'よっか', kanji: '四日', indonesian: 'Tanggal 4, 4 hari' },
  { chapter: 5, kana: 'いつか', kanji: '五日', indonesian: 'Tanggal 5, 5 hari' },
  { chapter: 5, kana: 'むいか', kanji: '六日', indonesian: 'Tanggal 6, 6 hari' },
  { chapter: 5, kana: 'なのか', kanji: '七日', indonesian: 'Tanggal 7, 7 hari' },
  { chapter: 5, kana: 'ようか', kanji: '八日', indonesian: 'Tanggal 8, 8 hari' },
  { chapter: 5, kana: 'ここのか', kanji: '九日', indonesian: 'Tanggal 9, 9 hari' },
  { chapter: 5, kana: 'とおか', kanji: '十日', indonesian: 'Tanggal 10, 10 hari' },
  { chapter: 5, kana: 'はつか', kanji: '二十日', indonesian: 'Tanggal 20, 20 hari' },
  { chapter: 5, kana: 'ふつう', kanji: '普通', indonesian: 'Kereta biasa (lokal)' },
  { chapter: 5, kana: 'きゅうこう', kanji: '急行', indonesian: 'Kereta ekspres' },
  { chapter: 5, kana: 'とっきゅう', kanji: '特急', indonesian: 'Kereta super ekspres' },

  // BAB 6
  { chapter: 6, kana: 'すいます', kanji: '吸います', indonesian: 'Menghisap / merokok' },
  { chapter: 6, kana: 'とります', kanji: '撮ります', indonesian: 'Mengambil (foto) / memotret' },
  { chapter: 6, kana: 'あいます', kanji: '会います', indonesian: 'Bertemu' },
  { chapter: 6, kana: 'あさごはん', kanji: '朝ご飯', indonesian: 'Makan pagi / sarapan' },
  { chapter: 6, kana: 'ひるごはん', kanji: '昼ご飯', indonesian: 'Makan siang' },
  { chapter: 6, kana: 'ばんごはん', kanji: '晩ご飯', indonesian: 'Makan malam' },
  { chapter: 6, kana: 'くだもの', kanji: '果物', indonesian: 'Buah-buahan' },
  { chapter: 6, kana: 'ぎゅうにゅう', kanji: '牛乳', indonesian: 'Susu sapi' },
  { chapter: 6, kana: 'おさけ', kanji: 'お酒', indonesian: 'Minuman keras / sake' },
  { chapter: 6, kana: 'てがみ', kanji: '手紙', indonesian: 'Surat' },
  { chapter: 6, kana: 'しゃしん', kanji: '写真', indonesian: 'Foto' },
  { chapter: 6, kana: 'にわ', kanji: '庭', indonesian: 'Halaman / taman rumah' },
  { chapter: 6, kana: 'はなみ', kanji: '花見', indonesian: 'Hanami (menikmati bunga sakura)' },
  { chapter: 6, kana: 'ときどき', kanji: '時々', indonesian: 'Kadang-kadang' },
  { chapter: 6, kana: 'ぎゅうにく', kanji: '牛肉', indonesian: 'Daging sapi' },
  { chapter: 6, kana: 'とりにく', kanji: '鶏肉', indonesian: 'Daging ayam' },
  { chapter: 6, kana: 'こめ', kanji: '米', indonesian: 'Beras' },

  // BAB 7
  { chapter: 7, kana: 'きります', kanji: '切ります', indonesian: 'Memotong / menggunting' },
  { chapter: 7, kana: 'おくります', kanji: '送ります', indonesian: 'Mengirim' },
  { chapter: 7, kana: 'かします', kanji: '貸します', indonesian: 'Meminjamkan / menyewakan' },
  { chapter: 7, kana: 'かります', kanji: '借ります', indonesian: 'Meminjam / menyewa' },
  { chapter: 7, kana: 'ならいます', kanji: '習います', indonesian: 'Belajar (kepada)' },
  { chapter: 7, kana: 'かけます', indonesian: 'Menelpon' },
  { chapter: 7, kana: 'はさみ', indonesian: 'Gunting' },
  { chapter: 7, kana: 'けしゴム', kanji: '消しゴム', indonesian: 'Penghapus karet' },
  { chapter: 7, kana: 'かみ', kanji: '紙', indonesian: 'Kertas' },
  { chapter: 7, kana: 'にもつ', kanji: '荷物', indonesian: 'Barang / paket' },
  { chapter: 7, kana: 'おかね', kanji: 'お金', indonesian: 'Uang' },
  { chapter: 7, kana: 'きっぷ', kanji: '切符', indonesian: 'Karcis / tiket' },
  { chapter: 7, kana: 'そぼ', kanji: '祖母', indonesian: 'Nenek (sendiri)' },
  { chapter: 7, kana: 'そふ', kanji: '祖父', indonesian: 'Kakek (sendiri)' },
  { chapter: 7, kana: 'りょうしん', kanji: '両親', indonesian: 'Orang tua' },
  { chapter: 7, kana: 'いもうと', kanji: '妹', indonesian: 'Adik perempuan' },
  { chapter: 7, kana: 'おとうと', kanji: '弟', indonesian: 'Adik laki-laki' },
  { chapter: 7, kana: 'あね', kanji: '姉', indonesian: 'Kakak perempuan' },
  { chapter: 7, kana: 'あに', kanji: '兄', indonesian: 'Kakak laki-laki' },
  { chapter: 7, kana: 'つま', kanji: '妻', indonesian: 'Istri (sendiri)' },
  { chapter: 7, kana: 'おっと', kanji: '夫', indonesian: 'Suami (sendiri)' },

  // BAB 8
  { chapter: 8, kana: 'ひま（な）', kanji: '暇（な）', indonesian: 'Senggang' },
  { chapter: 8, kana: 'べんり（な）', kanji: '便利（な）', indonesian: 'Praktis' },
  { chapter: 8, kana: 'すてき（な）', indonesian: 'Bagus / indah' },
  { chapter: 8, kana: 'わるい', kanji: '悪い', indonesian: 'Jelek / buruk' },
  { chapter: 8, kana: 'つめたい', kanji: '冷たい', indonesian: 'Dingin (benda)' },
  { chapter: 8, kana: 'やさしい', kanji: '易しい', indonesian: 'Mudah / gampang' },
  { chapter: 8, kana: 'ひくい', kanji: '低い', indonesian: 'Rendah' },
  { chapter: 8, kana: 'しろい', kanji: '白い', indonesian: 'Putih' },
  { chapter: 8, kana: 'くろい', kanji: '黒い', indonesian: 'Hitam' },
  { chapter: 8, kana: 'あかい', kanji: '赤い', indonesian: 'Merah' },
  { chapter: 8, kana: 'あおい', kanji: '青い', indonesian: 'Biru' },
  { chapter: 8, kana: 'さくら', kanji: '桜', indonesian: 'Bunga sakura' },
  { chapter: 8, kana: 'たべもの', kanji: '食べ物', indonesian: 'Makanan' },
  { chapter: 8, kana: 'せいかつ', kanji: '生活', indonesian: 'Kehidupan' },
  { chapter: 8, kana: 'はる', kanji: '春', indonesian: 'Musim semi' },
  { chapter: 8, kana: 'なつ', kanji: '夏', indonesian: 'Musim panas' },
  { chapter: 8, kana: 'あき', kanji: '秋', indonesian: 'Musim gugur' },
  { chapter: 8, kana: 'ふゆ', kanji: '冬', indonesian: 'Musim dingin' },

  // BAB 9
  { chapter: 9, kana: 'へた（な）', kanji: '下手（な）', indonesian: 'Tidak pandai / kurang mahir' },
  { chapter: 9, kana: 'のみもの', kanji: '飲み物', indonesian: 'Minuman' },
  { chapter: 9, kana: 'りょうり', kanji: '料理', indonesian: 'Masakan' },
  { chapter: 9, kana: 'やきゅう', kanji: '野球', indonesian: 'Baseball' },
  { chapter: 9, kana: 'りょこう', kanji: '旅行', indonesian: 'Tamasya / jalan-jalan' },
  { chapter: 9, kana: 'うた', kanji: '歌', indonesian: 'Lagu' },
  { chapter: 9, kana: 'え', kanji: '絵', indonesian: 'Gambar / lukisan' },
  { chapter: 9, kana: 'こまかいおかね', kanji: '細かいお金', indonesian: 'Uang kecil, receh' },
  { chapter: 9, kana: 'ようじ', kanji: '用事', indonesian: 'Urusan' },
  { chapter: 9, kana: 'やくそく', kanji: '約束', indonesian: 'Janji' },
  { chapter: 9, kana: 'アルバイト', indonesian: 'Kerja paruh waktu' },
  { chapter: 9, kana: 'はやく', kanji: '早く', indonesian: 'Dengan cepat / lebih awal' },
  { chapter: 9, kana: 'ざんねんです', kanji: '残念です', indonesian: 'Sayang sekali' },
  { chapter: 9, kana: 'すいえい', kanji: '水泳', indonesian: 'Renang' },

  // BAB 10
  { chapter: 10, kana: 'おとこのひと', kanji: '男の人', indonesian: 'Orang laki-laki' },
  { chapter: 10, kana: 'おんなのひと', kanji: '女の人', indonesian: 'Orang perempuan' },
  { chapter: 10, kana: 'でんち', kanji: '電池', indonesian: 'Baterai' },
  { chapter: 10, kana: 'はこ', kanji: '箱', indonesian: 'Kotak' },
  { chapter: 10, kana: 'れいぞうこ', kanji: '冷蔵庫', indonesian: 'Kulkas' },
  { chapter: 10, kana: 'たな', kanji: '棚', indonesian: 'Lemari / rak' },
  { chapter: 10, kana: 'まど', kanji: '窓', indonesian: 'Jendela' },
  { chapter: 10, kana: 'こうえん', kanji: '公園', indonesian: 'Taman' },
  { chapter: 10, kana: 'きっさてん', kanji: '喫茶店', indonesian: 'Coffee shop / kafe' },
  { chapter: 10, kana: 'のりば', kanji: '乗り場', indonesian: 'Tempat naik kendaraan' },
  { chapter: 10, kana: 'げんかん', kanji: '玄関', indonesian: 'Pintu masuk rumah' },
  { chapter: 10, kana: 'だいどころ', kanji: '台所', indonesian: 'Dapur' },

  // BAB 11
  { chapter: 11, kana: 'かかります', indonesian: 'Memerlukan waktu / biaya' },
  { chapter: 11, kana: 'きって', kanji: '切手', indonesian: 'Perangko' },
  { chapter: 11, kana: 'はがき', indonesian: 'Kartu pos' },
  { chapter: 11, kana: 'ふうとう', kanji: '封筒', indonesian: 'Amplop' },
  { chapter: 11, kana: 'がいこく', kanji: '外国', indonesian: 'Luar negeri' },
  { chapter: 11, kana: 'りゅうがくせい', kanji: '留学生', indonesian: 'Pelajar asing' },
  { chapter: 11, kana: 'ぜんぶで', kanji: '全部で', indonesian: 'Semuanya / total' },
  { chapter: 11, kana: 'ていしょく', kanji: '定食', indonesian: 'Makanan paket' },

  // BAB 12
  { chapter: 12, kana: 'とおい', kanji: '遠い', indonesian: 'Jauh' },
  { chapter: 12, kana: 'おそい', kanji: '遅い', indonesian: 'Lambat' },
  { chapter: 12, kana: 'おおい', kanji: '多い', indonesian: 'Banyak (orang/benda)' },
  { chapter: 12, kana: 'すくない', kanji: '少ない', indonesian: 'Sedikit' },
  { chapter: 12, kana: 'あたたかい', kanji: '暖かい', indonesian: 'Hangat' },
  { chapter: 12, kana: 'すずしい', kanji: '涼しい', indonesian: 'Sejuk' },
  { chapter: 12, kana: 'あまい', kanji: '甘い', indonesian: 'Manis' },
  { chapter: 12, kana: 'からい', kanji: '辛い', indonesian: 'Pedas' },
  { chapter: 12, kana: 'おもい', kanji: '重い', indonesian: 'Berat' },
  { chapter: 12, kana: 'かるい', kanji: '軽い', indonesian: 'Ringan' },
  { chapter: 12, kana: 'くもり', kanji: '曇り', indonesian: 'Mendung' },
  { chapter: 12, kana: 'くうこう', kanji: '空港', indonesian: 'Bandara' },
  { chapter: 12, kana: 'うみ', kanji: '海', indonesian: 'Laut' },
  { chapter: 12, kana: 'まつり', kanji: '祭り', indonesian: 'Perayaan / festival' },

  // BAB 13
  { chapter: 13, kana: 'むかえます', kanji: '迎えます', indonesian: 'Menjemput' },
  { chapter: 13, kana: 'つかれます', kanji: '疲れます', indonesian: 'Lelah' },
  { chapter: 13, kana: 'けっこんします', kanji: '結婚します', indonesian: 'Menikah' },
  { chapter: 13, kana: 'かいものします', kanji: '買い物します', indonesian: 'Berbelanja' },
  { chapter: 13, kana: 'しょくじします', kanji: '食事します', indonesian: 'Makan bersama' },
  { chapter: 13, kana: 'さんぽします', kanji: '散歩します', indonesian: 'Jalan-jalan' },
  { chapter: 13, kana: 'ひろい', kanji: '広い', indonesian: 'Luas' },
  { chapter: 13, kana: 'せまい', kanji: '狭い', indonesian: 'Sempit' },
  { chapter: 13, kana: 'かわ', kanji: '川', indonesian: 'Sungai' },
  { chapter: 13, kana: 'つり', kanji: '釣り', indonesian: 'Pancing, memancing' },
  { chapter: 13, kana: 'はくぶつかん', kanji: '博物館', indonesian: 'Museum' },
  { chapter: 13, kana: 'どうぶつえん', kanji: '動物園', indonesian: 'Kebun binatang' },

  // BAB 14
  { chapter: 14, kana: 'つけます', indonesian: 'Menyalakan, menghidupkan' },
  { chapter: 14, kana: 'けします', kanji: '消します', indonesian: 'Mematikan, memadamkan' },
  { chapter: 14, kana: 'あけます', kanji: '開けます', indonesian: 'Membuka' },
  { chapter: 14, kana: 'しめます', kanji: '閉めます', indonesian: 'Menutup' },
  { chapter: 14, kana: 'いそぎます', kanji: '急ぎます', indonesian: 'Buru-buru' },
  { chapter: 14, kana: 'もちます', kanji: '持ちます', indonesian: 'Membawa / memegang' },
  { chapter: 14, kana: 'とります', kanji: '取ります', indonesian: 'Mengambil' },
  { chapter: 14, kana: 'てつだいます', kanji: '手伝います', indonesian: 'Membantu' },
  { chapter: 14, kana: 'よびます', kanji: '呼びます', indonesian: 'Memanggil' },
  { chapter: 14, kana: 'つかいます', kanji: '使います', indonesian: 'Memakai / menggunakan' },
  { chapter: 14, kana: 'とめます', kanji: '止めます', indonesian: 'Menghentikan / memarkir' },
  { chapter: 14, kana: 'みせます', kanji: '見せます', indonesian: 'Memperlihatkan' },
  { chapter: 14, kana: 'すわります', kanji: '座ります', indonesian: 'Duduk' },
  { chapter: 14, kana: 'たちます', kanji: '立ちます', indonesian: 'Berdiri' },
  { chapter: 14, kana: 'ふります', kanji: '降ります', indonesian: 'Turun (hujan/salju)' },
  { chapter: 14, kana: 'コピーします', indonesian: 'Memfotokopi' },
  { chapter: 14, kana: 'じゅうしょ', kanji: '住所', indonesian: 'Alamat' },
  { chapter: 14, kana: 'ちず', kanji: '地図', indonesian: 'Peta' },
  { chapter: 14, kana: 'しお', kanji: '塩', indonesian: 'Garam' },
  { chapter: 14, kana: 'さとう', kanji: '砂糖', indonesian: 'Gula' },

  // BAB 15
  { chapter: 15, kana: 'おきます', kanji: '置きます', indonesian: 'Meletakkan' },
  { chapter: 15, kana: 'つくります', kanji: '作ります', indonesian: 'Membuat / memproduksi' },
  { chapter: 15, kana: 'うります', kanji: '売ります', indonesian: 'Menjual' },
  { chapter: 15, kana: 'しります', kanji: '知ります', indonesian: 'Mengenal, mengetahui' },
  { chapter: 15, kana: 'すみます', kanji: '住みます', indonesian: 'Tinggal / bermukim' },
  { chapter: 15, kana: 'けんきゅうします', kanji: '研究します', indonesian: 'Meneliti' },
  { chapter: 15, kana: 'おもいだします', kanji: '思い出します', indonesian: 'Teringat' },
  { chapter: 15, kana: 'しりょう', kanji: '資料', indonesian: 'Data, bahan' },
  { chapter: 15, kana: 'せいひん', kanji: '製品', indonesian: 'Produk' },
  { chapter: 15, kana: 'でんしじしょ', kanji: '電子辞書', indonesian: 'Kamus elektronik' },
  { chapter: 15, kana: 'はいしゃ', kanji: '歯医者', indonesian: 'Dokter gigi' },
  { chapter: 15, kana: 'どくしん', kanji: '独身', indonesian: 'Bujangan, lajang' },

  // BAB 16
  { chapter: 16, kana: 'おります', kanji: '降ります', indonesian: 'Turun (kendaraan)' },
  { chapter: 16, kana: 'のりかえます', kanji: '乗り換えます', indonesian: 'Ganti, pindah kendaraan' },
  { chapter: 16, kana: 'あびます', kanji: '浴びます', indonesian: 'Mandi / menyiram' },
  { chapter: 16, kana: 'いれます', kanji: '入れます', indonesian: 'Memasukkan' },
  { chapter: 16, kana: 'だします', kanji: '出します', indonesian: 'Mengeluarkan / menyerahkan' },
  { chapter: 16, kana: 'おろします', kanji: '下ろします', indonesian: 'Mengambil uang' },
  { chapter: 16, kana: 'おします', kanji: '押します', indonesian: 'Menekan' },
  { chapter: 16, kana: 'はじめます', kanji: '始めます', indonesian: 'Mulai' },
  { chapter: 16, kana: 'けんがくします', kanji: '見学します', indonesian: 'Mengunjungi untuk studi' },
  { chapter: 16, kana: 'でんわします', kanji: '電話します', indonesian: 'Menelepon' },
  { chapter: 16, kana: 'あかるい', kanji: '明るい', indonesian: 'Terang' },
  { chapter: 16, kana: 'くらい', kanji: '暗い', indonesian: 'Gelap' },
  { chapter: 16, kana: 'からだ', kanji: '体', indonesian: 'Badan / tubuh' },
  { chapter: 16, kana: 'あたま', kanji: '頭', indonesian: 'Kepala' },
  { chapter: 16, kana: 'かお', kanji: '顔', indonesian: 'Wajah' },

  // BAB 17
  { chapter: 17, kana: 'おぼえます', kanji: '覚えます', indonesian: 'Mengingat / menghafal' },
  { chapter: 17, kana: 'なくします', indonesian: 'Kehilangan, hilang' },
  { chapter: 17, kana: 'はらいます', kanji: '払います', indonesian: 'Membayar' },
  { chapter: 17, kana: 'かえします', kanji: '返します', indonesian: 'Mengembalikan' },
  { chapter: 17, kana: 'でかけます', kanji: '出かけます', indonesian: 'Keluar rumah / berangkat' },
  { chapter: 17, kana: 'ぬぎます', kanji: '脱ぎます', indonesian: 'Melepas (pakaian/sepatu)' },
  { chapter: 17, kana: 'もっていきます', kanji: '持って行きます', indonesian: 'Membawa pergi' },
  { chapter: 17, kana: 'もってきます', kanji: '持って来ます', indonesian: 'Membawa datang' },
  { chapter: 17, kana: 'しんぱいします', kanji: '心配します', indonesian: 'Khawatir' },
  { chapter: 17, kana: 'ざんぎょうします', kanji: '残業します', indonesian: 'Lembur' },
  { chapter: 17, kana: 'しゅっちょうします', kanji: '出張します', indonesian: 'Dinas luar kota' },
  { chapter: 17, kana: 'たいせつ（な）', kanji: '大切（な）', indonesian: 'Penting' },
  { chapter: 17, kana: 'だいじょうぶ（な）', kanji: '大丈夫（な）', indonesian: 'Tidak apa-apa' },
  { chapter: 17, kana: 'きんえん', kanji: '禁煙', indonesian: 'Dilarang merokok' },
  { chapter: 17, kana: 'ねつ', kanji: '熱', indonesian: 'Demam' },
  { chapter: 17, kana: 'びょうき', kanji: '病気', indonesian: 'Sakit' },
  { chapter: 17, kana: 'くすり', kanji: '薬', indonesian: 'Obat' },

  // BAB 18
  { chapter: 18, kana: 'あらいます', kanji: '洗います', indonesian: 'Mencuci' },
  { chapter: 18, kana: 'ひきます', kanji: '弾きます', indonesian: 'Bermain (alat musik / piano)' },
  { chapter: 18, kana: 'うたいます', kanji: '歌います', indonesian: 'Menyanyi' },
  { chapter: 18, kana: 'あつめます', kanji: '集めます', indonesian: 'Mengumpulkan' },
  { chapter: 18, kana: 'すてます', kanji: '捨てます', indonesian: 'Membuang' },
  { chapter: 18, kana: 'かえます', kanji: '換えます', indonesian: 'Menukar, mengganti' },
  { chapter: 18, kana: 'うんてんします', kanji: '運転します', indonesian: 'Menyetir, mengendarai' },
  { chapter: 18, kana: 'よやくします', kanji: '予約します', indonesian: 'Memesan / reservasi' },
  { chapter: 18, kana: 'げんきん', kanji: '現金', indonesian: 'Uang tunai' },
  { chapter: 18, kana: 'にっき', kanji: '日記', indonesian: 'Catatan harian / diary' },

  // BAB 19
  { chapter: 19, kana: 'のぼります', kanji: '登ります', indonesian: 'Naik, mendaki' },
  { chapter: 19, kana: 'とまります', kanji: '泊まります', indonesian: 'Menginap' },
  { chapter: 19, kana: 'そうじします', kanji: '掃除します', indonesian: 'Membersihkan' },
  { chapter: 19, kana: 'せんたくします', kanji: '洗濯します', indonesian: 'Mencuci pakaian' },
  { chapter: 19, kana: 'なります', indonesian: 'Menjadi' },
  { chapter: 19, kana: 'ねむい', kanji: '眠い', indonesian: 'Mengantuk' },
  { chapter: 19, kana: 'つよい', kanji: '強い', indonesian: 'Kuat' },
  { chapter: 19, kana: 'よわい', kanji: '弱い', indonesian: 'Lemah' },
  { chapter: 19, kana: 'ちょうし', kanji: '調子', indonesian: 'Kondisi' },
  { chapter: 19, kana: 'れんしゅう', kanji: '練習', indonesian: 'Latihan' },

  // BAB 20
  { chapter: 20, kana: 'いります', kanji: '要ります', indonesian: 'Memerlukan' },
  { chapter: 20, kana: 'しらべます', kanji: '調べます', indonesian: 'Memeriksa, meneliti, mengecek' },
  { chapter: 20, kana: 'しゅうりします', kanji: '修理します', indonesian: 'Memperbaiki' },
  { chapter: 20, kana: 'ぼく', kanji: '僕', indonesian: 'Aku (laki-laki akrab)' },
  { chapter: 20, kana: 'きみ', kanji: '君', indonesian: 'Kamu (akrab)' },
  { chapter: 20, kana: 'きもの', kanji: '着物', indonesian: 'Kimono' },
  { chapter: 20, kana: 'ビザ', indonesian: 'Visa' },

  // BAB 21
  { chapter: 21, kana: 'かちます', kanji: '勝ちます', indonesian: 'Menang' },
  { chapter: 21, kana: 'まけます', kanji: '負けます', indonesian: 'Kalah' },
  { chapter: 21, kana: 'やくにたちます', kanji: '役に立ちます', indonesian: 'Bermanfaat, berguna' },
  { chapter: 21, kana: 'うごきます', kanji: '動きます', indonesian: 'Pindah, bergerak' },
  { chapter: 21, kana: 'やめます', indonesian: 'Berhenti (kerja/sekolah)' },
  { chapter: 21, kana: 'きをつけます', kanji: '気を付けます', indonesian: 'Berhati-hati, waspada' },
  { chapter: 21, kana: 'りゅうがくします', kanji: '留学します', indonesian: 'Studi di luar negeri' },
  { chapter: 21, kana: 'むだ（な）', indonesian: 'Sia-sia, tidak berguna' },
  { chapter: 21, kana: 'ふべん（な）', kanji: '不便（な）', indonesian: 'Tidak praktis' },

  // BAB 22
  { chapter: 22, kana: 'きます', kanji: '着ます', indonesian: 'Memakai (pakaian atasan)' },
  { chapter: 22, kana: 'はきます', indonesian: 'Memakai (sepatu, celana, rok)' },
  { chapter: 22, kana: 'かぶります', indonesian: 'Memakai (topi)' },
  { chapter: 22, kana: 'かけます', indonesian: 'Memakai (kacamata)' },
  { chapter: 22, kana: 'うまれます', kanji: '生まれます', indonesian: 'Lahir' },
  { chapter: 22, kana: 'ぼうし', kanji: '帽子', indonesian: 'Topi' },
  { chapter: 22, kana: 'おべんとう', kanji: 'お弁当', indonesian: 'Bekal makanan' },
  { chapter: 22, kana: 'やちん', kanji: '家賃', indonesian: 'Biaya sewa rumah' },
  { chapter: 22, kana: 'わしつ', kanji: '和室', indonesian: 'Kamar ala Jepang' },
  { chapter: 22, kana: 'ふとん', kanji: '布団', indonesian: 'Kasur dan selimut kapas Jepang' },

  // BAB 23
  { chapter: 23, kana: 'ききます', kanji: '聞きます', indonesian: 'Bertanya (kepada)' },
  { chapter: 23, kana: 'まわします', kanji: '回します', indonesian: 'Memutar' },
  { chapter: 23, kana: 'ひきます', kanji: '引きます', indonesian: 'Menarik' },
  { chapter: 23, kana: 'かえます', kanji: '変えます', indonesian: 'Mengubah' },
  { chapter: 23, kana: 'さわります', kanji: '触ります', indonesian: 'Menyentuh' },
  { chapter: 23, kana: 'あるきます', kanji: '歩きます', indonesian: 'Berjalan kaki' },
  { chapter: 23, kana: 'わたります', kanji: '渡ります', indonesian: 'Menyeberang' },
  { chapter: 23, kana: 'まがります', kanji: '曲がります', indonesian: 'Belok' },
  { chapter: 23, kana: 'さびしい', kanji: '寂しい', indonesian: 'Sepi / kesepian' },
  { chapter: 23, kana: 'おゆ', kanji: 'お湯', indonesian: 'Air panas' },
  { chapter: 23, kana: 'こしょう', kanji: '故障', indonesian: 'Kerusakan' },
  { chapter: 23, kana: 'こうさてん', kanji: '交差点', indonesian: 'Perempatan' },
  { chapter: 23, kana: 'しんごう', kanji: '信号', indonesian: 'Lampu lalu lintas' },
  { chapter: 23, kana: 'はし', kanji: '橋', indonesian: 'Jembatan' },

  // BAB 24
  { chapter: 24, kana: 'くれます', indonesian: 'Memberikan (kepada saya)' },
  { chapter: 24, kana: 'なおします', kanji: '直します', indonesian: 'Mengoreksi, memperbaiki' },
  { chapter: 24, kana: 'つれていきます', kanji: '連れて行きます', indonesian: 'Mengajak pergi / mengantarkan' },
  { chapter: 24, kana: 'つれてきます', kanji: '連れて来ます', indonesian: 'Membawa datang (orang)' },
  { chapter: 24, kana: 'おくります', kanji: '送ります', indonesian: 'Mengantar (orang)' },
  { chapter: 24, kana: 'しょうかいします', kanji: '紹介します', indonesian: 'Memperkenalkan' },
  { chapter: 24, kana: 'あんないします', kanji: '案内します', indonesian: 'Memandu, mengantarkan' },
  { chapter: 24, kana: 'せつめいします', kanji: '説明します', indonesian: 'Menjelaskan, menerangkan' },
  { chapter: 24, kana: 'じゅんび', kanji: '準備', indonesian: 'Persiapan' },
  { chapter: 24, kana: 'ひっこし', kanji: '引っ越し', indonesian: 'Pindah rumah' },
  { chapter: 24, kana: 'おかし', kanji: 'お菓子', indonesian: 'Kue, camilan' },

  // BAB 25
  { chapter: 25, kana: 'かんがえます', kanji: '考えます', indonesian: 'Berpikir, memikirkan' },
  { chapter: 25, kana: 'つきます', kanji: '着きます', indonesian: 'Tiba, sampai' },
  { chapter: 25, kana: 'とります', kanji: '取ります', indonesian: 'Berumur, bertambah usia' },
  { chapter: 25, kana: 'たります', kanji: '足ります', indonesian: 'Cukup' },
  { chapter: 25, kana: 'がんばります', kanji: '頑張ります', indonesian: 'Berusaha, bekerja keras' },
  { chapter: 25, kana: 'いなか', kanji: '田舎', indonesian: 'Desa, kampung halaman' },
  { chapter: 25, kana: 'チャンス', indonesian: 'Kesempatan' },
  { chapter: 25, kana: 'おく', kanji: '億', indonesian: 'Seratus juta' },
  { chapter: 25, kana: 'いみ', kanji: '意味', indonesian: 'Arti / makna' },
  { chapter: 25, kana: 'てんきん', kanji: '転勤', indonesian: 'Pindah tugas / mutasi kerja' },
];

function mapMinnaWordTypeToCategory(wordType: string): KotobaItem['category'] {
  if (wordType.includes('kerja')) return 'kata kerja';
  if (wordType.includes('sifat-i')) return 'kata sifat-i';
  if (wordType.includes('sifat-na')) return 'kata sifat-na';
  if (wordType.includes('benda')) return 'kata benda';
  return 'ungkapan';
}

// Build unified Kotoba dataset for Bab 1-25 combining official Minna lessons + PDF supplementary entries
export const kotobaListN5: KotobaItem[] = (() => {
  const result: KotobaItem[] = [];

  for (let chap = 1; chap <= 25; chap++) {
    const lesson = minnaLessons.find(l => l.chapter === chap);
    const seenKana = new Set<string>();
    let counter = 1;

    if (lesson) {
      for (const v of lesson.vocab) {
        const key = `${v.kana}-${v.kanji || ''}`;
        seenKana.add(v.kana);
        seenKana.add(key);
        result.push({
          id: v.id,
          chapter: chap,
          no: counter++,
          kana: v.kana,
          kanji: v.kanji,
          romaji: v.romaji,
          indonesian: v.indonesian,
          category: mapMinnaWordTypeToCategory(v.wordType),
          verbGroup: v.wordType === 'kata kerja 1' ? 1 : v.wordType === 'kata kerja 2' ? 2 : v.wordType === 'kata kerja 3' ? 3 : undefined,
        });
      }
    }

    const extraForChap = SUPPLEMENTARY_MODULE_KOTOBA.filter(item => item.chapter === chap);
    for (const ex of extraForChap) {
      const key = `${ex.kana}-${ex.kanji || ''}`;
      if (!seenKana.has(ex.kana) && !seenKana.has(key)) {
        seenKana.add(ex.kana);
        seenKana.add(key);
        result.push({
          id: `kotoba-${chap}-${counter}`,
          chapter: chap,
          no: counter++,
          kana: ex.kana,
          kanji: ex.kanji,
          romaji: kanaToRomaji(ex.kana),
          indonesian: ex.indonesian,
          category: inferCategory(ex.kana, ex.indonesian),
        });
      }
    }
  }

  return result;
})();
