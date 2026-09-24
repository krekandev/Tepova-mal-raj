import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { ShieldCheck, Award, Sparkles, CheckCircle2, Phone, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-black min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-2">
          O ZNAČKE & PRÍSTUPE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
          O nás — Boris Hadvig Tepovač
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Zistite viac o našom prístupe k čisteniu vozidiel a čalúnenia, o použitých technológiách a záruke poctivej práce.
        </p>
      </div>

      <AboutSection />

      {/* Philosophy & Equipment Deep Dive */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-black border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Nekompromisná kvalita
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Nepoužívame lacné supermarketové čističe. Využívame certifikovanú profesionálnu autokozmetiku a extrakčné tepovače s vysokým tlakom vody.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-black border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Osobná garancia majiteľa
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Každé vozidlo a každý sedačka prechádza osobnou kontrolou Borisa Hadviga. Garantujeme 100% spokojnosť s výsledkom.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-black border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Mobilita & Pohodlie
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Prídeme priamo k vám domov, do garáže alebo do firmy v rámci Bratislavy, Senca, Pezinka a širokého okolia.
              </p>
            </div>
          </div>

          {/* Direct Contact Bar */}
          <div className="mt-12 p-8 rounded-3xl bg-[#ed2503] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold font-['Space_Grotesk']">
                Chcete sa poradiť alebo si dohodnúť termín?
              </h3>
              <p className="text-sm text-white/90 mt-1">
                Boris Hadvig je vám k dispozícii sedem dní v týždni.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-6 py-3.5 rounded-2xl bg-black text-white font-extrabold text-sm flex items-center gap-2.5 shrink-0 hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 text-[#ed2503]" />
              <span>Zavolať {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
