import React, { useState } from 'react';
import { Search, X, ChevronRight, Droplets, FlaskConical, Shirt } from 'lucide-react';
import { PRODUCTS_CATALOG, STAIN_REMOVAL_GUIDE, RND_FACILITIES, Product } from '../data/detergentData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchedProducts = cleanQuery
    ? PRODUCTS_CATALOG.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.brand.toLowerCase().includes(cleanQuery) ||
          p.tagline.toLowerCase().includes(cleanQuery) ||
          p.description.toLowerCase().includes(cleanQuery)
      )
    : PRODUCTS_CATALOG.slice(0, 4);

  const matchedStains = cleanQuery
    ? STAIN_REMOVAL_GUIDE.filter(
        (s) =>
          s.stain.toLowerCase().includes(cleanQuery) ||
          s.treatmentStep.toLowerCase().includes(cleanQuery)
      )
    : STAIN_REMOVAL_GUIDE.slice(0, 3);

  const matchedFacilities = cleanQuery
    ? RND_FACILITIES.filter(
        (f) =>
          f.name.toLowerCase().includes(cleanQuery) ||
          f.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150 max-h-[85vh] flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search White Foam products, stains, cakes, Bihar R&D facilities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto py-4 space-y-6 flex-1 pr-1">
          {/* Products List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
                Products ({matchedProducts.length})
              </span>
            </div>

            <div className="space-y-1.5">
              {matchedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(p);
                  }}
                  className="p-3 rounded-xl hover:bg-slate-100 cursor-pointer flex items-center justify-between transition-colors border border-transparent hover:border-slate-200"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-200 text-slate-700">
                        {p.brand}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {p.tagline}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Stains List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
                Stain Guides ({matchedStains.length})
              </span>
            </div>

            <div className="space-y-1.5">
              {matchedStains.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{s.stain}</span>
                    <span className="text-[10px] text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                      {s.recommendedProductType}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {s.treatmentStep}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities (if matched) */}
          {matchedFacilities.length > 0 && (
            <div>
              <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider block mb-2">
                Innovation Facilities ({matchedFacilities.length})
              </span>
              <div className="space-y-1.5">
                {matchedFacilities.map((f) => (
                  <div
                    key={f.id}
                    className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs space-y-0.5"
                  >
                    <span className="font-extrabold text-slate-900 block">
                      {f.name}
                    </span>
                    <p className="text-[11px] text-slate-600">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
