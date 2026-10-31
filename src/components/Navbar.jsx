import { Search, ShoppingBag, User } from "lucide-react";
import { motion } from "motion/react";
import { LOGO } from "../assets";
import { scrollTo, useStore } from "../store";

const iconButton =
  "relative grid h-10 w-10 place-items-center rounded-full border-2 border-brown bg-white transition-colors hover:bg-orange";
const link = "font-bold text-brown transition-colors hover:text-orange";

export default function Navbar() {
  const { count, setPanel } = useStore();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <p className="bg-brown px-4 py-1.5 text-center text-xs text-white">
        Free shipping on orders above ₹699 &nbsp;•&nbsp; Made with jaggery, no preservatives
      </p>
      <div className="flex items-center justify-between border-b border-brown/15 bg-white/90 px-5 py-2.5 backdrop-blur md:px-10">
        <div className="flex items-center gap-10">
          <button onClick={() => scrollTo("body")} aria-label="Mixxit home" className="flex items-center">
            {LOGO ? (
              <img src={LOGO} alt="" className="h-10 w-auto max-w-[130px] object-contain" />
            ) : (
              <span className="font-script text-[2rem] leading-none text-orange">
                Mixx<span className="text-green">it</span>
              </span>
            )}
          </button>
          <nav aria-label="Main navigation" className="hidden gap-7 md:flex">
            <button onClick={() => scrollTo("body")} className={link}>Home</button>
            <button onClick={() => scrollTo("#shop")} className={link}>Shop</button>
            <button onClick={() => scrollTo("#fruit-snacks")} className={link}>Fruit snacks</button>
            <button onClick={() => scrollTo("#story-reveal")} className={link}>Our story</button>
          </nav>
        </div>
        <div className="flex gap-2">
          <button className={iconButton} onClick={() => setPanel("search")} aria-label="Search products">
            <Search size={18} />
          </button>
          <button className={iconButton} onClick={() => setPanel("login")} aria-label="Log in">
            <User size={18} />
          </button>
          <button className={iconButton} onClick={() => setPanel("cart")} aria-label={`Cart, ${count} items`}>
            <ShoppingBag size={18} />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 1.8 }}
                animate={{ scale: 1 }}
                className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange px-1 text-xs font-bold text-brown"
              >
                {count}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}