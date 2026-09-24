import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const BeforeAfterPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-2">
          REÁLNE VÝSLEDKY & TRANSFORMÁCIE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
          Galéria — Ukážky Našej Práce
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Potiahnite posuvník na fotkách a presvedčte sa o sile extrakčného čistenia a korekcie laku.
        </p>
      </div>

      <BeforeAfterSlider />

      {/* Additional info section */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-zinc-800 text-zinc-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#ed2503]" />
            <span>Sledujte denne nové videá a fotky</span>
          </div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
            Viac ako {BUSINESS_INFO.followersCount} fanúšikov na Instagrame
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Každý týždeň uverejňujeme čerstvé príbehy z čistenia znečistených interiérov, obnovovania koženého čalúnenia a leštenia škrabancov.
          </p>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3.5 rounded-xl bg-[#ed2503] hover:bg-[#c11e02] text-white font-bold text-sm shadow-lg shadow-[#ed2503]/25 transition-all mt-2"
          >
            Sledovať @{BUSINESS_INFO.instagramHandle} na Instagrame
          </a>
        </div>
      </section>
    </div>
  );
};
