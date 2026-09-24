import React from 'react';
import { ReviewsSection } from '../components/ReviewsSection';
import { Star, ShieldCheck, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-2">
          SKÚSENOSTI NÁŠHO ZÁKAZNÍKA
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
          Hodnotenia & Recenzie
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Prečítajte si autentické reálne reakcie našich spokojných klientov z Bratislavy, Senca, Pezinka a okolia.
        </p>
      </div>

      <ReviewsSection />

      {/* Review Metrics */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-black border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-extrabold font-['Space_Grotesk'] text-[#ed2503]">
                100%
              </div>
              <div className="text-sm font-bold text-white">Spokojnosť zákazníkov</div>
              <p className="text-xs text-zinc-500">Kladený dôraz na každý detail</p>
            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-zinc-800 py-6 md:py-0">
              <div className="flex items-center justify-center gap-1 text-[#ed2503] text-3xl font-extrabold font-['Space_Grotesk']">
                5.0 <Star className="w-7 h-7 fill-[#ed2503]" />
              </div>
              <div className="text-sm font-bold text-white">Priemerné hodnotenie</div>
              <p className="text-xs text-zinc-500">Bez jedinej negatívnej skúsenosti</p>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-extrabold font-['Space_Grotesk'] text-white">
                800+
              </div>
              <div className="text-sm font-bold text-white">Sledovateľov na IG</div>
              <p className="text-xs text-zinc-500">Každodenná komunikácia & príbehy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
