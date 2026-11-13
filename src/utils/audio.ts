/**
 * Static Packed Audio Bundle Player (Azure Neural TTS: ja-JP-NanamiNeural)
 *
 * Plays pre-generated standalone MP3 slices packed inside `/audio/n5_audio_bundle.mp3`
 * indexed by `/audio/n5_audio_index.json` (HTTP Range 206 partial fetch with full-buffer fallback).
 * Zero TTS API calls or browser speech synthesis are needed at runtime.
 */

type AudioIndexMap = Record<string, [number, number]>;

let activeAudioElement: HTMLAudioElement | null = null;
let currentPlayToken = 0;

let indexPromise: Promise<AudioIndexMap> | null = null;
let fullBundlePromise: Promise<ArrayBuffer> | null = null;
const clipUrlCache = new Map<string, string>();

/**
 * Normalize Japanese text by stripping furigana brackets, parenthetical notes,
 * and extra spaces so identical spoken phrases map to the exact same packed audio slice.
 */
export const cleanJapaneseAudioText = (text: string): string => {
  return text
    .replace(/\[[^\]]*\]/g, '')
    .replace(/（[^）]*）/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/「|」/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Deterministic 64-bit FNV-1a style hash (two 32-bit lanes)
 * Maps any cleaned Japanese string to its key in `/audio/n5_audio_index.json`.
 */
export const getAudioFileHash = (rawText: string): string => {
  const cleaned = cleanJapaneseAudioText(rawText);
  let h1 = 0x811c9dc5;
  let h2 = 0x811c9dc5 ^ 0x9e3779b9;

  for (let i = 0; i < cleaned.length; i++) {
    const code = cleaned.charCodeAt(i);
    h1 ^= code;
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= code ^ (i & 0xff);
    h2 = Math.imul(h2, 0x01000193);
  }

  const hex1 = (h1 >>> 0).toString(16).padStart(8, '0');
  const hex2 = (h2 >>> 0).toString(16).padStart(8, '0');
  return `tts_${hex1}${hex2}`;
};

async function loadAudioIndex(): Promise<AudioIndexMap> {
  if (!indexPromise) {
    indexPromise = fetch('/audio/n5_audio_index.json').then(res => {
      if (!res.ok) {
        throw new Error(`Gagal memuat indeks audio (${res.status})`);
      }
      return res.json() as Promise<AudioIndexMap>;
    });
  }
  return indexPromise;
}

async function getClipObjectUrl(hash: string): Promise<string | null> {
  const cached = clipUrlCache.get(hash);
  if (cached) return cached;

  const indexMap = await loadAudioIndex();
  const entry = indexMap[hash];
  if (!entry) return null;

  const [offset, length] = entry;
  let sliceBuffer: ArrayBuffer;

  if (fullBundlePromise) {
    const fullBuf = await fullBundlePromise;
    sliceBuffer = fullBuf.slice(offset, offset + length);
  } else {
    const res = await fetch('/audio/n5_audio_bundle.mp3', {
      headers: {
        Range: `bytes=${offset}-${offset + length - 1}`,
      },
    });

    if (res.status === 206) {
      sliceBuffer = await res.arrayBuffer();
    } else if (res.ok) {
      // Server/CDN returned full file (HTTP 200); cache once in memory for instant future slices
      const bufPromise = res.arrayBuffer();
      fullBundlePromise = bufPromise;
      const fullBuf = await bufPromise;
      sliceBuffer = fullBuf.slice(offset, offset + length);
    } else {
      throw new Error(`Gagal memuat berkas audio (${res.status})`);
    }
  }

  const blob = new Blob([sliceBuffer], { type: 'audio/mpeg' });
  const objectUrl = URL.createObjectURL(blob);
  clipUrlCache.set(hash, objectUrl);
  return objectUrl;
}

export const playJapaneseAudio = (
  text: string,
  rate: number = 0.85,
  onStart?: () => void,
  onEnd?: () => void
): boolean => {
  if (typeof window === 'undefined') return false;

  const cleanText = cleanJapaneseAudioText(text);
  if (!cleanText) {
    if (onEnd) onEnd();
    return false;
  }

  stopJapaneseAudio();
  const playToken = ++currentPlayToken;
  const hash = getAudioFileHash(cleanText);

  getClipObjectUrl(hash)
    .then(objectUrl => {
      if (playToken !== currentPlayToken) return;
      if (!objectUrl) {
        if (onEnd) onEnd();
        return;
      }

      const audio = new Audio(objectUrl);
      activeAudioElement = audio;
      // Pre-generated Azure Neural audio is already recorded at natural learner pace (-8% prosody).
      audio.playbackRate = rate < 0.8 ? 0.85 : 1.0;

      audio.onplay = () => {
        if (playToken === currentPlayToken && onStart) {
          onStart();
        }
      };

      audio.onended = () => {
        if (activeAudioElement === audio) {
          activeAudioElement = null;
        }
        if (playToken === currentPlayToken && onEnd) {
          onEnd();
        }
      };

      audio.onerror = () => {
        if (activeAudioElement === audio) {
          activeAudioElement = null;
        }
        if (playToken === currentPlayToken && onEnd) {
          onEnd();
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (activeAudioElement === audio) {
            activeAudioElement = null;
          }
          if (playToken === currentPlayToken && onEnd) {
            onEnd();
          }
        });
      }
    })
    .catch(() => {
      if (playToken === currentPlayToken && onEnd) {
        onEnd();
      }
    });

  return true;
};

export const stopJapaneseAudio = () => {
  currentPlayToken++;
  if (activeAudioElement) {
    try {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
    } catch {
      // Ignore pause errors
    }
    activeAudioElement = null;
  }
};
