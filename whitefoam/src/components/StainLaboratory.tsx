import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Droplets,
  ShieldCheck,
  Check,
  ArrowRight,
  Info,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Leaf,
  Heart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StainScenario {
  id: string;
  name: string;
  nameHi: string;
  category: string;
  difficulty: 'High' | 'Extreme' | 'Moderate';
  description: string;
  beforeBg: string; // Simulated stain color & pattern
  afterBg: string;
  scienceBreakdown: string;
  recommendedProduct: string;
}

const STAIN_SCENARIOS: StainScenario[] = [
  {
    id: 'haldi',
    name: 'Tough Haldi & Curry Stain',
    nameHi: 'कठिन हल्दी एवं तरीदार सब्जी के दाग',
    category: 'Indian Food & Spices',
    difficulty: 'Extreme',
    description:
      'Curcumin and mustard oil penetrate deep into cotton fibers, leaving stubborn yellow rings with ordinary soaps.',
    beforeBg: 'radial-gradient(circle at 50% 50%, #eab308 0%, #ca8a04 40%, #fef08a 70%, #f8fafc 100%)',
    afterBg: '#ffffff',
    scienceBreakdown:
      'White Foam Active Oxygen Bleach breaks the double conjugated curcumin bond, lifting the color in under 15 minutes of soaking without bleaching the fabric fibers.',
    recommendedProduct: 'White Foam BIG SHOT (Oxygen Boost)',
  },
  {
    id: 'mud',
    name: 'Red Clay Mud & Kichad',
    nameHi: 'बरसाती कीचड़ एवं लाल मिट्टी',
    category: 'Monsoon & Outdoor Dirt',
    difficulty: 'High',
    description:
      'Clay particles bind electrostatically to synthetic and cotton clothes during rain and daily outdoor work.',
    beforeBg: 'radial-gradient(circle at 45% 55%, #78350f 0%, #92400e 45%, #d97706 70%, #f8fafc 100%)',
    afterBg: '#ffffff',
    scienceBreakdown:
      'Anti-redeposition polymers in White Foam encapsulate suspended soil minerals so dirt flows away freely in the rinse water instead of settling back into clothes.',
    recommendedProduct: 'White Foam Active Detergent Powder',
  },
  {
    id: 'tea',
    name: 'Kadak Chai & Filter Coffee',
    nameHi: 'कड़क चाय और कॉफ़ी के गहरे धब्बे',
    category: 'Beverage Tannins',
    difficulty: 'High',
    description:
      'Tannic acid and dairy fats bond permanently if not broken down by specialized bio-enzymes.',
    beforeBg: 'radial-gradient(circle at 52% 48%, #713f12 0%, #854d0e 40%, #fef3c7 75%, #ffffff 100%)',
    afterBg: '#ffffff',
    scienceBreakdown:
      'Multi-enzyme protease enzymes instantly dissolve milk protein binders, allowing surfactant micelles to extract tannin dyes completely.',
    recommendedProduct: 'White Foam BIG SHOT Multi-Enzyme',
  },
  {
    id: 'collar',
    name: 'Grimy Shirt Collars & Cuff Grease',
    nameHi: 'कमीज के कॉलर और कफ का जिद्दी मैल',
    category: 'Body Sebum & Sweat',
    difficulty: 'Moderate',
    description:
      'Daily sebum oil, dust, and sweat create a yellow-grey waxy buildup on collar folds and underarms.',
    beforeBg: 'radial-gradient(circle at 50% 50%, #64748b 0%, #94a3b8 40%, #e2e8f0 75%, #ffffff 100%)',
    afterBg: '#ffffff',
    scienceBreakdown:
      'Dual-action surfactants emulsify waxy body oils instantly, requiring zero hard scrubbing that damages collars.',
    recommendedProduct: 'White Foam Clean Bar Cake + Powder',
  },
  {
    id: 'ink',
    name: 'School Uniform Pen Ink',
    nameHi: 'स्कूल यूनिफॉर्म पेन स्याही के दाग',
    category: 'Pigments & Dyes',
    difficulty: 'High',
    description:
      'High-staining ink dyes soak into school uniform fabrics, often ruining white shirts.',
    beforeBg: 'radial-gradient(circle at 48% 52%, #1e1b4b 0%, #1e40af 40%, #93c5fd 75%, #ffffff 100%)',
    afterBg: '#ffffff',
    scienceBreakdown:
      'High-density penetrative surfactants release bonded ink pigments without fading coloured piping or school badges.',
    recommendedProduct: 'White Foam BIG SHOT Bar + Soak',
  },
];

export const StainLaboratory: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeStainIndex, setActiveStainIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  // Water Hardness Advisor State
  const [waterSource, setWaterSource] = useState<'borewell' | 'tap' | 'well'>('borewell');

  const currentStain = STAIN_SCENARIOS[activeStainIndex];

  // Drag handlers for slider
  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const offsetX = clientX - containerRect.left;
    const clampedX = Math.max(0, Math.min(containerRect.width, offsetX));
    const newPct = (clampedX / containerRect.width) * 100;
    setSliderPosition(Math.round(newPct));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, rect);
    }
  };

  return (
    <section id="stain-lab" className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            {language === 'hi' ? 'व्हाइट फोम दाग-धब्बा परीक्षण' : 'Interactive Stain Laboratory'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            {t('stainLabHeading')}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t('stainLabSubheading')}
          </p>
        </div>

        {/* Stain Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
          {STAIN_SCENARIOS.map((stain, idx) => (
            <button
              key={stain.id}
              onClick={() => {
                setActiveStainIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                activeStainIndex === idx
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200 ring-2 ring-rose-400'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{language === 'hi' ? stain.nameHi : stain.name}</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                  activeStainIndex === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {stain.difficulty}
              </span>
            </button>
          ))}
        </div>

        {/* 2-Column: Left Before/After Interactive Slider, Right Science & Product Advice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Interactive Before & After Slider Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5 text-amber-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                BEFORE WASH (Stubborn Stain)
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                DRAG SLIDER {sliderPosition}%
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                AFTER WHITE FOAM (Chamak jo khud Bole)
              </span>
            </div>

            {/* Slider container */}
            <div
              className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-300 shadow-md bg-white"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* AFTER LAYER (Clean sparkling white fabric background) */}
              <div
                className="absolute inset-0 bg-white flex flex-col justify-end p-6"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #f8fafc 0, #f8fafc 10px, #ffffff 10px, #ffffff 20px)',
                }}
              >
                {/* Fixed Top-Right Label Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-emerald-800 text-white font-bold text-xs shadow-md border border-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>{language === 'hi' ? 'व्हाइट फोम के बाद: 100% साफ़' : 'AFTER: 100% Clean Fabric'}</span>
                </div>

                {/* Bottom Watermark / Details */}
                <div className="text-right z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    ✨ Optical Brighteners Active
                  </span>
                </div>
              </div>

              {/* BEFORE LAYER (Stained fabric clipped to sliderPosition) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="w-full h-full min-w-[320px] sm:min-w-[600px] flex flex-col justify-end p-6 relative"
                  style={{
                    background: currentStain.beforeBg,
                  }}
                >
                  {/* Fixed Top-Left Label Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs shadow-md border border-slate-700 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>{language === 'hi' ? `धोने से पहले: ${currentStain.nameHi}` : `BEFORE: ${currentStain.name}`}</span>
                  </div>

                  {/* Bottom Stain Tag */}
                  <div className="text-left z-10">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-black/60 border border-white/20 text-white text-xs font-semibold">
                      ⚠️ Deep Fiber Penetration
                    </span>
                  </div>
                </div>
              </div>

              {/* DRAG HANDLE LINE */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl border-2 border-white">
                  <div className="flex items-center justify-center">
                    <ChevronLeft className="w-3.5 h-3.5 -mr-1 stroke-[3]" />
                    <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-3 font-medium">
              💡 {language === 'hi' ? 'व्हाइट फोम का असर देखने के लिए हैंडल को बाएं-दाएं खींचें' : 'Drag the handle left and right to inspect the microscopic cleaning action'}
            </p>
          </div>

          {/* Right Stain Breakdown & Science (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Active Enzyme Formula
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                {language === 'hi' ? currentStain.nameHi : currentStain.name}
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {currentStain.description}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-rose-600" />
                  How White Foam Dissolves This Stain:
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {currentStain.scienceBreakdown}
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-rose-50 border border-rose-200 rounded-xl">
                <div>
                  <div className="text-[10px] uppercase font-bold text-rose-700 tracking-wider">
                    Recommended SKU
                  </div>
                  <div className="text-xs font-black text-slate-900 mt-0.5">
                    {currentStain.recommendedProduct}
                  </div>
                </div>
                <a
                  href="#whitefoam-products"
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
                >
                  View Pack
                </a>
              </div>
            </div>

            {/* Quick Hard Water Tip Card */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 shadow-md border border-indigo-800">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Droplets className="w-4 h-4 text-cyan-400" />
                {language === 'hi' ? 'बिहार के पानी के लिए विशेष फॉर्मूला' : 'Engineered for Bihar Ground Water'}
              </div>
              <h4 className="text-base font-bold mb-2">
                {language === 'hi' ? 'खारे और बोरवेल पानी में भी झाग और सफाई' : 'High Performance in High TDS Water'}
              </h4>
              <p className="text-xs text-indigo-200 leading-relaxed">
                Most Bihar districts have borewell water with TDS over 450-800 ppm. Ordinary soaps precipitate as sticky scum. White Foam incorporates anti-calcium polymers that maintain 100% surfactant foaming power even in severe hard water.
              </p>
            </div>
          </div>
        </div>

        {/* REGIONAL WATER HARDNESS ADVISOR TOOL */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {language === 'hi' ? 'क्षेत्रीय जल कठोरता व डिटर्जेंट खुराक सलाहकार' : 'Regional Water Hardness & Wash Advisor'}
                </h3>
                <p className="text-xs text-slate-500">
                  Select your household water source to get the perfect scoop dosage
                </p>
              </div>
            </div>

            {/* Water Source Buttons */}
            <div className="flex items-center gap-2">
              {[
                { id: 'borewell', label: 'Borewell / Ground (Hard)', labelHi: 'बोरवेल / खारा पानी' },
                { id: 'tap', label: 'Municipal / Tap (Soft)', labelHi: 'सप्लाई / नल का पानी' },
                { id: 'well', label: 'Well / Pond (Mineral)', labelHi: 'कुआं / नदी का पानी' },
              ].map((src) => (
                <button
                  key={src.id}
                  onClick={() => setWaterSource(src.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    waterSource === src.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {language === 'hi' ? src.labelHi : src.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100">
              <div className="text-[11px] font-bold text-cyan-800 uppercase tracking-wider">
                Recommended Dosage
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">
                {waterSource === 'borewell' ? '1.5 Scoops (~45g)' : waterSource === 'tap' ? '1 Scoop (~30g)' : '1.25 Scoops (~38g)'}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Per standard 5-6 kg laundry bucket or washing machine load.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                Foam Lather Stability
              </div>
              <div className="text-xl font-black text-emerald-700 mt-1">
                {waterSource === 'borewell' ? '96% Anti-Scum Action' : '100% Rich Micro-Foam'}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Zero chalky deposits on dark fabrics; rinses off cleanly in 2 cycles.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
              <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                Recommended Soak Time
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">
                {waterSource === 'borewell' ? '20 - 25 Minutes' : '10 - 15 Minutes'}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Allows active enzymes to loosen protein and oil stains naturally.
              </div>
            </div>
          </div>
        </div>

        {/* ECO-FRIENDLY & SEPTIC SAFE GUARANTEE */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Leaf className="w-3.5 h-3.5" />
                {t('ecoFriendlyHeading')}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Safe for Hands, Septic Tanks & River Ganga
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {t('ecoFriendlySubtext')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                <div className="text-lg font-black text-emerald-300">0%</div>
                <div className="text-[10px] font-medium text-slate-200">Added Phosphates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                <div className="text-lg font-black text-cyan-300">pH 8.0</div>
                <div className="text-[10px] font-medium text-slate-200">Skin Gentle Care</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
