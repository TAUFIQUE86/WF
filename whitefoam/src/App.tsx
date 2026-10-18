import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { BrandFooter, BrandNavbar } from './components/BrandShell';
import { BusinessPage, HomePage, HowToUsePage, PrivacyPage, ProductsPage, StainGuidePage, SupportPage, WhereToBuyPage } from './components/BrandPages';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const pages: Record<string, React.ReactNode> = {
    '/': <HomePage />,
    '/products': <ProductsPage />,
    '/stain-guide': <StainGuidePage />,
    '/how-to-use': <HowToUsePage />,
    '/where-to-buy': <WhereToBuyPage />,
    '/business': <BusinessPage />,
    '/support': <SupportPage />,
    '/privacy': <PrivacyPage />,
  };

  return (
    <LanguageProvider>
      <div className="brand-site">
        <BrandNavbar />
        {pages[pathname] ?? <HomePage />}
        <BrandFooter />
      </div>
    </LanguageProvider>
  );
}
