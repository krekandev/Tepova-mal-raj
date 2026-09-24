import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO, carUploadedImg } from '../data';

interface HeroProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Softened Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={carUploadedImg}
          alt="Profesionálne čistenie a tepovanie áut Tepovač"
          className="w-full h-full object-cover object-center opacity-70 scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#dc2626]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Profesionálne čistenie a tepovanie{' '}
          <span className="text-[#dc2626] block sm:inline">
            áut & nábytku
          </span>
        </h1>

        {/* Subheadline with Locations */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Hĺbkové tepovanie interiérov vozidiel, leštenie karosérií a precízne tepovanie sedacích súprav u vás doma. Pôsobíme v lokalitách{' '}
          <span className="text-white font-semibold underline decoration-[#dc2626] decoration-2 underline-offset-4">
            Bratislava, Senec, Pezinok a okolie
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#dc2626]/25 hover:shadow-[#dc2626]/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <Link
            to="/sluzby"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#dc2626]/60 text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
          >
            <span>Prehľad služieb</span>
            <ArrowRight className="w-4 h-4 text-[#dc2626]" />
          </Link>
        </div>

        {/* Social Proof & Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-zinc-800/80">
          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold font-['Space_Grotesk'] text-[#dc2626] mb-1">
              800+
            </div>
            <div className="text-xs text-zinc-400 font-medium">
              Sledovateľov na FB Tepovač
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold font-['Space_Grotesk'] text-[#dc2626] mb-1 flex items-center justify-center gap-1">
              <span>5.0</span>
              <Star className="w-4 h-4 fill-[#dc2626] text-[#dc2626] inline-block" />
            </div>
            <div className="text-xs text-zinc-400 font-medium">
              Stopercentné recenzie zákazníkov
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold font-['Space_Grotesk'] text-[#dc2626] mb-1">
              100%
            </div>
            <div className="text-xs text-zinc-400 font-medium">
              Poctivý prístup k detailu
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold font-['Space_Grotesk'] text-[#dc2626] mb-1">
              Mobilné
            </div>
            <div className="text-xs text-zinc-400 font-medium">
              Tepovanie nábytku priamo u vás
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
