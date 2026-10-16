import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Brand & Company
  companyName: {
    en: 'Detergent Things Industries India',
    hi: 'डिटर्जेंट थिंग्स इंडस्ट्रीज इंडिया',
  },
  productName: {
    en: 'White Foam',
    hi: 'व्हाइट फोम',
  },
  tagline: {
    en: 'Chamak jo khud Bole',
    hi: 'चमक जो खुद बोले',
  },
  subTagline: {
    en: 'New Trust in Brightness & Freshness | Unit in Bihar, India',
    hi: 'सफेदी और ताज़गी का नया विश्वास | विनिर्माण इकाई: बिहार, भारत',
  },
  
  // Navigation
  navConsumerProducts: {
    en: 'Consumer Products',
    hi: 'उपभोक्ता उत्पाद',
  },
  navProductFinder: {
    en: 'Product Matcher',
    hi: 'उत्पाद चयनकर्ता',
  },
  navStainLab: {
    en: 'Stain Laboratory',
    hi: 'दाग-धब्बा लैब',
  },
  navDistributorPortal: {
    en: 'Distributor ROI & Bihar Territory',
    hi: 'डीलरशिप व मुनाफा कैलकुलेटर',
  },
  navWashGuide: {
    en: 'How to Wash',
    hi: 'धुलाई मार्गदर्शिका',
  },
  navRdFacilities: {
    en: 'Bihar R&D & Factory',
    hi: 'बिहार आर&डी व फैक्ट्री',
  },
  navOemPartnership: {
    en: 'OEM & Dealership',
    hi: 'डीलरशिप व ओईएम',
  },
  navCareers: {
    en: 'Careers',
    hi: 'करियर',
  },
  navSearch: {
    en: 'SEARCH',
    hi: 'खोजें',
  },
  navApplyDealership: {
    en: 'BECOME A DISTRIBUTOR',
    hi: 'डीलर / वितरक बनें',
  },
  orderSampleBox: {
    en: 'Order Free Sample Box',
    hi: 'मुफ़्त सैंपल किट मंगाएं',
  },
  
  // Hero Section
  heroPill: {
    en: 'Direct From Bihar Manufacturing Plant • High Active Oxygen & Enzymes',
    hi: 'बिहार विनिर्माण इकाई से सीधे • हाई एक्टिव ऑक्सीजन एवं एन्जाइम युक्त',
  },
  heroHeadingLine1: {
    en: 'Detergent Things Industries India',
    hi: 'डिटर्जेंट थिंग्स इंडस्ट्रीज इंडिया',
  },
  heroHeadingLine2: {
    en: 'White Foam — Chamak jo khud Bole',
    hi: 'व्हाइट फोम — चमक जो खुद बोले',
  },
  heroSubtext: {
    en: 'Engineered with advanced micro-foam technology, optical brighteners, and hard-water active surfactants. Unbeatable whiteness on whites, vivid vibrancy on colours, and fabric safety in every wash.',
    hi: 'आधुनिक माइक्रो-फोम तकनीक, ऑप्टिकल ब्राइटनर्स और खारे पानी में भी कारगर एक्टिव सर्फेक्टेंट्स से निर्मित। सफेद कपड़ों में बेजोड़ सफेदी, रंगीन कपड़ों में नई चमक, और हर धुलाई में कपड़ों की सुरक्षा।',
  },
  heroCtaExplore: {
    en: 'Explore White Foam Range',
    hi: 'व्हाइट फोम उत्पाद देखें',
  },
  heroCtaDistributor: {
    en: 'Check Bihar Dealership Availability',
    hi: 'बिहार डीलरशिप उपलब्धता जांचें',
  },
  heroCtaSample: {
    en: 'Get Free Retailer Sample Kit',
    hi: 'मुफ़्त रिटेलर सैंपल किट प्राप्त करें',
  },
  
  // Distributor Section
  distributorHeading: {
    en: 'Bihar Territory Dealership & Margin Calculator',
    hi: 'बिहार जिला डीलरशिप एवं मुनाफा कैलकुलेटर',
  },
  distributorSubheading: {
    en: 'Join the fastest-growing fabric care brand in Eastern India. Calculate your monthly ROI, check district dealership availability across Bihar, and apply in 2 minutes.',
    hi: 'पूर्वी भारत के सबसे तेज़ी से बढ़ते फैब्रिक केयर ब्रांड से जुड़ें। अपना मासिक मुनाफा जांचें, बिहार के सभी 38 जिलों में डीलरशिप की उपलब्धता देखें और 2 मिनट में आवेदन करें।',
  },
  
  // Stain Lab Section
  stainLabHeading: {
    en: 'Interactive Stain Laboratory & Water Hardness Advisor',
    hi: 'इंटरएक्टिव दाग-धब्बा लैब एवं खारे पानी की धुलाई सलाह',
  },
  stainLabSubheading: {
    en: 'Slide to witness real before-and-after results on tough Indian stains. Plus, get personalized detergent dosage guidance tailored to your local borewell or tap water.',
    hi: 'कठिन भारतीय दागों पर व्हाइट फोम का बिफोर-एंड-आफ्टर असर स्वयं स्लाइड करके देखें। साथ ही अपने क्षेत्र के बोरवेल या नल के पानी के अनुसार सही डिटर्जेंट मात्रा जानें।',
  },
  
  // Eco friendly banner
  ecoFriendlyHeading: {
    en: 'Phosphate-Free • Biodegradable • Septic & Skin Safe',
    hi: 'फॉस्फेट-मुक्त • 100% बायोडिग्रेडेबल • सेप्टिक टैंक व त्वचा के लिए सुरक्षित',
  },
  ecoFriendlySubtext: {
    en: 'Safe for your hands, septic tanks, and our sacred rivers. Formulated with soothing aloe vera extracts and eco-surfactants.',
    hi: 'हाथों की कोमल त्वचा, सेप्टिक टैंक और हमारी नदियों के लिए पूर्णतः सुरक्षित। प्राकृतिक एलोवेरा और पर्यावरण-अनुकूल तत्वों से समृद्ध।',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('dt_language');
      return (saved === 'hi' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('dt_language', lang);
    } catch {
      // storage unavailable
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = (key: string, fallback?: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
