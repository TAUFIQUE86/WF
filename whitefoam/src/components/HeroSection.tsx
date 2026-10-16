import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Droplets,
  Layers,
  ArrowRight,
  FlaskConical,
  RotateCcw,
  Shirt,
  Building2,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { STAIN_REMOVAL_GUIDE } from '../data/detergentData';
import { useLanguage } from '../context/LanguageContext';
import { BrandJingleButton } from './BrandJingleButton';

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
    <section id="hero" className="relative bg-white py-12 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid: Left copy, Right interactive Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-gradient-to-r from-amber-50 to-rose-50 text-rose-700 border border-rose-200/90 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                White Foam • Chamak jo khud Bole
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                {language === 'hi' ? 'विनिर्माण इकाई: बिहार, भारत' : 'Unit in Bihar, India'}
              </span>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-extrabold text-indigo-700 tracking-wider uppercase">
                {t('companyName')}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
                WHITE FOAM <span className="text-rose-600">—</span>
                <br />
                <span className="text-rose-600">CHAMAK JO KHUD BOLE.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 max-w-2xl leading-relaxed">
                {t('heroSubtext')}
              </p>
            </div>

            {/* Audio Jingle Inline Bar */}
            <div className="pt-1">
              <BrandJingleButton />
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-black uppercase tracking-wider text-rose-600 block mb-0.5">
                  WHITE FOAM ADVANCED (2024)
                </span>
                <p className="text-xs text-slate-700 font-semibold leading-snug">
                  Modernized fabric care with pocket-friendly powders & durable bars.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 block mb-0.5">
                  WHITE FOAM CONFIDENCE
                </span>
                <p className="text-xs text-slate-700 font-semibold leading-snug">
                  Multi-action stain magnets & specialized machine and bucket care.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 block mb-0.5">
                  WHITE FOAM BIHAR R&D
                </span>
                <p className="text-xs text-slate-700 font-semibold leading-snug">
                  Fast Action dissolution engineered specifically for regional water hardness.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('distributor-portal')}
                className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                {t('heroCtaDistributor')}
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('stain-lab')}
                className="px-5 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                {language === 'hi' ? 'दाग-धब्बा लैब टेस्ट करें' : 'Interactive Stain Laboratory'}
              </button>

              <button
                onClick={onExploreProducts}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {t('heroCtaExplore')}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive Stain & Wash Engine */}
          <div className="lg:col-span-5">
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
                  Chamak jo khud Bole
                </span>
                <span>Gentle on hands • Phosphate-free</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Stats Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
            <div className="text-2xl sm:text-3xl font-black text-indigo-600">38 Districts</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Bihar Dealership Network
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
