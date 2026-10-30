import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";

const TEXT = "Sip well, live well";

export default function CircularBadge() {
  const wrap = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(wrap.current, { rotation: 360, duration: 10, repeat: -1, ease: "none" });
    }, wrap);
    return () => ctx.revert();
  }, []);

  const radius = 54;
  const letters = [...TEXT].map((c, i) => {
    const t = i / (TEXT.length - 1);
    const angle = t * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius - radius;
    const deg = (angle * 180) / Math.PI + (t > 0.5 ? 180 : 0);
    return (
      <span
        key={i}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: `rotate(${deg}deg)`,
        }}
        className="font-script text-brown text-[clamp(1.1rem,3vw,1.6rem)] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {c}
      </span>
    );
  });

  return (
    <div
      ref={wrap}
      className="relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden pointer-events-none"
      aria-label="Sip well, live well"
    >
      <div className="absolute inset-0 rounded-full border-2 border-brown mix-blend-multiply" />
      {letters}
    </div>
  );
}
