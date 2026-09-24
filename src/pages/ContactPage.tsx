import React from 'react';
import { LocationContactSection } from '../components/LocationContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ed2503] block mb-2">
          PRIAMY KONTAKT & PÔSOBNOSŤ
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight mb-4">
          Lokalita, Telefón & Otváracie Hodiny
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Zavolajte nám priamo alebo nás navštívte. Pôsobíme v Bratislave, Senci, Pezinku a priľahlých obciach.
        </p>
      </div>

      <LocationContactSection />
    </div>
  );
};
