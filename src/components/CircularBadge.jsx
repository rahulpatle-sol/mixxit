import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";

const TEXT = "Sip well, live well";

export default function CircularBadge() {
  const badge = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      gsap.to(badge.current, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, badge);

    return () => context.revert();
  }, []);

  const radius = 47;
  const letters = [...TEXT].map((character, index) => {
    const progress = index / (TEXT.length - 1);
    const angle = progress * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = -Math.sin(angle) * radius;
    const rotation = (angle * 180) / Math.PI - 90;

    return (
      <span
        key={`${character}-${index}`}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 select-none font-script text-[13px] leading-none text-brown"
        style={{
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`,
        }}
      >
        {character}
      </span>
    );
  });

  return (
    <div
      ref={badge}
      className="relative h-[112px] w-[112px] rounded-full border-2 border-brown bg-white/80"
      role="img"
      aria-label="Sip well, live well"
    >
      {letters}
    </div>
  );
}
