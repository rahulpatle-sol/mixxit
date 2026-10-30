import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { useStore } from "../store";
import Pouch from "./Pouch";
import StickerGroup from "./Sticker";

export default function ProductCard({ p, className = "" }) {
  const { add } = useStore();
  const [done, setDone] = useState(false);
  const mrp = Math.round(p.price * 1.4);

  const onAdd = () => {
    add(p.id);
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <motion.article
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`p-card overflow-hidden rounded-2xl border border-brown/20 bg-white shadow-[4px_4px_0_rgba(75,46,26,0.15)] ${className}`}
    >
      <div className="relative h-48 bg-brown/5 flex items-center justify-center overflow-hidden">
        <Pouch id={p.id} label={p.label} className="h-full w-full object-contain mx-auto" />
      </div>
      <div className="p-4">
        <h3 className="font-script text-2xl text-brown leading-tight">{p.name}</h3>
        <p className="mt-1 text-sm text-brown/60">{p.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-brown">₹{p.price}</span>
            <span className="ml-1.5 text-sm text-brown/40 line-through">₹{mrp}</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onAdd}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-brown bg-brown px-5 py-2 text-sm font-bold text-white transition-all hover:bg-brown/90"
          >
            {done ? "Added" : <><Plus size={16} /> Add to cart</>}
          </motion.button>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <StickerGroup ids={p.stickers} gap="1.5" small />
        </div>
      </div>
    </motion.article>
  );
}
