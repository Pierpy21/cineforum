import React, { useEffect } from "react";
import Image from "next/image";
import { Film } from "@/app/types";
import { FilmIllustration } from "./FilmCard";
import { RetroStar } from "./RetroIllustration";
import { Calendar, Clock, Film as FilmIcon, User, X } from "lucide-react";

interface FilmDetailModalProps {
  film: Film | null;
  onClose: () => void;
}

export const FilmDetailModal: React.FC<FilmDetailModalProps> = ({ film, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (film) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [film]);

  const getGoogleCalendarUrl = (film: Film): string => {
    const dateMap: { [key: string]: string } = {
      "Martedì 7 Luglio": "20260707",
      "Martedì 14 Luglio": "20260714",
      "Martedì 21 Luglio": "20260721",
      "Martedì 28 Luglio": "20260728",
      "Martedì 4 Agosto": "20260804",
      "Martedì 25 Agosto": "20260825",
      "Martedì 1 Settembre": "20260901",
      "Martedì 8 Settembre": "20260908",
      "Martedì 15 Settembre": "20260915",
      "Martedì 22 Settembre": "20260922",
    };

    const code = dateMap[film.date] || "20260707";
    const start = `${code}T213000`;
    const end = `${code}T233000`;
    
    const title = encodeURIComponent(`${film.title} - Cineforum Sotto le Stelle`);
    const details = encodeURIComponent(
      `Proiezione gratuita di "${film.title}" (${film.year}), diretto da ${film.director}.\nDurata: ${film.duration}.\n\nCast principale: ${film.cast.join(", ")}.\n\nSinossi: ${film.plot}\n\n📍 Arena Parco Urbano Peppino Impastato, Belpasso.\nIngresso Libero e Gratuito.`
    );
    const location = encodeURIComponent("Parco Urbano Peppino Impastato, Belpasso, CT, Italia");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  if (!film) return null;

  const handleSaveReminder = () => {
    const confirmAdd = window.confirm(
      `Vuoi aggiungere la proiezione di "${film.title}" del ${film.date} alle 21:30 al tuo calendario?`
    );
    if (confirmAdd) {
      window.open(getGoogleCalendarUrl(film), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-retro-navy/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Main Card Container - Altezza fluida (h-auto) per bilanciare i contenuti */}
      <div className="relative bg-retro-cream text-retro-navy w-full max-w-3xl min-w-[280px] rounded-3xl overflow-hidden shadow-2xl border-4 border-retro-cream z-10 animate-scale-up grid grid-cols-1 md:grid-cols-12 h-auto max-h-[90vh] md:max-h-[85vh]">
        
        {/* --- COLONNA DI SINISTRA --- */}
        <div
          className="md:col-span-5 flex flex-col p-6 md:p-8 text-retro-cream relative overflow-hidden min-h-[350px] md:min-h-full"
          style={{ backgroundColor: film.imageColor }}
        >
          {/* Pattern di sfondo fallback */}
          {!film.imagePath && (
            <div className="absolute inset-0 striped-pattern opacity-15 pointer-events-none z-0" />
          )}

          {/* Bottone di chiusura Mobile */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 bg-retro-navy/20 hover:bg-retro-navy/40 text-retro-cream p-2 rounded-full backdrop-blur-xs transition-all focus:outline-none z-30"
            aria-label="Chiudi finestra"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 1. SEZIONE ALTO: Data e Ora nel flusso del layout */}
          <div className="relative z-20 flex flex-col items-start gap-1.5 text-left shrink-0 mb-4 pr-10">
            <div className="bg-retro-orange text-retro-cream font-display font-bold text-[11px] md:text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
              {film.date}
            </div>
            <div className="text-[11px] md:text-xs font-display font-semibold text-retro-cream/90 flex items-center gap-1.5 pl-1 drop-shadow-sm">
              <Clock className="w-3.5 h-3.5 text-retro-orange shrink-0" />
              Ore {film.time}
            </div>
          </div>

          {/* 2. SEZIONE CENTRO: Immagine dinamica (flex-grow) */}
          <div className="relative flex-grow w-full z-10 min-h-[180px]">
            {film.imagePath ? (
              <Image
                src={film.imagePath}
                alt={`Locandina di ${film.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex justify-center items-center py-4 transform hover:scale-105 duration-300">
                <FilmIllustration type={film.illustrationType} activeColor={film.imageColor} />
              </div>
            )}
          </div>

          {/* 3. SEZIONE BASSO: Rating e Location nel flusso del layout */}
          <div className="relative z-20 flex flex-col items-start gap-1.5 text-left shrink-0 mt-4">
            <p className="text-[10px] font-mono tracking-widest uppercase text-retro-cream/90 drop-shadow-sm">
              Parco Urbano Peppino Impastato Belpasso (CT)
            </p>
          </div>
        </div>

        {/* --- COLONNA DI DESTRA --- */}
        <div className="md:col-span-7 p-6 md:p-8 flex flex-col h-auto max-h-[90vh] md:max-h-[85vh] overflow-y-auto bg-retro-cream">
          
          {/* Top Close Button Desktop */}
          <div className="hidden md:flex justify-end mb-2 shrink-0">
            <button
              onClick={onClose}
              className="text-retro-slate hover:text-retro-orange p-2 rounded-xl hover:bg-retro-navy/5 transition-all focus:outline-none cursor-pointer"
              aria-label="Chiudi finestra"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Title & Meta */}
          <div className="space-y-1 text-left shrink-0">
            <h3 className="font-display font-extrabold text-3xl text-retro-navy tracking-tight leading-none uppercase">
              {film.title}
            </h3>
            {film.originalTitle && film.originalTitle !== film.title && (
              <p className="font-sans text-xs italic text-retro-slate/65">
                Titolo orig: {film.originalTitle}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-display font-semibold tracking-wider uppercase text-retro-slate/75 pt-3 border-b border-retro-navy/10 pb-4 shrink-0">
            <span className="bg-retro-navy/5 px-2.5 py-1 rounded-md">{film.year}</span>
            <span className="bg-retro-navy/5 px-2.5 py-1 rounded-md">{film.duration}</span>
            <span className="bg-retro-orange/10 text-retro-orange px-2.5 py-1 rounded-md font-bold">{film.genre.join(" / ")}</span>
          </div>

          {/* Trama */}
          <div className="space-y-2 pt-4 text-left shrink-0">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-retro-orange flex items-center gap-2">
              <FilmIcon className="w-3.5 h-3.5" />
              La Trama
            </h4>
            <p className="font-sans text-sm text-retro-slate leading-relaxed">
              {film.plot}
            </p>
          </div>

          {/* Cast e Regia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left shrink-0 pb-6">
            <div>
              <h5 className="font-display font-bold text-[11px] uppercase tracking-wider text-retro-slate/60 flex items-center gap-1.5 mb-1">
                <User className="w-3 h-3 text-retro-orange" />
                Regia
              </h5>
              <p className="font-sans text-sm font-bold text-retro-navy">
                {film.director}
              </p>
            </div>
            
            <div>
              <h5 className="font-display font-bold text-[11px] uppercase tracking-wider text-retro-slate/60 flex items-center gap-1.5 mb-1">
                <User className="w-3 h-3 text-retro-orange" />
                Cast Principale
              </h5>
              <p className="font-sans text-xs font-medium text-retro-navy/90 leading-tight">
                {film.cast.join(", ")}
              </p>
            </div>
          </div>

          {/* Bottoni ancorati al fondo grazie a mt-auto */}
          <div className="border-t border-retro-navy/10 pt-4 flex flex-col sm:flex-row gap-3 mt-auto shrink-0">
            <button
              onClick={handleSaveReminder}
              className="flex-grow font-display font-bold text-xs uppercase tracking-widest py-3 px-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-retro-navy text-retro-cream hover:bg-retro-orange"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              Aggiungi al Calendario
            </button>
            <button
              onClick={onClose}
              className="sm:w-32 bg-transparent hover:bg-retro-navy/5 text-retro-navy border border-retro-navy/20 font-display font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-xl transition-all cursor-pointer"
            >
              Chiudi
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};