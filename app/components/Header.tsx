import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Film } from "@/app/types";
import { FilmIllustration } from "./FilmCard"; // Importiamo l'illustrazione se serve come fallback

interface HeaderProps {
  onExploreClick: () => void;
  onNewsletterClick: () => void;
  nextFilm: Film; // <-- Passiamo il prossimo film come prop
  onSelectFilm: (film: Film) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onExploreClick,
  onNewsletterClick,
  nextFilm,
  onSelectFilm,
}) => {
  return (
    <header className="relative bg-retro-navy text-retro-cream overflow-hidden border-b-4 border-retro-orange flex flex-col items-center">
      {/* Sfondo decorativo */}
      <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />

      {/* Contenitore Principale con Grid */}
      {/* Contenitore Principale con Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* COLONNA SINISTRA: Info Cineforum (Prende 7 slot su 12) */}
        <div className="lg:col-span-7 flex flex-col items-center text-center space-y-4 w-full">
          
          {/* Logo */}
          <div className="relative w-full max-w-[380px] md:max-w-[460px] flex justify-center">
            <Image
              src="/images/logo-cineforum.png"
              alt="Cineforum Sotto Le Stelle"
              width={550}
              height={275}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Dettagli Location e Date */}
          <div className="w-full max-w-[380px] md:max-w-[460px] bg-retro-navy/40 border border-retro-cream/10 rounded-2xl p-5 shadow-md backdrop-blur-sm flex flex-col items-center space-y-2">
            <div>
              <p className="font-display font-bold text-xl md:text-2xl text-retro-cream tracking-tight uppercase leading-tight">
                Parco Urbano &ldquo;Peppino Impastato&rdquo;
              </p>
              <p className="font-display text-sm tracking-widest text-retro-cream/70 uppercase mt-1">
                Belpasso
              </p>
            </div>

            <div className="w-24 h-[1px] bg-retro-orange/30 my-1"></div>

            <div className="flex flex-col items-center">
              <span className="font-serif-italic italic text-retro-orange text-lg md:text-xl">
                Dal 7 Luglio al 22 Settembre
              </span>
              <span className="font-display font-bold text-[11px] md:text-xs tracking-widest text-retro-cream uppercase mt-1">
                10 Capolavori del Cinema
              </span>
            </div>
          </div>


        </div>

        {/* COLONNA DESTRA: Countdown + Prossimo Film (Prende 5 slot su 12) */}
        <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:max-w-none flex flex-col space-y-4">
          
          {/* Box Countdown */}
          <div className="bg-retro-orange text-retro-cream rounded-2xl p-4 shadow-lg text-center border border-retro-cream/20">
            <p className="font-display text-xs uppercase tracking-widest font-bold mb-2 text-retro-cream/90">
              Il prossimo film comincia tra:
            </p>
            {/* Componente Countdown implementato sotto */}
            <HeaderCountdown targetDate={nextFilm.date} /> 
          </div>

          {/* Scheda Prossimo Film (Adattata per l'Header) */}
          <article
            onClick={() => onSelectFilm(nextFilm)}
            className="group bg-retro-slate text-retro-cream rounded-3xl overflow-hidden border border-retro-orange/40 hover:border-retro-orange transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-row shadow-2xl relative z-20 min-h-[220px]"
          >
            {/* Locandina (Sinistra) */}
            <div
              className="w-2/5 relative overflow-hidden flex items-center justify-center bg-retro-navy shrink-0"
              style={{ backgroundColor: nextFilm.imageColor }}
            >
              {nextFilm.imagePath ? (
                <Image
                  src={nextFilm.imagePath}
                  alt={`Locandina di ${nextFilm.title}`}
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-cover object-center transition-transform duration-700 opacity-90"
                  priority
                />
              ) : (
                <div className="text-retro-cream relative z-10 scale-100">
                  <FilmIllustration type={nextFilm.illustrationType} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-retro-slate/30 z-10 pointer-events-none" />
            </div>

            {/* Info Film (Destra) */}
            <div className="w-3/5 p-5 flex flex-col justify-between text-left relative z-20">
              <div>
                <span className="bg-retro-orange/20 text-retro-orange font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 inline-block">
                  Prossimo Appuntamento
                </span>
                <h3 className="font-display font-bold text-xl text-retro-cream tracking-tight line-clamp-2 leading-tight group-hover:text-retro-orange transition-colors">
                  {nextFilm.title}
                </h3>
                <p className="font-sans text-sm text-retro-cream/75 mt-1.5">
                  Regia: <strong className="text-retro-cream">{nextFilm.director}</strong>
                </p>
                <p className="font-sans text-xs text-retro-cream/50 line-clamp-3 mt-2.5 leading-relaxed">
                  {nextFilm.plot}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-4 border-t border-retro-cream/10 text-xs font-display">
                <span className="text-retro-cream/80 font-semibold">{nextFilm.date}</span>
                <span className="text-retro-orange font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Info &rarr;
                </span>
              </div>
            </div>
          </article>
          {/* Call to Action */}
          <div className="flex flex-col gap-3 w-full max-w-[380px] md:max-w-[460px]">
            <button
              onClick={onExploreClick}
              className="w-full bg-retro-cream text-retro-navy font-display font-bold px-6 py-4 rounded-xl hover:bg-retro-orange hover:text-retro-cream transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm tracking-wider uppercase cursor-pointer block text-center"
            >
              Scopri la Programmazione
            </button>
            <button
              onClick={onNewsletterClick}
              className="w-full bg-transparent text-retro-cream font-display font-bold px-6 py-4 rounded-xl border-2 border-retro-cream/50 hover:border-retro-cream hover:bg-retro-cream/10 transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wider uppercase cursor-pointer block text-center"
            >
              Iscriviti alla Newsletter
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};

/* --- MINI COMPONENTE COUNTDOWN --- */
const HeaderCountdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ giorni: 0, ore: 0, minuti: 0 });
  const [isMounted, setIsMounted] = useState(false); // Risolve l'errore di idratazione

  useEffect(() => {
    setIsMounted(true); // Indica che ora siamo sul client

    const dateMap: { [key: string]: string } = {
      "Martedì 7 Luglio": "2026-07-07T21:30:00",
      "Martedì 14 Luglio": "2026-07-14T21:30:00",
      "Martedì 21 Luglio": "2026-07-21T21:30:00",
      "Martedì 28 Luglio": "2026-07-28T21:30:00",
      "Martedì 4 Agosto": "2026-08-04T21:30:00",
      "Martedì 25 Agosto": "2026-08-25T21:30:00",
      "Martedì 1 Settembre": "2026-09-01T21:30:00",
      "Martedì 8 Settembre": "2026-09-08T21:30:00",
      "Martedì 15 Settembre": "2026-09-15T21:30:00",
      "Martedì 22 Settembre": "2026-09-22T21:30:00",
    };

    const targetIso = dateMap[targetDate];
    if (!targetIso) return;

    const targetTime = new Date(targetIso).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          giorni: Math.floor(difference / (1000 * 60 * 60 * 24)),
          ore: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minuti: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        });
      } else {
        setTimeLeft({ giorni: 0, ore: 0, minuti: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Finché non siamo sul client, mostra il layout vuoto per evitare mismatch col server
  if (!isMounted) {
    return (
      <div className="flex justify-center gap-4 font-display font-bold text-retro-navy">
        {[ { label: "Gg", value: "--" }, { label: "Ore", value: "--" }, { label: "Min", value: "--" }].map((item, idx) => (
          <div key={idx} className="bg-retro-cream/80 px-3 py-1.5 rounded-lg flex flex-col min-w-[55px] opacity-70">
            <span className="text-xl leading-none font-extrabold">{item.value}</span>
            <span className="text-[9px] uppercase tracking-wider text-retro-navy/60 mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Render reale
  return (
    <div className="flex justify-center gap-4 font-display font-bold text-retro-navy">
      {[
        { label: "Gg", value: timeLeft.giorni },
        { label: "Ore", value: timeLeft.ore },
        { label: "Min", value: timeLeft.minuti },
      ].map((item, idx) => (
        <div key={idx} className="bg-retro-cream px-3 py-1.5 rounded-lg flex flex-col min-w-[55px] shadow-sm">
          <span className="text-xl leading-none font-extrabold">{String(item.value).padStart(2, "0")}</span>
          <span className="text-[9px] uppercase tracking-wider text-retro-navy/60 mt-0.5">{item.label}</span>
        </div>
      ))}
    </div>
  );
};