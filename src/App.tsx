import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MinnaLessonsView } from './components/MinnaLessonsView';
import { KotobaView } from './components/KotobaView';
import { KanjiMasterView } from './components/KanjiMasterView';
import { ConjugationView } from './components/ConjugationView';
import { ExamView } from './components/ExamView';
import { AiSenseiView } from './components/AiSenseiView';
import { kanjiMasterN5 } from './data/kanjiMasterN5';
import { minnaLessons } from './data/minnaLessons';
import { kotobaListN5 } from './data/kotobaData';
import { ArrowRight, X, Trash2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'minna' | 'kotoba' | 'kanji' | 'conjugation' | 'exam' | 'sensei'
  >('minna');
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [confirmingReset, setConfirmingReset] = useState(false);

  // Furigana & Romaji global display preferences
  const [showFurigana, setShowFurigana] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('n5_show_furigana');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [showRomaji, setShowRomaji] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('n5_show_romaji');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  // Persistence in localStorage
  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('n5_completed_chapters');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [masteredKanji, setMasteredKanji] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('n5_mastered_kanji');
      return saved ? JSON.parse(saved) : ['k-1', 'k-2', 'k-3'];
    } catch {
      return ['k-1', 'k-2', 'k-3'];
    }
  });

  const [masteredKotoba, setMasteredKotoba] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('n5_mastered_kotoba');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedVocab, setBookmarkedVocab] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('n5_bookmarked_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedKanji, setBookmarkedKanji] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('n5_bookmarked_kanji');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [examScores, setExamScores] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('n5_exam_scores');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem('n5_show_furigana', JSON.stringify(showFurigana));
  }, [showFurigana]);

  useEffect(() => {
    localStorage.setItem('n5_show_romaji', JSON.stringify(showRomaji));
  }, [showRomaji]);

  useEffect(() => {
    localStorage.setItem('n5_completed_chapters', JSON.stringify(completedChapters));
  }, [completedChapters]);

  useEffect(() => {
    localStorage.setItem('n5_mastered_kanji', JSON.stringify(masteredKanji));
  }, [masteredKanji]);

  useEffect(() => {
    localStorage.setItem('n5_mastered_kotoba', JSON.stringify(masteredKotoba));
  }, [masteredKotoba]);

  useEffect(() => {
    localStorage.setItem('n5_bookmarked_vocab', JSON.stringify(bookmarkedVocab));
  }, [bookmarkedVocab]);

  useEffect(() => {
    localStorage.setItem('n5_bookmarked_kanji', JSON.stringify(bookmarkedKanji));
  }, [bookmarkedKanji]);

  useEffect(() => {
    localStorage.setItem('n5_exam_scores', JSON.stringify(examScores));
  }, [examScores]);

  const toggleChapterCompleted = (chapter: number) => {
    setCompletedChapters(prev =>
      prev.includes(chapter) ? prev.filter(c => c !== chapter) : [...prev, chapter]
    );
  };

  const toggleMasteredKanji = (id: string) => {
    setMasteredKanji(prev =>
      prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]
    );
  };

  const toggleMasteredKotoba = (id: string) => {
    setMasteredKotoba(prev =>
      prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]
    );
  };

  const toggleBookmarkVocab = (id: string) => {
    setBookmarkedVocab(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const toggleBookmarkKanji = (id: string) => {
    setBookmarkedKanji(prev =>
      prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]
    );
  };

  const handleSaveExamScore = (score: any) => {
    setExamScores(prev => [score, ...prev].slice(0, 5));
  };

  const handleConfirmResetProgress = () => {
    setCompletedChapters([]);
    setMasteredKanji([]);
    setMasteredKotoba([]);
    setBookmarkedVocab([]);
    setBookmarkedKanji([]);
    setExamScores([]);
    setConfirmingReset(false);
  };

  const chapterPercentage = Math.round((completedChapters.length / 25) * 100);
  const kanjiPercentage = Math.round((masteredKanji.length / kanjiMasterN5.length) * 100);
  const kotobaPercentage = Math.round((masteredKotoba.length / kotobaListN5.length) * 100);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showProgressModal={showProgressModal}
        setShowProgressModal={setShowProgressModal}
        completedLessonsCount={completedChapters.length}
        masteredKanjiCount={masteredKanji.length}
        masteredKotobaCount={masteredKotoba.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Showcase */}
        {activeTab === 'minna' && completedChapters.length <= 1 && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Text content */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                    <span>Kurikulum Resmi JLPT N5</span>
                    <span aria-hidden="true">·</span>
                    <span>Minna no Nihongo I, Kotoba &amp; Kanji Master N5</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight text-balance">
                    Kuasai Bahasa Jepang N5 dari Nol dengan Terstruktur
                  </h2>
                  <p className="text-sm text-stone-600 leading-relaxed max-w-xl">
                    Dilengkapi 25 bab materi lengkap <em>Minna no Nihongo Shokyu I</em> dengan fitur
                    Furigana &amp; Romaji interaktif, modul khusus <em>Kotoba Bab 1–25</em> (Flashcard,
                    Kuis 2 Arah, Tebak Audio &amp; Speed Match), 118 <em>Kanji Master N5</em>, matriks
                    konjugasi kata kerja, dan simulasi ujian JLPT.
                  </p>
                </div>

                {/* Quick stats strip */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-stone-100">
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-stone-900 font-mono tabular-nums">
                      25 Bab
                    </div>
                    <div className="text-[11px] text-stone-500">Minna no Nihongo I</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-stone-900 font-mono tabular-nums">
                      {kotobaListN5.length} Kata
                    </div>
                    <div className="text-[11px] text-stone-500">Kotoba &amp; Latihan N5</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-stone-900 font-mono tabular-nums">
                      118 Kanji
                    </div>
                    <div className="text-[11px] text-stone-500">Arc Academy (15 Bab)</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('kotoba')}
                    className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Latihan Kotoba &amp; Kuis Interaktif</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('kanji')}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Jelajahi 118 Kanji Master N5</span>
                  </button>
                </div>
              </div>

              {/* Photo hero */}
              <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full bg-stone-100">
                <img
                  src="/src/assets/images/hero_japanese_study_1794480666834.jpg"
                  alt="Japanese Study Desk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab Routing */}
        {activeTab === 'minna' && (
          <MinnaLessonsView
            completedChapters={completedChapters}
            toggleChapterCompleted={toggleChapterCompleted}
            bookmarkedVocab={bookmarkedVocab}
            toggleBookmarkVocab={toggleBookmarkVocab}
            showFurigana={showFurigana}
            setShowFurigana={setShowFurigana}
            showRomaji={showRomaji}
            setShowRomaji={setShowRomaji}
          />
        )}

        {activeTab === 'kotoba' && (
          <KotobaView
            masteredKotoba={masteredKotoba}
            toggleMasteredKotoba={toggleMasteredKotoba}
            bookmarkedVocab={bookmarkedVocab}
            toggleBookmarkVocab={toggleBookmarkVocab}
            showFurigana={showFurigana}
            setShowFurigana={setShowFurigana}
            showRomaji={showRomaji}
            setShowRomaji={setShowRomaji}
          />
        )}

        {activeTab === 'kanji' && (
          <KanjiMasterView
            masteredKanji={masteredKanji}
            toggleMasteredKanji={toggleMasteredKanji}
            bookmarkedKanji={bookmarkedKanji}
            toggleBookmarkKanji={toggleBookmarkKanji}
          />
        )}

        {activeTab === 'conjugation' && <ConjugationView />}

        {activeTab === 'exam' && <ExamView onSaveScore={handleSaveExamScore} />}

        {activeTab === 'sensei' && <AiSenseiView />}
      </main>

      {/* Progress & Bookmarks Modal */}
      {showProgressModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 space-y-6 my-8">
            <div className="flex items-start justify-between border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Progres Belajar &amp; Bookmark JLPT N5
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Tersimpan otomatis di perangkat Anda (<em>localStorage</em>).
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowProgressModal(false);
                  setConfirmingReset(false);
                }}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Bab Minna no Nihongo I (1–25)</span>
                  <span className="font-mono tabular-nums">
                    {completedChapters.length} / {minnaLessons.length} Bab ({chapterPercentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-600 transition-all duration-300"
                    style={{ width: `${chapterPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Hafalan Kotoba N5 (Bab 1–25)</span>
                  <span className="font-mono tabular-nums">
                    {masteredKotoba.length} / {kotobaListN5.length} Kata ({kotobaPercentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{ width: `${kotobaPercentage}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Hafalan Kanji Master N5 (15 Bab)</span>
                  <span className="font-mono tabular-nums">
                    {masteredKanji.length} / {kanjiMasterN5.length} Kanji ({kanjiPercentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 transition-all duration-300"
                    style={{ width: `${kanjiPercentage}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <div className="text-stone-500">Kosakata Ditandai</div>
                  <div className="text-base font-bold text-stone-900 font-mono tabular-nums mt-0.5">
                    {bookmarkedVocab.length} Kata
                  </div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <div className="text-stone-500">Kanji Ditandai</div>
                  <div className="text-base font-bold text-stone-900 font-mono tabular-nums mt-0.5">
                    {bookmarkedKanji.length} Karakter
                  </div>
                </div>
              </div>
            </div>

            {/* Exam History */}
            {examScores.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Riwayat Simulasi Ujian N5
                </div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {examScores.map((sc, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs flex items-center justify-between"
                    >
                      <div>
                        <span className="font-semibold text-stone-800 mr-2">{sc.date}</span>
                        <span className="text-stone-500 tabular-nums">
                          Total: {sc.total} / 180 Poin (M:{sc.mojiGoi} · B:{sc.bunpou} · D:
                          {sc.dokkai})
                        </span>
                      </div>
                      <span
                        className={`font-bold text-[11px] ${
                          sc.passed ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        {sc.passed ? '✓ LULUS' : '✗ BELUM LULUS'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons with Inline Reset Confirmation */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
              {!confirmingReset ? (
                <button
                  type="button"
                  onClick={() => setConfirmingReset(true)}
                  className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-800 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Atur Ulang Progres</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-rose-700 font-semibold">Yakin hapus semua progres?</span>
                  <button
                    type="button"
                    onClick={handleConfirmResetProgress}
                    className="px-2.5 py-1 bg-rose-600 text-white rounded-md font-semibold hover:bg-rose-700"
                  >
                    Ya, Reset
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmingReset(false)}
                    className="px-2.5 py-1 bg-stone-100 text-stone-700 rounded-md hover:bg-stone-200"
                  >
                    Batal
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={() => {
                  setShowProgressModal(false);
                  setConfirmingReset(false);
                }}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div>
            N5 Master · Kurikulum Autentik Minna no Nihongo Shokyu I &amp; Kanji Master N5 (Arc
            Academy)
          </div>
          <div className="flex items-center gap-3">
            <span>Standar JLPT N5</span>
            <span aria-hidden="true">·</span>
            <span>25 Bab Minna no Nihongo</span>
            <span aria-hidden="true">·</span>
            <span>118 Kanji (15 Bab Tematik)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
