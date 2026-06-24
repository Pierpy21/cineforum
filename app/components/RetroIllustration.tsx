import React from "react";

// Simple 4-pointed glowing retro star
export const RetroStar: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 text-retro-cream animate-retro-star ${className}`}
  >
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
  </svg>
);

// High fidelity film reel SVG
export const FilmReel: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={`text-retro-cream ${className}`}
  >
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* Reel Holes */}
    <circle cx="30" cy="35" r="9" />
    <circle cx="70" cy="35" r="9" />
    <circle cx="30" cy="65" r="9" />
    <circle cx="70" cy="65" r="9" />
    <circle cx="50" cy="22" r="9" />
    <circle cx="50" cy="78" r="9" />
    {/* Inner detail lines */}
    <line x1="50" y1="38" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="62" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
    <line x1="38" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="2" />
    <line x1="62" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// High fidelity Clapperboard SVG
export const Clapperboard: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-retro-cream ${className}`}
  >
    <rect x="10" y="35" width="100" height="55" rx="6" fill="#0C1821" />
    {/* Top flap (slightly open like the poster) */}
    <g transform="rotate(-15 30 35)">
      <rect x="10" y="15" width="100" height="20" rx="3" fill="#D95D39" />
      {/* Stripes on flap */}
      <line x1="25" y1="15" x2="40" y2="35" stroke="var(--color-retro-cream)" strokeWidth="4" />
      <line x1="50" y1="15" x2="65" y2="35" stroke="var(--color-retro-cream)" strokeWidth="4" />
      <line x1="75" y1="15" x2="90" y2="35" stroke="var(--color-retro-cream)" strokeWidth="4" />
    </g>
    {/* Clapperboard drawings inside */}
    <line x1="25" y1="50" x2="95" y2="50" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    <line x1="25" y1="68" x2="95" y2="68" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
    {/* Small info labels */}
    <path d="M 30,58 L 50,58" stroke="currentColor" strokeWidth="3" />
    <path d="M 70,58 L 90,58" stroke="currentColor" strokeWidth="3" />
    <circle cx="60" cy="78" r="4" fill="currentColor" />
  </svg>
);

// Couple watching movie on a classic sofa illustration styled minimalistically like the poster poster
export const CinemaCoupleIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* SVG Container holding the stylized lines */}
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-sm md:max-w-md select-none drop-shadow-xl"
      >
        {/* Background Glowing Circle (Dark background moon/glow) */}
        <circle cx="300" cy="250" r="180" fill="#162B3B" fillOpacity="0.6" />
        
        {/* Cinema Couch background frame */}
        <path
          d="M 120 400 L 480 400"
          stroke="#B42A27"
          strokeWidth="35"
          strokeLinecap="round"
        />
        <path
          d="M 120 280 C 120 240, 150 240, 150 280 L 150 400"
          stroke="#B42A27"
          strokeWidth="24"
          strokeLinecap="round"
        />
        <path
          d="M 450 280 C 450 240, 480 240, 480 280 L 480 400"
          stroke="#B42A27"
          strokeWidth="24"
          strokeLinecap="round"
        />
        
        {/* Huge sofa backing */}
        <path
          d="M 152 280 L 448 280"
          stroke="#B42A27"
          strokeWidth="110"
          strokeLinecap="square"
        />

        {/* Sofa cushions separation lines */}
        <line x1="300" y1="230" x2="300" y2="400" stroke="#871A18" strokeWidth="4" />

        {/* --- GIRL ON THE LEFT --- */}
        {/* Hair */}
        <path d="M 205 175 C 190 170, 180 185, 185 205 C 185 220, 195 240, 225 240" stroke="#D95D39" strokeWidth="14" strokeLinecap="round" />
        <path d="M 220 160 C 195 160, 200 195, 230 190" fill="#D95D39" />
        {/* Head */}
        <circle cx="225" cy="195" r="22" fill="#FDFBF7" stroke="#0C1821" strokeWidth="4.5" />
        {/* Hair Front Bangs */}
        <path d="M 206 182 C 212 175, 232 175, 238 185" stroke="#D95D39" strokeWidth="7" strokeLinecap="round" />
        {/* Hair Ponytail */}
        <path d="M 205 180 C 190 185, 180 195, 175 220 C 172 235, 185 238, 190 230" stroke="#D95D39" strokeWidth="9" strokeLinecap="round" />
        {/* 3D Glasses */}
        <rect x="216" y="190" width="22" height="9" rx="2" fill="#B42A27" stroke="#0C1821" strokeWidth="3" />
        <rect x="221" y="192" width="6" height="5" fill="#3AB4F2" /> {/* Cyan lens */}
        <rect x="231" y="192" width="6" height="5" fill="#FF1E1E" /> {/* Red lens */}
        {/* Arm / Body in white shirt */}
        <path d="M 204 250 C 195 260, 190 280, 195 305 L 255 305 C 260 280, 255 260, 246 250 Z" fill="#FDFBF7" stroke="#0C1821" strokeWidth="4.5" />
        <path d="M 215 250 L 235 250" stroke="#0C1821" strokeWidth="3" />
        {/* Skirt */}
        <path d="M 195 305 C 195 335, 210 345, 255 345 C 255 335, 255 305, 255 305 Z" fill="#D95D39" stroke="#0C1821" strokeWidth="4.5" />
        {/* Left Popcorn bucket */}
        <path d="M 220 280 L 217 315 L 238 315 L 235 280 Z" fill="#FDFBF7" stroke="#0C1821" strokeWidth="4.5" />
        <line x1="225" y1="280" x2="223" y2="315" stroke="#B42A27" strokeWidth="3.5" />
        <line x1="231" y1="280" x2="230" y2="315" stroke="#B42A27" strokeWidth="3.5" />
        {/* Popcorn fluffy top */}
        <path d="M 216 280 C 218 274, 224 274, 226 278 C 228 273, 234 273, 236 280 Z" fill="#D95D39" />

        {/* --- BOY ON THE RIGHT --- */}
        {/* Head */}
        <circle cx="375" cy="195" r="22" fill="#FDFBF7" stroke="#0C1821" strokeWidth="4.5" />
        {/* Hair Black */}
        <path d="M 353 195 C 353 170, 375 160, 392 175 C 395 180, 397 195, 397 195 C 390 190, 385 190, 375 195 Z" fill="#0C1821" />
        {/* Glasses */}
        <rect x="362" y="190" width="22" height="9" rx="2" fill="#B42A27" stroke="#0C1821" strokeWidth="3" />
        <rect x="366" y="192" width="6" height="5" fill="#3AB4F2" />
        <rect x="374" y="192" width="6" height="5" fill="#FF1E1E" />
        {/* Body Orange Shirt over Black shirt */}
        <path d="M 354 250 C 345 260, 340 280, 345 315 L 405 315 C 410 280, 405 260, 396 250 Z" fill="#D95D39" stroke="#0C1821" strokeWidth="4.5" />
        {/* Inner black shirt */}
        <path d="M 368 250 L 382 250 L 382 270 L 368 270 Z" fill="#0C1821" />
        {/* White pants */}
        <path d="M 345 315 C 345 345, 355 375, 370 395 C 375 400, 380 400, 385 395 C 395 375, 405 345, 405 315 Z" fill="#FDFBF7" stroke="#0C1821" strokeWidth="4.5" />
        <line x1="375" y1="315" x2="375" y2="395" stroke="#0C1821" strokeWidth="3" />
        {/* Right Popcorn Bucket */}
        <path d="M 360 280 L 357 315 L 378 315 L 375 280 Z" fill="#FDFBF7" stroke="#0C1821" strokeWidth="4.5" />
        <line x1="365" y1="280" x2="363" y2="315" stroke="#B42A27" strokeWidth="3.5" />
        <line x1="371" y1="280" x2="369" y2="315" stroke="#B42A27" strokeWidth="3.5" />
        {/* Popcorn fluffy top */}
        <path d="M 356 280 C 358 274, 364 274, 366 278 C 368 273, 374 273, 376 280 Z" fill="#D95D39" />

        {/* Bottom elements in poster - movie drink cups with straws on sofa rests */}
        <path d="M 130 310 L 128 335 L 142 335 L 140 310 Z" fill="#FDFBF7" stroke="#0C1821" strokeWidth="3" />
        <line x1="135" y1="310" x2="135" y2="295" stroke="#0C1821" strokeWidth="3" />
        
        <path d="M 460 310 L 458 335 L 472 335 L 470 310 Z" fill="#FDFBF7" stroke="#0C1821" strokeWidth="3" />
        <line x1="465" y1="310" x2="465" y2="295" stroke="#0C1821" strokeWidth="3" />

        {/* Floating star in illustration */}
        <path d="M 440 180 L 444 195 L 455 200 L 444 205 L 440 220 L 436 205 L 425 200 L 436 195 Z" fill="#FDFBF7" />
        <path d="M 150 160 L 153 170 L 160 175 L 153 180 L 150 190 L 147 180 L 140 175 L 147 170 Z" fill="#FDFBF7" />
      </svg>
    </div>
  );
};
