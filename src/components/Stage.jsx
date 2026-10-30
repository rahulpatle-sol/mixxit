import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, DESKTOP, MOBILE, REDUCED } from "../gsap";
import { products, colorById } from "../data";
import { ASSETS } from "../assets";
import { scrollTo, useStore } from "../store";
import Pouch from "./Pouch";
import Sticker, { StickerGroup } from "./Sticker";
import { Splash } from "./Splash";
import CircularBadge from "./CircularBadge";

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
  return (
    <div
      className={
        staticLayout
          ? "mx-auto grid w-full max-w-sm grid-cols-2 place-items-center gap-x-3 gap-y-5 px-2 py-8"
          : "pointer-events-none absolute inset-0 z-10"
      }
    >
      {products.map((product) => (
        <Pouch
          key={product.id}
          id={product.id}
          label={product.label}
          ref={(element) => {
            refs[product.id] = element;
          }}
          className={
            staticLayout
              ? "aspect-[5/7] w-full max-w-[170px] object-contain"
              : "absolute left-1/2 top-1/2 h-[252px] w-[180px] will-change-transform"
          }
          style={staticLayout ? undefined : { left: "50%", top: "50%" }}
        />
      ))}
    </div>
  );
}

function HeroChapter({ staticLayout = false }) {
  const words = ["SIP", "WELL,", "LIVE", "WELL"];

  return (
    <section
      className={
        staticLayout
          ? "relative z-10 flex flex-col items-center px-1 pt-6 text-center"
          : "h-hero pointer-events-none absolute inset-0 z-20"
      }
    >
      {staticLayout ? (
        <>
          <CircularBadge />
          <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(3rem,13vw,5.5rem)] font-black leading-[0.88] text-brown">
            {words.join(" ")}
          </h1>
          <p className="mt-5 max-w-xs font-script text-lg leading-snug text-brown">
            Made from Maa&apos;s recipes. Sweetened with jaggery. Ready in 30 seconds.
          </p>
          <button
            onClick={() => scrollTo("#shop")}
            className="mt-6 rounded-full border-2 border-brown bg-orange px-8 py-3.5 font-bold text-white shadow-[5px_5px_0_rgba(75,46,26,0.3)] transition-transform hover:scale-[1.02]"
          >
            Shop now
          </button>
        </>
      ) : (
        <>
          <div className="absolute left-1/2 top-[12%] -translate-x-1/2">
            <CircularBadge />
          </div>
          <p className="absolute bottom-10 left-6 max-w-xs font-script text-[clamp(1rem,1.8vw,1.25rem)] leading-snug text-brown md:bottom-14 md:left-10">
            Made from Maa&apos;s recipes.
            <br />
            Sweetened with jaggery. Ready in 30 seconds.
          </p>
          <button
            onClick={() => scrollTo("#shop")}
            className="pointer-events-auto absolute bottom-10 right-6 rounded-full border-2 border-brown bg-orange px-8 py-4 font-bold text-white shadow-[6px_6px_0_rgba(75,46,26,0.3)] transition-transform hover:scale-[1.02] md:bottom-14 md:right-10"
            aria-label="Shop premixes now"
          >
            Shop now
          </button>
        </>
      )}
    </section>
  );
}

function StoryChapter({ staticLayout = false }) {
  const story =
    "Maa's handwritten recipes, made easy for every day. Stir a jaggery-sweetened premix into warm milk and enjoy a familiar cup in 30 seconds.";

  return (
    <section
      id={staticLayout ? "story" : undefined}
      className={
        staticLayout
          ? "relative flex flex-col items-center px-1 py-16 text-center"
          : "h-story pointer-events-none absolute inset-0 z-20"
      }
    >
      <div
        className={
          staticLayout
            ? "flex flex-col items-center gap-5 sm:flex-row"
            : "absolute bottom-10 right-6 flex gap-3 md:bottom-16 md:right-16 md:gap-6"
        }
      >
        <div className="h-36 w-36 rotate-2 overflow-hidden rounded-full border-4 border-brown shadow-[7px_7px_0_rgba(75,46,26,0.25)] md:h-52 md:w-52">
          <img
            src={ASSETS.lifestyle1}
            alt="A warm Mixxit premix drink ready to enjoy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4 h-36 w-36 -rotate-2 overflow-hidden rounded-full border-4 border-brown shadow-[7px_7px_0_rgba(75,46,26,0.25)] md:mt-0 md:h-52 md:w-52">
          <img
            src={ASSETS.lifestyle2}
            alt="Ingredients for a jaggery-sweetened Mixxit drink"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {!staticLayout && (
        <div className="absolute left-5 top-8 w-[min(34vw,320px)] md:left-10 md:top-12">
          <Splash color="#fc7305" className="story-splash pointer-events-none w-full" />
          <Splash color="#63920e" className="story-splash pointer-events-none absolute inset-5 w-[85%]" />
          <Splash color="#e1ac6e" className="story-splash pointer-events-none absolute inset-10 w-[70%]" />
        </div>
      )}

      {staticLayout && (
        <div className="mt-9 max-w-xl">
          <h2 className="font-display text-[clamp(1.7rem,7vw,3rem)] font-black leading-tight text-brown">
            Wholesome premixes for every mood
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown">{story}</p>
        </div>
      )}
    </section>
  );
}

function SpotlightChapter({ staticLayout = false }) {
  const { add } = useStore();

  return (
    <section
      className={
        staticLayout
          ? "relative px-1 py-16"
          : "h-spot pointer-events-none absolute inset-0 z-20"
      }
    >
      {products.map((product) => (
        <article
          key={product.id}
          className={
            staticLayout
              ? "mx-auto mb-10 max-w-md border-b border-brown/20 pb-8 text-center last:mb-0 last:border-0"
              : "spot-panel pointer-events-none absolute left-5 top-1/2 flex w-[min(34vw,360px)] -translate-y-1/2 flex-col items-start opacity-0 md:left-10"
          }
          style={staticLayout ? undefined : { opacity: 0 }}
        >
          <h3 className="font-script text-[clamp(1.8rem,4vw,2.7rem)] leading-tight text-brown">
            {product.name}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-brown md:text-base">
            {product.desc}
          </p>
          <StickerGroup
            ids={product.stickers}
            className="pointer-events-auto mt-5 justify-center"
          />
          <button
            onClick={() => add(product.id)}
            className="pointer-events-auto mt-5 rounded-full border-2 border-brown bg-orange px-7 py-3 font-bold text-white transition-transform hover:scale-[1.02]"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart
          </button>
        </article>
      ))}
    </section>
  );
}

function LineupChapter({ staticLayout = false }) {
  return (
    <section
      className={
        staticLayout
          ? "relative flex flex-col items-center px-1 py-16 text-center"
          : "h-lineup pointer-events-none absolute inset-0 z-20"
      }
    >
      <div
        className={
          staticLayout
            ? "flex max-w-sm flex-wrap justify-center gap-4"
            : "pointer-events-none absolute bottom-12 right-6 flex max-w-sm flex-wrap justify-end gap-3 md:bottom-16 md:right-12"
        }
      >
        {["natural", "jaggery", "preservatives", "love"].map((id) => (
          <Sticker
            key={id}
            id={id}
            className={`lineup-sticker ${staticLayout ? "" : "pointer-events-auto scale-75 opacity-0"}`}
          />
        ))}
      </div>
      {staticLayout && (
        <h2 className="mb-8 font-display text-3xl font-black text-brown">
          Goodness in every cup
        </h2>
      )}
      <button
        onClick={() => scrollTo("#shop")}
        className={
          staticLayout
            ? "mt-9 rounded-full border-2 border-brown bg-orange px-8 py-4 font-bold text-white shadow-[5px_5px_0_rgba(75,46,26,0.3)]"
            : "pointer-events-auto absolute bottom-12 left-6 rounded-full border-2 border-brown bg-orange px-8 py-4 font-bold text-white shadow-[6px_6px_0_rgba(75,46,26,0.3)] md:bottom-16 md:left-10"
        }
        aria-label={staticLayout ? "Shop the lineup" : "Open your cart"}
      >
        {staticLayout ? "Shop the lineup" : "Shop the lineup"}
      </button>
    </section>
  );
}

function StaticChapter({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`mobile-chapter relative min-h-[100svh] w-full px-5 pb-16 pt-24 md:px-10 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Stage() {
  const desktop = useMedia(DESKTOP);
  const reducedMotion = useMedia(REDUCED);
  const stageRef = useRef(null);
  const pouchRefs = useRef(Object.fromEntries(products.map(({ id }) => [id, null])));

  useLayoutEffect(() => {
    const root = stageRef.current;
    if (!root) return undefined;

    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      const context = gsap.context(() => {
        const pouches = products.map(({ id }) => pouchRefs.current[id]).filter(Boolean);
        const hero = root.querySelector(".h-hero");
        const story = root.querySelector(".h-story");
        const spotlight = root.querySelector(".h-spot");
        const lineup = root.querySelector(".h-lineup");
        const heroBackdrop = root.querySelector(".hero-backdrop");
        const storyBackdrop = root.querySelector(".story-backdrop");
        const heroWords = Array.from(root.querySelectorAll(".hero-word"));
        const storyWords = Array.from(root.querySelectorAll(".story-word"));
        const panels = Array.from(root.querySelectorAll(".spot-panel"));
        const blobs = Array.from(root.querySelectorAll(".spot-blob"));
        const pedestals = root.querySelector(".lineup-pedestals");
        const stickers = Array.from(root.querySelectorAll(".lineup-sticker"));
        const splashes = Array.from(root.querySelectorAll(".story-splash"));

        const heroPositions = [
          { x: "-18vw", y: "-3vh", rotate: -18, scale: 0.82 },
          { x: "-5.5vw", y: "4vh", rotate: -7, scale: 1 },
          { x: "5.5vw", y: "5vh", rotate: 8, scale: 1 },
          { x: "18vw", y: "-2vh", rotate: 17, scale: 0.82 },
        ];
        const storyPositions = [
          { x: "-38vw", y: "-19vh", rotate: -12, scale: 0.7 },
          { x: "-29vw", y: "-4vh", rotate: 9, scale: 0.72 },
          { x: "-20vw", y: "11vh", rotate: -8, scale: 0.72 },
          { x: "-11vw", y: "25vh", rotate: 12, scale: 0.68 },
        ];
        const lineupPositions = [
          { x: "-37.5vw", y: "30vh", rotate: 0, scale: 0.82 },
          { x: "-12.5vw", y: "27.5vh", rotate: 0, scale: 0.82 },
          { x: "12.5vw", y: "28.7vh", rotate: 0, scale: 0.82 },
          { x: "37.5vw", y: "26.3vh", rotate: 0, scale: 0.82 },
        ];
        const dockPositions = [
          { x: "39vw", y: "-24vh", rotate: 0, scale: 0.46 },
          { x: "39vw", y: "-8vh", rotate: 0, scale: 0.46 },
          { x: "39vw", y: "8vh", rotate: 0, scale: 0.46 },
          { x: "39vw", y: "24vh", rotate: 0, scale: 0.46 },
        ];

        gsap.set(pouches, { xPercent: -50, yPercent: -50 });
        gsap.set([story, spotlight, lineup, storyBackdrop, pedestals], { opacity: 0 });
        gsap.set(hero, { opacity: 1 });
        gsap.set(panels, { opacity: 0 });
        gsap.set(blobs, { opacity: 0 });

        gsap.fromTo(
          pouches,
          { y: "110vh", opacity: 0 },
          {
            x: (index) => heroPositions[index].x,
            y: (index) => heroPositions[index].y,
            rotate: (index) => heroPositions[index].rotate,
            scale: (index) => heroPositions[index].scale,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.08,
          }
        );
        gsap.fromTo(
          heroWords,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.12,
          }
        );

        const timeline = gsap.timeline();
        timeline.to(
          pouches,
          {
            x: (index) => storyPositions[index].x,
            y: (index) => storyPositions[index].y,
            rotate: (index) => storyPositions[index].rotate,
            scale: (index) => storyPositions[index].scale,
            duration: 0.8,
          },
          0.8
        );
        timeline.to([hero, heroBackdrop], { opacity: 0, duration: 0.35 }, 0.8);
        timeline.to([story, storyBackdrop], { opacity: 1, duration: 0.35 }, 0.8);
        timeline.to(storyWords, { opacity: 1, stagger: 0.055, duration: 0.18 }, 0.88);
        timeline.to(splashes, { opacity: 0.9, y: "8vh", stagger: 0.08, duration: 0.35 }, 0.9);
        timeline.to(storyWords, { opacity: 0, stagger: 0.035, duration: 0.16 }, 1.65);
        timeline.to(splashes, { opacity: 0, y: 0, duration: 0.3 }, 1.7);
        timeline.to([story, storyBackdrop], { opacity: 0, duration: 0.35 }, 2);
        timeline.to(spotlight, { opacity: 1, duration: 0.35 }, 2);

        products.forEach((product, activeIndex) => {
          const start = 2.2 + activeIndex * 0.88;
          timeline.to(
            pouches,
            {
              x: (index) =>
                index === activeIndex ? "11vw" : dockPositions[index].x,
              y: (index) =>
                index === activeIndex ? "0vh" : dockPositions[index].y,
              rotate: (index) =>
                index === activeIndex ? 0 : dockPositions[index].rotate,
              scale: (index) =>
                index === activeIndex ? 1.16 : dockPositions[index].scale,
              duration: 0.38,
            },
            start
          );
          timeline.to(
            panels,
            {
              opacity: (index) => (index === activeIndex ? 1 : 0),
              duration: 0.2,
            },
            start + 0.12
          );
          timeline.to(
            blobs,
            {
              opacity: (index) => (index === activeIndex ? 0.28 : 0),
              duration: 0.24,
            },
            start + 0.08
          );
        });

        timeline.to(
          pouches,
          {
            x: (index) => lineupPositions[index].x,
            y: (index) => lineupPositions[index].y,
            rotate: (index) => lineupPositions[index].rotate,
            scale: (index) => lineupPositions[index].scale,
            duration: 0.65,
          },
          5.85
        );
        timeline.to([spotlight, ...blobs], { opacity: 0, duration: 0.35 }, 5.85);
        timeline.to(lineup, { opacity: 1, duration: 0.35 }, 5.95);
        timeline.to(pedestals, { opacity: 1, duration: 0.35 }, 5.95);
        timeline.to(
          stickers,
          {
            opacity: 1,
            scale: 1,
            rotate: (index) => [-6, 6, -4, 5][index],
            duration: 0.3,
            stagger: 0.1,
          },
          6.05
        );

        ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          animation: timeline,
        });
      }, root);

      return () => context.revert();
    });

    mm.add(MOBILE, () => {
      const context = gsap.context(() => {
        root.querySelectorAll(".mobile-chapter").forEach((chapter) => {
          gsap.fromTo(
            chapter,
            { y: 24, opacity: 0.65 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top 85%",
                end: "top 50%",
                scrub: true,
              },
            }
          );
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
      >
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <h1 className="hero-backdrop absolute left-1/2 top-[43%] w-[96%] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.82] text-brown">
            {["SIP", "WELL,", "LIVE", "WELL"].map((word, index) => (
              <span className="hero-word inline-block" key={word}>
                {word}
                {index < 3 ? " " : ""}
              </span>
            ))}
          </h1>
          <h2 className="story-backdrop absolute right-[7%] top-[42%] w-[56%] -translate-y-1/2 text-right font-display text-[clamp(2rem,6vw,5rem)] font-black leading-[0.9] text-brown">
            {"WHOLESOME PREMIXES FOR EVERY MOOD".split(" ").map((word) => (
              <span className="story-word mr-[0.22em] inline-block opacity-0" key={word}>
                {word}
              </span>
            ))}
          </h2>
          <div className="spot-blob absolute left-[56%] top-1/2 h-[min(68vh,620px)] w-[min(68vh,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]" style={{ backgroundColor: colorById.rose }} />
          <div className="spot-blob absolute left-[56%] top-1/2 h-[min(68vh,620px)] w-[min(68vh,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]" style={{ backgroundColor: colorById.choco }} />
          <div className="spot-blob absolute left-[56%] top-1/2 h-[min(68vh,620px)] w-[min(68vh,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]" style={{ backgroundColor: colorById.haldi }} />
          <div className="spot-blob absolute left-[56%] top-1/2 h-[min(68vh,620px)] w-[min(68vh,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]" style={{ backgroundColor: colorById.makhana }} />
          <svg
            className="lineup-pedestals absolute bottom-[2vh] left-0 h-[13vh] w-full"
            viewBox="0 0 900 120"
            preserveAspectRatio="none"
          >
            <rect x="12.5" y="60" width="200" height="60" rx="12" fill="#e1ac6e" stroke="#4b2e1a" strokeWidth="3" />
            <rect x="237.5" y="36" width="200" height="84" rx="12" fill="#fc7305" stroke="#4b2e1a" strokeWidth="3" />
            <rect x="462.5" y="48" width="200" height="72" rx="12" fill="#63920e" stroke="#4b2e1a" strokeWidth="3" />
            <rect x="687.5" y="24" width="200" height="96" rx="12" fill="#e1ac6e" stroke="#4b2e1a" strokeWidth="3" />
          </svg>
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
