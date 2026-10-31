
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { scrollTo } from "../store";

const float = {
  animate: {
    y: [0, -12, 0],
    rotate: [-3, 2, -3],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function FloatingIngredient({ className, children, delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -13, 0],
        rotate: [-8, 8, -8],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fffaf0] px-5 pb-16 pt-32 md:px-10">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#f6d9ad]/30 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f6b66f]/20 blur-3xl" />

        <div className="absolute left-[8%] top-[24%] h-3 w-3 rounded-full bg-[#e99a42]/50" />

        <div className="absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-[#9a552c]/40" />

        <div className="absolute bottom-[18%] left-[17%] h-2 w-2 rounded-full bg-[#e99a42]/60" />

      </div>

      {/* FLOATING INGREDIENTS */}
      <FloatingIngredient
        className="left-[8%] top-[24%] hidden sm:block"
        delay={0}
      >
        <div className="rotate-[-30deg] text-5xl">🌿</div>
      </FloatingIngredient>

      <FloatingIngredient
        className="right-[10%] top-[23%] hidden sm:block"
        delay={1}
      >
        <div className="text-4xl">✨</div>
      </FloatingIngredient>

      <FloatingIngredient
        className="bottom-[18%] left-[12%] hidden sm:block"
        delay={1.5}
      >
        <div className="text-4xl">🥜</div>
      </FloatingIngredient>

      <FloatingIngredient
        className="bottom-[20%] right-[12%] hidden sm:block"
        delay={0.5}
      >
        <div className="text-4xl">🍯</div>
      </FloatingIngredient>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-8">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 text-center md:order-1 md:text-left"
        >

          {/* SMALL LABEL */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8b5736]/15 bg-white/70 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#e78b32]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5736]">
              Oops! Wrong ingredient
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-display text-[clamp(6rem,17vw,11rem)] font-black leading-[0.78] tracking-[-0.09em] text-[#4b2e1a]">
            4<span className="text-[#ed8a35]">0</span>4
          </h1>

          <div className="mt-7">
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight text-[#4b2e1a]">
              This sip went
              <br />
              <span className="font-script font-normal text-[#d77b2e]">
                missing!
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#795b43] md:mx-0">
              Looks like this page wandered off for a little break.
              Don't worry, there's plenty of sweetness waiting for you back home.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">

            <Link
              to="/"
              onClick={() => scrollTo("body")}
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#4b2e1a] bg-[#f28c35] px-7 py-3.5 text-sm font-bold text-[#4b2e1a] shadow-[4px_4px_0_#4b2e1a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f6a04e] hover:shadow-[5px_7px_0_#4b2e1a] active:translate-y-0 active:shadow-none"
            >
              <ArrowLeft size={17} />
              Back to home
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/"
              onClick={() => scrollTo("#shop")}
              className="text-sm font-bold text-[#795b43] underline decoration-[#e9bd8c] underline-offset-4 transition-colors hover:text-[#d77b2e]"
            >
              Explore our flavours
            </Link>

          </div>

          <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a48a71]">
            Made with Maa's recipes. Sweetened with jaggery.
          </p>

        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative order-1 mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center md:order-2"
        >

          {/* CIRCULAR BACKGROUND */}
          <div className="absolute h-[75%] w-[75%] rounded-full border border-[#e8cba5] bg-[#f7e7ce]/60" />

          <div className="absolute h-[61%] w-[61%] rounded-full border border-dashed border-[#d5ae7e]" />

          {/* LARGE 404 BACKGROUND */}
          <span className="absolute select-none font-display text-[clamp(8rem,25vw,15rem)] font-black tracking-[-0.1em] text-[#4b2e1a]/[0.045]">
            404
          </span>

          {/* MAIN POUCH ILLUSTRATION */}
          <motion.div
            variants={float}
            animate="animate"
            className="relative z-10 w-[62%] max-w-[255px]"
          >
            <div className="absolute inset-x-5 bottom-2 h-6 rounded-full bg-[#4b2e1a]/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#b99363]/30 bg-gradient-to-br from-[#fffdf6] via-[#f2e2c5] to-[#e4c89b] px-4 pb-8 pt-7 shadow-[0_25px_55px_rgba(75,46,26,0.18)]">

              {/* POUCH SEAL */}
              <div className="absolute inset-x-0 top-4 h-px bg-[#9d7850]/25" />

              <div className="absolute inset-x-0 top-7 h-px bg-[#9d7850]/20" />

              {/* LOGO */}
              <p className="text-center font-script text-4xl text-[#8a461f]">
                Mixx<span className="text-[#ed8a35]">it</span>
              </p>

              {/* STEAM */}
              <div className="relative mt-5 flex h-14 justify-center gap-3">
                <motion.span
                  animate={{ y: [-2, -12, -2], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="h-12 w-2 -rotate-12 rounded-full bg-[#dca34d]/60 blur-[1px]"
                />
                <motion.span
                  animate={{ y: [-4, -16, -4], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                  className="h-14 w-2 rotate-12 rounded-full bg-[#dca34d]/50 blur-[1px]"
                />
              </div>

              {/* CUP */}
              <div className="relative mx-auto mt-1 flex h-28 w-32 items-center justify-center">

                <div className="absolute right-0 h-12 w-12 rounded-full border-[7px] border-[#b78b55] bg-transparent" />

                <div className="relative z-10 flex h-24 w-24 items-end justify-center overflow-hidden rounded-b-[25px] rounded-t-[13px] border-[4px] border-white bg-[#f4e7cc] shadow-[inset_0_0_0_1px_#b68d5b]">

                  <div className="h-[73%] w-full rounded-b-[20px] bg-gradient-to-br from-[#eebd64] to-[#bd742e]" />

                  <div className="absolute left-3 top-4 h-12 w-2 rounded-full bg-white/50 blur-[1px]" />

                </div>

                <div className="absolute left-4 right-4 top-0 h-3 rounded-full border border-[#a77b4c] bg-[#fff8e8]" />
              </div>

              {/* INGREDIENTS */}
              <div className="mt-3 flex items-center justify-center gap-3 text-2xl">
                <span>🌿</span>
                <span>🥜</span>
                <span>🍯</span>
              </div>

              {/* PRODUCT BAND */}
              <div className="-mx-4 -mb-8 mt-5 bg-[#dba45c] px-3 py-4 text-center">
                <p className="text-[8px] font-semibold tracking-[0.2em] text-[#60391d]/75">
                  JAGGERY BASED
                </p>
                <p className="mt-1 text-xs font-black tracking-wide text-[#60391d]">
                  A LITTLE HAPPINESS
                </p>
              </div>

            </div>
          </motion.div>

          {/* DECORATIVE FLOATING ELEMENTS */}
          <FloatingIngredient
            className="left-[7%] top-[26%]"
            delay={0.8}
          >
            <div className="grid h-12 w-12 rotate-[-12deg] place-items-center rounded-2xl border border-[#e8cba5] bg-white text-2xl shadow-lg">
              ✦
            </div>
          </FloatingIngredient>

          <FloatingIngredient
            className="right-[7%] top-[33%]"
            delay={1.2}
          >
            <div className="grid h-12 w-12 rotate-[12deg] place-items-center rounded-2xl border border-[#e8cba5] bg-white text-2xl shadow-lg">
              🍊
            </div>
          </FloatingIngredient>

          <FloatingIngredient
            className="bottom-[14%] left-[19%]"
            delay={0.4}
          >
            <div className="text-3xl">🥜</div>
          </FloatingIngredient>

          {/* SMALL BADGE */}
          <motion.div
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-[12%] right-[7%] z-20 grid h-20 w-20 rotate-6 place-items-center rounded-full border-2 border-[#fffaf0] bg-[#4b2e1a] text-center text-white shadow-xl"
          >
            <div>
              <span className="block text-lg">♡</span>
              <span className="text-[8px] font-bold uppercase tracking-wider">
                Sip happy
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>

    </main>
  );
}
