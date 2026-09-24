import React, { useState } from 'react';
import { Car, Sparkles, Sofa, CheckCircle2, Clock, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5 text-[#dc2626]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#dc2626]" />;
      case 'Sofa':
        return <Sofa className="w-5 h-5 text-[#dc2626]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#dc2626]" />;
    }
  };

  const currentService = SERVICES[activeTab] || SERVICES[0];

  return (
    <section id="sluzby" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without cliché badges */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
            DETAILNÝ PREHĽAD SLUŽIEB
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Čo všetko pre vás vyčistíme?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3">
            Komplexná starostlivosť o vozidlá a čalúnený nábytok s dôrazom na najvyšší štandard čistenia.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {SERVICES.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`p-5 rounded-2xl text-left transition-all flex items-center justify-between border ${
                  isActive
                    ? 'bg-zinc-900 border-[#dc2626] shadow-lg shadow-[#dc2626]/10 text-white'
                    : 'bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="font-bold font-['Space_Grotesk'] text-base text-white">
                    {service.title}
                  </div>
                  <div className="text-xs text-zinc-500 font-medium mt-0.5">
                    {service.priceStarting} • {service.durationEstimate}
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#dc2626]' : 'bg-zinc-800'}`} />
              </button>
            );
          })}
        </div>

        {/* Active Service Deep Dive Showcase */}
        <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-zinc-800 group h-[320px] sm:h-[400px]">
            <img
              src={currentService.imageUrl}
              alt={currentService.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/80 backdrop-blur-md p-4 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Clock className="w-4 h-4 text-[#dc2626]" />
                <span>Odhadovaný čas: {currentService.durationEstimate}</span>
              </div>
              <div className="text-sm font-extrabold text-[#dc2626]">
                {currentService.priceStarting}
              </div>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#dc2626] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Profesionálny Štandard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">
                {currentService.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mt-2">
                {currentService.shortDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed">
              {currentService.fullDesc}
            </div>

            {/* Features Checklist */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Čo je súčasťou tejto služby:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 bg-black/60 p-2.5 rounded-lg border border-zinc-800/60">
                    <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-500 block">Základná cena</span>
                <span className="text-2xl font-extrabold font-['Space_Grotesk'] text-white">
                  {currentService.priceStarting}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#dc2626]/20 transition-all active:scale-95 shrink-0"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

