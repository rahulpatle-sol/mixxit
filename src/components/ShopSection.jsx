import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { products } from "../data";
import ProductCard from "./ProductCard";

export default function ShopSection() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.from(".s-card", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".s-grid", start: "top 85%" },
        });
      }, root);

      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="shop" ref={root} className="px-5 py-20 md:px-10 md:py-32">
      <h2 className="mb-3 text-center font-script text-[clamp(3rem,9vw,7rem)] leading-none">
        Pick your comfort
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center text-[clamp(1rem,2vw,1.15rem)] text-brown">
        Haldi, rose, makhana, choco. Sweetened with jaggery, ready in 30 seconds.
      </p>
      <div className="s-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} p={product} className="s-card" />
        ))}
      </div>
    </section>
  );
}
