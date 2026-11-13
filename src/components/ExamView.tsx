import React, { useState, useEffect } from 'react';
import { examQuestions } from '../data/examData';
import { ExamQuestion } from '../types';
import { Clock, RefreshCw, Award, ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ExamScoreResult {
  date: string;
  total: number;
  mojiGoi: number;
  bunpou: number;
  dokkai: number;
  passed: boolean;
}

interface ExamViewProps {
  onSaveScore: (score: ExamScoreResult) => void;
}

const EXAM_DURATION_SECONDS = 60 * 60; // 60 minutes JLPT N5 exam duration

export const ExamView: React.FC<ExamViewProps> = ({ onSaveScore }) => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(EXAM_DURATION_SECONDS);
  const [timedMode, setTimedMode] = useState<boolean>(true);
  const [lastScoreResult, setLastScoreResult] = useState<ExamScoreResult | null>(null);

  // Timer effect (60 minutes countdown)
  useEffect(() => {
    if (!examStarted || examFinished || !timedMode) return;
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, examFinished, timedMode]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setSelectedAnswers({});
    setCurrentQIndex(0);
    setTimeRemaining(EXAM_DURATION_SECONDS);
    setExamFinished(false);
    setLastScoreResult(null);
    setExamStarted(true);
  };

  const handleSelectOption = (optIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQIndex]: optIndex }));
  };

  const calculateExamResult = (answers: Record<number, number>): ExamScoreResult => {
    let mojiGoiCorrect = 0;
    let mojiGoiTotal = 0;
    let bunpouCorrect = 0;
    let bunpouTotal = 0;
    let dokkaiCorrect = 0;
    let dokkaiTotal = 0;

    examQuestions.forEach((q, idx) => {
      const isCorrect = answers[idx] === q.correctIndex;
      if (q.section === 'moji-goi') {
        mojiGoiTotal++;
        if (isCorrect) mojiGoiCorrect++;
      } else if (q.section === 'bunpou') {
        bunpouTotal++;
        if (isCorrect) bunpouCorrect++;
      } else if (q.section === 'dokkai') {
        dokkaiTotal++;
        if (isCorrect) dokkaiCorrect++;
      }
    });

    const mojiGoiScore = Math.round((mojiGoiCorrect / Math.max(1, mojiGoiTotal)) * 60);
    const bunpouScore = Math.round((bunpouCorrect / Math.max(1, bunpouTotal)) * 60);
    const dokkaiScore = Math.round((dokkaiCorrect / Math.max(1, dokkaiTotal)) * 60);
    const totalScore = mojiGoiScore + bunpouScore + dokkaiScore;
    // Official JLPT N5 Pass Criteria: Total >= 80/180 AND each section >= 19/60
    const passed =
      totalScore >= 80 && mojiGoiScore >= 19 && bunpouScore >= 19 && dokkaiScore >= 19;

    return {
      date: new Date().toLocaleDateString('id-ID'),
      total: totalScore,
      mojiGoi: mojiGoiScore,
      bunpou: bunpouScore,
      dokkai: dokkaiScore,
      passed,
    };
  };

  const handleFinishExam = () => {
    const result = calculateExamResult(selectedAnswers);
    setLastScoreResult(result);
    setExamFinished(true);
    onSaveScore(result);
  };

  const currentQ: ExamQuestion = examQuestions[currentQIndex];

  const mojiGoiCount = examQuestions.filter(q => q.section === 'moji-goi').length;
  const bunpouCount = examQuestions.filter(q => q.section === 'bunpou').length;
  const dokkaiCount = examQuestions.filter(q => q.section === 'dokkai').length;

  // If exam has not started yet
  if (!examStarted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6 text-center">
          <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto border border-rose-100">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
              Simulasi Ujian JLPT N5 (模擬試験 · 180 Poin)
            </h1>
            <p className="text-sm text-stone-600 max-w-lg mx-auto">
              Uji kesiapan Anda menghadapi ujian resmi Japanese Language Proficiency Test (JLPT)
              level N5 sesuai kurikulum <em>Minna no Nihongo I</em> &amp; <em>Kanji Master N5</em>.
            </p>
          </div>

          {/* Exam Specs Table */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-[11px] text-stone-500 font-semibold uppercase">
                Seksi 1 (60 Poin)
              </div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">Moji &amp; Goi (文字・語彙)</div>
              <div className="text-xs text-stone-500 mt-1">
                Kanji &amp; Kosakata ({mojiGoiCount} Soal)
              </div>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-[11px] text-stone-500 font-semibold uppercase">
                Seksi 2 (60 Poin)
              </div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">Bunpou (文法)</div>
              <div className="text-xs text-stone-500 mt-1">
                Tata Bahasa &amp; Soal ★ ({bunpouCount} Soal)
              </div>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-[11px] text-stone-500 font-semibold uppercase">
                Seksi 3 (60 Poin)
              </div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">Dokkai (読解)</div>
              <div className="text-xs text-stone-500 mt-1">
                Membaca Teks Pendek ({dokkaiCount} Soal)
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 text-left space-y-1.5">
            <div className="font-bold text-stone-800">
              Ambang Batas Kelulusan Resmi (Pass / Fail Criteria):
            </div>
            <div>
              · <strong>Total Skor Maksimal:</strong> 180 Poin (Moji-Goi 60 + Bunpou 60 + Dokkai 60).
            </div>
            <div>
              · <strong>Syarat Kelulusan (Pass Mark):</strong> Minimal total{' '}
              <strong>80 / 180 poin</strong> DAN minimal <strong>19 / 60 poin</strong> pada setiap
              seksi.
            </div>
            <div>
              · <strong>Durasi Timer Otomatis:</strong> 60 Menit (60:00).
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timed"
                checked={timedMode}
                onChange={() => setTimedMode(true)}
                className="text-rose-600"
              />
              <span>Timer Mundur Otomatis (60 Menit)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timed"
                checked={!timedMode}
                onChange={() => setTimedMode(false)}
                className="text-rose-600"
              />
              <span>Latihan Mandiri (Tanpa Batas Waktu)</span>
            </label>
          </div>

          <button
            type="button"
            onClick={handleStartExam}
            className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-white rounded-xl text-sm font-semibold hover:bg-stone-800 transition-colors shadow-xs"
          >
            Mulai Simulasi Ujian (60 Menit)
          </button>
        </div>
      </div>
    );
  }

  // If exam has finished, show Official Score Report & Detailed Review
  if (examFinished) {
    const scoreReport = lastScoreResult || calculateExamResult(selectedAnswers);
    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) correctCount++;
    });

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Official Score Report Banner */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border space-y-6 shadow-xs ${
            scoreReport.passed
              ? 'bg-emerald-50/60 border-emerald-300'
              : 'bg-rose-50/60 border-rose-300'
          }`}
        >
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Laporan Skor Akhir Simulasi JLPT N5
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 tabular-nums">
              {scoreReport.total}{' '}
              <span className="text-lg font-normal text-stone-500">/ 180 Poin</span>
            </div>

            <div
              className={`inline-flex items-center gap-1.5 text-sm sm:text-base font-bold ${
                scoreReport.passed ? 'text-emerald-800' : 'text-rose-800'
              }`}
            >
              {scoreReport.passed ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>合格 (LULUS JLPT N5 — Memenuhi Ambang Batas Resmi)</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <span>不合格 (BELUM LULUS — Belum Memenuhi Ambang Batas)</span>
                </>
              )}
            </div>
          </div>

          {/* Per-Section Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white rounded-xl border border-stone-200 p-4 text-center space-y-1">
              <div className="text-[11px] font-semibold text-stone-500">
                Moji-Goi (文字・語彙)
              </div>
              <div className="text-xl font-bold text-stone-900 font-mono tabular-nums">
                {scoreReport.mojiGoi} <span className="text-xs font-normal text-stone-400">/ 60</span>
              </div>
              <div
                className={`text-[11px] font-semibold ${
                  scoreReport.mojiGoi >= 19 ? 'text-emerald-700' : 'text-rose-600'
                }`}
              >
                {scoreReport.mojiGoi >= 19 ? '✓ Lolos Seksi (≥ 19)' : '✗ Di Bawah 19 Poin'}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-4 text-center space-y-1">
              <div className="text-[11px] font-semibold text-stone-500">Bunpou (文法 · ★)</div>
              <div className="text-xl font-bold text-stone-900 font-mono tabular-nums">
                {scoreReport.bunpou} <span className="text-xs font-normal text-stone-400">/ 60</span>
              </div>
              <div
                className={`text-[11px] font-semibold ${
                  scoreReport.bunpou >= 19 ? 'text-emerald-700' : 'text-rose-600'
                }`}
              >
                {scoreReport.bunpou >= 19 ? '✓ Lolos Seksi (≥ 19)' : '✗ Di Bawah 19 Poin'}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-4 text-center space-y-1">
              <div className="text-[11px] font-semibold text-stone-500">Dokkai (読解)</div>
              <div className="text-xl font-bold text-stone-900 font-mono tabular-nums">
                {scoreReport.dokkai} <span className="text-xs font-normal text-stone-400">/ 60</span>
              </div>
              <div
                className={`text-[11px] font-semibold ${
                  scoreReport.dokkai >= 19 ? 'text-emerald-700' : 'text-rose-600'
                }`}
              >
                {scoreReport.dokkai >= 19 ? '✓ Lolos Seksi (≥ 19)' : '✗ Di Bawah 19 Poin'}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto text-center">
            {scoreReport.passed
              ? 'Selamat! Skor total Anda ≥ 80 poin dan seluruh seksi memenuhi batas minimum ≥ 19 poin.'
              : 'Untuk lulus JLPT N5, Anda memerlukan skor total minimal 80/180 poin serta minimal 19/60 poin di setiap seksi. Pelajari pembahasan di bawah ini!'}
          </p>

          <div className="flex justify-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleStartExam}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Ulangi Simulasi Ujian</span>
            </button>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-stone-900">
            Pembahasan Lengkap Soal Ujian ({correctCount} / {examQuestions.length} Jawaban Benar)
          </h2>

          {examQuestions.map((q, idx) => {
            const userAns = selectedAnswers[idx];
            const isCorrect = userAns === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-bold text-stone-900 tabular-nums">Soal #{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">
                      {q.section.replace('-', ' ')} · {q.subSection}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-bold ${
                      isCorrect ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    {isCorrect ? '✓ Benar' : '✗ Salah'}
                  </span>
                </div>

                {/* Passage for Dokkai if exists */}
                {q.passage && (
                  <div className="p-3 bg-stone-50 rounded-lg text-xs sm:text-sm font-jp border border-stone-200 whitespace-pre-line leading-relaxed text-stone-800">
                    {q.passage}
                  </div>
                )}

                <div className="text-sm font-semibold text-stone-900 font-jp whitespace-pre-line">
                  {q.questionText}
                </div>

                {/* Options Review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-jp">
                  {q.options.map((opt, optIdx) => {
                    const isUserPick = userAns === optIdx;
                    const isRightOption = optIdx === q.correctIndex;

                    let optStyle = 'bg-stone-50 border-stone-200 text-stone-700';
                    if (isRightOption) {
                      optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                    } else if (isUserPick) {
                      optStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${optStyle}`}
                      >
                        <span>
                          {optIdx + 1}. {opt}
                        </span>
                        {isRightOption && (
                          <span className="text-emerald-700 font-bold text-xs">✓ Kunci</span>
                        )}
                        {isUserPick && !isRightOption && (
                          <span className="text-rose-600 font-bold text-xs">Pilihan Anda</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-700 border border-stone-200">
                  <span className="font-semibold text-stone-900 mr-1.5">Penjelasan:</span>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Exam Interface
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Header with 60-Minute Timer and Progress */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md rounded-xl border border-stone-200 p-4 shadow-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-stone-500">Soal</span>
          <span className="text-sm font-bold text-stone-900 tabular-nums">
            {currentQIndex + 1} / {examQuestions.length}
          </span>
          <span className="text-xs text-stone-400 ml-2 hidden sm:inline">
            ({currentQ.subSection})
          </span>
        </div>

        {timedMode && (
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-mono font-bold tabular-nums ${
              timeRemaining < 300
                ? 'bg-rose-50 border-rose-300 text-rose-700'
                : 'bg-stone-100 border-stone-200 text-stone-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleFinishExam}
          className="px-3.5 py-1.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
        >
          Selesaikan Ujian
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Dokkai Passage if any */}
        {currentQ.passage && (
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-sm font-jp whitespace-pre-line leading-relaxed text-stone-900">
            {currentQ.passage}
          </div>
        )}

        {/* Question Text */}
        <div className="text-base sm:text-lg font-semibold text-stone-900 font-jp whitespace-pre-line leading-relaxed">
          {currentQ.questionText}
        </div>

        {/* Options */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt, optIdx) => {
            const isChosen = selectedAnswers[currentQIndex] === optIdx;

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full p-4 rounded-xl border text-sm text-left transition-colors flex items-center justify-between font-jp ${
                  isChosen
                    ? 'bg-rose-50 border-rose-400 text-rose-950 font-semibold shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>
                  {optIdx + 1}. {opt}
                </span>
                {isChosen && <span className="text-xs font-bold text-rose-700">✓ Dipilih</span>}
              </button>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <button
            type="button"
            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Soal Sebelumnya</span>
          </button>

          {currentQIndex < examQuestions.length - 1 ? (
            <button
              type="button"
              onClick={() =>
                setCurrentQIndex(prev => Math.min(examQuestions.length - 1, prev + 1))
              }
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <span>Soal Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinishExam}
              className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Kirim Jawaban &amp; Lihat Laporan Skor
            </button>
          )}
        </div>
      </div>

      {/* Question Jump Grid */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs">
        <div className="text-xs text-stone-500 mb-2 font-medium">Navigasi Nomor Soal:</div>
        <div className="flex flex-wrap gap-2">
          {examQuestions.map((_, idx) => {
            const isAnswered = selectedAnswers[idx] !== undefined;
            const isCurrent = currentQIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentQIndex(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all tabular-nums ${
                  isCurrent
                    ? 'bg-rose-600 text-white shadow-xs'
                    : isAnswered
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
