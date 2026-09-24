import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data';

interface LocationContactProps {
  initialService?: string;
}

export const LocationContactSection: React.FC<LocationContactProps> = () => {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Tepovač, Južná 27, 900 26 Slovenský Grob')}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent('Južná 27, 900 26 Slovenský Grob')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="kontakt" className="py-20 bg-black relative overflow-hidden border-t border-zinc-900">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
            KONTAKT & LOKALITA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
            Kontaktujte nás
          </h2>
        </div>

        {/* Contact Info Grid (Compact Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* 1. Phone */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="p-5 rounded-2xl bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-between shadow-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 block">
                  Telefón (Po-Ne 8-20h)
                </span>
                <span className="text-xl font-black font-['Space_Grotesk'] tracking-tight">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </div>
            </div>
            <span className="text-xs font-bold underline underline-offset-2 shrink-0 ml-2">
              Zavolať →
            </span>
          </a>

          {/* 2. Address */}
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-white flex items-center justify-between transition-colors group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0">
                <MapPin className="w-5 h-5 text-[#dc2626]" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Adresa prevádzky
                </span>
                <span className="text-sm font-bold font-['Space_Grotesk'] truncate block">
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white shrink-0 ml-2" />
          </a>

          {/* 3. Socials */}
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center justify-between w-full gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 shrink-0">
                Sociálne siete:
              </span>
              <div className="flex items-center gap-2">
                {BUSINESS_INFO.facebookUrl && (
                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#dc2626] hover:bg-zinc-800 text-[#dc2626] transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#dc2626] hover:bg-zinc-800 text-[#dc2626] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Google Maps Interactive Card */}
        <div className="mb-10 rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-6 border-b border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#dc2626]" />
              <div>
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  Mapa prevádzky
                </h3>
                <p className="text-xs text-zinc-400">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors shadow-lg shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Navigovať</span>
            </a>
          </div>

          <div className="w-full h-72 sm:h-80 relative bg-zinc-900">
            <iframe
              title="Google Maps - Tepovač"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-800">
            <Navigation className="w-5 h-5 text-[#dc2626]" />
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Lokalita mobilného čistenia (Bratislava, Senec, Pezinok a okolie)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICE_AREAS.map((area, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-black border border-zinc-800/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-sm font-['Space_Grotesk']">{area.name}</span>
                  <span className="text-[10px] font-semibold text-[#dc2626] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {area.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


