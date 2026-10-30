import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { fruitSnacks } from "../data";
import ProductCard from "./ProductCard";

export default function FruitSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.from(".f-card", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".f-grid", start: "top 85%" },
        });
      }, root);

      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="fruit-snacks" ref={root} className="px-5 py-20 md:px-10 md:py-32">
      <h2 className="mb-3 text-center font-script text-[clamp(3rem,9vw,7rem)] leading-none">
        Fruit Snacks
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-[clamp(1rem,2vw,1.15rem)] text-brown">
        Chewy, fruity bites dried fresh with a touch of jaggery.
      </p>
      <div className="f-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fruitSnacks.map((product) => (
          <ProductCard key={product.id} p={product} className="f-card" />
        ))}
      </div>
    </section>
  );
}
