export interface VocabItem {
  id: string;
  kanji?: string;
  kana: string;
  romaji: string;
  indonesian: string;
  english?: string;
  wordType:
    | 'kata benda'
    | 'kata kerja 1'
    | 'kata kerja 2'
    | 'kata kerja 3'
    | 'kata sifat-i'
    | 'kata sifat-na'
    | 'partikel'
    | 'kata keterangan'
    | 'ungkapan';
  exampleJp?: string;
  exampleKana?: string;
  exampleRomaji?: string;
  exampleId?: string;
}

export interface KotobaItem {
  id: string;
  chapter: number;
  no: number;
  kana: string;
  kanji?: string;
  romaji: string;
  indonesian: string;
  category: 'kata kerja' | 'kata benda' | 'kata sifat-i' | 'kata sifat-na' | 'ungkapan';
  verbGroup?: 1 | 2 | 3;
}

export interface BunkeiItem {
  id: string;
  title: string;
  pattern: string;
  explanation: string;
  formula?: string;
  reibun: {
    japanese: string;
    kana: string;
    romaji: string;
    indonesian: string;
  }[];
}

export interface KaiwaDialogue {
  speaker: string;
  role: string;
  japanese: string;
  kana: string;
  romaji: string;
  indonesian: string;
}

export interface KaiwaLesson {
  title: string;
  situation: string;
  dialogue: KaiwaDialogue[];
}

export interface LessonExercise {
  id: string;
  type: 'multiple-choice' | 'particle' | 'sentence-order';
  categoryLabel?: string;
  question: string;
  subQuestion?: string;
  audioText?: string;
  options?: string[];
  words?: string[]; // for sentence ordering
  correctAnswer: string | number | string[];
  explanation: string;
}

export interface MinnaLesson {
  chapter: number;
  titleId: string;
  titleJp: string;
  description: string;
  summaryGrammar: string[];
  vocab: VocabItem[];
  bunkei: BunkeiItem[];
  kaiwa: KaiwaLesson;
  exercises: LessonExercise[];
}

export interface KanjiCompound {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiItem {
  id: string;
  kanji: string;
  strokes: number;
  onyomi: string[]; // Katakana
  kunyomi: string[]; // Hiragana
  meaningId: string;
  meaningEn: string;
  chapter: number;
  category: string;
  grade: 'N5';
  compounds: KanjiCompound[];
  strokeOrderGuide?: string; // description or SVG hints
  sampleSentence?: {
    jp: string;
    reading: string;
    id: string;
  };
}

export interface VerbConjugationItem {
  id: string;
  chapter: number;
  kanji: string;
  dictionary: string; // Jisho-kei (kana)
  kanjiDictionary?: string; // Jisho-kei with Kanji
  kanjiMasu?: string; // Masu-kei with Kanji
  kanjiTe?: string; // Te-kei with Kanji
  kanjiNai?: string; // Nai-kei with Kanji
  kanjiTa?: string; // Ta-kei with Kanji
  group: 1 | 2 | 3;
  meaningId: string;
  forms: {
    masu: string;
    te: string;
    nai: string;
    ta: string;
    nakatta: string;
    mashita: string;
    masen: string;
  };
}

export interface ExamQuestion {
  id: string;
  section: 'moji-goi' | 'bunpou' | 'dokkai';
  subSection: string;
  questionText: string;
  passage?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProgress {
  completedChapters: number[];
  masteredKanji: string[];
  masteredKotoba: string[];
  bookmarkedVocab: string[];
  bookmarkedKanji: string[];
  examScores: {
    date: string;
    total: number;
    mojiGoi: number;
    bunpou: number;
    dokkai: number;
    passed: boolean;
  }[];
  streakDays: number;
  lastStudyDate: string;
}
