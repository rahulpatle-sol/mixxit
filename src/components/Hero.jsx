import { useLayoutEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap, ScrollTrigger, NO_REDUCED } from "../gsap";
import { products } from "../data";
import { scrollTo } from "../store";
import Pouch from "./Pouch";
import SplitWords from "./SplitWords";

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED, () => {
      const ctx = gsap.context(() => {
        // Text animate in
        gsap.from(".h-word", { yPercent: 115, rotate: 4, duration: 1, ease: "power4.out", stagger: 0.08, delay: 0.15 });

        // Badge rotates
        gsap.to(".h-badge", { rotate: 360, repeat: -1, duration: 8, ease: "none" });

        // Pouches start hidden behind text (scale 0), come out on scroll
        gsap.from(".h-pouch", {
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: true,
          },
          y: 60,
          scale: 0,
          opacity: 0,
          rotate: (i) => (i % 2 === 0 ? -10 : 10),
          stagger: 0.15,
          ease: "none",
        });

        gsap.from(".h-note", { opacity: 0, y: 30, duration: 0.8, delay: 1 });
        gsap.from(".h-note .squiggle", { strokeDashoffset: 600, duration: 1.4, ease: "power2.inOut", delay: 1.4 });

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
      <div className="z-10">
        <span className="mb-6 inline-block -rotate-3 rounded-full border-2 border-ink bg-lime px-4 py-1 font-script text-xl">
          sweetened with jaggery
        </span>
        <h1 className="font-script text-[clamp(3.2rem,9vw,8rem)] leading-[1.05]">
          <SplitWords text="SIP" />
          <br />
          <span className="inline-block -rotate-1 rounded-2xl bg-blaze px-4 text-cream">
            <SplitWords text="WELL" />
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

      {/* Pouches sit behind text (z-0) and emerge on scroll */}
      <div className="relative flex items-center justify-center z-0">
        <div className="h-badge absolute -top-[12%] left-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 z-10">
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
            <defs>
              <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fdb934" />
                <stop offset="1" stopColor="#e8801a" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="88" fill="url(#badgeGrad)" stroke="#4b2e1a" strokeWidth="3" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="480 20" />
            <path d="M100 42 Q140 42 158 70 Q158 98 140 126 Q100 126 42 126 Q24 98 24 70 Q42 42 100 42 Z" fill="#63920e" />
            <circle cx="100" cy="100" r="26" fill="#ffffff" />
            <path d="M100 74 Q115 74 122 82 Q122 90 115 98 Q100 98 85 98 Q78 90 78 82 Q85 74 100 74 Z" fill="#4b2e1a" />
            <path d="M86 100 Q100 100 114 100 M100 86 Q100 100 100 114" stroke="#63920e" strokeWidth="3" strokeLinecap="round" />
            <text x="100" y="132" textAnchor="middle" fontFamily="'Kaushan Script', cursive" fontSize="16" fill="#4b2e1a" opacity="0.9">
              live well
            </text>
            <text x="100" y="68" textAnchor="middle" fontFamily="'Kaushan Script', cursive" fontSize="16" fill="#4b2e1a" opacity="0.9">
              sip well
            </text>
          </svg>
        </div>

        <div className="h-card-1 absolute -left-[6%] top-[20%] w-[64%] md:w-[52%] z-0">
          <div className="h-pouch">
            <Pouch id={products[0].id} label={products[0].label} color={products[0].color} className="w-full h-auto" />
          </div>
        </div>
        <div className="h-card-2 absolute right-[4%] top-[34%] w-[64%] md:w-[52%] z-0">
          <div className="h-pouch">
            <Pouch id={products[1].id} label={products[1].label} color={products[1].color} className="w-full h-auto" />
          </div>
        </div>
        <div className="absolute -left-[10%] bottom-[14%] w-[48%] md:w-[38%] z-0">
          <div className="h-pouch">
            <Pouch id={products[2].id} label={products[2].label} color={products[2].color} className="w-full h-auto" />
          </div>
        </div>
        <div className="absolute right-[8%] bottom-[6%] w-[48%] md:w-[38%] z-0">
          <div className="h-pouch">
            <Pouch id={products[3].id} label={products[3].label} color={products[3].color} className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="h-note pointer-events-none absolute right-0 top-2 w-44 rotate-3 md:w-56 z-20">
        <p className="font-script text-xl leading-tight md:text-2xl">just stir it into warm milk</p>
        <svg viewBox="0 0 160 140" className="-mt-1 w-28 text-blaze" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          <path className="squiggle" d="M140 6 C 110 10, 130 60, 80 70 S 40 100, 30 128 M30 128 L52 118 M30 128 L26 104" />
        </svg>
      </div>
    </section>
  );
}
