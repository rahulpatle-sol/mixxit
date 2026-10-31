import { motion } from "motion/react";
import { Apple, Cuboid, FlaskConical, Heart, Leaf } from "lucide-react";

const META = {
  natural: { icon: Leaf, title: "Natural ingredients", short: "Natural", bg: "bg-green", fg: "text-white", rot: -6 },
  jaggery: { icon: Cuboid, title: "Jaggery based", short: "Jaggery based", bg: "bg-tan", fg: "text-brown", rot: 5 },
  preservatives: { icon: FlaskConical, title: "No preservatives", short: "No preservatives", bg: "bg-orange", fg: "text-brown", rot: -4 },
  love: { icon: Heart, title: "Made with love", short: "Made with love", bg: "bg-white", fg: "text-brown", rot: 6 },
  fruit: { icon: Apple, title: "Real fruit", short: "Real fruit", bg: "bg-green", fg: "text-white", rot: -5 },
};

const SIZES = {
  lg: { box: "h-28 w-28 md:h-32 md:w-32", icon: 32, text: "text-[15px]" },
  md: { box: "h-20 w-20 md:h-24 md:w-24", icon: 24, text: "text-xs" },
};

// size: "lg" | "md" (round infographic stickers) | "chip" (small pill for cards)
// Wrapper div GSAP ke liye hai, andar ka motion.div hover wobble ke liye. Dono alag taaki transform na ladein.
export default function Sticker({ id, size = "lg", className = "" }) {
  const meta = META[id];
  if (!meta) return null;
  const Icon = meta.icon;

  if (size === "chip") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border-2 border-brown px-2.5 py-1 text-xs font-bold ${meta.bg} ${meta.fg} ${className}`}
      >
        <Icon size={14} aria-hidden="true" />
        {meta.short}
      </span>
    );
  }

  const s = SIZES[size] ?? SIZES.lg;
  return (
    <div className={className}>
      <motion.div
        role="img"
        aria-label={meta.title}
        style={{ rotate: meta.rot }}
        whileHover={{ rotate: meta.rot + 10, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 320, damping: 16 }}
        className={`flex shrink-0 flex-col items-center justify-center rounded-full border-[3px] border-brown shadow-[4px_4px_0_rgba(75,46,26,0.25)] will-change-transform ${s.box} ${meta.bg} ${meta.fg}`}
      >
        <Icon size={s.icon} aria-hidden="true" />
        <span className={`mt-1 select-none px-2 text-center font-script leading-[1.05] ${s.text}`}>{meta.title}</span>
      </motion.div>
    </div>
  );
}

export function StickerGroup({ ids = [], size = "lg", className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {ids.map((id) => (
        <Sticker key={id} id={id} size={size} />
      ))}
    </div>
  );
}