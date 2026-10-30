import { useLayoutEffect, useRef } from "react";
import { gsap, NO_REDUCED_MOTION } from "../gsap";
import { products } from "../data";
import HoverText from "./HoverText";
import ProductCard from "./ProductCard";

// Staggered heights, like the sketch
const OFFSETS = ["", "lg:mt-20", "lg:mt-8", "lg:mt-28"];

export default function Products() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED_MOTION, () => {
      const ctx = gsap.context(() => {
        gsap.from(".p-card", {
          y: 120,
          rotate: (i) => (i % 2 ? 5 : -5),
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".p-grid", start: "top 80%" },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="products" ref={root} className="px-5 py-24 md:px-10 md:py-32">
      <h2 className="font-script text-[clamp(3rem,8vw,7rem)] leading-none">
        <HoverText text="Pick your comfort" />
      </h2>
      <div className="p-grid mt-16 grid gap-8 pb-28 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} p={p} className={OFFSETS[i]} />
        ))}
      </div>
    </section>
  );
}
