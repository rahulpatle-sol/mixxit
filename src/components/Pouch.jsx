import { useId, useState } from "react";
import { ASSETS } from "../assets";
import { colorById } from "../data";

const INK = "#4b2e1a";

function SvgPouch({ label, color, className = "", style, ...rest }) {
  const gradientId = `pouch-gradient-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      style={style}
      role="img"
      aria-label={`${label} premix pouch`}
      fill="none"
      {...rest}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M20 20 L180 20 L190 40 L184 260 Q100 276 16 260 L10 40 Z"
        fill={`url(#${gradientId})`}
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M14 34 H186" stroke={INK} strokeWidth="3" strokeDasharray="6 5" />
      <circle cx="100" cy="116" r="46" fill="#fdfaf5" stroke={INK} strokeWidth="4" />
      <text
        x="100"
        y="124"
        textAnchor="middle"
        fontFamily="Kaushan Script, cursive"
        fontSize="32"
        fill={INK}
      >
        Mixxit
      </text>
      <rect
        x="30"
        y="186"
        width="140"
        height="40"
        rx="20"
        fill="#fdfaf5"
        stroke={INK}
        strokeWidth="3"
      />
      <text
        x="100"
        y="212"
        textAnchor="middle"
        fontFamily="Kaushan Script, cursive"
        fontSize="24"
        fill={INK}
      >
        {label}
      </text>
      <text
        x="100"
        y="246"
        textAnchor="middle"
        fontFamily="DM Sans, sans-serif"
        fontSize="12"
        fontWeight="700"
        fill={INK}
      >
        jaggery premix
      </text>
    </svg>
  );
}

export default function Pouch({ id, label, color, className = "", style, ...rest }) {
  const [broken, setBroken] = useState(false);
  const src = ASSETS[id];
  const fallbackColor = color ?? colorById[id];

  if (broken) {
    return (
      <SvgPouch
        label={label}
        color={fallbackColor}
        className={className}
        style={style}
        {...rest}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-brown/20 bg-gradient-to-b from-brown/10 to-brown/5 shadow-[4px_4px_0_rgba(75,46,26,0.15)] ${className}`}
      style={style}
      {...rest}
    >
      <img
        src={src}
        alt={`${label} premix pouch`}
        className="w-full h-full object-cover"
        onError={() => setBroken(true)}
      />
      <div className="absolute inset-0 bg-brown/20"></div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-xs">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-white/95 border border-brown/20 flex items-center justify-center shadow-md">
                <span className="text-brown font-bold italic text-[clamp(1.1rem,6vw,1.9rem)] leading-tight">
                  Mixxit
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm border border-brown/20 rounded-full px-4 py-1.5">
            <span className="text-brown font-bold italic text-lg">{label}</span>
          </div>
          <p className="mt-2 text-center text-brown/70 text-sm font-bold uppercase tracking-wider">
            jaggery premix
          </p>
        </div>
      </div>
    </div>
  );
}
