import { Search, ShoppingBag, User } from "lucide-react";
import { motion } from "motion/react";
import { ASSETS } from "../assets";
import { scrollTo, useStore } from "../store";

const iconButton =
  "relative grid h-11 w-11 place-items-center rounded-full border-2 border-brown bg-white transition-colors hover:bg-orange hover:text-white";

export default function Navbar() {
  const { count, setPanel } = useStore();

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-brown/20 bg-white/90 px-5 py-3 backdrop-blur-sm md:px-10">
      <button
        onClick={() => scrollTo("body")}
        aria-label="Mixxit home"
        className="flex items-center"
      >
        <img
          src={ASSETS.logo}
          alt=""
          className="h-10 w-auto max-w-[130px] object-contain md:h-11"
        />
      </button>
      <nav aria-label="Main navigation" className="hidden gap-8 md:flex">
        <button
          onClick={() => scrollTo("#story-reveal")}
          className="font-bold text-brown transition-colors hover:text-orange"
        >
          Our story
        </button>
        <button
          onClick={() => scrollTo("#shop")}
          className="font-bold text-brown transition-colors hover:text-orange"
        >
          Shop
        </button>
      </nav>
      <div className="flex gap-2">
        <button
          className={iconButton}
          onClick={() => setPanel("search")}
          aria-label="Search products"
        >
          <Search size={20} />
        </button>
        <button
          className={iconButton}
          onClick={() => setPanel("login")}
          aria-label="Log in"
        >
          <User size={20} />
        </button>
        <button
          className={iconButton}
          onClick={() => setPanel("cart")}
          aria-label={`Cart, ${count} items`}
        >
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
