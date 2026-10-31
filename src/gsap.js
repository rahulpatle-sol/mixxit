import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const REDUCED = "(prefers-reduced-motion: reduce)";
export const NO_REDUCED = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "screen and (min-width: 768px) and (prefers-reduced-motion: no-preference)";
export const MOBILE = "screen and (max-width: 767px) and (prefers-reduced-motion: no-preference)";