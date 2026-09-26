import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data';

export const LocationContactSection: React.FC = () => {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Južná 27, 900 26 Slovenský Grob')}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent('Južná 27, 900 26 Slovenský Grob')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="kontakt" className="py-24 lg:py-32 relative bg-[#edf2f7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-slate-400 tracking-wider">
              <span>06</span>
              <span>/</span>
              <span className="text-slate-800">LOKALITA & MOBILNÝ SERVIS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-slate-950 leading-[1.02]">
              Kde nás nájdete <br className="hidden sm:inline" />
              <span className="text-red-600">& kam prídeme.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
            Sídlo prevádzky v lokalite Slovenský Grob (Malý Raj). Mobilný servis poskytujeme v celom okrese Senec, Pezinok, v Bratislave a priľahlých obciach.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* 1. Phone Card: Architectural Dark Slate */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="p-6 rounded-2xl bg-[#090d16] text-white flex items-center justify-between border border-slate-800 transition-all group active:scale-[0.98] shadow-xl hover:shadow-2xl"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-white/10 text-red-500">
                <Phone className="w-5 h-5 fill-red-500" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  TELEFÓN (PO-NE 8-20H)
                </span>
                <span className="text-xl font-black tracking-tight block text-white">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-red-400 group-hover:text-white transition-colors shrink-0 ml-2">
              Zavolať →
            </span>
          </a>

          {/* 2. Address Card */}
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-900 flex items-center justify-between transition-all group shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)]"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  ADRESA PREVÁDZKY
                </span>
                <span className="text-sm font-bold truncate block text-slate-900">
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 shrink-0 ml-2" />
          </a>

          {/* 3. Socials Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] transition-all">
            <div className="flex items-center justify-between w-full gap-2">
              <div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  SOCIÁLNE SIETE
                </span>
                <span className="text-sm font-bold text-slate-900 block">
                  Facebook & Instagram
                </span>
              </div>
              <div className="flex items-center gap-2">
                {BUSINESS_INFO.facebookUrl && (
                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Tepovač"
                    title="Facebook Tepovač"
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 transition-all"
                  >
                    <Facebook className="w-4 h-4 text-red-600" />
                  </a>
                )}
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @BorisHadvig"
                  title="Instagram @BorisHadvig"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 transition-all"
                >
                  <Instagram className="w-4 h-4 text-red-600" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Google Maps Interactive Card */}
        <div className="mb-10 rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.07)]">
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Centrála prevádzky Malý Raj
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm shrink-0 active:scale-[0.98]"
            >
              <Navigation className="w-4 h-4" />
              <span>Spustiť navigáciu</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 relative bg-slate-100">
            <iframe
              title="Google Maps - Tepovač Malý Raj"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-slate-200/70 space-y-5">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200/60">
            <Navigation className="w-5 h-5 text-red-600" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950">
                Oblasť pôsobenia mobilného servisu
              </h3>
              <p className="text-xs text-slate-500">
                Tepovanie nábytku a autodetailing vykonávame priamo u vás na adrese v týchto lokalitách:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/70 text-slate-900 transition-all shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-950 text-sm">{area.name}</span>
                  <span className="text-[10px] font-mono font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                    {area.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
