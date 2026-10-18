import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navigation = [
  { label: 'Products', href: '/products' },
  { label: 'Stain Guide', href: '/stain-guide' },
  { label: 'How to Use', href: '/how-to-use' },
  { label: 'Where to Buy', href: '/where-to-buy' },
  { label: 'For Business', href: '/business' },
  { label: 'Support', href: '/support' },
];

export function BrandNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="brand-header">
      <div className="brand-header-inner">
        <a className="brand-lockup" href="/" aria-label="Detergent Things Industries India home">
          <span className="brand-monogram">DT</span>
          <span><strong>Detergent Things Industries India</strong><small>White Foam · Fabric Care</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-cta" href="/where-to-buy">Shop now <ArrowRight size={15} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowRight size={16} /></a>)}
      </nav>}
    </header>
  );
}

export function BrandFooter() {
  return (
    <footer className="brand-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="brand-lockup footer-lockup" href="/" aria-label="Detergent Things Industries India home">
            <span className="brand-monogram">DT</span>
            <span><strong>Detergent Things Industries India</strong><small>White Foam · Fabric Care</small></span>
          </a>
          <p>Clean is our business.<br />Integrity is our promise.</p>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Get in touch</p>
          <a href="mailto:contact@detergentthings.in">contact@detergentthings.in</a>
          <a href="tel:+919111911111">+91 91119 11111</a>
          <span>Detergent Things Industries India<br />Bihar, India</span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <p className="eyebrow">Explore</p>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Detergent Things Industries India</span>
        <a href="/privacy">Privacy Policy <ArrowRight size={14} /></a>
        <span lang="hi">चमक जो खुद बोले</span>
      </div>
    </footer>
  );
}
