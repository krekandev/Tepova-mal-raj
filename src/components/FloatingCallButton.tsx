import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const FloatingCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Instagram button */}
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 flex items-center justify-center shadow-lg shadow-slate-200/50 hover:text-red-600 hover:border-slate-300 hover:scale-105 active:scale-95 transition-all"
        title="Instagram @BorisHadvig"
        aria-label="Instagram @BorisHadvig"
      >
        <Instagram className="w-4 h-4 text-red-600" />
      </a>

      {/* Discreet Call Button */}
      <a
        href={BUSINESS_INFO.phoneTel}
        className="px-4.5 py-3 rounded-full bg-slate-900 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-slate-900/25 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
        aria-label="Zavolať Borisovi Hadvigovi"
      >
        <Phone className="w-3.5 h-3.5 text-red-400 fill-red-400" />
        <span className="hidden sm:inline">Volať: {BUSINESS_INFO.phoneDisplay}</span>
        <span className="sm:hidden">Zavolať</span>
      </a>
    </div>
  );
};
