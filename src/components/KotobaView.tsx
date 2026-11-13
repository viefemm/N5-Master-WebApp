import React, { useState, useMemo, useEffect } from 'react';
import { KotobaItem } from '../types';
import { kotobaListN5 } from '../data/kotobaData';
import { FuriganaText } from './FuriganaText';
import { playJapaneseAudio } from '../utils/audio';
import {
  Search,
  Volume2,
  Bookmark,
  CheckCircle2,
  RotateCcw,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  HelpCircle,
  Headphones,
  Zap,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Check,
  X,
  FileText,
} from 'lucide-react';

interface KotobaViewProps {
  masteredKotoba: string[];
  toggleMasteredKotoba: (id: string) => void;
  bookmarkedVocab: string[];
  toggleBookmarkVocab: (id: string) => void;
  showFurigana: boolean;
  setShowFurigana: (v: boolean) => void;
  showRomaji: boolean;
  setShowRomaji: (v: boolean) => void;
}

type KotobaMode = 'list' | 'flashcard' | 'quiz' | 'audio-typing' | 'matching';

interface MatchTile {
  uid: string;
  kotobaId: string;
  side: 'jp' | 'id';
  display: string;
  kana?: string;
}

export const KotobaView: React.FC<KotobaViewProps> = ({
  masteredKotoba,
  toggleMasteredKotoba,
  bookmarkedVocab,
  toggleBookmarkVocab,
  showFurigana,
  setShowFurigana,
  showRomaji,
  setShowRomaji,
}) => {
  const [activeMode, setActiveMode] = useState<KotobaMode>('list');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unmastered' | 'mastered' | 'bookmarked'>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  // Filtered vocabulary list based on selected chapter, category, status, and search
  const filteredKotoba = useMemo(() => {
    return kotobaListN5.filter(item => {
      if (selectedChapter !== 'all' && item.chapter !== selectedChapter) return false;
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (statusFilter === 'mastered' && !masteredKotoba.includes(item.id)) return false;
      if (statusFilter === 'unmastered' && masteredKotoba.includes(item.id)) return false;
      if (statusFilter === 'bookmarked' && !bookmarkedVocab.includes(item.id)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchKana = item.kana.toLowerCase().includes(q);
        const matchKanji = item.kanji ? item.kanji.toLowerCase().includes(q) : false;
        const matchRomaji = item.romaji.toLowerCase().includes(q);
        const matchIndo = item.indonesian.toLowerCase().includes(q);
        if (!matchKana && !matchKanji && !matchRomaji && !matchIndo) return false;
      }
      return true;
    });
  }, [selectedChapter, selectedCategory, statusFilter, searchQuery, masteredKotoba, bookmarkedVocab]);

  // Pool of words for interactive modes (falls back to chapter or all N5 if current filter is too small)
  const practicePool: KotobaItem[] = useMemo(() => {
    if (filteredKotoba.length >= 4) return filteredKotoba;
    const byChap =
      selectedChapter === 'all'
        ? kotobaListN5
        : kotobaListN5.filter(k => k.chapter === selectedChapter);
    return byChap.length >= 4 ? byChap : kotobaListN5;
  }, [filteredKotoba, selectedChapter]);

  // ============================================================================
  // 1. FLASHCARD STATE
  // ============================================================================
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [flashcardOrder, setFlashcardOrder] = useState<number[]>([]);

  useEffect(() => {
    setFlashcardOrder(practicePool.map((_, i) => i));
    setFlashcardIdx(0);
    setIsCardFlipped(false);
  }, [practicePool]);

  const currentFlashcardItem: KotobaItem =
    practicePool[flashcardOrder[flashcardIdx % Math.max(1, flashcardOrder.length)] || 0] ||
    practicePool[0];

  const handleShuffleFlashcards = () => {
    const next = [...flashcardOrder];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    setFlashcardOrder(next);
    setFlashcardIdx(0);
    setIsCardFlipped(false);
  };

  // ============================================================================
  // 2. MULTIPLE-CHOICE QUIZ STATE (2 ARAH: JP -> ID & ID -> JP)
  // ============================================================================
  const [quizDirection, setQuizDirection] = useState<'jp-to-id' | 'id-to-jp' | 'mixed'>('jp-to-id');
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [quizSelected, setQuizSelected] = useState<string | null>(null);

  const currentQuizItem = practicePool[quizIndex % practicePool.length] || practicePool[0];
  const activeDirectionForQuestion: 'jp-to-id' | 'id-to-jp' =
    quizDirection === 'mixed'
      ? quizIndex % 2 === 0
        ? 'jp-to-id'
        : 'id-to-jp'
      : quizDirection;

  const quizOptions = useMemo(() => {
    if (!currentQuizItem) return [];
    const others = practicePool.filter(k => k.id !== currentQuizItem.id);
    const distractors: KotobaItem[] = [];
    for (let i = 0; i < others.length && distractors.length < 3; i++) {
      const pick = others[(quizIndex * 5 + i * 3) % others.length];
      if (pick && !distractors.some(d => d.id === pick.id)) {
        distractors.push(pick);
      }
    }
    const allItems = [currentQuizItem, ...distractors];
    const shift = (quizIndex * 3 + 1) % allItems.length;
    return [...allItems.slice(shift), ...allItems.slice(0, shift)];
  }, [currentQuizItem, practicePool, quizIndex]);

  const handleAnswerQuiz = (chosenId: string) => {
    if (quizSelected) return;
    setQuizSelected(chosenId);
    setQuizTotal(prev => prev + 1);
    if (chosenId === currentQuizItem.id) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setQuizSelected(null);
    setQuizIndex(prev => prev + 1);
  };

  // ============================================================================
  // 3. AUDIO LISTENING & TYPING DRILL STATE
  // ============================================================================
  const [drillSubMode, setDrillSubMode] = useState<'listening' | 'typing'>('listening');
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillScore, setDrillScore] = useState(0);
  const [drillTotal, setDrillTotal] = useState(0);
  const [listeningSelectedId, setListeningSelectedId] = useState<string | null>(null);
  const [typingInput, setTypingInput] = useState('');
  const [typingChecked, setTypingChecked] = useState(false);
  const [typingCorrect, setTypingCorrect] = useState(false);

  const currentDrillItem = practicePool[drillIndex % practicePool.length] || practicePool[0];

  const listeningOptions = useMemo(() => {
    if (!currentDrillItem) return [];
    const others = practicePool.filter(k => k.id !== currentDrillItem.id);
    const distractors: KotobaItem[] = [];
    for (let i = 0; i < others.length && distractors.length < 3; i++) {
      const pick = others[(drillIndex * 7 + i * 2) % others.length];
      if (pick && !distractors.some(d => d.id === pick.id)) {
        distractors.push(pick);
      }
    }
    const allItems = [currentDrillItem, ...distractors];
    const shift = (drillIndex * 2 + 1) % allItems.length;
    return [...allItems.slice(shift), ...allItems.slice(0, shift)];
  }, [currentDrillItem, practicePool, drillIndex]);

  const handleCheckTyping = (e: React.FormEvent) => {
    e.preventDefault();
    if (typingChecked || !typingInput.trim()) return;

    const cleanInput = typingInput.trim().toLowerCase().replace(/\s+/g, '');
    const cleanKana = currentDrillItem.kana
      .replace(/（.*）|\(.*\)|～/g, '')
      .trim()
      .toLowerCase();
    const cleanRomaji = currentDrillItem.romaji
      .replace(/\(.*\)|~/g, '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '');

    const isRight =
      cleanInput === cleanKana ||
      cleanInput === cleanRomaji ||
      cleanInput === currentDrillItem.kana.trim().toLowerCase();

    setTypingCorrect(isRight);
    setTypingChecked(true);
    setDrillTotal(prev => prev + 1);
    if (isRight) {
      setDrillScore(prev => prev + 1);
    }
  };

  const handleNextDrillItem = () => {
    setListeningSelectedId(null);
    setTypingInput('');
    setTypingChecked(false);
    setTypingCorrect(false);
    setDrillIndex(prev => prev + 1);
  };

  // ============================================================================
  // 4. SPEED MATCHING GAME STATE
  // ============================================================================
  const [matchTiles, setMatchTiles] = useState<MatchTile[]>([]);
  const [selectedTileUid, setSelectedTileUid] = useState<string | null>(null);
  const [matchedKotobaIds, setMatchedKotobaIds] = useState<string[]>([]);
  const [wrongPairUids, setWrongPairUids] = useState<string[]>([]);
  const [matchMoves, setMatchMoves] = useState(0);
  const [matchSeconds, setMatchSeconds] = useState(0);
  const [matchRunning, setMatchRunning] = useState(false);
  const [bestMatchTime, setBestMatchTime] = useState<number | null>(null);

  const initMatchingRound = () => {
    const count = Math.min(6, practicePool.length);
    const shuffledPool = [...practicePool].sort(() => Math.random() - 0.5).slice(0, count);

    const tiles: MatchTile[] = [];
    shuffledPool.forEach(item => {
      tiles.push({
        uid: `jp-${item.id}`,
        kotobaId: item.id,
        side: 'jp',
        display: item.kanji || item.kana,
        kana: item.kana,
      });
      tiles.push({
        uid: `id-${item.id}`,
        kotobaId: item.id,
        side: 'id',
        display: item.indonesian,
      });
    });

    tiles.sort(() => Math.random() - 0.5);
    setMatchTiles(tiles);
    setSelectedTileUid(null);
    setMatchedKotobaIds([]);
    setWrongPairUids([]);
    setMatchMoves(0);
    setMatchSeconds(0);
    setMatchRunning(true);
  };

  useEffect(() => {
    if (activeMode === 'matching') {
      initMatchingRound();
    } else {
      setMatchRunning(false);
    }
  }, [activeMode, selectedChapter]);

  useEffect(() => {
    if (!matchRunning) return;
    const timer = window.setInterval(() => {
      setMatchSeconds(s => s + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [matchRunning]);

  const handleTileClick = (tile: MatchTile) => {
    if (
      matchedKotobaIds.includes(tile.kotobaId) ||
      wrongPairUids.length > 0 ||
      selectedTileUid === tile.uid
    ) {
      return;
    }

    if (tile.side === 'jp' && tile.kana) {
      playJapaneseAudio(tile.kana, 0.9);
    }

    if (!selectedTileUid) {
      setSelectedTileUid(tile.uid);
      return;
    }

    const firstTile = matchTiles.find(t => t.uid === selectedTileUid);
    if (!firstTile) {
      setSelectedTileUid(tile.uid);
      return;
    }

    setMatchMoves(m => m + 1);

    if (firstTile.kotobaId === tile.kotobaId && firstTile.side !== tile.side) {
      // Match found!
      const nextMatched = [...matchedKotobaIds, tile.kotobaId];
      setMatchedKotobaIds(nextMatched);
      setSelectedTileUid(null);

      if (nextMatched.length === matchTiles.length / 2) {
        setMatchRunning(false);
        setBestMatchTime(prev => (prev === null || matchSeconds < prev ? matchSeconds : prev));
      }
    } else {
      // Mismatch
      setWrongPairUids([firstTile.uid, tile.uid]);
      window.setTimeout(() => {
        setWrongPairUids([]);
        setSelectedTileUid(null);
      }, 650);
    }
  };

  const handlePlaySound = (kana: string, id: string) => {
    const cleanSpeech = kana.replace(/（.*）|\(.*\)|～/g, '');
    setPlayingId(id);
    playJapaneseAudio(
      cleanSpeech,
      0.85,
      () => setPlayingId(id),
      () => setPlayingId(null)
    );
  };

  const totalKotobaInScope =
    selectedChapter === 'all'
      ? kotobaListN5.length
      : kotobaListN5.filter(k => k.chapter === selectedChapter).length;

  const masteredInScope =
    selectedChapter === 'all'
      ? kotobaListN5.filter(k => masteredKotoba.includes(k.id)).length
      : kotobaListN5.filter(
          k => k.chapter === selectedChapter && masteredKotoba.includes(k.id)
        ).length;

  return (
    <div className="space-y-6">
      {/* Top Banner & Display Controls */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
              <span>
                <FuriganaText
                  text="Modul Kotoba Minna no Nihongo (ことば 第1課～第25課)"
                  floatingOnly
                />
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-stone-700 tabular-nums">
                Dikuasai: {masteredInScope} / {totalKotobaInScope} Kata
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Pusat Kosakata (Kotoba) &amp; Latihan Interaktif N5
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Pelajari kosakata lengkap per bab dengan furigana di atas kanji. Saat furigana
              disembunyikan, arahkan kursor atau tahan sentuhan pada kanji untuk melihat popup
              cara baca.
            </p>
          </div>

          {/* Furigana & Romaji Show/Hide Toggles + PDF Reference Button */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowFurigana(!showFurigana)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
                showFurigana
                  ? 'bg-rose-50 border-rose-200 text-rose-800'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
              title="Ketika Furigana disembunyikan, arahkan pointer atau tahan sentuhan pada Kanji untuk menampilkan popup Furigana"
            >
              {showFurigana ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{showFurigana ? 'Furigana: Tampil' : 'Furigana: Sembunyi (Popup Aktif)'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowRomaji(!showRomaji)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
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
              onClick={() => setShowPdfModal(true)}
              className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-rose-600" />
              <span>Buka Modul PDF</span>
            </button>
          </div>
        </div>

        {/* Chapter Ribbon (All + Bab 1-25) */}
        <div className="space-y-2">
          <div className="text-xs text-stone-500 font-medium">Pilih Cakupan Bab Kotoba:</div>
          <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedChapter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                selectedChapter === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Semua Bab (1–25)
            </button>
            {Array.from({ length: 25 }, (_, i) => i + 1).map(chap => (
              <button
                key={chap}
                type="button"
                onClick={() => setSelectedChapter(chap)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors tabular-nums ${
                  selectedChapter === chap
                    ? 'bg-rose-600 text-white font-semibold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Bab {chap}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mode Switcher Bar (5 Interactive Modes) */}
      <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/80 rounded-xl">
        <button
          type="button"
          onClick={() => setActiveMode('list')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeMode === 'list'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Daftar Kotoba ({filteredKotoba.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode('flashcard')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeMode === 'flashcard'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flashcard Bolak-Balik</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode('quiz')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeMode === 'quiz'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Kuis Pilihan Ganda (2 Arah)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode('audio-typing')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeMode === 'audio-typing'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Headphones className="w-3.5 h-3.5" />
          <span>Tebak Audio &amp; Ketik Kana</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode('matching')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeMode === 'matching'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Speed Matching Game</span>
        </button>
      </div>

      {/* ========================================================================
          MODE 1: DAFTAR KOTOBA
         ======================================================================== */}
      {activeMode === 'list' && (
        <div className="space-y-4">
          {/* Search & Category / Mastery Filters */}
          <div className="bg-white rounded-xl border border-stone-200 p-4 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Cari kanji, kana, romaji, arti Indonesia..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-rose-400 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {[
                { id: 'all', label: 'Semua Jenis' },
                { id: 'kata kerja', label: 'Kata Kerja' },
                { id: 'kata benda', label: 'Kata Benda' },
                { id: 'kata sifat-i', label: 'Sifat -i' },
                { id: 'kata sifat-na', label: 'Sifat -na' },
                { id: 'ungkapan', label: 'Ungkapan' },
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs shrink-0">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'unmastered', label: 'Belum Hafal' },
                { id: 'mastered', label: 'Sudah Hafal' },
                { id: 'bookmarked', label: 'Ditandai' },
              ].map(st => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setStatusFilter(st.id as any)}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    statusFilter === st.id
                      ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vocabulary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredKotoba.map(item => {
              const isMastered = masteredKotoba.includes(item.id);
              const isBookmarked = bookmarkedVocab.includes(item.id);
              const isPlaying = playingId === item.id;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border p-4 transition-all flex flex-col justify-between ${
                    isMastered ? 'border-emerald-200 bg-emerald-50/15' : 'border-stone-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-xs text-stone-400 font-mono tabular-nums">
                        Bab {item.chapter} · #{item.no}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handlePlaySound(item.kana, item.id)}
                          className={`p-1.5 rounded-md border transition-colors ${
                            isPlaying
                              ? 'bg-rose-100 text-rose-700 border-rose-300'
                              : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                          }`}
                          title="Dengarkan Pelafalan"
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
                          title="Tandai Kosakata"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleMasteredKotoba(item.id)}
                          className={`px-2 py-1 rounded-md border text-[11px] font-semibold flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 ${
                            isMastered
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isMastered ? 'Hafal' : 'Tandai Hafal'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Word Display with Furigana ABOVE Kanji (or Floating Popup when hidden) */}
                    <div className="py-1">
                      {item.kanji ? (
                        <div className="font-kanji text-xl sm:text-2xl font-bold text-stone-900">
                          <FuriganaText
                            text={item.kanji}
                            kana={item.kana}
                            showFurigana={showFurigana}
                          />
                        </div>
                      ) : (
                        <div className="font-jp text-xl sm:text-2xl font-bold text-stone-900">
                          {item.kana}
                        </div>
                      )}
                    </div>

                    {showRomaji && (
                      <div className="text-xs text-stone-400 font-mono mt-0.5">{item.romaji}</div>
                    )}

                    <div className="text-sm font-semibold text-stone-800 mt-2">
                      {item.indonesian}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="capitalize">{item.category}</span>
                    {item.kanji && !showFurigana && (
                      <span className="text-stone-400">Sentuh/arah ke kanji untuk furigana</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredKotoba.length === 0 && (
            <div className="bg-white rounded-xl border border-stone-200 p-10 text-center text-sm text-stone-500">
              Tidak ditemukan kosakata yang sesuai dengan filter pencarian Anda.
            </div>
          )}
        </div>
      )}

      {/* ========================================================================
          MODE 2: FLASHCARD BOLAK-BALIK
         ======================================================================== */}
      {activeMode === 'flashcard' && currentFlashcardItem && (
        <div className="max-w-xl mx-auto space-y-5">
          <div className="flex items-center justify-between text-xs text-stone-600 bg-white px-4 py-3 rounded-xl border border-stone-200">
            <span className="font-semibold tabular-nums">
              Kartu {(flashcardIdx % practicePool.length) + 1} dari {practicePool.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShuffleFlashcards}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Acak Kartu</span>
              </button>
            </div>
          </div>

          {/* Card Surface */}
          <div
            onClick={() => setIsCardFlipped(!isCardFlipped)}
            className="cursor-pointer bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 min-h-[280px] flex flex-col items-center justify-center text-center shadow-xs hover:border-stone-300 transition-all select-none relative"
          >
            <div className="absolute top-4 left-4 text-xs text-stone-400 font-mono">
              Bab {currentFlashcardItem.chapter} · {currentFlashcardItem.category}
            </div>

            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                handlePlaySound(currentFlashcardItem.kana, currentFlashcardItem.id);
              }}
              className="absolute top-4 right-4 p-2 rounded-lg bg-stone-100 hover:bg-rose-50 text-stone-700 hover:text-rose-700 transition-colors"
              title="Putar Suara"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {!isCardFlipped ? (
              <div className="space-y-4 my-4">
                <div className="text-4xl sm:text-5xl font-bold text-stone-900 font-kanji">
                  {currentFlashcardItem.kanji ? (
                    <FuriganaText
                      text={currentFlashcardItem.kanji}
                      kana={currentFlashcardItem.kana}
                      showFurigana={showFurigana}
                    />
                  ) : (
                    currentFlashcardItem.kana
                  )}
                </div>
                {showRomaji && (
                  <div className="text-sm text-stone-400 font-mono">
                    {currentFlashcardItem.romaji}
                  </div>
                )}
                <div className="text-xs text-stone-400 pt-2">
                  Klik kartu untuk membalik dan melihat arti bahasa Indonesia
                </div>
              </div>
            ) : (
              <div className="space-y-3 my-4">
                <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                  Arti Bahasa Indonesia
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-stone-900">
                  {currentFlashcardItem.indonesian}
                </div>
                    <div className="pt-2 border-t border-stone-100 text-sm text-stone-600 font-jp">
                  {currentFlashcardItem.kanji ? (
                    <>
                      <span>
                        <FuriganaText
                          text={currentFlashcardItem.kanji}
                          kana={currentFlashcardItem.kana}
                          floatingOnly
                        />
                      </span>
                      <span className="mx-1.5 text-stone-300">·</span>
                      <span className="text-rose-700">{currentFlashcardItem.kana}</span>
                    </>
                  ) : (
                    <span>{currentFlashcardItem.kana}</span>
                  )}
                </div>
                {showRomaji && (
                  <div className="text-xs font-mono text-stone-400">
                    {currentFlashcardItem.romaji}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation & Mastery Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setIsCardFlipped(false);
                setFlashcardIdx(prev => (prev - 1 + practicePool.length) % practicePool.length);
              }}
              className="px-4 py-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold text-stone-700 flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (!masteredKotoba.includes(currentFlashcardItem.id)) {
                    toggleMasteredKotoba(currentFlashcardItem.id);
                  }
                  setIsCardFlipped(false);
                  setFlashcardIdx(prev => prev + 1);
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Sudah Hafal</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (masteredKotoba.includes(currentFlashcardItem.id)) {
                    toggleMasteredKotoba(currentFlashcardItem.id);
                  }
                  setIsCardFlipped(false);
                  setFlashcardIdx(prev => prev + 1);
                }}
                className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Lanjut Latih</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================
          MODE 3: KUIS PILIHAN GANDA 2 ARAH
         ======================================================================== */}
      {activeMode === 'quiz' && currentQuizItem && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => {
                  setQuizDirection('jp-to-id');
                  setQuizSelected(null);
                }}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                  quizDirection === 'jp-to-id'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600'
                }`}
              >
                Jepang → Indo
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuizDirection('id-to-jp');
                  setQuizSelected(null);
                }}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                  quizDirection === 'id-to-jp'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600'
                }`}
              >
                Indo → Jepang
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuizDirection('mixed');
                  setQuizSelected(null);
                }}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                  quizDirection === 'mixed'
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600'
                }`}
              >
                Campuran
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="font-bold text-rose-600 tabular-nums">
                Skor: {quizScore} / {quizTotal}
              </span>
              {quizTotal > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setQuizScore(0);
                    setQuizTotal(0);
                    setQuizSelected(null);
                    setQuizIndex(0);
                  }}
                  className="p-1 text-stone-400 hover:text-stone-700"
                  title="Reset Skor"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Question Box */}
          <div className="text-center py-4 space-y-2">
            <div className="text-xs text-stone-500">
              {activeDirectionForQuestion === 'jp-to-id'
                ? `Apa arti bahasa Indonesia dari kosakata Bab ${currentQuizItem.chapter} berikut?`
                : `Manakah kosakata bahasa Jepang yang tepat untuk arti berikut?`}
            </div>

            {activeDirectionForQuestion === 'jp-to-id' ? (
              <div className="space-y-2 pt-2">
                <div className="text-3xl sm:text-4xl font-bold text-stone-900 font-kanji">
                  {currentQuizItem.kanji ? (
                    <FuriganaText
                      text={currentQuizItem.kanji}
                      kana={currentQuizItem.kana}
                      showFurigana={showFurigana}
                    />
                  ) : (
                    currentQuizItem.kana
                  )}
                </div>
                {showRomaji && (
                  <div className="text-xs font-mono text-stone-400">{currentQuizItem.romaji}</div>
                )}
                <button
                  type="button"
                  onClick={() => handlePlaySound(currentQuizItem.kana, currentQuizItem.id)}
                  className="inline-flex items-center gap-1 text-xs text-rose-700 font-semibold mt-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dengarkan Suara</span>
                </button>
              </div>
            ) : (
              <div className="text-2xl sm:text-3xl font-bold text-stone-900 pt-2">
                “{currentQuizItem.indonesian}”
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {quizOptions.map(opt => {
              const isChosen = quizSelected === opt.id;
              const isCorrect = opt.id === currentQuizItem.id;

              let btnStyle = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
              if (quizSelected) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                } else if (isChosen) {
                  btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={Boolean(quizSelected)}
                  onClick={() => handleAnswerQuiz(opt.id)}
                  className={`w-full p-3.5 rounded-xl border text-left text-sm transition-colors flex items-center justify-between ${btnStyle}`}
                >
                  <div>
                    {activeDirectionForQuestion === 'jp-to-id' ? (
                      <span>{opt.indonesian}</span>
                    ) : (
                      <span className="font-jp text-base">
                        {opt.kanji ? (
                          <FuriganaText
                            text={opt.kanji}
                            kana={opt.kana}
                            showFurigana={showFurigana}
                          />
                        ) : (
                          opt.kana
                        )}
                      </span>
                    )}
                  </div>
                  {quizSelected && isCorrect && (
                    <span className="text-xs text-emerald-700 font-bold">✓ Benar</span>
                  )}
                  {quizSelected && isChosen && !isCorrect && (
                    <span className="text-xs text-rose-600 font-bold">✗ kurang tepat</span>
                  )}
                </button>
              );
            })}
          </div>

          {quizSelected && (
            <div className="pt-2 space-y-3">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-900 mr-2">
                    {currentQuizItem.kanji ? (
                      <>
                        <FuriganaText
                          text={currentQuizItem.kanji}
                          kana={currentQuizItem.kana}
                          floatingOnly
                        />{' '}
                        ({currentQuizItem.kana})
                      </>
                    ) : (
                      currentQuizItem.kana
                    )}
                  </span>
                  <span className="text-stone-600">= {currentQuizItem.indonesian}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handlePlaySound(currentQuizItem.kana, currentQuizItem.id)}
                  className="text-rose-700 font-semibold flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Audio</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleNextQuiz}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Soal Berikutnya →
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================
          MODE 4: TEBAK AUDIO (LISTENING) & KETIK BACAAN KANA
         ======================================================================== */}
      {activeMode === 'audio-typing' && currentDrillItem && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => {
                  setDrillSubMode('listening');
                  setListeningSelectedId(null);
                }}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  drillSubMode === 'listening'
                    ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                    : 'text-stone-600'
                }`}
              >
                Listening (Tebak Suara)
              </button>
              <button
                type="button"
                onClick={() => {
                  setDrillSubMode('typing');
                  setTypingChecked(false);
                  setTypingInput('');
                }}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  drillSubMode === 'typing'
                    ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                    : 'text-stone-600'
                }`}
              >
                Ketik Kana / Romaji
              </button>
            </div>

            <div className="text-xs font-mono font-bold text-rose-600 tabular-nums">
              Skor: {drillScore} / {drillTotal}
            </div>
          </div>

          {drillSubMode === 'listening' ? (
            <div className="space-y-5">
              <div className="text-center py-4 space-y-3">
                <div className="text-xs text-stone-500">
                  Klik tombol speaker di bawah, dengarkan pelafalannya, lalu pilih kosakata dan arti
                  yang sesuai:
                </div>
                <button
                  type="button"
                  onClick={() => handlePlaySound(currentDrillItem.kana, currentDrillItem.id)}
                  className="mx-auto w-20 h-20 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white flex flex-col items-center justify-center gap-1 shadow-sm transition-transform active:scale-95"
                >
                  <Volume2 className="w-8 h-8" />
                  <span className="text-[11px] font-semibold">Putar Audio</span>
                </button>
              </div>

              <div className="space-y-2.5">
                {listeningOptions.map(opt => {
                  const isChosen = listeningSelectedId === opt.id;
                  const isCorrect = opt.id === currentDrillItem.id;
                  let style = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
                  if (listeningSelectedId) {
                    if (isCorrect)
                      style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                    else if (isChosen) style = 'bg-rose-50 border-rose-300 text-rose-900';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={Boolean(listeningSelectedId)}
                      onClick={() => {
                        setListeningSelectedId(opt.id);
                        setDrillTotal(p => p + 1);
                        if (opt.id === currentDrillItem.id) setDrillScore(p => p + 1);
                      }}
                      className={`w-full p-3.5 rounded-xl border text-left text-sm flex items-center justify-between transition-colors ${style}`}
                    >
                      <div>
                        <span className="font-jp font-semibold mr-2">
                          {opt.kanji ? (
                            <FuriganaText text={opt.kanji} kana={opt.kana} floatingOnly />
                          ) : (
                            opt.kana
                          )}
                        </span>
                        <span className="text-stone-600">— {opt.indonesian}</span>
                      </div>
                      {listeningSelectedId && isCorrect && (
                        <span className="text-xs text-emerald-700 font-bold">✓ Tepat</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {listeningSelectedId && (
                <button
                  type="button"
                  onClick={handleNextDrillItem}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold"
                >
                  Audio Berikutnya →
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleCheckTyping} className="space-y-5">
              <div className="text-center py-4 space-y-2">
                <div className="text-xs text-stone-500">
                  Ketik cara baca (Hiragana/Katakana atau Romaji) untuk kosakata berikut:
                </div>
                {currentDrillItem.kanji ? (
                  <div className="text-4xl font-bold text-stone-900 font-kanji pt-1">
                    {currentDrillItem.kanji}
                  </div>
                ) : null}
                <div className="text-lg font-bold text-rose-700">
                  “{currentDrillItem.indonesian}”
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={typingInput}
                  onChange={e => setTypingInput(e.target.value)}
                  disabled={typingChecked}
                  placeholder="Ketik kana (contoh: たべます) atau romaji (tabemasu)..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-hidden focus:border-stone-400 text-sm"
                />
                {!typingChecked && (
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold shrink-0"
                  >
                    Periksa
                  </button>
                )}
              </div>

              {typingChecked && (
                <div className="space-y-3">
                  <div
                    className={`p-4 rounded-xl border text-xs sm:text-sm ${
                      typingCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="font-bold mb-1">
                      {typingCorrect ? '✓ Jawaban Benar!' : '✗ Jawaban Belum Tepat'}
                    </div>
                    <div>
                      Bacaan yang tepat:{' '}
                      <strong className="font-jp">{currentDrillItem.kana}</strong> (
                      <span className="font-mono">{currentDrillItem.romaji}</span>)
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextDrillItem}
                    className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold"
                  >
                    Kata Berikutnya →
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      )}

      {/* ========================================================================
          MODE 5: SPEED MATCHING GAME
         ======================================================================== */}
      {activeMode === 'matching' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-stone-200 p-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-stone-900">
                Speed Matching: Pasangkan Kata Jepang &amp; Arti Indonesia
              </h2>
              <p className="text-xs text-stone-500">
                Klik satu kartu kosakata Jepang lalu klik pasangan arti bahasa Indonesianya secepat
                mungkin!
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="tabular-nums">
                Waktu: <strong className="text-stone-900">{matchSeconds}d</strong>
              </div>
              <div className="tabular-nums">
                Langkah: <strong className="text-stone-900">{matchMoves}</strong>
              </div>
              {bestMatchTime !== null && (
                <div className="text-emerald-700 font-bold tabular-nums">
                  Rekor: {bestMatchTime}d
                </div>
              )}
              <button
                type="button"
                onClick={initMatchingRound}
                className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Acak Baru</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {matchTiles.map(tile => {
              const isMatched = matchedKotobaIds.includes(tile.kotobaId);
              const isSelected = selectedTileUid === tile.uid;
              const isWrong = wrongPairUids.includes(tile.uid);

              let tileClass =
                'bg-white border-stone-200 text-stone-900 hover:border-stone-400 cursor-pointer';
              if (isMatched) {
                tileClass =
                  'bg-emerald-50 border-emerald-300 text-emerald-700 opacity-50 cursor-default';
              } else if (isWrong) {
                tileClass = 'bg-rose-50 border-rose-400 text-rose-800';
              } else if (isSelected) {
                tileClass = 'bg-stone-900 border-stone-900 text-white';
              }

              return (
                <button
                  key={tile.uid}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleTileClick(tile)}
                  className={`p-4 min-h-[88px] rounded-xl border text-center flex flex-col items-center justify-center transition-all ${tileClass}`}
                >
                  {tile.side === 'jp' ? (
                    <span className="font-jp text-base sm:text-lg font-bold">
                      {tile.kana && tile.display !== tile.kana ? (
                        <FuriganaText
                          text={tile.display}
                          kana={tile.kana}
                          showFurigana={showFurigana}
                        />
                      ) : (
                        tile.display
                      )}
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm font-medium">{tile.display}</span>
                  )}
                </button>
              );
            })}
          </div>

          {matchedKotobaIds.length > 0 && matchedKotobaIds.length === matchTiles.length / 2 && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-2">
              <div className="text-base font-bold text-emerald-900">
                Hebat! Semua pasangan kosakata berhasil dicocokkan dalam {matchSeconds} detik (
                {matchMoves} langkah)!
              </div>
              <button
                type="button"
                onClick={initMatchingRound}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold"
              >
                Mainkan Ronde Baru
              </button>
            </div>
          )}
        </div>
      )}

      {/* PDF Viewer Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-stone-200 w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 border-b border-stone-200 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-stone-900">
                  Modul PDF: Kotoba Minna no Nihongo (Bab 1–50)
                </h3>
                <p className="text-xs text-stone-500">
                  Referensi dokumen asli kosakata bahasa Jepang – Indonesia
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPdfModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-stone-100">
              <iframe
                src="/assets/aistudio/Kotoba_Minna_No_Nihongo_Bab_1-50_4babf9f0.pdf"
                title="Modul Kotoba Minna no Nihongo"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
