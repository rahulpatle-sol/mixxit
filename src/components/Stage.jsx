import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, DESKTOP, MOBILE, REDUCED } from "../gsap";
import { products, colorById } from "../data";
import { scrollTo, useStore } from "../store";
import Pouch from "./Pouch";
import Sticker from "./Sticker";
import Splash from "./Splash";
import CircularBadge from "./CircularBadge";

const REDUCED_MQ = matchMedia(REDUCED);

function useMedia(query) {
  const [m, setM] = useState(() => matchMedia(query).matches);
  useEffect(() => {
    const mql = matchMedia(query);
    setM(mql.matches);
    const onChange = () => setM(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return m;
}

function PouchLayer({ refs, static: isStatic = false }) {
  return (
    <div className={isStatic ? "flex flex-col items-center pt-20 pb-32 gap-16" : "absolute inset-0 z-10"}>
      {products.map((p) => (
        <Pouch
          key={p.id}
          id={p.id}
          label={p.label}
          ref={(el) => (refs[p.id].current = el)}
          className={`will-change-transform ${isStatic ? "max-w-[170px] mx-auto" : "absolute"}`}
          style={isStatic ? { position: "static", display: "block", margin: "0 auto", marginTop: "10vh" } : { position: "absolute", left: "50%", top: "50%" }}
        />
      ))}
    </div>
  );
}

function HeroChapter({ static: isStatic = false }) {
  const words = ["SIP", "WELL,", "LIVE", "WELL"];
  const wrap = isStatic ? "relative flex flex-col items-center py-20 text-center" : "absolute inset-0 z-20 pointer-events-none";
  const copy = isStatic ? "mt-8" : "absolute left-6 bottom-10 md:left-10 md:bottom-14";
  const btn = isStatic ? "mt-8 pointer-events-auto" : "absolute right-6 bottom-10 md:right-10 md:bottom-14 z-30 pointer-events-auto";
  return (
    <section className={`${wrap} h-full`}>
      <div className="text-center">
        <CircularBadge className="mb-6" />
        <h2 className="font-display font-black text-brown text-[clamp(2.5rem,14vw,9rem)] leading-[0.92] select-none">
          {words.map((w, i) => (
            <span key={i} className="hero-word inline-block">
              {w}{i < words.length - 1 ? " " : null}
            </span>
          ))}
        </h2>
      </div>
      <div className={copy}>
        <p className="font-script text-[clamp(0.95rem,1.8vw,1.25rem)] text-brown leading-[1.4]">
          Made from Maa's recipes.<br className="hidden md:block" />
          Sweetened with jaggery. Ready in 30 seconds.
        </p>
      </div>
      <button
        onClick={() => scrollTo("#shop")}
        className={`${btn} inline-flex items-center gap-2 rounded-full border-2 border-brown bg-orange px-9 py-4.5 font-bold text-white shadow-[6px_6px_0_rgba(75,46,26,0.35)] hover:scale-[1.02] transition-transform`}
        aria-label="Shop premixes now"
      >
        Shop now
      </button>
    </section>
  );
}

function StoryChapter({ static: isStatic = false }) {
  const text = "WHOLESOME PREMIXES FOR EVERY MOOD";
  const wrap = isStatic ? "relative flex flex-col items-center py-20 text-center" : "absolute inset-0 z-20 pointer-events-none";
  const masks = isStatic ? "mt-10 flex flex-col gap-6 md:flex-row md:items-end" : "absolute bottom-10 right-10 md:bottom-20 md:right-20 flex gap-3 md:gap-6";
  return (
    <section className={`${wrap} h-full`}>
      {!isStatic && (
        <div className="absolute top-1/2 right-10 -translate-y-1/2 md:right-20 text-right">
          <h2 className="font-display font-black text-brown text-[clamp(1.4rem,7vw,3.75rem)] leading-[1.02] select-none md:text-[clamp(2.2rem,8vw,4.5rem)]">
            {text.split(" ").map((w, i) => (
              <span key={i} className="story-word inline-block opacity-0">
                {w}
              </span>
            ))}
          </h2>
        </div>
      )}
      <div className={masks}>
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-brown overflow-hidden shadow-[8px_8px_0_rgba(75,46,26,0.35)] rotate-2">
          <img src="/images/lifestyle-1.jpg" alt="Lifestyle shot of premix drinks" className="w-full h-full object-cover" />
        </div>
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-brown overflow-hidden shadow-[8px_8px_0_rgba(75,46,26,0.35)] -rotate-2 mt-6 md:mt-0 md:-mr-12">
          <img src="/images/lifestyle-2.jpg" alt="Lifestyle shot of jaggery premix" className="w-full h-full object-cover" />
        </div>
      </div>
      {!isStatic && (
        <div className="absolute top-10 left-10 md:top-20 md:left-20">
          <Splash color="#fc7305" className="pointer-events-none" style={{ width: 320, height: 260 } } />
          <Splash color="#63920e" className="pointer-events-none" style={{ width: 260, height: 220 } } />
          <Splash color="#e1ac6e" className="pointer-events-none" style={{ width: 220, height: 200 } } />
        </div>
      )}
      {isStatic && (
        <div className="mt-10 max-w-xl text-center">
          <h2 className="font-display font-black text-brown text-[clamp(1.5rem,6vw,3rem)] leading-none mb-4">Wholesome premixes for every mood</h2>
          <p className="text-brown leading-relaxed">{products.map((p) => `${p.name}: ${p.desc}`).join(" ")}</p>
        </div>
      )}
    </section>
  );
}

function SpotlightChapter({ static: isStatic = false }) {
  const wrap = isStatic ? "relative py-20" : "absolute inset-0 z-20 pointer-events-none";
  return (
    <section className={wrap}>
      {isStatic ? (
        products.map((p) => (
          <div key={p.id} className="max-w-md mx-auto text-center mb-16">
            <h3 className="font-script text-3xl text-brown">{p.name}</h3>
            <p className="mt-2 text-brown">{p.desc}</p>
            <div className="mt-4 flex justify-center gap-3">{p.stickers.map((sid) => <Sticker key={sid} id={sid} />)}</div>
            <button onClick={() => { const { add } = useStore(); add(p.id); } className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-brown bg-orange px-7 py-3 font-bold text-white" aria-label={`Add ${p.name} to cart`}>Add to cart</button>
          </div>
        ))
      ) : (
        products.map((p, i) => (
          <div key={p.id} className="spot-panel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none" style={{ opacity: 0 }}>
            <h3 className="font-script text-[clamp(1.7rem,5.5vw,3rem)] text-brown leading-none">{p.name}</h3>
            <p className="mt-4 max-w-[26rem] text-center text-brown text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.5]">{p.desc}</p>
            <div className="mt-6" aria-label={p.name}>
              {p.stickers.map((sid) => (
                <Sticker key={sid} id={sid} className="pointer-events-auto" />
              ))}
            </div>
            <button
              onClick={() => { const { add } = useStore(); add(p.id); } }
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-brown bg-orange px-8 py-4 font-bold text-white shadow-[5px_5px_0_rgba(75,46,26,0.35)] hover:scale-[1.02] transition-transform pointer-events-auto"
              aria-label={`Add ${p.name} to cart`}
            >
              Add to cart
            </button>
          </div>
        ))
      )}
      {!isStatic && (
        <>
          {products.map((p) => (
            <div key={`${p.id}-blob`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-[100px] opacity-0" style={{ backgroundColor: colorById[p.id] }} />
          ))}
        </>
      )}
    </section>
  );
}

function LineupChapter({ static: isStatic = false }) {
  const wrap = isStatic ? "relative py-20" : "absolute inset-0 z-20 pointer-events-none";
  return (
    <section className={wrap}>
      {!isStatic && (
        <svg className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[900px]" viewBox="0 0 900 120" preserveAspectRatio="none" aria-hidden="true">
          <rect x="120" y="60" width="180" height="60" rx="12" fill="#e1ac6e" stroke="#4b2e1a" strokeWidth="3" />
          <rect x="340" y="40" width="180" height="80" rx="12" fill="#fc7305" stroke="#4b2e1a" strokeWidth="3" />
          <rect x="560" y="50" width="180" height="70" rx="12" fill="#63920e" stroke="#4b2e1a" strokeWidth="3" />
          <rect x="780" y="70" width="180" height="50" rx="12" fill="#e1ac6e" stroke="#4b2e1a" strokeWidth="3" />
        </svg>
      )}
      <div className={isStatic ? "mt-8 flex flex-col items-center gap-3" : "absolute right-10 bottom-14 md:right-16 md:bottom-20 flex flex-col gap-3"}>
        {["natural", "jaggery", "preservatives", "love"].map((sid) => (
          <Sticker key={sid} id={sid} className={`lineup-sticker pointer-events-auto ${isStatic ? "" : "opacity-0 scale-75"}`} />
        ))}
      </div>
      <button
        onClick={() => scrollTo("#shop")}
        className={isStatic ? "mt-8" : "absolute left-10 bottom-14 md:left-16 md:bottom-20 z-30 pointer-events-auto"} + " inline-flex items-center gap-2 rounded-full border-2 border-brown bg-orange px-9 py-4.5 font-bold text-white shadow-[6px_6px_0_rgba(75,46,26,0.35)] hover:scale-[1.02] transition-transform"
        aria-label="Shop the lineup"
      >
        Shop the lineup
      </button>
    </section>
  );
}

function StaticChapter({ children, className = "" }) {
  return <section className={`relative min-h-[100vh] w-full px-5 md:px-10 pt-20 pb-32 ${className}`}>{children}</section>;
}

export default function Stage() {
  const desktop = useMedia(DESKTOP);
  const mobile = useMedia(MOBILE);
  const reduced = REDUCED_MQ.matches;

  const stageRef = useRef(null);
  const refs = products.reduce((acc, p) => { acc[p.id] = useRef(null); return acc; }, {});

  if (reduced) {
    return (
      <>
        <StaticChapter id="stage">
          <PouchLayer refs={refs} static />
          <HeroChapter static />
          <StoryChapter static />
          <SpotlightChapter static />
          <LineupChapter static />
        </StaticChapter>
      </>
    );
  }

  const desktopMarkup = (
    <section ref={stageRef} className="relative w-full min-h-[100vh] overflow-hidden bg-paper" id="stage">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-brown text-[clamp(3rem,16vw,12rem)] leading-[0.92]">SIP WELL, LIVE WELL</h2>
        <h2 className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 font-display font-black text-brown text-[clamp(1.5rem,7vw,3.5rem)] leading-[1.02] text-right">WHOLESOME PREMIXES FOR EVERY MOOD</h2>
      </div>
      <PouchLayer refs={refs} />
      <HeroChapter />
      <StoryChapter />
      <SpotlightChapter />
      <LineupChapter />
    </section>
  );

  const mobileMarkup = (
    <section id="stage" className="relative w-full bg-paper">
      <StaticChapter className="h-hero">
        <HeroChapter static />
        <PouchLayer refs={refs} static />
      </StaticChapter>
      <StaticChapter id="story" className="h-story">
        <PouchLayer refs={refs} static />
        <StoryChapter static />
      </StaticChapter>
      <StaticChapter id="spotlight" className="h-spot">
        <PouchLayer refs={refs} static />
        <SpotlightChapter static />
      </StaticChapter>
      <StaticChapter id="lineup" className="h-lineup">
        <PouchLayer refs={refs} static />
        <LineupChapter static />
      </StaticChapter>
    </section>
  );

  useLayoutEffect(() => {
    if (!desktop) return;
    const root = stageRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const pouches = products.map((p) => refs[p.id].current).filter(Boolean);
      const heroWords = root.querySelectorAll(".hero-word");
      const storyWords = root.querySelectorAll(".story-word");
      const overlays = {
        hero: root.querySelector(".h-hero"),
        story: root.querySelector(".h-story"),
        spot: root.querySelector(".h-spot"),
        lineup: root.querySelector(".h-lineup"),
      };
      const spotPanels = root.querySelectorAll(".spot-panel");
      const blobs = root.querySelectorAll('[class*="-blob"]');
      const stickers = root.querySelectorAll(".lineup-sticker");
      const splashes = root.querySelectorAll("section.h-story svg");

      gsap.defaults({ ease: "power2.inOut", overwrite: true });

      const tl = gsap.timeline({ paused: true, smoothChildTiming: true });

      const heroPos = [
        { x: "-30vw", y: "6vh", rotate: -20, scale: 0.8 },
        { x: "-12vw", y: "14vh", rotate: -8, scale: 1 },
        { x: "15vw", y: "20vh", rotate: 10, scale: 1 },
        { x: "34vw", y: "12vh", rotate: 14, scale: 0.8 },
      ];
      const storyPos = [
        { x: "-52vw", y: "-6vh", rotate: 24, scale: 0.75 },
        { x: "-26vw", y: "10vh", rotate: -18, scale: 0.9 },
        { x: "-46vw", y: "30vh", rotate: 16, scale: 0.75 },
        { x: "-62vw", y: "18vh", rotate: -12, scale: 0.7 },
      ];
      const spotlightPos = { x: 0, y: "20vh", rotate: 0, scale: 1.15 };
      const dockPos = [
        { x: "62vw", y: "14vh", rotate: 0, scale: 0.5 },
        { x: "62vw", y: "34vh", rotate: 0, scale: 0.5 },
        { x: "62vw", y: "54vh", rotate: 0, scale: 0.5 },
      ];
      const lineupPos = [
        { x: "-26vw", y: "34vh", rotate: 0, scale: 0.9 },
        { x: "-8vw", y: "26vh", rotate: 0, scale: 0.9 },
        { x: "10vw", y: "30vh", rotate: 0, scale: 0.9 },
        { x: "28vw", y: "24vh", rotate: 0, scale: 0.9 },
      ];

      gsap.set(overlays.hero, { opacity: 1 });

      tl.to(
        pouches,
        {
          x: (i) => storyPos[i].x,
          y: (i) => storyPos[i].y,
          rotate: (i) => storyPos[i].rotate,
          scale: (i) => storyPos[i].scale,
        },
        0.32
      );
      tl.to(overlays.hero, { opacity: 0 }, 0.32);
      tl.to(overlays.story, { opacity: 1 }, 0.32);

      tl.to(storyWords, { opacity: 1, stagger: 0.05, ease: "none" }, 0.36);
      tl.to(storyWords, { opacity: 0, stagger: 0.05, ease: "none" }, 0.62);
      tl.to(splashes, { opacity: 0.9, y: "12vh", stagger: 0.08, ease: "none" }, 0.4);
      tl.to(splashes, { opacity: 0, y: 0, ease: "none" }, 0.62);

      products.forEach((p, i) => {
        const t = 0.72 + i * 0.115;
        const active = refs[p.id].current;
        const others = pouches.filter((_, j) => j !== i);
        const dock = dockPos.slice(0, 3);
        tl.fromTo(active, { x: "-=0" }, spotlightPos, t);
        others.forEach((el, j) => tl.fromTo(el, { x: "-=0" }, dock[j], t));
        tl.to(spotPanels, { opacity: (j) => (j === i ? 1 : 0), ease: "none" }, t);
        tl.to(blobs, { opacity: (j) => (j === i ? 0.35 : 0), ease: "none" }, t);
      });

      tl.to(
        pouches,
        {
          x: (i) => lineupPos[i].x,
          y: (i) => lineupPos[i].y,
          rotate: (i) => lineupPos[i].rotate,
          scale: (i) => lineupPos[i].scale,
        },
        1.22
      );
      tl.to(overlays.spot, { opacity: 0 }, 1.22);
      tl.to(overlays.lineup, { opacity: 1 }, 1.22);
      tl.to(stickers, { opacity: 1, scale: 1, rotate: (i) => [-6, 6, -4, 5][i], stagger: 0.09 }, 1.26);

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        animation: tl,
      });
    }, root);
    return () => ctx.revert();
  }, [desktop]);

  useLayoutEffect(() => {
    if (!desktop) return;
    const root = stageRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const pouches = products.map((p) => refs[p.id].current).filter(Boolean);
      const heroWords = root.querySelectorAll(".hero-word");
      const heroPos = [
        { x: "-30vw", y: "6vh", rotate: -20, scale: 0.8 },
        { x: "-12vw", y: "14vh", rotate: -8, scale: 1 },
        { x: "15vw", y: "20vh", rotate: 10, scale: 1 },
        { x: "34vw", y: "12vh", rotate: 14, scale: 0.8 },
      ];
      gsap.fromTo(
        pouches,
        { y: "110vh", opacity: 0 },
        { y: (i) => heroPos[i].y, x: (i) => heroPos[i].x, rotate: (i) => heroPos[i].rotate, scale: (i) => heroPos[i].scale, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1 }
      );
      gsap.fromTo(heroWords, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.08 });
    }, root);
    return () => ctx.revert();
  }, [desktop]);

  useLayoutEffect(() => {
    if (!mobile) return;
    const ctx = gsap.context(() => {
      document.querySelectorAll("#stage section").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 60%", scrub: true } });
      });
    });
    return () => ctx.revert();
  }, [mobile]);

  return desktop ? desktopMarkup : mobileMarkup;
}
