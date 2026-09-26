import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, logoImg } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/70 border-t border-slate-200/80 pt-16 pb-28 sm:pb-16 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Tepovač logo" className="h-10 w-auto object-contain" />
              <div>
                <span className="text-xl font-black tracking-tight text-slate-900 block">
                  TEPOVAČ
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Malý Raj • Slovenský Grob
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md">
              Profesionálne hĺbkové tepovanie vozidiel, strojové leštenie karosérie a tepovanie čalúneného nábytku s osobným ručením a prístupom „pán si dal naozaj záležať“.
            </p>

            <div className="text-xs text-slate-700 font-medium">
              Majiteľ: <strong className="text-slate-900">{BUSINESS_INFO.owner}</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-xs">
              Služby & Navigácia
            </div>
            <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-slate-900 transition-colors">Úvodná stránka</Link></li>
              <li><Link to="/sluzby" className="hover:text-slate-900 transition-colors">Služby</Link></li>
              <li><Link to="/o-nas" className="hover:text-slate-900 transition-colors">O nás / Prečo my</Link></li>
              <li><Link to="/recenzie" className="hover:text-slate-900 transition-colors">Hodnotenia zákazníkov</Link></li>
              <li><Link to="/kontakt" className="hover:text-slate-900 transition-colors">Kontakt & Lokalita</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-xs">
              Kontakt & Adresa
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href={BUSINESS_INFO.phoneTel} className="flex items-center gap-2 text-slate-900 font-bold hover:text-red-600 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2">
                  {BUSINESS_INFO.facebookUrl && (
                    <a
                      href={BUSINESS_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Tepovač"
                      title="Facebook Tepovač"
                      className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-2xs"
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
                    className="p-2 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <Instagram className="w-4 h-4 text-red-600" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tepovač (Boris Hadvig). Všetky práva vyhradené.
          </div>
          <div className="text-slate-600">
            Slovenský Grob (Malý Raj) • Pezinok • Senec • Bratislava a okolie
          </div>
        </div>
      </div>
    </footer>
  );
};
