import React, { useState } from 'react';
import {
  Shirt,
  Sparkles,
  Droplets,
  RotateCcw,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  Layers,
  Thermometer,
} from 'lucide-react';
import { STAIN_REMOVAL_GUIDE } from '../data/detergentData';

export const WashGuide: React.FC = () => {
  const [washType, setWashType] = useState<'handwash' | 'semi_auto' | 'fully_auto'>('handwash');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const washMethods = {
    handwash: {
      title: 'Hand-Wash Mastery (चमक जो खुद बोले)',
      badge: 'Classic Household Protocol',
      recommendedProduct: 'White Foam Clean Bar Cake + White Foam BIG SHOT Powder',
      steps: [
        {
          step: 'Step 1: Dissolve & Activate',
          text: 'Fill a clean bucket with normal tap water. Add 1 scoop of fast-dissolving White Foam BIG SHOT or White Foam Active powder. Stir until rich, active lather forms.',
        },
        {
          step: 'Step 2: Spot Scrub Collar & Cuffs',
          text: 'Dampen stubborn soiled cuffs and collar lines. Directly rub with White Foam Clean Bar Cake or White Foam Shakti Cake for 15 seconds. The solid fatty acids lift localized sebum immediately.',
        },
        {
          step: 'Step 3: Soak for 20 Minutes',
          text: 'Submerge clothes completely and allow the active enzymes to break down particulate dust and food stains without aggressive stone-beating.',
        },
        {
          step: 'Step 4: Gentle Rinse & Squeeze',
          text: 'Rinse in two cycles of fresh water until clear. Avoid excessive wringing to prevent stretch damage to seams.',
        },
      ],
      waterTip: 'Use normal ambient water. Avoid hot water on delicate silks or woolens.',
    },
    semi_auto: {
      title: 'Semi-Automatic Twin Tub Optimization',
      badge: 'High Foaming & Active Agitation',
      recommendedProduct: 'White Foam Double Power / White Foam Advance / White Foam Big Shot',
      steps: [
        {
          step: 'Step 1: Water Fill & Detergent Dose',
          text: 'Fill wash tub with water up to desired water level. Add 1.5 scoops of White Foam detergent powder before adding the laundry load.',
        },
        {
          step: 'Step 2: 15-Minute Pre-Soak Cycle',
          text: 'Run the agitator for 2 minutes to dissolve powder evenly, then turn off the timer to allow a 15-minute soak for deep dirt breakdown.',
        },
        {
          step: 'Step 3: Wash Cycle Execution',
          text: 'Set regular wash cycle for 10-15 minutes. High foam ensures suspended dirt particles do not redeposit on the garment fibers.',
        },
        {
          step: 'Step 4: Spin & Rinse Tub Transfer',
          text: 'Transfer clothes to spin tub for 2 minutes, then rinse under continuous water flow in the spin chamber for 2 cycles.',
        },
      ],
      waterTip: 'Warm water (30-40°C) is ideal for heavily soiled children school uniforms.',
    },
    fully_auto: {
      title: 'Fully Automatic Machines (Front Load & Top Load)',
      badge: 'Controlled Suds & Sensor Protection',
      recommendedProduct: 'White Foam Matic Liquid Front Load / White Foam PODS 4-in-1',
      steps: [
        {
          step: 'Step 1: Dispenser vs Drum Placement',
          text: 'If using White Foam PODS 4-in-1, place capsule directly into the back of the empty drum BEFORE loading clothes. If using White Foam Matic liquid, pour 1 cap into the main wash drawer.',
        },
        {
          step: 'Step 2: Correct Load Sizing',
          text: 'Leave a palm width of space at the top of the drum so garments can tumble freely with the water jets.',
        },
        {
          step: 'Step 3: Low-Foam Sensor Preservation',
          text: 'Always use low-sud White Foam Matic formulations. Ordinary high-foaming powders choke drain pumps and trigger machine error codes.',
        },
        {
          step: 'Step 4: Cycle Selection',
          text: 'Select "Eco Wash" or "Cotton Normal" at 30°C. Fast Action enzyme technology removes tough stains even in ambient cold water.',
        },
      ],
      waterTip: 'Cold water wash (20-30°C) reduces electricity usage by up to 60% while maintaining stainless whites.',
    },
  };

  const current = washMethods[washType];

  return (
    <section id="wash-guide" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-cyan-100 text-cyan-800">
            <Shirt className="w-3.5 h-3.5 text-cyan-600" />
            WHITE FOAM FABRIC CARE KNOWLEDGE BASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How to Wash Clothes: The White Foam Expert Guide
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Master the art of laundry. From spot-treating collars with traditional detergent bars to programmatic washing with 4-in-1 pods.
          </p>
        </div>

        {/* Method Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 gap-1.5 max-w-2xl w-full">
            {[
              { id: 'handwash', label: '1. Handwash (Cake & Powder)' },
              { id: 'semi_auto', label: '2. Semi-Automatic Twin Tub' },
              { id: 'fully_auto', label: '3. Fully Automatic (Front/Top)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setWashType(tab.id as any)}
                className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                  washType === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Method Walkthrough Card */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                {current.badge}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                {current.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 block">Recommended Combination:</span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                {current.recommendedProduct}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {current.steps.map((st, i) => (
              <div
                key={i}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black text-slate-900 bg-slate-200 px-2 py-0.5 rounded block w-fit mb-3">
                    {st.step}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {st.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-between flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-2 font-bold text-cyan-900">
              <Thermometer className="w-4 h-4 text-cyan-700" />
              Water Temperature Guide: {current.waterTip}
            </span>
            <span className="font-semibold text-cyan-800">
              Preserves fabric elasticity & saves energy
            </span>
          </div>
        </div>

        {/* Stain Removal Emergency Quick Reference */}
        <div className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <h4 className="font-black text-lg text-slate-900">
                Emergency Tough Stain Removal Protocols
              </h4>
            </div>
            <span className="text-xs text-slate-500 font-semibold">
              Tested on Cotton, Linen & Blends
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STAIN_REMOVAL_GUIDE.slice(0, 3).map((sg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-slate-900">
                    {sg.stain}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      sg.difficulty === 'Tough'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {sg.difficulty}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {sg.treatmentStep}
                </p>
                <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                  Tool: <span className="text-slate-800">{sg.recommendedProductType}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="/stain-guide" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-900 underline decoration-indigo-300 underline-offset-4">
            View the full stain guide <ChevronDown className="h-4 w-4 -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
};
