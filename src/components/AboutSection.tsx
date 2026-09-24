import React from 'react';
import { Sparkles, Facebook, Award, Star } from 'lucide-react';
import { BUSINESS_INFO, ADVANTAGES } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="o-nas" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#dc2626]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Owner Profile & Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
                O ZNAČKE TEPOVAČ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
                Kedy detail robí{' '}
                <span className="text-[#dc2626]">skutočný rozdiel</span>
              </h2>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed">
              Volám sa <strong className="text-white font-semibold">Boris Hadvig</strong> a značku Tepovač som založil s jednoznačnou víziou: poskytovať poctivé, nekompromisné a detailné čistenie autotechniky a čalúneného nábytku.
            </p>

            <p className="text-zinc-300 text-base leading-relaxed">
              Namiesto rýchleho povrchového pretretia sa sústredím na hĺbkové extrakčné tepovanie, ručné dočisťovanie záhybov a leštenie laku do vysokého lesku. Ako hovoria naši spokojní klienti: <em className="text-[#dc2626] font-medium font-serif">"pán si dal naozaj záležať"</em>.
            </p>

            {/* Quote Box */}
            <div className="p-5 rounded-2xl bg-black border border-zinc-800 relative shadow-xl">
              <div className="text-[#dc2626] font-serif text-3xl absolute -top-3 left-4 bg-zinc-900 px-2 rounded">“</div>
              <p className="text-sm text-zinc-200 font-medium italic pt-2 mb-3">
                Odporúčam, auto krásne čisté, voňavé a vyleštené, pán si dal naozaj záležať.
              </p>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-white">— Peter Holba (Hodnotenie zákazníka)</span>
                <div className="flex gap-0.5 text-[#dc2626]">
                  <Star className="w-3.5 h-3.5 fill-[#dc2626]" />
                  <Star className="w-3.5 h-3.5 fill-[#dc2626]" />
                  <Star className="w-3.5 h-3.5 fill-[#dc2626]" />
                  <Star className="w-3.5 h-3.5 fill-[#dc2626]" />
                  <Star className="w-3.5 h-3.5 fill-[#dc2626]" />
                </div>
              </div>
            </div>

            {/* Social Link Badge */}
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#dc2626] flex items-center justify-center text-white shadow-md">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-medium">Sledujte našu prácu live:</div>
                <div className="text-sm font-bold text-white group-hover:text-[#dc2626] transition-colors">
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
                className="p-6 rounded-2xl bg-black border border-zinc-800 hover:border-[#dc2626]/50 transition-all group shadow-lg"
              >
                <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-[#dc2626] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
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
