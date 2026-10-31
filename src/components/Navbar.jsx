
"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { LOGO } from "../assets";
import { scrollTo, useStore } from "../store";

const navItems = [
  { label: "Home", target: "body" },
  { label: "Shop", target: "#shop" },
  { label: "Our Story", target: "#story-reveal" },
];

const iconButton =
  "relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#54331f]/15 bg-white text-[#54331f] transition-all duration-300 hover:border-[#ed852d] hover:bg-[#fff4e8] hover:text-[#d76b20] active:scale-95";

export default function Navbar() {
  const { count, setPanel } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (target) => {
    setMenuOpen(false);
    if (target === "body") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollTo(target);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      {/* ANNOUNCEMENT BAR */}
      <div className="relative flex min-h-8 items-center justify-center overflow-hidden bg-[#432719] px-3 py-1.5 text-center text-[10px] font-medium tracking-wide text-white sm:text-xs">

        <p>
          <span className="text-[#f5c47e]">✦</span>
          {" "}Free shipping on orders above ₹699
          <span className="mx-2 text-white/35">|</span>
          Made with jaggery, no preservatives
        </p>

      </div>

      {/* MAIN NAVBAR */}
      <div className="relative border-b border-[#54331f]/10 bg-[#fffdf8]/95 shadow-[0_4px_25px_rgba(70,43,22,0.035)] backdrop-blur-xl">

        <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between px-4 sm:px-6 md:h-[76px] md:px-10 lg:px-14">

          {/* LEFT: BRAND + DESKTOP NAV */}
          <div className="flex min-w-0 items-center gap-6 lg:gap-12">

            {/* LOGO */}
            <button
              onClick={() => handleNav("body")}
              aria-label="Mixxit home"
              className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              {LOGO ? (
                <img
                  src={LOGO}
                  alt="Mixxit"
                  className="h-10 w-auto max-w-[125px] object-contain md:h-12 md:max-w-[145px]"
                />
              ) : (
                <span className="font-script text-[2rem] leading-none tracking-tight text-[#9a4b20] md:text-[2.4rem]">
                  Mixx<span className="text-[#ec862f]">it</span>
                </span>
              )}
            </button>

            {/* DESKTOP LINKS */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 md:flex"
            >
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.target)}
                  className={`group relative rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                    index === 0
                      ? "text-[#b15c28]"
                      : "text-[#54331f]/75 hover:bg-[#f8eee2] hover:text-[#a45020]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#e98736] transition-all duration-300 ${
                      index === 0
                        ? "w-4"
                        : "w-0 group-hover:w-4"
                    }`}
                  />
                </button>
              ))}
            </nav>

          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">

            {/* SEARCH */}
            <button
              className={iconButton}
              onClick={() => {
                setMenuOpen(false);
                setPanel("search");
              }}
              aria-label="Search products"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            {/* ACCOUNT */}
            <button
              className={`${iconButton} hidden sm:grid`}
              onClick={() => {
                setMenuOpen(false);
                setPanel("login");
              }}
              aria-label="Log in"
            >
              <User size={18} strokeWidth={1.8} />
            </button>

            {/* CART */}
            <button
              className={iconButton}
              onClick={() => {
                setMenuOpen(false);
                setPanel("cart");
              }}
              aria-label={`Cart, ${count} items`}
            >
              <ShoppingBag size={18} strokeWidth={1.8} />

              <AnimatePresence mode="popLayout">
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0, y: 5 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 22,
                    }}
                    className="absolute -right-1.5 -top-1.5 grid h-[19px] min-w-[19px] place-items-center rounded-full border-2 border-[#fffdf8] bg-[#ed852d] px-1 text-[10px] font-bold text-[#432719]"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              className={`${iconButton} md:hidden`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  {menuOpen ? (
                    <X size={19} strokeWidth={1.8} />
                  ) : (
                    <Menu size={19} strokeWidth={1.8} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close navigation menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 top-[100px] z-[-1] bg-[#432719]/20 backdrop-blur-[2px] md:hidden"
              />

              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{
                  duration: 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-x-3 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-[#54331f]/10 bg-[#fffdf8] p-3 shadow-[0_20px_60px_rgba(67,39,25,0.15)] md:hidden"
              >

                <div className="px-3 pb-3 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b17849]">
                    Explore Mixxit
                  </p>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.055,
                        duration: 0.25,
                      }}
                      onClick={() => handleNav(item.target)}
                      className="group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold text-[#54331f] transition-colors hover:bg-[#f8eee2]"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={17}
                        className="text-[#c68a53] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </motion.button>
                  ))}
                </nav>

                <div className="my-3 h-px bg-[#54331f]/10" />

                {/* MOBILE ACCOUNT */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setPanel("login");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#54331f] transition-colors hover:bg-[#f8eee2]"
                >
                  <User size={18} />
                  My Account
                </button>

                <div className="mt-3 rounded-xl bg-[#f7eddf] px-4 py-3">
                  <p className="font-script text-xl text-[#9a4b20]">
                    A little sweetness in every sip.
                  </p>
                  <p className="mt-1 text-[10px] text-[#76573d]/70">
                    Made with love, naturally sweetened.
                  </p>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
