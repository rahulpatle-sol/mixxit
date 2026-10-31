import { useId, useLayoutEffect, useRef } from "react";
import { Leaf } from "lucide-react";
import { gsap } from "../gsap";

// Showroom turntable plate: rim + groove wali platter (ghoomti hai) + fixed light sheen + centre spindle.
export default function CircularBadge() {
  const spin = useRef(null);
  const pathId = `badge${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const tween = gsap.to(spin.current, { rotation: 360, duration: 16, repeat: -1, ease: "none" });
    return () => tween.kill();
  }, []);

  return (
    <div
      className="relative h-[132px] w-[132px] rounded-full shadow-[0_16px_18px_-8px_rgba(75,46,26,0.5),0_3px_0_rgba(75,46,26,0.55)]"
      role="img"
      aria-label="Sip well, live well"
    >
      {/* metal rim */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(145deg, #ffc27a 0%, #fc7305 45%, #a94300 100%)",
          boxShadow: "inset 0 2px 3px rgba(255,255,255,0.65), inset 0 -3px 6px rgba(75,46,26,0.55)",
        }}
      />

      {/* platter (ye ghoomti hai) */}
      <div
        ref={spin}
        className="absolute inset-[7px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle at 50% 50%, #fff3dc 0%, #f3d5a4 55%, #e1ac6e 100%)",
          boxShadow: "inset 0 3px 7px rgba(75,46,26,0.4), inset 0 -2px 3px rgba(255,255,255,0.6)",
        }}
      >
        {/* record-jaise grooves */}
        <div
          className="absolute inset-0 rounded-full opacity-30"
          style={{ background: "repeating-radial-gradient(circle at 50% 50%, rgba(75,46,26,0.6) 0 0.6px, transparent 0.6px 3.5px)" }}
        />
        <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <path id={pathId} d="M60 60 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0" />
          </defs>
          <circle cx="60" cy="60" r="52" fill="none" stroke="#4b2e1a" strokeOpacity="0.35" strokeWidth="0.8" />
          <circle cx="60" cy="60" r="29" fill="none" stroke="#4b2e1a" strokeOpacity="0.35" strokeWidth="0.8" />
          <text fontFamily="'Kaushan Script', cursive" fontSize="11.5" fill="#4b2e1a">
            <textPath href={`#${pathId}`} textLength="246" lengthAdjust="spacing">
              sip well • live well • sip well • live well •
            </textPath>
          </text>
        </svg>
      </div>

      {/* fixed light sheen (platter ke upar, ghoomta nahi) */}
      <div
        className="pointer-events-none absolute inset-[7px] rounded-full"
        style={{
          background:
            "conic-gradient(from 25deg, transparent 0deg, rgba(255,255,255,0.6) 22deg, transparent 58deg, transparent 180deg, rgba(255,255,255,0.45) 202deg, transparent 238deg)",
        }}
      />

      {/* centre spindle */}
      <span
        className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white"
        style={{
          background: "radial-gradient(circle at 35% 30%, #9bd146, #63920e 60%, #3d5a08)",
          boxShadow: "0 2px 5px rgba(0,0,0,0.45), inset 0 1px 2px rgba(255,255,255,0.55)",
        }}
      >
        <Leaf size={20} aria-hidden="true" />
      </span>
    </div>
  );
}