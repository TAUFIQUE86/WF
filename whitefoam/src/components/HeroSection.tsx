import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  Droplets,
  Layers,
  ArrowRight,
  FlaskConical,
  RotateCcw,
  Shirt,
  Building2,
  TrendingUp,
} from 'lucide-react';
import { STAIN_REMOVAL_GUIDE } from '../data/detergentData';
import { useLanguage } from '../context/LanguageContext';
import oxiBoosterImage from '../../White Foam Oxi Booster.jpg';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onExploreFacilities: () => void;
  onExplorePartnership: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onExploreFacilities,
  onExplorePartnership,
}) => {
  const { language, t } = useLanguage();

  // Interactive Stain Simulator State
  const [selectedStain, setSelectedStain] = useState('Tea / Chai & Coffee');
  const [selectedMethod, setSelectedMethod] = useState<'handwash' | 'semi_auto' | 'fully_auto'>('handwash');

  const stainDetail =
    STAIN_REMOVAL_GUIDE.find((s) => s.stain === selectedStain) ||
    STAIN_REMOVAL_GUIDE[0];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white py-8 md:py-10 lg:py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid: Left copy, Right interactive Simulator */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Headlines & Content */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-gradient-to-r from-amber-50 to-rose-50 text-rose-700 border border-rose-200/90 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                WHITE FOAM FABRIC CARE
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
                WHITE FOAM <span className="text-rose-600">—</span>
                <br />
                <span className="text-2xl sm:text-3xl 2xl:text-4xl text-rose-600">चमक जो खुद बोले.</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-700 max-w-2xl leading-relaxed">
                {t('heroSubtext')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto justify-center px-6 py-3 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                {t('heroCtaExplore')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('distributor-portal')}
                className="w-full sm:w-auto justify-center px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                {language === 'hi' ? 'डीलरशिप के लिए आवेदन' : 'Become a distributor'}
              </button>
              <img
                src={oxiBoosterImage}
                alt="White Foam Oxi Booster product package"
                className="ml-auto h-44 w-36 self-end rounded-xl object-contain drop-shadow-lg sm:h-52 sm:w-44 lg:h-64 lg:w-52"
              />
            </div>
          </div>

          {/* Right Column: Clean Interactive Stain & Wash Engine */}
          <div className="md:col-span-5">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                    <h3 className="font-extrabold text-base text-slate-900 tracking-tight">
                      Interactive Stain & Wash Solver
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Test how White Foam formulas treat tough stains
                  </p>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Instant Match
                </span>
              </div>

              {/* Step 1: Select Stain */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Problem Stain:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {STAIN_REMOVAL_GUIDE.map((item) => (
                    <button
                      key={item.stain}
                      onClick={() => setSelectedStain(item.stain)}
                      className={`p-2 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer border ${
                        selectedStain === item.stain
                          ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <div className="truncate font-bold">{item.stain.split(' ')[0]}</div>
                      <div className={`text-[10px] ${selectedStain === item.stain ? 'text-rose-100 font-medium' : 'text-slate-500 font-medium'}`}>
                        {item.difficulty}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Wash Method */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Your Wash Machine / Method:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'handwash', label: 'Handwash' },
                      { id: 'semi_auto', label: 'Semi-Automatic' },
                      { id: 'fully_auto', label: 'Fully Automatic' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMethod(m.id)}
                      className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                        selectedMethod === m.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-500'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-white rounded-xl border-2 border-slate-200 p-4 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Recommended Formulation:
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                    Water: {stainDetail.waterTemp}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-black">
                    <Droplets className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      {stainDetail.recommendedProductType}
                    </h4>
                    <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      White Foam Active Dissolution
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-normal">
                  <span className="font-bold text-slate-900">Action Step: </span>
                  {stainDetail.treatmentStep}
                </div>
              </div>

              {/* Fast metric footnotes */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-1">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  चमक जो खुद बोले
                </span>
                <span>Gentle on hands • Phosphate-free</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Stats Strip */}
        <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">350,000 MT</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Annual Surfactant Capacity
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-rose-600">Unit in Bihar</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              White Foam Cake & Powder Facility
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">3 Accreditations</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Star Export • GMP • ISO 9001:2015
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
