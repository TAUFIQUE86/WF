export interface Product {
  id: string;
  name: string;
  brand: 'White Foam';
  category: 'powder' | 'cake' | 'pod_liquid';
  washNeed: ('handwash' | 'semi_auto' | 'fully_auto')[];
  tagline: string;
  description: string;
  highlights: string[];
  specs: {
    foamLevel: 'High' | 'Medium' | 'Low (Controlled)';
    fragrance: string;
    stainAction: string;
    packSizes: string[];
  };
  featuredBadge?: string;
  dissolveSpeed: string;
}

export interface StainGuide {
  stain: string;
  category: string;
  difficulty: 'Easy' | 'Moderate' | 'Tough';
  treatmentStep: string;
  recommendedProductType: string;
  waterTemp: 'Cold' | 'Warm' | 'Lukewarm';
}

export interface Facility {
  id: string;
  name: string;
  location: string;
  role: string;
  description: string;
  equipment: string[];
  metric: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export const COMPANY_PROFILE = {
  name: 'Detergent Things Industries India',
  productName: 'White Foam',
  tagline: 'Chamak jo khud Bole',
  motto: 'Clean is our business. Integrity is our promise.',
  unitLocation: 'Unit in Bihar, India',
  corporateEmail: 'contact@detergentthings.in',
  corporatePhone: '+91 9111911111',
  story:
    'Detergent Things Industries India was established to revolutionize fabric care across the nation. Through our modern manufacturing unit in Bihar and advanced formulation labs, our flagship brand White Foam delivers unmatched stain removal, sparkling whiteness, and long-lasting fabric protection with the proud promise of "Chamak jo khud Bole".',
  highlights: [
    'Unit in Bihar with advanced automated production lines',
    'Flagship White Foam fabric care range for handwash & machines',
    'Star Export House standards, GMP certified & ISO 9001:2015 compliant',
    'Pioneering bottom-of-pyramid value without compromising cleansing power',
  ],
};

export const PRODUCTS_CATALOG: Product[] = [
  // WHITE FOAM FLAGSHIP POWDERS
  {
    id: 'white-foam-big-shot',
    name: 'White Foam BIG SHOT Detergent Powder',
    brand: 'White Foam',
    category: 'powder',
    washNeed: ['handwash', 'semi_auto', 'fully_auto'],
    tagline: 'Chamak jo khud Bole • Fast Action Technology',
    description:
      'The crown jewel of Detergent Things Industries India. Formulated at our Bihar manufacturing unit with advanced Fast Action micro-granules that dissolve quickly and completely to eradicate tough stains while keeping clothes like new.',
    highlights: [
      'FAST ACTION TECHNOLOGY for instantaneous stain lift',
      'Dissolves quickly & completely in hard and cold water',
      'Removes tough stains easily without heavy beating',
      'Gentle on hands with dermatological conditioners',
      'Clothes remain like new wash after wash',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Exotic Sweet Orchid & Lavender',
      stainAction: 'Tea, oily gravies, ink, school mud, collar grime',
      packSizes: ['500g', '1kg', '3kg', '5kg with free bucket'],
    },
    featuredBadge: 'Fast Action Flagship',
    dissolveSpeed: 'Dissolves in 1.8 seconds (0 residue)',
  },
  {
    id: 'white-foam-active',
    name: 'White Foam Active Detergent Powder',
    brand: 'White Foam',
    category: 'powder',
    washNeed: ['handwash', 'semi_auto'],
    tagline: 'Iconic Active Foam & Cleansing Action',
    description:
      'Revolutionized the detergent market by providing low-cost, budget-friendly power without compromising on deep cleansing efficacy. A household staple produced at our Bihar unit.',
    highlights: [
      'Value-for-money champion for every Indian home',
      'Active blue speckles generating rich dense suds',
      'High dirt lifting suspension power',
      'Gentle on cottons and daily synthetic blends',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Fresh Floral Breeze',
      stainAction: 'Deep mud, sweat, and surface dust',
      packSizes: ['500g', '1kg', '3kg', '5kg'],
    },
    featuredBadge: 'Household Classic',
    dissolveSpeed: 'Instant in normal water',
  },
  {
    id: 'white-foam-advance',
    name: 'White Foam Advance Detergent Powder',
    brand: 'White Foam',
    category: 'powder',
    washNeed: ['handwash', 'semi_auto', 'fully_auto'],
    tagline: 'Chamak jo khud Bole • Sparkling Whites & Color Shield',
    description:
      'Specially engineered with optical brightness boosters that keep white garments dazzling and colored fabrics vibrant wash after wash.',
    highlights: [
      'Optical brightening agents for supreme shine',
      'Quick-dissolving micro-granules',
      'Preserves thread integrity and seam strength',
      'Zero chalky deposit on dark fabrics',
    ],
    specs: {
      foamLevel: 'Medium',
      fragrance: 'Crisp Aqua Fresh',
      stainAction: 'Collar grime, grease, food spills, yellowing',
      packSizes: ['500g', '1kg', '2kg', '4kg'],
    },
    featuredBadge: 'Advance Formula',
    dissolveSpeed: 'Ultra-fast soluble',
  },
  {
    id: 'white-foam-lime-fresh',
    name: 'White Foam Lime Fresh Detergent Powder',
    brand: 'White Foam',
    category: 'powder',
    washNeed: ['handwash', 'semi_auto'],
    tagline: 'Citrus Boosted Grease & Odour Elimination',
    description:
      'Natural lime extract-infused detergent powder that cuts through persistent kitchen odours, oily residues, and stubborn outdoor stains with ease.',
    highlights: [
      'Infused with fresh citrus lemon extract',
      'Deodorizes tough sweat and humidity odours',
      'Refreshing lime scent lingers for days',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Lime & Lemon Burst',
      stainAction: 'Kitchen grease, perspiration & yellowing',
      packSizes: ['500g', '1kg', '3kg'],
    },
    dissolveSpeed: 'Fast dissolving',
  },
  {
    id: 'white-foam-double-power',
    name: 'White Foam Double Power (Jasmine & Rose)',
    brand: 'White Foam',
    category: 'powder',
    washNeed: ['handwash', 'semi_auto'],
    tagline: 'Tough Stains Out. Stainless Whites In.',
    description:
      'Delivers an outstanding clean with stain magnets that trap and flush dirt in half the wash time without dulling bright colors. Confidence in every scoop.',
    highlights: [
      'Double power stain magnet technology',
      'Jasmine & Rose premium botanical fragrance',
      'Superior stainless whites in every wash',
      'Chamak jo khud Bole promise',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Jasmine & Rose Blossoms',
      stainAction: 'Tea, coffee, chocolate, clay mud, curry',
      packSizes: ['500g', '1kg', '2kg', '5kg Jar'],
    },
    featuredBadge: 'Double Power Tech',
    dissolveSpeed: '100% instant solubility',
  },

  // WHITE FOAM CAKES & SOLID BARS
  {
    id: 'white-foam-clean-bar',
    name: 'White Foam Clean Bar Cake',
    brand: 'White Foam',
    category: 'cake',
    washNeed: ['handwash'],
    tagline: 'Classic Household Hand-Wash Staple (Legacy 2024)',
    description:
      'Crafted by Detergent Things Industries India with long-lasting density, effective direct spot cleaning, and zero wastage for collars, cuffs, and everyday clothes.',
    highlights: [
      'High-density solid bar with long-lasting formula',
      'Targeted direct spot scrub for collar & cuff grime',
      'Smooth glide that cleans without dissolving into mush',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Signature White Foam Freshness',
      stainAction: 'Targeted collar scrub, ink, mud edges',
      packSizes: ['125g', '250g', 'Multipack (Buy 3 Get 1 Free)'],
    },
    featuredBadge: 'Staple Bar',
    dissolveSpeed: 'Slow melt bar with high lather',
  },
  {
    id: 'white-foam-shakti-cake',
    name: 'White Foam Shakti Detergent Cake',
    brand: 'White Foam',
    category: 'cake',
    washNeed: ['handwash'],
    tagline: 'Extra Power for Heavy-Duty Wash',
    description:
      'Formulated for tough fabric scrubbing like workwear, denims, school uniforms, and heavily soiled cotton bed linens in hard water conditions.',
    highlights: [
      'Heavy-duty scrub density for thick fabrics',
      'High active matter formulation',
      'Resistant to hard water mineral dampening',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Power Clean Fresh',
      stainAction: 'Dry mud, machine grease, grass marks',
      packSizes: ['200g', '250g'],
    },
    dissolveSpeed: 'Durable solid bar',
  },
  {
    id: 'white-foam-pink-cake',
    name: 'White Foam Pink Detergent Cake',
    brand: 'White Foam',
    category: 'cake',
    washNeed: ['handwash'],
    tagline: 'Gentle on Fabrics & Hands with Rose Notes',
    description:
      'Delicate pink formulation offering a smooth glide over hand-washed garments while preserving fabric softness and soothing hands.',
    highlights: [
      'Smooth hand feel without harsh peeling',
      'Gentle floral rose aroma',
      'Maintains fabric thread integrity',
    ],
    specs: {
      foamLevel: 'Medium',
      fragrance: 'Sweet Rose Essence',
      stainAction: 'Food gravy, cosmetic stains, tea marks',
      packSizes: ['150g', '250g'],
    },
    dissolveSpeed: 'Smooth glide lather',
  },
  {
    id: 'white-foam-green-cake',
    name: 'White Foam Green Herbal Cake',
    brand: 'White Foam',
    category: 'cake',
    washNeed: ['handwash'],
    tagline: 'Neem & Herbal Infused Natural Cleansing',
    description:
      'Enriched with herbal purification extracts to keep daily clothes sanitized, hygienic, and free of damp monsoon odours.',
    highlights: [
      'Herbal hygiene properties with neem extracts',
      'Neutralizes stubborn sweat odour',
      'Economical everyday laundry bar',
    ],
    specs: {
      foamLevel: 'High',
      fragrance: 'Herbal Clean',
      stainAction: 'Body sweat, soil, dust',
      packSizes: ['200g', '4-pack bundle'],
    },
    dissolveSpeed: 'Long-lasting bar',
  },
  {
    id: 'white-foam-bartan-bar',
    name: 'White Foam Bartan Dishwash Bar',
    brand: 'White Foam',
    category: 'cake',
    washNeed: ['handwash'],
    tagline: 'Lime Dishwash Scouring Bar',
    description:
      'Grease-cutting concentrated lemon power manufactured by Detergent Things Industries India for all utensils, cookware, and kitchen cloths.',
    highlights: [
      'Zero white chalky residue on drying',
      'Tough on burnt curry and oil grease',
      'Enriched with active lime degreasers',
    ],
    specs: {
      foamLevel: 'Medium',
      fragrance: 'Concentrated Lime',
      stainAction: 'Cookware grease, burnt food, oily kitchen towels',
      packSizes: ['150g', '300g tub & bar'],
    },
    dissolveSpeed: 'Water-resistant solid formulation',
  },

  // WHITE FOAM AUTOMATIC MACHINE MATIC & PODS
  {
    id: 'white-foam-matic-front-load',
    name: 'White Foam Matic Liquid & Powder Front Load',
    brand: 'White Foam',
    category: 'pod_liquid',
    washNeed: ['fully_auto'],
    tagline: 'Low Foam, High Enzyme Performance for Front Loaders',
    description:
      'Designed exclusively for front loading automated washing machines with controlled suds that protect motor sensors while delivering clinical cleanliness.',
    highlights: [
      'Controlled low-suds formulation protects machine pump',
      '3x concentrated multi-enzyme stain lifters',
      'Protects drum from limescale and detergent deposits',
    ],
    specs: {
      foamLevel: 'Low (Controlled)',
      fragrance: 'European Fresh Alpine',
      stainAction: 'Microscopic bacteria, sauces, grease, collar oil',
      packSizes: ['1 Litre', '2 Litre', '1kg Matic Powder'],
    },
    featuredBadge: 'Machine Specialist',
    dissolveSpeed: 'Zero-residue liquid dispersion',
  },
  {
    id: 'white-foam-pods-4in1',
    name: 'White Foam PODS 4-in-1 Laundry Capsules',
    brand: 'White Foam',
    category: 'pod_liquid',
    washNeed: ['semi_auto', 'fully_auto'],
    tagline: 'Detergent + Stain Remover + Brightener + Fabric Protect',
    description:
      'Pre-measured dissolvable PVA film capsule combining 4 distinct liquid compartments for the ultimate effortless laundry cycle.',
    highlights: [
      'Pre-dosed convenience: no spills, zero wastage',
      'Cold water dissolvable chamber shell under 60 seconds',
      '4-in-1 stain removal and fiber protection system',
    ],
    specs: {
      foamLevel: 'Medium',
      fragrance: 'White Foam Signature Scent',
      stainAction: 'Set-in 7-day stains, grass, gravy, curry',
      packSizes: ['16 count tub', '32 count tub'],
    },
    featuredBadge: 'Next-Gen Convenience',
    dissolveSpeed: '100% film dissolution under 60 seconds',
  },
];

export const STAIN_REMOVAL_GUIDE: StainGuide[] = [
  {
    stain: 'Tea / Chai & Coffee',
    category: 'Beverage & Tannins',
    difficulty: 'Moderate',
    treatmentStep:
      'Rinse immediately under running cold water from the backside of the fabric. Rub with White Foam BIG SHOT paste or White Foam Double Power, let sit for 5 minutes, then wash normally.',
    recommendedProductType: 'White Foam BIG SHOT / Double Power',
    waterTemp: 'Cold',
  },
  {
    stain: 'School Mud & Clay Soil',
    category: 'Particulate Dirt',
    difficulty: 'Easy',
    treatmentStep:
      'Allow mud to dry completely and gently brush off excess crust. Pre-soak in warm water with White Foam Active Powder for 20 minutes before wash cycle.',
    recommendedProductType: 'White Foam Active Detergent Powder',
    waterTemp: 'Warm',
  },
  {
    stain: 'Cooking Oil, Ghee & Gravy',
    category: 'Grease & Lipids',
    difficulty: 'Tough',
    treatmentStep:
      'Directly stroke the stained patch using White Foam Clean Bar or White Foam Shakti Cake. The concentrated fatty acids emulsify oil rapidly before laundering.',
    recommendedProductType: 'White Foam Clean Bar Cake / Shakti Cake',
    waterTemp: 'Warm',
  },
  {
    stain: 'Ballpoint Pen & Sketch Ink',
    category: 'Pigments & Solvents',
    difficulty: 'Tough',
    treatmentStep:
      'Dab gently with lemon juice or rubbing alcohol. Apply White Foam Matic Liquid or White Foam BIG SHOT paste directly on the stain. Do not heat dry until mark is gone.',
    recommendedProductType: 'White Foam Matic Liquid / BIG SHOT',
    waterTemp: 'Cold',
  },
  {
    stain: 'Collar & Cuff Body Grime',
    category: 'Sebum & Perspiration',
    difficulty: 'Moderate',
    treatmentStep:
      'Pre-treat collars with a damp White Foam Pink or Shakti Cake scrub for 30 seconds before tossing into machine or bucket wash.',
    recommendedProductType: 'White Foam Cake + White Foam Advance',
    waterTemp: 'Lukewarm',
  },
  {
    stain: 'Chocolate & Ice Cream',
    category: 'Protein & Dairy',
    difficulty: 'Moderate',
    treatmentStep:
      'Scrape solid residue with a blunt edge. Soak in cold water with enzymatic detergent like White Foam PODS 4-in-1 or White Foam BIG SHOT to break down dairy proteins.',
    recommendedProductType: 'White Foam PODS 4-in-1 / BIG SHOT',
    waterTemp: 'Cold',
  },
];

export const RND_FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    name: 'Advanced Analytical & Quality Assurance Labs',
    location: 'Unit in Bihar, India',
    role: 'Chemical Purity & Active Matter Verification',
    description:
      'Equipped with High-Performance Liquid Chromatography (HPLC), titrators, and spectrophotometers to test every White Foam batch for active detergent matter (ADM) and pH neutrality.',
    equipment: ['HPLC Chromatographs', 'Automatic Titrators', 'Moisture Analyzers', 'Optical Whiteness Meters'],
    metric: '99.98% Batch Consistency Score',
  },
  {
    id: 'fac-2',
    name: 'High-Velocity Counter-Current Spray-Drying Tower',
    location: 'Detergent Things Industries India - Bihar Plant',
    role: 'Uniform Hollow Micro-Granule Production',
    description:
      'Towering over 45 meters, this facility atomizes surfactant slurry into uniform, rapidly soluble hollow beads that dissolve completely in seconds even in cold water.',
    equipment: ['45m Spray Drying Tower', 'High-Pressure Atomizers', 'Cyclone Dust Collectors', 'Fluid Bed Coolers'],
    metric: '350,000 MT Annual Capacity',
  },
  {
    id: 'fac-3',
    name: 'Enzymatic Stain Release Formulation Wing',
    location: 'R&D Innovation Centre, Bihar Unit',
    role: 'Protease, Amylase & Lipase Multi-Enzyme Synthesis',
    description:
      'Biochemists optimize eco-friendly bio-enzymes that target organic stains at ambient room temperatures, drastically reducing consumer hot-water heating energy.',
    equipment: ['Bio-Fermenters', 'Incubation Shakers', 'Launder-Ometer Stain Testing Rig'],
    metric: '6 Targeted Bio-Enzymes Developed',
  },
  {
    id: 'fac-4',
    name: 'High-Speed Automated Packaging & Bar Extrusion',
    location: 'Bihar Automated Packaging Lines',
    role: 'Form-Fill-Seal & Vacuum Soap Extrusion',
    description:
      'Ultra-fast packaging line operating at 180 packs per minute with automated check-weighing and leak detection for pouches, tubs, and long-lasting cakes.',
    equipment: ['Multi-Track VFFS Machines', 'Vacuum Duplex Plodders', 'Automatic Stamping Machines', 'Robotic Palletizers'],
    metric: '180 Packs / Min Line Speed',
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Chemical Formulation Chemist',
    department: 'R&D Innovation',
    location: 'Unit in Bihar, India',
    type: 'Full-time',
    experience: '4 - 7 Years',
    description:
      'Lead formulation optimization for White Foam fast-dissolving detergent powders, surfactant balance, and eco-certified green cleaning agents.',
  },
  {
    id: 'job-2',
    title: 'Plant Operations Manager (Spray Drying)',
    department: 'Manufacturing',
    location: 'Bihar Manufacturing Plant',
    type: 'Full-time',
    experience: '8+ Years',
    description:
      'Oversee day-to-day operations of continuous spray drying towers, slurry preparation, energy optimization, and GMP compliance for Detergent Things Industries India.',
  },
  {
    id: 'job-3',
    title: 'Quality Assurance & Regulatory Compliance Specialist',
    department: 'Quality & Regulatory',
    location: 'Unit in Bihar',
    type: 'Full-time',
    experience: '3 - 6 Years',
    description:
      'Audit production runs for ISO 9001:2015 and Star Export House standards, handling raw material testing and BIS benchmarks.',
  },
  {
    id: 'job-4',
    title: 'B2B Private Label & OEM Business Development Manager',
    department: 'Sales & Corporate Partnerships',
    location: 'Bihar HQ / Regional',
    type: 'Full-time',
    experience: '5+ Years',
    description:
      'Drive contract manufacturing partnerships with international retailers, private brand labels, and institutional buyers.',
  },
];

export const CERTIFICATIONS = [
  {
    code: 'STAR EXPORT HOUSE',
    issuedBy: 'Recognized by Government of India',
    desc: 'Certified high-volume export prowess supplying White Foam fabric care solutions across domestic and global markets.',
    badge: 'Govt. Verified',
  },
  {
    code: 'GMP - GOOD MANUFACTURING PRACTICE',
    issuedBy: 'Quality Certification Council',
    desc: 'Stringent sanitation, traceable ingredient sourcing, dust control, and standard operating procedures across our Bihar unit.',
    badge: 'GMP Standard',
  },
  {
    code: 'ISO 9001:2015',
    issuedBy: 'International Organization for Standardization',
    desc: 'Standardized quality management systems governing White Foam formulation consistency, client audits, and continuous R&D.',
    badge: 'ISO Certified',
  },
];
