import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { ShieldCheck, Award, Sparkles, Phone, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS_INFO, PROCESS_STEPS } from '../data';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Page Header on Cool Architectural Slate */}
      <div className="pt-32 pb-14 bg-[#edf2f7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-500 tracking-wider">
              <span>02</span>
              <span>/</span>
              <span className="text-slate-800">O ZNAČKE & PRÍSTUPE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1.02]">
              O nás <span className="text-slate-400 font-normal">/</span> Boris Hadvig <br />
              <span className="text-red-600">Tepovač Malý Raj.</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              Zistite viac o našom prístupe k čisteniu vozidiel a čalúneného nábytku v Malom Raji a širokom okolí, o použitých technológiách a garancii poctivej práce.
            </p>
          </div>
        </div>
      </div>

      {/* Studio White Bio & Advantages */}
      <AboutSection />

      {/* Philosophy & Equipment Deep Dive in Deep Luxury Dark Stage */}
      <section className="py-24 lg:py-32 bg-[#090d16] text-white border-y border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="font-mono text-xs text-red-400 font-semibold uppercase tracking-wider block">
              TECHNOLOGICKÝ ŠTANDARD
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter">
              Prečo investujeme do <br className="hidden sm:inline" />
              <span className="text-red-500">profesionálnej techniky a chémie.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Kvalitný detailing a tepovanie nevzniká lacnými hobby strojmi zo supermarketu. Každý náš zásah chráni povrchy a obnovuje ich pôvodný vzhľad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="p-3 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Nekompromisná kvalita
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Nepoužívame lacné univerzálne čističe. Využívame certifikovanú profesionálnu autokozmetiku a extrakčné tepovače s vysokým podtlakom a presným tlakom vody.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="p-3 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Osobná garancia majiteľa
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Každé vozidlo a každá sedačka prechádza osobnou kontrolou Borisa Hadviga. Ručíme za výsledok a 100% spokojnosť ešte pred úhradou.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4 shadow-xl backdrop-blur-xl">
              <div className="p-3 rounded-2xl bg-red-600/20 text-red-400 border border-red-500/30 w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Mobilita & Pohodlie
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prídeme priamo k vám domov, do garáže alebo do firmy v rámci Slovenského Grobu (Malý Raj), Pezinka, Senca a Bratislavy so všetkou technikou.
              </p>
            </div>
          </div>

          {/* Direct Contact Bar */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white/[0.06] border border-red-500/40 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(220,38,38,0.15)] backdrop-blur-2xl">
            <div>
              <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block mb-1">
                OSOBNÝ KONTAKT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Chcete sa poradiť alebo si dohodnúť termín?
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Boris Hadvig je vám k dispozícii na telefóne 7 dní v týždni.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm flex items-center gap-2 shrink-0 shadow-lg shadow-red-600/35 transition-all active:scale-[0.98] border border-red-400/40"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
