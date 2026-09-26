import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO, heroBgImage } from '../data';
import { LiquidGlassViewport, LiquidGlassButton } from './ui/apple-tahoe-liquid-glass-button';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 text-white">
      {/* Refractive Liquid Glass Viewport containing the full-bleed background */}
      <LiquidGlassViewport
        bgImage={heroBgImage}
        fallbackMode="webgl"
        className="w-full min-h-[90vh] sm:min-h-screen flex flex-col justify-center border-none rounded-none"
      >
        {/* Precision Multi-Layer Overlays for Contrast, Atmosphere & Depth */}
        {/* Directional scrim: darkens the left side for razor-sharp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30 lg:to-transparent pointer-events-none z-0" />

        {/* Vertical scrim: smooth blend for top navigation and bottom section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70 pointer-events-none z-0" />

        {/* Ambient Carmine Red Studio Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
            
            {/* Brutal Punchy Luxury Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-black tracking-tight text-white uppercase leading-[0.94] drop-shadow-md">
              Dokonalý lesk. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Pocit nového auta.
              </span>
            </h1>

            {/* Punchy Short Text (Direct & Catchy) */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed max-w-xl drop-shadow-sm">
              Prémiové hĺbkové tepovanie, starostlivosť o kožu a ochrana laku priamo u vás doma. Bez čakania na umyvárkach, s maximálnou precíznosťou a rešpektom k materiálom.
            </p>

            {/* Liquid Glass CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Call Action */}
              <LiquidGlassButton
                onClick={() => {
                  window.location.href = BUSINESS_INFO.phoneTel;
                }}
                className="px-7 sm:px-9 py-4 rounded-2xl group transition-all"
                title={`Zavolať ihneď: ${BUSINESS_INFO.phoneDisplay}`}
              >
                <span className="p-1.5 rounded-lg bg-red-600/80 backdrop-blur-md border border-red-400/40 text-white shadow-inner flex items-center justify-center">
                  <Phone className="w-4 h-4 fill-white" />
                </span>
                <span className="font-bold text-white tracking-wide">Zavolať ihneď</span>
                <span className="font-mono text-xs text-red-200/90 pl-1 border-l border-white/20 hidden sm:inline">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </LiquidGlassButton>

              {/* Secondary Services Action */}
              <LiquidGlassButton
                onClick={() => {
                  navigate('/sluzby');
                }}
                className="px-7 sm:px-9 py-4 rounded-2xl group transition-all"
                title="Zobraziť prehľad služieb"
              >
                <Sparkles className="w-4 h-4 text-white/90" />
                <span className="font-bold text-white tracking-wide">Prehľad služieb</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </LiquidGlassButton>
            </div>

            {/* Quick Location & Availability Line */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs font-mono text-slate-300/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Slovenský Grob (Malý Raj), Senec, Pezinok & okolie</span>
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-slate-400">Mobilný príchod priamo k vám</span>
            </div>

          </div>
        </div>
      </LiquidGlassViewport>
    </section>
  );
};
