import React from 'react';
import {
  X,
  CheckCircle2,
  Droplets,
  Layers,
  Sparkles,
  Package,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { Product } from '../data/detergentData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenPartnership: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenPartnership,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-wider bg-indigo-100 text-indigo-900 border border-indigo-200">
              White Foam • Detergent Things Industries India
            </span>
            <h3 className="font-black text-2xl text-slate-900">
              {product.name}
            </h3>
            <p className="text-xs font-semibold text-slate-500 italic">
              "{product.tagline}"
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            Product Narrative & Legacy
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Highlights List */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Key Formulation Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center gap-2 text-xs text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Matrix */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Technical Specifications
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Foam Profile
              </span>
              <span className="text-xs font-extrabold text-slate-800">
                {product.specs.foamLevel}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Fragrance Note
              </span>
              <span className="text-xs font-extrabold text-slate-800">
                {product.specs.fragrance}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Dissolution Speed
              </span>
              <span className="text-xs font-extrabold text-emerald-700">
                {product.dissolveSpeed}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Stain Action
              </span>
              <span className="text-xs font-extrabold text-slate-800 line-clamp-1">
                {product.specs.stainAction}
              </span>
            </div>
          </div>
        </div>

        {/* Packaging Sizes */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Available Commercial Pack Sizes
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.specs.packSizes.map((pack, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 flex items-center gap-1.5"
              >
                <Package className="w-3.5 h-3.5 text-slate-500" />
                {pack}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenPartnership(product.name);
            }}
            className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Request B2B Quote for {product.name}
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
