import React from 'react';
import { Star, Instagram } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="recenzie" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
            HODNOTENIA ZÁKAZNÍKOV
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
            Čo o našej práci hovoria zákazníci?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Spokojnosť klientov a precíznosť ("pán si dal naozaj záležať") sú pre nás vždy na prvom mieste.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-[#dc2626]/50 transition-all flex flex-col justify-between shadow-xl group relative"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#dc2626]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#dc2626] stroke-[#dc2626]" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-zinc-200 text-base italic leading-relaxed font-serif pt-2">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#dc2626] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  {rev.avatarInitial || rev.author[0]}
                </div>
                <div>
                  <div className="font-bold text-white text-base font-['Space_Grotesk']">
                    {rev.author}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {rev.serviceType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Followers Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-zinc-950 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#dc2626] shrink-0 flex items-center justify-center text-white shadow-lg">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white font-['Space_Grotesk']">
                Viac ako {BUSINESS_INFO.followersCount} sledovateľov na Instagrame
              </div>
              <p className="text-xs text-zinc-400">
                Pozrite si najnovšie videá, príbehy a premeny na profile @BorisHadvig
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm border border-zinc-800 shrink-0 transition-all flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-[#dc2626]" />
            <span>Navštíviť Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
