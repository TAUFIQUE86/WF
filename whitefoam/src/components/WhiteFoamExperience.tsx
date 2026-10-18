import React, { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Droplets,
  Factory,
  MapPin,
  Menu,
  PackageCheck,
  ShieldCheck,
  Shirt,
  Sparkles,
  WashingMachine,
  X,
} from 'lucide-react';
import detergentPack from '../../White Foam  Detergent.jpg.jpeg';

type PageKey = 'home' | 'products' | 'stain-guide' | 'how-to-use' | 'where-to-buy' | 'business' | 'support' | 'privacy';

const navItems: { label: string; href: string }[] = [
  { label: 'Products', href: '/products' },
  { label: 'Stain Guide', href: '/stain-guide' },
  { label: 'How to Use', href: '/how-to-use' },
  { label: 'Where to Buy', href: '/where-to-buy' },
  { label: 'For Business', href: '/business' },
  { label: 'Support', href: '/support' },
];

const products = [
  { id: 'bio-shot', name: 'White Foam Bio Shot', category: 'Powder', machineTypes: [], fabricTypes: [], packs: 'Pack sizes not listed', tone: 'mint', description: 'Product specifications not listed yet.' },
  { id: 'active', name: 'Active Detergent Powder', category: 'Powder', machineTypes: ['hand', 'semi-auto'], fabricTypes: ['cotton', 'synthetic'], packs: '500 g · 1 kg · 3 kg · 5 kg', tone: 'blue', description: 'An everyday powder for the family wash.' },
  { id: 'advance', name: 'Advance Detergent Powder', category: 'Powder', machineTypes: ['hand', 'semi-auto', 'fully-auto'], fabricTypes: [], packs: '500 g · 1 kg · 2 kg · 4 kg', tone: 'sky', description: 'Brightness care for whites and colour.' },
  { id: 'ultra', name: 'Ultra Detergent Powder', category: 'Powder', machineTypes: [], fabricTypes: [], packs: 'Pack sizes not listed', tone: 'lime', description: 'Product specifications not listed yet.' },
  { id: 'double-power', name: 'Double Power', category: 'Powder', machineTypes: ['hand', 'semi-auto'], fabricTypes: [], packs: '500 g · 1 kg · 2 kg · 5 kg', tone: 'rose', description: 'A powder for tough everyday stains.' },
  { id: 'clean-bar', name: 'Clean Bar', category: 'Laundry bar', machineTypes: ['hand'], fabricTypes: [], packs: '125 g · 250 g', tone: 'teal', description: 'Targeted scrubbing for collars and cuffs.' },
  { id: 'shakti-cake', name: 'Shakti Detergent Cake', category: 'Laundry bar', machineTypes: ['hand'], fabricTypes: ['cotton', 'denim'], packs: '200 g · 250 g', tone: 'orange', description: 'A durable bar for hands-on washing.' },
  { id: 'bathroom-cleaner', name: 'Bathroom Cleaner', category: 'Home care', machineTypes: [], fabricTypes: [], packs: 'Pack sizes not listed', tone: 'violet', description: 'Bathroom cleaner details not listed yet.' },
  { id: 'dishwash-bar', name: 'Dishwash Bar', category: 'Dish care', machineTypes: [], fabricTypes: [], packs: '150 g · 300 g', tone: 'yellow', description: 'Lime-fresh cleaning for dishes and cookware.' },
];

const stains = [
  { name: 'Tea / coffee', key: 'tea', product: 'Double Power', productId: 'double-power', steps: ['Blot excess liquid with a clean cloth; do not rub.', 'Rinse from the back of the fabric with cool water.', 'Pretreat with Double Power only as directed on its product pack.', 'Wash according to the garment care label and check the mark before drying.'] },
  { name: 'Blood', key: 'blood', product: 'Product recommendation not verified', steps: ['Rinse promptly from the back of the fabric with cold water.', 'Avoid warm water and avoid rubbing the stain deeper into the fibres.', 'Check the garment label before applying a detergent or stain treatment.', 'Wash as directed and air-dry while checking whether the mark remains.'] },
  { name: 'Oil / grease', key: 'grease', product: 'Clean Bar', productId: 'clean-bar', steps: ['Lift excess oil with a clean cloth; do not rub.', 'Apply Clean Bar to the affected area as directed on the product pack.', 'Rinse the treated area thoroughly.', 'Wash using the warmest temperature permitted by the care label; check before drying.'] },
  { name: 'Ink', key: 'ink', product: 'Product recommendation not verified', steps: ['Blot gently with a clean, dry cloth. Do not scrub.', 'Check the care label and test any treatment on a hidden area first.', 'Use only a product whose label permits the fabric and stain treatment.', 'Do not tumble-dry or iron until the mark is gone.'] },
  { name: 'Grass', key: 'grass', product: 'Shakti Detergent Cake', productId: 'shakti-cake', steps: ['Brush off dry soil without spreading it.', 'Pretreat the green mark with Shakti Detergent Cake following its pack directions.', 'Wash at the warmest temperature allowed by the garment care label.', 'Check the stain before drying; repeat care-label-safe treatment if needed.'] },
  { name: 'Cooking oil', key: 'cooking-oil', product: 'Shakti Detergent Cake', productId: 'shakti-cake', steps: ['Blot excess oil with a clean cloth; do not rub.', 'Gently pretreat with Shakti Detergent Cake following its pack directions.', 'Rinse the treated area thoroughly.', 'Wash according to the care label and check the mark before drying.'] },
];

const certifications = [
  { name: 'Star Export House', issuer: 'Government of India (as listed in company materials)' },
  { name: 'GMP', issuer: 'Quality Certification Council (as listed in company materials)' },
  { name: 'ISO 9001:2015', issuer: 'Certification body not listed in available materials' },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="wf-header">
      <div className="wf-header-inner">
        <a className="wf-brand" href="/" aria-label="White Foam home">
          <span className="wf-brand-mark" aria-hidden="true">WF</span>
          <span><strong>White Foam</strong><small>by Detergent Things Industries India</small></span>
        </a>
        <button className="wf-menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`wf-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  );
}

function Breadcrumb({ title }: { title: string }) {
  return <nav className="wf-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>;
}

function PageIntro({ title, subtitle, page }: { title: string; subtitle: string; page: string }) {
  return <div className="wf-page-intro"><Breadcrumb title={page} /><p className="wf-eyebrow">WHITE FOAM / {page.toUpperCase()}</p><h1>{title}</h1><p className="wf-lede">{subtitle}</p></div>;
}

function ProductArt({ tone, name, category }: { tone: string; name: string; category: string }) {
  return <div className={`wf-product-art tone-${tone}`} role="img" aria-label={`${name} illustrative pack artwork`}><span className="wf-art-brand">White<br />Foam</span><span className="wf-art-line" /><span className="wf-art-name">{name.replace(' Detergent Powder', '').replace(' White Foam', '')}</span><span className="wf-art-weight">{category.toUpperCase()}</span></div>;
}

function ProductCard({ product, home = false }: { product: typeof products[number]; home?: boolean }) {
  return <article className={`wf-product-card${home ? ' wf-home-product' : ''}`} id={product.id}>
    <ProductArt tone={product.tone} name={product.name} category={product.category} />
    <div className="wf-product-info"><p className="wf-product-category">{product.category}</p><h3>{product.name}</h3>
      {home ? <p className="wf-pack-size">{product.packs}</p> : <><p className="wf-product-description">{product.description}</p><p className="wf-pack-size"><strong>Pack size</strong> · {product.packs}</p><div className="wf-product-meta"><span>Price: Check retailer</span><span>Rating: Not rated yet</span></div></>}
      <div className="wf-product-actions">{home ? <a className="wf-button wf-button-quiet" href={`/products#${product.id}`}>View <ArrowRight size={16} /></a> : <><a className="wf-button wf-button-primary" href={`https://www.amazon.in/s?k=${encodeURIComponent(`White Foam ${product.name}`)}`} target="_blank" rel="noreferrer">Buy <ArrowRight size={16} /></a><a className="wf-button wf-button-quiet" href={`/where-to-buy?product=${encodeURIComponent(product.name)}`}>Find near me</a></>}</div>
    </div>
  </article>;
}

function SiteFooter({ home }: { home: boolean }) {
  return <>
    {home && <section className="wf-footer-cta"><div><p className="wf-eyebrow">A BETTER WASH STARTS HERE</p><h2>Ready to shop?</h2><p>Find White Foam products from a retailer near you.</p></div><a className="wf-button wf-button-primary" href="/where-to-buy">Where to Buy <ArrowRight size={17} /></a></section>}
    <footer className="wf-footer"><div className="wf-footer-main"><div className="wf-footer-brand"><a className="wf-brand" href="/"><span className="wf-brand-mark" aria-hidden="true">WF</span><span><strong>White Foam</strong><small>Clean is our business. Integrity is our promise.</small></span></a><p>Detergent Things Industries India<br />Bengaluru, Karnataka, India</p><a href="mailto:contact@detergentthings.in">contact@detergentthings.in</a><a href="tel:+919111911111">+91 9111911111</a></div><nav className="wf-footer-links" aria-label="Footer navigation">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/privacy">Privacy Policy</a></nav></div><div className="wf-footer-bottom"><span>© {new Date().getFullYear()} Detergent Things Industries India</span><span>Made in India</span></div></footer>
  </>;
}

function HomePage() {
  return <>
    <nav className="wf-home-breadcrumb" aria-label="Breadcrumb"><span aria-current="page">Home</span></nav>
    <section className="wf-hero"><div className="wf-hero-copy"><p className="wf-eyebrow"><span className="wf-eyebrow-dot" /> EVERYDAY CARE, MADE WITH INTENTION</p><h1>Clean is our business.<br /><em>Integrity is our promise.</em></h1><p className="wf-hindi" lang="hi">चमक जो खुद बोले।</p><p className="wf-hero-description">Thoughtful laundry care for the clothes you live in.</p><div className="wf-hero-actions"><a className="wf-button wf-button-primary" href="/products">Find Your Wash <ArrowRight size={17} /></a><a className="wf-text-link" href="/products">Shop Products <ArrowDownRight size={17} /></a></div><div className="wf-hero-note"><span><Check size={15} /> Made in India</span><span><Droplets size={15} /> Care for every wash</span></div></div><div className="wf-hero-image"><div className="wf-image-caption"><span>WHITE FOAM</span><span>Chamak jo khud bole</span></div><img src={detergentPack} alt="White Foam Oxi Booster detergent powder package" /><span className="wf-image-stamp" aria-hidden="true">A brighter<br />everyday</span></div></section>
    <section className="wf-home-products" id="top-products"><div className="wf-section-heading"><div><p className="wf-eyebrow">THE EVERYDAY EDIT</p><h2>Find your kind of clean.</h2></div><a className="wf-text-link" href="/products">All products <ArrowRight size={16} /></a></div><div className="wf-home-product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} home />)}</div></section>
    <section className="wf-stain-teaser"><div><p className="wf-eyebrow">A LITTLE HELP FOR THE MESSY MOMENTS</p><h2>Stain on your clothes? Find the right fix in seconds.</h2></div><a className="wf-button wf-button-primary" href="/stain-guide">Open Stain Guide <ArrowRight size={17} /></a></section>
    <section className="wf-trust-strip" aria-label="White Foam commitments"><div><ShieldCheck /><span>Quality tested</span></div><div><MapPin /><span>Made in India</span></div><div><Shirt /><span>Safe for regular fabrics</span></div></section>
  </>;
}

function ProductsPage() {
  const [category, setCategory] = useState('All categories');
  const [machine, setMachine] = useState('');
  const [fabric, setFabric] = useState('');
  const filtered = products.filter((product) => (category === 'All categories' || product.category === category)
    && (!machine || product.machineTypes.includes(machine))
    && (!fabric || product.fabricTypes.includes(fabric)));
  return <div className="wf-page"><PageIntro page="Products" title="The right clean for your day." subtitle="Explore the White Foam range and choose what fits your wash." />
    <div className="wf-filter-bar" aria-label="Filter products"><label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="All categories">All categories</option><option>Powder</option><option>Laundry bar</option><option>Home care</option><option>Dish care</option></select></label><label>Machine type<select value={machine} onChange={(event) => setMachine(event.target.value)}><option value="">Any machine</option><option value="hand">Hand wash</option><option value="semi-auto">Semi-automatic</option><option value="fully-auto">Fully automatic</option></select></label><label>Fabric type<select value={fabric} onChange={(event) => setFabric(event.target.value)}><option value="">Any fabric</option><option value="cotton">Cotton</option><option value="synthetic">Synthetic</option><option value="denim">Denim</option></select></label><span className="wf-results-count">{filtered.length} products</span></div>
    <div className="wf-product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    <div className="wf-inline-cta"><span>Not sure which one suits your laundry?</span><a className="wf-button wf-button-primary" href="/how-to-use">Find your wash <ArrowRight size={16} /></a></div>
  </div>;
}

function StainGuidePage() {
  const [stain, setStain] = useState(stains[0].key);
  const [fabric, setFabric] = useState('Cotton');
  const [showResult, setShowResult] = useState(false);
  const selected = stains.find((item) => item.key === stain) ?? stains[0];
  const fabricNote = fabric === 'Delicate / wool' ? ' For delicate or wool garments, follow the care label and test any treatment on a hidden area first.' : '';
  return <div className="wf-page"><PageIntro page="Stain Guide" title="A calmer way to tackle stains." subtitle="Choose what happened and what you’re washing. We’ll suggest a gentle first step." />
    <section className="wf-finder-panel" id="stain-finder"><div className="wf-panel-heading"><span className="wf-icon-disc"><Sparkles /></span><div><p className="wf-eyebrow">QUICK STAIN FINDER</p><h2>Let’s find the right first step.</h2></div></div><div className="wf-finder-controls"><label>1. What is the stain?<select value={stain} onChange={(event) => { setStain(event.target.value); setShowResult(false); }}>{stains.map((item) => <option key={item.key} value={item.key}>{item.name}</option>)}</select></label><label>2. What fabric is it?<select value={fabric} onChange={(event) => setFabric(event.target.value)}><option>Cotton</option><option>Polyester</option><option>Denim</option><option>Delicate / wool</option><option>Other</option></select></label><button className="wf-button wf-button-primary" type="button" onClick={() => setShowResult(true)}>Show my steps <ArrowRight size={16} /></button></div>{showResult && <div className="wf-result-box" role="status"><p className="wf-eyebrow">YOUR FIRST STEPS · {fabric.toUpperCase()}</p><h3>{selected.name}</h3><ol>{selected.steps.map((step) => <li key={step}>{step}</li>)}</ol><p>{fabricNote}</p><p><strong>Product match:</strong> {selected.product}. Always check the garment care label and spot-test first.</p><a className="wf-text-link" href={`#guide-${selected.key}`}>Open full stain guide <ArrowRight size={15} /></a></div>}</section>
    <section className="wf-emergency-section"><div className="wf-section-heading"><div><p className="wf-eyebrow">QUICK REFERENCE</p><h2>Six stains, six starting points.</h2></div></div><div className="wf-stain-grid">{stains.map((item, index) => <a className="wf-stain-card" href={`#guide-${item.key}`} key={item.key}><span className="wf-stain-number">0{index + 1}</span><span><strong>{item.name}</strong><small>{item.product}</small></span><ArrowRight size={17} /></a>)}</div></section>
    <section className="wf-full-stain-guides"><div className="wf-section-heading"><div><p className="wf-eyebrow">STEP-BY-STEP</p><h2>Full stain guides.</h2></div></div><div className="wf-full-stain-grid">{stains.map((item) => <article className="wf-full-stain-card" id={`guide-${item.key}`} key={item.key}><p className="wf-eyebrow">{item.name.toUpperCase()}</p><h3>{item.name}</h3><ol>{item.steps.map((step) => <li key={step}>{step}</li>)}</ol><p className="wf-guide-product"><strong>Product match:</strong> {item.product}</p><a className="wf-text-link" href={item.productId ? `/products#${item.productId}` : '/products'}>View products <ArrowRight size={15} /></a></article>)}</div></section>
  </div>;
}

function HowToUsePage() {
  const [load, setLoad] = useState('3');
  const [hardness, setHardness] = useState('normal');
  const [labelDose, setLabelDose] = useState('');
  const dose = Number(labelDose) > 0 ? Math.round(Number(labelDose) * Number(load) / 3) : null;
  return <div className="wf-page"><PageIntro page="How to Use" title="A good wash starts with the right dose." subtitle="Use your product label as the source of truth. This calculator scales the label dose to your load and water conditions." />
    <section className="wf-dose-layout"><div className="wf-dose-card"><div className="wf-panel-heading"><span className="wf-icon-disc"><Droplets /></span><div><p className="wf-eyebrow">DOSE CALCULATOR</p><h2>Estimate your wash dose.</h2></div></div><div className="wf-form-grid"><label>Load size<select value={load} onChange={(event) => setLoad(event.target.value)}><option value="1">1 kg · small</option><option value="3">3 kg · regular</option><option value="5">5 kg · large</option><option value="7">7 kg · extra large</option></select></label><label>Water hardness<select value={hardness} onChange={(event) => setHardness(event.target.value)}><option value="soft">Soft</option><option value="normal">Normal</option><option value="hard">Hard</option></select></label><label>Pack label dose for 3 kg (grams)<input type="number" min="1" step="1" value={labelDose} onChange={(event) => setLabelDose(event.target.value)} placeholder="Enter pack dose" /></label></div><div className="wf-dose-result"><span>Load-scaled label estimate</span><strong>{dose === null ? '—' : `${dose} g`}</strong><small>{dose === null ? 'Enter the 3 kg dose printed on your product pack. Follow pack directions; no dose is assumed.' : hardness === 'hard' ? 'Hard water selected: check the product pack for its hard-water directions. This estimate does not add an unverified adjustment.' : 'Scaled from the dose you entered for a 3 kg load. Follow the product pack directions and do not exceed the label dose.'}</small></div></div><aside className="wf-dose-note"><PackageCheck size={23} /><h3>Less can be enough.</h3><p>Sort by colour and soil level, measure with the pack guide, and avoid overfilling the machine.</p><a className="wf-text-link" href="/products">Explore products <ArrowRight size={16} /></a></aside></section>
    <section className="wf-wash-methods"><div className="wf-section-heading"><div><p className="wf-eyebrow">WASHING BASICS</p><h2>Three ways to wash well.</h2></div></div><div className="wf-method-grid"><article><WashingMachine /><h3>Machine wash</h3><p>Sort colours, check pockets, load loosely, and choose the cycle shown on garment labels.</p></article><article><Droplets /><h3>Hand wash</h3><p>Dissolve detergent in water first. Gently work through the fabric, rinse well, and avoid harsh twisting.</p></article><article><Shirt /><h3>Cold wash</h3><p>Cold water helps protect many colours. Pretreat marks and check care labels before washing.</p></article></div></section>
    <section className="wf-mark-guide"><div><p className="wf-eyebrow">AFTER THE WASH</p><h2>Hand-wash marks?</h2><p>Powder that has not dissolved fully can leave visible marks. Dissolve it completely before adding clothes, use the measured amount on pack, and rinse thoroughly.</p></div><a className="wf-button wf-button-primary" href="/support">Get support <ArrowRight size={16} /></a></section>
  </div>;
}

function WhereToBuyPage() {
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const productName = new URLSearchParams(window.location.search).get('product');
  const mapQuery = [productName || 'White Foam detergent', city || 'near me'].join(' ');
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(mapQuery)}`;
  return <div className="wf-page"><PageIntro page="Where to Buy" title="Find White Foam near you." subtitle="Search local shops or check your preferred marketplace for current availability." />
    <section className="wf-locator"><span className="wf-icon-disc"><MapPin /></span><div><p className="wf-eyebrow">STORE LOCATOR</p><h2>Where are you shopping from?</h2><p>{productName ? `Looking for ${productName}? ` : ''}Enter a city or PIN code to search for nearby retailers.</p></div><form onSubmit={(event) => { event.preventDefault(); setSearched(true); }}><label className="wf-sr-only" htmlFor="store-location">City or PIN code</label><input id="store-location" value={city} onChange={(event) => setCity(event.target.value)} placeholder="City or PIN code" required /><button className="wf-button wf-button-primary" type="submit">Find stores <ArrowRight size={16} /></button></form>{searched && <a className="wf-map-result" href={mapUrl} target="_blank" rel="noreferrer">View nearby search results on Google Maps <ArrowRight size={15} /></a>}</section>
    <section className="wf-marketplaces"><div className="wf-section-heading"><div><p className="wf-eyebrow">SHOP ONLINE</p><h2>Choose your marketplace.</h2></div></div><div className="wf-market-grid"><a href="https://www.amazon.in/s?k=White+Foam+detergent" target="_blank" rel="noreferrer"><span>amazon</span><small>Search White Foam on Amazon</small><ArrowRight /></a><a href="https://www.flipkart.com/search?q=white%20foam%20detergent" target="_blank" rel="noreferrer"><span>Flipkart</span><small>Search White Foam on Flipkart</small><ArrowRight /></a><a href="https://blinkit.com/s/?q=white%20foam%20detergent" target="_blank" rel="noreferrer"><span>blinkit</span><small>Check local availability</small><ArrowRight /></a></div></section>
    <section className="wf-business-callout"><div><p className="wf-eyebrow">RETAILERS & DISTRIBUTORS</p><h2>Want to stock White Foam?</h2><p>Tell us about your business and our team can help with the next steps.</p></div><a className="wf-button wf-button-primary" href="/business">Distributor enquiry <ArrowRight size={16} /></a></section>
  </div>;
}

function BusinessPage() {
  const [formMessage, setFormMessage] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (import.meta.env.DEV) {
      event.preventDefault();
      setFormMessage('Form submissions are enabled on the deployed website. For now, email contact@detergentthings.in.');
    }
  };
  return <div className="wf-page"><PageIntro page="For Business" title="Let’s build something that cleans." subtitle="White Foam works with distributors, bulk buyers, and manufacturing partners across India." />
    <section className="wf-business-intro"><div><Factory /><p className="wf-eyebrow">BUSINESS PARTNERSHIPS</p><h2>Built for ambitious partners.</h2><p>Discuss retail distribution, institutional supply, bulk purchasing, or private-label manufacturing with Detergent Things Industries India.</p><a className="wf-text-link" href="#business-form">Start an enquiry <ArrowRight size={16} /></a></div><div className="wf-business-points"><p><Check /> Distributor and retail partnerships</p><p><Check /> Bulk and institutional buying</p><p><Check /> Manufacturing partnership enquiries</p></div></section>
    <section className="wf-certifications"><div className="wf-section-heading"><div><p className="wf-eyebrow">DOCUMENTATION</p><h2>Quality & compliance.</h2><p>Claims below reflect available company materials. Request current documents for verification.</p></div></div><div className="wf-cert-grid">{certifications.map((cert) => <article key={cert.name}><ShieldCheck /><h3>{cert.name}</h3><p>Issuing body: {cert.issuer}</p><small>Certificate number: Not listed in available materials</small></article>)}</div><a className="wf-button wf-button-quiet" href="mailto:contact@detergentthings.in?subject=Safety%20Data%20Sheet%20request">Request Safety Data Sheet <ArrowRight size={16} /></a><p className="wf-small-note">A downloadable SDS is not available in the project files. Request the current approved document from the company.</p></section>
    <section className="wf-business-form-section" id="business-form"><div><p className="wf-eyebrow">TELL US WHAT YOU NEED</p><h2>Start a conversation.</h2><p>Share a few details and the business team will follow up.</p><p className="wf-contact-line"><span>Typically replies within 24 hours for business enquiries</span><a href="mailto:contact@detergentthings.in">contact@detergentthings.in</a></p></div><form className="wf-form-card" name="oem-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}><input type="hidden" name="form-name" value="oem-inquiry" /><p className="wf-hidden-field"><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p><label>Company name<input name="companyName" required /></label><label>Contact person<input name="contactPerson" required /></label><div className="wf-form-grid"><label>Email<input name="email" type="email" required /></label><label>Phone<input name="phone" type="tel" required /></label></div><label>I'm interested in<select name="serviceType"><option>Distribution</option><option>Bulk buying</option><option>Manufacturing partnership</option></select></label><label>Tell us more<textarea name="notes" rows={3} /></label><label className="wf-check-label"><input name="privacyConsent" type="checkbox" value="yes" required /> I agree to be contacted about this enquiry.</label><button className="wf-button wf-button-primary" type="submit">Send enquiry <ArrowRight size={16} /></button>{formMessage && <p role="status" className="wf-form-message">{formMessage}</p>}</form></section>
  </div>;
}

const faqs = [
  { q: 'Which product should I use for coloured clothes?', a: 'Check the care label first. White Foam Advance is described for whites and colours in the available product information. Wash similar colours together and test a hidden area when unsure.' },
  { q: 'How much detergent should I use in hard water?', a: 'Start with the product pack directions for your load. Water hardness can affect results, so adjust only within the pack guidance. Avoid adding extra detergent without checking the label.' },
  { q: 'Is White Foam safe for septic systems?', a: 'Please check the product label for current septic-system guidance. Contact our support team with the exact product name if you need help.' },
  { q: 'What if a stain is still there after washing?', a: 'Do not tumble dry or iron the garment yet. Treat the mark again following the care label and stain guide. Heat can make some stains harder to remove.' },
];

function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`White Foam support: ${form.get('topic')}`);
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nProduct / topic: ${form.get('topic')}\n\n${form.get('message')}`);
    window.location.href = `mailto:contact@detergentthings.in?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <div className="wf-page"><PageIntro page="Support" title="Here when you need a hand." subtitle="Find quick answers or get in touch with the White Foam team." />
    <section className="wf-support-layout"><div className="wf-faqs"><p className="wf-eyebrow">COMMON QUESTIONS</p><h2>Good to know.</h2>{faqs.map((faq, index) => <div className={`wf-faq${openFaq === index ? ' is-open' : ''}`} key={faq.q}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{faq.a}</p>}</div>)}</div><div className="wf-contact-panel"><p className="wf-eyebrow">CONTACT OUR TEAM</p><h2>How can we help?</h2><div className="wf-contact-methods"><a href="mailto:contact@detergentthings.in">Email <strong>contact@detergentthings.in</strong></a><a href="tel:+919111911111">Phone <strong>+91 9111911111</strong></a><a href="https://wa.me/919111911111" target="_blank" rel="noreferrer">WhatsApp <strong>Chat with us <ArrowRight size={14} /></strong></a></div><p className="wf-response-time"><CircleHelp size={16} /> Response time varies; email us for urgent product questions.</p><form className="wf-support-form" onSubmit={handleSubmit}><label>Your name<input name="name" autoComplete="name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>What do you need help with?<select name="topic"><option>Product question</option><option>Order or availability</option><option>Usage and stains</option><option>Other</option></select></label><label>Message<textarea name="message" rows={3} required /></label><button className="wf-button wf-button-primary" type="submit">Send message <ArrowRight size={16} /></button>{sent && <small role="status">Your email app should open with your message ready to send.</small>}</form></div></section>
  </div>;
}

function PrivacyPage() {
  return <div className="wf-page"><PageIntro page="Privacy Policy" title="Your information, treated with care." subtitle="Business enquiry details are used to respond to your request." /><section className="wf-privacy-copy"><h2>Information and contact</h2><p>Business enquiry forms are submitted through Netlify Forms on the deployed site. Support contact forms open a prefilled email in your email application; no message is sent until you choose to send it.</p><p>This project does not include an analytics or advertising-cookie implementation. For privacy questions, contact <a href="mailto:contact@detergentthings.in">contact@detergentthings.in</a>.</p><a className="wf-button wf-button-primary" href="mailto:contact@detergentthings.in?subject=Privacy%20question">Contact us <ArrowRight size={16} /></a></section></div>;
}

export function WhiteFoamExperience() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const routes: Record<string, PageKey> = { '/': 'home', '/products': 'products', '/stain-guide': 'stain-guide', '/how-to-use': 'how-to-use', '/where-to-buy': 'where-to-buy', '/business': 'business', '/support': 'support', '/privacy': 'privacy' };
  const page = routes[pathname] ?? 'home';
  return <div className="wf-site"><SiteHeader /><main>{page === 'home' && <HomePage />}{page === 'products' && <ProductsPage />}{page === 'stain-guide' && <StainGuidePage />}{page === 'how-to-use' && <HowToUsePage />}{page === 'where-to-buy' && <WhereToBuyPage />}{page === 'business' && <BusinessPage />}{page === 'support' && <SupportPage />}{page === 'privacy' && <PrivacyPage />}</main><SiteFooter home={page === 'home'} /></div>;
}