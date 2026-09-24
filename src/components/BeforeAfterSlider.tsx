import React, { useState } from 'react';
import { SlidersHorizontal, X, ZoomIn } from 'lucide-react';
import interierPredImg from '../assets/images/interierpred.png';
import interierPoImg from '../assets/images/interierpo.png';

import interier1 from '../assets/images/interier1.jfif';
import interier2 from '../assets/images/interier2.jfif';
import interier3 from '../assets/images/interier3.jfif';
import interier4 from '../assets/images/interier4.jpg';
import interier5 from '../assets/images/interier5.jpg';
import interier6 from '../assets/images/interier6.jpg';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const group1 = [
    { src: interier1, title: 'Detail interiéru 1' },
    { src: interier2, title: 'Detail interiéru 2' },
    { src: interier3, title: 'Detail interiéru 3' },
  ];

  const group2 = [
    { src: interier4, title: 'Detail interiéru 4' },
    { src: interier5, title: 'Detail interiéru 5' },
    { src: interier6, title: 'Detail interiéru 6' },
  ];

  return (
    <section id="galeria" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
            GALÉRIA - REÁLNE VÝSLEDKY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white mb-4">
            Interaktívne porovnanie: Pred a Po
          </h2>
          <p className="text-zinc-400 text-base">
            Potiahnutím posuvníka v strede si môžete porovnať reálny výsledok pred a po hĺbkovom vyčistení.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 select-none mb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            
            {/* AFTER Image (Bottom Layer) */}
            <img
              src={interierPoImg}
              alt="Vyčistený stav Po"
              className="absolute inset-0 w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-[#dc2626] text-white font-black text-xs uppercase tracking-wider backdrop-blur-md shadow-lg z-10">
              PO (Vyčistené)
            </div>

            {/* BEFORE Image (Top Layer clipped by sliderPos) */}
            <div
              className="absolute inset-0 select-none z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={interierPredImg}
                alt="Znečistený stav Pred"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-zinc-900/90 text-zinc-200 font-black text-xs uppercase tracking-wider border border-zinc-700 backdrop-blur-md shadow-lg">
                PRED (Znečistené)
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#dc2626] shadow-[0_0_15px_#dc2626] cursor-ew-resize z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-xl border-2 border-white">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Hidden HTML Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Posuvník pred a po"
            />
          </div>

          <div className="p-4 bg-zinc-950 border-t border-zinc-800 text-center text-xs text-zinc-400">
            Potiahnite kurzorom alebo prstom doľava / doprava pre porovnanie detailov.
          </div>
        </div>

        {/* Photogallery Grid Section */}
        <div className="pt-12 border-t border-zinc-900">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#dc2626] uppercase mb-2 block">
              FOTOGALÉRIA INTERIÉROV
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
              Ukážky vyčistených interiérov
            </h3>
          </div>

          {/* Row 1: Images 1-3 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                Séria 1
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {group1.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img.src)}
                    className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-lg hover:border-[#dc2626]/60 transition-all"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 rounded-full bg-[#dc2626] text-white shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Images 4-6 */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                Séria 2
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {group2.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img.src)}
                    className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-lg hover:border-[#dc2626]/60 transition-all"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 rounded-full bg-[#dc2626] text-white shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-zinc-800 hover:bg-[#dc2626] text-white transition-colors"
              aria-label="Zatvoriť"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Zväčšený náhľad"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-zinc-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};

