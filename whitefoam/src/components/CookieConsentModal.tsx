import React, { useState } from 'react';
import { ShieldCheck, X, Check, Cookie } from 'lucide-react';

interface CookieConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: true,
    functional: true,
    advertising: false,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg text-slate-900">
                Cookie Consent & Privacy Preferences
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Detergent Things Industries India Privacy Standard
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          We use cookies and similar technologies to enhance your browsing experience, optimize machine wash diagnostics, and analyze manufacturing inquiry traffic in compliance with Indian IT and digital privacy guidelines.
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Strictly Necessary Cookies</span>
              <span className="text-[11px] text-slate-500">Required for website security and inquiry forms</span>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded">Always Active</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Performance & Wash Analytics</span>
              <span className="text-[11px] text-slate-500">Helps improve the interactive stain solver accuracy</span>
            </div>
            <input
              type="checkbox"
              checked={preferences.performance}
              onChange={(e) => setPreferences({ ...preferences, performance: e.target.checked })}
              className="w-4 h-4 accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Regional Language & Customization</span>
              <span className="text-[11px] text-slate-500">Remembers your preferred language and brand filter</span>
            </div>
            <input
              type="checkbox"
              checked={preferences.functional}
              onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
              className="w-4 h-4 accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Accept All Cookies
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
