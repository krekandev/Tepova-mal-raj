import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import { BUSINESS_INFO, logoImg, logoDarkHeader } from '../data';
import { Button } from './ui/button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Úvod', path: '/' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'O nás', path: '/o-nas' },
    { name: 'Hodnotenia', path: '/recenzie' },
    { name: 'Kontakt & Lokalita', path: '/kontakt' },
  ];

  const isHeroDark = location.pathname === '/' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroDark
          ? 'bg-slate-950/40 backdrop-blur-xl border-b border-white/10 py-4 text-white shadow-2xl'
          : scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.04)] text-slate-900'
          : 'bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-4 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={isHeroDark ? logoDarkHeader : logoImg}
              alt="Tepovač - Boris Hadvig"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className={`text-lg font-black tracking-tight block leading-none transition-colors ${
                isHeroDark ? 'text-white' : 'text-slate-900'
              }`}>
                TEPOVAČ
              </span>
              <span className={`text-[11px] font-medium block mt-0.5 transition-colors ${
                isHeroDark ? 'text-slate-300/80' : 'text-slate-500'
              }`}>
                Malý Raj • Boris Hadvig
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center gap-1 p-1 rounded-xl backdrop-blur-md border transition-colors ${
            isHeroDark
              ? 'bg-white/[0.08] border-white/15'
              : 'bg-slate-100/90 border-slate-200/70'
          }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isHeroDark
                      ? isActive
                        ? 'bg-white/20 text-white font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                      : isActive
                        ? 'bg-white text-slate-950 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
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
                className={`p-2 rounded-lg border transition-all ${
                  isHeroDark
                    ? 'bg-white/[0.08] border-white/15 text-slate-200 hover:text-white hover:bg-white/15'
                    : 'bg-slate-100 border-slate-200/80 text-slate-600 hover:text-slate-950 hover:bg-white'
                }`}
                title="Facebook Tepovač"
                aria-label="Facebook Tepovač"
              >
                <Facebook className="w-4 h-4 text-red-500" />
              </a>
            )}

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all ${
                isHeroDark
                  ? 'bg-white/[0.08] border-white/15 text-slate-200 hover:text-white hover:bg-white/15'
                  : 'bg-slate-100 border-slate-200/80 text-slate-600 hover:text-slate-950 hover:bg-white'
              }`}
              title="Instagram @BorisHadvig"
              aria-label="Instagram @BorisHadvig"
            >
              <Instagram className="w-4 h-4 text-red-500" />
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm text-white transition-all active:scale-[0.98] ml-1
                         bg-gradient-to-b from-red-500/90 to-red-700/95 hover:from-red-500 hover:to-red-600
                         backdrop-blur-xl border border-red-400/40 hover:border-red-300/70
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(220,38,38,0.35)]"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="p-2 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center shadow-xs active:scale-[0.98]"
              aria-label="Zavolať ihneď"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isHeroDark
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200/80 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Zavolať: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <div className="pt-1 flex items-center justify-center gap-2.5">
              {BUSINESS_INFO.facebookUrl && (
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
                  aria-label="Facebook Tepovač"
                >
                  <Facebook className="w-3.5 h-3.5 text-red-600" />
                  <span>Facebook</span>
                </a>
              )}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
                aria-label="Instagram @BorisHadvig"
              >
                <Instagram className="w-3.5 h-3.5 text-red-600" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
