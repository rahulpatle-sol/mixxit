import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, DESKTOP, MOBILE, REDUCED } from "../gsap";
import { products, colorById } from "../data";
import { PHOTOS } from "../assets";
import { scrollTo, useStore } from "../store";
import Pouch from "./Pouch";
import Img from "./Img";
import Sticker, { StickerGroup } from "./Sticker";
import { Splash } from "./Splash";
import CircularBadge from "./CircularBadge";

// ---- layout numbers (vw / vh units, hum px me convert karte hain) ----
const HERO = [
  { x: -17, y: 3, r: -16, s: 0.86 },
  { x: -6, y: 8, r: -6, s: 1 },
  { x: 6, y: 8, r: 6, s: 1 },
  { x: 17, y: 3, r: 16, s: 0.86 },
];
const STORY = [
  { x: -33, y: -14, r: -9, s: 0.78 },
  { x: -20, y: -9, r: 7, s: 0.78 },
  { x: -32, y: 15, r: 6, s: 0.78 },
  { x: -19, y: 20, r: -8, s: 0.78 },
];
const DOCK_X = 40;
const DOCK_Y = [-27, -9, 9, 27];
const SPOT_X = 12;
const LINEUP_SCALE = 0.88;
const LINEUP_X = (i) => (i - 1.5) * 21;
const PEDESTAL_VH = [9, 15, 12, 18];
const PEDESTAL_BG = ["bg-tan", "bg-orange", "bg-green", "bg-tan"];

function useMedia(query) {
  const [matches, setMatches] = useState(() => matchMedia(query).matches);
  useEffect(() => {
    const media = matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);
  return matches;
}

function PouchLayer({ refs, staticLayout = false }) {
  if (staticLayout) {
    return (
      <div className="mx-auto grid w-full max-w-sm grid-cols-2 place-items-center gap-x-3 gap-y-5 px-2 py-8">
        {products.map((p) => (
          <Pouch key={p.id} id={p.id} label={p.label} className="h-auto w-full max-w-[170px]" />
        ))}
      </div>
    );
  }
  // Do layer: outer (.pouch-intro) sirf page-load intro ke liye, inner (.pouch-el) sirf scroll timeline ke liye.
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {products.map((p) => (
        <div key={p.id} className="pouch-intro absolute inset-0">
          <div
            ref={(el) => {
              refs[p.id] = el;
            }}
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ width: "var(--pw)", height: "calc(var(--pw) * 1.4667)" }}
          >
            <Pouch id={p.id} label={p.label} className="h-full w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroChapter({ staticLayout = false }) {
  if (staticLayout) {
    return (
      <section className="relative z-10 flex flex-col items-center px-1 pt-6 text-center">
        <CircularBadge />
        <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,13vw,5.5rem)] font-extrabold leading-[0.9] text-brown">
          SIP WELL, LIVE WELL
        </h1>
        <p className="mt-5 max-w-xs font-script text-lg leading-snug">
          Made from Maa&apos;s recipes. Sweetened with jaggery. Ready in 30 seconds.
        </p>
        <button
          onClick={() => scrollTo("#shop")}
          className="mt-6 rounded-full border-2 border-brown bg-orange px-8 py-3.5 font-bold text-brown shadow-[5px_5px_0_rgba(75,46,26,0.3)]"
        >
          Shop now
        </button>
      </section>
    );
  }
  return (
    <section className="h-hero pointer-events-none absolute inset-0 z-20">
      <div className="absolute left-1/2 top-[17%] -translate-x-1/2">
        <CircularBadge />
      </div>
      <p className="absolute bottom-10 left-6 max-w-xs font-script text-[clamp(1rem,1.8vw,1.3rem)] leading-snug md:bottom-14 md:left-10">
        Made from Maa&apos;s recipes.
        <br />
        Sweetened with jaggery. Ready in 30 seconds.
      </p>
      <button
        onClick={() => scrollTo("#shop")}
        className="pointer-events-auto absolute bottom-10 right-6 rounded-full border-2 border-brown bg-orange px-8 py-4 font-bold text-brown shadow-[6px_6px_0_rgba(75,46,26,0.3)] transition-transform hover:scale-[1.03] md:bottom-14 md:right-10"
        aria-label="Shop premixes now"
      >
        Shop now
      </button>
    </section>
  );
}

function StoryChapter({ staticLayout = false }) {
  const story =
    "Maa's handwritten recipes, made easy for every day. Stir a jaggery-sweetened premix into warm milk and enjoy a familiar cup in 30 seconds.";

  const circles = (
    <div
      className={
        staticLayout
          ? "flex flex-col items-center gap-5 sm:flex-row"
          : "absolute bottom-10 right-6 flex gap-3 md:bottom-16 md:right-16 md:gap-6"
      }
    >
      <div className="h-36 w-36 rotate-2 overflow-hidden rounded-full border-4 border-brown shadow-[7px_7px_0_rgba(75,46,26,0.25)] md:h-52 md:w-52">
        <Img src={PHOTOS.lifestyle1} alt="A warm Mixxit premix drink ready to enjoy" className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 h-36 w-36 -rotate-2 overflow-hidden rounded-full border-4 border-brown shadow-[7px_7px_0_rgba(75,46,26,0.25)] md:mt-0 md:h-52 md:w-52">
        <Img src={PHOTOS.lifestyle2} alt="Ingredients for a jaggery-sweetened Mixxit drink" className="h-full w-full object-cover" />
      </div>
    </div>
  );

  if (staticLayout) {
    return (
      <section id="story" className="relative flex flex-col items-center px-1 py-16 text-center">
        {circles}
        <div className="mt-9 max-w-xl">
          <h2 className="font-display text-[clamp(1.7rem,7vw,3rem)] font-extrabold leading-tight">
            Wholesome premixes for every mood
          </h2>
          <p className="mt-4 text-base leading-relaxed">{story}</p>
        </div>
      </section>
    );
  }
  return <section className="h-story pointer-events-none absolute inset-0 z-20">{circles}</section>;
}

function SpotlightChapter({ staticLayout = false }) {
  const { add } = useStore();

  if (staticLayout) {
    return (
      <section className="relative px-1 py-16">
        {products.map((p) => (
          <article key={p.id} className="mx-auto mb-10 max-w-md border-b border-brown/20 pb-8 text-center last:mb-0 last:border-0">
            <h3 className="font-script text-[clamp(1.8rem,6vw,2.5rem)] leading-tight">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed">{p.desc}</p>
            <StickerGroup ids={p.stickers} size="md" className="mt-5 justify-center" />
            <button
              onClick={() => add(p.id)}
              className="mt-5 rounded-full border-2 border-brown bg-orange px-7 py-3 font-bold text-brown"
              aria-label={`Add ${p.name} to cart`}
            >
              Add to cart
            </button>
          </article>
        ))}
      </section>
    );
  }
  return (
    <section className="h-spot pointer-events-none absolute inset-0 z-20">
      {products.map((p) => (
        <article
          key={p.id}
          className="spot-panel absolute left-5 top-1/2 flex w-[min(34vw,380px)] flex-col items-start opacity-0 md:left-10"
        >
          <h3 className="font-script text-[clamp(2rem,4.2vw,3.2rem)] leading-tight">{p.name}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed md:text-base">{p.desc}</p>
          <StickerGroup ids={p.stickers} size="md" className="pointer-events-auto mt-5" />
          <button
            onClick={() => add(p.id)}
            className="pointer-events-auto mt-6 rounded-full border-2 border-brown bg-orange px-7 py-3 font-bold text-brown shadow-[5px_5px_0_rgba(75,46,26,0.3)] transition-transform hover:scale-[1.03]"
            aria-label={`Add ${p.name} to cart`}
          >
            Add to cart
          </button>
        </article>
      ))}
    </section>
  );
}

function LineupChapter({ staticLayout = false }) {
  const ids = ["natural", "jaggery", "preservatives", "love"];

  if (staticLayout) {
    return (
      <section className="relative flex flex-col items-center px-1 py-16 text-center">
        <h2 className="mb-8 font-display text-3xl font-extrabold">Goodness in every cup</h2>
        <div className="flex max-w-sm flex-wrap justify-center gap-4">
          {ids.map((id) => (
            <Sticker key={id} id={id} />
          ))}
        </div>
        <button
          onClick={() => scrollTo("#shop")}
          className="mt-9 rounded-full border-2 border-brown bg-orange px-8 py-4 font-bold text-brown shadow-[5px_5px_0_rgba(75,46,26,0.3)]"
        >
          Shop the lineup
        </button>
      </section>
    );
  }
  return (
    <section className="h-lineup pointer-events-none absolute inset-0 z-20">
      <div className="absolute left-1/2 top-[15%] flex -translate-x-1/2 flex-col items-center gap-4 text-center">
        <h2 className="lineup-title font-display text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-none">
          Goodness in every cup
        </h2>
        <div className="flex gap-3 md:gap-5">
          {ids.map((id) => (
            <Sticker key={id} id={id} className="lineup-sticker pointer-events-auto opacity-0" />
          ))}
        </div>
        <button
          onClick={() => scrollTo("#shop")}
          className="lineup-cta pointer-events-auto rounded-full border-2 border-brown bg-orange px-8 py-3.5 font-bold text-brown shadow-[6px_6px_0_rgba(75,46,26,0.3)] transition-transform hover:scale-[1.03]"
        >
          Shop the lineup
        </button>
      </div>
    </section>
  );
}

function StaticChapter({ children, id, className = "" }) {
  return (
    <section id={id} className={`mobile-chapter relative w-full px-5 pb-12 pt-24 md:px-10 ${className}`}>
      {children}
    </section>
  );
}

export default function Stage() {
  const desktop = useMedia(DESKTOP);
  const reducedMotion = useMedia(REDUCED);
  const stageRef = useRef(null);
  const pouchRefs = useRef({});

  useLayoutEffect(() => {
    const root = stageRef.current;
    if (!root) return undefined;
    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      const context = gsap.context(() => {
        const q = (s) => Array.from(root.querySelectorAll(s));
        const pouches = products.map(({ id }) => pouchRefs.current[id]).filter(Boolean);
        if (pouches.length !== products.length) return;

        const hero = q(".h-hero");
        const story = q(".h-story");
        const spot = q(".h-spot");
        const lineup = q(".h-lineup");
        const heroBackdrop = q(".hero-backdrop");
        const storyBackdrop = q(".story-backdrop");
        const heroWords = q(".hero-word");
        const storyWords = q(".story-word");
        const splashes = q(".story-splash");
        const panels = q(".spot-panel");
        const blobs = q(".spot-blob");
        const pedestals = q(".ped");
        const stickers = q(".lineup-sticker");
        const lineupText = q(".lineup-title, .lineup-cta");
        const intro = q(".pouch-intro");

        // vw/vh -> px, live (resize pe invalidateOnRefresh se dobara calculate)
        const vw = (n) => (n * root.clientWidth) / 100;
        const vh = (n) => (n * root.clientHeight) / 100;
        const place = (pos) => ({
          x: (i) => vw(pos[i].x),
          y: (i) => vh(pos[i].y),
          rotation: (i) => pos[i].r,
          scale: (i) => pos[i].s,
        });
        const lineupY = (i) => {
          const half = (pouches[i].offsetHeight * LINEUP_SCALE) / 2;
          // SVG ke neeche ~6% khali jagah hai, uska bhi hisaab
          return root.clientHeight / 2 - vh(PEDESTAL_VH[i]) - half + half * 2 * 0.06;
        };

        gsap.set(pouches, { xPercent: -50, yPercent: -50 });
        gsap.set([...story, ...spot, ...lineup, ...storyBackdrop, ...splashes, ...panels, ...blobs, ...pedestals], { opacity: 0 });
        gsap.set(panels, { yPercent: -50, x: -30 });
        gsap.set(pedestals, { yPercent: 100 });
        gsap.set(stickers, { scale: 0.6, rotation: -12 });
        gsap.set(lineupText, { y: 20 });

        // 1) Page-load intro (alag wrapper pe, scroll timeline se conflict nahi)
        gsap.from(intro, { y: () => root.clientHeight * 0.7, opacity: 0, duration: 1.1, ease: "power3.out", stagger: 0.08 });
        gsap.from(heroWords, { yPercent: 115, duration: 1, ease: "power4.out", stagger: 0.08, delay: 0.1 });
        gsap.from(".h-hero > *", { opacity: 0, y: 16, duration: 0.8, ease: "power2.out", stagger: 0.12, delay: 0.7 });

        // 2) Scroll timeline
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.set(pouches, { ...place(HERO), immediateRender: true }, 0);

        // hero -> story
        tl.to(pouches, { ...place(STORY), duration: 0.9 }, 0.8);
        tl.to([...hero, ...heroBackdrop], { opacity: 0, duration: 0.35 }, 0.8);
        tl.to([...story, ...storyBackdrop], { opacity: 1, duration: 0.35 }, 0.95);
        tl.to(storyWords, { opacity: 1, stagger: 0.07, duration: 0.2, ease: "none" }, 1.05);
        tl.to(splashes, { opacity: 0.85, y: () => vh(5), stagger: 0.08, duration: 0.5 }, 1.0);

        // story -> spotlight
        tl.to([...story, ...storyBackdrop, ...splashes], { opacity: 0, duration: 0.4 }, 2.2);
        tl.to(spot, { opacity: 1, duration: 0.3 }, 2.35);

        products.forEach((_, active) => {
          const t = 2.4 + active * 0.95;
          tl.to(
            pouches,
            {
              x: (i) => vw(i === active ? SPOT_X : DOCK_X),
              y: (i) => (i === active ? 0 : vh(DOCK_Y[i])),
              rotation: 0,
              scale: (i) => (i === active ? 1.4 : 0.42),
              duration: 0.55,
            },
            t
          );
          tl.to(
            panels,
            { opacity: (i) => (i === active ? 1 : 0), x: (i) => (i === active ? 0 : -30), duration: 0.3 },
            t + 0.2
          );
          tl.to(blobs, { opacity: (i) => (i === active ? 1 : 0), duration: 0.35, ease: "none" }, t + 0.1);
        });

        // spotlight -> lineup
        const L = 2.4 + products.length * 0.95;
        tl.to(
          pouches,
          { x: (i) => vw(LINEUP_X(i)), y: (i) => lineupY(i), rotation: 0, scale: LINEUP_SCALE, duration: 0.75 },
          L
        );
        tl.to([...spot, ...panels, ...blobs], { opacity: 0, duration: 0.3 }, L);
        tl.to(lineup, { opacity: 1, duration: 0.3 }, L + 0.15);
        tl.to(pedestals, { opacity: 1, yPercent: 0, stagger: 0.08, duration: 0.5, ease: "back.out(1.4)" }, L + 0.1);
        tl.to(lineupText, { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 }, L + 0.3);
        tl.to(stickers, { opacity: 1, scale: 1, rotation: (i) => [-6, 6, -4, 5][i], stagger: 0.1, duration: 0.45, ease: "back.out(2)" }, L + 0.4);
        tl.to({}, { duration: 0.5 }); // thoda hold, taaki lineup pe ruk ke dikhe

        ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: "+=550%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: tl,
        });
      }, root);

      return () => context.revert();
    });

    mm.add(MOBILE, () => {
      const context = gsap.context(() => {
        root.querySelectorAll(".mobile-chapter").forEach((chapter) => {
          gsap.from(chapter, {
            y: 28,
            opacity: 0.4,
            ease: "none",
            scrollTrigger: { trigger: chapter, start: "top 90%", end: "top 55%", scrub: true },
          });
        });
      }, root);
      return () => context.revert();
    });

    return () => mm.revert();
  }, [desktop, reducedMotion]);

  if (desktop && !reducedMotion) {
    return (
      <section
        ref={stageRef}
        id="stage"
        className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-white"
        style={{ "--pw": "clamp(100px, min(14vw, 24vh), 230px)" }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <h1 className="hero-backdrop absolute left-1/2 top-[46%] w-[96%] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[clamp(3.5rem,12.5vw,11rem)] font-extrabold leading-[0.84] tracking-tight text-brown">
            {["SIP WELL,", "LIVE WELL"].map((line) => (
              <span className="block" key={line}>
                {line.split(" ").map((w) => (
                  <span key={w} className="mr-[0.18em] inline-block overflow-hidden pb-[0.06em] align-bottom last:mr-0">
                    <span className="hero-word inline-block">{w}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <h2 className="story-backdrop absolute right-[7%] top-[40%] w-[52%] -translate-y-1/2 text-right font-display text-[clamp(2rem,5.6vw,5rem)] font-extrabold leading-[0.92] tracking-tight text-brown">
            {"WHOLESOME PREMIXES FOR EVERY MOOD".split(" ").map((w) => (
              <span className="story-word mr-[0.22em] inline-block opacity-0" key={w}>
                {w}
              </span>
            ))}
          </h2>
        
<div className="absolute left-[3vw] top-[22vh] w-[min(42vw,520px)]">
  {/* Large orange brush stroke */}
  <Splash
    color="#fc7305"
    className="story-splash w-full"
  />

  {/* Medium green brush stroke */}
  <Splash
    color="#63920e"
    className="story-splash absolute left-[5%] top-[22%] w-[82%]"
  />

  {/* Small beige brush stroke */}
  <Splash
    color="#e1ac6e"
    className="story-splash absolute left-[10%] top-[42%] w-[64%]"
  />
</div>

          {products.map((p) => (
            <div
              key={p.id}
              className="spot-blob absolute top-1/2 h-[min(80vh,720px)] w-[min(80vh,720px)] -translate-y-1/2 -translate-x-1/2 rounded-full"
              style={{
                left: `calc(50% + ${SPOT_X}vw)`,
                background: `radial-gradient(circle, ${colorById[p.id]}66 0%, ${colorById[p.id]}00 68%)`,
              }}
            />
          ))}
          {PEDESTAL_VH.map((h, i) => (
            <div
              key={i}
              className={`ped absolute bottom-0 rounded-t-3xl border-[3px] border-b-0 border-brown ${PEDESTAL_BG[i]}`}
              style={{ height: `${h}vh`, width: "19vw", left: `calc(50% + ${LINEUP_X(i)}vw - 9.5vw)` }}
            />
          ))}
        </div>
        <PouchLayer refs={pouchRefs.current} />
        <HeroChapter />
        <StoryChapter />
        <SpotlightChapter />
        <LineupChapter />
      </section>
    );
  }

  return (
    <section ref={stageRef} id="stage" className="relative w-full bg-white">
      <StaticChapter id="hero" className="flex flex-col items-center">
        <HeroChapter staticLayout />
        <PouchLayer refs={pouchRefs.current} staticLayout />
      </StaticChapter>
      <StaticChapter className="flex flex-col items-center">
        <StoryChapter staticLayout />
      </StaticChapter>
      <StaticChapter className="flex flex-col items-center">
        <SpotlightChapter staticLayout />
      </StaticChapter>
      <StaticChapter className="flex flex-col items-center">
        <LineupChapter staticLayout />
      </StaticChapter>
    </section>
  );
}