import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  Phone,
  MapPin,
  Menu,
  X,
  Globe,
  SlidersHorizontal,
  Flame,
  Award,
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/detergentData';
import { useLanguage } from '../context/LanguageContext';
import { BrandJingleButton } from './BrandJingleButton';

interface NavbarProps {
  activeBrandFilter: 'all' | 'powder' | 'cake' | 'pod_liquid';
  setActiveBrandFilter: (filter: 'all' | 'powder' | 'cake' | 'pod_liquid') => void;
  onOpenSearch: () => void;
  onOpenCookie: () => void;
  onOpenPartnership: () => void;
  onOpenCareers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeBrandFilter,
  setActiveBrandFilter,
  onOpenSearch,
  onOpenCookie,
  onOpenPartnership,
  onOpenCareers,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'hi' 
                ? 'सरकारी मान्यता प्राप्त स्टार एक्सपोर्ट हाउस • आईएसओ 9001:2015 प्रमाणित इकाई' 
                : 'Govt. Recognized Star Export House & ISO 9001:2015 Certified Facilities'}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-rose-300 font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-rose-400" />
              {language === 'hi' ? 'विनिर्माण इकाई: बिहार, भारत' : 'Unit in Bihar, India'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Audio Slogan Jingle Button */}
            <BrandJingleButton compact={true} />

            <span className="text-slate-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer bg-slate-800 px-2.5 py-1 rounded-md border border-slate-650 text-[11px] font-bold text-amber-300 shadow-xs"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-sans font-bold tracking-wider">{language === 'en' ? 'HINDI' : 'ENGLISH'}</span>
            </button>

            <span className="text-slate-700">|</span>

            <button
              onClick={() => scrollTo('contact-corporate')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              {language === 'hi' ? 'संपर्क करें' : 'CONTACT US'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Lockups & Switcher */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => scrollTo('hero')}
            className="cursor-pointer flex items-center gap-3 select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-md font-black text-lg tracking-wider shrink-0">
              DT
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  {language === 'hi' ? 'डिटर्जेंट थिंग्स इंडस्ट्रीज इंडिया' : 'Detergent Things Industries India'}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                  BIHAR UNIT
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium flex items-center gap-1.5 flex-wrap">
                <span className="font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-1.5 py-0.2 rounded">
                  {language === 'hi' ? 'व्हाइट फोम' : 'White Foam'}
                </span>
                <span className="text-rose-700 font-bold">• {language === 'hi' ? 'चमक जो खुद बोले' : 'Chamak jo khud Bole'}</span>
                <span className="text-slate-400 font-normal">| Bihar Plant</span>
              </p>
            </div>
          </div>

          {/* Quick Product Category Pills */}
          <div className="hidden 2xl:flex items-center gap-1.5 ml-3 pl-3 border-l border-slate-200 text-xs">
            {(['all', 'powder', 'cake', 'pod_liquid'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveBrandFilter(cat)}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                  activeBrandFilter === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'all'
                  ? (language === 'hi' ? 'सभी उत्पाद' : 'All')
                  : cat === 'powder'
                  ? (language === 'hi' ? 'पाउडर' : 'Powders')
                  : cat === 'cake'
                  ? (language === 'hi' ? 'बार व टिकिया' : 'Cakes')
                  : 'Matic & PODs'}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs lg:text-sm font-semibold text-slate-700">
          <button
            onClick={() => scrollTo('whitefoam-products')}
            className="hover:text-rose-600 transition-colors cursor-pointer py-1"
          >
            {t('navConsumerProducts')}
          </button>
          
          {/* New Stain Lab link */}
          <button
            onClick={() => scrollTo('stain-lab')}
            className="hover:text-amber-600 transition-colors cursor-pointer py-1 flex items-center gap-1 text-amber-700 font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {t('navStainLab')}
          </button>

          {/* New Distributor ROI & Bihar Territory Tracker link */}
          <button
            onClick={() => scrollTo('distributor-portal')}
            className="hover:text-rose-600 transition-colors cursor-pointer py-1 flex items-center gap-1 text-rose-600 font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping"></span>
            {language === 'hi' ? 'बिहार डीलरशिप व ROI' : 'Bihar Dealership & ROI'}
          </button>

          <button
            onClick={() => scrollTo('whitefoam-spotlight')}
            className="hover:text-fuchsia-600 transition-colors cursor-pointer py-1 font-bold text-fuchsia-600"
          >
            BIG SHOT
          </button>

          <button
            onClick={() => scrollTo('wash-guide')}
            className="hover:text-cyan-600 transition-colors cursor-pointer py-1"
          >
            {t('navWashGuide')}
          </button>

          <button
            onClick={() => scrollTo('innovation-facilities')}
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1"
          >
            {t('navRdFacilities')}
          </button>

          <button
            onClick={() => scrollTo('partnerships-b2b')}
            className="hover:text-slate-900 transition-colors cursor-pointer py-1"
          >
            {t('navOemPartnership')}
          </button>
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold px-2.5"
            title="Search products, ingredients, stain tips"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">{t('navSearch')}</span>
          </button>

          <button
            onClick={() => scrollTo('distributor-portal')}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white text-xs font-bold tracking-wide transition-all shadow-xs cursor-pointer"
          >
            <span>{t('navApplyDealership')}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500">भाषा चुनें / Choose Language:</span>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'हिन्दी (Hindi)' : 'English'}</span>
            </button>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Filter by Product Category:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(['all', 'powder', 'cake', 'pod_liquid'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveBrandFilter(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-xs font-semibold rounded-md text-left transition-colors ${
                    activeBrandFilter === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {cat === 'all'
                    ? 'All White Foam'
                    : cat === 'powder'
                    ? 'Powders'
                    : cat === 'cake'
                    ? 'Bars & Cakes'
                    : 'Matic & PODs'}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2 text-sm font-semibold text-slate-800">
            <button
              onClick={() => scrollTo('distributor-portal')}
              className="w-full text-left py-2 text-rose-600 font-extrabold flex items-center justify-between"
            >
              <span>{language === 'hi' ? 'बिहार डीलरशिप व मुनाफा कैलकुलेटर' : 'Bihar Dealership & ROI Calculator'}</span>
              <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-bold">HOT</span>
            </button>
            <button
              onClick={() => scrollTo('stain-lab')}
              className="w-full text-left py-2 text-amber-700 font-bold flex items-center justify-between"
            >
              <span>{language === 'hi' ? 'दाग-धब्बा लैब व वाटर एडवाइजर' : 'Stain Laboratory & Water Hardness Advisor'}</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">NEW</span>
            </button>
            <button
              onClick={() => scrollTo('whitefoam-products')}
              className="w-full text-left py-2 hover:text-rose-600"
            >
              White Foam Consumer Products (Powders & Cakes)
            </button>
            <button
              onClick={() => scrollTo('product-finder')}
              className="w-full text-left py-2 hover:text-indigo-600 flex items-center justify-between"
            >
              <span>Smart Product Matcher</span>
            </button>
            <button
              onClick={() => scrollTo('whitefoam-spotlight')}
              className="w-full text-left py-2 hover:text-fuchsia-600 font-bold"
            >
              White Foam BIG SHOT • Chamak jo khud Bole
            </button>
            <button
              onClick={() => scrollTo('wash-guide')}
              className="w-full text-left py-2 hover:text-cyan-600"
            >
              How to Wash Clothes & Stain Removal
            </button>
            <button
              onClick={() => scrollTo('innovation-facilities')}
              className="w-full text-left py-2 hover:text-emerald-600"
            >
              World-Class Innovation & Bihar R&D
            </button>
            <button
              onClick={() => scrollTo('partnerships-b2b')}
              className="w-full text-left py-2 hover:text-slate-900"
            >
              Manufacturing Partnerships & OEM
            </button>
            <button
              onClick={() => scrollTo('careers-section')}
              className="w-full text-left py-2 hover:text-slate-900"
            >
              Careers (Dil Se Saaf Culture)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                scrollTo('distributor-portal');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-rose-600 text-white font-bold text-xs uppercase tracking-wider text-center"
            >
              Apply for Bihar Dealership
            </button>
            <button
              onClick={() => {
                onOpenCareers();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider text-center"
            >
              Explore Job Openings
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
