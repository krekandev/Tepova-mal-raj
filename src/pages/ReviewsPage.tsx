import React from 'react';
import { ReviewsSection } from '../components/ReviewsSection';
import { Star, ShieldCheck, Phone, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Header on Cool Architectural Slate */}
      <div className="pt-32 pb-14 bg-[#edf2f7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-500 tracking-wider">
              <span>04</span>
              <span>/</span>
              <span className="text-slate-800">SKÚSENOSTI NAŠICH ZÁKAZNÍKOV</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1.02]">
              Hodnotenia <br className="hidden sm:inline" />
              <span className="text-red-600">& recenzie klientov.</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              Prečítajte si autentické reakcie našich zákazníkov z Malého Raja, Slovenského Grobu, Bratislavy, Senca, Pezinka a okolitých obcí.
            </p>
          </div>
        </div>
      </div>

      {/* Deep Luxury Dark Reviews Carousel Stage */}
      <ReviewsSection />

      {/* Review Metrics on Pure Studio White */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50/90 border border-slate-200/90 grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-lg">
            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl font-black text-red-600 font-mono tracking-tight">
                100%
              </div>
              <div className="text-base font-bold text-slate-950">Spokojnosť zákazníkov</div>
              <p className="text-xs text-slate-500">Kladený dôraz na každý detail a záhyb</p>
            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-200 py-6 md:py-0">
              <div className="flex items-center justify-center gap-2 text-slate-950 text-5xl sm:text-6xl font-black font-mono tracking-tight">
                <span>5.0</span>
                <Star className="w-8 h-8 fill-amber-400 stroke-amber-400" />
              </div>
              <div className="text-base font-bold text-slate-950">Priemerné hodnotenie</div>
              <p className="text-xs text-slate-500">Dlhodobo udržiavaný špičkový štandard</p>
            </div>

            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl font-black text-slate-950 font-mono tracking-tight">
                800+
              </div>
              <div className="text-base font-bold text-slate-950">Sledovateľov na Facebooku</div>
              <p className="text-xs text-slate-500">Pravidelné zverejňovanie reálnych prác</p>
            </div>
          </div>

          {/* Call to action in Deep Luxury Dark Stage */}
          <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#090d16] border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider block">
                PRIDAJTE SA K NÁM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Presvedčte sa osobne o precíznosti našej práce
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Zavolajte Borisovi Hadvigovi a dohodnite si termín s osobnou garanciou kvality.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm flex items-center gap-2 shrink-0 shadow-lg shadow-red-600/35 transition-all active:scale-[0.98] border border-red-400/40 relative z-10"
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
