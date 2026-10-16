import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Globe, Building } from 'lucide-react';
import { CERTIFICATIONS } from '../data/detergentData';

export const CertificationsBar: React.FC = () => {
  return (
    <section id="certifications-strip" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-1">
            GOVERNMENT & INTERNATIONAL ACCREDITATIONS
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Validated by Recognized National & Global Quality Councils
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200/80 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-bold shadow-2xs">
                    {i === 0 ? (
                      <Globe className="w-5 h-5 text-indigo-600" />
                    ) : i === 1 ? (
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Award className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    {cert.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-sm text-slate-900 tracking-tight">
                    {cert.code}
                  </h4>
                  <p className="text-xs font-semibold text-rose-600 mt-0.5">
                    {cert.issuedBy}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Audited Batch Compliance Verified</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 font-medium">
          Official compliance standards for Detergent Things Industries India and affiliate fabric care manufacturing partners.
        </div>
      </div>
    </section>
  );
};
