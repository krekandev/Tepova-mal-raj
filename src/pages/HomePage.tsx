import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SERVICES, BUSINESS_INFO } from '../data';
import { Calculator, ArrowRight, Phone, MapPin } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Header */}
      <Hero />

      {/* 1. Quick Services Summary */}
      <section className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-1">
                HLAVNÉ SLUŽBY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
                Čo pre vás vyčistíme
              </h2>
            </div>
            <Link
              to="/sluzby"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#ed2503] text-white font-bold text-xs transition-all shrink-0"
            >
              <span>Všetky služby & cenník</span>
              <ArrowRight className="w-4 h-4 text-[#ed2503]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-3xl bg-black border border-zinc-800 flex flex-col justify-between space-y-4 hover:border-[#ed2503]/50 transition-all group"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white group-hover:text-[#ed2503] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#ed2503] font-['Space_Grotesk']">
                    {service.priceStarting}
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="px-4 py-2 rounded-xl bg-[#ed2503] hover:bg-[#c11e02] text-xs font-bold text-white flex items-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Zavolať</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Direct Price Calculator Link Banner */}
      <section className="py-12 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
                Zistite orientačnú cenu v kalkulačke
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Spočítajte si cenu za tepovanie vozidla alebo sedačky online.
              </p>
            </div>

            <Link
              to="/kalkulacka"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#ed2503] hover:bg-[#c11e02] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#ed2503]/20 transition-all shrink-0"
            >
              <Calculator className="w-4 h-4" />
              <span>Otvoriť Kalkulačku Ceny</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Direct Contact / Call Banner */}
      <section className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#ed2503] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk']">
                Chcete dohodnúť termín?
              </h2>
              <p className="text-white/90 text-xs sm:text-sm">
                Zavolajte nám priamo. Pôsobíme v Senci, Bratislave, Pezinku a okolí.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-6 py-3.5 rounded-xl bg-black text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4 text-[#ed2503]" />
                <span>Zavolať {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <Link
                to="/kontakt"
                className="px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Kontakt & Adresa</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
