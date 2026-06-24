import React from "react";
import Image from "next/image"; // <-- 1. Importa il componente Image
import { Film } from "@/app/types";
import { RetroStar, FilmReel, Clapperboard } from "./RetroIllustration";

interface FilmCardProps {
  film: Film;
  index: number;
  onSelect: (film: Film) => void;
}

// ... (Il tuo FilmIllustration rimane identico) ...
export const FilmIllustration: React.FC<{ type: Film["illustrationType"]; activeColor?: string }> = ({ type, activeColor = "#D95D39" }) => {
  // ... (codice invariato)
};

export const FilmCard: React.FC<FilmCardProps> = ({ film, index, onSelect }) => {
  return (
    <article
      id={`film-idx-${index}`}
      onClick={() => onSelect(film)}
      className="group bg-retro-navy text-retro-cream rounded-3xl overflow-hidden border border-retro-cream/10 hover:border-retro-orange transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-lg relative"
    >
      {/* Dynamic Date Tag mimicking tickets from poster */}
      <div className="absolute top-4 left-4 bg-retro-orange text-retro-cream font-display font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full z-10 shadow-md">
        {film.date}
      </div>

      {/* Index Number Indicator */}
      <div className="absolute top-4 right-4 text-retro-cream/40 font-display font-extrabold text-lg select-none z-10">
        {(index + 1).toString().padStart(2, "0")}
      </div>

      {/* 2. Modifica la sezione del Banner qui sotto */}
      <div
        className="aspect-[2/3] flex items-center justify-center p-4 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
        style={{ backgroundColor: film.imageColor }}
      >
        {/* Se abbiamo il percorso dell'immagine, la mostriamo con Next Image */}
        {film.imagePath ? (
          <Image
            src={film.imagePath}
            alt={`Locandina di ${film.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover z-0 transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            priority={index < 3} // <-- Magia di Vercel: carica istantaneamente le prime 3 locandine
          />
        ) : (
          /* Fallback: Se manca l'immagine, mostra le tue animazioni e SVG di default */
          <>
            <div className="absolute inset-0 striped-pattern opacity-15 z-0" />
            <div className="absolute bottom-[-15%] right-[-10%] w-32 h-32 rounded-full border border-retro-cream/25 group-hover:scale-110 transition-transform duration-500 z-0" />
            <div className="z-10 text-retro-cream transform group-hover:scale-110 transition-all duration-300">
              <FilmIllustration type={film.illustrationType} />
            </div>
          </>
        )}
        
        {/* Overlay scuro per far leggere sempre bene la data e il numero in alto */}
        {film.imagePath && (
          <div className="absolute inset-0 bg-gradient-to-b from-retro-navy/60 via-transparent to-transparent z-0 pointer-events-none" />
        )}
      </div>

      {/* Card Information block (Invariato) */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-retro-slate text-left">
        {/* ... tutto il resto del tuo codice (Metadata, Titolo, Regia, Plot, Rating) ... */}
        <div>
          <div className="flex items-center gap-2 text-retro-cream/65 text-xs font-display font-semibold mb-2">
            <span>{film.year}</span>
            <span>•</span>
            <span>{film.duration}</span>
            <span>•</span>
            <span className="text-retro-orange">{film.genre[0]}</span>
          </div>

          <h3 className="font-display font-bold text-xl text-retro-cream tracking-tight group-hover:text-retro-cream/100 leading-snug line-clamp-1 mb-2">
            {film.title}
          </h3>

          <p className="font-sans text-sm text-retro-cream/70 font-medium mb-4">
            Regia: <strong className="text-retro-cream">{film.director}</strong>
          </p>

          <p className="font-sans text-xs text-retro-cream/60 leading-relaxed mb-4 line-clamp-2">
            {film.plot}
          </p>
        </div>

        <div className="pt-4 border-t border-retro-cream/10 flex items-center justify-between">

          <span className="font-display font-bold text-xs uppercase tracking-widest text-retro-orange group-hover:text-retro-cream group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
            Leggi Scheda &rarr;
          </span>
        </div>
      </div>
    </article>
  );
};