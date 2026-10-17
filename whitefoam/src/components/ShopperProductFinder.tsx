import React, { useState } from 'react';
import { ArrowUpRight, Check, Droplets } from 'lucide-react';
import { Product, PRODUCTS_CATALOG, STAIN_REMOVAL_GUIDE } from '../data/detergentData';

interface ShopperProductFinderProps {
  onSelectProduct: (product: Product) => void;
}

const commonStains = STAIN_REMOVAL_GUIDE.slice(0, 3);
const fabricProductIds: Record<string, string[]> = {
  cotton: PRODUCTS_CATALOG.filter((product) => product.id !== 'white-foam-bartan-bar').map((product) => product.id),
  colours: ['white-foam-big-shot', 'white-foam-advance', 'white-foam-double-power', 'white-foam-pink-cake', 'white-foam-pods-4in1'],
  delicate: ['white-foam-pink-cake'],
};

const matchesStain = (product: Product, recommendation: string) => {
  const alternatives = recommendation.split(/[\/+]\s*/).map((part) => part.replace(/White Foam/i, '').trim().toLowerCase());
  const name = product.name.toLowerCase();
  return alternatives.some((part) => part && name.includes(part));
};

export const ShopperProductFinder: React.FC<ShopperProductFinderProps> = ({ onSelectProduct }) => {
  const [stainId, setStainId] = useState(commonStains[0].stain);
  const [fabric, setFabric] = useState('cotton');
  const [washNeed, setWashNeed] = useState<'handwash' | 'semi_auto' | 'fully_auto'>('handwash');
  const [waterSource, setWaterSource] = useState<'borewell' | 'tap' | 'well'>('borewell');
  const stain = STAIN_REMOVAL_GUIDE.find((item) => item.stain === stainId) ?? commonStains[0];
  const filteredProducts = PRODUCTS_CATALOG.filter((product) =>
    product.id !== 'white-foam-bartan-bar' &&
    product.washNeed.includes(washNeed) &&
    fabricProductIds[fabric].includes(product.id) &&
    matchesStain(product, stain.recommendedProductType)
  );
  const dosage = waterSource === 'borewell' ? '1.5 scoops (~45 g)' : waterSource === 'tap' ? '1 scoop (~30 g)' : '1.25 scoops (~38 g)';

  const stainOptions = commonStains.map((item) => ({ value: item.stain, label: item.stain }));
  const fabrics = [
    { value: 'cotton', label: 'Everyday cotton' },
    { value: 'colours', label: 'Colours' },
    { value: 'delicate', label: 'Delicate' },
  ];
  const machines = [
    { value: 'handwash', label: 'Handwash' },
    { value: 'semi_auto', label: 'Semi-automatic' },
    { value: 'fully_auto', label: 'Fully automatic' },
  ] as const;

  return (
    <section id="product-finder" className="scroll-mt-24 border-y border-slate-200 bg-[#eaf7fc] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-wide text-indigo-800">Guided wash finder</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Find the right wash for the job.</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">Choose a common stain, fabric type, wash method, and water source to see a matching product from the White Foam range.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <fieldset>
              <legend className="mb-2 text-xs font-extrabold uppercase tracking-wide text-slate-700">1. Select a stain</legend>
              <div className="flex flex-wrap gap-2">
                {stainOptions.map((option) => (
                  <button key={option.value} type="button" aria-pressed={stainId === option.value} onClick={() => setStainId(option.value)} className={`rounded-lg border px-3 py-2 text-xs font-bold ${stainId === option.value ? 'border-indigo-800 bg-indigo-800 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-indigo-500'}`}>
                    {option.label.split(' / ')[0].split(' & ')[0]}
                  </button>
                ))}
                <a href="/stain-guide" className="inline-flex items-center rounded-lg px-2 text-xs font-bold text-indigo-900 underline underline-offset-4">All stain advice</a>
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 text-xs font-extrabold uppercase tracking-wide text-slate-700">2. Choose fabric</legend>
              <div className="grid grid-cols-3 gap-2">
                {fabrics.map((option) => (
                  <button key={option.value} type="button" aria-pressed={fabric === option.value} onClick={() => setFabric(option.value)} className={`min-h-10 rounded-lg border px-2 text-xs font-bold ${fabric === option.value ? 'border-indigo-800 bg-indigo-800 text-white' : 'border-slate-300 text-slate-700 hover:border-indigo-500'}`}>
                    {option.label}
                  </button>
                ))}
              </div>
              {fabric === 'delicate' && <p className="mt-2 text-xs leading-relaxed text-slate-600">Only the gentle rose cake is listed for delicate fabrics. Always follow the garment care label and test a hidden seam.</p>}
            </fieldset>

            <fieldset>
              <legend className="mb-2 text-xs font-extrabold uppercase tracking-wide text-slate-700">3. Select wash method</legend>
              <div className="grid grid-cols-3 gap-2">
                {machines.map((option) => (
                  <button key={option.value} type="button" aria-pressed={washNeed === option.value} onClick={() => setWashNeed(option.value)} className={`min-h-10 rounded-lg border px-2 text-xs font-bold ${washNeed === option.value ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 text-slate-700 hover:border-slate-500'}`}>
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-700"><Droplets className="h-4 w-4 text-indigo-800" />4. Water source and starting dose</legend>
              <select value={waterSource} onChange={(event) => setWaterSource(event.target.value as typeof waterSource)} className="min-h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900">
                <option value="borewell">Borewell / hard water</option>
                <option value="tap">Municipal tap water</option>
                <option value="well">Well water</option>
              </select>
              <p className="mt-2 text-sm font-bold text-indigo-900">Starting guide: {dosage}</p>
              <p className="text-xs leading-relaxed text-slate-600">For a standard 5–6 kg load. Check your pack directions and adjust for load and soil level.</p>
            </fieldset>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wide text-indigo-800">Matching products</p>
                <h3 className="mt-1 text-xl font-black text-slate-950">{stain.recommendedProductType}</h3>
              </div>
              <span className="text-xs font-semibold text-slate-600">{filteredProducts.length} match{filteredProducts.length === 1 ? '' : 'es'}</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredProducts.map((product) => (
                  <article key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div data-product-image={product.id} className="product-art flex min-h-28 items-end p-3 text-white">
                      <span className="rounded bg-white/95 px-2 py-1 text-[10px] font-black text-slate-900">{product.name}</span>
                    </div>
                    <div className="space-y-3 p-4">
                      <p className="text-xs leading-relaxed text-slate-600">{product.tagline}</p>
                      <p className="text-xs font-semibold text-slate-600">{product.specs.packSizes.join(' · ')}</p>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => onSelectProduct(product)} className="min-h-10 flex-1 rounded-lg border border-indigo-800 px-3 text-xs font-bold text-indigo-900 hover:bg-indigo-50">Product details</button>
                        <a href={`https://www.amazon.in/s?k=${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-10 flex-1 items-center justify-center gap-1 rounded-lg bg-indigo-800 px-3 text-xs font-bold text-white hover:bg-indigo-900">See seller price <ArrowUpRight className="h-3.5 w-3.5" /></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                No catalog match for this combination. Check the garment label, or choose another wash method.
              </div>
            )}
            <p className="text-xs leading-relaxed text-slate-600">Product compatibility is based on current product descriptions. Always follow the package and garment care instructions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};