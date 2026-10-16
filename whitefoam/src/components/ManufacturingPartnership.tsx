import React, { useEffect, useState } from 'react';
import {
  Factory,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  Building2,
  ShieldCheck,
  ChevronRight,
  Package,
} from 'lucide-react';

interface ManufacturingPartnershipProps {
  initialProduct?: string;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ManufacturingPartnership: React.FC<ManufacturingPartnershipProps> = ({
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: 'Contract Spray Drying & Powder Manufacturing',
    productInterest: initialProduct || 'White Foam BIG SHOT / Private Label Formulation',
    estimatedMonthlyVolume: '10 - 50 Metric Tonnes',
    notes: '',
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((current) => ({ ...current, productInterest: initialProduct }));
    }
  }, [initialProduct]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (import.meta.env.DEV) {
      setSubmitError('Partnership inquiries can be sent from the deployed website.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    const body = new URLSearchParams({
      'form-name': 'oem-inquiry',
      'bot-field': '',
      ...formData,
      privacyConsent: 'yes',
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Partnership inquiry submission failed');
      setSubmitted(true);
    } catch {
      setSubmitError('We could not send your inquiry. Please email contact@detergentthings.in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partnerships-b2b" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Corporate Info & Manufacturing Footprint */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-indigo-100 text-indigo-800">
              <Factory className="w-3.5 h-3.5 text-indigo-600" />
              B2B & THIRD-PARTY OEM PARTNERSHIPS
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Detergent Things Industries India
              </h2>
              <p className="text-sm font-semibold text-indigo-700">
                Pan-India OEM & Contract Packaging • Bihar Manufacturing Facility
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              From our high-speed manufacturing facility in Bihar, we formulate and package White Foam and private labels for distributors, institutional buyers, and retail chains across India.
            </p>

            {/* Direct Contact Card */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Manufacturing Facility
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Detergent Things Industries India, Unit in Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+919111911111"
                    className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    M: +91 9111911111
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Corporate Email
                  </span>
                  <a
                    href="mailto:contact@detergentthings.in"
                    className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    E: contact@detergentthings.in
                  </a>
                </div>
              </div>
            </div>

            {/* Capacity Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                OEM Production Capabilities:
              </span>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>350,000 MT Annual Micro-Granule Spray-Drying capacity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Vacuum duplex plodder soap bars & clean cakes (125g to 300g)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom enzyme formulas, fragrances (Rose, Lemon, Aqua, Lavender)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full export container loading with Star Export House clearance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive B2B Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Partnership Inquiry Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold">{formData.contactPerson}</span>. Our national B2B team will review your requirement for {formData.estimatedMonthlyVolume} and reach out within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                name="oem-inquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="oem-inquiry" />
                <div className="hidden" aria-hidden="true">
                  <label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Explore Manufacturing Partnerships
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Direct OEM, White-Label & Contract Spray-Drying Inquiry
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex FMCG Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      placeholder="Your Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Product or Service of Interest
                  </label>
                  <input
                    type="text"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Partnership Category
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                    >
                      <option>Contract Spray Drying & Powder Manufacturing</option>
                      <option>Detergent Cake & Bar Plodding (Custom Weight)</option>
                      <option>Private Label Brand Development</option>
                      <option>Export Container Bulk Sourcing</option>
                      <option>Institutional & Laundry Chemical Formulation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Estimated Monthly Volume
                    </label>
                    <select
                      name="estimatedMonthlyVolume"
                      value={formData.estimatedMonthlyVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedMonthlyVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                    >
                      <option>Trial Run (&lt; 10 MT)</option>
                      <option>10 - 50 Metric Tonnes</option>
                      <option>50 - 200 Metric Tonnes</option>
                      <option>200+ Metric Tonnes (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Specific Requirements or Product References
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Provide formulation targets, active matter % required, fragrance preference, or target export country..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-indigo-600"
                  ></textarea>
                </div>

                <label className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                  <input type="checkbox" name="privacyConsent" value="yes" required className="mt-0.5 accent-rose-600" />
                  <span>I agree to send my business contact details and inquiry for follow-up. See the Privacy Notice in the footer.</span>
                </label>

                {submitError && <p role="alert" className="text-xs font-semibold text-rose-700">{submitError}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:cursor-wait disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Submit Partnership Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
