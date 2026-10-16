import React from 'react';
import {
  MapPin,
  Package,
  ArrowUpRight,
} from 'lucide-react';
import { Product, PRODUCTS_CATALOG } from '../data/detergentData';
import oxiBoosterImage from '../../White Foam Oxi Booster.jpg';

interface WhiteFoamConsumerProductsProps {
  onSelectProduct: (product: Product) => void;
  onOpenPartnership: () => void;
}

interface ProductTileProps {
  product: Product;
  categoryLabel: string;
  onSelectProduct: (product: Product) => void;
}

const ProductTile: React.FC<ProductTileProps> = ({ product, categoryLabel, onSelectProduct }) => (
  <button
    type="button"
    onClick={() => onSelectProduct(product)}
    aria-label={`View ${product.name} details`}
    className="group w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-lg focus-visible:outline-none"
  >
    <span
      data-product-image={product.id}
      className="product-art flex min-h-36 flex-col items-start justify-between p-4 text-white"
    >
      <span className="flex w-full items-center justify-between gap-2">
        <span className="rounded bg-white/95 px-2 py-1 text-[10px] font-black tracking-wide text-slate-900">
          WHITE FOAM
        </span>
        <span className="rounded-full border border-white/40 bg-black/15 px-2 py-1 text-[9px] font-bold uppercase tracking-wide">
          {categoryLabel}
        </span>
      </span>
      <span className="mt-5 block max-w-full text-sm font-extrabold leading-tight drop-shadow-sm">
        {product.name}
      </span>
    </span>
    <span className="block space-y-2 p-4">
      {product.featuredBadge && (
        <span className="inline-flex rounded-full bg-rose-50 px-2 py-1 text-[10px] font-bold text-rose-800">
          {product.featuredBadge}
        </span>
      )}
      <span className="block text-xs leading-relaxed text-slate-600">{product.tagline}</span>
      <span className="flex items-start justify-between gap-3 border-t border-slate-100 pt-2">
        <span className="text-[11px] font-semibold leading-relaxed text-slate-500">
          Packs: {product.specs.packSizes.join(', ')}
        </span>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </span>
  </button>
);

export const WhiteFoamConsumerProducts: React.FC<WhiteFoamConsumerProductsProps> = ({
  onSelectProduct,
  onOpenPartnership,
}) => {
  const powderVariants = PRODUCTS_CATALOG.filter((product) => product.category === 'powder');
  const cakeVariants = PRODUCTS_CATALOG.filter((product) => product.category === 'cake');

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
        <div className="relative isolate mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <img
            src={oxiBoosterImage}
            alt="White Foam Oxi Booster detergent package"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/5 object-contain object-right opacity-35 sm:opacity-100"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/45"
          />
          <div className="relative z-10 space-y-6 lg:max-w-[72%]">
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
                  White Foam • चमक जो खुद बोले
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
              White Foam Detergent Powder is how Detergent Things Industries India began its journey into the consumer market, rapidly becoming a household name with our eye-catching advertising and signature promise: <span className="font-bold text-slate-900">"चमक जो खुद बोले"</span>. Deriving inspiration from our market success in powders, we expanded our fabric care portfolio with long-lasting White Foam detergent cakes, scouring bars, and automated machine solutions. Our primary manufacturing unit is located in Bihar.
            </p>
          </div>
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
                  {powderVariants.map((product) => (
                    <ProductTile
                      key={product.id}
                      product={product}
                      categoryLabel="DETERGENT POWDER"
                      onSelectProduct={onSelectProduct}
                    />
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
                Inquire for Bulk Supply Across India &gt;
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cakeVariants.map((product) => (
                    <ProductTile
                      key={product.id}
                      product={product}
                      categoryLabel="WASH & CLEANING BAR"
                      onSelectProduct={onSelectProduct}
                    />
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
