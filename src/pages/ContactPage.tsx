import React from 'react';
import { LocationContactSection } from '../components/LocationContactSection';
import { BUSINESS_INFO } from '../data';
import { Clock, Phone, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Header on Studio White with subtle bottom border */}
      <div className="pt-32 pb-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-500 tracking-wider">
              <span>05</span>
              <span>/</span>
              <span className="text-slate-800">PRIAMY KONTAKT & PÔSOBNOSŤ</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1.02]">
              Lokalita Malý Raj <br className="hidden sm:inline" />
              <span className="text-red-600">& priamy kontakt.</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              Zavolajte nám priamo alebo pristavte vozidlo v Malom Raji (Slovenský Grob). Mobilný servis poskytujeme v celom regióne Senec, Pezinok a Bratislava.
            </p>
          </div>
        </div>
      </div>

      {/* Cool Slate Section with Floating White Cards */}
      <LocationContactSection />

      {/* Opening hours & Direct Call Banner in Deep Luxury Dark Stage */}
      <section className="py-24 lg:py-32 bg-[#090d16] text-white border-t border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider font-mono">
                <Clock className="w-4 h-4" />
                <span>PRACOVNÁ DOBA & DOSTUPNOSŤ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {BUSINESS_INFO.workingHours}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                Termíny prispôsobujeme podľa individuálnej dohody aj cez víkendy a sviatky. Pri urgentných požiadavkách volajte kedykoľvek.
              </p>
            </div>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/35 transition-all shrink-0 active:scale-[0.98] border border-red-400/40"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
