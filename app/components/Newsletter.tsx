'use client'; // Assicurati che ci sia questo in cima se è dentro la cartella app

import React, { useState } from "react";
import { NewsletterSubmission } from "@/app/types";
import { RetroStar, FilmReel } from "./RetroIllustration";
// 1. Importa la Server Action
import { subscribeToNewsletter } from "@/app/actions";

export const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterSubmission>({
    email: "",
    name: "",
    privacyAccepted: false,
  });

  // Aggiungiamo uno stato "submitting" per disabilitare il tasto durante l'invio
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<NewsletterSubmission | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 2. Modifica l'handleSubmit diventando async
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validazione Client-side
    if (!formData.email) {
      setStatus("error");
      setErrorMessage("L'indirizzo email è obbligatorio.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Inserisci un indirizzo email valido.");
      return;
    }

    if (!formData.privacyAccepted) {
      setStatus("error");
      setErrorMessage("Devi acconsentire al trattamento dei dati.");
      return;
    }

    // Cambia lo stato in caricamento
    setStatus("submitting");

    // 3. Chiamata alla Server Action
    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setSubmittedData(formData);
      setStatus("success");
      // Reset del form
      setFormData({
        email: "",
        name: "",
        privacyAccepted: false,
      });
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Si è verificato un errore. Riprova.");
    }
  };

  return (
    <section id="sezione-newsletter" className="relative bg-retro-red text-retro-cream py-16 px-6 overflow-hidden rounded-3xl border border-retro-cream/20 my-12 shadow-2xl">
      {/* Decorative striped lines inside orange/cream */}
      <div className="absolute right-[-20px] top-[-20px] w-36 h-36 rounded-full striped-pattern opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute left-[-20px] bottom-[-20px] w-36 h-36 rounded-full striped-pattern opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Retro Header Icon */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <RetroStar className="text-retro-cream w-6 h-6" />
          <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FDFBF7]/80">
            Rimani Aggiornato
          </span>
          <RetroStar className="text-retro-cream w-6 h-6" />
        </div>

        {/* Title & Description */}
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight uppercase mb-4 text-retro-cream">
          Unisciti al Nostro Club
        </h2>
        <p className="font-sans text-base text-retro-cream/85 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Iscriviti alla nostra newsletter per ricevere promemoria settimanali, variazioni di programma in anteprima e dettagli esclusivi sui registi ospiti delle serate.
        </p>

        {status === "success" && submittedData ? (
          /* CINEMA TICKET CONFIRMATION STUB */
          <div className="relative max-w-md mx-auto bg-retro-cream text-retro-navy rounded-2xl p-6 md:p-8 shadow-xl border-dashed border-4 border-retro-red/45 overflow-hidden animate-fade-in">
            {/* Cutout notches left and right (Ticket style) */}
            <div className="absolute top-1/2 left-[-16px] transform -translate-y-1/2 w-8 h-8 rounded-full bg-retro-red border-r-4 border-retro-cream" />
            <div className="absolute top-1/2 right-[-16px] transform -translate-y-1/2 w-8 h-8 rounded-full bg-retro-red border-l-4 border-retro-cream" />
            
            {/* Star background */}
            <div className="absolute top-2 right-2 text-retro-orange opacity-40">
              <FilmReel className="w-16 h-16 animate-spin [animation-duration:12s]" />
            </div>

            <div className="text-center relative z-10 space-y-4">
              <span className="bg-retro-red text-retro-cream text-[10px] font-display font-extrabold tracking-[0.2em] px-3 py-1 rounded-full uppercase">
                Iscrizione confermata!
              </span>
              <h3 className="font-display font-extrabold text-3xl tracking-tight uppercase leading-none text-retro-navy pt-2">
                Benvenuto a bordo!
              </h3>
              <p className="font-sans text-sm text-retro-navy/80">
                La tua iscrizione è attiva per <strong className="font-bold text-retro-red">{submittedData.email}</strong>.
              </p>
              
              <div className="border-t-2 border-dotted border-retro-navy/20 pt-4 space-y-1 text-xs text-retro-navy/60 font-mono">
                <div>DATA ISCRIZIONE: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}</div>
                <div className="font-bold text-retro-orange mt-2">⭐ CI VEDIAMO AL PARCO ⭐</div>
              </div>

              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs font-display font-bold text-retro-red hover:text-retro-navy transition-colors tracking-wider uppercase underline underline-offset-4 cursor-pointer"
              >
                Iscrivi un altro amico
              </button>
            </div>
          </div>
        ) : (
          /* NEWSLETTER CORE FORM INPUTS */
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-retro-navy/95 border-2 border-retro-cream/20 rounded-2xl p-6 md:p-8 text-left space-y-5 shadow-lg">
            
            {/* Input name */}
            <div>
              <label htmlFor="user-name" className="block text-xs font-display font-bold uppercase tracking-wider text-retro-cream/70 mb-1.5">
                Il tuo nome (Opzionale)
              </label>
              <input
                type="text"
                id="user-name"
                name="name"
                disabled={status === "submitting"}
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Es. Mario Rossi"
                className="w-full bg-retro-slate/60 text-retro-cream border-2 border-retro-cream/10 rounded-xl px-4 py-3 placeholder-retro-cream/30 focus:border-retro-orange focus:outline-none focus:ring-1 focus:ring-retro-orange transition-all text-sm font-sans-disabled:opacity-50"
              />
            </div>

            {/* Input email */}
            <div>
              <label htmlFor="user-email" className="block text-xs font-display font-bold uppercase tracking-wider text-retro-cream/70 mb-1.5">
                Indirizzo Email (Richiesto)
              </label>
              <input
                type="email"
                id="user-email"
                name="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Es. mario.rossi@example.com"
                className="w-full bg-retro-slate/60 text-retro-cream border-2 border-retro-cream/10 rounded-xl px-4 py-3 placeholder-retro-cream/30 focus:border-retro-orange focus:outline-none focus:ring-1 focus:ring-retro-orange transition-all text-sm font-sans disabled:opacity-50"
              />
            </div>

            {/* Consent checklist box */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                required
                disabled={status === "submitting"}
                className="mt-1 h-4 w-4 bg-retro-slate/60 border-2 border-retro-cream/15 rounded text-retro-orange focus:ring-retro-orange accent-retro-orange disabled:opacity-50"
              />
              <label htmlFor="privacyAccepted" className="text-xs text-retro-cream/75 leading-relaxed font-sans select-none cursor-pointer">
                Acconsento al trattamento dei dati personali per ricevere esclusivamente inviti e dettagli sul Cineforum. Nessuno spam, mai.
              </label>
            </div>

            {/* Error box */}
            {status === "error" && (
              <div className="bg-retro-red/20 border border-retro-red/45 text-retro-cream rounded-xl p-3 text-xs leading-normal font-sans">
                ⚠️ {errorMessage}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-retro-cream text-retro-navy font-display font-bold py-3.5 rounded-xl border-2 border-transparent hover:bg-retro-orange hover:text-retro-cream transition-all duration-300 transform hover:-translate-y-0.5 text-xs text-center tracking-widest uppercase cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Elaborazione in corso..." : "Registra la mia Iscrizione"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};