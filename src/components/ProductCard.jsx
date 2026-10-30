import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { useStore } from "../store";
import Pouch from "./Pouch";
import StickerGroup from "./Sticker";

export default function ProductCard({ p, className = "" }) {
  const { add } = useStore();
  const [done, setDone] = useState(false);

  const onAdd = () => {
    add(p.id);
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <motion.article
      whileHover={{ y: -8, rotate: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`p-card overflow-hidden rounded-[2rem] border-2 border-brown bg-white shadow-[8px_8px_0_rgba(75,46,26,0.3)] ${className}`}
    >
      <div className="grid place-items-center py-10" style={{ background: p.color }}>
        <Pouch id={p.id} label={p.label} className="w-40 mx-auto" />
      </div>
      <div className="p-6">
        <h3 className="font-script text-3xl text-brown">{p.name}</h3>
        <p className="mt-2 text-sm text-brown">{p.desc}</p>
        <div className="mt-4 flex justify-center gap-3">
          <StickerGroup ids={p.stickers} gap="2" />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-bold text-brown">₹{p.price}</span>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onAdd}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-brown bg-brown px-4 py-2.5 text-xs font-bold text-white hover:text-orange"
          >
            {done ? "Added" : "Add to cart"}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
