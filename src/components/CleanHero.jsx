import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, NO_REDUCED } from "../gsap";
import { products } from "../data";
import { scrollTo } from "../store";
import Pouch from "./Pouch";

const HILLS = `
  <path d="M0 420 Q 180 340 360 420 T 720 420 T 1080 420 L 1080 600 L 0 600 Z" fill="#10b981" opacity="0.9" />
  <path d="M0 380 Q 200 300 400 380 T 800 380 L 800 600 L 0 600 Z" fill="#059669" opacity="0.85" />
  <path d="M-100 400 Q 300 320 700 400 T 1300 400 L 1300 600 L -100 600 Z" fill="#047857" opacity="0.8" />
`;

const BUTTERFLY = `
  <svg viewBox="0 0 24 24" fill="none" stroke="#FC7305" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M12 2 Q 6 2 6 6 Q 6 10 10 12 L 12 14 L 14 12 Q 18 10 18 6 Q 18 2 12 2 Z" fill="#fef3c7" opacity="0.9" />
    <path d="M12 2 Q 18 2 18 6 Q 18 10 14 12 L 12 14 L 10 12 Q 6 10 6 6 Q 6 2 12 2 Z" fill="#fef3c7" opacity="0.9" />
    <path d="M12 6 L 12 12" stroke="#4b2e1a" strokeWidth="1.5" />
    <circle cx="12" cy="9" r="1.2" fill="#4b2e1a" />
  </svg>
`;

export default function CleanHero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED, () => {
      const ctx = gsap.context(() => {
        // Intro reveal
        gsap.from(".hero-text > *", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 });
        gsap.from(".hero-cta", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.8 });

        // Butterflies flutter across the sky
        gsap.utils.toArray(".butterfly").forEach((el, i) => {
          gsap.to(el, {
            x: () => 120 + i * 300,
            y: () => -40 + Math.sin(i) * 60,
            rotation: () => 15 + i * 10,
            duration: () => 5 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.8,
          });
        });

        // Pouches float gently
        gsap.to(".hero-pouch", {
          y: (i) => (i % 2 === 0 ? -18 : 18),
          rotation: (i) => (i % 2 === 0 ? -5 : 5),
          duration: () => 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.25,
          delay: 1,
        });

        // Scroll-driven gentle lift
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            gsap.to(".hero-pouch", {
              y: (i) => Math.sin(p * Math.PI + i) * 12,
              rotation: (i) => Math.cos(p * Math.PI) * 4,
              ease: "none",
            });
          },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[linear-gradient(to_bottom,#7dd3fc_0%,#3b82f6_55%,#1e3a8a_100%)]">
      {/* Decorative sun */}
      <div className="absolute top-[8%] left-[8%] w-24 h-24 bg-yellow-300 rounded-full filter blur-[30px] opacity-60 animate-pulse" />

      {/* SVG hills */}
      <svg className="absolute bottom-0 left-0 w-full h-[42vh] overflow-hidden pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1400 600">
        {HILLS}
      </svg>

      {/* Clouds (CSS shapes) */}
      <div className="absolute top-[10%] left-[10%] w-48 h-16 bg-white/70 rounded-full blur-sm" />
      <div className="absolute top-[15%] right-[12%] w-64 h-20 bg-white/60 rounded-full blur-sm" />
      <div className="absolute top-[25%] left-[20%] w-40 h-14 bg-white/50 rounded-full blur-sm" />

      {/* Butterflies */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="butterfly absolute" style={{ top: `${20 + i * 14}%`, left: `${10 + i * 18}%` }}>
            {BUTTERFLY}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 md:pt-32 text-center">
        <div className="hero-text">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border-2 border-orange-400 bg-orange-50/90 text-brown font-script text-lg tracking-wide">
            Made from Maa&rsquo;s recipes
          </span>
          <h1 className="mt-2 max-w-[40ch] mx-auto font-display text-[clamp(3rem,10vw,6rem)] font-extrabold leading-[1.02] tracking-tight text-white">
            SIP WELL,<br />
            LIVE WELL
          </h1>
          <p className="mt-6 max-w-[34ch] mx-auto text-white/90 text-lg leading-relaxed font-sans">
            Haldi, rose, makhana and chocolate with dry fruits. Sweetened with jaggery, ready in 30 seconds.
          </p>
        </div>
        <button
          onClick={() => scrollTo("#shop")}
          className="hero-cta mt-10 inline-flex items-center gap-2 rounded-full border-2 border-brown bg-orange px-10 py-4 font-display font-bold text-brown shadow-[8px_8px_0_rgba(75,46,26,0.25)] transition-all hover:bg-orange-600 hover:scale-[1.02] active:shadow-none active:translate-y-[2px]"
          aria-label="Shop premixes"
        >
          Shop now
        </button>
      </div>

      {/* Floating product cards behind text */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-[min(85vw,720px)] h-[min(60vh,520px)]">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`hero-pouch absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700`}
              style={{
                left: `calc(50% + ${(i - 1.5) * 22}vw)`,
                top: `calc(50% + ${(i % 2 === 0 ? -12 : 8)}vh)`,
              }}
            >
              <Pouch id={p.id} label={p.label} color={p.color} className="w-full h-auto drop-shadow-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
