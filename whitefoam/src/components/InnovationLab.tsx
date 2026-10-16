import React, { useState } from 'react';
import {
  FlaskConical,
  Building2,
  Atom,
  CheckCircle2,
  Cpu,
  ChevronRight,
  ShieldCheck,
  Microscope,
  Factory,
} from 'lucide-react';
import { RND_FACILITIES, Facility } from '../data/detergentData';

interface InnovationLabProps {
  onOpenPartnership: () => void;
}

export const InnovationLab: React.FC<InnovationLabProps> = ({ onOpenPartnership }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility>(RND_FACILITIES[0]);
  const [activeTab, setActiveTab] = useState<'facilities' | 'qa_process'>('facilities');

  return (
    <section id="innovation-facilities" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-emerald-100 text-emerald-800">
              <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
              ADVANCED CHEMICAL & SURFACTANT ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              World-Class Innovation and R&D
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Decades of precision chemical engineering, continuous automated formulation towers at our Bihar unit, and cutting-edge analytical laboratories that make Detergent Things Industries India a trusted fabric care pioneer.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('facilities')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'facilities'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              See Facilities ({RND_FACILITIES.length})
            </button>
            <button
              onClick={() => setActiveTab('qa_process')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'qa_process'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              QA & Chemical Safety
            </button>
          </div>
        </div>

        {activeTab === 'facilities' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left facility selector list */}
            <div className="lg:col-span-5 space-y-3">
              {RND_FACILITIES.map((facility) => {
                const isSelected = selectedFacility.id === facility.id;
                return (
                  <div
                    key={facility.id}
                    onClick={() => setSelectedFacility(facility)}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/50 border-emerald-600 shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wide">
                        {facility.location}
                      </span>
                      <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                        {facility.metric}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-base text-slate-900 leading-snug">
                      {facility.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {facility.role}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Facility Deep-Dive Spec Card (No background image, pure clean modern UI) */}
            <div className="lg:col-span-7 bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-1">
                    Facility Dossier
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {selectedFacility.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center font-bold shadow-xs">
                  <Factory className="w-6 h-6" />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Core Mandate
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {selectedFacility.role}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Engineering Overview
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedFacility.description}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Specialized Laboratory & Industrial Machinery
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedFacility.equipment.map((eq, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-bold text-slate-600">
                  Verified Metric:{' '}
                  <span className="text-emerald-700 font-black">
                    {selectedFacility.metric}
                  </span>
                </div>
                <button
                  onClick={onOpenPartnership}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Facility Audit / OEM Visit
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* QA & Chemical Safety View */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">
                Surfactant & Active Matter Testing
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every production run undergoes strict Active Detergent Matter (ADM) titrations to guarantee consistent foaming, high dirt suspension, and uniform cleansing strength.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">
                Skin Safety & pH Calibration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Formulas are calibrated between pH 8.5 to 9.2 with skin-softening agents, preventing the harsh caustic skin burns common with unrefined detergents.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Atom className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">
                Zero Harsh Fillers & Cold Water Solubility
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Micro-granule spray technology ensures rapid cold water dispersion, preventing hard salt scaling on clothes and washing machine internal agitators.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
