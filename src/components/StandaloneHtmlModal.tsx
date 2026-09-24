import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, Sparkles } from 'lucide-react';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="sk" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tepovač - Profesionálne čistenie a tepovanie áut & nábytku | Boris Hadvig</title>
  <meta name="description" content="Profesionálne čistenie a tepovanie áut, leštenie karosérie a hĺbkové tepovanie nábytku. Boris Hadvig - Bratislava, Senec, Pezinok a okolie. Volajte 0911 850 522.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome Icons CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: '#ed2503',
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Space Grotesk"', 'sans-serif'],
          },
        }
      }
    }
  </script>
</head>
<body class="bg-black text-zinc-100 antialiased selection:bg-[#ed2503] selection:text-white">

  <!-- HEADER / NAVBAR -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <div>
          <span class="text-xl font-extrabold font-heading text-white tracking-tight">TEPOVAČ</span>
          <span class="text-xs text-zinc-400 block font-medium">Boris Hadvig</span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
        <a href="#o-nas" class="hover:text-[#ed2503] transition-colors">O nás</a>
        <a href="#sluzby" class="hover:text-[#ed2503] transition-colors">Služby</a>
        <a href="#recenzie" class="hover:text-[#ed2503] transition-colors">Recenzie</a>
        <a href="#kontakt" class="hover:text-[#ed2503] transition-colors">Kontakt</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="https://www.instagram.com/BorisHadvig" target="_blank" class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#ed2503]">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="tel:+421911850522" class="px-5 py-2.5 rounded-xl bg-[#ed2503] text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-[#ed2503]/20 hover:scale-105 transition-all">
          <i class="fa-solid fa-phone"></i>
          <span>0911 850 522</span>
        </a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="relative min-h-screen pt-36 pb-20 flex items-center justify-center bg-black overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 text-center relative z-10">
      <span class="text-xs font-bold tracking-widest text-[#ed2503] uppercase mb-4 block">
        PROFESIONÁLNE ČISTENIE • BORIS HADVIG
      </span>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-tight mb-6">
        Profesionálne čistenie a tepovanie <span class="text-[#ed2503]">áut & nábytku</span>
      </h1>
      <p class="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
        Detailingové služby a hĺbkové tepovanie s dôrazom na precíznosť. Pôsobíme v lokalitách <strong class="text-white">Bratislava, Senec, Pezinok a okolie</strong>.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
        <a href="tel:+421911850522" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#ed2503] text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-xl shadow-[#ed2503]/25">
          <i class="fa-solid fa-phone"></i> Zavolať teraz: 0911 850 522
        </a>
        <a href="#sluzby" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-700 text-white font-bold text-base hover:bg-zinc-800">
          Naše služby
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-zinc-800">
        <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
          <div class="text-2xl font-bold text-[#ed2503] font-heading">800+</div>
          <div class="text-xs text-zinc-400">Sledovateľov na IG</div>
        </div>
        <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
          <div class="text-2xl font-bold text-[#ed2503] font-heading">5.0 ★</div>
          <div class="text-xs text-zinc-400">Hodnotenie zákazníkov</div>
        </div>
        <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
          <div class="text-2xl font-bold text-[#ed2503] font-heading">100%</div>
          <div class="text-xs text-zinc-400">Precízna práca</div>
        </div>
        <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
          <div class="text-2xl font-bold text-[#ed2503] font-heading">Mobilné</div>
          <div class="text-xs text-zinc-400">Tepovanie u vás doma</div>
        </div>
      </div>
    </div>
  </section>

  <!-- O NÁS SECTION -->
  <section id="o-nas" class="py-20 bg-zinc-950">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-[#ed2503] text-xs font-bold uppercase tracking-wider block mb-2">O nás</span>
          <h2 class="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            Keď si pán dá naozaj záležať
          </h2>
          <p class="text-zinc-300 leading-relaxed mb-4">
            Značku <strong class="text-white">Tepovač</strong> založil majiteľ Boris Hadvig s cieľom priniesť maximálnu kvalitu čistenia vozidiel a čalúneného nábytku.
          </p>
          <p class="text-zinc-300 leading-relaxed mb-6">
            Každé auto aj sedačka dostáva nekompromisnú starostlivosť. Používame špičkovú extrakčnú technológiu a šetrnú, no účinnú chémiu.
          </p>
          <div class="p-5 rounded-2xl bg-black border border-zinc-800 italic text-zinc-200 text-sm">
            "Odporúčam, auto krásne čisté, voňavé a vyleštené, pán si dal naozaj záležať."
            <div class="text-xs text-zinc-400 font-sans not-italic mt-2 font-bold">— Peter Holba</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-6 rounded-2xl bg-black border border-zinc-800">
            <i class="fa-solid fa-gem text-[#ed2503] text-2xl mb-3"></i>
            <h3 class="font-bold text-white mb-1">Precíznosť</h3>
            <p class="text-xs text-zinc-400">Čistenie každého detailu a štrbiny.</p>
          </div>
          <div class="p-6 rounded-2xl bg-black border border-zinc-800">
            <i class="fa-solid fa-shield-halved text-[#ed2503] text-2xl mb-3"></i>
            <h3 class="font-bold text-white mb-1">Špičková chémia</h3>
            <p class="text-xs text-zinc-400">Bezpečná pre kožu a textil.</p>
          </div>
          <div class="p-6 rounded-2xl bg-black border border-zinc-800">
            <i class="fa-solid fa-users text-[#ed2503] text-2xl mb-3"></i>
            <h3 class="font-bold text-white mb-1">800+ Sledovateľov</h3>
            <p class="text-xs text-zinc-400">Sledujte prácu na IG @BorisHadvig.</p>
          </div>
          <div class="p-6 rounded-2xl bg-black border border-zinc-800">
            <i class="fa-solid fa-location-dot text-[#ed2503] text-2xl mb-3"></i>
            <h3 class="font-bold text-white mb-1">Mobilná služba</h3>
            <p class="text-xs text-zinc-400">Bratislava, Senec, Pezinok.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SLUŽBY SECTION -->
  <section id="sluzby" class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl sm:text-5xl font-extrabold font-heading text-white mb-4">Naše Služby</h2>
      <p class="text-zinc-400 max-w-2xl mx-auto mb-12">Kompletné služby pre vaše vozidlo aj domácnosť.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-left flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-[#ed2503]/10 text-[#ed2503] flex items-center justify-center text-xl mb-6">
              <i class="fa-solid fa-car"></i>
            </div>
            <h3 class="text-xl font-bold font-heading text-white mb-3">1. Čistenie & Tepovanie áut</h3>
            <p class="text-zinc-400 text-sm mb-6">Hĺbkové tepovanie sedadiel, čistenie kože, stropnice, kobercov, dezinfekcia a ošetrenie plastov.</p>
          </div>
          <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span class="text-[#ed2503] font-bold text-lg">od 50 €</span>
            <a href="tel:+421911850522" class="px-4 py-2 rounded-xl bg-[#ed2503] text-white font-bold text-xs">Objednať</a>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-left flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-[#ed2503]/10 text-[#ed2503] flex items-center justify-center text-xl mb-6">
              <i class="fa-solid fa-spray-can-sparkles"></i>
            </div>
            <h3 class="text-xl font-bold font-heading text-white mb-3">2. Leštenie & Voskovanie karosérie</h3>
            <p class="text-zinc-400 text-sm mb-6">Strojové leštenie laku, odstránenie jemných škrabancov, vysoký lesk a ochranný vosk/keramika.</p>
          </div>
          <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span class="text-[#ed2503] font-bold text-lg">od 90 €</span>
            <a href="tel:+421911850522" class="px-4 py-2 rounded-xl bg-[#ed2503] text-white font-bold text-xs">Objednať</a>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-left flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-[#ed2503]/10 text-[#ed2503] flex items-center justify-center text-xl mb-6">
              <i class="fa-solid fa-couch"></i>
            </div>
            <h3 class="text-xl font-bold font-heading text-white mb-3">3. Hĺbkové tepovanie nábytku</h3>
            <p class="text-zinc-400 text-sm mb-6">Tepovanie sedačiek, kresiel, stoličiek a matracov priamo u vás doma. Odstránenie škvŕn a pachu.</p>
          </div>
          <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span class="text-[#ed2503] font-bold text-lg">od 30 €</span>
            <a href="tel:+421911850522" class="px-4 py-2 rounded-xl bg-[#ed2503] text-white font-bold text-xs">Objednať</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RECENZIE SECTION -->
  <section id="recenzie" class="py-20 bg-zinc-950">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-12">Recenzie Zákazníkov</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="p-8 rounded-3xl bg-black border border-zinc-800 text-left">
          <div class="text-[#ed2503] mb-3">★★★★★</div>
          <p class="text-zinc-200 italic font-serif text-lg mb-4">"Odporúčam, auto krásne čisté, voňavé a vyleštené, pán si dal naozaj záležať."</p>
          <div class="font-bold text-white font-heading">— Peter Holba</div>
        </div>

        <div class="p-8 rounded-3xl bg-black border border-zinc-800 text-left">
          <div class="text-[#ed2503] mb-3">★★★★★</div>
          <p class="text-zinc-200 italic font-serif text-lg mb-4">"Odporúčame, auto krásne vyčistené."</p>
          <div class="font-bold text-white font-heading">— Michaela Čalfová</div>
        </div>
      </div>
    </div>
  </section>

  <!-- KONTAKT & LOKALITA -->
  <section id="kontakt" class="py-20 bg-black">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-3xl sm:text-5xl font-extrabold font-heading text-white mb-4">Kontakt & Lokalita</h2>
        <p class="text-zinc-400">Pôsobíme v Senci, Bratislave, Pezinku a okolí.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <a href="tel:+421911850522" class="p-8 rounded-3xl bg-[#ed2503] text-white flex items-center justify-between font-bold">
          <div>
            <div class="text-xs uppercase tracking-wider text-white/80">Zavolajte nám</div>
            <div class="text-3xl font-heading mt-1">0911 850 522</div>
            <div class="text-xs text-white/90 mt-1">+421 911 850 522</div>
          </div>
          <i class="fa-solid fa-phone text-3xl"></i>
        </a>

        <div class="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3">
          <div class="text-lg font-bold text-white font-heading"><i class="fa-solid fa-location-dot text-[#ed2503]"></i> Južná 27, 900 26</div>
          <div class="text-sm text-zinc-300">Majiteľ: Boris Hadvig - Tepovač</div>
          <div class="text-sm text-zinc-400">Lokalita: Bratislava, Senec, Pezinok a okolie</div>
          <a href="https://www.instagram.com/BorisHadvig" target="_blank" class="inline-flex items-center gap-2 text-[#ed2503] text-sm font-bold pt-2">
            <i class="fa-brands fa-instagram"></i> Instagram @BorisHadvig
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-black border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
    © ${new Date().getFullYear()} Tepovač (Boris Hadvig). Južná 27, 900 26. Všetky práva vyhradené.
  </footer>

</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tepovac-boris-hadvig.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ed2503]/20 text-[#ed2503] flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Samostaný HTML5 + Tailwind CDN Kód
              </h3>
              <p className="text-xs text-zinc-400">
                Kompletný 1-súborový kód pripravený pre priamy copy-paste alebo stiahnutie.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-black border border-zinc-800 text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Code Box */}
        <div className="my-4 flex-1 overflow-hidden rounded-2xl bg-black border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-y-auto">
          <pre className="whitespace-pre-wrap break-words">{standaloneHtmlCode}</pre>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#ed2503]" />
            <span>Obsahuje Tailwind CSS CDN + FontAwesome CDN + Google Fonts + plné dáta</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#ed2503] hover:bg-[#c11e02] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Kopírované!' : 'Kopírovať HTML kód'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs border border-zinc-800 flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-[#ed2503]" />
              <span>Stiahnuť HTML súbor</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
