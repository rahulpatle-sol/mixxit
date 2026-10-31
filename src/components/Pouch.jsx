
import { forwardRef, useId, useState } from "react";
import { POUCH_IMAGES } from "../assets";
import { colorById } from "../data";

const INK = "#542d19";

const THEMES = {
  makhana: {
    top: "#fffaf0",
    mid: "#eadcbb",
    bottom: "#fff8e9",
    band: "#e9d9b5",
    bandText: "#653b20",
    drink: "#e9b957",
    steam: "#e8ad38",
    accent: "#a66a27",
    name: "MAKHANA PREMIX",
    type: "plain",
  },
  haldi: {
    top: "#ffdb52",
    mid: "#efa91e",
    bottom: "#f8c04b",
    band: "#b83d0a",
    bandText: "#ffffff",
    drink: "#e9a522",
    steam: "#e9a400",
    accent: "#9d4b12",
    name: "HALDI PREMIX",
    type: "haldi",
  },
  choco: {
    top: "#fff3df",
    mid: "#d5a477",
    bottom: "#60321d",
    band: "#5a2b19",
    bandText: "#f7c46a",
    drink: "#6c321d",
    steam: "#6b301a",
    accent: "#81421f",
    name: "CHOCO DRYFRUIT PREMIX",
    type: "choco",
  },
  rose: {
    top: "#ffe9ed",
    mid: "#f4b4c3",
    bottom: "#e83e66",
    band: "#c51f50",
    bandText: "#ffffff",
    drink: "#e77b9a",
    steam: "#d32b61",
    accent: "#a91e48",
    name: "ROSE PETAL PREMIX",
    type: "rose",
  },
};

function themeFor(id, color) {
  if (THEMES[id]) return THEMES[id];

  const c = color ?? colorById[id] ?? "#e1ac6e";

  return {
    top: "#fff8ee",
    mid: c,
    bottom: "#f5dfbd",
    band: INK,
    bandText: "#ffffff",
    drink: c,
    steam: c,
    accent: INK,
    name: `${String(id).toUpperCase()} PREMIX`,
    type: "plain",
  };
}

// --------------------------------------------------
// PRODUCT INGREDIENT ILLUSTRATIONS
// --------------------------------------------------

function Leaf({ x, y, rotate = 0, color = "#65812e" }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path
        d="M0 0 Q-24 -30 0 -38 Q25 -28 0 0Z"
        fill={color}
      />
      <path
        d="M0 0 Q0 -18 0 -34"
        fill="none"
        stroke="#d5b875"
        strokeWidth="1.2"
      />
    </g>
  );
}

function Ingredient({ x, y, color, rotate = 0, rx = 8, ry = 5 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <ellipse cx="0" cy="0" rx={rx} ry={ry} fill={color} />
      <ellipse
        cx="-2"
        cy="-1.5"
        rx={rx * 0.45}
        ry={ry * 0.35}
        fill="#fff4cf"
        opacity=".55"
      />
    </g>
  );
}

function Ingredients({ type }) {
  if (type === "haldi") {
    return (
      <g className="mixxit-ingredients">
        <Leaf x={67} y={297} rotate={-35} />
        <Leaf x={224} y={300} rotate={35} color="#71852d" />

        <path
          d="M65 312 Q76 290 94 305 Q103 316 86 322Z"
          fill="#d88a13"
        />
        <path
          d="M79 306 Q93 296 100 308"
          fill="none"
          stroke="#f6c45a"
          strokeWidth="3"
        />

        <path
          d="M113 316 L145 300 L154 307 L128 326Z"
          fill="#c17c24"
        />
        <path
          d="M135 321 L165 306 L173 314 L148 332Z"
          fill="#b96d19"
        />
        <path
          d="M151 321 L181 309 L190 316 L164 332Z"
          fill="#d08a28"
        />

        <ellipse cx="211" cy="316" rx="28" ry="14" fill="#6c3618" />
        <ellipse cx="211" cy="311" rx="25" ry="11" fill="#e5ad35" />

        {Array.from({ length: 9 }).map((_, i) => (
          <Ingredient
            key={i}
            x={194 + (i % 4) * 10}
            y={306 + Math.floor(i / 4) * 6}
            color={i % 2 ? "#a85b15" : "#dca13a"}
            rx={3}
            ry={2}
          />
        ))}
      </g>
    );
  }

  if (type === "choco") {
    return (
      <g className="mixxit-ingredients">
        <Leaf x={70} y={300} rotate={-35} />

        <path
          d="M72 301 L91 289 L104 302 L99 320 L79 320Z"
          fill="#a26b32"
        />
        <path
          d="M79 301 L93 294 L98 307 L85 314Z"
          fill="#d39b52"
        />

        <rect
          x="113"
          y="304"
          width="35"
          height="20"
          rx="5"
          fill="#b37a37"
          transform="rotate(-12 113 304)"
        />

        <ellipse cx="212" cy="315" rx="29" ry="14" fill="#71391e" />
        <ellipse cx="212" cy="310" rx="26" ry="10" fill="#d9a86a" />

        {Array.from({ length: 10 }).map((_, i) => (
          <Ingredient
            key={i}
            x={194 + (i % 5) * 9}
            y={305 + Math.floor(i / 5) * 7}
            color={i % 2 ? "#9b602b" : "#edc17d"}
            rx={4}
            ry={3}
          />
        ))}

        <path
          d="M145 323 L176 315 L184 321 L151 330Z"
          fill="#b77a3e"
        />
      </g>
    );
  }

  if (type === "rose") {
    return (
      <g className="mixxit-ingredients">
        <Leaf x={70} y={304} rotate={-35} />
        <Leaf x={92} y={311} rotate={45} color="#71863c" />

        <path
          d="M69 294 C48 283 53 262 69 268 C81 247 101 266 91 282 C107 295 83 310 69 294Z"
          fill="#b82048"
        />
        <path
          d="M70 289 C60 279 68 267 78 277 C89 266 94 282 79 292Z"
          fill="#ed5576"
        />
        <path
          d="M72 283 Q77 270 82 282 Q82 291 72 283Z"
          fill="#f58da4"
        />

        <path
          d="M108 315 L126 299 L145 316 L126 329Z"
          fill="#c98d63"
        />

        <ellipse cx="210" cy="315" rx="29" ry="14" fill="#843a26" />
        <ellipse cx="210" cy="310" rx="25" ry="10" fill="#d9a06d" />

        {Array.from({ length: 10 }).map((_, i) => (
          <Ingredient
            key={i}
            x={192 + (i % 5) * 9}
            y={306 + Math.floor(i / 5) * 7}
            color={["#a82a52", "#ed7990", "#e6bd78"][i % 3]}
            rx={4}
            ry={3}
          />
        ))}
      </g>
    );
  }

  return (
    <g className="mixxit-ingredients">
      <Leaf x={68} y={302} rotate={-40} />
      <Leaf x={94} y={310} rotate={35} color="#829443" />

      {Array.from({ length: 13 }).map((_, i) => (
        <Ingredient
          key={i}
          x={65 + (i % 5) * 11}
          y={306 + Math.floor(i / 5) * 9}
          color={i % 2 ? "#e4d1a3" : "#f7e8c6"}
          rx={6}
          ry={5}
        />
      ))}

      <ellipse cx="211" cy="315" rx="29" ry="14" fill="#76431f" />
      <ellipse cx="211" cy="310" rx="25" ry="10" fill="#dcae54" />

      {Array.from({ length: 9 }).map((_, i) => (
        <Ingredient
          key={i}
          x={194 + (i % 5) * 9}
          y={306 + Math.floor(i / 5) * 6}
          color="#a8752b"
          rx={4}
          ry={3}
        />
      ))}
    </g>
  );
}

// --------------------------------------------------
// MAIN SVG POUCH
// --------------------------------------------------

const SvgPouch = forwardRef(function SvgPouch(
  { id, label, color, className = "", style },
  ref
) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const t = themeFor(id, color);

  const body =
    "M30 48 Q30 27 48 27 H252 Q270 27 270 48 L280 370 Q282 409 248 414 H52 Q18 409 20 370 Z";

  return (
    <>
      <svg
        ref={ref}
        viewBox="0 0 300 440"
        className={`mixxit-pouch-svg ${className}`}
        style={style}
        role="img"
        aria-label={`${label} premix pouch`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main packaging */}
          <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={t.top} />
            <stop offset=".15" stopColor={t.mid} />
            <stop offset=".48" stopColor={t.top} />
            <stop offset=".84" stopColor={t.mid} />
            <stop offset="1" stopColor={t.top} />
          </linearGradient>

          <linearGradient id={`bottom-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.mid} />
            <stop offset="1" stopColor={t.bottom} />
          </linearGradient>

          <linearGradient id={`gloss-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity=".55" />
            <stop offset=".25" stopColor="#fff" stopOpacity=".04" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".3" />
            <stop offset=".8" stopColor="#fff" stopOpacity=".02" />
            <stop offset="1" stopColor="#fff" stopOpacity=".4" />
          </linearGradient>

          <linearGradient id={`drink-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff5db" />
            <stop offset=".25" stopColor={t.drink} />
            <stop offset="1" stopColor={t.drink} />
          </linearGradient>

          <radialGradient id={`light-${uid}`}>
            <stop offset="0" stopColor="#fff" stopOpacity=".55" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>

          <clipPath id={`clip-${uid}`}>
            <path d={body} />
          </clipPath>

          <filter id={`shadow-${uid}`} x="-30%" y="-20%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse
          cx="150"
          cy="423"
          rx="105"
          ry="9"
          fill="#54351d"
          opacity=".17"
          filter={`url(#shadow-${uid})`}
        />

        {/* Pouch body */}
        <g className="mixxit-pouch-body">
          <path d={body} fill={`url(#body-${uid})`} />

          <g clipPath={`url(#clip-${uid})`}>
            {/* Bottom product colour */}
            {t.type === "haldi" || t.type === "rose" ? (
              <rect
                x="0"
                y="322"
                width="300"
                height="105"
                fill={t.band}
              />
            ) : t.type === "choco" ? (
              <>
                <rect
                  x="0"
                  y="320"
                  width="300"
                  height="108"
                  fill={`url(#bottom-${uid})`}
                />
                <path
                  d="M0 349 Q70 320 135 354 T300 343 V440 H0Z"
                  fill="#35190f"
                  opacity=".45"
                />
              </>
            ) : null}

            {/* Pouch highlights */}
            <ellipse
              cx="145"
              cy="130"
              rx="145"
              ry="170"
              fill={`url(#light-${uid})`}
            />

            <path
              d="M30 55 Q65 150 40 380 L65 400 Q84 190 60 45Z"
              fill="#fff"
              opacity=".2"
            />

            <path
              d="M263 50 Q235 190 263 400"
              stroke="#fff"
              strokeWidth="9"
              opacity=".2"
              fill="none"
            />

            {/* Subtle packaging creases */}
            <path
              d="M25 115 Q42 170 27 260"
              stroke="#9b7650"
              strokeOpacity=".1"
              strokeWidth="3"
              fill="none"
            />

            <path
              d="M270 130 Q250 200 275 270"
              stroke="#9b7650"
              strokeOpacity=".12"
              strokeWidth="3"
              fill="none"
            />

            {/* Shine layer */}
            <rect
              x="20"
              y="30"
              width="260"
              height="390"
              fill={`url(#gloss-${uid})`}
              className="mixxit-gloss"
            />

            {/* Top seal */}
            <rect
              x="25"
              y="28"
              width="250"
              height="37"
              fill="#fff"
              opacity=".22"
            />

            <path
              d="M25 38 H275 M25 45 H275 M25 55 H275"
              stroke="#997b54"
              strokeOpacity=".15"
              strokeWidth="1.5"
            />

            {/* Bottom seal */}
            <path
              d="M22 394 Q150 408 278 394"
              stroke="#fff"
              strokeOpacity=".3"
              strokeWidth="3"
              fill="none"
            />
          </g>

          {/* Outer pouch edges */}
          <path
            d={body}
            fill="none"
            stroke="#a47e4e"
            strokeOpacity=".25"
            strokeWidth="1.5"
          />
        </g>

        {/* Animated steam */}
        <g className="mixxit-steam">
          <path
            d="M145 190 C112 157 164 135 147 103 C134 79 158 60 163 43"
            stroke={t.steam}
            strokeWidth="8"
            strokeLinecap="round"
            opacity=".65"
            fill="none"
            className="steam-line steam-one"
          />

          <path
            d="M164 190 C143 163 188 136 169 106 C157 84 178 66 183 49"
            stroke={t.steam}
            strokeWidth="5"
            strokeLinecap="round"
            opacity=".45"
            fill="none"
            className="steam-line steam-two"
          />

          <path
            d="M128 179 C111 160 135 147 133 130"
            stroke={t.steam}
            strokeWidth="3"
            strokeLinecap="round"
            opacity=".5"
            fill="none"
            className="steam-line steam-three"
          />
        </g>

        {/* Brand logo */}
        <g className="mixxit-logo">
          <text
            x="150"
            y="123"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontStyle="italic"
            fontWeight="bold"
            fontSize="42"
            fill="#813e17"
            letterSpacing="-2"
          >
            Mixx
            <tspan fill="#e36e13">it</tspan>
          </text>

          <path
            d="M190 83 Q205 65 222 75 Q211 92 190 83Z"
            fill="#6d8e2d"
          />

          <path
            d="M194 82 Q207 78 217 77"
            stroke="#e9d39c"
            strokeWidth="1.2"
            fill="none"
          />

          <path
            d="M185 88 Q175 73 189 67 Q204 68 199 82"
            fill="none"
            stroke="#75401d"
            strokeWidth="3"
          />
        </g>

        {/* Animated mug */}
        <g className="mixxit-mug">
          {/* Mug handle */}
          <path
            d="M189 213 Q231 204 227 246 Q223 276 190 270"
            fill="none"
            stroke="#a17b4c"
            strokeWidth="9"
          />

          <path
            d="M190 217 Q216 214 216 245 Q214 263 190 264"
            fill="none"
            stroke="#fff9ed"
            strokeWidth="5"
          />

          {/* Cup body */}
          <path
            d="M104 201 Q104 193 116 193 H190 L185 277 Q184 290 171 290 H124 Q111 289 110 277Z"
            fill="#fffaf0"
            stroke="#b68d5d"
            strokeWidth="2"
          />

          {/* Drink */}
          <path
            d="M113 211 Q148 217 186 210 L182 274 Q181 282 169 282 H127 Q118 280 118 271Z"
            fill={`url(#drink-${uid})`}
          />

          <ellipse
            cx="150"
            cy="210"
            rx="37"
            ry="8"
            fill="#fff5d9"
            stroke="#a67a49"
            strokeWidth="1.5"
          />

          <ellipse
            cx="150"
            cy="212"
            rx="31"
            ry="5"
            fill={t.drink}
            opacity=".75"
          />

          {/* Cup reflection */}
          <path
            d="M121 225 Q116 252 125 271"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            opacity=".6"
          />

          <path
            d="M174 228 L170 268"
            stroke="#fff"
            strokeWidth="2"
            opacity=".5"
          />
        </g>

        {/* Ingredient illustrations */}
        <Ingredients type={t.type} />

        {/* Product label */}
        <g className="mixxit-product-label">
          <text
            x="150"
            y="350"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fontWeight="500"
            letterSpacing="1.3"
            fill={t.bandText}
            opacity=".85"
          >
            JAGGERY-BASED
          </text>

          <text
            x="150"
            y="372"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize={t.type === "choco" ? "11.5" : "14"}
            fontWeight="700"
            letterSpacing=".2"
            fill={t.bandText}
          >
            {t.name}
          </text>

          {t.type === "choco" && (
            <text
              x="150"
              y="389"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="8"
              fill="#fff"
            >
              Rich Chocolate Taste with Dry Fruits
            </text>
          )}
        </g>

        {/* Green vegetarian mark */}
        <g transform="translate(226 344)">
          <rect
            width="15"
            height="15"
            fill="none"
            stroke="#43843b"
            strokeWidth="1.5"
          />
          <rect
            x="3"
            y="3"
            width="9"
            height="9"
            fill="#43843b"
          />
          <circle cx="7.5" cy="7.5" r="3.5" fill="#fff" />
        </g>

        {/* Bottom decorative sparkle */}
        <g className="mixxit-sparkles" fill="#fff">
          <circle cx="48" cy="345" r="1.8" opacity=".5" />
          <circle cx="257" cy="295" r="2" opacity=".5" />
          <circle cx="238" cy="174" r="1.5" opacity=".6" />
        </g>
      </svg>

      <style>{`
        .mixxit-pouch-svg,
        .mixxit-pouch-art {
          transform-origin: 50% 55%;
          animation: mixxit-float 5s ease-in-out infinite;
          will-change: transform;
        }

        .mixxit-pouch-body {
          transform-origin: 50% 50%;
          animation: mixxit-breathe 5s ease-in-out infinite;
        }

        .mixxit-mug {
          transform-origin: 50% 50%;
          animation: mixxit-mug 4s ease-in-out infinite;
        }

        .mixxit-steam {
          transform-origin: 50% 100%;
        }

        .steam-line {
          stroke-dasharray: 120;
          animation: mixxit-steam 3s ease-in-out infinite;
        }

        .steam-two {
          animation-delay: .7s;
        }

        .steam-three {
          animation-delay: 1.2s;
        }

        .mixxit-ingredients {
          transform-origin: 50% 50%;
          animation: mixxit-ingredients 4s ease-in-out infinite;
        }

        .mixxit-gloss {
          animation: mixxit-shine 6s ease-in-out infinite;
        }

        .mixxit-sparkles {
          animation: mixxit-sparkle 3s ease-in-out infinite;
        }

        .mixxit-logo {
          transform-origin: 50% 50%;
          animation: mixxit-logo 5s ease-in-out infinite;
        }

        @keyframes mixxit-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(-.5deg);
          }
        }

        @keyframes mixxit-breathe {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          50% {
            transform: scaleX(1.008) scaleY(1.003);
          }
        }

        @keyframes mixxit-mug {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes mixxit-steam {
          0% {
            opacity: 0;
            stroke-dashoffset: 80;
            transform: translateY(8px);
          }
          40% {
            opacity: .8;
          }
          100% {
            opacity: 0;
            stroke-dashoffset: -50;
            transform: translateY(-12px);
          }
        }

        @keyframes mixxit-ingredients {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes mixxit-shine {
          0%, 100% {
            opacity: .35;
          }
          50% {
            opacity: .8;
          }
        }

        @keyframes mixxit-sparkle {
          0%, 100% {
            opacity: .4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes mixxit-logo {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1.5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mixxit-pouch-svg,
          .mixxit-pouch-art,
          .mixxit-pouch-body,
          .mixxit-mug,
          .mixxit-steam,
          .steam-line,
          .mixxit-ingredients,
          .mixxit-gloss,
          .mixxit-sparkles,
          .mixxit-logo {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
});

// --------------------------------------------------
// COMMON POUCH COMPONENT
// --------------------------------------------------

const Pouch = forwardRef(function Pouch(
  { id, label, color, className = "", style },
  ref
) {
  const [broken, setBroken] = useState(false);
  const src = POUCH_IMAGES?.[id];

  // Use actual product photography when available.
  if (src && !broken) {
    return (
      <img
        ref={ref}
        src={src}
        alt={`${label} premix pouch`}
        draggable={false}
        onError={() => setBroken(true)}
        className={`mixxit-pouch-art object-contain ${className}`}
        style={{
          ...style,
          filter: "drop-shadow(0 12px 18px rgba(67, 39, 17, 0.16))",
        }}
      />
    );
  }

  // Animated SVG fallback.
  return (
    <SvgPouch
      ref={ref}
      id={id}
      label={label}
      color={color}
      className={className}
      style={{
        ...style,
        filter: "drop-shadow(0 12px 18px rgba(67, 39, 17, 0.16))",
      }}
    />
  );
});

export default Pouch;
