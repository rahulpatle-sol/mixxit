import { useLayoutEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap, NO_REDUCED_MOTION } from "../gsap";
import { products } from "../data";
import { scrollTo } from "../store";
import Pouch from "./Pouch";
import SplitWords from "./SplitWords";

const [one, two] = products;

function HeroCard({ p, className }) {
  return (
    <div
      className={`h-card absolute w-[56%] rounded-[2rem] border-2 border-ink p-4 shadow-[8px_8px_0_#2a1606] ${className}`}
      style={{ background: p.color }}
    >
      <Pouch color="#fff3dc" label={p.label} className="mx-auto w-full max-w-[210px]" />
      <p className="mt-2 text-center font-script text-2xl">{p.name}</p>
    </div>
  );
}

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED_MOTION, () => {
      const ctx = gsap.context(() => {
        gsap.from(".h-word", { yPercent: 115, rotate: 4, duration: 1, ease: "power4.out", stagger: 0.08, delay: 0.15 });
        gsap.from(".h-card", { y: 140, opacity: 0, duration: 1.2, ease: "power3.out", stagger: 0.18, delay: 0.5 });
        gsap.from(".h-note", { opacity: 0, duration: 0.6, delay: 1.2 });
        gsap.from(".squiggle", { strokeDashoffset: 600, duration: 1.4, ease: "power2.inOut", delay: 1.2 });
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(".h-card-1", { yPercent: -14, rotate: -9, scrollTrigger: st });
        gsap.to(".h-card-2", { yPercent: 16, rotate: 10, scrollTrigger: st });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="relative grid min-h-screen items-center gap-10 overflow-hidden px-5 pb-16 pt-28 md:px-10 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <span className="mb-6 inline-block -rotate-3 rounded-full border-2 border-ink bg-lime px-4 py-1 font-script text-xl">
          sweetened with jaggery
        </span>
        <h1 className="font-script text-[clamp(3.2rem,9vw,8rem)] leading-[0.98]">
          <SplitWords text="Maa's recipes," />
          <br />
          <SplitWords text="ready in" />
          <br />
          <span className="inline-block -rotate-1 rounded-2xl bg-blaze px-4 text-cream">
            <SplitWords text="30 seconds" />
          </span>
        </h1>
        <p className="mt-8 max-w-md text-lg">
          Haldi, rose, makhana and chocolate with dry fruits. Stir into warm milk and sip.
        </p>
        <button
          onClick={() => scrollTo("#products")}
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-7 py-4 font-bold text-cream transition-colors hover:bg-blaze"
        >
          Shop premixes <ArrowDown size={20} />
        </button>
      </div>

      <div className="relative h-[520px] md:h-[640px]">
        <div className="h-card-1 absolute left-[4%] top-0 w-full">
          <HeroCard p={one} className="left-0 top-0 -rotate-6" />
        </div>
        <div className="h-card-2 absolute left-0 top-0 w-full">
          <HeroCard p={two} className="bottom-0 right-0 top-[38%] rotate-6" />
        </div>
        <div className="h-note pointer-events-none absolute right-0 top-2 w-44 rotate-3 md:w-56">
          <p className="font-script text-xl leading-tight md:text-2xl">just stir it into warm milk</p>
          <svg viewBox="0 0 160 140" className="-mt-1 w-28 text-blaze" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path className="squiggle" d="M140 6 C 110 10, 130 60, 80 70 S 40 100, 30 128 M30 128 L52 118 M30 128 L26 104" />
          </svg>
        </div>
      </div>
    </section>
  );
}
