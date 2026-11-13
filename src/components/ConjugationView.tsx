import React, { useState, useMemo } from 'react';
import { verbConjugationList, conjugationRules } from '../data/conjugationData';
import { VerbConjugationItem } from '../types';
import { playJapaneseAudio } from '../utils/audio';
import { FuriganaText } from './FuriganaText';
import { Volume2, RotateCcw, Filter } from 'lucide-react';

type DrillTargetKey = 'dictionary' | 'masu' | 'te' | 'nai' | 'ta' | 'nakatta';

export const ConjugationView: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number | 'all'>('all');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [searchVerb, setSearchVerb] = useState('');
  const [activeTab, setActiveTab] = useState<'table' | 'rules' | 'drill'>('table');

  const availableChapters = useMemo(() => {
    const set = new Set<number>();
    for (const v of verbConjugationList) {
      if (v.chapter) set.add(v.chapter);
    }
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  // Interactive Drill State
  const [drillIndex, setDrillIndex] = useState(0);
  const [targetFormKey, setTargetFormKey] = useState<DrillTargetKey>('te');
  const [drillScore, setDrillScore] = useState(0);
  const [drillTotal, setDrillTotal] = useState(0);
  const [drillAnswered, setDrillAnswered] = useState(false);
  const [selectedDrillChoice, setSelectedDrillChoice] = useState<string | null>(null);

  const formNames: Record<DrillTargetKey, string> = {
    dictionary: 'Bentuk Kamus (Jisho-kei / 辞書形)',
    masu: 'Bentuk -Masu (Masu-kei / ます形)',
    te: 'Bentuk -Te (Te-kei / て形)',
    nai: 'Bentuk -Nai (Nai-kei / ない形)',
    ta: 'Bentuk -Ta / Lampau (Ta-kei / た形)',
    nakatta: 'Bentuk -Nakatta (Lampau Negatif)',
  };

  const filteredVerbs = verbConjugationList.filter(v => {
    const matchesGroup = selectedGroup === 'all' || v.group === selectedGroup;
    const matchesChapter = selectedChapter === 'all' || v.chapter === selectedChapter;
    const q = searchVerb.trim().toLowerCase();
    const matchesSearch =
      !q ||
      v.dictionary.includes(q) ||
      v.kanji.includes(q) ||
      v.forms.masu.includes(q) ||
      v.forms.te.includes(q) ||
      v.meaningId.toLowerCase().includes(q);
    return matchesGroup && matchesChapter && matchesSearch;
  });

  const handlePlayAudio = (text: string) => {
    playJapaneseAudio(text, 0.85);
  };

  const getVerbFormValue = (verb: VerbConjugationItem, key: DrillTargetKey): string => {
    if (key === 'dictionary') return verb.dictionary;
    return verb.forms[key];
  };

  // Drill logic with deterministic memoized options
  const drillPool = filteredVerbs.length >= 4 ? filteredVerbs : verbConjugationList;
  const currentDrillVerb: VerbConjugationItem =
    drillPool[drillIndex % drillPool.length];
  const correctDrillAnswer = getVerbFormValue(currentDrillVerb, targetFormKey);

  const drillOptions = useMemo(() => {
    // Generate plausible distractors from both the same verb's other forms and other verbs' same form
    const sameVerbOtherForms = (
      ['dictionary', 'masu', 'te', 'nai', 'ta', 'nakatta'] as DrillTargetKey[]
    )
      .filter(k => k !== targetFormKey)
      .map(k => getVerbFormValue(currentDrillVerb, k));

    const otherVerbsSameForm = verbConjugationList
      .filter(v => v.id !== currentDrillVerb.id)
      .map(v => getVerbFormValue(v, targetFormKey));

    const candidates = [
      sameVerbOtherForms[drillIndex % sameVerbOtherForms.length],
      sameVerbOtherForms[(drillIndex + 2) % sameVerbOtherForms.length],
      otherVerbsSameForm[(drillIndex * 5) % otherVerbsSameForm.length],
      otherVerbsSameForm[(drillIndex * 7 + 1) % otherVerbsSameForm.length],
    ];

    const uniqueDistractors: string[] = [];
    for (const c of candidates) {
      if (c && c !== correctDrillAnswer && !uniqueDistractors.includes(c)) {
        uniqueDistractors.push(c);
      }
      if (uniqueDistractors.length === 3) break;
    }

    const all = [correctDrillAnswer, ...uniqueDistractors];
    const shift = (drillIndex * 3) % all.length;
    return [...all.slice(shift), ...all.slice(0, shift)];
  }, [drillIndex, currentDrillVerb, targetFormKey, correctDrillAnswer]);

  const handleSelectDrill = (option: string) => {
    if (drillAnswered) return;
    setSelectedDrillChoice(option);
    setDrillAnswered(true);
    setDrillTotal(prev => prev + 1);
    if (option === correctDrillAnswer) {
      setDrillScore(prev => prev + 1);
    }
  };

  const handleNextDrill = () => {
    setDrillAnswered(false);
    setSelectedDrillChoice(null);
    const nextIdx = drillIndex + 1;
    setDrillIndex(nextIdx);
    const keys: DrillTargetKey[] = ['dictionary', 'masu', 'te', 'nai', 'ta', 'nakatta'];
    setTargetFormKey(keys[nextIdx % keys.length]);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
              <span>
                <FuriganaText
                  text="Matriks Konjugasi Kata Kerja (動詞活用 - Doushi Katsuyou)"
                  floatingOnly
                />
              </span>
              <span aria-hidden="true">·</span>
              <span>Modul Minna no Nihongo Bab 4–25</span>
              <span aria-hidden="true">·</span>
              <span className="text-rose-700 font-medium">
                Arahkan kursor / tahan sentuhan pada Kanji untuk Furigana mengambang
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Matriks &amp; Drill Konjugasi Kata Kerja N5 ({verbConjugationList.length} Kata Kerja)
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Kuasai perubahan 3 golongan kata kerja N5 dari modul ke Bentuk Kamus (
              <em>Jisho-kei</em>), Bentuk Masu (<em>Masu-kei</em>), Bentuk Te (<em>Te-kei</em>),
              Bentuk Nai (<em>Nai-kei</em>), dan Bentuk Ta (<em>Ta-kei</em>).
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-center shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('table')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'table'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Matriks Konjugasi ({filteredVerbs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'rules'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Rumus 3 Golongan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('drill')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'drill'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Drill Quiz Interaktif
            </button>
          </div>
        </div>

        {/* Toolbar in Table mode */}
        {activeTab === 'table' && (
          <div className="mt-5 pt-4 border-t border-stone-100 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-2.5 flex-1">
              <input
                type="text"
                value={searchVerb}
                onChange={e => setSearchVerb(e.target.value)}
                placeholder="Cari kata kerja (misal: 飲む, makan, ikimasu, たべます)..."
                className="w-full sm:w-72 px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-rose-400 focus:bg-white"
              />

              <div className="flex items-center gap-1.5 text-xs">
                <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <select
                  value={selectedChapter}
                  onChange={e =>
                    setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value))
                  }
                  className="bg-stone-50 border border-stone-200 text-stone-800 rounded-lg px-2.5 py-2 text-xs font-medium focus:outline-hidden focus:border-stone-400"
                  aria-label="Filter Bab Kemunculan"
                >
                  <option value="all">Semua Bab (Bab 4–25)</option>
                  {availableChapters.map(ch => (
                    <option key={ch} value={ch}>
                      Bab {ch} ({verbConjugationList.filter(v => v.chapter === ch).length} kata)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs overflow-x-auto pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setSelectedGroup('all')}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  selectedGroup === 'all'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Semua Golongan
              </button>
              <button
                type="button"
                onClick={() => setSelectedGroup(1)}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  selectedGroup === 1
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Golongan I (五段)
              </button>
              <button
                type="button"
                onClick={() => setSelectedGroup(2)}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  selectedGroup === 2
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Golongan II (一段)
              </button>
              <button
                type="button"
                onClick={() => setSelectedGroup(3)}
                className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                  selectedGroup === 3
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                Golongan III (不規則)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* TAB 1: MATRIKS KONJUGASI LENGKAP */}
      {activeTab === 'table' && (
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
                <tr>
                  <th className="py-3 px-4">Kanji &amp; Arti</th>
                  <th className="py-3 px-3">Bab &amp; Gol.</th>
                  <th className="py-3 px-3">Bentuk Kamus (辞書形)</th>
                  <th className="py-3 px-3">Bentuk Masu (ます形)</th>
                  <th className="py-3 px-3">Bentuk Te (て形)</th>
                  <th className="py-3 px-3">Bentuk Nai (ない形)</th>
                  <th className="py-3 px-3">Bentuk Ta (た形)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-jp">
                {filteredVerbs.map(v => (
                  <tr key={v.id} className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-kanji font-bold text-stone-900 text-base">
                        <FuriganaText
                          text={v.kanjiDictionary || v.kanji}
                          kana={v.dictionary}
                          floatingOnly
                        />
                      </div>
                      <div className="text-[11px] text-stone-500 font-sans mt-0.5">
                        {v.meaningId}
                      </div>
                    </td>

                    <td className="py-3 px-3 font-sans">
                      <div className="text-[11px] font-bold text-rose-700">
                        Bab {v.chapter ?? 4}
                      </div>
                      <span className="text-xs font-medium text-stone-600 whitespace-nowrap">
                        {v.group === 1
                          ? 'Gol. I (五段)'
                          : v.group === 2
                          ? 'Gol. II (一段)'
                          : 'Gol. III (不規則)'}
                      </span>
                    </td>

                    {/* Jisho-kei */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 font-medium text-stone-900">
                        <FuriganaText
                          text={v.kanjiDictionary || v.dictionary}
                          kana={v.dictionary}
                          floatingOnly
                        />
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(v.dictionary)}
                          className="text-stone-400 hover:text-stone-700"
                          title="Putar Bentuk Kamus"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-stone-400">{v.dictionary}</div>
                    </td>

                    {/* Masu-kei */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1">
                        <span className="text-stone-800 font-medium">
                          <FuriganaText
                            text={v.kanjiMasu || v.forms.masu}
                            kana={v.forms.masu}
                            floatingOnly
                          />
                        </span>
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(v.forms.masu)}
                          className="text-stone-300 hover:text-stone-600"
                          title="Putar Bentuk Masu"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-[11px] text-stone-400">{v.forms.masu}</div>
                    </td>

                    {/* Te-kei */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 font-semibold text-rose-700">
                        <FuriganaText
                          text={v.kanjiTe || v.forms.te}
                          kana={v.forms.te}
                          floatingOnly
                        />
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(v.forms.te)}
                          className="text-stone-300 hover:text-stone-600"
                          title="Putar Bentuk Te"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-[11px] text-rose-500/80">{v.forms.te}</div>
                    </td>

                    {/* Nai-kei */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 text-stone-700 font-medium">
                        <FuriganaText
                          text={v.kanjiNai || v.forms.nai}
                          kana={v.forms.nai}
                          floatingOnly
                        />
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(v.forms.nai)}
                          className="text-stone-300 hover:text-stone-600"
                          title="Putar Bentuk Nai"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-[11px] text-stone-400">{v.forms.nai}</div>
                    </td>

                    {/* Ta-kei */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1 text-stone-800 font-medium">
                        <FuriganaText
                          text={v.kanjiTa || v.forms.ta}
                          kana={v.forms.ta}
                          floatingOnly
                        />
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(v.forms.ta)}
                          className="text-stone-300 hover:text-stone-600"
                          title="Putar Bentuk Ta"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-[11px] text-stone-400">{v.forms.ta}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: PANDUAN RUMUS 3 GOLONGAN */}
      {activeTab === 'rules' && (
        <div className="space-y-4">
          {conjugationRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3"
            >
              <h2 className="text-base sm:text-lg font-bold text-stone-900">
                0{idx + 1}. {rule.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">{rule.desc}</p>

              <div className="p-3.5 bg-stone-50 rounded-lg space-y-2 border border-stone-100">
                {rule.rules.map((r, rIdx) => (
                  <div
                    key={rIdx}
                    className="text-xs sm:text-sm text-stone-800 flex items-start gap-2 font-jp"
                  >
                    <span className="font-bold text-rose-600">·</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: DRILL QUIZ INTERAKTIF */}
      {activeTab === 'drill' && (
        <div className="max-w-lg mx-auto bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>Drill Konjugasi N5 · Soal #{drillIndex + 1}</span>
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-rose-600 tabular-nums">
                Skor: {drillScore} / {drillTotal}
              </span>
              {drillTotal > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setDrillScore(0);
                    setDrillTotal(0);
                    setDrillIndex(0);
                    setDrillAnswered(false);
                    setSelectedDrillChoice(null);
                  }}
                  className="text-stone-400 hover:text-stone-700"
                  title="Reset Skor Drill"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Target form selector */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {(['dictionary', 'masu', 'te', 'nai', 'ta'] as DrillTargetKey[]).map(k => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  setTargetFormKey(k);
                  setDrillAnswered(false);
                  setSelectedDrillChoice(null);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                  targetFormKey === k
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {k === 'dictionary'
                  ? 'Jisho-kei'
                  : k === 'masu'
                  ? 'Masu-kei'
                  : k === 'te'
                  ? 'Te-kei'
                  : k === 'nai'
                  ? 'Nai-kei'
                  : 'Ta-kei'}
              </button>
            ))}
          </div>

          <div className="text-center py-3 space-y-1.5">
            <div className="text-xs text-stone-500">Ubahlah kata kerja berikut ke dalam:</div>
            <div className="text-sm font-bold text-rose-700">{formNames[targetFormKey]}</div>

            <div className="pt-3 font-kanji text-5xl font-bold text-stone-900">
              <FuriganaText
                text={currentDrillVerb.kanjiDictionary || currentDrillVerb.kanji}
                kana={currentDrillVerb.dictionary}
                floatingOnly
              />
            </div>
            <div className="text-xs text-stone-600 font-jp">
              {targetFormKey === 'dictionary'
                ? `Bentuk Masu: ${currentDrillVerb.forms.masu}`
                : `Bentuk Kamus: ${currentDrillVerb.dictionary}`}{' '}
              · {currentDrillVerb.meaningId} (Bab {currentDrillVerb.chapter ?? 4} · Golongan{' '}
              {currentDrillVerb.group})
            </div>
          </div>

          {/* Drill Options */}
          <div className="space-y-2.5">
            {drillOptions.map((opt, idx) => {
              const isChosen = selectedDrillChoice === opt;
              const isCorrect = opt === correctDrillAnswer;

              let style = 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100';
              if (drillAnswered) {
                if (isCorrect)
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                else if (isChosen) style = 'bg-rose-50 border-rose-300 text-rose-900';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={drillAnswered}
                  onClick={() => handleSelectDrill(opt)}
                  className={`w-full p-3 rounded-xl border text-sm text-left transition-colors font-jp flex items-center justify-between ${style}`}
                >
                  <span>{opt}</span>
                  {drillAnswered && isCorrect && (
                    <span className="text-emerald-600 font-bold text-xs">✓ Benar</span>
                  )}
                  {drillAnswered && isChosen && !isCorrect && (
                    <span className="text-rose-500 font-bold text-xs">✗ Salah</span>
                  )}
                </button>
              );
            })}
          </div>

          {drillAnswered && (
            <div className="space-y-3">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs flex items-center justify-between font-jp">
                <div>
                  <span className="text-stone-500 mr-1.5">Jawaban Tepat:</span>
                  <strong className="text-stone-900">{correctDrillAnswer}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => handlePlayAudio(correctDrillAnswer)}
                  className="flex items-center gap-1 text-rose-700 font-semibold"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dengarkan</span>
                </button>
              </div>
              <button
                type="button"
                onClick={handleNextDrill}
                className="w-full py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Lanjut ke Kata Kerja Berikutnya →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
