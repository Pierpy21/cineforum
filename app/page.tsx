"use client";

import { useState } from "react";
import { FILMS } from "@/app/data";
import { Film } from "@/app/types";
import { Header } from "./components/Header";
import { FilmCard } from "./components/FilmCard";
import { FilmDetailModal } from "./components/FilmDetailModal";
import { Newsletter } from "./components/Newsletter";
import { RetroStar, FilmReel } from "./components/RetroIllustration";
import { MapPin, Compass, Ticket } from "lucide-react";

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  // Riferimento diretto alla lista dei 10 film
  const filteredFilms = FILMS;

  // Gestione dello scroll fluido verso le sezioni
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-retro-navy text-retro-cream font-sans selection:bg-retro-orange selection:text-retro-cream">
      
  {/* --- RETRO HEADER SECTION --- */}
      <Header
        onExploreClick={() => handleScrollToSection("sezione-programmazione")}
        onNewsletterClick={() => handleScrollToSection("sezione-newsletter")}
        nextFilm={filteredFilms[0]} // Passa il primo film della lista
        onSelectFilm={setSelectedFilm} // <--- CORRETTO: Ora aggiorna lo stato e apre la modale!
      />

      {/* --- MAIN BODY GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-16">
        
        {/* SECTION: PROGRAMMING & EXPLORATION */}
        <section id="sezione-programmazione" className="space-y-8 scroll-mt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-retro-cream/10 pb-6">
            <div className="text-left space-y-2">
              <div className="flex items-center gap-2">
                <RetroStar className="w-4 h-4 text-retro-orange" />
                <span className="font-display font-semibold text-xs tracking-widest text-retro-orange uppercase">
                  La Selezione Estiva
                </span>
              </div>
              <h2 className="text-4xl font-display font-extrabold uppercase tracking-tight text-retro-cream">
                I 10 Film in Rassegna
              </h2>
              <p className="font-sans text-sm text-retro-cream/65 leading-relaxed max-w-xl">
                Ogni martedì sera al Parco Peppino Impastato vi aspetta una proiezione speciale. Clicca su ciascun film per svelarne la scheda completa di recensioni e curiosità d&apos;autore.
              </p>
            </div>

            {/* Informative Stats Ticket */}
            <div className="bg-retro-slate p-3 px-5 rounded-2xl border border-retro-cream/10 shrink-0 text-left flex items-center gap-4 shadow-md select-none">
              <Ticket className="w-8 h-8 text-retro-orange shrink-0" />
              <div>
                <div className="font-display font-bold text-lg leading-tight text-retro-cream">10 SERATE</div>
                <div className="font-sans text-xs text-retro-cream/65">Giugno &rarr; Settembre 2026</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC FILM GRID PANEL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredFilms.map((film, index) => (
            <FilmCard
            key={film.id}
            film={film}
            index={index}
            onSelect={setSelectedFilm}
          />
          ))}
        </div>
        </section>

        {/* SECTION: ORGANIZATIONAL ADVICE / ARENA INFO */}
        <section className="bg-retro-slate text-retro-cream rounded-3xl border border-retro-cream/15 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute right-[-30px] bottom-[-20px] w-48 h-48 opacity-[0.03] text-retro-cream pointer-events-none hidden md:block">
            <FilmReel />
          </div>
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-retro-orange shrink-0" />
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-retro-orange">
                Informazioni Utili per la Partecipazione
              </h3>
            </div>
            <p className="font-sans text-sm text-retro-cream/80 leading-relaxed">
              Il Cineforum estivo si svolge all&apos;interno del <strong>Parco Urbano &ldquo;Peppino Impastato&rdquo;</strong> a Belpasso. La platea è provvista di comode sedute nell&apos;anfiteatro all&apos;aperto, ma sei libero di portare il tuo telo da mare o sedia pieghevole per un autentico stile pic-nic sotto le stelle!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-retro-red mt-1 shrink-0" />
                <p className="text-xs text-retro-cream/70">
                  <strong>Accessibilità:</strong> Il parco è completamente accessibile e privo di barriere architettoniche.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-retro-orange mt-1 shrink-0" />
                <p className="text-xs text-retro-cream/70">
                  <strong>In caso di pioggia:</strong> Le proiezioni verranno rinviate al martedì successivo o riprogrammate in base alla disponibilità.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-retro-navy/90 border border-retro-cream/10 rounded-2xl p-6 text-center space-y-4 shadow-inner relative">
            <RetroStar className="absolute top-3 right-3 text-retro-orange w-4 h-4" />
            <div className="font-serif-italic italic text-2xl text-retro-orange">Sezione Bar</div>
            <p className="font-sans text-xs text-retro-cream/75 leading-relaxed">
              Un chiosco attrezzato con popcorn caldi, bibite ghiacciate e dolci tipici siciliani sarà attivo durante tutta la durata della programmazione estiva!
            </p>
            <div className="text-[10px] font-mono uppercase tracking-widest text-retro-cream/40">
              #CINEFORUMBELPASSO
            </div>
          </div>
        </section>

        {/* SECTION: NEWSLETTER SIGNUP MODULE */}
        <Newsletter />

      </main>

      {/* IMMERSIVE FILM SHEET MODAL CONTROL */}
      <FilmDetailModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />

    </div>
  );
}