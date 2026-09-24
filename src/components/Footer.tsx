import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, logoImg } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Tepovač logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
                TEPOVAČ
              </span>
            </Link>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              Profesionálne čistenie a tepovanie áut, leštenie karosérie a hĺbkové tepovanie nábytku s prístupom "pán si dal naozaj záležať".
            </p>

            <div className="text-xs text-zinc-300 font-medium">
              Majiteľ: <strong className="text-white">{BUSINESS_INFO.owner}</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Služby & Stránky
            </div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#dc2626] transition-colors">Úvodná stránka</Link></li>
              <li><Link to="/o-nas" className="hover:text-[#dc2626] transition-colors">O nás / Prečo my</Link></li>
              <li><Link to="/sluzby" className="hover:text-[#dc2626] transition-colors">Prehľad služieb & Cenník</Link></li>
              <li><Link to="/kalkulacka" className="hover:text-[#dc2626] transition-colors">Kalkulačka ceny</Link></li>
              <li><Link to="/ukazky" className="hover:text-[#dc2626] transition-colors">Galéria (Pred & Po)</Link></li>
              <li><Link to="/recenzie" className="hover:text-[#dc2626] transition-colors">Hodnotenia zákazníkov</Link></li>
              <li><Link to="/kontakt" className="hover:text-[#dc2626] transition-colors">Kontakt & Lokalita</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Kontakt & Adresa
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href={BUSINESS_INFO.phoneTel} className="flex items-center gap-2 text-[#dc2626] font-bold hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#dc2626] hover:bg-zinc-800 hover:border-[#dc2626] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  {BUSINESS_INFO.facebookUrl && (
                    <a
                      href={BUSINESS_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      title="Facebook"
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#dc2626] hover:bg-zinc-800 hover:border-[#dc2626] transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tepovač (Boris Hadvig). Všetky práva vyhradené.
          </div>
          <div className="flex items-center gap-1">
            <span>Bratislava • Senec • Pezinok a okolie</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
