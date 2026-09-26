import React from 'react';
import { Facebook, Star, ShieldCheck, Sparkles, Home, Clock } from 'lucide-react';
import { BUSINESS_INFO, ADVANTAGES } from '../data';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-red-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-red-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-red-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="o-nas" className="py-20 lg:py-28 relative bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Owner Profile & Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
                <span>03</span>
                <span>/</span>
                <span className="text-slate-800">O NÁS & FILOZOFIA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tighter leading-[1.02]">
                Keď detaily robia <br />
                <span className="text-red-600">skutočný rozdiel.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Volám sa <strong className="text-slate-900 font-bold">Boris Hadvig</strong> a značku Tepovač vediem s jasnou víziou: poskytovať poctivé, nekompromisné a detailné čistenie vozidiel i čalúneného nábytku priamo v lokalite Malý Raj a okolí.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Namiesto rýchleho povrchového pretretia sa sústredím na hĺbkové extrakčné tepovanie, ručné dočisťovanie záhybov a leštenie laku do vysokého lesku. Každá zákazka prechádza mojimi rukami, vďaka čomu ručím za výsledok.
            </p>

            {/* Quote Box */}
            <div className="p-7 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-md space-y-3">
              <p className="text-sm sm:text-base text-slate-800 font-medium italic leading-relaxed">
                „Odporúčam, auto krásne čisté, voňavé a vyleštené, pán si dal naozaj záležať.“
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200/70">
                <span className="font-bold text-slate-900">Peter Holba (Overený zákazník)</span>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Social Link Badge */}
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-slate-300 text-slate-800 transition-all shadow-xs hover:shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-xs">
                <Facebook className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Sledujte našu prácu a výsledky:</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  Facebook Tepovač ({BUSINESS_INFO.followersCount} sledovateľov)
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Key Advantages Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-slate-300 transition-all shadow-xs hover:shadow-xl hover:-translate-y-0.5 space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs w-fit">
                  {getIcon(adv.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950">
                  {adv.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
