import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';
import { SERVICES, BUSINESS_INFO } from '../data';
import { CheckCircle2, Clock, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-28 pb-16 bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-2">
          KOMPLETNÝ CENNÍK & PONUKA
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
          Naše Služby Tepovania & Detailing
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Prehľad jednotlivých balíkov čistenia interiéru vozidiel, leštenia karosérie a tepovania čalúneného nábytku.
        </p>
      </div>

      <ServicesGrid onSelectService={onOpenBooking} />

      {/* Expanded Breakdown Cards */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold font-['Space_Grotesk'] text-white">
              Podrobný prehľad všetkých dostupných balíkov
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-8 rounded-3xl bg-black border border-zinc-800 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ed2503] bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                    {s.popularTag}
                  </div>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                    {s.title}
                  </h3>
                  <div className="text-3xl font-extrabold text-[#ed2503] font-['Space_Grotesk']">
                    {s.priceStarting}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {s.fullDesc}
                  </p>

                  <div className="pt-4 border-t border-zinc-800 space-y-2">
                    <div className="text-xs font-bold text-zinc-400 uppercase">Súčasťou služby:</div>
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ed2503] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full py-3.5 rounded-xl bg-[#ed2503] hover:bg-[#c11e02] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#ed2503]/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Zavolať {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
