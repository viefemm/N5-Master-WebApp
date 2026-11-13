import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  activeTab: 'minna' | 'kotoba' | 'kanji' | 'conjugation' | 'exam' | 'sensei';
  setActiveTab: (tab: 'minna' | 'kotoba' | 'kanji' | 'conjugation' | 'exam' | 'sensei') => void;
  showProgressModal: boolean;
  setShowProgressModal: (open: boolean) => void;
  completedLessonsCount: number;
  masteredKanjiCount: number;
  masteredKotobaCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  showProgressModal,
  setShowProgressModal,
  completedLessonsCount,
  masteredKanjiCount,
  masteredKotobaCount = 0,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => setActiveTab('minna')}
          className="text-left text-lg font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0"
        >
          N5 Master
        </button>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('minna')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'minna'
                ? 'text-rose-600 border-rose-600 font-semibold'
                : 'text-stone-600 border-transparent hover:text-stone-900'
            }`}
          >
            Materi Minna (Bab 1-25)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('kotoba')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'kotoba'
                ? 'text-rose-600 border-rose-600 font-semibold'
                : 'text-stone-600 border-transparent hover:text-stone-900'
            }`}
          >
            Kotoba
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('kanji')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'kanji'
                ? 'text-rose-600 border-rose-600 font-semibold'
                : 'text-stone-600 border-transparent hover:text-stone-900'
            }`}
          >
            Kanji Master N5
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('conjugation')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'conjugation'
                ? 'text-rose-600 border-rose-600 font-semibold'
                : 'text-stone-600 border-transparent hover:text-stone-900'
            }`}
          >
            Tabel Konjugasi
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('exam')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'exam'
                ? 'text-rose-600 border-rose-600 font-semibold'
                : 'text-stone-600 border-transparent hover:text-stone-900'
            }`}
          >
            Simulasi Ujian N5
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sensei')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-1 border-b-2 ${
              activeTab === 'sensei'
                ? 'text-rose-600 border-rose-600 font-semibold'
                : 'text-stone-600 border-transparent hover:text-stone-900'
            }`}
          >
            Tanya Sensei
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setShowProgressModal(!showProgressModal)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-200 transition-colors whitespace-nowrap shrink-0"
            title="Lihat progres belajar dan statistik N5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              Progres ({completedLessonsCount}/25 Bab · {masteredKotobaCount} Kotoba · {masteredKanjiCount} Kanji)
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-between border-t border-stone-100 px-3 py-2 bg-stone-50/90 overflow-x-auto text-xs font-medium">
        <button
          type="button"
          onClick={() => setActiveTab('minna')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'minna' ? 'bg-white text-rose-600 shadow-xs font-semibold' : 'text-stone-600'
          }`}
        >
          Minna (1-25)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('kotoba')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'kotoba' ? 'bg-white text-rose-600 shadow-xs font-semibold' : 'text-stone-600'
          }`}
        >
          Kotoba
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('kanji')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'kanji' ? 'bg-white text-rose-600 shadow-xs font-semibold' : 'text-stone-600'
          }`}
        >
          Kanji N5
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('conjugation')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'conjugation' ? 'bg-white text-rose-600 shadow-xs font-semibold' : 'text-stone-600'
          }`}
        >
          Konjugasi
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('exam')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'exam' ? 'bg-white text-rose-600 shadow-xs font-semibold' : 'text-stone-600'
          }`}
        >
          Ujian N5
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('sensei')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 transition-colors ${
            activeTab === 'sensei' ? 'bg-white text-rose-600 shadow-xs font-semibold' : 'text-stone-600'
          }`}
        >
          Sensei
        </button>
      </div>
    </header>
  );
};
