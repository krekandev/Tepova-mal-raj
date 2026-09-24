import React from 'react';
import { PriceCalculator } from '../components/PriceCalculator';

interface CalculatorPageProps {
  onSelectEstimate: (summary: string, price: number) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onSelectEstimate }) => {
  return (
    <div className="pt-28 pb-16 bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-2">
          INTERAKTÍVNY CENNÍK
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
          Online Kalkulačka Ceny Tepovania
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Zvoľte typ vozidla alebo nábytku, vyberte požadovaný rozsah prác a získajte okamžitý odhad ceny.
        </p>
      </div>

      <PriceCalculator onSelectEstimate={onSelectEstimate} />
    </div>
  );
};
