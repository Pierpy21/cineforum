import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Cineforum Belpasso 2026 | Consulta Giovanile Belpasso',
    template: '%s | Cineforum Belpasso'
  },
  description: 'Sito ufficiale del Cineforum di Belpasso, la rassegna cinematografica estiva organizzata dalla Consulta Giovanile. Scopri le date, i film in programma e gli eventi in città.',
  icons: {
    icon: '/public/icon.png', 
    apple: '/public/icon.png', 
  },
  verification: {
    google: 'm31Ac7GaLHeVNvrwu5DniLU-TByx5swpyZ0igyGyfGg',
  },

  keywords: [
    'Cineforum Belpasso', 
    'Cinema all aperto Belpasso', 
    'Consulta Giovanile Belpasso', 
    'Eventi estate Belpasso 2026', 
    'Rassegna cinematografica Belpasso', 
    'Catania eventi cinema', 
    'Cosa fare a Belpasso',
    'Film sotto le stelle Belpasso',
    'Programma cineforum Belpasso',
    'Cinema estivo Belpasso',
    'Eventi parco urbano'
  ],
  authors: [{ name: 'Consulta Giovanile Belpasso' }],
  creator: 'Consulta Giovanile Belpasso',
  metadataBase: new URL('https://cineforumbelpasso.it'),
  
  // Ottimizzazione Indicizzazione Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Condivisione sui Social (Open Graph per WhatsApp, Facebook, Instagram)
  openGraph: {
    title: 'Cineforum Belpasso 2026 | Rassegna Cinematografica Estiva',
    description: 'Vieni a scoprire il cinema sotto le stelle a Belpasso. Programma completo, date e film selezionati dalla Consulta Giovanile.',
    url: 'https://cineforumbelpasso.it',
    siteName: 'Cineforum Belpasso',
    images: [
      {
        url: '/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Locandina Cineforum Belpasso',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col">{children}
        <Footer />
      </body>
    </html>
  );
}
