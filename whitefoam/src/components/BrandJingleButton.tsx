import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BrandJingleButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const { language } = useLanguage();

  const playSynthesizedChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = audioCtxRef.current || new AudioCtx();
      audioCtxRef.current = ctx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setIsPlaying(true);

      // Play a sparkling 4-note upward joyful detergent chime (G4 -> B4 -> D5 -> G5)
      const notes = [392.0, 493.88, 587.33, 783.99, 987.77];
      const startTime = ctx.currentTime + 0.05;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm sparkling bell sound
        osc.type = idx === notes.length - 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, startTime + idx * 0.14);

        gain.gain.setValueAtTime(0.001, startTime + idx * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.25, startTime + idx * 0.14 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + idx * 0.14 + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime + idx * 0.14);
        osc.stop(startTime + idx * 0.14 + 1.0);
      });

      // Try speech synthesis for the slogan "चमक जो खुद बोले"
      const chimeDuration = notes.length * 140 + 600;
      setTimeout(() => {
        if ('speechSynthesis' in window) {
          const text = 'व्हाइट फोम! चमक जो खुद बोले!';
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 1.0;
          utterance.pitch = 1.15;
          utterance.volume = 0.9;
          
          utterance.lang = 'hi-IN';

          utterance.onend = () => {
            setIsPlaying(false);
          };
          utterance.onerror = () => {
            setIsPlaying(false);
          };

          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        } else {
          setIsPlaying(false);
        }
      }, chimeDuration);

    } catch (e) {
      console.warn('Audio playback not permitted or supported', e);
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  if (compact) {
    return (
      <button
        onClick={isPlaying ? handleStop : playSynthesizedChime}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer ${
          isPlaying
            ? 'bg-rose-600 text-white animate-pulse ring-2 ring-rose-400'
            : 'bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white'
        }`}
        title="Play Brand Slogan Jingle (चमक जो खुद बोले)"
      >
        {isPlaying ? (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span>Mute Jingle</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5" />
            <span>🎵 चमक जो खुद बोले</span>
          </>
        )}
      </button>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-white border-2 border-rose-200 shadow-sm">
      <button
        onClick={isPlaying ? handleStop : playSynthesizedChime}
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-sm ${
          isPlaying
            ? 'bg-rose-600 text-white animate-bounce'
            : 'bg-rose-600 hover:bg-rose-700 text-white'
        }`}
        aria-label="Play brand audio jingle"
      >
        {isPlaying ? <VolumeX className="w-5 h-5" /> : <Music className="w-5 h-5" />}
      </button>
      <div className="text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-black text-slate-900 tracking-tight">
            {language === 'hi' ? 'ब्रांड धुन सुनें' : 'Audio Brand Slogan'}
          </span>
          <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200">
            <Sparkles className="w-2.5 h-2.5" /> 4-NOTE CHIME
          </span>
        </div>
        <p className="text-[11px] font-semibold text-slate-600">
          {isPlaying
            ? (language === 'hi' ? 'धुन बज रही है...' : 'Playing musical chime...')
            : '"चमक जो खुद बोले" — White Foam'}
        </p>
      </div>

      {isPlaying && (
        <div className="flex items-center gap-0.5 ml-2">
          <span className="w-1 h-3 bg-rose-500 rounded-full animate-pulse"></span>
          <span className="w-1 h-5 bg-rose-600 rounded-full animate-bounce"></span>
          <span className="w-1 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          <span className="w-1 h-4 bg-rose-500 rounded-full animate-bounce"></span>
        </div>
      )}
    </div>
  );
};
