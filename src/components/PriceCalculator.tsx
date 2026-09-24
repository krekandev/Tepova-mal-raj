import React, { useState } from 'react';
import { Calculator, Check, Sparkles, ArrowRight, ShieldCheck, Car, Sofa, Phone } from 'lucide-react';
import { CalculatorState } from '../types';
import { BUSINESS_INFO } from '../data';

interface PriceCalculatorProps {
  onSelectEstimate: (summary: string, price: number) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onSelectEstimate }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    category: 'auto',
    vehicleType: 'sedan',
    furnitureType: 'gauc',
    packageType: 'complete',
    addons: {
      ozon: true,
      leatherProtection: false,
      textileProtection: false,
      petHairRemoval: false,
    },
  });

  const calculatePrice = (): number => {
    let base = 0;
    if (calcState.category === 'auto') {
      const vehicleMultipliers = {
        hatchback: 50,
        sedan: 60,
        suv: 70,
        van: 85,
      };
      base = vehicleMultipliers[calcState.vehicleType] || 60;

      if (calcState.packageType === 'basic') base -= 15;
      if (calcState.packageType === 'premium') base += 45; // Includes exterior polishing & ceramic wax
    } else {
      const furniturePrices = {
        gauc: 45,
        kreslo: 20,
        stolicky: 15,
        matrac: 30,
      };
      base = furniturePrices[calcState.furnitureType] || 45;

      if (calcState.packageType === 'complete') base += 20;
      if (calcState.packageType === 'premium') base += 35;
    }

    // Addons
    if (calcState.addons.ozon) base += 15;
    if (calcState.addons.leatherProtection) base += 20;
    if (calcState.addons.textileProtection) base += 15;
    if (calcState.addons.petHairRemoval) base += 15;

    return base;
  };

  const totalPrice = calculatePrice();

  const getSummaryText = (): string => {
    if (calcState.category === 'auto') {
      const vNames = { hatchback: 'Hatchback / Malé auto', sedan: 'Sedan / Kombi', suv: 'SUV / Crossover', van: 'Van / 7-miestne' };
      const pNames = { basic: 'Čistenie interiéru', complete: 'Kompletný hĺbkový detail interiéru', premium: 'Komplet Interiér + Leštenie & Voskovanie laku' };
      return `${vNames[calcState.vehicleType]} - ${pNames[calcState.packageType]}`;
    } else {
      const fNames = { gauc: 'Sedacia súprava / Gauč', kreslo: 'Kreslo', stolicky: 'Jedálenské stoličky (sada)', matrac: 'Obojstranný matrac' };
      return `${fNames[calcState.furnitureType]} - Hĺbkové tepovanie`;
    }
  };

  return (
    <section id="kalkulacka" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
            INTERAKTÍVNA KALKULAČKA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white mb-3">
            Orientačná kalkulačka tepovania
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Vyberte si kategóriu, veľkosť vozidla alebo nábytku a zistite odhadovanú cenu za pár sekúnd.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Category Selector Tabs without Emojis */}
          <div className="grid grid-cols-2 gap-3 mb-8 p-1.5 rounded-2xl bg-black border border-zinc-800">
            <button
              onClick={() => setCalcState({ ...calcState, category: 'auto' })}
              className={`py-3 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                calcState.category === 'auto'
                  ? 'bg-[#dc2626] text-white shadow-md shadow-[#dc2626]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Čistenie & Tepovanie Áut</span>
            </button>
            <button
              onClick={() => setCalcState({ ...calcState, category: 'furniture' })}
              className={`py-3 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                calcState.category === 'furniture'
                  ? 'bg-[#dc2626] text-white shadow-md shadow-[#dc2626]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sofa className="w-4 h-4" />
              <span>Tepovanie Nábytku</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Options Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Vehicle / Furniture Option */}
              {calcState.category === 'auto' ? (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    1. Typ Vozidla
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'hatchback', label: 'Hatchback / Malé', desc: 'Golf, Fabia, Polo' },
                      { id: 'sedan', label: 'Sedan / Kombi', desc: 'Passat, Octavia, A4' },
                      { id: 'suv', label: 'SUV / Crossover', desc: 'Tiguan, Q7, X5' },
                      { id: 'van', label: 'Van / 7-Miestne', desc: 'Multivan, Sharan' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCalcState({ ...calcState, vehicleType: item.id as any })}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          calcState.vehicleType === item.id
                            ? 'bg-zinc-900 border-[#dc2626] text-white shadow-md'
                            : 'bg-black border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] text-zinc-500">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    1. Typ Nábytku
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { id: 'gauc', label: 'Sedacia súprava / Gauč', desc: 'Rohová alebo L-tvar' },
                      { id: 'kreslo', label: 'Kreslo / Ušiak', desc: 'Samostatné kreslo' },
                      { id: 'stolicky', label: 'Jedálenské stoličky', desc: 'Sada 4-6 kusov' },
                      { id: 'matrac', label: 'Matrac', desc: 'Manželský obojstranný' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCalcState({ ...calcState, furnitureType: item.id as any })}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          calcState.furnitureType === item.id
                            ? 'bg-zinc-900 border-[#dc2626] text-white shadow-md'
                            : 'bg-black border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                        <div className="text-[11px] text-zinc-500">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Package Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  2. Rozsah Služieb
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'basic', label: 'Základné Čistenie', desc: 'Extrakčné vysávanie a povrchové pretretie' },
                    { id: 'complete', label: 'Kompletný Detail (Odporúčame)', desc: 'Hĺbkové tepovanie sedadiel, plasty, stropnica, dezinfekcia' },
                    { id: 'premium', label: 'Prémiový Balík + Leštenie / Vosk', desc: 'Komplet interiér + ručné leštenie a voskovanie laku' },
                  ].map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setCalcState({ ...calcState, packageType: pkg.id as any })}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        calcState.packageType === pkg.id
                          ? 'bg-zinc-900 border-[#dc2626] text-white shadow-md'
                          : 'bg-black border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs sm:text-sm">{pkg.label}</div>
                        <div className="text-[11px] text-zinc-400">{pkg.desc}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        calcState.packageType === pkg.id ? 'bg-[#dc2626] border-[#dc2626] text-white' : 'border-zinc-700'
                      }`}>
                        {calcState.packageType === pkg.id && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons checkboxes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  3. Doplnkové Služby
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className="p-3 rounded-xl bg-black border border-zinc-800 flex items-center justify-between cursor-pointer hover:border-zinc-700">
                    <span className="text-xs text-zinc-300 font-medium">Dezinfekcia ozónom (+15 €)</span>
                    <input
                      type="checkbox"
                      checked={calcState.addons.ozon}
                      onChange={(e) => setCalcState({
                        ...calcState,
                        addons: { ...calcState.addons, ozon: e.target.checked }
                      })}
                      className="w-4 h-4 accent-[#dc2626] rounded"
                    />
                  </label>

                  <label className="p-3 rounded-xl bg-black border border-zinc-800 flex items-center justify-between cursor-pointer hover:border-zinc-700">
                    <span className="text-xs text-zinc-300 font-medium">Ochrana / Výživa kože (+20 €)</span>
                    <input
                      type="checkbox"
                      checked={calcState.addons.leatherProtection}
                      onChange={(e) => setCalcState({
                        ...calcState,
                        addons: { ...calcState.addons, leatherProtection: e.target.checked }
                      })}
                      className="w-4 h-4 accent-[#dc2626] rounded"
                    />
                  </label>

                  <label className="p-3 rounded-xl bg-black border border-zinc-800 flex items-center justify-between cursor-pointer hover:border-zinc-700">
                    <span className="text-xs text-zinc-300 font-medium">Impregnácia textilu (+15 €)</span>
                    <input
                      type="checkbox"
                      checked={calcState.addons.textileProtection}
                      onChange={(e) => setCalcState({
                        ...calcState,
                        addons: { ...calcState.addons, textileProtection: e.target.checked }
                      })}
                      className="w-4 h-4 accent-[#dc2626] rounded"
                    />
                  </label>

                  <label className="p-3 rounded-xl bg-black border border-zinc-800 flex items-center justify-between cursor-pointer hover:border-zinc-700">
                    <span className="text-xs text-zinc-300 font-medium">Odstránenie chlpov zvierat (+15 €)</span>
                    <input
                      type="checkbox"
                      checked={calcState.addons.petHairRemoval}
                      onChange={(e) => setCalcState({
                        ...calcState,
                        addons: { ...calcState.addons, petHairRemoval: e.target.checked }
                      })}
                      className="w-4 h-4 accent-[#dc2626] rounded"
                    />
                  </label>
                </div>
              </div>

            </div>

            {/* Price Result Right Box */}
            <div className="lg:col-span-5 bg-black border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#dc2626] mb-1">
                  Odhadovaná Cena
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white my-2">
                  od {totalPrice} €
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed border-b border-zinc-800 pb-4">
                  Cena je konečná vrátane práce a použitej chémie. Pre presnú cenovú ponuku nás neváhajte kontaktovať.
                </div>

                <div className="mt-4 space-y-2 text-xs text-zinc-300">
                  <div className="font-bold text-white mb-2">Zvolený Balík:</div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200">
                    {getSummaryText()}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#dc2626]/20 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Zavolať {BUSINESS_INFO.phoneDisplay}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#dc2626]" />
                  <span>Garancia najvyššej kvality a šetrnosti</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
