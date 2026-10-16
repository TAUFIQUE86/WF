import React, { useState } from 'react';
import {
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
  Heart,
} from 'lucide-react';
import { JOB_OPENINGS, JobOpening } from '../data/detergentData';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
  };

  return (
    <section id="careers-section" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Culture & Callout Card from Screenshot 8 */}
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-md mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-white/20 backdrop-blur-xs text-white">
              <Heart className="w-3.5 h-3.5 fill-white" />
              PEOPLE & CULTURE • DIL SE SAAF
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Good work begins with good people.
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
              If you're looking for a workplace where effort is valued, ideas are heard, and the energy is <span className="font-bold underline decoration-white/50">Chamak jo khud Bole</span>, we'd love to meet you. Join our modern manufacturing facility and chemical labs in Bihar.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#open-roles"
              className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              Explore Current Job Openings
              <ArrowRight className="w-4 h-4 text-rose-600" />
            </a>
          </div>
        </div>

        {/* Current Job Openings Grid */}
        <div id="open-roles" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Active Openings at Detergent Things Industries India
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Competitive FMCG compensation, growth ladders, and state-of-the-art laboratory environments
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-200 text-slate-700">
              {JOB_OPENINGS.length} Positions Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="font-black text-base text-slate-900">
                    {job.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {job.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setAppliedSuccess(false);
                    }}
                    className="font-bold text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                  >
                    Apply Now &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-0.5">
                    Job Application
                  </span>
                  <h4 className="font-black text-lg text-slate-900">
                    {selectedJob.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedJob.department} • {selectedJob.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {appliedSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="font-extrabold text-base text-slate-900">
                    Application Submitted!
                  </h5>
                  <p className="text-xs text-slate-600">
                    Thank you, {applicantName}. Our Talent Acquisition team at Detergent Things Industries India (Bihar Unit) will review your credentials for the {selectedJob.title} role.
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="mt-3 px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-rose-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-rose-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-rose-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Brief Experience Note or Portfolio Link
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention your relevant FMCG formulation, chemical engineering, or manufacturing experience..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-rose-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Application (Dil Se Saaf Team)
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
