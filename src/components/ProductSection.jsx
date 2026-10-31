import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, NO_REDUCED } from "../gsap";
import ProductCard from "./ProductCard";

export default function ProductSection({ id, title, sub, items, tone = "bg-white", cols = "lg:grid-cols-4" }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED, () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".p-card");
        gsap.set(cards, { opacity: 0, y: 60 });
        ScrollTrigger.batch(cards, {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, overwrite: true }),
        });
        gsap.from(".sec-head > *", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".sec-head", start: "top 88%", once: true },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section id={id} ref={root} className={`${tone} px-5 py-20 md:px-10 md:py-28`}>
      <div className="mx-auto max-w-7xl">
        <div className="sec-head mb-14">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-tight">{title}</h2>
          <div className="mt-3 inline-block">
            <p className="font-script text-[clamp(1.2rem,2.4vw,1.8rem)]">{sub}</p>
            <svg viewBox="0 0 300 12" className="mt-1 block h-3 w-full text-orange" aria-hidden="true" preserveAspectRatio="none">
              <path d="M3 8 Q60 1 120 6 T297 5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className={`grid gap-x-6 gap-y-12 sm:grid-cols-2 ${cols}`}>
          {items.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}