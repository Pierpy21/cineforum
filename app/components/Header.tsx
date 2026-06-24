import React from "react";
import Image from "next/image";
import { CinemaCoupleIllustration, RetroStar, FilmReel, Clapperboard } from "./RetroIllustration";

interface HeaderProps {
  onExploreClick: () => void;
  onNewsletterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onExploreClick, onNewsletterClick }) => {
  return (
    <header className="relative bg-retro-navy text-retro-cream overflow-hidden border-b-4 border-retro-orange flex flex-col items-center">
      {/* Top Film Strip Border notched design */}


      {/* Sfondo decorativo */}
      <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />

      {/* Contenitore Principale Centrato */}
      <div className="w-full max-w-5xl mx-auto px-4 pt-10 pb-12 md:py-4 relative z-10 flex flex-col items-center text-center space-y-0">

        {/* 2. Titolo Centrale con il nuovo Logo */}
        <div className="relative w-full max-w-[400px] md:max-w-[550px] flex justify-center mt-2">
          <Image
            src="/images/logo-cineforum.png" 
            alt="Cineforum Sotto Le Stelle"
            width={600}
            height={300}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>


        {/* Spazio vuoto per distanziare dai badge sovrapposti */}
        <div className="h-6"></div>

        {/* 4. Dettagli Location e Date (Design unificato) */}
        <div className="w-full max-w-2xl bg-retro-navy/40 border border-retro-cream/10 rounded-2xl p-6 shadow-md backdrop-blur-sm flex flex-col items-center space-y-3">
          <div className="text-center">
            <p className="font-display font-bold text-xl md:text-2xl text-retro-cream tracking-tight uppercase">
              Parco Urbano &ldquo;Peppino Impastato&rdquo;
            </p>
            <p className="font-display text-sm tracking-widest text-retro-cream/70 uppercase mt-1">
              Belpasso
            </p>
          </div>

          <div className="w-24 h-[1px] bg-retro-orange/30 my-2"></div>

          <div className="text-center">
            <span className="font-serif-italic italic text-retro-orange text-lg md:text-xl mr-2">
              Dal 7 Luglio al 22 Settembre –
            </span>
            <span className="font-display font-bold text-xs md:text-sm tracking-widest text-retro-cream uppercase">
              10 Capolavori del Cinema
            </span>
          </div>
        </div>

        {/* 5. Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
          <button
            onClick={onExploreClick}
            className="bg-retro-cream text-retro-navy font-display font-bold px-8 py-4 rounded-xl hover:bg-retro-orange hover:text-retro-cream transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm tracking-wider uppercase cursor-pointer"
          >
            Scopri la Programmazione
          </button>
          <button
            onClick={onNewsletterClick}
            className="bg-transparent text-retro-cream font-display font-bold px-8 py-4 rounded-xl border-2 border-retro-cream/50 hover:border-retro-cream hover:bg-retro-cream/10 transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wider uppercase cursor-pointer"
          >
            Iscriviti alla Newsletter
          </button>
        </div>

      </div>
    </header>
  );
};