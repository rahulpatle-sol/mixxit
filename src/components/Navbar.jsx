import { Search, ShoppingBag, User } from "lucide-react";
import { motion } from "motion/react";
import { scrollTo, useStore } from "../store";

const iconBtn =
  "relative grid h-11 w-11 place-items-center rounded-full border-2 border-brown bg-white transition-colors hover:bg-orange hover:text-white";

export default function Navbar() {
  const { count, setPanel } = useStore();
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 md:px-10 bg-white/80 backdrop-blur-sm border-b border-brown/20">
      <button onClick={() => scrollTo("body")} className="font-script text-3xl md:text-4xl leading-none text-brown" aria-label="Mixxit home">
        Mixxit
      </button>
      <nav className="hidden gap-8 md:flex">
        <button onClick={() => scrollTo("#story")} className="font-bold text-brown hover:text-orange">
          Our story
        </button>
        <button onClick={() => scrollTo("#shop")} className="font-bold text-brown hover:text-orange">
          Shop
        </button>
      </nav>
      <div className="flex gap-2">
        <button className={iconBtn} onClick={() => setPanel("search")} aria-label="Search products">
          <Search size={20} />
        </button>
        <button className={iconBtn} onClick={() => setPanel("login")} aria-label="Log in">
          <User size={20} />
        </button>
        <button className={iconBtn} onClick={() => setPanel("cart")} aria-label={`Cart, ${count} items`}>
          <ShoppingBag size={20} />
          {count > 0 && (
            <motion.span
              key={count}
              initial={{ scale: 1.8 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange px-1 text-xs font-bold text-white"
            >
              {count}
            </motion.span>
          )}
        </button>
      </div>
    </header>
  );
}
