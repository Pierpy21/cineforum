export interface Film {
  id: string;
  title: string;
  originalTitle?: string;
  director: string;
  year: number;
  duration: string;
  genre: string[];
  date: string; // Every Tuesday date, e.g. "Martedì 16 Giugno"
  time: string; // Always "21:30" as on the poster
  plot: string;
  cast: string[];
  rating: number; // Critic rating or Cineforum evaluation (1 to 5 stars)
  imageColor: string; // Tailored visual background flavor for cards
  illustrationType: "cinema" | "stars" | "scelte" | "clapper" | "reel" | "romance" | "camera" | "vintage" | "nature" | "spotlight";
  imagePath: string; // Optional path to the film's poster image
}

export interface NewsletterSubmission {
  email: string;
  name?: string;
  privacyAccepted: boolean;
}
