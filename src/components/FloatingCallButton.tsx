import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FloatingCallProps {
  onOpenBooking: () => void;
}

export const FloatingCallButton: React.FC<FloatingCallProps> = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      {/* Direct Instagram button */}
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-200 flex items-center justify-center shadow-2xl hover:text-[#dc2626] hover:border-[#dc2626]/50 hover:scale-105 active:scale-95 transition-all"
        title="Instagram @BorisHadvig"
      >
        <Instagram className="w-5 h-5 text-[#dc2626]" />
      </a>

      {/* Direct Call Button */}
      <a
        href={BUSINESS_INFO.phoneTel}
        className="px-5 py-3.5 rounded-full bg-[#dc2626] text-white font-extrabold text-xs sm:text-sm flex items-center gap-2.5 shadow-2xl shadow-[#dc2626]/30 hover:bg-[#b91c1c] hover:scale-105 active:scale-95 transition-all group"
      >
        <Phone className="w-4 h-4 fill-white group-hover:rotate-12 transition-transform" />
        <span className="hidden xs:inline">Volať: {BUSINESS_INFO.phoneDisplay}</span>
        <span className="xs:hidden">Volať</span>
      </a>
    </div>
  );
};
