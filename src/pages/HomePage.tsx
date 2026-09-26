import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SERVICES, BUSINESS_INFO, PROCESS_STEPS, REVIEWS, FAQS } from '../data';
import { LocationContactSection } from '../components/LocationContactSection';
import { ServiceDetailDialog } from '../components/ServiceDetailDialog';
import { ServiceItem } from '../types';
import { 
  Phone, ArrowRight, Star, ShieldCheck, Sparkles, 
  CheckCircle2, HelpCircle, MapPin, Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export const HomePage: React.FC = () => {
  const carService = SERVICES[0]; // Flagship: Čistenie & Detailing áut
  const furnitureService = SERVICES[1]; // Tepovanie nábytku
  const polishService = SERVICES[2]; // Leštenie laku & voskovanie

  const [dialogService, setDialogService] = useState<ServiceItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openServiceDetail = (service: ServiceItem) => {
    setDialogService(service);
    setIsDialogOpen(true);
  };

  return (
    <div className="text-slate-900 bg-white">
      {/* 1. Hero Header */}
      <Hero />

      {/* 2. Služby Section: Apple-style Asymmetric Bento Grid */}
      <section className="py-24 lg:py-32 relative bg-[#edf2f7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          {/* Asymmetric Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
                <span>01</span>
                <span>/</span>
                <span className="text-slate-800">SLUŽBY & DETAILING</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-tighter leading-[1.02]">
                Čo pre vás <br className="hidden sm:inline" />
                <span className="text-red-600">vyčistíme.</span>
              </h2>
            </div>
            <div className="lg:max-w-md space-y-3">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Poctivá hĺbková hygiena a renovácia vozidiel i čalúnenia priamo u vás. Žiadne povrchové utieranie prachu, ale detailná viacstupňová starostlivosť.
              </p>
              <div>
                <Link
                  to="/sluzby"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950 hover:text-red-600 transition-colors group"
                >
                  <span>Prehľad všetkých služieb</span>
                  <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bento Grid (2/3 Flagship + 1/3 Two Stacked Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: 2/3 Flagship Bento Card using shadcn Card & AspectRatio */}
            <Card className="lg:col-span-8 rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)] p-0">
              {/* Full bleed AspectRatio image */}
              <div className="relative w-full overflow-hidden bg-slate-100">
                <AspectRatio ratio={16 / 9} className="w-full">
                  <img
                    src={carService.imageUrl}
                    alt={carService.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 font-bold text-xs shadow-xs">
                      {carService.popularTag}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                    <div>
                      <span className="font-mono text-xs text-red-400 font-semibold uppercase tracking-wider block mb-1">
                        VLAJKOVÁ SLUŽBA
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {carService.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold shrink-0 w-fit">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      <span>{carService.durationEstimate}</span>
                    </div>
                  </div>
                </AspectRatio>
              </div>

              {/* Card Body */}
              <CardContent className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {carService.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  {carService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                  <div className="text-xs text-slate-400 font-mono">
                    Mobilný servis • Slovenský Grob (Malý Raj), Senec, Pezinok, BA
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openServiceDetail(carService)}
                      className="px-4 py-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Detail postupu
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="px-5 py-2.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                      <span>Dohodnúť termín</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right: 1/3 Side Bento Cards using shadcn Card & AspectRatio */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Card 2: Leštenie laku & voskovanie */}
              <Card className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] flex-1 p-0">
                <div className="relative w-full overflow-hidden bg-slate-100">
                  <AspectRatio ratio={16 / 9} className="w-full">
                    <img
                      src={polishService.imageUrl}
                      alt={polishService.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[11px] shadow-xs">
                        {polishService.popularTag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-mono text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                        EXTERIÉR & LAK
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-200">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span>{polishService.durationEstimate}</span>
                      </div>
                    </div>
                  </AspectRatio>
                </div>

                <CardContent className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-red-600 transition-colors">
                      {polishService.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                      {polishService.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openServiceDetail(polishService)}
                      className="text-xs font-bold text-slate-900 hover:text-red-600 transition-colors inline-flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Detail postupu</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="p-2 rounded-md bg-slate-100 hover:bg-red-600 text-slate-700 hover:text-white transition-colors"
                      title="Objednať leštenie laku"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Hĺbkové tepovanie nábytku */}
              <Card className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] flex-1 p-0">
                <div className="relative w-full overflow-hidden bg-slate-100">
                  <AspectRatio ratio={16 / 9} className="w-full">
                    <img
                      src={furnitureService.imageUrl}
                      alt={furnitureService.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 font-bold text-[11px] shadow-xs">
                        {furnitureService.popularTag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-mono text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                        DOMÁCNOSTI & FIRMY
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-200">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span>{furnitureService.durationEstimate}</span>
                      </div>
                    </div>
                  </AspectRatio>
                </div>

                <CardContent className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-red-600 transition-colors">
                      {furnitureService.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                      {furnitureService.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openServiceDetail(furnitureService)}
                      className="text-xs font-bold text-slate-900 hover:text-red-600 transition-colors inline-flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Detail postupu</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="p-2 rounded-md bg-slate-100 hover:bg-red-600 text-slate-700 hover:text-white transition-colors"
                      title="Objednať tepovanie nábytku"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>
        </div>
      </section>

      {/* 2.5 Filozofia & Prečo bez tabuľkového cenníka (Deep Luxury Dark Section) */}
      <section className="py-24 lg:py-32 bg-[#090d16] text-white border-y border-white/10 relative overflow-hidden">
        {/* Ambient Carmine Red Studio Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-red-400 tracking-wider">
                  <span>02</span>
                  <span>/</span>
                  <span className="text-white">FILOZOFIA PRÍSTUPU</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.02]">
                  Prečo u nás nenájdete <br className="hidden sm:inline" />
                  <span className="text-red-500">generický tabuľkový cenník?</span>
                </h2>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Každé vozidlo a každý kus čalúneného nábytku si nesie svoj vlastný stav. Odlišná tvrdosť autolaku, zanesenie pórov kože, typ textílie, zvieracie chlpy či hĺbkové škvrny si vyžadujú rozdielny technologický postup aj odlišný časový fond.
                  </p>
                  <p>
                    Namiesto vymyslených balíkov s polovičným výsledkom Boris Hadvig stanovuje <strong className="text-white font-bold">rozsah prác, použitú chémiu a časový slot vždy individuálne</strong> po krátkej telefonickej konzultácii.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Férová kalkulácia vopred</div>
                      <div className="text-xs text-slate-400 mt-0.5">Časový rozsah a podmienky poznáte ešte pred začatím prác.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Kontrola pred platbou</div>
                      <div className="text-xs text-slate-400 mt-0.5">Platíte až vtedy, keď si výsledok osobne skontrolujete.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Diagnostic Call Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-red-500/40 bg-gradient-to-b from-white/[0.10] to-white/[0.04] backdrop-blur-2xl text-white p-7 sm:p-9 relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                  <div className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-2">
                    RÝCHLY ODHAD CEZ TELEFÓN
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white mb-3">
                    Konzultácia stavu vozidla do 2 minút
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Popíšte model auta, typ znečistenia alebo rozmery sedačky priamo Borisovi. Okamžite vám navrhne postup a najbližší voľný termín.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-center text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/35 active:scale-[0.98] border border-red-400/40"
                    >
                      <Phone className="w-4 h-4 fill-white" />
                      <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
                    </a>
                    <div className="text-center text-slate-400 text-[11px] font-mono">
                      Bezplatná a nezáväzná konzultácia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Postup & Objednávka (Ultra-clean Light Section) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
                <span>03</span>
                <span>/</span>
                <span className="text-slate-800">POSTUP & REALIZÁCIA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tighter leading-[1.02]">
                Ako prebieha <br className="hidden sm:inline" />
                <span className="text-slate-900">objednávka a čistenie.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
              Od prvého telefonátu až po odovzdanie voňavého interiéru v 4 jednoduchých, transparentných krokoch bez zbytočnej byrokracie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all space-y-4 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="font-mono text-2xl font-black text-red-600">
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-start">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/20 active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Dohodnúť termín: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. O Značke & Filozofia Majiteľa */}
      <section className="py-24 lg:py-32 relative bg-[#edf2f7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
                  <span>03</span>
                  <span>/</span>
                  <span className="text-slate-800">OSOBNÁ ZODPOVEDNOSŤ</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tighter leading-[1.02]">
                  Prístup, pri ktorom si majiteľ dáva{' '}
                  <span className="text-red-600">naozaj záležať.</span>
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                Značku Tepovač vedie <strong>Boris Hadvig</strong> so sídlom v obci <strong>Slovenský Grob (časť Malý Raj)</strong>. Veríme, že čisté auto a svieža sedačka nie sú len o povrchovom povysávaní, ale o dôkladnej hĺbkovej hygiene.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] space-y-2">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 w-fit">
                    <ShieldCheck className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Osobná garancia</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Boris Hadvig osobne dohliada na každé vozidlo a sedačku. Žiadni neskúsení brigádnici.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] space-y-2">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 w-fit">
                    <Sparkles className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Certifikovaná chémia</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Neagresívne prípravky bezpečné pre deti, alergikov i domáce zvieratá.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/o-nas"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 hover:text-red-600 transition-colors"
                >
                  <span>Prečítajte si viac o našej filozofii</span>
                  <ArrowRight className="w-4 h-4 text-red-600" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Highlight Review Quote Card in pure white */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.07)] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md">
                    OVERENÉ HODNOTENIE
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl text-slate-900 font-medium leading-relaxed italic">
                  „Odporúčam, auto krásne čisté, voňavé a vyleštené, pán si dal naozaj záležať. Určite využijem služby znova.“
                </blockquote>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-950 text-base">Peter Holba</div>
                    <div className="text-xs text-slate-500">Kompletný detailing vozidla • Slovenský Grob</div>
                  </div>
                  <div className="text-xs font-bold text-red-600 font-mono">
                    100% SPOKOJNOSŤ
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Recenzie & Skúsenosti: Deep Luxury Dark Carousel */}
      <section className="py-24 lg:py-32 relative bg-[#0a0f1d] text-white border-y border-white/10 overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-red-400 tracking-wider">
                <span>04</span>
                <span>/</span>
                <span className="text-white">HODNOTENIA KLIENTOV</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter leading-[1.02]">
                Hodnotenia <br className="hidden sm:inline" />
                <span className="text-red-500">našich zákazníkov.</span>
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-300 max-w-sm leading-relaxed">
                Skutočné hodnotenia spokojných klientov zo Slovenského Grobu (Malý Raj) a celého okolia.
              </p>
              <Link
                to="/recenzie"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-red-400 transition-colors"
              >
                <span>Zobraziť všetky recenzie</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </Link>
            </div>
          </div>

          {/* Shadcn Carousel for Reviews */}
          <div className="relative">
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
                    <Card className="p-7 rounded-2xl bg-white/[0.06] border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between h-full backdrop-blur-xl shadow-xl space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1 text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">
                            {rev.date}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                          „{rev.quote}“
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="font-bold text-white text-sm">
                          {rev.author}
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          {rev.location}
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </section>

      {/* 6. FAQ Sekcia: Asymmetric Split with Native shadcn Accordion */}
      <section className="py-24 lg:py-32 relative bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
                <span>05</span>
                <span>/</span>
                <span className="text-slate-800">ČASTO KLADENÉ OTÁZKY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter leading-[1.02]">
                Všetko, čo potrebujete <br />
                <span className="text-red-600">vedieť vopred.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
                Máte špecifickú otázku k znečisteniu, typu materiálu alebo dojazdu k vám domov? Radi vám poradíme telefonicky.
              </p>
              <div className="pt-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4 fill-red-600" />
                  <span>Priame info: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-3">
                {FAQS.slice(0, 5).map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="rounded-2xl bg-slate-50/80 border border-slate-200/90 px-6 transition-all shadow-xs hover:border-slate-300 hover:bg-white hover:shadow-md"
                  >
                    <AccordionTrigger className="py-4 text-left font-bold text-slate-950 hover:text-red-600 text-sm sm:text-base hover:no-underline">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-xs sm:text-sm leading-relaxed pb-4 pl-7">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>
        </div>
      </section>

      {/* Reusable Service Detail Dialog */}
      <ServiceDetailDialog
        service={dialogService}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />

      {/* 7. Mapa & Lokalita Malý Raj */}
      <LocationContactSection />

      {/* 8. Bottom CTA Banner: High-End Dark Carbon Slate */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#090d16] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-3 max-w-xl text-left relative z-10">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-wider block">
                REZERVÁCIA TERMÍNU
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter">
                Dohodnite si termín čistenia ešte dnes.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Zavolajte priamo Borisovi Hadvigovi. Pôsobíme v Malom Raji, Senci, Pezinku, Bratislave a priľahlých obciach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 relative z-10">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-6 py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-red-600/25 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <Link
                to="/kontakt"
                className="px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <MapPin className="w-4 h-4 text-slate-300" />
                <span>Kde nás nájdete</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
