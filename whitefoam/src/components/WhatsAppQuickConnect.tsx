import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Building2, Gift, Truck, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppQuickConnect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [district, setDistrict] = useState('');
  const [name, setName] = useState('');
  const [selectedIntent, setSelectedIntent] = useState<'dealership' | 'sample' | 'bulk' | 'general'>('dealership');
  const { language } = useLanguage();

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let message = '';

    if (selectedIntent === 'dealership') {
      message = `Hello Detergent Things Industries India! I want dealership details for White Foam in District: ${district || 'Bihar'}. My name is ${name || 'Trader'}.`;
    } else if (selectedIntent === 'sample') {
      message = `Hello! I would like to request a free White Foam Sample Kit for my store in ${district || 'Bihar'}. My name is ${name || 'Shopkeeper'}.`;
    } else if (selectedIntent === 'bulk') {
      message = `Hello Detergent Things Industries India! Please send me the wholesale factory price list for White Foam Detergent Powders & Cakes.`;
    } else {
      message = `Hello! I want more information about Detergent Things Industries India and White Foam products.`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919111911111?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-950/20 transition-all hover:scale-105 cursor-pointer ring-4 ring-emerald-500/20"
          aria-label="Connect on WhatsApp"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping"></span>
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span className="tracking-wide">
            {language === 'hi' ? 'व्हाट्सएप सहायता' : 'WhatsApp Connect'}
          </span>
        </button>
      </div>

      {/* Pop-up Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-5 text-slate-900 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                  Detergent Things Industries
                </h4>
                <p className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Factory Sales Desk • Active ex-Bihar Unit
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleLaunchWhatsApp} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {language === 'hi' ? 'आप क्या जानना चाहते हैं?' : 'How can our Bihar team help you?'}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'dealership', label: 'Distributorship', icon: Building2 },
                  { id: 'sample', label: 'Free Sample Box', icon: Gift },
                  { id: 'bulk', label: 'Wholesale Price', icon: Truck },
                  { id: 'general', label: 'Factory Contact', icon: HelpCircle },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setSelectedIntent(item.id as any)}
                    className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      selectedIntent === item.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'आपका ज़िला (बिहार):' : 'Your District (Bihar / India):'}
              </label>
              <input
                type="text"
                placeholder="e.g. Patna, Gaya, Muzaffarpur, Darbhanga..."
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                {language === 'hi' ? 'आपका नाम / फर्म का नाम:' : 'Your Name / Shop Name:'}
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma / Sharma Traders"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'व्हाट्सएप चैट शुरू करें' : 'Start WhatsApp Chat'}</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
