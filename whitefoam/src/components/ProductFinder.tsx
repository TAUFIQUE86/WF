import React, { useState } from 'react';
import {
  Sparkles,
  Shirt,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Droplets,
  PackageCheck,
  Check,
} from 'lucide-react';
import { PRODUCTS_CATALOG, Product } from '../data/detergentData';

interface ProductFinderProps {
  onSelectProduct: (product: Product) => void;
  onOpenPartnershipWithProduct: (productName: string) => void;
}

export const ProductFinder: React.FC<ProductFinderProps> = ({
  onSelectProduct,
  onOpenPartnershipWithProduct,
}) => {
  const [browseMode, setBrowseMode] = useState<'type' | 'need'>('type');
  const [selectedType, setSelectedType] = useState<'powder' | 'cake' | 'pod_liquid'>('powder');
  const [selectedNeed, setSelectedNeed] = useState<'handwash' | 'semi_auto' | 'fully_auto'>('handwash');

  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    if (browseMode === 'type') {
      return product.category === selectedType;
    } else {
      return product.washNeed.includes(selectedNeed);
    }
  });

  return (
    <section id="product-finder" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-indigo-100 text-indigo-800">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            INTERACTIVE LAUNDRY MATCHMAKER
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            FIND THE BEST WHITE FOAM PRODUCT FOR YOU
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Manufactured by Detergent Things Industries India at our Bihar Unit. Whether you wash by hand, use a semi-automatic twin tub, or own a front-loading machine, discover the White Foam formula engineered for "चमक जो खुद बोले".
          </p>
        </div>

        {/* Dual Tab Mode Selector (Browse by type vs Browse by need) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          {/* Browse by Type Card */}
          <div
            onClick={() => setBrowseMode('type')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              browseMode === 'type'
                ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-600/10'
                : 'bg-white/60 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-extrabold text-indigo-600 uppercase tracking-wide">
                Browse by type
              </span>
              {browseMode === 'type' && (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              )}
            </div>
            <p className="text-xs text-slate-600 mb-4 font-semibold">
              Washing powder, bars, PODs & liquid concentrates.
            </p>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'powder', label: 'Washing Powder', count: '5 variants' },
                { id: 'cake', label: 'Bars & Cakes', count: '5 variants' },
                { id: 'pod_liquid', label: 'PODs & Liquids', count: '2 variants' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setBrowseMode('type');
                    setSelectedType(t.id as any);
                  }}
                  className={`p-2.5 rounded-xl text-left transition-all text-xs font-bold border cursor-pointer ${
                    browseMode === 'type' && selectedType === t.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="leading-tight">{t.label}</div>
                  <div
                    className={`text-[10px] font-normal mt-0.5 ${
                      browseMode === 'type' && selectedType === t.id
                        ? 'text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    {t.count}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Browse by Need Card */}
          <div
            onClick={() => setBrowseMode('need')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              browseMode === 'need'
                ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-600/10'
                : 'bg-white/60 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-extrabold text-amber-600 uppercase tracking-wide">
                Browse by need
              </span>
              {browseMode === 'need' && (
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              )}
            </div>
            <p className="text-xs text-slate-600 mb-4 font-semibold">
              Handwash, Semi automatic washing machine, Fully automatic washing machine.
            </p>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'handwash', label: 'Handwash', sub: 'High Lather' },
                { id: 'semi_auto', label: 'Semi-Automatic', sub: 'High Dirt Lift' },
                { id: 'fully_auto', label: 'Fully Automatic', sub: 'Controlled Foam' },
              ].map((n) => (
                <button
                  key={n.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setBrowseMode('need');
                    setSelectedNeed(n.id as any);
                  }}
                  className={`p-2.5 rounded-xl text-left transition-all text-xs font-bold border cursor-pointer ${
                    browseMode === 'need' && selectedNeed === n.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="leading-tight">{n.label}</div>
                  <div
                    className={`text-[10px] font-normal mt-0.5 ${
                      browseMode === 'need' && selectedNeed === n.id
                        ? 'text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    {n.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-lg text-slate-900">
                Matching Recommendations ({filteredProducts.length})
              </h3>
              <span className="text-xs bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">
                Active Filter:{' '}
                {browseMode === 'type'
                  ? selectedType === 'powder'
                    ? 'Washing Powder'
                    : selectedType === 'cake'
                    ? 'Bars & Cakes'
                    : 'PODs & Liquids'
                  : selectedNeed === 'handwash'
                  ? 'Handwash'
                  : selectedNeed === 'semi_auto'
                  ? 'Semi-Automatic Machine'
                  : 'Fully Automatic Machine'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded tracking-wider bg-indigo-100 text-indigo-900 border border-indigo-200">
                      White Foam
                    </span>

                    {product.featuredBadge && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                        {product.featuredBadge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-black text-lg text-slate-950 mb-1 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 mb-3 italic">
                    "{product.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {product.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick specs grid */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-slate-100 pt-3 mb-4">
                    <div>
                      <span className="text-slate-400 block font-medium">Foam Level</span>
                      <span className="font-bold text-slate-800">{product.specs.foamLevel}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Dissolution</span>
                      <span className="font-bold text-emerald-700">{product.dissolveSpeed}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.specs.packSizes.map((p, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer text-center"
                    >
                      View Specs
                    </button>
                    <button
                      onClick={() => onOpenPartnershipWithProduct(product.name)}
                      className="w-full py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs transition-colors cursor-pointer text-center"
                    >
                      B2B Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
