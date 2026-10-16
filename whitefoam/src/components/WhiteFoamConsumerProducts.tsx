import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Check,
  Package,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { Product } from '../data/detergentData';

interface WhiteFoamConsumerProductsProps {
  onSelectProduct: (product: Product) => void;
  onOpenPartnership: () => void;
}

export const WhiteFoamConsumerProducts: React.FC<WhiteFoamConsumerProductsProps> = ({
  onSelectProduct,
  onOpenPartnership,
}) => {
  const powderVariants = [
    {
      name: 'White Foam BIG SHOT Powder',
      tagline: 'Fast Action micro-granules dissolving in 1.8 seconds with 0 residue',
      packs: '500g, 1kg, 3kg, 5kg with free bucket',
      badge: 'Chamak Flagship',
    },
    {
      name: 'White Foam Active Powder',
      tagline: 'High active foam & deep particulate dirt lift for daily laundry',
      packs: '500g, 1kg, 3kg, 5kg',
      badge: 'Active Foam',
    },
    {
      name: 'White Foam Advance Powder',
      tagline: 'Optical brighteners for crisp dazzling whites and color protection',
      packs: '500g, 1kg, 2kg, 4kg',
      badge: 'Bright Whites',
    },
    {
      name: 'White Foam Lime Fresh Powder',
      tagline: 'Natural citrus lemon extract for tough grease & odour removal',
      packs: '500g, 1kg, 3kg',
      badge: 'Lime Citrus',
    },
  ];

  const cakeVariants = [
    {
      name: 'White Foam Clean Bar Cake',
      tagline: 'Classic hand-wash staple with long-lasting solid zero-mush formula',
      packs: '125g, 250g, Buy 3 Get 1 Free',
      badge: 'Legacy Staple',
    },
    {
      name: 'White Foam Shakti Cake',
      tagline: 'Heavy-duty scrubbing power for stubborn collars, cuffs and denims',
      packs: '200g, 250g',
      badge: 'Extra Power',
    },
    {
      name: 'White Foam Pink Rose Cake',
      tagline: 'Gentle on hands and delicate fabrics with soothing floral rose notes',
      packs: '150g, 250g',
      badge: 'Gentle Rose',
    },
    {
      name: 'White Foam Green Herbal Cake',
      tagline: 'Neem-infused purification formula for sanitized everyday wash',
      packs: '200g, 4-pack',
      badge: 'Herbal Clean',
    },
    {
      name: 'White Foam Bartan Dishwash Bar',
      tagline: 'Scouring lime dishwash bar for greasy kitchen cookware and cloths',
      packs: '150g, 300g tub & bar',
      badge: 'Dishwash Scour',
    },
  ];

  return (
    <section id="whitefoam-products" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <span className="hover:text-slate-800 cursor-pointer">Home</span>
          <span>&gt;&gt;</span>
          <span className="hover:text-slate-800 cursor-pointer">Detergent Things Industries India</span>
          <span>&gt;&gt;</span>
          <span className="text-rose-600 font-bold">White Foam Consumer Products</span>
        </div>

        {/* Company Header & Brand Legacy Box */}
        <div className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-indigo-50/30 mb-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-indigo-600 to-amber-500 text-white flex items-center justify-center font-black text-xl tracking-wider shadow-sm">
                DT
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Detergent Things Industries India
                </span>
                <p className="text-xs font-bold text-indigo-700 tracking-wide">
                  White Foam • Chamak jo khud Bole
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
              <MapPin className="w-4 h-4 text-rose-600" />
              <span>Manufacturing Unit in Bihar, India</span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              White Foam Consumer Products
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              White Foam Detergent Powder is how Detergent Things Industries India began its journey into the consumer market, rapidly becoming a household name with our eye-catching advertising and signature promise: <span className="font-bold text-slate-900">"Chamak jo khud Bole"</span>. Deriving inspiration from our market success in powders, we expanded our fabric care portfolio with long-lasting White Foam detergent cakes, scouring bars, and automated machine solutions. Our primary manufacturing unit is located in Bihar.
            </p>
          </div>
        </div>

        {/* Dual Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Box 1: Detergent Powder */}
          <div className="rounded-2xl border-2 border-slate-200 p-6 sm:p-8 bg-slate-50/60 flex flex-col justify-between hover:border-indigo-400 transition-colors">
            <div className="space-y-4">
              <div className="bg-slate-200 px-4 py-2.5 rounded-xl flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900">
                  White Foam Detergent Powders
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-600 text-white">
                  Chamak Formula
                </span>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                White Foam Detergent Powder is our premier fabric care formulation in India. It revolutionizes the market by delivering ultra-potent stain-fighting power and radiant brightness without compromise. Detergent Things Industries India provides every household with accessible, value-for-money laundry care that keeps white clothes dazzling and colored fabrics vibrant.
              </p>

              <div>
                <span className="text-xs font-extrabold text-slate-900 block mb-3 uppercase tracking-wider">
                  Different Products:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {powderVariants.map((p, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3.5 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-xs text-slate-900">
                          {p.name}
                        </span>
                        <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                          {p.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mb-2 leading-tight">
                        {p.tagline}
                      </p>
                      <div className="text-[10px] font-semibold text-slate-400">
                        Packs: {p.packs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                100% Biodegradable Surfactants • Fast Action Micro-beads
              </span>
              <button
                onClick={onOpenPartnership}
                className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 cursor-pointer"
              >
                Inquire Bihar Bulk Supply &gt;
              </button>
            </div>
          </div>

          {/* Box 2: Detergent Cake */}
          <div className="rounded-2xl border-2 border-slate-200 p-6 sm:p-8 bg-slate-50/60 flex flex-col justify-between hover:border-rose-400 transition-colors">
            <div className="space-y-4">
              <div className="bg-slate-200 px-4 py-2.5 rounded-xl flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900">
                  White Foam Detergent Cakes & Bars
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-600 text-white">
                  Classic Clean
                </span>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                White Foam Detergent Cake is a classic household cleaning staple in India, known for its density, effective stain removal on collars and cuffs, and gentle skin formula. Introduced to make hand-washing effortless, it quickly became an everyday essential for families across the country.
              </p>

              <div>
                <span className="text-xs font-extrabold text-slate-900 block mb-3 uppercase tracking-wider">
                  Different Products:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {cakeVariants.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-xl border border-slate-200 hover:shadow-xs transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-xs text-slate-900">
                          {c.name}
                        </span>
                        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                          {c.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mb-1.5 leading-tight">
                        {c.tagline}
                      </p>
                      <div className="text-[10px] font-semibold text-slate-400">
                        Sizes: {c.packs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Long-lasting Zero-Wastage Bar Matrix
              </span>
              <button
                onClick={onOpenPartnership}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 cursor-pointer"
              >
                Contract Cake Manufacturing &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
