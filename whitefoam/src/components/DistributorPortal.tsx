import React, { useState } from 'react';
import {
  TrendingUp,
  MapPin,
  Package,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Truck,
  Building2,
  Phone,
  FileText,
  BadgeCheck,
  Search,
  Check,
  Send,
  X,
  Gift,
  IndianRupee,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_PROFILE } from '../data/detergentData';

interface DistrictInfo {
  name: string;
  nameHi: string;
  tier: 'Major City' | 'Regional Hub' | 'Industrial / Agri Belt';
  status: 'Available' | 'Fast-Track' | 'Under Review';
  slots: number;
}

const BIHAR_DISTRICTS: DistrictInfo[] = [
  { name: 'Patna', nameHi: 'पटना', tier: 'Major City', status: 'Fast-Track', slots: 3 },
  { name: 'Gaya', nameHi: 'गया', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Bhagalpur', nameHi: 'भागलपुर', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Muzaffarpur', nameHi: 'मुजफ्फरपुर', tier: 'Major City', status: 'Fast-Track', slots: 2 },
  { name: 'Darbhanga', nameHi: 'दरभंगा', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Purnia', nameHi: 'पूर्णिया', tier: 'Regional Hub', status: 'Available', slots: 3 },
  { name: 'Begusarai', nameHi: 'बेगूसराय', tier: 'Industrial / Agri Belt', status: 'Fast-Track', slots: 1 },
  { name: 'Samastipur', nameHi: 'समस्तीपुर', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Nalanda / Bihar Sharif', nameHi: 'नालंदा / बिहार शरीफ', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Saran / Chhapra', nameHi: 'सारण / छपरा', tier: 'Regional Hub', status: 'Fast-Track', slots: 1 },
  { name: 'Vaishali / Hajipur', nameHi: 'वैशाली / हाजीपुर', tier: 'Industrial / Agri Belt', status: 'Under Review', slots: 1 },
  { name: 'Rohtas / Sasaram', nameHi: 'रोहतास / सासाराम', tier: 'Industrial / Agri Belt', status: 'Available', slots: 2 },
  { name: 'East Champaran / Motihari', nameHi: 'पूर्वी चंपारण / मोतिहारी', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'West Champaran / Bettiah', nameHi: 'पश्चिम चंपारण / बेतिया', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Saharsa', nameHi: 'सहरसा', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Madhubani', nameHi: 'मधुबनी', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Siwan', nameHi: 'सीवान', tier: 'Regional Hub', status: 'Fast-Track', slots: 1 },
  { name: 'Gopalganj', nameHi: 'गोपालगंज', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Katihar', nameHi: 'कटिहार', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Munger', nameHi: 'मुंगेर', tier: 'Industrial / Agri Belt', status: 'Available', slots: 1 },
  { name: 'Sitamarhi', nameHi: 'सीतामढ़ी', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Bhojpur / Ara', nameHi: 'भोजपुर / आरा', tier: 'Regional Hub', status: 'Fast-Track', slots: 1 },
  { name: 'Buxar', nameHi: 'बक्सर', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Nawada', nameHi: 'नवादा', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Jamui', nameHi: 'जमुई', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Kishanganj', nameHi: 'किशनगंज', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Araria', nameHi: 'अररिया', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Supaul', nameHi: 'सुपौल', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Khagaria', nameHi: 'खगड़िया', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Banka', nameHi: 'बांका', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Madhepura', nameHi: 'मधेपुरा', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Lakhisarai', nameHi: 'लखीसराय', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Sheikhpura', nameHi: 'शेखपुरा', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Kaimur / Bhabua', nameHi: 'कैमूर / भभुआ', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Aurangabad', nameHi: 'औरंगाबाद', tier: 'Regional Hub', status: 'Available', slots: 2 },
  { name: 'Jehanabad', nameHi: 'जहानाबाद', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Arwal', nameHi: 'अरवल', tier: 'Regional Hub', status: 'Available', slots: 1 },
  { name: 'Sheohar', nameHi: 'शिवहर', tier: 'Regional Hub', status: 'Available', slots: 1 },
];

export const DistributorPortal: React.FC = () => {
  const { language, t } = useLanguage();

  // Investment Calculator State
  const [investmentAmount, setInvestmentAmount] = useState<number>(150000);
  const [partnerTier, setPartnerTier] = useState<'retail' | 'distributor' | 'super'>('distributor');

  // District Search & Filter State
  const [districtQuery, setDistrictQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Available' | 'Fast-Track'>('all');

  // Modals
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedDistrictForApply, setSelectedDistrictForApply] = useState('');
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantFirm, setApplicantFirm] = useState('');
  const [applicantTown, setApplicantTown] = useState('');
  const [applicantDistrict, setApplicantDistrict] = useState('Patna');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Sample form state
  const [sampleName, setSampleName] = useState('');
  const [samplePhone, setSamplePhone] = useState('');
  const [sampleAddress, setSampleAddress] = useState('');
  const [sampleSubmitted, setSampleSubmitted] = useState(false);

  // Calculations based on investment
  const calculateMetrics = (amount: number, tier: 'retail' | 'distributor' | 'super') => {
    let marginPct = 16;
    if (tier === 'retail') marginPct = 18;
    else if (tier === 'distributor') marginPct = 21;
    else marginPct = 24;

    const monthlyTurnover = Math.round(amount * 1.35);
    const grossProfit = Math.round((monthlyTurnover * marginPct) / 100);
    const netReturn = Math.round(grossProfit * 0.78);
    const estimatedCartons = Math.round(amount / 850);

    return {
      marginPct,
      monthlyTurnover,
      grossProfit,
      netReturn,
      estimatedCartons,
    };
  };

  const metrics = calculateMetrics(investmentAmount, partnerTier);

  // Filtered districts
  const filteredDistricts = BIHAR_DISTRICTS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(districtQuery.toLowerCase()) ||
      d.nameHi.includes(districtQuery);
    const matchesStatus = statusFilter === 'all' || d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenApplyModal = (districtName?: string) => {
    if (districtName) {
      setSelectedDistrictForApply(districtName);
      setApplicantDistrict(districtName);
    }
    setIsApplyModalOpen(true);
    setSubmittedMessage(false);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    // WhatsApp quick direct send
    const text = encodeURIComponent(
      `*Dealership Application - Detergent Things Industries India*\n` +
      `Product: White Foam ("Chamak jo khud Bole")\n` +
      `Name: ${applicantName}\n` +
      `Firm: ${applicantFirm}\n` +
      `Phone: ${applicantPhone}\n` +
      `District: ${applicantDistrict} (${applicantTown})\n` +
      `Investment Capacity: ₹${investmentAmount.toLocaleString('en-IN')}\n` +
      `Preferred Tier: ${partnerTier.toUpperCase()}`
    );
    window.open(`https://wa.me/919111911111?text=${text}`, '_blank');
  };

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSubmitted(true);
    const text = encodeURIComponent(
      `*Free White Foam Sample Kit Request*\n` +
      `Brand: White Foam (Detergent Things Industries India - Unit in Bihar)\n` +
      `Shop / Trader Name: ${sampleName}\n` +
      `Phone: ${samplePhone}\n` +
      `Store Address: ${sampleAddress}`
    );
    window.open(`https://wa.me/919111911111?text=${text}`, '_blank');
  };

  return (
    <section id="distributor-portal" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'hi' ? 'बिहार में डीलरशिप अवसर' : 'Bihar Dealership & Expansion'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            {t('distributorHeading')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            {t('distributorSubheading')}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenApplyModal()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-lg shadow-rose-900/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {language === 'hi' ? 'डीलरशिप के लिए सीधा आवेदन' : 'Apply for District Dealership'}
            </button>
            <button
              onClick={() => setIsSampleModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-amber-400" />
              {language === 'hi' ? 'मुफ़्त सैंपल किट मंगाएं' : 'Request Free Sample Kit'}
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Left Calculator, Right Bihar Territory Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Distributor Margin Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {language === 'hi' ? 'व्हाइट फोम मुनाफा व आरओआई कैलकुलेटर' : 'White Foam Distributor Margin & ROI'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'hi' ? 'सटीक गणना • प्रत्यक्ष बिहार फैक्ट्री दरें' : 'Realistic Returns • Direct ex-Bihar Factory Rates'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                16% - 24% Gross Margins
              </span>
            </div>

            {/* Tier Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {language === 'hi' ? 'पार्टनरशिप स्तर चुनें:' : 'Select Partnership Tier:'}
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'retail',
                    label: language === 'hi' ? 'किराना / रिटेल' : 'Retail Partner',
                    range: '25K - 50K',
                    min: 25000,
                  },
                  {
                    id: 'distributor',
                    label: language === 'hi' ? 'शहर वितरक' : 'Town Distributor',
                    range: '1L - 3L',
                    min: 150000,
                  },
                  {
                    id: 'super',
                    label: language === 'hi' ? 'सुपर स्टॉकिस्ट' : 'Super Stockist',
                    range: '5L - 10L+',
                    min: 500000,
                  },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setPartnerTier(tier.id as any);
                      setInvestmentAmount(tier.min);
                    }}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      partnerTier === tier.id
                        ? 'bg-rose-600/20 border-rose-500 text-white shadow-xs'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-xs font-black truncate">{tier.label}</div>
                    <div className="text-[11px] text-amber-400 font-bold mt-0.5 flex items-center">
                      <IndianRupee className="w-3 h-3 stroke-[2.5] inline-block mr-0.5" />
                      <span>{tier.range}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Investment Slider */}
            <div className="mb-8 bg-slate-900 p-5 rounded-xl border border-slate-750">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  {language === 'hi' ? 'प्रारंभिक निवेश राशि:' : 'Initial Stock Investment:'}
                </span>
                <span className="text-2xl font-black text-rose-400 flex items-center">
                  <IndianRupee className="w-5 h-5 stroke-[2.5] mr-1" />
                  <span>{investmentAmount.toLocaleString('en-IN')}</span>
                </span>
              </div>
              <input
                type="range"
                min={partnerTier === 'retail' ? 20000 : partnerTier === 'distributor' ? 100000 : 400000}
                max={partnerTier === 'retail' ? 100000 : partnerTier === 'distributor' ? 500000 : 1500000}
                step={5000}
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300 mt-2 font-medium">
                <span className="flex items-center">
                  Min: <IndianRupee className="w-3 h-3 inline-block mx-0.5" />
                  {(partnerTier === 'retail' ? 20000 : partnerTier === 'distributor' ? 100000 : 400000).toLocaleString('en-IN')}
                </span>
                <span className="flex items-center">
                  Max: <IndianRupee className="w-3 h-3 inline-block mx-0.5" />
                  {(partnerTier === 'retail' ? 100000 : partnerTier === 'distributor' ? 500000 : 1500000).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">
                  {language === 'hi' ? 'अनुमानित बिक्री (मासिक)' : 'Monthly Turnover'}
                </div>
                <div className="text-lg font-black text-white mt-1 flex items-center">
                  <IndianRupee className="w-4 h-4 stroke-[2.5] mr-0.5" />
                  <span>{metrics.monthlyTurnover.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">~1.35x stock rotation</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">
                  {language === 'hi' ? 'सकल मार्जिन %' : 'Gross Margin %'}
                </div>
                <div className="text-lg font-black text-emerald-400 mt-1">
                  {metrics.marginPct}%
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Industry leading</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">
                  {language === 'hi' ? 'मासिक शुद्ध आय' : 'Net Monthly Profit'}
                </div>
                <div className="text-lg font-black text-amber-400 mt-1 flex items-center">
                  <IndianRupee className="w-4 h-4 stroke-[2.5] mr-0.5" />
                  <span>{metrics.netReturn.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-[10px] text-amber-400 mt-0.5">Estimated take-home</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 font-medium">
                  {language === 'hi' ? 'कुल कार्टन (डिस्पैच)' : 'Dispatch Cartons'}
                </div>
                <div className="text-lg font-black text-cyan-400 mt-1">
                  ~{metrics.estimatedCartons}
                </div>
                <div className="text-[10px] text-cyan-400 mt-0.5">Mixed SKU packing</div>
              </div>
            </div>

            {/* Free Brand Support Included */}
            <div className="bg-rose-950/30 border border-rose-900/50 rounded-xl p-4 mb-6">
              <div className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-rose-400" />
                {language === 'hi' ? 'हर नए वितरक को कंपनी द्वारा निःशुल्क सहायता:' : 'Free Factory Marketing Support Included:'}
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free Shop Glow-sign Board & Banners</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>50+ Counter Hanging Danglers & Posters</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>4 White Foam Branded Sales Polo T-Shirts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>24-48 hr direct truck dispatch ex-Bihar</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>GST Compliant Billing • Complete Area Exclusivity Agreement</span>
              </div>
              <button
                onClick={() => handleOpenApplyModal()}
                className="px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'hi' ? 'इस स्तर पर आवेदन करें' : 'Lock My Tier & Apply'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT: Bihar 38 Districts Live Territory Checker (5 cols) */}
          <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col h-full">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-500" />
                <div>
                  <h3 className="text-base font-bold text-white">
                    {language === 'hi' ? 'बिहार 38 ज़िला डीलरशिप ट्रैकर' : 'Bihar 38 Districts Territory Tracker'}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {language === 'hi' ? 'अपने जिले में वितरक स्लॉट देखें' : 'Check open distributor slots in your district'}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {filteredDistricts.length} / 38
              </span>
            </div>

            {/* Search and Filters */}
            <div className="space-y-2 mb-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder={language === 'hi' ? 'ज़िला खोजें (उदा. पटना, गया, भागलपुर)...' : 'Search district (e.g. Patna, Gaya, Purnia)...'}
                  value={districtQuery}
                  onChange={(e) => setDistrictQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-500"
                />
              </div>

              <div className="flex items-center gap-1.5 text-[11px]">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    statusFilter === 'all'
                      ? 'bg-slate-700 text-white'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  All (38)
                </button>
                <button
                  onClick={() => setStatusFilter('Available')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    statusFilter === 'Available'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900/60 text-emerald-400 hover:text-white'
                  }`}
                >
                  Available
                </button>
                <button
                  onClick={() => setStatusFilter('Fast-Track')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                    statusFilter === 'Fast-Track'
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-900/60 text-amber-400 hover:text-white'
                  }`}
                >
                  Fast-Track
                </button>
              </div>
            </div>

            {/* Scrollable District List */}
            <div className="overflow-y-auto max-h-[380px] space-y-2 pr-1 custom-scrollbar">
              {filteredDistricts.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  No districts matching "{districtQuery}". Try searching another name.
                </div>
              ) : (
                filteredDistricts.map((d) => (
                  <div
                    key={d.name}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-rose-500/60 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white group-hover:text-rose-400 transition-colors">
                          {language === 'hi' ? d.nameHi : d.name}
                        </span>
                        <span className="text-[11px] text-slate-300 font-medium px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                          {d.tier}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-1">
                        <span>{language === 'hi' ? d.name : 'Bihar District'}</span>
                        <span>•</span>
                        <span className="text-cyan-400 font-bold">{d.slots} slot{d.slots > 1 ? 's' : ''} left</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          d.status === 'Available'
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            : d.status === 'Fast-Track'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}
                      >
                        {d.status}
                      </span>
                      <button
                        onClick={() => handleOpenApplyModal(d.name)}
                        className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer"
                        title={`Apply for ${d.name} Dealership`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom note */}
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                Unit in Bihar, India
              </span>
              <button
                onClick={() => handleOpenApplyModal()}
                className="text-rose-400 hover:text-rose-300 font-bold underline cursor-pointer"
              >
                Apply for Other States
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL 1: Dealership Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  {language === 'hi' ? 'व्हाइट फोम डीलरशिप आवेदन' : 'White Foam Dealership Application'}
                </h3>
                <p className="text-xs text-slate-400">
                  Detergent Things Industries India • Unit in Bihar
                </p>
              </div>
            </div>

            {submittedMessage ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Application Received & Dispatched!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Our Bihar Regional Sales Manager will call you within 2 hours. A WhatsApp confirmation chat has also been opened with your details.
                </p>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="mt-4 px-6 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name / आपका नाम *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Business / Firm Name
                    </label>
                    <input
                      type="text"
                      value={applicantFirm}
                      onChange={(e) => setApplicantFirm(e.target.value)}
                      placeholder="e.g. Kumar Traders"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Target District / ज़िला *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantDistrict}
                      onChange={(e) => setApplicantDistrict(e.target.value)}
                      placeholder="e.g. Patna, Gaya, Bhagalpur"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Town / Tehsil / Area
                    </label>
                    <input
                      type="text"
                      value={applicantTown}
                      onChange={(e) => setApplicantTown(e.target.value)}
                      placeholder="e.g. Danapur, Barh"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 text-xs flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Selected Investment Capacity:</span>
                  <span className="font-bold text-rose-400 font-mono">
                    ₹{investmentAmount.toLocaleString('en-IN')} ({partnerTier.toUpperCase()})
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 font-bold text-sm text-white shadow-lg shadow-rose-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: Free Sample Box Modal */}
      {isSampleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setIsSampleModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  {language === 'hi' ? 'मुफ़्त व्हाइट फोम सैंपल किट' : 'Free Retailer Sample Kit'}
                </h3>
                <p className="text-xs text-slate-400">
                  Direct dispatch from Bihar manufacturing facility
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-4 text-xs text-amber-200">
              <span className="font-bold">What is inside the Sample Kit?</span>
              <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-300">
                <li>1x White Foam BIG SHOT Detergent (500g pouch)</li>
                <li>1x White Foam Active Detergent Powder (200g trial)</li>
                <li>1x White Foam Clean Bar Cake (250g)</li>
                <li>Wholesale Dealership Price Chart & Product Brochure</li>
              </ul>
            </div>

            {sampleSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Sample Kit Request Queued!</h4>
                <p className="text-xs text-slate-300">
                  Your sample box will be packed at our Bihar facility and dispatched via Speed Post / DTDC.
                </p>
                <button
                  onClick={() => setIsSampleModalOpen(false)}
                  className="px-5 py-2 rounded-lg bg-slate-800 text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSampleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Store / Trader Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={sampleName}
                    onChange={(e) => setSampleName(e.target.value)}
                    placeholder="e.g. Laxmi General Store"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={samplePhone}
                    onChange={(e) => setSamplePhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Delivery Address with PIN code *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={sampleAddress}
                    onChange={(e) => setSampleAddress(e.target.value)}
                    placeholder="Shop No., Market / Road, District, Bihar - PIN"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 font-bold text-xs text-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <Gift className="w-4 h-4" />
                  <span>Dispatch Free Sample to My Store</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
