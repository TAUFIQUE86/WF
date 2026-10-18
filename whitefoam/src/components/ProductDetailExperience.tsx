import React, { useState } from 'react';
import {
  Droplets,
  Sparkles,
  ShieldCheck,
  Shirt,
  WashingMachine,
  Hand,
  Layers3,
} from 'lucide-react';

type Pack = { grams: number; label: string };
type ProductDetail = {
  slug: string;
  name: string;
  category: string;
  description: string;
  packs?: Pack[];
  features?: string[];
  bestFor?: string[];
  washTypes?: string[];
  tone: string;
};

const productDetails: ProductDetail[] = [
  {
    slug: 'white-foam-bio-shot',
    name: 'White Foam Bio Shot',
    category: 'Detergent powder',
    description: 'White Foam Bio Shot detergent powder.',
    tone: 'green',
  },
  {
    slug: 'active-detergent-powder',
    name: 'Active Detergent Powder',
    category: 'Detergent powder',
    description: 'An everyday detergent powder for hand and semi-automatic washes.',
    packs: [
      { grams: 500, label: '500 g' },
      { grams: 1000, label: '1 kg' },
      { grams: 3000, label: '3 kg' },
      { grams: 5000, label: '5 kg' },
    ],
    features: [
      'Active blue speckles for rich suds',
      'High dirt-lifting suspension power',
      'For cotton and daily synthetic blends',
    ],
    bestFor: ['Deep mud', 'Sweat', 'Surface dust'],
    washTypes: ['Hand wash', 'Semi-automatic machine'],
    tone: 'blue',
  },
  {
    slug: 'advance-detergent-powder',
    name: 'Advance Detergent Powder',
    category: 'Detergent powder',
    description: 'Detergent powder with brightness care for whites and colours.',
    packs: [
      { grams: 500, label: '500 g' },
      { grams: 1000, label: '1 kg' },
      { grams: 2000, label: '2 kg' },
      { grams: 4000, label: '4 kg' },
    ],
    features: [
      'Optical brightening agents',
      'Quick-dissolving micro-granules',
      'For white and coloured fabrics',
      'Designed for hand and machine washing',
    ],
    bestFor: ['Collar grime', 'Grease', 'Food spills', 'Yellowing'],
    washTypes: ['Hand wash', 'Semi-automatic machine', 'Fully automatic machine'],
    tone: 'sky',
  },
  {
    slug: 'ultra-detergent-powder',
    name: 'Ultra Detergent Powder',
    category: 'Detergent powder',
    description: 'White Foam Ultra detergent powder.',
    tone: 'lime',
  },
  {
    slug: 'double-power',
    name: 'Double Power',
    category: 'Detergent powder',
    description: 'Detergent powder for everyday stains and laundry.',
    packs: [
      { grams: 500, label: '500 g' },
      { grams: 1000, label: '1 kg' },
      { grams: 2000, label: '2 kg' },
      { grams: 5000, label: '5 kg' },
    ],
    features: [
      'Stain-magnet cleaning',
      'Jasmine and rose fragrance',
      'For hand and semi-automatic washes',
    ],
    bestFor: ['Tea', 'Coffee', 'Chocolate', 'Clay mud', 'Curry'],
    washTypes: ['Hand wash', 'Semi-automatic machine'],
    tone: 'rose',
  },
  {
    slug: 'clean-bar',
    name: 'Clean Bar',
    category: 'Laundry bar',
    description: 'A hand-wash bar for targeted cleaning of collars and cuffs.',
    packs: [
      { grams: 125, label: '125 g' },
      { grams: 250, label: '250 g' },
    ],
    features: [
      'High-density solid bar',
      'Targeted scrub for collars and cuffs',
      'Smooth glide during hand washing',
    ],
    bestFor: ['Collar grime', 'Ink marks', 'Mud edges'],
    washTypes: ['Hand wash'],
    tone: 'teal',
  },
  {
    slug: 'shakti-detergent-cake',
    name: 'Shakti Detergent Cake',
    category: 'Laundry cake',
    description: 'A detergent cake for hands-on washing of heavily soiled clothes.',
    packs: [
      { grams: 200, label: '200 g' },
      { grams: 250, label: '250 g' },
    ],
    features: [
      'Heavy-duty scrub density',
      'High active matter formulation',
      'For hand washing',
    ],
    bestFor: ['Workwear', 'Denim', 'School uniforms', 'Cotton bed linens', 'Dry mud', 'Grass marks'],
    washTypes: ['Hand wash'],
    tone: 'orange',
  },
  {
    slug: 'bathroom-cleaner',
    name: 'Bathroom Cleaner',
    category: 'Bathroom cleaner',
    description: 'White Foam bathroom cleaner.',
    tone: 'violet',
  },
  {
    slug: 'dishwash-bar',
    name: 'Dishwash Bar',
    category: 'Dishwash bar',
    description: 'A lime-fresh bar for cleaning dishes and cookware.',
    packs: [
      { grams: 150, label: '150 g' },
      { grams: 300, label: '300 g' },
    ],
    features: [
      'Lime dishwash scouring bar',
      'For dishes and cookware',
      'Concentrated lime degreasers',
    ],
    bestFor: ['Cookware grease', 'Burnt food', 'Oily kitchen towels'],
    tone: 'yellow',
  },
];

const featureIcons = [Sparkles, Droplets, ShieldCheck, Shirt];

function PackageArtwork({ product, pack }: { product: ProductDetail; pack?: Pack }) {
  const packLabel = pack ? `, ${pack.label} pack` : '';
  return (
    <div
      className={`pd-package pd-tone-${product.tone}`}
      role="img"
      aria-label={`${product.name}${packLabel}, illustrative package artwork`}
    >
      <div className="pd-package-top">WHITE FOAM</div>
      <div className="pd-package-rule" />
      <div className="pd-package-name">{product.name.replace('White Foam ', '')}</div>
      {pack && <div className="pd-package-weight">{pack.label}</div>}
      {!pack && <div className="pd-package-care">{product.category}</div>}
    </div>
  );
}

function ProductPage({ product }: { product: ProductDetail }) {
  const packs = product.packs ?? [];
  const [selectedPack, setSelectedPack] = useState<Pack | undefined>(packs[0]);

  return (
    <main className="pd-page">
      <nav className="pd-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <article>
        <section className="pd-hero" aria-labelledby="product-title">
          <div className="pd-hero-art pd-art-tint">
            <PackageArtwork product={product} pack={selectedPack} />
            <span className="pd-art-caption">Illustrative package artwork</span>
          </div>
          <div className="pd-hero-copy">
            <p className="pd-category">{product.category}</p>
            <p className="pd-brand-line">White Foam · Detergent Things Industries India, Bengaluru</p>
            <h1 id="product-title">{product.name}</h1>
            <p className="pd-description">{product.description}</p>
            {product.washTypes && (
              <p className="pd-wash-types">
                {product.washTypes.map((washType, index) => (
                  <React.Fragment key={washType}>
                    {index > 0 && <span aria-hidden="true"> · </span>}
                    <span>{washType}</span>
                  </React.Fragment>
                ))}
              </p>
            )}
          </div>
        </section>

        {packs.length > 1 && (
          <section className="pd-section pd-pack-section" aria-labelledby="pack-heading">
            <h2 id="pack-heading">Pack sizes</h2>
            <div className="pd-pack-gallery">
              {packs.map((pack) => (
                <button
                  className={`pd-pack-tile${selectedPack?.grams === pack.grams ? ' is-selected' : ''}`}
                  key={pack.grams}
                  type="button"
                  aria-pressed={selectedPack?.grams === pack.grams}
                  onClick={() => setSelectedPack(pack)}
                >
                  <span className={`pd-pack-mini pd-tone-${product.tone}`} role="img" aria-label={`${product.name}, ${pack.label} pack, illustrative package artwork`}>
                    <span className="pd-mini-brand">WHITE FOAM</span>
                    <span className="pd-mini-name">{product.name.replace('White Foam ', '')}</span>
                    <span className="pd-mini-weight">{pack.label}</span>
                  </span>
                  <span className="pd-pack-label">{pack.label}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {product.features && (
          <section className="pd-section" aria-labelledby="features-heading">
            <h2 id="features-heading">Key features</h2>
            <ul className="pd-feature-list">
              {product.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return <li key={feature}><Icon aria-hidden="true" /><span>{feature}</span></li>;
              })}
            </ul>
          </section>
        )}

        {product.bestFor && (
          <section className="pd-section" aria-labelledby="best-for-heading">
            <h2 id="best-for-heading">Best for</h2>
            <ul className="pd-best-list">
              {product.bestFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        )}
      </article>

      <p className="pd-close"><a href="/">Explore more from White Foam <span aria-hidden="true">→</span></a></p>
    </main>
  );
}

export function ProductDetailExperience() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const slug = pathname === '/' ? 'white-foam-bio-shot' : pathname.split('/').at(-1);
  const product = productDetails.find((item) => item.slug === slug);
  return <div className="pd-site">{product ? <ProductPage key={product.slug} product={product} /> : <main className="pd-page pd-not-found"><nav className="pd-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Product</span></nav><h1>Product not found</h1><a className="pd-home-link" href="/">Return to White Foam home</a></main>}</div>;
}