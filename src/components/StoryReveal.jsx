import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";

const TEXT =
  "Mixxit is built on Maa's handwritten recipes — haldi doodh for sore throats, rose milk for calm evenings, chocolate with dry fruits for celebrations, and makhana kheer for comfort. Every premix is sweetened with jaggery, never refined sugar, and ready in 30 seconds. Just stir into warm milk and sip well, live well.";

export default function StoryReveal() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.to(".r-word", {
          opacity: 1,
          ease: "none",
          stagger: 0.03,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: true,
          },
        });
      }, root);

      return () => context.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="story-reveal"
      ref={root}
      className="bg-white px-5 py-20 md:px-10 md:py-32"
    >
      <h2 className="mb-10 text-center font-script text-[clamp(2.5rem,8vw,5rem)] leading-none text-brown">
        Wholesome premixes for every mood
      </h2>
      <p className="r-text mx-auto max-w-3xl text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.7] text-brown">
        {TEXT.split(" ").map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="r-word mr-[0.25em] inline-block opacity-20"
          >
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
