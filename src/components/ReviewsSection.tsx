import React from 'react';
import { Star, Facebook, Instagram } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data';

import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="recenzie" className="py-24 lg:py-32 relative bg-[#0a0f1d] text-white border-y border-white/10 overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-red-400 tracking-wider">
              <span>04</span>
              <span>/</span>
              <span className="text-white">HODNOTENIA & SPOKOJNOSŤ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white leading-[1.02]">
              Čo o našej práci <br className="hidden sm:inline" />
              <span className="text-red-500">hovoria zákazníci.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-sm leading-relaxed font-normal">
            Spokojnosť klientov a precíznosť s prístupom „pán si dal naozaj záležať“ sú pre nás vždy na prvom mieste.
          </p>
        </div>

        {/* Reviews Carousel using shadcn */}
        <div className="relative mb-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex items-center justify-end gap-2 mb-4">
              <CarouselPrevious className="relative inset-auto translate-y-0 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white" />
              <CarouselNext className="relative inset-auto translate-y-0 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white" />
            </div>

            <CarouselContent className="-ml-4">
              {REVIEWS.map((rev) => (
                <CarouselItem key={rev.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-8 rounded-2xl bg-white/[0.06] border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between h-full backdrop-blur-xl shadow-xl space-y-4">
                    <div className="space-y-3">
                      {/* Rating Stars */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {rev.date}
                        </span>
                      </div>

                      {/* Quote */}
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                        „{rev.quote}“
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 font-bold text-xs flex items-center justify-center shrink-0">
                        {rev.avatarInitial || rev.author[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {rev.author}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {rev.serviceType} • {rev.location}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Social Proof Banner in Glass */}
        <div className="max-w-4xl mx-auto p-7 sm:p-8 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 shrink-0 flex items-center justify-center text-red-400 shadow-xs">
              <Facebook className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white">
                Sledujte reálne recenzie a výsledky na sociálnych sieťach
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Viac ako {BUSINESS_INFO.followersCount} sledovateľov na oficiálnej stránke Tepovač.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {BUSINESS_INFO.facebookUrl && (
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-[0.98]"
              >
                <Facebook className="w-4 h-4 text-red-400" />
                <span>Facebook</span>
              </a>
            )}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-[0.98]"
            >
              <Instagram className="w-4 h-4 text-red-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
