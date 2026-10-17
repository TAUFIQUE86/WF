import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShopperProductFinder } from './components/ShopperProductFinder';
import { StainLaboratory } from './components/StainLaboratory';
import { DistributorPortal } from './components/DistributorPortal';
import { WhiteFoamConsumerProducts } from './components/WhiteFoamConsumerProducts';
import { WhiteFoamSpotlight } from './components/WhiteFoamSpotlight';
import { InnovationLab } from './components/InnovationLab';
import { WashGuide } from './components/WashGuide';
import { ManufacturingPartnership } from './components/ManufacturingPartnership';
import { CareersSection } from './components/CareersSection';
import { CertificationsBar } from './components/CertificationsBar';
import { Footer } from './components/Footer';
import { FloatingSocialDock } from './components/FloatingSocialDock';
import { WhatsAppQuickConnect } from './components/WhatsAppQuickConnect';
import { CookieConsentModal } from './components/CookieConsentModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { Product } from './data/detergentData';
import { ShopAndFaq } from './components/ShopAndFaq';

export default function App() {
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const partnershipPreselectedProduct = new URLSearchParams(window.location.search).get('product') || '';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPartnership = (productName: string = '') => {
    const productQuery = productName ? `?product=${encodeURIComponent(productName)}` : '';
    window.location.assign(`/business${productQuery}`);
  };

  const handleOpenCareers = () => {
    window.location.assign('/careers');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
        {/* Sticky Header with Brand Lockup & Navigation */}
        <Navbar
          onOpenSearch={() => setIsSearchModalOpen(true)}
          onOpenPartnership={() => handleOpenPartnership()}
          onOpenCareers={handleOpenCareers}
        />

        <main>
          {pathname === '/business' ? (
            <>
              <DistributorPortal />
              <ManufacturingPartnership initialProduct={partnershipPreselectedProduct} />
            </>
          ) : pathname === '/careers' ? (
            <CareersSection />
          ) : pathname === '/stain-guide' ? (
            <StainLaboratory />
          ) : (
            <>
              <HeroSection
                onExploreProducts={() => scrollToSection('product-finder')}
              />
              <ShopperProductFinder onSelectProduct={(product) => setSelectedProductForModal(product)} />
              <WhiteFoamSpotlight />
              <WhiteFoamConsumerProducts
                onSelectProduct={(p) => setSelectedProductForModal(p)}
              />
              <InnovationLab />
              <CertificationsBar />
              <WashGuide />
              <ShopAndFaq />
            </>
          )}
        </main>

        {/* Corporate Footer */}
        <Footer
          onOpenCookie={() => setIsCookieModalOpen(true)}
          onOpenPartnership={() => handleOpenPartnership()}
          onOpenCareers={handleOpenCareers}
        />

        {/* Floating Vertical Social Dock on Right Edge */}
        <FloatingSocialDock />

        {/* Floating WhatsApp Quick Connect & Dealership Dock */}
        <WhatsAppQuickConnect />

        {/* Interactive Modals */}
        <CookieConsentModal
          isOpen={isCookieModalOpen}
          onClose={() => setIsCookieModalOpen(false)}
        />

        <ProductDetailModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
        />

        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
          onSelectProduct={(p) => setSelectedProductForModal(p)}
        />
      </div>
    </LanguageProvider>
  );
}
