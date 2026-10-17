import React, { useState } from 'react';
import { Globe, Menu, Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeBrandFilter?: 'all' | 'powder' | 'cake' | 'pod_liquid';
  setActiveBrandFilter?: (filter: 'all' | 'powder' | 'cake' | 'pod_liquid') => void;
  onOpenSearch: () => void;
  onOpenCookie?: () => void;
  onOpenPartnership: () => void;
  onOpenCareers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenPartnership, onOpenCareers }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.assign(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="White Foam home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-indigo-800 text-lg font-black text-white shadow-sm">WF</span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-base font-extrabold text-slate-950 sm:text-lg">{language === 'hi' ? 'व्हाइट फोम' : 'White Foam'}</span>
            <span className="block truncate text-[10px] font-medium text-slate-600 sm:text-xs">Detergent Things Industries India</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 2xl:flex" aria-label="Main navigation">
          <button onClick={() => scrollTo('product-finder')} className="hover:text-indigo-800">Find a product</button>
          <button onClick={() => scrollTo('whitefoam-spotlight')} className="hover:text-indigo-800">BIG SHOT</button>
          <button onClick={() => scrollTo('where-to-buy')} className="hover:text-indigo-800">Where to buy</button>
          <button onClick={() => window.location.assign('/stain-guide')} className="hover:text-indigo-800">Stain guide</button>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button onClick={toggleLanguage} className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 px-3 text-xs font-bold text-indigo-900" aria-label="Toggle English and Hindi">
            <Globe className="h-4 w-4" />
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>
          <button onClick={onOpenSearch} className="hidden h-10 items-center gap-2 rounded-lg bg-indigo-800 px-3 text-xs font-bold text-white hover:bg-indigo-900 sm:inline-flex" aria-label="Search products and stain guides">
            <Search className="h-4 w-4" /> Search
          </button>
          <button onClick={() => setMobileMenuOpen((open) => !open)} className="2xl:hidden rounded-lg p-2 text-slate-800 hover:bg-slate-100" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="2xl:hidden space-y-1 border-t border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800" aria-label="Mobile navigation">
          <button onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }} className="w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50 sm:hidden">Search products and stains</button>
          <button onClick={() => scrollTo('product-finder')} className="w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Find a product</button>
          <button onClick={() => scrollTo('where-to-buy')} className="w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Where to buy</button>
          <button onClick={() => { setMobileMenuOpen(false); window.location.assign('/stain-guide'); }} className="w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Stain guide</button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenPartnership(); }} className="w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Business partnerships and dealership</button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenCareers(); }} className="w-full rounded-lg px-3 py-3 text-left hover:bg-slate-50">Careers</button>
        </nav>
      )}
    </header>
  );
};
