import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductFinder } from './components/ProductFinder';
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

export default function App() {
  const [activeBrandFilter, setActiveBrandFilter] = useState<'all' | 'powder' | 'cake' | 'pod_liquid'>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [partnershipPreselectedProduct, setPartnershipPreselectedProduct] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPartnership = (productName: string = '') => {
    setPartnershipPreselectedProduct(productName);
    scrollToSection('partnerships-b2b');
  };

  const handleOpenCareers = () => {
    scrollToSection('careers-section');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
        {/* Sticky Header with Brand Lockup & Navigation */}
        <Navbar
          activeBrandFilter={activeBrandFilter}
          setActiveBrandFilter={setActiveBrandFilter}
          onOpenSearch={() => setIsSearchModalOpen(true)}
          onOpenCookie={() => setIsCookieModalOpen(true)}
          onOpenPartnership={() => handleOpenPartnership()}
          onOpenCareers={handleOpenCareers}
        />

        <main>
          {/* Hero Section with Chamak jo khud Bole, Tough Stains Out & Interactive Stain Solver */}
          <HeroSection
            onExploreProducts={() => scrollToSection('product-finder')}
            onExploreFacilities={() => scrollToSection('innovation-facilities')}
            onExplorePartnership={() => handleOpenPartnership()}
          />

          {/* Interactive Stain Laboratory with Before/After Drag Slider & Hard Water Advisor */}
          <StainLaboratory />

          {/* Bihar Territory Dealership Availability & Distributor Profit Margin / ROI Calculator */}
          <DistributorPortal />

          {/* Product Finder (Interactive Matchmaker for White Foam) */}
          <ProductFinder
            onSelectProduct={(p) => setSelectedProductForModal(p)}
            onOpenPartnershipWithProduct={(name) => handleOpenPartnership(name)}
          />

          {/* White Foam Consumer Products (Detergent Powders & Cakes) */}
          <WhiteFoamConsumerProducts
            onSelectProduct={(p) => setSelectedProductForModal(p)}
            onOpenPartnership={() => handleOpenPartnership('White Foam Bihar Bulk Supply')}
          />

          {/* White Foam BIG SHOT Feature Spotlight */}
          <WhiteFoamSpotlight
            onLearnMoreFacilities={() => scrollToSection('innovation-facilities')}
            onOpenPartnership={() => handleOpenPartnership('White Foam BIG SHOT')}
          />

          {/* World-Class Innovation and R&D (Bihar Unit & Testing) */}
          <InnovationLab onOpenPartnership={() => handleOpenPartnership('Bihar R&D / Testing Audit')} />

          {/* How to Wash Clothes: The Expert Laundry Guide */}
          <WashGuide />

          {/* Manufacturing & Third-Party OEM Partnerships (Bihar Unit) */}
          <ManufacturingPartnership initialProduct={partnershipPreselectedProduct} />

          {/* People & Culture / Careers Section ("Dil Se Saaf") */}
          <CareersSection />

          {/* Official Accreditations Bar (Govt Star Export, GMP, ISO 9001:2015) */}
          <CertificationsBar />
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
          onOpenPartnership={(name) => handleOpenPartnership(name)}
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
