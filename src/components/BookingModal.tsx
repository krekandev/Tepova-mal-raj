import React, { useState } from 'react';
import { X, Phone, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceName?: string;
  calcPriceEstimate?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedServiceName,
  calcPriceEstimate,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bratislava');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-black border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-1 block">
            REZERVÁCIA TERMÍNU
          </span>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
            Online rezervácia
          </h3>
          {selectedServiceName && (
            <p className="text-xs text-[#dc2626] font-semibold mt-1">
              Vybraná služba: {selectedServiceName} {calcPriceEstimate ? `(od ${calcPriceEstimate} €)` : ''}
            </p>
          )}
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#dc2626] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#dc2626]/25">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
              Ďakujeme za záujem!
            </h4>
            <p className="text-xs text-zinc-300">
              Boris Hadvig vás zaregistroval a čoskoro vám zavolá na číslo{' '}
              <strong className="text-white">{phone}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#dc2626] text-white font-bold text-xs"
            >
              Zatvoriť
            </button>
          </div>
        ) : (
          <div>
            {/* Instant Phone Call Option */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full mb-6 py-3.5 px-4 rounded-2xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#dc2626]/20 transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Rýchlejšie? Zavolať ihneď: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <div className="relative text-center my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800" />
              </div>
              <span className="relative px-3 bg-zinc-950 text-[11px] font-bold text-zinc-500 uppercase">
                alebo vyplňte kontakt
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Meno *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ján Novák"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#dc2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Telefón *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0911 850 522"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-[#dc2626]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">
                  Lokalita
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#dc2626]"
                >
                  <option value="Bratislava">Bratislava</option>
                  <option value="Senec">Senec</option>
                  <option value="Pezinok">Pezinok</option>
                  <option value="Iné okolie">Okolie (Bernolákovo, Ivanka...)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#dc2626]/20"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Odoslať žiadosť o termín</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
