import { useLayoutEffect, useRef } from "react";
import { Coffee, Leaf, Milk } from "lucide-react";
import { gsap, NO_REDUCED_MOTION } from "../gsap";

const TEXT =
  "When we fell and got hurt as kids, Maa would bring a warm glass of haldi doodh. Mixxit turns those familiar comforts into quick premixes, sweetened with jaggery.";

export default function Story() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED_MOTION, () => {
      const ctx = gsap.context(() => {
        // Scroll-scrubbed word reveal
        gsap.to(".s-word", {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: ".s-text", start: "top 80%", end: "bottom 50%", scrub: true },
        });
        gsap.from(".s-lime", {
          rotate: 14,
          y: 120,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: { trigger: ".s-lime", start: "top 90%", end: "top 55%", scrub: true },
        });
        gsap.from(".s-small", {
          y: 160,
          rotate: -12,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: { trigger: ".s-small", start: "top 95%", end: "top 60%", scrub: true },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="story" ref={root} className="rounded-t-[3rem] bg-ink px-5 py-28 text-cream md:px-10 md:py-40">
      <p className="s-text max-w-5xl text-[clamp(1.9rem,4.6vw,4rem)] font-bold leading-[1.15]">
        {TEXT.split(" ").map((w, i) => (
          <span key={i} className="s-word mr-[0.25em] inline-block opacity-20">{w}</span>
        ))}
      </p>

      <div className="mt-24 grid items-start gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="s-lime -rotate-3 rounded-[2.5rem] border-2 border-cream bg-lime p-8 text-ink md:p-12">
          <h2 className="font-script text-5xl md:text-6xl">Ready in 30 seconds</h2>
          <ul className="mt-8 space-y-4 text-xl font-bold">
            <li className="flex items-center gap-3"><Milk /> Warm up a glass of milk</li>
            <li className="flex items-center gap-3"><Coffee /> Stir in the premix</li>
            <li className="flex items-center gap-3"><Leaf /> Sip the jaggery comfort</li>
          </ul>
        </div>
        <div className="s-small rotate-3 rounded-[2rem] border-2 border-ink bg-cream p-8 text-ink md:mt-24">
          <Leaf className="text-blaze" size={36} />
          <p className="mt-4 font-script text-3xl">Sweetened with jaggery, the way Maa would.</p>
        </div>
      </div>
    </section>
  );
}
