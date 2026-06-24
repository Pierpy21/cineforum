'use server';

import { Resend } from 'resend';
import { NewsletterSubmission } from '@/app/types';

// Inizializza Resend con la variabile d'ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(data: NewsletterSubmission) {
  // 1. Validazione base lato server per sicurezza
  if (!data.email || !data.privacyAccepted) {
    return { success: false, error: "Dati non validi o consenso mancante." };
  }

  try {
    // 2. Invia l'email con i dettagli dell'iscritto
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Cambia con il tuo dominio verificato su Resend appena lo avrai
      to: 'pierpaolo.pp21@gmail.com', // Inserisci l'email dove vuoi ricevere le notifiche degli iscritti
      subject: `🍿 Nuova iscrizione Cineforum: ${data.name || 'Anonimo'}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b;">
          <h2>Nuovo iscritto al Cineforum! 🎬</h2>
          <p><strong>Nome:</strong> ${data.name || 'Non specificato'}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('it-IT')}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Errore Resend:", error);
    return { success: false, error: "Impossibile completare l'iscrizione. Riprova più tardi." };
  }
}