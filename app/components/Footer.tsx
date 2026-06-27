"use client";

import { useState } from "react";
import Image from "next/image"; // <-- Aggiunto import per le immagini

export const Footer = () => {
  return (
    <footer className="relative bg-retro-slate text-retro-cream border-t-4 border-retro-orange pt-14 pb-16 overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-5 pointer-events-none" />

      {/* Sezione Superiore: Le 3 Colonne */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">
        
        {/* Column 1: Info and brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h4 className="font-display font-extrabold text-2xl tracking-tighter uppercase text-retro-cream">
              cine<span className="text-retro-orange font-serif-italic lowercase italic ml-1">forum</span>
            </h4>
          </div>
          <p className="font-sans text-xs text-retro-cream/60 leading-relaxed max-w-sm">
            Iniziativa culturale estiva per gli amanti della grande pellicola d&apos;autore. Dieci appuntamenti imperdibili sotto il cielo stellato di Belpasso.
          </p>
          <p className="font-mono text-[10px] text-retro-cream/40 pt-2">
            © {new Date().getFullYear()} – Tutti i diritti riservati.
          </p>
        </div>

        {/* Column 2: Institutions (Testo mantenuto per SEO/Accessibilità) */}
        <div className="space-y-2">
          <h5 className="font-display font-bold text-xs uppercase tracking-wider text-retro-orange">
            Patrocinato da
          </h5>
          <ul className="space-y-1.5 text-xs text-retro-cream/75 font-medium font-sans">
            <li>Regione Sicilia</li>
            <li>Assessorato famiglia, politiche sociali e lavoro</li>
          </ul>
        </div>

        {/* Column 3: Contact and Time */}
        <div className="space-y-2">
          <h5 className="font-display font-bold text-xs uppercase tracking-wider text-retro-orange">
            Contatti & Orari
          </h5>
          <ul className="space-y-1.5 text-xs text-retro-cream/75 font-sans">
            <li>📍 Parco Urbano "Peppino Impastato", Belpasso (CT)</li>
            <li>🕒 Ogni Martedì ore 21:30 esatte</li>
          </ul>
        </div>
      </div>

      {/* NUOVA SEZIONE: Loghi Istituzionali */}
      <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-retro-cream/10 relative z-10 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
        
        {/* Logo 1: Consulta Giovanile */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
          <Image 
            src="/images/consulta-giovanile.png" 
            alt="Logo Consulta Giovanile Belpasso" 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 150px"
            className="object-contain" 
          />
        </div>

        {/* Logo 2: Comune di Belpasso */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
          <Image 
            src="/images/comune-belpasso.png" 
            alt="Logo Comune di Belpasso" 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 150px"
            className="object-contain" 
          />
        </div>

        {/* Logo 3: Parco Urbano */}
        <div className="relative w-32 h-20 sm:w-36 sm:h-24 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
          <Image 
            src="/images/parco-urbano.png" 
            alt="Logo Parco Urbano Belpasso" 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 150px"
            className="object-contain" 
          />
        </div>

        {/* Logo 4: Regione Sicilia */}
        <div className="relative w-36 h-20 sm:w-40 sm:h-24 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
          <Image 
            src="/images/regione-sicilia.png" 
            alt="Logo Regione Sicilia Assessorato Famiglia" 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 150px"
            className="object-contain" 
            priority
          />
        </div>
        
      </div>

      {/* Bottom movie ribbon notches matching the poster design */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-retro-cream flex justify-between px-2 overflow-hidden select-none">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="w-5 h-2.5 bg-retro-slate rounded-sm shrink-0" />
        ))}
      </div>
    </footer>
  );
};