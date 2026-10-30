import { motion } from "motion/react";
import { Leaf, Box, FlaskConical, Heart } from "lucide-react";

const ICONS = {
  natural: Leaf,
  jaggery: Box,
  preservatives: FlaskConical,
  love: Heart,
};

const TITLES = {
  natural: "Natural Ingredients",
  jaggery: "Jaggery Based",
  preservatives: "No Preservatives",
  love: "Made with Love",
};

const ROTATE = { natural: -6, jaggery: 6, preservatives: -4, love: 5 };

export function Sticker({ id, className = "" }) {
  const Icon = ICONS[id];
  const rot = ROTATE[id];

  return (
    <motion.div
      whileHover={{ rotate: rot + 9, scale: 1.07 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`flex flex-col items-center justify-center h-22 w-22 rounded-full border-4 border-brown bg-paper shadow-[5px_5px_0_rgba(75,46,26,0.35)] rotate-[${rot}deg] will-change-transform ${className}`}
      aria-label={TITLES[id]}
    >
      <Icon size={18} className="text-brown" />
      <span className="mt-1.5 font-script text-brown text-xs leading-tight text-center select-none">
        {TITLES[id]}
      </span>
    </motion.div>
  );
}

export function StickerGroup({ ids, className = "", gap = "3" }) {
  return (
    <div className={`flex flex-wrap gap-${gap} ${className}`}>
      {ids.map((id) => (
        <Sticker key={id} id={id} />
      ))}
    </div>
  );
}
