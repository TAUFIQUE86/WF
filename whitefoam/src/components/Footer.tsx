import React from 'react';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUp,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onOpenCookie: () => void;
  onOpenPartnership: () => void;
  onOpenCareers: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCookie,
  onOpenPartnership,
  onOpenCareers,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact-corporate" className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Corporate Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-indigo-600 to-amber-500 flex items-center justify-center font-black text-lg text-white shadow-md">
                DT
              </div>
              <div>
                <span className="font-black text-xl tracking-wider text-white block">
                  Detergent Things Industries India
                </span>
                <span className="text-xs font-bold text-amber-400">
                  White Foam • Chamak jo khud Bole
                </span>
              </div>
            </div>

            <div className="text-xs text-indigo-400 font-bold tracking-widest uppercase">
              CHAMAK JO KHUD BOLE • CLEAN IS OUR BUSINESS. INTEGRITY IS OUR PROMISE.
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Detergent Things Industries India is a premier fabric care manufacturer, delivering high-performance White Foam detergent powders, classic cakes, and machine detergents powered by our modern manufacturing unit in Bihar.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1.5 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Detergent Things Industries India, Unit in Bihar, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>M: +91 9111911111</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>E: contact@detergentthings.in</span>
              </div>
            </div>
          </div>

          {/* Col 2: White Foam Consumer Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              White Foam Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-spotlight')}
                  className="hover:text-white transition-colors cursor-pointer text-amber-300 font-bold"
                >
                  White Foam BIG SHOT
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  White Foam Active Powder
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  White Foam Advance Brightener
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  White Foam Clean Bar Cake
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  White Foam Shakti Heavy-Duty
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  White Foam Bartan Lime Bar
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Washing Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              How to Wash Clothes
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('wash-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Handwash Fabric Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('wash-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Semi-Automatic Twin Tub Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('wash-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Fully Automatic Front & Top Load
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('product-finder')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Find The Best White Foam Product
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('wash-guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tough Stains Out Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Partnerships */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-300">
              Corporate & Partner
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('distributor-portal')}
                  className="hover:text-white transition-colors cursor-pointer text-rose-400 font-bold"
                >
                  Bihar Dealership & ROI Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('stain-lab')}
                  className="hover:text-white transition-colors cursor-pointer text-amber-300 font-medium"
                >
                  Interactive Stain Laboratory
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPartnership}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore Manufacturing Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('innovation-facilities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  World-Class Innovation and Bihar R&D
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCareers}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore Current Job Openings
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('whitefoam-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bihar Manufacturing Unit
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCookie}
                  className="hover:text-white transition-colors cursor-pointer underline text-[11px]"
                >
                  Cookie Consent & Privacy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditations Row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>STAR EXPORT HOUSE - RECOGNIZED BY GOVT. OF INDIA</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GMP - GOOD MANUFACTURING PRACTICE</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-300">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 font-semibold text-center md:text-right">
            Official fabric care portal of Detergent Things Industries India & White Foam.
          </p>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Detergent Things Industries India. All rights reserved. Unit in Bihar.
          </div>
          <div className="flex items-center gap-4">
            <span>White Foam • Chamak jo khud Bole</span>
            <span>•</span>
            <span>Clean is our business. Integrity is our promise.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
