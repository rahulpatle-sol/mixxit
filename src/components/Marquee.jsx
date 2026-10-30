import { useLayoutEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { gsap, NO_REDUCED_MOTION } from "../gsap";

const WORDS = ["Haldi", "Rose", "Choco", "Makhana"];

export default function Marquee() {
  const band = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(NO_REDUCED_MOTION, () => {
      const tween = gsap.fromTo(
        ".m-track",
        { xPercent: -40 },
        { xPercent: 0, ease: "none", scrollTrigger: { trigger: band.current, start: "top bottom", end: "bottom top", scrub: true } }
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={band} className="overflow-hidden border-y-2 border-ink bg-blaze py-5 text-cream" aria-hidden="true">
      <div className="m-track flex w-max items-center gap-8 font-script text-5xl md:text-7xl">
        {Array.from({ length: 4 }).flatMap((_, s) =>
          WORDS.map((w) => (
            <span key={`${s}-${w}`} className="flex items-center gap-8">
              {w} <Sparkles size={40} />
            </span>
          ))
        )}
      </div>
    </div>
  );
}
