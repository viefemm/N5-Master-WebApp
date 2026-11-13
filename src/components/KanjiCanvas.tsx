import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Eye, EyeOff, Undo2, Sparkles, CheckCircle2 } from 'lucide-react';

interface KanjiCanvasProps {
  kanji: string;
  strokes?: number;
  strokeOrderGuide?: string;
  compact?: boolean;
}

interface Point {
  x: number;
  y: number;
}

interface StrokePath {
  points: Point[];
  brushSize: number;
}

export const KanjiCanvas: React.FC<KanjiCanvasProps> = ({
  kanji,
  strokes,
  strokeOrderGuide,
  compact = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [showKakijunTips, setShowKakijunTips] = useState(true);
  const [brushSize, setBrushSize] = useState<4 | 7 | 12>(7);
  const [strokeHistory, setStrokeHistory] = useState<StrokePath[]>([]);
  const currentPointsRef = useRef<Point[]>([]);

  const redrawAllStrokes = (paths: StrokePath[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    paths.forEach(path => {
      if (path.points.length === 0) return;
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = path.brushSize;

      ctx.moveTo(path.points[0].x, path.points[0].y);
      for (let i = 1; i < path.points.length; i++) {
        ctx.lineTo(path.points[i].x, path.points[i].y);
      }
      if (path.points.length === 1) {
        ctx.lineTo(path.points[0].x + 0.5, path.points[0].y + 0.5);
      }
      ctx.stroke();
    });
  };

  const clearCanvas = () => {
    setStrokeHistory([]);
    currentPointsRef.current = [];
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleUndoStroke = () => {
    setStrokeHistory(prev => {
      const updated = prev.slice(0, -1);
      redrawAllStrokes(updated);
      return updated;
    });
  };

  useEffect(() => {
    clearCanvas();
  }, [kanji]);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0] || e.changedTouches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pt = getCoordinates(e);
    setIsDrawing(true);
    currentPointsRef.current = [pt];

    ctx.beginPath();
    ctx.moveTo(pt.x, pt.y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1c1917';
    ctx.lineWidth = brushSize;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pt = getCoordinates(e);
    currentPointsRef.current.push(pt);

    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentPointsRef.current.length > 0) {
      const newStroke: StrokePath = {
        points: [...currentPointsRef.current],
        brushSize,
      };
      setStrokeHistory(prev => [...prev, newStroke]);
      currentPointsRef.current = [];
    }
  };

  const drawnStrokesCount = strokeHistory.length;
  const isTargetStrokesMatched = strokes !== undefined && drawnStrokesCount === strokes;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Status Bar: Kakusuu & Stroke Progress */}
      <div className="w-full max-w-[288px] flex items-center justify-between text-xs mb-2 px-0.5">
        <div className="flex items-center gap-1.5 text-stone-600 font-medium">
          <span>Target: <strong className="font-mono text-stone-900">{strokes ?? '-'} 画</strong></span>
          <span aria-hidden="true">·</span>
          <span className={`font-mono font-semibold ${
            isTargetStrokesMatched
              ? 'text-emerald-700'
              : drawnStrokesCount > (strokes || 99)
              ? 'text-rose-600'
              : 'text-stone-700'
          }`}>
            Coretan: {drawnStrokesCount}{strokes ? `/${strokes}` : ''}
          </span>
        </div>

        {isTargetStrokesMatched && (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pas {strokes} 画!</span>
          </span>
        )}
      </div>

      {/* Canvas Area with Traditional 4-Quadrant Japanese Masume Grid */}
      <div
        className={`relative ${
          compact ? 'w-56 h-56' : 'w-64 h-64 sm:w-72 sm:h-72'
        } bg-white rounded-xl border-2 border-stone-300 shadow-inner overflow-hidden select-none touch-none`}
      >
        {/* Traditional 4-quadrant masume guideline */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full border border-dashed border-stone-200">
            {/* Horizontal center line */}
            <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-rose-300/80" />
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-rose-300/80" />
            {/* Diagonal subtle guides */}
            <svg className="w-full h-full text-stone-100" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
            </svg>
          </div>
          {/* Quadrant labels (Masume 1-4) */}
          {showKakijunTips && (
            <>
              <span className="absolute top-1.5 left-2 text-[10px] font-mono text-stone-300">① Kiri-Atas</span>
              <span className="absolute top-1.5 right-2 text-[10px] font-mono text-stone-300">② Kanan-Atas</span>
              <span className="absolute bottom-1.5 left-2 text-[10px] font-mono text-stone-300">③ Kiri-Bawah</span>
              <span className="absolute bottom-1.5 right-2 text-[10px] font-mono text-stone-300">④ Kanan-Bawah</span>
            </>
          )}
        </div>

        {/* Kanji Reference Guide Overlay for Tracing */}
        {showGuide && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 flex items-center justify-center font-kanji ${
              compact ? 'text-[120px]' : 'text-[140px] sm:text-[160px]'
            } font-bold text-rose-500/20 select-none pointer-events-none transition-opacity duration-150`}
          >
            {kanji}
          </div>
        )}

        {/* Interactive Drawing Canvas */}
        <canvas
          ref={canvasRef}
          width={288}
          height={288}
          className="absolute inset-0 w-full h-full cursor-crosshair z-10"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      {/* Control Buttons: Guide, Brush Thickness (Tipis, Sedang, Tebal), Undo, Clear */}
      <div className="flex flex-wrap items-center justify-between gap-2 w-full max-w-[288px] mt-3 text-xs">
        <button
          type="button"
          onClick={() => setShowGuide(!showGuide)}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
            showGuide
              ? 'bg-rose-50 border-rose-200 text-rose-700 font-medium'
              : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
          }`}
          title="Tampilkan / Sembunyikan Bayangan Kanji"
        >
          {showGuide ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span>{showGuide ? 'Contoh: ON' : 'Contoh: OFF'}</span>
        </button>

        {/* Brush Thickness: Tipis, Sedang, Tebal */}
        <div className="flex items-center gap-0.5 bg-stone-100 p-0.5 rounded-lg border border-stone-200">
          <button
            type="button"
            onClick={() => setBrushSize(4)}
            className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 ${
              brushSize === 4 ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Tipis
          </button>
          <button
            type="button"
            onClick={() => setBrushSize(7)}
            className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 ${
              brushSize === 7 ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Sedang
          </button>
          <button
            type="button"
            onClick={() => setBrushSize(12)}
            className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 ${
              brushSize === 12 ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Tebal
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleUndoStroke}
            disabled={strokeHistory.length === 0}
            className="p-1.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 disabled:opacity-40 rounded-lg transition-colors"
            title="Batalkan coretan terakhir"
          >
            <Undo2 className="w-3.5 h-3.5 text-stone-600" />
          </button>
          <button
            type="button"
            onClick={clearCanvas}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Hapus seluruh kanvas"
          >
            <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
            <span>Hapus</span>
          </button>
        </div>
      </div>

      {/* Kakijun (Urutan Coretan) Reference Box */}
      <div className="w-full max-w-[288px] mt-2.5 p-2.5 bg-white rounded-lg border border-stone-200 text-[11px] text-stone-600 space-y-1">
        <div className="flex items-center justify-between font-semibold text-stone-800">
          <span>Panduan Urutan Coretan (書き順 / Kakijun):</span>
          <button
            type="button"
            onClick={() => setShowKakijunTips(!showKakijunTips)}
            className="text-[10px] text-rose-600 hover:underline"
          >
            {showKakijunTips ? 'Sembunyikan Kuadran' : 'Tampilkan Kuadran'}
          </button>
        </div>
        <p className="leading-relaxed text-stone-600">
          {strokeOrderGuide ||
            `Goreskan ${strokes ? `${strokes} coretan` : 'kanji'} dari atas ke bawah (上→下), kiri ke kanan (左→右), dan garis mendatar lebih dulu sebelum garis tegak.`}
        </p>
      </div>
    </div>
  );
};
