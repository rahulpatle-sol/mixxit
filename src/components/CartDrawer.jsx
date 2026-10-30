import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useStore } from "../store";
import Pouch from "./Pouch";

export default function CartDrawer() {
  const { panel, setPanel, lines, total, setQty } = useStore();
  const open = panel === "cart";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-brown/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          />
          <motion.aside
            role="dialog"
            aria-label="Your cart"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l-4 border-brown bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b-2 border-brown p-5">
              <h2 className="font-script text-3xl">Your cart</h2>
              <button onClick={() => setPanel(null)} aria-label="Close cart" className="rounded-full p-2 hover:bg-green hover:text-white">
                <X />
              </button>
            </div>

            <div data-lenis-prevent className="flex-1 space-y-4 overflow-y-auto p-5">
              {lines.length === 0 && (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <ShoppingBag className="mx-auto" size={44} />
                    <p className="mt-3 font-script text-3xl">Cart is empty</p>
                    <p className="mt-1 text-sm">Add a premix to start your 30-second comfort.</p>
                  </div>
                </div>
              )}
              {lines.map((l) => (
                <div key={l.id} className="flex items-center gap-4 rounded-2xl border-2 border-brown p-3" style={{ background: l.color }}>
                  <Pouch id={l.id} label={l.label} className="w-14" />
                  <div className="flex-1">
                    <p className="font-script text-xl leading-tight">{l.name}</p>
                    <p className="font-bold">₹{l.price * l.qty}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <button onClick={() => setQty(l.id, l.qty - 1)} aria-label="Decrease" className="rounded-full bg-white p-1 hover:bg-green">
                        <Minus size={16} />
                      </button>
                      <span className="w-5 text-center font-bold">{l.qty}</span>
                      <button onClick={() => setQty(l.id, l.qty + 1)} aria-label="Increase" className="rounded-full bg-white p-1 hover:bg-green">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => setQty(l.id, 0)} aria-label={`Remove ${l.name}`} className="rounded-full bg-white p-2 hover:bg-orange hover:text-white">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-brown p-5">
              <div className="mb-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button
                disabled={lines.length === 0}
                // TODO: connect Shopify checkout (Storefront API / checkout URL)
                onClick={() => alert("Shopify checkout connect karna baaki hai.")}
                className="w-full rounded-full bg-brown py-4 font-bold text-white transition-colors hover:text-orange disabled:opacity-40 disabled:hover:bg-brown"
              >
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
