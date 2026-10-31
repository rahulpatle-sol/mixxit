import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { motion } from "motion/react";
import { PHOTOS } from "../assets";
import { useStore } from "../store";
import Img from "./Img";
import Pouch from "./Pouch";
import { StickerGroup } from "./Sticker";

// Arch-shaped card. GSAP entrance outer div pe (.p-card), hover motion andar wale article pe,
// taaki dono ek hi element ka transform na chhedein.
export default function ProductCard({ p, className = "" }) {
  const { add } = useStore();
  const [done, setDone] = useState(false);
  const photo = PHOTOS[p.id];
  const mrp = Math.round(p.price * 1.25);
  const off = Math.round((1 - p.price / mrp) * 100);

  const onAdd = () => {
    add(p.id);
    setDone(true);
    setTimeout(() => setDone(false), 1400);
  };

  return (
    <div className={`p-card ${className}`}>
      <motion.article initial="rest" whileHover="hover" className="flex h-full flex-col text-center">
        <div
          className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-t-[999px] px-6 pb-8 pt-12"
          style={{ background: `${p.color}2e` }}
        >
          {photo ? (
            <motion.div
              variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="h-full w-full overflow-hidden rounded-t-[999px]"
            >
              <Img src={photo} alt={p.name} className="h-full w-full object-cover" />
            </motion.div>
          ) : (
            <motion.div
              variants={{ rest: { y: 0, rotate: 0 }, hover: { y: -12, rotate: -3 } }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="w-[66%] will-change-transform"
            >
              <Pouch id={p.id} label={p.label} color={p.color} className="h-auto w-full" />
            </motion.div>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center pt-5">
          <h3 className="font-display text-lg font-extrabold leading-tight">{p.name}</h3>
          <p className="mt-1 font-script text-lg text-brown/80">{p.tag}</p>
          <p className="mt-2 flex items-baseline gap-2 font-bold">
            <span>₹{p.price}</span>
            <span className="text-sm font-normal text-brown/50 line-through">₹{mrp}</span>
            <span className="text-sm text-green">{off}% off</span>
          </p>
          <StickerGroup ids={p.stickers} size="chip" className="mt-3 justify-center" />
          <button
            onClick={onAdd}
            className="mt-auto w-full rounded-lg border-2 border-brown py-2.5 font-bold transition-colors hover:border-orange hover:bg-orange"
            aria-label={`Add ${p.name} to cart`}
          >
            <span className="inline-flex items-center justify-center gap-1.5">
              {done ? <Check size={18} /> : <Plus size={18} />}
              {done ? "Added to cart" : "Add to cart"}
            </span>
          </button>
        </div>
      </motion.article>
    </div>
  );
}