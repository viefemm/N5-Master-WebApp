import React, { useState, useMemo } from 'react';
import { KanjiItem } from '../types';
import { kanjiMasterN5, kanjiExercisesByChapter } from '../data/kanjiMasterN5';
import { KanjiCanvas } from './KanjiCanvas';
import { FuriganaText } from './FuriganaText';
import { playJapaneseAudio } from '../utils/audio';
import {
  Search,
  Volume2,
  CheckCircle2,
  PenTool,
  X,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Eye,
  EyeOff,
  Bookmark,
  Check,
  RotateCcw,
} from 'lucide-react';

interface KanjiMasterViewProps {
  masteredKanji: string[];
  toggleMasteredKanji: (id: string) => void;
  bookmarkedKanji: string[];
  toggleBookmarkKanji: (id: string) => void;
}

export const KanjiMasterView: React.FC<KanjiMasterViewProps> = ({
  masteredKanji,
  toggleMasteredKanji,
  bookmarkedKanji,
  toggleBookmarkKanji,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Bab');
  const [statusFilter, setStatusFilter] = useState<'all' | 'mastered' | 'unmastered' | 'bookmarked'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'flashcard' | 'quiz' | 'exercise'>('grid');

  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // General Quiz state
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotalAnswered, setQuizTotalAnswered] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  // Chapter Exercise (Fukushuu & Quiz) state
  const [selectedExerciseChapter, setSelectedExerciseChapter] = useState<number>(1);
  const [revealedYomiAnswers, setRevealedYomiAnswers] = useState<Record<number, boolean>>({});
  const [yomiUserInputs, setYomiUserInputs] = useState<Record<number, string>>({});
  const [revealedKakiAnswers, setRevealedKakiAnswers] = useState<Record<number, boolean>>({});
  const [activeKakiCanvasIdx, setActiveKakiCanvasIdx] = useState<number | null>(0);
  const [activeKakiCharIdx, setActiveKakiCharIdx] = useState<number>(0);
  const [chapterQuizAnswered, setChapterQuizAnswered] = useState(false);
  const [selectedChapterQuizOption, setSelectedChapterQuizOption] = useState<number | null>(null);

  const chaptersList = [
    'Semua Bab',
    '1章 すうじ',
    '2章 カレンダー',
    '3章 人',
    '4章 しぜん-1',
    '5章 ばしょ',
    '6章 学校-1',
    '7章 学校-2',
    '8章 かぞく',
    '9章 どうし-1',
    '10章 たべもの',
    '11章 しぜん-2',
    '12章 どうし-2',
    '13章 町',
    '14章 時間',
    '15章 けいようし',
  ];

  const filteredKanji = useMemo(() => {
    return kanjiMasterN5.filter(k => {
      const matchesCategory =
        selectedCategory === 'Semua Bab' || k.category.startsWith(selectedCategory.split(' ')[0]);
      const matchesSearch =
        k.kanji.includes(searchQuery) ||
        k.meaningId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        k.meaningEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        k.onyomi.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
        k.kunyomi.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesCategory || !matchesSearch) return false;
      if (statusFilter === 'mastered') return masteredKanji.includes(k.id);
      if (statusFilter === 'unmastered') return !masteredKanji.includes(k.id);
      if (statusFilter === 'bookmarked') return bookmarkedKanji.includes(k.id);
      return true;
    });
  }, [selectedCategory, searchQuery, statusFilter, masteredKanji, bookmarkedKanji]);

  const handlePlaySound = (text: string) => {
    playJapaneseAudio(text, 0.85);
  };

  // Flashcard handlers
  const safeFlashcardIndex = filteredKanji.length > 0 ? flashcardIndex % filteredKanji.length : 0;
  const currentFlashcard = filteredKanji[safeFlashcardIndex] || kanjiMasterN5[0];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % Math.max(1, filteredKanji.length));
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(
      prev => (prev - 1 + Math.max(1, filteredKanji.length)) % Math.max(1, filteredKanji.length)
    );
  };

  // Memoized Quiz Question & Options so they never reshuffle on click
  const quizPool = filteredKanji.length >= 4 ? filteredKanji : kanjiMasterN5;
  const currentQuizKanji = quizPool[quizIndex % quizPool.length] || kanjiMasterN5[0];

  const quizOptions = useMemo(() => {
    const others = kanjiMasterN5.filter(k => k.id !== currentQuizKanji.id);
    // Deterministic pseudo-shuffle based on quizIndex + kanji id
    const seed = quizIndex * 17 + currentQuizKanji.chapter * 31;
    const picked: string[] = [];
    for (let i = 0; i < others.length && picked.length < 3; i++) {
      const candidate = others[(seed + i * 23) % others.length].meaningId;
      if (!picked.includes(candidate) && candidate !== currentQuizKanji.meaningId) {
        picked.push(candidate);
      }
    }
    const all = [currentQuizKanji.meaningId, ...picked];
    // Rotate options deterministically
    const offset = (quizIndex * 3) % all.length;
    return [...all.slice(offset), ...all.slice(0, offset)];
  }, [quizIndex, currentQuizKanji]);

  const handleQuizAnswer = (idx: number) => {
    if (quizAnswered) return;
    setSelectedQuizOption(idx);
    setQuizAnswered(true);
    setQuizTotalAnswered(prev => prev + 1);
    if (quizOptions[idx] === currentQuizKanji.meaningId) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setQuizAnswered(false);
    setSelectedQuizOption(null);
    setQuizIndex(prev => prev + 1);
  };

  // Current chapter exercise
  const currentChapterExercise =
    kanjiExercisesByChapter.find(e => e.chapter === selectedExerciseChapter) ||
    kanjiExercisesByChapter[0];

  const toggleYomiReveal = (index: number) => {
    setRevealedYomiAnswers(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleKakiReveal = (index: number) => {
    setRevealedKakiAnswers(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Helper to extract Kanji characters from an answer string so user can practice each character on the masume canvas
  const extractPracticeChars = (answerStr: string): string[] => {
    const chars = Array.from(answerStr).filter(ch => ch.trim() !== '');
    return chars.length > 0 ? chars : ['一'];
  };

  const findKanjiDataByChar = (char: string): KanjiItem | undefined => {
    return kanjiMasterN5.find(k => k.kanji === char);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
              <span>
                <FuriganaText text="Kanji Master N5 (漢字マスターN5)" floatingOnly />
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <FuriganaText
                  text="Arc Academy (アークアカデミー) 編著 · 三修社"
                  floatingOnly
                />
              </span>
              <span aria-hidden="true">·</span>
              <span>118 Kanji (15 Bab Tematik)</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-emerald-700 tabular-nums">
                {masteredKanji.length} / {kanjiMasterN5.length} Dikuasai
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Kurikulum Resmi Kanji Master N5 (Arc Academy)
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              Materi autentik buku <em>Kanji Master N5</em> oleh Arc Academy. Dilengkapi 15 bab tematik,
              118 karakter kanji, Onyomi &amp; Kunyomi, Jukugo, kanvas coretan 4 kuadran (<em>masume</em>),
              serta latihan bab asli (ふくしゅう：よみましょう, かきましょう &amp; クイズ).
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start lg:self-center shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'grid'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Daftar Kanji (118)
            </button>
            <button
              type="button"
              onClick={() => setViewMode('exercise')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 ${
                viewMode === 'exercise'
                  ? 'bg-white text-rose-700 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-rose-600" />
              <span>Latihan Bab (ふくしゅう)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('flashcard');
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'flashcard'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Flashcard
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode('quiz');
                setQuizAnswered(false);
                setSelectedQuizOption(null);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                viewMode === 'quiz'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Kuis Cepat
            </button>
          </div>
        </div>

        {/* Filter Toolbar (Visible in Grid & Flashcard Mode) */}
        {(viewMode === 'grid' || viewMode === 'flashcard') && (
          <div className="mt-5 pt-4 border-t border-stone-100 space-y-3">
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Cari kanji, arti, onyomi, kunyomi..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-rose-400 focus:bg-white"
                />
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1 text-xs overflow-x-auto pb-1 sm:pb-0">
                <button
                  type="button"
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                    statusFilter === 'all'
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  Semua ({kanjiMasterN5.length})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('mastered')}
                  className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                    statusFilter === 'mastered'
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  Dikuasai ({masteredKanji.length})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('unmastered')}
                  className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                    statusFilter === 'unmastered'
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  Belum Hafal ({kanjiMasterN5.length - masteredKanji.length})
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter('bookmarked')}
                  className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                    statusFilter === 'bookmarked'
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  Ditandai ({bookmarkedKanji.length})
                </button>
              </div>
            </div>

            {/* Chapter Ribbon 1章 - 15章 */}
            <div className="w-full flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {chaptersList.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setFlashcardIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODE 1: GRID KANJI (118 KARAKTER) */}
      {viewMode === 'grid' && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredKanji.map(k => {
              const isMastered = masteredKanji.includes(k.id);
              const isBookmarked = bookmarkedKanji.includes(k.id);

              return (
                <div
                  key={k.id}
                  onClick={() => setSelectedKanji(k)}
                  className={`group relative bg-white rounded-xl border p-4 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-xs flex flex-col items-center justify-between text-center ${
                    isMastered
                      ? 'border-emerald-300 bg-emerald-50/20'
                      : 'border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {/* Top Metadata Row */}
                  <div className="w-full flex items-center justify-between text-[11px] text-stone-500">
                    <span className="font-mono text-[10px] text-stone-500">
                      {k.category.split(' ')[0]} · {k.strokes}画
                    </span>
                    <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => toggleBookmarkKanji(k.id)}
                        className={`p-1 rounded transition-colors ${
                          isBookmarked
                            ? 'text-amber-500 hover:text-amber-600'
                            : 'text-stone-300 hover:text-stone-500'
                        }`}
                        title="Bookmark Kanji"
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleMasteredKanji(k.id)}
                        className={`p-1 rounded transition-colors ${
                          isMastered
                            ? 'text-emerald-600 hover:text-emerald-700'
                            : 'text-stone-300 hover:text-stone-500'
                        }`}
                        title={isMastered ? 'Sudah Dikuasai' : 'Tandai Dikuasai'}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Big Kanji Character */}
                  <div className="my-2 font-kanji text-4xl sm:text-5xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                    {k.kanji}
                  </div>

                  {/* Meaning & Readings (Onyomi & Kunyomi) */}
                  <div className="w-full space-y-1">
                    <div className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                      {k.meaningId}
                    </div>

                    <div className="text-[10px] text-stone-500 font-jp truncate">
                      <span className="text-stone-400">音:</span>{' '}
                      {k.onyomi.length > 0 ? k.onyomi.join('・') : '-'}
                    </div>
                    <div className="text-[10px] text-stone-600 font-jp truncate">
                      <span className="text-stone-400">訓:</span>{' '}
                      {k.kunyomi.length > 0 ? k.kunyomi.join('・') : '-'}
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-stone-100 w-full text-[10px] text-stone-500 flex items-center justify-center gap-1 group-hover:text-rose-600 font-medium">
                    <PenTool className="w-3 h-3" />
                    <span>Kanvas &amp; Detail</span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredKanji.length === 0 && (
            <div className="bg-white rounded-xl border border-stone-200 p-10 text-center space-y-2">
              <div className="text-sm font-semibold text-stone-800">
                Tidak ada karakter kanji yang sesuai filter
              </div>
              <p className="text-xs text-stone-500">
                Coba ubah kata kunci pencarian atau pilih filter &quot;Semua&quot;.
              </p>
            </div>
          )}
        </>
      )}

      {/* MODE 2: LATIHAN BAB AUTENTIK DARI BUKU (ふくしゅう & クイズ) */}
      {viewMode === 'exercise' && (
        <div className="space-y-6">
          {/* Chapter Selector Ribbon */}
          <div className="bg-white rounded-xl border border-stone-200 p-4">
            <div className="text-xs font-semibold text-stone-500 mb-2.5 uppercase tracking-wider">
              Pilih Bab Latihan Arc Academy (1章 – 15章):
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {kanjiExercisesByChapter.map(ex => {
                const chapterKanjiChars = kanjiMasterN5
                  .filter(k => k.chapter === ex.chapter)
                  .map(k => k.kanji)
                  .join(' ');
                return (
                  <button
                    key={ex.chapter}
                    type="button"
                    onClick={() => {
                      setSelectedExerciseChapter(ex.chapter);
                      setRevealedYomiAnswers({});
                      setYomiUserInputs({});
                      setRevealedKakiAnswers({});
                      setActiveKakiCanvasIdx(0);
                      setActiveKakiCharIdx(0);
                      setChapterQuizAnswered(false);
                      setSelectedChapterQuizOption(null);
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      selectedExerciseChapter === ex.chapter
                        ? 'border-rose-500 bg-rose-50/70 text-rose-950 font-semibold shadow-2xs'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="text-xs font-bold">
                      {ex.chapterTitle.split(' ')[0]} {ex.chapterTitle.split(' ')[1]}
                    </div>
                    <div className="text-[10px] text-stone-500 font-kanji truncate mt-0.5">
                      {chapterKanjiChars}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapter Content Details */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-8">
            <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-bold text-rose-700">Bab {currentChapterExercise.chapter}</span>
                  <span aria-hidden="true">·</span>
                  <span>ふくしゅう &amp; クイズ Resmi Arc Academy</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900 mt-0.5">
                  {currentChapterExercise.chapterTitle}
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Latihan resmi dari buku <em>Kanji Master N5</em> untuk menguji penguasaan membaca
                  (よみましょう), menulis dengan kanvas (かきましょう), dan kuis bab (クイズ).
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const allYomi: Record<number, boolean> = {};
                    currentChapterExercise.fukushuYomi.forEach((_, i) => {
                      allYomi[i] = true;
                    });
                    setRevealedYomiAnswers(allYomi);
                    const allKaki: Record<number, boolean> = {};
                    currentChapterExercise.fukushuKaki.forEach((_, i) => {
                      allKaki[i] = true;
                    });
                    setRevealedKakiAnswers(allKaki);
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Tampilkan Semua Jawaban</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRevealedYomiAnswers({});
                    setYomiUserInputs({});
                    setRevealedKakiAnswers({});
                    setChapterQuizAnswered(false);
                    setSelectedChapterQuizOption(null);
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Bagian 1: ふくしゅう - かんじを よみましょう (Latihan Membaca) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span>ふくしゅう：かんじを よみましょう (Latihan Membaca)</span>
                </h3>
                <span className="text-xs text-stone-500">
                  Ketik cara baca hiragana atau klik Intip Jawaban &amp; Audio
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentChapterExercise.fukushuYomi.map((item, idx) => {
                  const isRevealed = revealedYomiAnswers[idx];
                  const userTyped = (yomiUserInputs[idx] || '').trim();
                  const isTypedMatch = userTyped.length > 0 && userTyped === item.answer;

                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300 transition-all flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm text-stone-900 font-jp leading-relaxed">
                          <span className="text-xs font-mono text-stone-400 mr-2">({idx + 1})</span>
                          {item.q.split(item.kanji).map((part, pIdx, arr) => (
                            <React.Fragment key={pIdx}>
                              {part}
                              {pIdx < arr.length - 1 && (
                                <strong className="text-rose-700 underline decoration-rose-400 decoration-2 underline-offset-4 font-bold">
                                  {item.kanji}
                                </strong>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => handlePlaySound(item.q)}
                          className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-500 hover:text-stone-800 shrink-0"
                          title="Dengarkan kalimat & cara baca"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Optional interactive reading check + reveal */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100">
                        <div className="flex items-center gap-1.5 flex-1 min-w-[160px]">
                          <input
                            type="text"
                            value={yomiUserInputs[idx] || ''}
                            onChange={e =>
                              setYomiUserInputs(prev => ({ ...prev, [idx]: e.target.value }))
                            }
                            placeholder={`Ketik bacaan ${item.kanji}...`}
                            className={`w-full px-2.5 py-1 text-xs font-jp rounded-md border focus:outline-hidden ${
                              isTypedMatch
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                : 'bg-white border-stone-200 text-stone-800 focus:border-rose-400'
                            }`}
                          />
                          {isTypedMatch && (
                            <span className="text-xs font-bold text-emerald-700 shrink-0">✓ Benar</span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {isRevealed && (
                            <button
                              type="button"
                              onClick={() => handlePlaySound(item.answer)}
                              className="font-jp text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 flex items-center gap-1"
                              title="Putar suara jawaban"
                            >
                              <span>{item.answer}</span>
                              <Volume2 className="w-3 h-3" />
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => toggleYomiReveal(idx)}
                            className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 whitespace-nowrap shrink-0"
                          >
                            {isRevealed ? (
                              <EyeOff className="w-3.5 h-3.5" />
                            ) : (
                              <Eye className="w-3.5 h-3.5" />
                            )}
                            <span>{isRevealed ? 'Tutup' : 'Intip Bacaan'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bagian 2: ふくしゅう - かんじを かきましょう (Latihan Menulis dengan Kanvas Langsung) */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span>ふくしゅう：かんじを かきましょう (Latihan Menulis &amp; Kanvas Langsung)</span>
                </h3>
                <span className="text-xs text-stone-500">
                  Pilih soal di kiri untuk berlatih menulis kanjinya langsung di Kanvas Coretan (書道キャンバス)
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left 7 cols: List of Kaki sentences */}
                <div className="lg:col-span-7 space-y-2.5">
                  {currentChapterExercise.fukushuKaki.map((item, idx) => {
                    const isRevealed = revealedKakiAnswers[idx];
                    const isSelectedForCanvas = activeKakiCanvasIdx === idx;

                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2.5 ${
                          isSelectedForCanvas
                            ? 'border-indigo-400 bg-indigo-50/30 shadow-2xs'
                            : 'border-stone-200 bg-stone-50/50 hover:bg-white'
                        }`}
                      >
                        <div className="text-sm text-stone-900 font-jp leading-relaxed">
                          <span className="text-xs font-mono text-stone-400 mr-2">({idx + 1})</span>
                          {item.q.split(item.kana).map((part, pIdx, arr) => (
                            <React.Fragment key={pIdx}>
                              {part}
                              {pIdx < arr.length - 1 && (
                                <span className="underline decoration-indigo-500 decoration-2 underline-offset-4 font-bold text-indigo-900">
                                  {item.kana}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200/60">
                          <div className="text-xs flex items-center gap-2">
                            <span className="text-stone-500">Jawaban Kanji:</span>
                            {isRevealed ? (
                              <span className="font-kanji font-bold text-base text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                                {item.answer}
                              </span>
                            ) : (
                              <span className="text-stone-400 italic">Tersembunyi</span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setActiveKakiCanvasIdx(idx);
                                setActiveKakiCharIdx(0);
                              }}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                                isSelectedForCanvas
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                              }`}
                            >
                              <PenTool className="w-3 h-3" />
                              <span>{isSelectedForCanvas ? 'Sedang Dilatih' : 'Tulis di Kanvas'}</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => toggleKakiReveal(idx)}
                              className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 whitespace-nowrap shrink-0"
                            >
                              {isRevealed ? (
                                <EyeOff className="w-3.5 h-3.5" />
                              ) : (
                                <Eye className="w-3.5 h-3.5" />
                              )}
                              <span>{isRevealed ? 'Tutup' : 'Cek Kanji'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right 5 cols: Direct Interactive KanjiCanvas for the active Kaki question */}
                <div className="lg:col-span-5 bg-stone-50 rounded-xl border border-stone-200 p-4 flex flex-col items-center">
                  {(() => {
                    const activeItem =
                      currentChapterExercise.fukushuKaki[activeKakiCanvasIdx ?? 0] ||
                      currentChapterExercise.fukushuKaki[0];
                    const chars = extractPracticeChars(activeItem.answer);
                    const safeCharIdx = activeKakiCharIdx < chars.length ? activeKakiCharIdx : 0;
                    const targetChar = chars[safeCharIdx];
                    const matchedKanjiInfo = findKanjiDataByChar(targetChar);

                    return (
                      <div className="w-full flex flex-col items-center space-y-3">
                        <div className="w-full flex items-center justify-between border-b border-stone-200 pb-2.5">
                          <div>
                            <div className="text-[11px] font-semibold text-indigo-700">
                              Kanvas Latihan Menulis Soal #{(activeKakiCanvasIdx ?? 0) + 1}
                            </div>
                            <div className="text-xs text-stone-700 font-jp mt-0.5">
                              Target kata: <strong>「{activeItem.kana}」</strong> →{' '}
                              <span className="font-kanji font-bold text-stone-900">
                                {activeItem.answer}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePlaySound(activeItem.kana)}
                            className="p-1.5 rounded-lg bg-white border border-stone-200 text-stone-600 hover:text-stone-900"
                            title="Dengarkan Pelafalan"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Character Selector if answer has multiple characters */}
                        {chars.length > 1 && (
                          <div className="flex items-center gap-1.5 w-full justify-center">
                            <span className="text-[11px] text-stone-500">Pilih karakter:</span>
                            {chars.map((ch, cIdx) => (
                              <button
                                key={cIdx}
                                type="button"
                                onClick={() => setActiveKakiCharIdx(cIdx)}
                                className={`w-8 h-8 rounded-lg font-kanji text-base font-bold border transition-colors ${
                                  safeCharIdx === cIdx
                                    ? 'bg-stone-900 text-white border-stone-900'
                                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                                }`}
                              >
                                {ch}
                              </button>
                            ))}
                          </div>
                        )}

                        <KanjiCanvas
                          kanji={targetChar}
                          strokes={matchedKanjiInfo?.strokes}
                          strokeOrderGuide={matchedKanjiInfo?.strokeOrderGuide}
                        />
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Bagian 3: クイズ (Kuis Karakteristik Bab Buku) */}
            <div className="pt-4 border-t border-stone-100 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span>クイズ (Kuis Pemahaman Bab {currentChapterExercise.chapter})</span>
                </h3>
                <span className="text-xs text-stone-500 font-medium">
                  {currentChapterExercise.quizType}
                </span>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
                <div className="text-sm font-semibold text-stone-900">
                  {currentChapterExercise.quizQuestion}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(currentChapterExercise.quizOptions || []).map((opt, optIdx) => {
                    const isChosen = selectedChapterQuizOption === optIdx;
                    const isCorrect = opt === currentChapterExercise.quizAnswer;

                    let btnStyle = 'bg-white border-stone-200 text-stone-800 hover:bg-stone-100';
                    if (chapterQuizAnswered) {
                      if (isCorrect)
                        btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                      else if (isChosen) btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={chapterQuizAnswered}
                        onClick={() => {
                          setSelectedChapterQuizOption(optIdx);
                          setChapterQuizAnswered(true);
                        }}
                        className={`p-3 rounded-lg border text-xs sm:text-sm text-left transition-colors flex items-center justify-between ${btnStyle}`}
                      >
                        <span className="font-jp">{opt}</span>
                        {chapterQuizAnswered && isCorrect && (
                          <span className="text-emerald-600 font-bold">✓ Benar</span>
                        )}
                        {chapterQuizAnswered && isChosen && !isCorrect && (
                          <span className="text-rose-500 font-bold">✗ Salah</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {chapterQuizAnswered && (
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                    <div>
                      <strong>Jawaban Benar:</strong> {currentChapterExercise.quizAnswer}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setChapterQuizAnswered(false);
                        setSelectedChapterQuizOption(null);
                      }}
                      className="text-emerald-700 underline font-semibold"
                    >
                      Ulangi Kuis
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: FLASHCARD BOLAK-BALIK */}
      {viewMode === 'flashcard' && filteredKanji.length > 0 && (
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-500 px-1">
            <span>
              Kartu <strong className="tabular-nums">{safeFlashcardIndex + 1}</strong> dari{' '}
              <strong className="tabular-nums">{filteredKanji.length}</strong>
            </span>
            <span>Ketuk kartu untuk membalik (Depan / Belakang)</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[340px] bg-white rounded-2xl border border-stone-200 p-8 shadow-xs cursor-pointer select-none flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-stone-300"
          >
            {!isFlipped ? (
              <div className="space-y-4">
                <div className="text-xs text-stone-400 font-medium">
                  Bagaimana cara baca &amp; arti dari kanji ini?
                </div>
                <div className="font-kanji text-8xl font-bold text-stone-900 tracking-wider py-2">
                  {currentFlashcard.kanji}
                </div>
                <div className="text-xs text-stone-500">
                  {currentFlashcard.strokes} Coretan (画) · {currentFlashcard.category}
                </div>
              </div>
            ) : (
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-center gap-3">
                  <div className="font-kanji text-4xl font-bold text-rose-600">
                    {currentFlashcard.kanji}
                  </div>
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      const readingToPlay =
                        currentFlashcard.kunyomi[0] ||
                        currentFlashcard.onyomi[0] ||
                        currentFlashcard.kanji;
                      handlePlaySound(readingToPlay.replace('・', ''));
                    }}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700"
                    title="Putar Suara Kanji"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-lg font-bold text-stone-900">{currentFlashcard.meaningId}</div>

                <div className="p-3 bg-stone-50 rounded-lg text-xs space-y-1 font-jp text-left border border-stone-100">
                  <div>
                    <span className="text-stone-400 mr-2">Onyomi (音読み):</span>
                    <span className="font-semibold text-stone-800">
                      {currentFlashcard.onyomi.length > 0
                        ? currentFlashcard.onyomi.join(' · ')
                        : '-'}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 mr-2">Kunyomi (訓読み):</span>
                    <span className="font-semibold text-stone-800">
                      {currentFlashcard.kunyomi.length > 0
                        ? currentFlashcard.kunyomi.join(' · ')
                        : '-'}
                    </span>
                  </div>
                </div>

                {currentFlashcard.compounds.length > 0 && (
                  <div className="text-xs text-stone-600 text-left pt-1">
                    <span className="text-stone-400">Contoh Jukugo: </span>
                    <strong className="font-kanji text-stone-900">
                      {currentFlashcard.compounds[0].word}
                    </strong>{' '}
                    ({currentFlashcard.compounds[0].reading}) ={' '}
                    {currentFlashcard.compounds[0].meaning}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Flashcard Nav Buttons */}
          <div className="flex items-center justify-between gap-2.5">
            <button
              type="button"
              onClick={handlePrevFlashcard}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-xs font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              type="button"
              onClick={() => toggleMasteredKanji(currentFlashcard.id)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
                masteredKanji.includes(currentFlashcard.id)
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {masteredKanji.includes(currentFlashcard.id) ? '✓ Sudah Hafal' : 'Tandai Hafal'}
            </button>

            <button
              type="button"
              onClick={handleNextFlashcard}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-xs font-semibold"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MODE 4: KUIS CEPAT */}
      {viewMode === 'quiz' && (
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>Kuis Cepat Kanji N5 · Soal #{quizIndex + 1}</span>
            <span className="font-mono font-bold text-rose-600 tabular-nums">
              Skor: {quizScore} / {quizTotalAnswered}
            </span>
          </div>

          <div className="text-center py-5 space-y-2">
            <div className="text-xs text-stone-400">
              Apa arti bahasa Indonesia dari huruf kanji berikut?
            </div>
            <div className="font-kanji text-7xl font-bold text-stone-900 py-1">
              {currentQuizKanji.kanji}
            </div>
            <div className="text-xs text-stone-500 font-jp">
              {currentQuizKanji.onyomi.concat(currentQuizKanji.kunyomi).join(' · ')}
            </div>
            <div className="text-[11px] text-stone-400">
              {currentQuizKanji.category} · {currentQuizKanji.strokes} 画
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {quizOptions.map((opt, idx) => {
              const isChosen = selectedQuizOption === idx;
              const isCorrect = opt === currentQuizKanji.meaningId;

              let style = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
              if (quizAnswered) {
                if (isCorrect)
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                else if (isChosen) style = 'bg-rose-50 border-rose-300 text-rose-900';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={quizAnswered}
                  onClick={() => handleQuizAnswer(idx)}
                  className={`w-full p-3 rounded-xl border text-sm text-left transition-colors flex items-center justify-between ${style}`}
                >
                  <span>{opt}</span>
                  {quizAnswered && isCorrect && (
                    <span className="text-emerald-600 font-bold text-xs">✓ Benar</span>
                  )}
                  {quizAnswered && isChosen && !isCorrect && (
                    <span className="text-rose-500 font-bold text-xs">✗ Salah</span>
                  )}
                </button>
              );
            })}
          </div>

          {quizAnswered && (
            <div className="space-y-3">
              {currentQuizKanji.compounds.length > 0 && (
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
                  <span className="font-semibold text-stone-800">Contoh Kata: </span>
                  <span className="font-jp">
                    {currentQuizKanji.compounds
                      .slice(0, 2)
                      .map(c => `${c.word} (${c.reading}: ${c.meaning})`)
                      .join(' · ')}
                  </span>
                </div>
              )}
              <button
                type="button"
                onClick={handleNextQuiz}
                className="w-full py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Lanjut ke Soal Berikutnya →
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODAL DETAIL KANJI & INTERACTIVE STROKE CANVAS (書道キャンバス) */}
      {selectedKanji && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 space-y-6 my-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-stone-100 pb-4 gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
                  <span className="font-semibold text-rose-700">{selectedKanji.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedKanji.strokes} Coretan (画)</span>
                  <span aria-hidden="true">·</span>
                  <span>Arc Academy N5</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900">
                  {selectedKanji.kanji} — {selectedKanji.meaningId}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => toggleBookmarkKanji(selectedKanji.id)}
                  className={`p-2 rounded-lg border transition-colors ${
                    bookmarkedKanji.includes(selectedKanji.id)
                      ? 'bg-amber-50 border-amber-300 text-amber-600'
                      : 'bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100'
                  }`}
                  title="Simpan ke Bookmark"
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>

                <button
                  type="button"
                  onClick={() => toggleMasteredKanji(selectedKanji.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    masteredKanji.includes(selectedKanji.id)
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {masteredKanji.includes(selectedKanji.id) ? 'Sudah Dikuasai' : 'Tandai Hafal'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedKanji(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Content: Split into Canvas & Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left Column: Interactive Stroke Canvas (書道キャンバス) */}
              <div className="flex flex-col items-center p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <div className="text-xs font-semibold text-stone-700 mb-2 flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-rose-600" />
                  <span>Kanvas Coretan Digital (書道キャンバス)</span>
                </div>
                <KanjiCanvas
                  kanji={selectedKanji.kanji}
                  strokes={selectedKanji.strokes}
                  strokeOrderGuide={selectedKanji.strokeOrderGuide}
                />
              </div>

              {/* Right Column: Readings & Compounds */}
              <div className="space-y-4">
                {/* Readings */}
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2.5">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Cara Baca (読み方)
                  </div>

                  {/* Onyomi */}
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="text-stone-500 font-medium mr-2">Onyomi (音読み):</span>
                      <span className="font-jp font-semibold text-stone-900">
                        {selectedKanji.onyomi.length > 0 ? selectedKanji.onyomi.join('・') : '-'}
                      </span>
                    </div>
                    {selectedKanji.onyomi.length > 0 && (
                      <button
                        type="button"
                        onClick={() => handlePlaySound(selectedKanji.onyomi[0])}
                        className="p-1 text-stone-400 hover:text-stone-700"
                        title="Dengarkan Onyomi"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Kunyomi */}
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="text-stone-500 font-medium mr-2">Kunyomi (訓読み):</span>
                      <span className="font-jp font-semibold text-stone-900">
                        {selectedKanji.kunyomi.length > 0 ? selectedKanji.kunyomi.join('・') : '-'}
                      </span>
                    </div>
                    {selectedKanji.kunyomi.length > 0 && (
                      <button
                        type="button"
                        onClick={() => handlePlaySound(selectedKanji.kunyomi[0].replace('・', ''))}
                        className="p-1 text-stone-400 hover:text-stone-700"
                        title="Dengarkan Kunyomi"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Compounds (Jukugo) */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Kata Majemuk (熟語 - Jukugo)
                  </div>
                  <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                    {selectedKanji.compounds.map((cp, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-2 bg-white rounded-lg border border-stone-200 text-xs flex items-center justify-between gap-2"
                      >
                        <div>
                          <span className="font-kanji font-bold text-stone-900 mr-1.5">
                            {cp.word}
                          </span>
                          <span className="font-jp text-stone-500 font-normal mr-2">
                            ({cp.reading})
                          </span>
                          <span className="text-stone-700">{cp.meaning}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePlaySound(cp.reading)}
                          className="p-1 text-stone-400 hover:text-stone-700 shrink-0"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Sentence */}
                {selectedKanji.sampleSentence && (
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                    <div className="text-[11px] font-semibold text-stone-500">
                      Contoh Penggunaan Kalimat:
                    </div>
                    <div className="font-jp font-medium text-stone-900 flex items-center justify-between gap-2">
                      <span>{selectedKanji.sampleSentence.jp}</span>
                      <button
                        type="button"
                        onClick={() => handlePlaySound(selectedKanji.sampleSentence!.reading)}
                        className="text-stone-400 hover:text-stone-700 shrink-0"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-stone-500 text-[11px] font-jp">
                      {selectedKanji.sampleSentence.reading}
                    </div>
                    <div className="text-stone-700 text-[11px]">
                      {selectedKanji.sampleSentence.id}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
