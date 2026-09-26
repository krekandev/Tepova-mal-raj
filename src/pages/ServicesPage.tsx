import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';
import { BUSINESS_INFO, FAQS } from '../data';
import { Phone, HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      {/* Header */}
      <div className="pt-32 pb-14 bg-[#edf2f7] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-500 tracking-wider">
              <span>01</span>
              <span>/</span>
              <span className="text-slate-800">KOMPLETNÁ PONUKA SLUŽIEB</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tighter leading-[1.02]">
              Služby tepovania <br className="hidden sm:inline" />
              <span className="text-red-600">& autodetailingu.</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              Prehľad jednotlivých služieb pre vozidlá i domácnosť. Poctivá práca bez skrytých poplatkov priamo v lokalitách Slovenský Grob (Malý Raj), Pezinok, Senec a Bratislava.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Showcase */}
      <ServicesGrid />

      {/* Quality Guarantee in Deep Luxury Dark Stage */}
      <section className="py-24 bg-[#090d16] text-white border-y border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 sm:p-12 lg:p-14 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-red-400 font-semibold uppercase tracking-wider block">
                    BEZ KOMPROMISOV
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Individuálny a poctivý prístup ku každej zákazke
                  </h2>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">
                MALÝ RAJ • BORIS HADVIG
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-3">
                <div className="font-bold text-white flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Jasný odhad vopred</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Podmienky a rozsah prác za tepovanie auta alebo sedačky si vždy upresníme ešte pred začatím prác podľa veľkosti a znečistenia.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-3">
                <div className="font-bold text-white flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Kompletná chémia v cene</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Všetky čistiace a impregnačné prostriedky profesionálnej kvality sú už zahrnuté v servise bez dodatočných príplatkov.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-3">
                <div className="font-bold text-white flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span>Platba až po kontrole</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Platíte až vtedy, keď si vytepované vozidlo alebo nábytok osobne skontrolujete a ste s výsledkom na 100% spokojní.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section on Pure White Canvas */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tighter">
              Často kladené otázky
            </h2>
          </div>

          <Accordion type="single" collapsible defaultValue="services-faq-0" className="w-full space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`services-faq-${idx}`}
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

          {/* Contact Banner in Deep Luxury Dark Stage */}
          <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#090d16] border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-wider block mb-1">
                KONZULTÁCIA NA MIERU
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Máte neštandardnú požiadavku alebo otázku?
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Zavolajte priamo Borisovi Hadvigovi a dohodneme si postup na mieru.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm flex items-center gap-2 shrink-0 shadow-lg shadow-red-600/35 transition-all active:scale-[0.98] border border-red-400/40 relative z-10"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
