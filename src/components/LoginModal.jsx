import { ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useStore } from "../store";

const field = "w-full rounded-full border-2 border-brown bg-white px-5 py-3 outline-none text-brown focus:border-orange";

export default function LoginModal() {
  const { panel, setPanel } = useStore();
  const close = () => setPanel(null);

  const submit = (e) => {
    e.preventDefault();
    // TODO: connect Shopify Customer Accounts / Storefront API authentication
    close();
  };

  return (
    <AnimatePresence>
      {panel === "login" && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-brown/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-label="Log in"
            className="w-full max-w-md rounded-[2rem] border-2 border-brown bg-white p-7"
            initial={{ y: 60, rotate: 3 }}
            animate={{ y: 0, rotate: 0 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-script text-4xl">Welcome back</h2>
              <button onClick={close} aria-label="Close"><X /></button>
            </div>

            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brown bg-green py-3 font-bold text-white hover:bg-orange hover:text-white">
                <ShoppingBag size={18} /> Continue with Shopify
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brown bg-tan py-3 font-bold text-brown hover:bg-orange hover:text-white">
                <ShoppingBag size={18} /> Continue with Shop
              </button>
            </div>

            <p className="my-5 text-center text-sm">or use your email</p>

            <form onSubmit={submit} className="space-y-3">
              <input type="email" required placeholder="Email" className={field} />
              <input type="password" required placeholder="Password" className={field} />
              <button className="w-full rounded-full bg-brown py-3.5 font-bold text-white hover:text-orange">Log in</button>
              {/* TODO: Shopify checkout integration after login */}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
