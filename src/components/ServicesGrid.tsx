import React, { useState } from 'react';
import { Car, Sparkles, Sofa, CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { ServiceItem } from '../types';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ServiceDetailDialog } from './ServiceDetailDialog';

export const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [dialogService, setDialogService] = useState<ServiceItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-red-600" />;
      case 'Sofa':
        return <Sofa className="w-5 h-5 text-red-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-red-600" />;
    }
  };

  const currentService = SERVICES[activeTab] || SERVICES[0];

  const handleOpenDialog = (service: ServiceItem) => {
    setDialogService(service);
    setIsDialogOpen(true);
  };

  return (
    <section id="sluzby" className="py-16 sm:py-24 relative bg-[#edf2f7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
              <span>01</span>
              <span>/</span>
              <span className="text-slate-800">PORTFÓLIO SLUŽIEB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-slate-950 leading-[1.02]">
              Všetko, čo pre vás <br className="hidden sm:inline" />
              <span className="text-red-600">profesionálne vyčistíme.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
            Komplexná starostlivosť o vozidlá a čalúnený nábytok s dôrazom na poctivý výsledok, overené postupy a individuálny prístup ku každému zákazníkovi.
          </p>
        </div>

        {/* Tab Selection Segmented Control */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10 p-1.5 rounded-xl bg-slate-200/70 border border-slate-300/80">
          {SERVICES.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`p-3.5 rounded-lg text-left transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-950 font-bold border border-slate-200/90 shadow-md'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/60 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${isActive ? 'bg-red-50 text-red-600' : 'bg-slate-200/60 text-slate-600'}`}>
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-950">
                      {service.title}
                    </div>
                    <div className="text-xs font-mono text-slate-500 font-normal">
                      {service.durationEstimate}
                    </div>
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-600' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card using shadcn Card & AspectRatio */}
        <Card className="rounded-2xl bg-white border border-slate-200/90 p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_12px_36px_rgba(0,0,0,0.07)]">
          
          {/* Image Side with AspectRatio */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200/80 group bg-slate-100">
            <AspectRatio ratio={16 / 10} className="w-full">
              <img
                src={currentService.imageUrl}
                alt={currentService.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs shadow-xs">
                  {currentService.popularTag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/85 backdrop-blur-md p-3.5 rounded-lg border border-white/10 text-white">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span>Odhadovaný čas: {currentService.durationEstimate}</span>
                </div>
              </div>
            </AspectRatio>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2 font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>PROFESIONÁLNY ŠTANDARD</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                {currentService.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">
                {currentService.shortDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/70 text-xs sm:text-sm text-slate-600 leading-relaxed shadow-none">
              {currentService.fullDesc}
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                ČO JE SÚČASŤOU TEJTO SLUŽBY:
              </div>
              <div className="space-y-2">
                {currentService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleOpenDialog(currentService)}
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                Detailný rozpis postupu
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full sm:w-auto px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Dohodnúť termín: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </Card>

      </div>

      <ServiceDetailDialog
        service={dialogService}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};
