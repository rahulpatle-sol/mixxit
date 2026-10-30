import { useState } from "react";
import { ASSETS } from "../assets";
import { colorById } from "../data";

const ink = "#4b2e1a";

function SvgPouch({ label, color, className, style }) {
  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      style={style}
      role="img"
      aria-label={`${label} premix pouch`}
      fill="none"
    >
      <defs>
        <linearGradient id="pouch-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M20 20 L180 20 L190 40 L184 260 Q100 276 16 260 L10 40 Z"
        fill="url(#pouch-grad)"
        stroke={ink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M14 34 H186" stroke={ink} strokeWidth="3" strokeDasharray="6 5" />
      <circle cx="100" cy="116" r="46" fill="#fdfaf5" stroke={ink} strokeWidth="4" />
      <text
        x="100"
        y="124"
        textAnchor="middle"
        fontFamily="Kaushan Script, cursive"
        fontSize="32"
        fill={ink}
      >
        Mixxit
      </text>
      <rect x="30" y="186" width="140" height="40" rx="20" fill="#fdfaf5" stroke={ink} strokeWidth="3" />
      <text
        x="100"
        y="212"
        textAnchor="middle"
        fontFamily="Kaushan Script, cursive"
        fontSize="24"
        fill={ink}
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
        fill={ink}
      >
        jaggery premix
      </text>
    </svg>
  );
}

export default function Pouch({ id, label, color, className = "", style, ...rest }) {
  const [broken, setBroken] = useState(false);
  const src = ASSETS[id];
  const fallbackColor = color || colorById[id];

  if (broken) {
    return <SvgPouch label={label} color={fallbackColor} className={className} style={style} {...rest} />;
  }

  return (
    <img
      src={src}
      alt={`${label} premix pouch`}
      className={className}
      style={style}
      onError={() => setBroken(true)}
      {...rest}
    />
  );
}
