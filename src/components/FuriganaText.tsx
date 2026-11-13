import React, { useState, useRef, useEffect } from 'react';

export interface FuriganaSegment {
  text: string;
  reading?: string;
}

interface FuriganaTextProps {
  text: string;
  kana?: string;
  showFurigana?: boolean;
  floatingOnly?: boolean;
  className?: string;
}

const KANJI_REGEX = /[\u4e00-\u9faf\u3400-\u4dbf々]/;

function isKanjiChar(ch: string): boolean {
  return KANJI_REGEX.test(ch);
}

// Comprehensive N5 Kanji & Vocab reading dictionary for fallback when full kana is not paired
const N5_KANJI_FALLBACK_DICT: Array<[string, string]> = [
  ['動詞活用', 'どうしかつよう'],
  ['学習項目', 'がくしゅうこうもく'],
  ['自己紹介', 'じこしょうかい'],
  ['授受表現', 'じゅじゅひょうげん'],
  ['授受動詞', 'じゅじゅどうし'],
  ['存在表現', 'そんざいひょうげん'],
  ['比較表現', 'ひかくひょうげん'],
  ['日常会話', 'にちじょうかいわ'],
  ['名詞修飾', 'めいししゅうしょく'],
  ['確定条件', 'かくていじょうけん'],
  ['三修社', 'さんしゅうしゃ'],
  ['活用', 'かつよう'],
  ['編著', 'へんちょ'],
  ['い形容詞', 'いけいようし'],
  ['な形容詞', 'なけいようし'],
  ['形容詞', 'けいようし'],
  ['名詞文', 'めいしぶん'],
  ['指示詞', 'しじし'],
  ['目的語', 'もくてきご'],
  ['助数詞', 'じょすうし'],
  ['過去形', 'かこけい'],
  ['辞書形', 'じしょけい'],
  ['普通形', 'ふつうけい'],
  ['丁寧形', 'ていねいけい'],
  ['連体節', 'れんたいせつ'],
  ['初級', 'しょきゅう'],
  ['場所', 'ばしょ'],
  ['動詞', 'どうし'],
  ['移動', 'いどう'],
  ['目的', 'もくてき'],
  ['勧誘', 'かんゆう'],
  ['一緒', 'いっしょ'],
  ['手段', 'しゅだん'],
  ['嗜好', 'しこう'],
  ['能力', 'のうりょく'],
  ['所有', 'しょゆう'],
  ['期間', 'きかん'],
  ['頻度', 'ひんど'],
  ['希望', 'きぼう'],
  ['欲しい', 'ほしい'],
  ['指示', 'しじ'],
  ['許可', 'きょか'],
  ['禁止', 'きんし'],
  ['動作', 'どうさ'],
  ['順序', 'じゅんじょ'],
  ['義務', 'ぎむ'],
  ['不要', 'ふよう'],
  ['可能', 'かのう'],
  ['経験', 'けいけん'],
  ['列挙', 'れっきょ'],
  ['引用', 'いんよう'],
  ['条件', 'じょうけん'],
  ['仮定', 'かてい'],
  ['逆接', 'ぎゃくせつ'],
  ['学習', 'がくしゅう'],
  ['項目', 'こうもく'],
  ['挨拶', 'あいさつ'],
  ['数字', 'すうじ'],
  ['会話', 'かいわ'],
  ['単語', 'たんご'],
  ['住んでいます', 'すんでいます'],
  ['知っています', 'しっています'],
  ['曲がります', 'まがります'],
  ['言いました', 'いいました'],
  ['行きません', 'いきません'],
  ['行きます', 'いきます'],
  ['来ました', 'きました'],
  ['帰ります', 'かえります'],
  ['思います', 'おもいます'],
  ['作った', 'つくった'],
  ['言った', 'いった'],
  ['思う', 'おもう'],
  ['行く', 'いく'],
  ['来ます', 'きます'],
  ['後ろ', 'うしろ'],
  ['好き', 'すき'],
  ['嫌い', 'きらい'],
  ['上手', 'じょうず'],
  ['下手', 'へた'],
  ['自動販売機', 'じどうはんばいき'],
  ['電話番号', 'でんわばんごう'],
  ['郵便局', 'ゆうびんきょく'],
  ['図書館', 'としょかん'],
  ['美術館', 'びじゅつかん'],
  ['映画館', 'えいがかん'],
  ['動物園', 'どうぶつえん'],
  ['植物園', 'しょくぶつえん'],
  ['博物館', 'はくぶつかん'],
  ['体育館', 'たいいくかん'],
  ['市役所', 'しやくしょ'],
  ['駐車場', 'ちゅうしゃじょう'],
  ['新幹線', 'しんかんせん'],
  ['飛行機', 'ひこうき'],
  ['自転車', 'じてんしゃ'],
  ['地下鉄', 'ちかてつ'],
  ['会社員', 'かいしゃいん'],
  ['銀行員', 'ぎんこういん'],
  ['研究者', 'けんきゅうしゃ'],
  ['留学生', 'りゅうがくせい'],
  ['先生', 'せんせい'],
  ['教師', 'きょうし'],
  ['学生', 'がくせい'],
  ['社員', 'しゃいん'],
  ['医者', 'いしゃ'],
  ['大学', 'だいがく'],
  ['病院', 'びょういん'],
  ['韓国', 'かんこく'],
  ['中国', 'ちゅうごく'],
  ['日本', 'にほん'],
  ['日本語', 'にほんご'],
  ['英語', 'えいご'],
  ['辞書', 'じしょ'],
  ['雑誌', 'ざっし'],
  ['新聞', 'しんぶん'],
  ['手帳', 'てちょう'],
  ['名刺', 'めいし'],
  ['鉛筆', 'えんぴつ'],
  ['時計', 'とけい'],
  ['お土産', 'おみやげ'],
  ['教室', 'きょうしつ'],
  ['食堂', 'しょくどう'],
  ['事務所', 'じむしょ'],
  ['会議室', 'かいぎしつ'],
  ['受付', 'うけつけ'],
  ['部屋', 'へや'],
  ['お手洗い', 'おてあらい'],
  ['階段', 'かいだん'],
  ['電話', 'でんわ'],
  ['会社', 'かいしゃ'],
  ['売り場', 'うりば'],
  ['地下', 'ちか'],
  ['屋上', 'おくじょう'],
  ['眼鏡', 'めがね'],
  ['銀行', 'ぎんこう'],
  ['午前', 'ごぜん'],
  ['午後', 'ごご'],
  ['一昨日', 'おととい'],
  ['昨日', 'きのう'],
  ['今日', 'きょう'],
  ['明日', 'あした'],
  ['明後日', 'あさって'],
  ['今朝', 'けさ'],
  ['今晩', 'こんばん'],
  ['昼休み', 'ひるやすみ'],
  ['試験', 'しけん'],
  ['会議', 'かいぎ'],
  ['映画', 'えいが'],
  ['毎朝', 'まいあさ'],
  ['毎晩', 'まいばん'],
  ['毎日', 'まいにち'],
  ['月曜日', 'げつようび'],
  ['火曜日', 'かようび'],
  ['水曜日', 'すいようび'],
  ['木曜日', 'もくようび'],
  ['金曜日', 'きんようび'],
  ['土曜日', 'どようび'],
  ['日曜日', 'にちようび'],
  ['何曜日', 'なんようび'],
  ['番号', 'ばんごう'],
  ['学校', 'がっこう'],
  ['電車', 'でんしゃ'],
  ['友達', 'ともだち'],
  ['家族', 'かぞく'],
  ['先週', 'せんしゅう'],
  ['今週', 'こんしゅう'],
  ['来週', 'らいしゅう'],
  ['先月', 'せんげつ'],
  ['今月', 'こんげつ'],
  ['来月', 'らいげつ'],
  ['去年', 'きょねん'],
  ['今年', 'ことし'],
  ['来年', 'らいねん'],
  ['誕生日', 'たんじょうび'],
  ['普通', 'ふつう'],
  ['急行', 'きゅうこう'],
  ['特急', 'とっきゅう'],
  ['朝ご飯', 'あさごはん'],
  ['昼ご飯', 'ひるごはん'],
  ['晩ご飯', 'ばんごはん'],
  ['ご飯', 'ごはん'],
  ['野菜', 'やさい'],
  ['果物', 'くだもの'],
  ['お茶', 'おちゃ'],
  ['紅茶', 'こうちゃ'],
  ['牛乳', 'ぎゅうにゅう'],
  ['お酒', 'おさけ'],
  ['手紙', 'てがみ'],
  ['写真', 'しゃしん'],
  ['宿題', 'しゅくだい'],
  ['花見', 'はなみ'],
  ['時々', 'ときどき'],
  ['年賀状', 'ねんがじょう'],
  ['消しゴム', 'けしごむ'],
  ['荷物', 'にもつ'],
  ['お金', 'おかね'],
  ['切符', 'きっぷ'],
  ['お父さん', 'おとうさん'],
  ['お母さん', 'おかあさん'],
  ['両親', 'りょうしん'],
  ['兄弟', 'きょうだい'],
  ['夫婦', 'ふうふ'],
  ['子供', 'こども'],
  ['有名', 'ゆうめい'],
  ['親切', 'しんせつ'],
  ['元気', 'げんき'],
  ['便利', 'べんり'],
  ['食べ物', 'たべもの'],
  ['生活', 'せいかつ'],
  ['仕事', 'しごと'],
  ['飲み物', 'のみもの'],
  ['料理', 'りょうり'],
  ['野球', 'やきゅう'],
  ['旅行', 'りょこう'],
  ['音楽', 'おんがく'],
  ['漢字', 'かんじ'],
  ['時間', 'じかん'],
  ['用事', 'ようじ'],
  ['約束', 'やくそく'],
  ['ご主人', 'ごしゅじん'],
  ['奥さん', 'おくさん'],
  ['全然', 'ぜんぜん'],
  ['残念', 'ざんねん'],
  ['男の人', 'おとこのひと'],
  ['女の人', 'おんなのひと'],
  ['男の子', 'おとこのこ'],
  ['女の子', 'おんなのこ'],
  ['電池', 'でんち'],
  ['冷蔵庫', 'れいぞうこ'],
  ['公園', 'こうえん'],
  ['喫茶店', 'きっさてん'],
  ['乗り場', 'のりば'],
  ['玄関', 'げんかん'],
  ['風呂場', 'ふろば'],
  ['洗面所', 'せんめんじょ'],
  ['台所', 'だいどころ'],
  ['居間', 'いま'],
  ['寝室', 'しんしつ'],
  ['廊下', 'ろうか'],
  ['切手', 'きって'],
  ['封筒', 'ふうとう'],
  ['外国', 'がいこく'],
  ['一週間', 'いっしゅうかん'],
  ['全部', 'ぜんぶ'],
  ['天気', 'てんき'],
  ['季節', 'きせつ'],
  ['空港', 'くうこう'],
  ['世界', 'せかい'],
  ['祭り', 'まつり'],
  ['生け花', 'いけばな'],
  ['紅葉', 'もみじ'],
  ['初めて', 'はじめて'],
  ['結婚', 'けっこん'],
  ['買い物', 'かいもの'],
  ['食事', 'しょくじ'],
  ['散歩', 'さんぽ'],
  ['大変', 'たいへん'],
  ['美術', 'びじゅつ'],
  ['週末', 'しゅうまつ'],
  ['お正月', 'おしょうがつ'],
  ['電気', 'でんき'],
  ['名前', 'なまえ'],
  ['住所', 'じゅうしょ'],
  ['地図', 'ちず'],
  ['問題', 'もんだい'],
  ['答え', 'こたえ'],
  ['読み方', 'よみかた'],
  ['資料', 'しりょう'],
  ['製品', 'せいひん'],
  ['電子辞書', 'でんしじしょ'],
  ['経済', 'けいざい'],
  ['歯医者', 'はいしゃ'],
  ['独身', 'どくしん'],
  ['職業', 'しょくぎょう'],
  ['公務員', 'こうむいん'],
  ['駅員', 'えきいん'],
  ['店員', 'てんいん'],
  ['弁護士', 'べんごし'],
  ['看護師', 'かんごし'],
  ['運転手', 'うんてんしゅ'],
  ['警察官', 'けいさつかん'],
  ['政治家', 'せいじか'],
  ['音楽家', 'おんがくか'],
  ['建築家', 'けんちくか'],
  ['見学', 'けんがく'],
  ['お寺', 'おてら'],
  ['神社', 'じんじゃ'],
  ['暗証番号', 'あんしょうばんごう'],
  ['金額', 'きんがく'],
  ['確認', 'かくにん'],
  ['心配', 'しんぱい'],
  ['残業', 'ざんぎょう'],
  ['出張', 'しゅっちょう'],
  ['大切', 'たいせつ'],
  ['大丈夫', 'だいじょうぶ'],
  ['禁煙', 'きんえん'],
  ['健康保険証', 'けんこうほけんしょう'],
  ['病気', 'びょうき'],
  ['上着', 'うわぎ'],
  ['下着', 'したぎ'],
  ['運転', 'うんてん'],
  ['予約', 'よやく'],
  ['現金', 'げんきん'],
  ['趣味', 'しゅみ'],
  ['日記', 'にっき'],
  ['お祈り', 'おいのり'],
  ['課長', 'かちょう'],
  ['部長', 'ぶちょう'],
  ['社長', 'しゃちょう'],
  ['動物', 'どうぶつ'],
  ['掃除', 'そうじ'],
  ['洗濯', 'せんたく'],
  ['練習', 'れんしゅう'],
  ['相撲', 'すもう'],
  ['調子', 'ちょうし'],
  ['一度', 'いちど'],
  ['乾杯', 'かんぱい'],
  ['無理', 'むり'],
  ['茶道', 'さどう'],
  ['書道', 'しょどう'],
  ['着物', 'きもの'],
  ['修理', 'しゅうり'],
  ['留学', 'りゅうがく'],
  ['不便', 'ふべん'],
  ['自動車', 'じどうしゃ'],
  ['交通', 'こうつう'],
  ['物価', 'ぶっか'],
  ['天才', 'てんさい'],
  ['試合', 'しあい'],
  ['意見', 'いけん'],
  ['地球', 'ちきゅう'],
  ['最近', 'さいきん'],
  ['帽子', 'ぼうし'],
  ['お弁当', 'おべんとう'],
  ['都合', 'つごう'],
  ['家賃', 'やちん'],
  ['和室', 'わしつ'],
  ['押し入れ', 'おしいれ'],
  ['布団', 'ふとん'],
  ['靴下', 'くつした'],
  ['故障', 'こしょう'],
  ['交差点', 'こうさてん'],
  ['信号', 'しんごう'],
  ['建物', 'たてもの'],
  ['道路', 'どうろ'],
  ['歩道', 'ほどう'],
  ['高速道路', 'こうそくどうろ'],
  ['横断歩道', 'おうだんほどう'],
  ['準備', 'じゅんび'],
  ['引っ越し', 'ひっこし'],
  ['お菓子', 'おかし'],
  ['紹介', 'しょうかい'],
  ['案内', 'あんない'],
  ['説明', 'せつめい'],
  ['田舎', 'いなか'],
  ['意味', 'いみ'],
  ['転勤', 'てんきん'],
  ['田中', 'たなか'],
  ['山田', 'やまだ'],
  ['佐藤', 'さとう'],
  ['鈴木', 'すずき'],
  ['木村', 'きむら'],
  ['渡辺', 'わたなべ'],
  ['松本', 'まつもと'],
  ['東京', 'とうきょう'],
  ['大阪', 'おおさか'],
  ['京都', 'きょうと'],
  ['北海道', 'ほっかいどう'],
  ['富士山', 'ふじさん'],
  ['私', 'わたし'],
  ['人', 'ひと'],
  ['方', 'かた'],
  ['本', 'ほん'],
  ['車', 'くるま'],
  ['机', 'つくえ'],
  ['椅子', 'いす'],
  ['何', 'なん'],
  ['家', 'うち'],
  ['靴', 'くつ'],
  ['百', 'ひゃく'],
  ['千', 'せん'],
  ['万', 'まん'],
  ['円', 'えん'],
  ['今', 'いま'],
  ['時', 'じ'],
  ['分', 'ふん'],
  ['半', 'はん'],
  ['朝', 'あさ'],
  ['昼', 'ひる'],
  ['晩', 'ばん'],
  ['夜', 'よる'],
  ['駅', 'えき'],
  ['船', 'ふね'],
  ['彼', 'かれ'],
  ['卵', 'たまご'],
  ['肉', 'にく'],
  ['魚', 'さかな'],
  ['水', 'みず'],
  ['店', 'みせ'],
  ['庭', 'にわ'],
  ['手', 'て'],
  ['紙', 'かみ'],
  ['花', 'はな'],
  ['父', 'ちち'],
  ['母', 'はは'],
  ['姉', 'あね'],
  ['兄', 'あに'],
  ['妹', 'いもうと'],
  ['弟', 'おとうと'],
  ['妻', 'つま'],
  ['夫', 'おっと'],
  ['娘', 'むすめ'],
  ['山', 'やま'],
  ['町', 'まち'],
  ['所', 'ところ'],
  ['寮', 'りょう'],
  ['春', 'はる'],
  ['夏', 'なつ'],
  ['秋', 'あき'],
  ['冬', 'ふゆ'],
  ['歌', 'うた'],
  ['絵', 'え'],
  ['字', 'じ'],
  ['犬', 'いぬ'],
  ['猫', 'ねこ'],
  ['木', 'き'],
  ['物', 'もの'],
  ['箱', 'はこ'],
  ['棚', 'たな'],
  ['窓', 'まど'],
  ['県', 'けん'],
  ['上', 'うえ'],
  ['下', 'した'],
  ['前', 'まえ'],
  ['右', 'みぎ'],
  ['左', 'ひだり'],
  ['中', 'なか'],
  ['外', 'そと'],
  ['隣', 'となり'],
  ['間', 'あいだ'],
  ['雨', 'あめ'],
  ['雪', 'ゆき'],
  ['海', 'うみ'],
  ['川', 'かわ'],
  ['塩', 'しお'],
  ['服', 'ふく'],
  ['体', 'からだ'],
  ['頭', 'あたま'],
  ['髪', 'かみ'],
  ['顔', 'かお'],
  ['目', 'め'],
  ['耳', 'みみ'],
  ['鼻', 'はな'],
  ['口', 'くち'],
  ['歯', 'は'],
  ['足', 'あし'],
  ['背', 'せ'],
  ['緑', 'みどり'],
  ['熱', 'ねつ'],
  ['薬', 'くすり'],
  ['馬', 'うま'],
  ['日', 'ひ'],
  ['僕', 'ぼく'],
  ['君', 'きみ'],
  ['夢', 'ゆめ'],
  ['話', 'はなし'],
  ['月', 'つき'],
  ['市', 'し'],
  ['村', 'むら'],
  ['帯', 'おび'],
  ['お湯', 'おゆ'],
  ['音', 'おと'],
  ['道', 'みち'],
  ['角', 'かど'],
  ['橋', 'はし'],
  ['坂', 'さか'],
  ['億', 'おく'],
  ['第', 'だい'],
  ['課', 'か'],
  ['形', 'けい'],
  ['回', 'かい'],
  ['台', 'だい'],
  ['枚', 'まい'],
];

/**
 * Aligns a Japanese string containing Kanji (`text`) with its corresponding pure-kana reading (`kana`).
 * Splits `text` into alternating Kanji / non-Kanji blocks and uses non-Kanji anchors to slice `kana` accurately.
 */
export function parseFuriganaSegments(text: string, kana?: string): FuriganaSegment[] {
  if (!text) return [];

  // 1. Check if text already uses explicit bracket syntax like 私[わたし] or 漢字(かんじ)
  if (/[\u4e00-\u9faf\u3400-\u4dbf々]+\[[^\]]+\]/.test(text)) {
    const segments: FuriganaSegment[] = [];
    const regex = /([\u4e00-\u9faf\u3400-\u4dbf々]+)\[([^\]]+)\]/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const plainPart = text.slice(lastIndex, match.index);
        segments.push(...segmentWithFallbackDict(plainPart));
      }
      segments.push({
        text: match[1],
        reading: match[2],
      });
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      segments.push(...segmentWithFallbackDict(text.slice(lastIndex)));
    }
    return segments;
  }

  // 2. If text has no Kanji at all, return as single plain segment
  if (!KANJI_REGEX.test(text)) {
    return [{ text }];
  }

  // 3. If paired `kana` is provided and differs from `text`, align them using anchor blocks
  if (kana && kana.trim() && kana.trim() !== text.trim()) {
    const aligned = alignKanjiAndKana(text, kana);
    if (aligned) {
      return aligned;
    }
  }

  // 4. Fallback: use the built-in N5 Kanji dictionary
  return segmentWithFallbackDict(text);
}

function alignKanjiAndKana(text: string, kana: string): FuriganaSegment[] | null {
  // Split `text` into contiguous blocks of Kanji vs Non-Kanji
  const blocks: Array<{ isKanji: boolean; str: string }> = [];
  for (const ch of text) {
    const k = isKanjiChar(ch);
    if (blocks.length === 0 || blocks[blocks.length - 1].isKanji !== k) {
      blocks.push({ isKanji: k, str: ch });
    } else {
      blocks[blocks.length - 1].str += ch;
    }
  }

  const result: FuriganaSegment[] = [];
  let kanaCursor = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (!block.isKanji) {
      result.push({ text: block.str });
      // Advance kanaCursor past this non-kanji block
      if (kana.startsWith(block.str, kanaCursor)) {
        kanaCursor += block.str.length;
      } else {
        const idx = kana.indexOf(block.str, kanaCursor);
        if (idx !== -1) {
          kanaCursor = idx + block.str.length;
        }
      }
    } else {
      // Current block is Kanji. Look at the next non-Kanji block to anchor where the reading ends.
      const nextBlock = blocks[i + 1];
      if (!nextBlock) {
        // Kanji block is at the very end of `text`
        const reading = kana.slice(kanaCursor).trim();
        result.push({
          text: block.str,
          reading: reading || lookupFallbackReading(block.str),
        });
        kanaCursor = kana.length;
      } else {
        // Find where `nextBlock.str` appears in `kana` after at least 1 character of reading
        const anchor = nextBlock.str;
        let anchorIdx = kana.indexOf(anchor, kanaCursor + 1);
        if (anchorIdx === -1) {
          anchorIdx = kana.indexOf(anchor, kanaCursor);
        }

        if (anchorIdx !== -1) {
          const reading = kana.slice(kanaCursor, anchorIdx).trim();
          result.push({
            text: block.str,
            reading: reading || lookupFallbackReading(block.str),
          });
          kanaCursor = anchorIdx;
        } else {
          // Fallback to dictionary if anchor didn't match (e.g. parenthetical notes)
          const fbReading = lookupFallbackReading(block.str);
          result.push({
            text: block.str,
            reading: fbReading,
          });
          if (fbReading && kana.startsWith(fbReading, kanaCursor)) {
            kanaCursor += fbReading.length;
          }
        }
      }
    }
  }

  return result;
}

function lookupFallbackReading(kanjiStr: string): string | undefined {
  for (const [k, r] of N5_KANJI_FALLBACK_DICT) {
    if (k === kanjiStr) return r;
  }
  return undefined;
}

function segmentWithFallbackDict(text: string): FuriganaSegment[] {
  if (!KANJI_REGEX.test(text)) {
    return [{ text }];
  }

  const segments: FuriganaSegment[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let matched = false;
    // Try longest dictionary match starting at cursor
    for (const [k, r] of N5_KANJI_FALLBACK_DICT) {
      if (text.startsWith(k, cursor)) {
        // Align okurigana prefix/suffix if `k` contains hiragana like お土産
        const subAligned = alignKanjiAndKana(k, r);
        if (subAligned) {
          segments.push(...subAligned);
        } else {
          segments.push({ text: k, reading: r });
        }
        cursor += k.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      const ch = text[cursor];
      if (
        segments.length > 0 &&
        !segments[segments.length - 1].reading &&
        !isKanjiChar(ch)
      ) {
        segments[segments.length - 1].text += ch;
      } else {
        segments.push({ text: ch });
      }
      cursor++;
    }
  }

  return segments;
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({
  text,
  kana,
  showFurigana = true,
  floatingOnly = false,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        window.clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  const segments = parseFuriganaSegments(text, kana);
  const isFloatingMode = floatingOnly || !showFurigana;

  const handleTouchStart = (idx: number) => {
    if (touchTimeoutRef.current) {
      window.clearTimeout(touchTimeoutRef.current);
    }
    setActiveIndex(idx);
  };

  const handleTouchEnd = () => {
    touchTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex(null);
    }, 1400);
  };

  return (
    <span className={`inline leading-relaxed ${className}`}>
      {segments.map((seg, idx) => {
        if (!seg.reading) {
          return <React.Fragment key={idx}>{seg.text}</React.Fragment>;
        }

        const isHoveredOrTouched = activeIndex === idx;

        if (!isFloatingMode) {
          // Visible Furigana directly ABOVE the Kanji (<ruby>)
          return (
            <ruby
              key={idx}
              className="mx-[1px] ruby-align-center group relative"
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span>{seg.text}</span>
              <rt className="text-[10px] sm:text-[11px] font-medium text-rose-700 select-none leading-none pb-0.5">
                {seg.reading}
              </rt>
            </ruby>
          );
        }

        // Hidden / Floating Mode: Popup appears above Kanji on hover (desktop) or touch-and-hold (mobile)
        return (
          <span
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            onTouchStart={() => handleTouchStart(idx)}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="relative inline-block cursor-pointer select-none border-b border-dotted border-stone-400 hover:border-rose-500 hover:text-rose-700 transition-colors mx-[0.5px]"
          >
            {isHoveredOrTouched && (
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-30 px-2 py-0.5 rounded-md bg-stone-900 text-white text-[11px] font-jp font-semibold whitespace-nowrap shadow-md animate-in fade-in duration-150"
              >
                {seg.reading}
                <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-stone-900" />
              </span>
            )}
            <span>{seg.text}</span>
          </span>
        );
      })}
    </span>
  );
};
