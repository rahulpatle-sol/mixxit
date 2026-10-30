import { motion } from "motion/react";
import { Cuboid, FlaskConical, Heart, Leaf } from "lucide-react";

const ICONS = {
  natural: Leaf,
  jaggery: Cuboid,
  preservatives: FlaskConical,
  love: Heart,
};

const TITLES = {
  natural: "Natural Ingredients",
  jaggery: "Jaggery Based",
  preservatives: "No Preservatives",
  love: "Made with Love",
};

const ROTATIONS = { natural: -6, jaggery: 6, preservatives: -4, love: 5 };
const GAPS = { 2: "gap-2", 3: "gap-3", 4: "gap-4" };

export default function Sticker({ id, className = "", small = false }) {
  const Icon = ICONS[id];
  const rotation = ROTATIONS[id] ?? 0;

  return (
    <motion.div
      role="img"
      aria-label={TITLES[id] ?? id}
      style={{ rotate: rotation }}
      whileHover={{ rotate: rotation + 9, scale: 1.07 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`flex shrink-0 flex-col items-center justify-center rounded-full border border-brown bg-white/90 shadow-[3px_3px_0_rgba(75,46,26,0.15)] will-change-transform ${small ? "h-8 w-8" : "h-10 w-10"} ${className}`}
    >
      {Icon && <Icon size={small ? 10 : 14} aria-hidden="true" className="text-brown" />}
      {small && (
        <span className="mt-0.5 select-none text-center font-script text-[10px] leading-tight text-brown">
          {TITLES[id] ?? id}
        </span>
      )}
    </motion.div>
  );
}

export function StickerGroup({ ids = [], className = "", gap = "2", small = false }) {
  return (
    <div className={`flex flex-wrap ${GAPS[gap] ?? GAPS[2]} ${className}`}>
      {ids.map((id) => (
        <Sticker key={id} id={id} small={small} />
      ))}
    </div>
  );
}
