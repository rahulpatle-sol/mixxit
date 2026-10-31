import { forwardRef, useId, useState } from "react";
import { POUCH_IMAGES } from "../assets";
import { colorById } from "../data";

const INK = "#4b2e1a";

// Har product ka apna colour theme. Real PNG aate hi ye use nahi hota.
const THEMES = {
  rose: { top: "#fff3f6", mid: "#f6b4c6", band: "#c2185b", bandText: "#ffffff", drink: "#ef7d9f", name: "Rose Petal" },
  choco: { top: "#fbf2e6", mid: "#d8b28a", band: "#5b3220", bandText: "#ffffff", drink: "#6b3a22", name: "Choco Dryfruit" },
  haldi: { top: "#ffe58a", mid: "#fdb934", band: "#e8801a", bandText: "#ffffff", drink: "#fcd34d", name: "Haldi" },
  makhana: { top: "#fffdf7", mid: "#f1e7cf", band: "#e6d9b8", bandText: INK, drink: "#f3dc98", name: "Makhana" },
};

function themeFor(id, color) {
  if (THEMES[id]) return THEMES[id];
  const c = color ?? colorById[id] ?? "#e1ac6e";
  return { top: "#fff8ee", mid: c, band: INK, bandText: "#ffffff", drink: c, name: id };
}

const SvgPouch = forwardRef(function SvgPouch({ id, label, color, className = "", style }, ref) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const t = themeFor(id, color);
  const body = "M30 38 Q30 26 42 26 H258 Q270 26 270 38 L279 372 Q281 408 250 410 H50 Q19 408 21 372 Z";

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 440"
      className={className}
      style={style}
      role="img"
      aria-label={`${label} premix pouch`}
      fill="none"
    >
      <defs>
        <linearGradient id={`g${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={t.top} />
          <stop offset="0.62" stopColor={t.mid} />
          <stop offset="1" stopColor={t.mid} />
        </linearGradient>
        <linearGradient id={`s${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`c${uid}`}>
          <path d={body} />
        </clipPath>
      </defs>

      <ellipse cx="150" cy="424" rx="108" ry="10" fill={INK} opacity="0.16" />
      <path d={body} fill={`url(#g${uid})`} />

      <g clipPath={`url(#c${uid})`}>
        {/* bottom name band */}
        <rect x="0" y="322" width="300" height="100" fill={t.band} />
        {/* top zip seal */}
        <rect x="0" y="26" width="300" height="38" fill="#fff" opacity="0.38" />
        <path d="M20 36H280M20 46H280M20 56H280" stroke={INK} strokeOpacity="0.14" strokeWidth="2" />
        {/* gloss */}
        <path d="M38 40 L118 40 L84 410 L34 410 Z" fill={`url(#s${uid})`} />
      </g>

      {/* logo */}
      <text x="150" y="128" textAnchor="middle" fontFamily="'Kaushan Script', cursive" fontSize="54" fill={INK}>
        Mixx<tspan fill="#fc7305">it</tspan>
      </text>
      <path d="M205 82 q18 -22 36 -8 q-12 20 -36 8Z" fill="#63920e" />

      {/* mug + steam */}
      <path d="M118 212 C 96 190, 150 178, 132 150 C 120 130, 150 120, 160 100" stroke={t.drink} strokeWidth="10" strokeLinecap="round" opacity="0.9" />
      <rect x="112" y="214" width="78" height="64" rx="12" fill="#fff" opacity="0.92" stroke={INK} strokeOpacity="0.35" strokeWidth="2" />
      <rect x="118" y="222" width="66" height="50" rx="9" fill={t.drink} />
      <path d="M190 228 q26 0 26 22 q0 20 -26 20" stroke={INK} strokeOpacity="0.45" strokeWidth="6" strokeLinecap="round" />

      <text x="150" y="342" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="2.5" fill={t.bandText} opacity="0.85">
        JAGGERY-BASED
      </text>
      <text x="150" y="376" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="25" fontWeight="700" fill={t.bandText}>
        {t.name === id ? label : t.name}
      </text>
      <text x="150" y="398" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="3" fill={t.bandText} opacity="0.85">
        PREMIX
      </text>

      <path d={body} stroke={INK} strokeOpacity="0.3" strokeWidth="2" />
    </svg>
  );
});

const Pouch = forwardRef(function Pouch({ id, label, color, className = "", style }, ref) {
  const [broken, setBroken] = useState(false);
  const src = POUCH_IMAGES[id];

  if (src && !broken) {
    return (
      <img
        ref={ref}
        src={src}
        alt={`${label} premix pouch`}
        draggable={false}
        onError={() => setBroken(true)}
        className={`object-contain ${className}`}
        style={style}
      />
    );
  }
  return <SvgPouch ref={ref} id={id} label={label} color={color} className={className} style={style} />;
});

export default Pouch;