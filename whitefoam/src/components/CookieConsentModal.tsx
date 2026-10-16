import React from 'react';
import { ShieldCheck, X, Mail } from 'lucide-react';

interface CookieConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="privacy-notice-title" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-notice-title" className="font-black text-lg text-slate-900">
                Privacy Notice
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                How this website handles your information
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

        <div className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p>
            This site stores your selected language in your browser's local storage. It does not currently use analytics or advertising cookies.
          </p>
          <p>
            Career and OEM inquiry details are sent to Netlify Forms when you submit those forms on the deployed site. Dealership and sample-kit buttons open a WhatsApp draft; the message is sent only if you choose Send in WhatsApp.
          </p>
          <a
            href="mailto:contact@detergentthings.in?subject=Privacy%20question"
            className="inline-flex items-center gap-2 font-semibold text-emerald-800 hover:text-emerald-900"
          >
            <Mail className="h-4 w-4" />
            Contact us about your information
          </a>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
