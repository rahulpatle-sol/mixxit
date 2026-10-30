import { useMemo, useState } from "react";
import { Plus, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { products } from "../data";
import { scrollTo, useStore } from "../store";
import Pouch from "./Pouch";

export default function SearchOverlay() {
  const { panel, setPanel, add } = useStore();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products.filter((p) => !s || `${p.name} ${p.desc}`.toLowerCase().includes(s));
  }, [q]);

  const close = () => setPanel(null);

  return (
    <AnimatePresence>
      {panel === "search" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-brown/80 p-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-label="Search products"
            className="w-full max-w-xl rounded-[2rem] border-2 border-brown bg-white p-5"
            initial={{ y: -40, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -40, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 rounded-full border-2 border-brown bg-white px-4 py-3">
              <Search size={20} />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search haldi, rose, choco, makhana"
                className="flex-1 bg-transparent outline-none text-brown"
              />
              <button onClick={close} aria-label="Close search"><X size={20} /></button>
            </div>

            <div data-lenis-prevent className="mt-4 max-h-[50vh] space-y-3 overflow-y-auto">
              {results.length === 0 && <p className="p-4 text-center">No premix found. Try haldi, rose, choco or makhana.</p>}
              {results.map((p) => (
                <div key={p.id} className="flex items-center gap-3 rounded-2xl border-2 border-brown p-3" style={{ background: p.color }}>
                  <Pouch id={p.id} label={p.label} className="w-12" />
                  <button
                    className="flex-1 text-left"
                    onClick={() => {
                      close();
                      setTimeout(() => scrollTo("#shop"), 300);
                    }}
                  >
                    <p className="font-script text-xl leading-tight">{p.name}</p>
                    <p className="text-sm font-bold">₹{p.price}</p>
                  </button>
                  <button onClick={() => add(p.id)} aria-label={`Add ${p.name} to cart`} className="rounded-full bg-brown p-2.5 text-white hover:bg-orange hover:text-white">
                    <Plus size={18} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
