import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  Droplets,
  Heart,
  ShieldCheck,
  ChevronRight,
  RotateCcw,
  Clock,
  Layers,
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/detergentData';

interface WhiteFoamSpotlightProps {
  onLearnMoreFacilities: () => void;
  onOpenPartnership: () => void;
}

export const WhiteFoamSpotlight: React.FC<WhiteFoamSpotlightProps> = ({
  onLearnMoreFacilities,
  onOpenPartnership,
}) => {
  const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);
  const [isSimulatingDissolve, setIsSimulatingDissolve] = useState(false);
  const [dissolveProgress, setDissolveProgress] = useState(100);

  const badges = [
    {
      title: 'FAST ACTION TECHNOLOGY',
      sub: 'Instant surfactant activation upon contact with water',
      details:
        'Hollow micro-bead architecture engineered in 45m spray towers at our Bihar unit enables instant hydration, generating active foam in under 2 seconds.',
      icon: Zap,
      color: 'bg-amber-500',
    },
    {
      title: 'Dissolves quickly & Completely',
      sub: 'Zero chalky residue on dark garments or wash tubs',
      details:
        '100% cold-water soluble formula leaves no white streaks on dark trousers, school uniforms, or delicate fabrics.',
      icon: Droplets,
      color: 'bg-cyan-500',
    },
    {
      title: 'Removes tough Stains easily',
      sub: 'Targeted bio-enzymes break down organic matter',
      details:
        'Eliminates stubborn grease, oily gravy, turmeric curry, and ink without harsh fabric-damaging stone beating.',
      icon: CheckCircle2,
      color: 'bg-emerald-500',
    },
    {
      title: 'Gentle on hands',
      sub: 'Dermatologically balanced pH with conditioners',
      details:
        'Formulated with skin-conditioning emollients that prevent dry, burning, or peeling palms during prolonged bucket handwashing.',
      icon: Heart,
      color: 'bg-rose-500',
    },
    {
      title: 'Clothes remain like new',
      sub: 'Fiber color-lock technology protects textile weave',
      details:
        'Prevents lint fuzzing and color bleeding, keeping cottons, linens, and polyester blends bright through 50+ wash cycles.',
      icon: Sparkles,
      color: 'bg-purple-500',
    },
  ];

  const handleRunDissolveTest = () => {
    setIsSimulatingDissolve(true);
    setDissolveProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setDissolveProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setIsSimulatingDissolve(false);
      }
    }, 120);
  };

  return (
    <section id="whitefoam-spotlight" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Company Brand Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-indigo-600 to-amber-500 flex items-center justify-center font-black text-lg text-white shadow-lg">
                DT
              </div>
              <span className="font-black text-xl tracking-wider text-white">
                Detergent Things Industries India
              </span>
            </div>

            <div className="relative">
              <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 tracking-tight block">
                Chamak jo
              </span>
              <span className="text-5xl sm:text-7xl font-black text-white tracking-tight -mt-2 block flex items-center gap-2">
                khud Bole
                <Sparkles className="w-8 h-8 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              CORPORATE PROMISE • UNIT IN BIHAR
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Clean is our business. Integrity is our promise.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Detergent Things Industries India is one of the nation's premier detergent manufacturers. Built on world-class chemical engineering, our modern Bihar manufacturing unit, and an unshakeable belief in doing things the right way.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onLearnMoreFacilities}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                See Bihar R&D Facilities
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPartnership}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Contract Manufacturing & OEM
              </button>
            </div>
          </div>
        </div>

        {/* White Foam BIG SHOT Feature Spotlight */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                OUR FLAGSHIP PRODUCT
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                White Foam BIG SHOT Detergent Powder
              </h3>
            </div>
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 font-medium">
              Flagship Premium Formulation • चमक जो खुद बोले
            </span>
          </div>

          {/* Interactive Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {badges.map((b, idx) => {
              const Icon = b.icon;
              const isSelected = activeBadgeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveBadgeIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-800 border-amber-400 shadow-lg ring-1 ring-amber-400/30'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-lg ${b.color} text-slate-950 flex items-center justify-center font-bold`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-sm text-white tracking-tight leading-snug">
                        {b.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-normal line-clamp-2">
                        {b.sub}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-bold">
                    <span className={isSelected ? 'text-amber-400' : 'text-slate-500'}>
                      {isSelected ? 'Active Spec' : 'Click to inspect'}
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Badge Detailed Breakdown & Dissolution Simulation */}
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 text-amber-400 text-xs font-bold border border-slate-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feature Focus: {badges[activeBadgeIndex].title}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                {badges[activeBadgeIndex].sub}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {badges[activeBadgeIndex].details}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Validated on 40+ Indian textile varieties
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Fast Action under 2 seconds
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-5 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  Micro-Granule Dissolution Test
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  1.8s Record
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-400">Granule Hydration & Solubilization:</span>
                  <span className="text-white font-mono font-bold">{dissolveProgress}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-400 transition-all duration-150"
                    style={{ width: `${dissolveProgress}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-snug">
                White Foam BIG SHOT hollow atomized micro-granules instantly collapse and dissolve in normal tap water without leaving any gritty undissolved white residue.
              </p>

              <button
                onClick={handleRunDissolveTest}
                disabled={isSimulatingDissolve}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-slate-600"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isSimulatingDissolve ? 'animate-spin' : ''}`} />
                {isSimulatingDissolve ? 'Simulating Cold-Water Test...' : 'Re-Run Cold-Water Dissolution'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
