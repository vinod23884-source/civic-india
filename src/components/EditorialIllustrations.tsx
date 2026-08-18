import React from "react";

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-3xl">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="450" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FAFC" />
          <stop stopColor="#EEF2F6" />
        </linearGradient>
        <linearGradient id="amberGlow" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#D97706" />
          <stop stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Background Architectural Canvas */}
      <rect width="800" height="450" fill="url(#skyGrad)" rx="24" />
      <path d="M 0 350 L 800 350" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M 0 390 L 800 390" stroke="#94A3B8" strokeWidth="2" strokeDasharray="16 12" />

      {/* Buildings & Urban Silhouettes */}
      <rect x="60" y="160" width="100" height="190" fill="#E2E8F0" rx="4" />
      <rect x="180" y="120" width="120" height="230" fill="#CBD5E1" rx="4" />
      <rect x="520" y="140" width="130" height="210" fill="#CBD5E1" rx="4" />
      <rect x="670" y="180" width="90" height="170" fill="#E2E8F0" rx="4" />

      {/* Split Reflection Line */}
      <path d="M 400 60 L 400 390" stroke="#0F172A" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />

      {/* Left: Unconscious Shortcut */}
      <g transform="translate(140, 240)">
        <rect x="0" y="60" width="140" height="50" rx="8" fill="#FCA5A5" opacity="0.4" />
        <rect x="10" y="45" width="120" height="45" rx="6" fill="#991B1B" />
        <circle cx="35" cy="95" r="14" fill="#1E293B" />
        <circle cx="105" cy="95" r="14" fill="#1E293B" />
        <text x="70" y="73" fill="#FFFFFF" fontSize="10" fontWeight="700" textAnchor="middle">"JUST 5 MINS"</text>
        <circle cx="160" cy="50" r="10" fill="#DC2626" />
        <path d="M 160 62 L 160 95 M 160 70 L 145 80 M 160 70 L 175 80" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
        <text x="160" y="115" fill="#DC2626" fontSize="10" fontWeight="700" textAnchor="middle">Blocked Path</text>
      </g>

      {/* Right: Conscious Awareness */}
      <g transform="translate(460, 230)">
        <rect x="20" y="80" width="260" height="20" rx="4" fill="#E2E8F0" />
        {/* Wheelchair User & Pedestrian clear corridor */}
        <circle cx="70" cy="45" r="11" fill="#1E3A8A" />
        <path d="M 70 58 L 70 85 M 70 68 L 85 78 M 70 68 L 55 78" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="55" r="10" fill="#047857" />
        <circle cx="150" cy="80" r="16" stroke="#047857" strokeWidth="3" fill="none" />
        <path d="M 150 67 L 150 82 L 162 82" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        <text x="150" y="115" fill="#047857" fontSize="10" fontWeight="700" textAnchor="middle">Clear Corridor</text>
      </g>

      {/* Center Reflective Badge */}
      <rect x="310" y="30" width="180" height="34" rx="17" fill="#0F172A" />
      <text x="400" y="52" fill="#FFFFFF" fontSize="12" fontWeight="700" letterSpacing="1" textAnchor="middle">
        THE EVERYDAY CHOICE
      </text>
    </svg>
  );
}

export function ScenarioIllustration({ type }: { type: string }) {
  switch (type) {
    case "buffet":
      return (
        <svg viewBox="0 0 700 320" fill="none" className="w-full h-auto rounded-2xl bg-amber-50/60 border border-amber-100">
          <rect x="80" y="160" width="540" height="70" rx="10" fill="#D97706" opacity="0.15" />
          <rect x="90" y="140" width="520" height="30" rx="6" fill="#B45309" />
          {/* Buffet Cloche / Chafing Dishes */}
          <circle cx="180" cy="130" r="28" fill="#F59E0B" />
          <circle cx="350" cy="130" r="28" fill="#F59E0B" />
          <circle cx="520" cy="130" r="28" fill="#F59E0B" />
          {/* People Gathering */}
          <circle cx="150" cy="70" r="14" fill="#0F172A" />
          <path d="M 150 85 L 150 135" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="280" cy="65" r="14" fill="#1E3A8A" />
          <path d="M 280 80 L 280 135" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="430" cy="72" r="14" fill="#047857" />
          <path d="M 430 87 L 430 135" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
          <circle cx="560" cy="68" r="14" fill="#7C2D12" />
          <path d="M 560 83 L 560 135" stroke="#7C2D12" strokeWidth="4" strokeLinecap="round" />
          {/* Overloaded plate highlight */}
          <path d="M 280 100 Q 320 85 340 105" stroke="#D97706" strokeWidth="3" />
        </svg>
      );

    case "funeral":
      return (
        <svg viewBox="0 0 700 320" fill="none" className="w-full h-auto rounded-2xl bg-slate-100/70 border border-slate-200">
          <rect width="700" height="320" rx="16" fill="#F8FAFC" />
          {/* Gentle, Solemn Seated Silhouette Group */}
          <ellipse cx="350" cy="270" rx="260" ry="25" fill="#E2E8F0" />
          <g opacity="0.8">
            <circle cx="240" cy="140" r="16" fill="#475569" />
            <path d="M 220 190 Q 240 160 260 190 L 260 240 L 220 240 Z" fill="#475569" />

            <circle cx="350" cy="130" r="16" fill="#334155" />
            <path d="M 330 180 Q 350 150 370 180 L 370 240 L 330 240 Z" fill="#334155" />

            <circle cx="460" cy="140" r="16" fill="#475569" />
            <path d="M 440 190 Q 460 160 480 190 L 480 240 L 440 240 Z" fill="#475569" />
          </g>
          {/* Phone in Pocket - Silent glow */}
          <rect x="338" y="210" width="24" height="42" rx="4" fill="#0F172A" />
          <circle cx="350" cy="231" r="5" fill="#38BDF8" opacity="0.8" />
        </svg>
      );

    case "redlight":
      return (
        <svg viewBox="0 0 700 320" fill="none" className="w-full h-auto rounded-2xl bg-slate-900 border border-slate-800">
          {/* Road */}
          <rect y="160" width="700" height="160" fill="#1E293B" />
          <path d="M 0 240 L 700 240" stroke="#F8FAFC" strokeWidth="2" strokeDasharray="20 16" opacity="0.6" />
          {/* Traffic Signal Post */}
          <rect x="520" y="30" width="45" height="110" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="2" />
          <circle cx="542" cy="55" r="13" fill="#EF4444" />
          <circle cx="542" cy="85" r="11" fill="#475569" />
          <circle cx="542" cy="115" r="11" fill="#475569" />
          <rect x="540" y="140" width="5" height="100" fill="#475569" />
          {/* Lone Vehicle Waiting patiently */}
          <g transform="translate(180, 180)">
            <rect x="0" y="10" width="130" height="50" rx="8" fill="#0284C7" />
            <rect x="25" y="0" width="80" height="30" rx="4" fill="#BAE6FD" />
            <circle cx="30" cy="60" r="15" fill="#0F172A" />
            <circle cx="100" cy="60" r="15" fill="#0F172A" />
          </g>
        </svg>
      );

    case "footpath":
      return (
        <svg viewBox="0 0 700 320" fill="none" className="w-full h-auto rounded-2xl bg-amber-50/40 border border-amber-200">
          <rect y="200" width="700" height="120" fill="#334155" />
          {/* Kerb & Footpath */}
          <rect y="70" width="700" height="130" fill="#E2E8F0" />
          <rect y="195" width="700" height="10" fill="#CBD5E1" />
          {/* Obstructing Bike / Car */}
          <g transform="translate(320, 95)">
            <rect x="0" y="15" width="150" height="65" rx="10" fill="#DC2626" />
            <text x="75" y="52" fill="#FFFFFF" fontSize="11" fontWeight="800" textAnchor="middle">PARKED ON WALKWAY</text>
          </g>
          {/* Person with Stroller having to step down */}
          <g transform="translate(100, 110)">
            <circle cx="30" cy="20" r="12" fill="#0F172A" />
            <path d="M 30 35 L 30 75 M 30 45 L 50 60" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
            {/* Stroller descending */}
            <circle cx="70" cy="75" r="12" stroke="#0F172A" strokeWidth="3" fill="none" />
            <path d="M 45 60 L 70 75" stroke="#0F172A" strokeWidth="3" />
            <path d="M 90 90 L 130 140" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
          </g>
        </svg>
      );

    case "ambulance":
      return (
        <svg viewBox="0 0 700 320" fill="none" className="w-full h-auto rounded-2xl bg-red-50/50 border border-red-200">
          <rect y="100" width="700" height="220" fill="#1E293B" />
          <path d="M 0 210 L 700 210" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="16 12" />
          {/* Diagonally shifted car giving way */}
          <g transform="translate(120, 110) rotate(-12)">
            <rect width="110" height="50" rx="8" fill="#64748B" />
          </g>
          <g transform="translate(120, 240) rotate(12)">
            <rect width="110" height="50" rx="8" fill="#64748B" />
          </g>
          {/* Ambulance Moving Straight Through Center */}
          <g transform="translate(380, 150)">
            <rect x="0" y="0" width="160" height="65" rx="8" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
            <rect x="65" y="15" width="30" height="35" fill="#DC2626" />
            <rect x="50" y="27" width="60" height="11" fill="#DC2626" />
            <circle cx="35" cy="65" r="14" fill="#0F172A" />
            <circle cx="125" cy="65" r="14" fill="#0F172A" />
            <circle cx="80" cy="-5" r="8" fill="#EF4444" className="animate-pulse" />
          </g>
        </svg>
      );

    default:
      return null;
  }
}