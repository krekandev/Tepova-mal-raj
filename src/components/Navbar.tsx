import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { BUSINESS_INFO, logoImg } from '../data';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Služby', path: '/sluzby' },
    { name: 'Kalkulačka', path: '/kalkulacka' },
    { name: 'Galéria', path: '/ukazky' },
    { name: 'Recenzie', path: '/recenzie' },
    { name: 'Lokalita & Kontakt', path: '/kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl shadow-black/80'
          : 'bg-gradient-to-b from-black/95 via-black/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-auto flex items-center justify-center p-0.5 rounded-lg border border-zinc-800 bg-zinc-950/80 group-hover:border-[#dc2626]/50 transition-all">
              <img
                src={logoImg}
                alt="Tepovač Logo"
                className="h-9 w-auto object-contain max-w-[150px]"
              />
            </div>
            <div>
              <span className="text-xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
                TEPOVAČ
              </span>
              <span className="text-xs text-zinc-400 block font-medium">
                Boris Hadvig
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-[#dc2626] font-bold border border-zinc-800'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Click to Call */}
          <div className="hidden lg:flex items-center gap-2">
            {BUSINESS_INFO.facebookUrl && (
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#dc2626]/50 transition-all"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#dc2626]" />
              </a>
            )}

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#dc2626]/50 transition-all"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-[#dc2626]" />
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm shadow-lg shadow-[#dc2626]/20 hover:shadow-[#dc2626]/35 hover:scale-[1.02] active:scale-[0.98] transition-all ml-1"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="p-2.5 rounded-xl bg-[#dc2626] text-white font-bold flex items-center justify-center shadow-md shadow-[#dc2626]/25"
              aria-label="Volat teraz"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-300 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-[#dc2626] font-bold'
                      : 'text-zinc-200 hover:bg-zinc-900 hover:text-[#dc2626]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-base shadow-lg shadow-[#dc2626]/25"
            >
              <Phone className="w-5 h-5" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <div className="pt-2 flex items-center justify-center gap-3">
              {BUSINESS_INFO.facebookUrl && (
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-[#dc2626]" />
                </a>
              )}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#dc2626]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
