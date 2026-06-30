"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Chiude il menù se si clicca fuori dal componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-retro-navy border-b border-retro-cream/10 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: Torna in cima alla home */}
        <Link 
          href="/" 
          className="font-display font-extrabold text-xl sm:text-2xl tracking-tighter text-retro-cream hover:text-retro-orange transition-colors uppercase"
        >
          Cine<span className="text-retro-orange">Forum</span>
        </Link>

        {/* CONTENITORE NAVBAR DESTRA (Dropdown) */}
        <div className="relative inline-block text-left" ref={dropdownRef}>
          {/* Pulsante Principale Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group px-5 py-2.5 bg-retro-slate text-retro-cream font-display font-bold text-sm uppercase tracking-wider rounded-full border border-retro-cream/15 hover:border-retro-orange shadow-md transition-all duration-300 flex items-center gap-2 focus:outline-none"
          >
            <span>Menu</span>
            {/* Freccia Animata */}
            <svg
              className={`w-4 h-4 text-retro-orange transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Pannello Dropdown (Menù a tendina) */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-64 rounded-2xl overflow-hidden border border-retro-cream/10 bg-retro-navy shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              
              {/* Sezione 1: Programmazione */}
              <div className="p-2 bg-retro-slate/50">
                <div className="px-3 py-1.5 text-[10px] font-display font-extrabold text-retro-cream/40 uppercase tracking-widest">
                  Cinema & Palinsesto
                </div>
                {/* Cambiato in tag <a> con l'ancora #programmazione */}
                <a
                  href="#sezione-programmazione"
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col p-3 rounded-xl hover:bg-retro-slate border border-transparent hover:border-retro-cream/5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-retro-cream group-hover:text-retro-orange transition-colors">
                      Programmazione
                    </span>
                    <span className="text-retro-orange translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 text-xs">
                      &rarr;
                    </span>
                  </div>
                  <p className="font-sans text-xs text-retro-cream/60 mt-1 leading-relaxed">
                    I film sotto le stelle, le date e gli orari delle proiezioni estive.
                  </p>
                </a>
              </div>

              {/* Divisore Stile Biglietto */}
              <div className="relative h-[1px] bg-retro-cream/10 mx-2">
                <div className="absolute left-[-12px] top-[-4px] w-2 h-2 bg-retro-navy rounded-full border-r border-retro-cream/10" />
                <div className="absolute right-[-12px] top-[-4px] w-2 h-2 bg-retro-navy rounded-full border-l border-retro-cream/10" />
              </div>

              {/* Sezione 2: Newsletter */}
              <div className="p-2 bg-retro-slate/50">
                <div className="px-3 py-1.5 text-[10px] font-display font-extrabold text-retro-cream/40 uppercase tracking-widest">
                  Community & News
                </div>
                {/* Cambiato in tag <a> con l'ancora #newsletter */}
                <a
                  href="#sezione-newsletter"
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col p-3 rounded-xl hover:bg-retro-slate border border-transparent hover:border-retro-cream/5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-retro-cream group-hover:text-retro-orange transition-colors">
                      Newsletter
                    </span>
                    <span className="text-retro-orange translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 text-xs">
                      &rarr;
                    </span>
                  </div>
                  <p className="font-sans text-xs text-retro-cream/60 mt-1 leading-relaxed">
                    Resta aggiornato sui nostri eventi speciali e le iniziative in città.
                  </p>
                </a>
              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  );
};