import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const PromiseBanner: React.FC = () => {
  const promises = [
    {
      brand: 'WHITE FOAM PROMISE',
      headline:
        'WHITE FOAM: "चमक जो खुद बोले" • EXTRA ACTIVE FOAM & STAINLESS BRILLIANCE',
      sub: 'Detergent Things Industries India',
      icon: Sparkles,
      color: 'bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-black',
      border: 'border-amber-400/40',
    },
    {
      brand: 'WHITE FOAM CONFIDENCE',
      headline:
        'WELCOME TO THE WORLD OF WHITE FOAM AND A PROMISE TO GIVE YOU THE CONFIDENCE OF AN OUTSTANDING CLEAN',
      sub: 'Tough Stains Out. Stainless Whites In.',
      icon: Sparkles,
      color: 'bg-amber-500 text-slate-950',
      border: 'border-amber-400/40',
    },
    {
      brand: 'DETERGENT THINGS PROMISE',
      headline:
        'CLEAN IS OUR BUSINESS. INTEGRITY IS OUR PROMISE • DIL SE SAAF',
      sub: 'Manufactured with integrity and world-class standards at our modern unit in Bihar.',
      icon: HeartHandshake,
      color: 'bg-fuchsia-600 text-white',
      border: 'border-fuchsia-400/40',
    },
    {
      brand: 'BIHAR VALUE PLEDGE',
      headline:
        'BETTER PRODUCTS. BETTER VALUE. BETTER LIVING WITH WHITE FOAM.',
      sub: 'Revolutionizing Indian fabric care with accessible, high-efficiency cleaning for every home.',
      icon: ShieldCheck,
      color: 'bg-rose-600 text-white',
      border: 'border-rose-400/40',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promises.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [promises.length]);

  const active = promises[currentIndex];
  const Icon = active.icon;

  return (
    <div className="bg-slate-950 text-white py-3.5 px-4 sm:px-8 border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span
            className={`px-2.5 py-0.5 rounded text-[11px] font-black tracking-wider uppercase inline-flex items-center gap-1.5 shadow-xs ${active.color}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {active.brand}
          </span>
          <p className="text-xs sm:text-sm font-bold tracking-tight text-slate-100">
            {active.headline}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {promises.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-white'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={p.brand}
              aria-label={p.brand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
