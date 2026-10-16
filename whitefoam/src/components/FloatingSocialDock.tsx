import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingSocialDock: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 transition-all duration-200">
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-slate-900 hover:bg-rose-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-xl border border-slate-700 cursor-pointer"
        title="Scroll to Top"
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
};
