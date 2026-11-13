import React, { useState, useMemo } from 'react';
import { MinnaLesson, LessonExercise } from '../types';
import { minnaLessons } from '../data/minnaLessons';
import { buildChapterExercises } from '../data/minnaExercises';
import { playJapaneseAudio } from '../utils/audio';
import { FuriganaText } from './FuriganaText';
import {
  Volume2,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Search,
  Bookmark,
  Layers,
  BookMarked,
  MessageSquare,
  HelpCircle,
  Check,
  X,
  RotateCcw,
  Eye,
  EyeOff,
} from 'lucide-react';

interface MinnaLessonsViewProps {
  completedChapters: number[];
  toggleChapterCompleted: (chapter: number) => void;
  bookmarkedVocab: string[];
  toggleBookmarkVocab: (id: string) => void;
  showFurigana: boolean;
  setShowFurigana: (v: boolean) => void;
  showRomaji: boolean;
  setShowRomaji: (v: boolean) => void;
}

export const MinnaLessonsView: React.FC<MinnaLessonsViewProps> = ({
  completedChapters,
  toggleChapterCompleted,
  bookmarkedVocab,
  toggleBookmarkVocab,
  showFurigana,
  setShowFurigana,
  showRomaji,
  setShowRomaji,
}) => {
  const [selectedChapterNum, setSelectedChapterNum] = useState<number>(1);
  const [activeSubTab, setActiveSubTab] = useState<'vocab' | 'bunkei' | 'kaiwa' | 'exercises'>('vocab');
  const [vocabSearch, setVocabSearch] = useState('');
  const [vocabFilterType, setVocabFilterType] = useState<string>('all');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [showKaiwaTranslation, setShowKaiwaTranslation] = useState<boolean>(true);

  // Exercise state
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [sentenceOrderPicks, setSentenceOrderPicks] = useState<Record<string, string[]>>({});
  const [exerciseChecked, setExerciseChecked] = useState<Record<string, boolean>>({});
  const [showIntroModal, setShowIntroModal] = useState<boolean>(false);

  const currentLesson: MinnaLesson =
    minnaLessons.find(l => l.chapter === selectedChapterNum) || minnaLessons[0];
  const isCompleted = completedChapters.includes(currentLesson.chapter);

  // Build 10-12 comprehensive chapter exercises across 4 N5 exercise categories
  const chapterExercises: LessonExercise[] = useMemo(() => {
    return buildChapterExercises(currentLesson);
  }, [currentLesson]);

  const handlePlayAudio = (text: string, id: string) => {
    setPlayingAudioId(id);
    playJapaneseAudio(
      text,
      0.85,
      () => setPlayingAudioId(id),
      () => setPlayingAudioId(null)
    );
  };

  const handlePlayAllKaiwa = () => {
    const fullText = currentLesson.kaiwa.dialogue.map(d => d.kana).join('。 ');
    handlePlayAudio(fullText, 'kaiwa-all');
  };

  const filteredVocab = currentLesson.vocab.filter(item => {
    const matchesSearch =
      item.kana.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      (item.kanji && item.kanji.includes(vocabSearch)) ||
      item.romaji.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      item.indonesian.toLowerCase().includes(vocabSearch.toLowerCase());

    if (!matchesSearch) return false;
    if (vocabFilterType === 'all') return true;
    if (vocabFilterType === 'bookmarked') return bookmarkedVocab.includes(item.id);
    if (vocabFilterType === 'verb') return item.wordType.includes('kerja');
    if (vocabFilterType === 'noun') return item.wordType.includes('benda');
    if (vocabFilterType === 'adjective') return item.wordType.includes('sifat');
    return true;
  });

  const handleSelectAnswer = (exId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exId]: answer }));
    setExerciseChecked(prev => ({ ...prev, [exId]: true }));
  };

  const handleToggleSentenceWord = (exId: string, word: string) => {
    if (exerciseChecked[exId]) return;
    setSentenceOrderPicks(prev => {
      const current = prev[exId] || [];
      if (current.includes(word)) {
        return { ...prev, [exId]: current.filter(w => w !== word) };
      }
      return { ...prev, [exId]: [...current, word] };
    });
  };

  const handleCheckSentenceOrder = (ex: LessonExercise) => {
    const picked = sentenceOrderPicks[ex.id] || [];
    setUserAnswers(prev => ({ ...prev, [ex.id]: picked }));
    setExerciseChecked(prev => ({ ...prev, [ex.id]: true }));
  };

  const handleResetChapterExercises = () => {
    const nextAnswers = { ...userAnswers };
    const nextChecked = { ...exerciseChecked };
    const nextPicks = { ...sentenceOrderPicks };
    chapterExercises.forEach(ex => {
      delete nextAnswers[ex.id];
      delete nextChecked[ex.id];
      delete nextPicks[ex.id];
    });
    setUserAnswers(nextAnswers);
    setExerciseChecked(nextChecked);
    setSentenceOrderPicks(nextPicks);
  };

  const isExerciseCorrect = (ex: LessonExercise): boolean => {
    const ans = userAnswers[ex.id];
    if (Array.isArray(ex.correctAnswer)) {
      if (!Array.isArray(ans)) return false;
      return (
        ans.length === ex.correctAnswer.length &&
        ans.every((val, idx) => val === (ex.correctAnswer as string[])[idx])
      );
    }
    return ans === ex.correctAnswer;
  };

  const answeredInChapterCount = chapterExercises.filter(ex => exerciseChecked[ex.id]).length;
  const correctInChapterCount = chapterExercises.filter(
    ex => exerciseChecked[ex.id] && isExerciseCorrect(ex)
  ).length;

  return (
    <div className="space-y-6">
      {/* Chapter Selection Bar & Overview */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
              <span>
                <FuriganaText
                  text="Minna no Nihongo Shokyu I (みんなの日本語 初級I)"
                  floatingOnly
                />
              </span>
              <span aria-hidden="true">·</span>
              <span>3A Corporation</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-stone-700 tabular-nums">
                Bab {currentLesson.chapter} dari 25
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              {currentLesson.titleId}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-jp">
              <FuriganaText text={currentLesson.titleJp} floatingOnly />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Show/Hide Furigana Toggle */}
            <button
              type="button"
              onClick={() => setShowFurigana(!showFurigana)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                showFurigana
                  ? 'bg-rose-50 border-rose-200 text-rose-800'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
              title="Saat Furigana disembunyikan, arahkan kursor atau tahan sentuhan pada Kanji untuk melihat popup Furigana"
            >
              {showFurigana ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{showFurigana ? 'Furigana: Tampil' : 'Furigana: Sembunyi'}</span>
            </button>

            {/* Show/Hide Romaji Toggle */}
            <button
              type="button"
              onClick={() => setShowRomaji(!showRomaji)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                showRomaji
                  ? 'bg-stone-900 border-stone-900 text-white'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {showRomaji ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{showRomaji ? 'Romaji: Tampil' : 'Romaji: Sembunyi'}</span>
            </button>

            <button
              type="button"
              onClick={() => toggleChapterCompleted(currentLesson.chapter)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                isCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <CheckCircle
                className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-stone-400'}`}
              />
              <span>{isCompleted ? 'Sudah Dikuasai' : 'Tandai Selesai'}</span>
            </button>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSelectedChapterNum(prev => Math.max(1, prev - 1))}
                disabled={selectedChapterNum === 1}
                className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Bab Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedChapterNum(prev => Math.min(25, prev + 1))}
                disabled={selectedChapterNum === 25}
                className="p-2 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Bab Berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Quick Scroll Ribbon */}
        <div className="pt-3">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span className="text-xs text-stone-500 font-medium">
              <FuriganaText text="Navigasi Bab Mandiri (第1課～第25課):" floatingOnly />
            </span>
            <button
              type="button"
              onClick={() => setShowIntroModal(true)}
              className="text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>
                <FuriganaText
                  text="Pengantar Buku (はじめに: 教室のことば・挨拶・数字)"
                  floatingOnly
                />
              </span>
            </button>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {minnaLessons.map(l => {
              const completed = completedChapters.includes(l.chapter);
              const isCurrent = l.chapter === selectedChapterNum;
              return (
                <button
                  key={l.chapter}
                  type="button"
                  onClick={() => setSelectedChapterNum(l.chapter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all tabular-nums ${
                    isCurrent
                      ? 'bg-stone-900 text-white shadow-xs'
                      : completed
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Bab {l.chapter} {completed && '✓'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Description & Key Patterns */}
        <div className="mt-3 p-3.5 bg-stone-50 rounded-lg border border-stone-100 text-xs sm:text-sm text-stone-700">
          <p className="font-medium text-stone-800 mb-1.5">{currentLesson.description}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-600">
            <span className="font-semibold text-rose-700">
              <FuriganaText text="Fokus Pola Kalimat (学習項目):" floatingOnly />
            </span>
            {currentLesson.summaryGrammar.map((g, idx) => (
              <span key={idx}>
                <FuriganaText text={g} floatingOnly />{' '}
                {idx < currentLesson.summaryGrammar.length - 1 ? '·' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lesson Content Tabs */}
      <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/80 rounded-xl max-w-xl">
        <button
          type="button"
          onClick={() => setActiveSubTab('vocab')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'vocab'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Kosakata ({currentLesson.vocab.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('bunkei')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'bunkei'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <BookMarked className="w-3.5 h-3.5" />
          <span>Pola Kalimat ({currentLesson.bunkei.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('kaiwa')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'kaiwa'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>
            <FuriganaText text="Percakapan (会話)" floatingOnly />
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('exercises')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'exercises'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Latihan ({chapterExercises.length})</span>
        </button>
      </div>

      {/* SUB-TAB 1: KOSAKATA (KOTOBA / 単語) */}
      {activeSubTab === 'vocab' && (
        <div className="space-y-4">
          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={vocabSearch}
                onChange={e => setVocabSearch(e.target.value)}
                placeholder="Cari kanji, kana, romaji, arti..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
              />
            </div>

            <div className="flex items-center gap-1 text-xs overflow-x-auto pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setVocabFilterType('all')}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  vocabFilterType === 'all'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Semua
              </button>
              <button
                type="button"
                onClick={() => setVocabFilterType('verb')}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  vocabFilterType === 'verb'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Kata Kerja
              </button>
              <button
                type="button"
                onClick={() => setVocabFilterType('noun')}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  vocabFilterType === 'noun'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Kata Benda
              </button>
              <button
                type="button"
                onClick={() => setVocabFilterType('adjective')}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  vocabFilterType === 'adjective'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Kata Sifat
              </button>
              <button
                type="button"
                onClick={() => setVocabFilterType('bookmarked')}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  vocabFilterType === 'bookmarked'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Hafalan Ditandai
              </button>
            </div>
          </div>

          {/* Vocabulary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredVocab.map(item => {
              const isBookmarked = bookmarkedVocab.includes(item.id);
              const isPlaying = playingAudioId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200 p-4 hover:border-stone-300 transition-shadow hover:shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="py-0.5">
                        {item.kanji ? (
                          <span className="font-kanji text-xl sm:text-2xl font-bold text-stone-900">
                            <FuriganaText
                              text={item.kanji}
                              kana={item.kana}
                              showFurigana={showFurigana}
                            />
                          </span>
                        ) : (
                          <span className="font-jp text-xl font-bold text-stone-900">
                            {item.kana}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(item.kana, item.id)}
                          className={`p-1.5 rounded-md border transition-colors ${
                            isPlaying
                              ? 'bg-rose-100 text-rose-700 border-rose-300'
                              : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                          }`}
                          title="Putar Audio Pelafalan Jepang (ja-JP)"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleBookmarkVocab(item.id)}
                          className={`p-1.5 rounded-md border transition-colors ${
                            isBookmarked
                              ? 'bg-amber-50 text-amber-600 border-amber-300'
                              : 'bg-stone-50 text-stone-400 border-stone-200 hover:text-stone-700'
                          }`}
                          title="Tandai Hafalan / Bookmark"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    {showRomaji && (
                      <div className="text-xs text-stone-400 font-mono mb-2">{item.romaji}</div>
                    )}

                    <div className="text-sm font-semibold text-stone-800">{item.indonesian}</div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="capitalize">{item.wordType}</span>
                    {isBookmarked ? (
                      <span className="text-amber-700 font-medium">✓ Ditandai</span>
                    ) : item.kanji && !showFurigana ? (
                      <span className="text-stone-400">Sentuh/arah ke kanji untuk furigana</span>
                    ) : null}
                  </div>

                  {item.exampleJp && (
                    <div className="mt-2 p-2.5 bg-stone-50 rounded-lg border border-stone-100 text-xs space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-jp text-stone-800">
                          <FuriganaText
                            text={item.exampleJp}
                            kana={item.exampleKana}
                            showFurigana={showFurigana}
                          />
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handlePlayAudio(item.exampleKana || item.exampleJp!, `${item.id}-ex`)
                          }
                          className="text-stone-400 hover:text-stone-700 shrink-0"
                          title="Putar Contoh Kalimat"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {showRomaji && item.exampleRomaji && (
                        <div className="text-[11px] font-mono text-stone-400">
                          {item.exampleRomaji}
                        </div>
                      )}
                      <div className="text-stone-500 text-[11px]">{item.exampleId}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredVocab.length === 0 && (
            <div className="text-center py-12 text-stone-500 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm">
              Tidak ada kosakata yang cocok dengan filter saat ini.
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: POLA KALIMAT (BUNKEI & REIBUN / 文型・例文) */}
      {activeSubTab === 'bunkei' && (
        <div className="space-y-5">
          {currentLesson.bunkei.map((b, idx) => (
            <div
              key={b.id}
              className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4"
            >
              {/* Pattern Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-rose-700">Pola 0{idx + 1}.</span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">{b.title}</h3>
                </div>
                <div className="font-kanji text-sm text-stone-700 font-medium">
                  <FuriganaText text={b.pattern} showFurigana={showFurigana} />
                </div>
              </div>

              {/* Formula & Indonesian Explanation */}
              {b.formula && (
                <div className="p-3 bg-stone-50 rounded-lg text-xs sm:text-sm font-mono text-stone-800 border border-stone-200">
                  <span className="text-stone-500 font-sans mr-2">Rumus Struktur:</span>
                  <span className="font-semibold text-rose-800">{b.formula}</span>
                </div>
              )}

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{b.explanation}</p>

              {/* Reibun (Contoh Kalimat) */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Contoh Kalimat Kontekstual (例文 - Reibun):
                </div>

                {b.reibun.map((r, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-lg border border-stone-200/80 bg-stone-50/70 hover:bg-stone-50 transition-colors flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="font-jp text-sm sm:text-base font-medium text-stone-900 py-0.5">
                        <FuriganaText
                          text={r.japanese}
                          kana={r.kana}
                          showFurigana={showFurigana}
                        />
                      </div>
                      {showRomaji && (
                        <div className="text-xs text-stone-400 font-mono">{r.romaji}</div>
                      )}
                      <div className="text-xs sm:text-sm text-stone-800 font-medium pt-0.5">
                        {r.indonesian}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handlePlayAudio(r.kana, `${b.id}-${rIdx}`)}
                      className={`p-2 rounded-lg border transition-colors shrink-0 ${
                        playingAudioId === `${b.id}-${rIdx}`
                          ? 'bg-rose-100 text-rose-700 border-rose-300'
                          : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                      }`}
                      title="Dengarkan Suara Pelafalan Contoh"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 3: PERCAKAPAN (KAIWA / 会話) */}
      {activeSubTab === 'kaiwa' && (
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>Percakapan Situasional Resmi (会話)</span>
                <span aria-hidden="true">·</span>
                <span>Bab {currentLesson.chapter}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                {currentLesson.kaiwa.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Situasi: {currentLesson.kaiwa.situation}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setShowKaiwaTranslation(!showKaiwaTranslation)}
                className="px-3 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                {showKaiwaTranslation ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
                <span>{showKaiwaTranslation ? 'Sembunyikan Arti' : 'Tampilkan Arti'}</span>
              </button>

              <button
                type="button"
                onClick={handlePlayAllKaiwa}
                className="px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Putar Seluruh Dialog</span>
              </button>
            </div>
          </div>

          {/* Dialogue Lines */}
          <div className="space-y-3.5">
            {currentLesson.kaiwa.dialogue.map((line, idx) => {
              const isPlaying = playingAudioId === `kaiwa-${idx}`;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-800 font-bold flex items-center justify-center text-xs shrink-0 font-kanji border border-rose-200">
                      {line.speaker.slice(0, 2)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-xs text-stone-900">{line.speaker}</span>
                        <span className="text-[11px] text-stone-500">· {line.role}</span>
                      </div>

                      <div className="font-jp text-sm sm:text-base text-stone-900 font-medium py-0.5">
                        <FuriganaText
                          text={line.japanese}
                          kana={line.kana}
                          showFurigana={showFurigana}
                        />
                      </div>

                      {showRomaji && (
                        <div className="text-xs text-stone-500 font-mono">{line.romaji}</div>
                      )}

                      {showKaiwaTranslation && (
                        <div className="text-xs sm:text-sm text-stone-700 pt-0.5">
                          {line.indonesian}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePlayAudio(line.kana, `kaiwa-${idx}`)}
                    className={`self-end sm:self-start p-2 rounded-lg border transition-colors shrink-0 ${
                      isPlaying
                        ? 'bg-rose-100 text-rose-700 border-rose-300'
                        : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                    title="Putar Audio Kalimat Percakapan"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: LATIHAN INTERAKTIF (RENSHUU / 練習) */}
      {activeSubTab === 'exercises' && (
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-stone-900 mb-0.5">
                Latihan Pemahaman (練習 - Renshuu) Bab {currentLesson.chapter}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Uji pemahaman kosakata, partikel, dan pola kalimat Bab {currentLesson.chapter}.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
              <div className="text-xs font-mono font-semibold text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 tabular-nums">
                Skor: {correctInChapterCount} / {chapterExercises.length} (Terjawab:{' '}
                {answeredInChapterCount})
              </div>
              {answeredInChapterCount > 0 && (
                <button
                  type="button"
                  onClick={handleResetChapterExercises}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi</span>
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {chapterExercises.map((ex, index) => {
              const selectedAnswer = userAnswers[ex.id];
              const isAnswered = exerciseChecked[ex.id];
              const isCorrect = isAnswered && isExerciseCorrect(ex);
              const pickedWords = sentenceOrderPicks[ex.id] || [];

              return (
                <div
                  key={ex.id}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-stone-900 tabular-nums">
                        Soal {String(index + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-rose-700">
                        {ex.categoryLabel ||
                          (ex.type === 'multiple-choice'
                            ? 'Pilihan Ganda'
                            : ex.type === 'particle'
                            ? 'Tebak Partikel'
                            : 'Susun Kalimat Interaktif')}
                      </span>
                    </div>

                    {ex.audioText && (
                      <button
                        type="button"
                        onClick={() => handlePlayAudio(ex.audioText!, `ex-${ex.id}`)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors shrink-0 ${
                          playingAudioId === `ex-${ex.id}`
                            ? 'bg-rose-50 border-rose-300 text-rose-700'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                        }`}
                        title="Putar audio kalimat Jepang"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Audio</span>
                      </button>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-stone-900 font-jp whitespace-pre-line leading-7">
                    <FuriganaText text={ex.question} showFurigana={showFurigana} />
                  </div>

                  {/* Multiple-Choice / Particle Options */}
                  {ex.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {ex.options.map((opt, optIdx) => {
                        const isChosen = selectedAnswer === opt;
                        const isThisCorrect = opt === ex.correctAnswer;

                        let btnStyle =
                          'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle =
                              'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                          } else if (isChosen) {
                            btnStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                          }
                        } else if (isChosen) {
                          btnStyle = 'bg-stone-900 text-white border-stone-900';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectAnswer(ex.id, opt)}
                            className={`p-3 rounded-lg border text-xs sm:text-sm text-left flex items-center justify-between transition-colors ${btnStyle}`}
                          >
                            <span className="font-jp leading-6">
                              <FuriganaText text={opt} showFurigana={showFurigana} />
                            </span>
                            {isAnswered && isThisCorrect && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {isAnswered && isChosen && !isThisCorrect && (
                              <X className="w-4 h-4 text-rose-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Sentence-Order Interactive Builder */}
                  {ex.type === 'sentence-order' && ex.words && (
                    <div className="space-y-3 pt-1">
                      {/* Assembled sentence box */}
                      <div className="p-3 min-h-[48px] rounded-lg border border-dashed border-stone-300 bg-stone-50 flex flex-wrap items-center gap-2">
                        {pickedWords.length === 0 ? (
                          <span className="text-xs text-stone-400">
                            Klik potongan kata di bawah sesuai urutan kalimat yang benar...
                          </span>
                        ) : (
                          pickedWords.map((w, wIdx) => (
                            <button
                              key={wIdx}
                              type="button"
                              disabled={isAnswered}
                              onClick={() => handleToggleSentenceWord(ex.id, w)}
                              className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs sm:text-sm font-jp font-medium hover:bg-stone-700 transition-colors"
                            >
                              <FuriganaText text={w} showFurigana={showFurigana} />
                            </button>
                          ))
                        )}
                      </div>

                      {/* Available words bank */}
                      <div className="flex flex-wrap items-center gap-2">
                        {ex.words.map((w, wIdx) => {
                          const isUsed = pickedWords.includes(w);
                          return (
                            <button
                              key={wIdx}
                              type="button"
                              disabled={isAnswered}
                              onClick={() => handleToggleSentenceWord(ex.id, w)}
                              className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-jp transition-colors ${
                                isUsed
                                  ? 'bg-stone-100 border-stone-200 text-stone-400'
                                  : 'bg-white border-stone-300 text-stone-800 hover:bg-stone-50'
                              }`}
                            >
                              <FuriganaText text={w} showFurigana={showFurigana} />
                            </button>
                          );
                        })}
                      </div>

                      {!isAnswered && (
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            disabled={pickedWords.length === 0}
                            onClick={() => handleCheckSentenceOrder(ex)}
                            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
                          >
                            Periksa Susunan Kalimat
                          </button>
                          {pickedWords.length > 0 && (
                            <button
                              type="button"
                              onClick={() =>
                                setSentenceOrderPicks(prev => ({ ...prev, [ex.id]: [] }))
                              }
                              className="px-3 py-2 bg-white border border-stone-200 hover:bg-stone-50 text-stone-600 rounded-lg text-xs font-medium"
                            >
                              Kosongkan
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Explanation feedback */}
                  {isAnswered && (
                    <div
                      className={`p-3.5 rounded-lg text-xs sm:text-sm border ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                          : 'bg-rose-50/70 border-rose-200 text-rose-900'
                      }`}
                    >
                      <div className="font-bold mb-1">
                        {isCorrect ? '✓ Benar sekali!' : '✗ Jawaban belum tepat'}
                      </div>
                      <p className="leading-relaxed">
                        <FuriganaText text={ex.explanation} showFurigana={showFurigana} />
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL PENGANTAR BUKU (はじめに: 教室のことば, 毎日のあいさつ & 数字 0-10) */}
      {showIntroModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 space-y-6 my-8">
            <div className="flex items-start justify-between border-b border-stone-100 pb-3">
              <div>
                <div className="text-xs font-semibold text-rose-700">
                  Halaman Pengantar Buku (はじめに · p. 5)
                </div>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                  Ungkapan Kelas, Salam Sehari-hari &amp; Angka Dasar (0–10)
                </h3>
                <p className="text-xs text-stone-500">
                  Materi pengantar resmi <em>Minna no Nihongo Shokyu I Edisi Kedua</em> (3A
                  Corporation).
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowIntroModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-1">
              {/* Bagian II: 教室のことば */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-stone-900">
                  01. 教室のことば (Ungkapan di Dalam Kelas)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { no: 1, jp: '始めましょう。', kana: 'はじめましょう。', id: 'Ayo kita mulai.' },
                    {
                      no: 2,
                      jp: '終わりましょう。',
                      kana: 'おわりましょう。',
                      id: 'Ayo kita sudahi / selesai.',
                    },
                    {
                      no: 3,
                      jp: '休みましょう。',
                      kana: 'やすみましょう。',
                      id: 'Ayo kita istirahat.',
                    },
                    {
                      no: 4,
                      jp: 'わかりますか。',
                      kana: 'わかりますか。',
                      id: 'Apakah Anda mengerti? (……はい、わかります。／いいえ、わかりません。)',
                    },
                    {
                      no: 5,
                      jp: 'もう一度 [お願いします]。',
                      kana: 'もういちど [おねがいします]。',
                      id: 'Sekali lagi [tolong].',
                    },
                    { no: 6, jp: 'いいです。', kana: 'いいです。', id: 'Bagus / Boleh.' },
                    {
                      no: 7,
                      jp: '違います。',
                      kana: 'ちがいます。',
                      id: 'Bukan / Salah / Berbeda.',
                    },
                    { no: 8, jp: '名前', kana: 'なまえ', id: 'Nama' },
                    {
                      no: 9,
                      jp: '試験、宿題',
                      kana: 'しけん、しゅくだい',
                      id: 'Ujian, Pekerjaan Rumah (PR)',
                    },
                    {
                      no: 10,
                      jp: '質問、答え、例',
                      kana: 'しつもん、こたえ、れい',
                      id: 'Pertanyaan, Jawaban, Contoh',
                    },
                  ].map(item => (
                    <div
                      key={item.no}
                      className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-jp font-bold text-stone-900 text-sm">
                          <span className="text-stone-400 text-xs mr-1 tabular-nums">
                            {item.no}.
                          </span>
                          {item.jp}
                        </div>
                        <div className="text-[11px] text-stone-500 font-jp">{item.kana}</div>
                        <div className="text-[11px] text-stone-600 mt-0.5">{item.id}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePlayAudio(item.kana, `intro-${item.no}`)}
                        className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-500 hover:text-stone-800 shrink-0"
                        title="Putar Audio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bagian III: 毎日のあいさつと会話表現 */}
              <div className="space-y-3 pt-4 border-t border-stone-100">
                <h4 className="text-sm font-bold text-stone-900">
                  02. 毎日のあいさつと会話表現 (Salam &amp; Ungkapan Percakapan Sehari-hari)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    {
                      no: 1,
                      jp: 'おはよう ございます。',
                      kana: 'おはよう ございます。',
                      id: 'Selamat pagi (sopan).',
                    },
                    { no: 2, jp: 'こんにちは。', kana: 'こんにちは。', id: 'Selamat siang / Halo.' },
                    { no: 3, jp: 'こんばんは。', kana: 'こんばんは。', id: 'Selamat malam.' },
                    {
                      no: 4,
                      jp: 'お休みなさい。',
                      kana: 'おやすみなさい。',
                      id: 'Selamat tidur / Selamat beristirahat.',
                    },
                    {
                      no: 5,
                      jp: 'さようなら。',
                      kana: 'さようなら。',
                      id: 'Selamat tinggal / Sampai jumpa.',
                    },
                    {
                      no: 6,
                      jp: 'ありがとう ございます。',
                      kana: 'ありがとう ございます。',
                      id: 'Terima kasih banyak.',
                    },
                    { no: 7, jp: 'すみません。', kana: 'すみません。', id: 'Permisi / Maaf.' },
                    {
                      no: 8,
                      jp: 'お願いします。',
                      kana: 'おねがいします。',
                      id: 'Tolong / Mohon bantuannya.',
                    },
                  ].map(item => (
                    <div
                      key={item.no}
                      className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-jp font-bold text-stone-900 text-sm">
                          <span className="text-stone-400 text-xs mr-1 tabular-nums">
                            {item.no}.
                          </span>
                          {item.jp}
                        </div>
                        <div className="text-[11px] text-stone-600 mt-0.5">{item.id}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePlayAudio(item.kana, `intro-g-${item.no}`)}
                        className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-500 hover:text-stone-800 shrink-0"
                        title="Putar Audio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bagian IV: 数字 (0 - 10) */}
              <div className="space-y-3 pt-4 border-t border-stone-100">
                <h4 className="text-sm font-bold text-stone-900">
                  03. 数字 (Angka Dasar 0 – 10 · Klik untuk Audio)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { num: '0', kanji: '〇', kana: 'ゼロ / れい', audio: 'ゼロ' },
                    { num: '1', kanji: '一', kana: 'いち', audio: 'いち' },
                    { num: '2', kanji: '二', kana: 'に', audio: 'に' },
                    { num: '3', kanji: '三', kana: 'さん', audio: 'さん' },
                    { num: '4', kanji: '四', kana: 'よん / し', audio: 'よん' },
                    { num: '5', kanji: '五', kana: 'ご', audio: 'ご' },
                    { num: '6', kanji: '六', kana: 'ろく', audio: 'ろく' },
                    { num: '7', kanji: '七', kana: 'なな / しち', audio: 'なな' },
                    { num: '8', kanji: '八', kana: 'はち', audio: 'はち' },
                    { num: '9', kanji: '九', kana: 'きゅう / く', audio: 'きゅう' },
                    { num: '10', kanji: '十', kana: 'じゅう', audio: 'じゅう' },
                  ].map(s => (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => handlePlayAudio(s.audio, `num-${s.num}`)}
                      className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-center cursor-pointer hover:bg-stone-100 transition-colors"
                    >
                      <div className="font-bold text-stone-900 text-base font-kanji tabular-nums">
                        {s.num} ({s.kanji})
                      </div>
                      <div className="text-[11px] text-stone-600 font-jp">{s.kana}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-3 flex justify-end">
              <button
                type="button"
                onClick={() => setShowIntroModal(false)}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Tutup Pengantar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
