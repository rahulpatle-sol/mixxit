


import { useRef } from "react";
import { scrollTo } from "../store";

const VIDEO = "/images/footer.mp4";

export default function Footer() {
  const videoRef = useRef(null);

  const links = {
    Explore: [
      ["Home", "body"],
      ["Our Story", "#story-reveal"],
      ["Products", "#shop"],
      ["Contact", "https://www.instagram.com/mixxit_official/"],
    ],
    Products: [
      ["Makhana Premix", "#shop"],
      ["Haldi Premix", "#shop"],
      ["Choco Dryfruit", "#shop"],
      ["Rose Petal", "#shop"],
    ],
  };

  return (
    <footer className="overflow-hidden bg-[#fffdf8]">

      {/* MAIN DARK FOOTER */}
      <section className="relative bg-[#382014] text-white">

        <div className="grid min-h-[580px] lg:grid-cols-[1fr_1.05fr]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-16">

            <div>

              {/* BRAND */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("body");
                }}
                className="inline-block font-script text-6xl tracking-tight text-[#f7d59b] sm:text-7xl"
              >
                Mixxit<span className="text-[#ed9b43]">.</span>
              </a>

              <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">
                Made from Maa's recipes.
                <br />
                Sweetened with jaggery.
                Made to make every sip special.
              </p>

              {/* NAVIGATION */}
              <div className="mt-14 grid grid-cols-2 gap-10 sm:mt-20 sm:gap-16">

                {Object.entries(links).map(([heading, items]) => (
                  <div key={heading}>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e6b77d]">
                      {heading}
                    </h3>

                    <ul className="space-y-3">
                      {items.map(([name, href]) => (
                        <li key={name}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                onClick={(e) => {
                  if (!href.startsWith("http")) {
                    e.preventDefault();
                    scrollTo(href);
                  }
                }}
                className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-[#f4c889]"
              >
                <span className="h-1 w-1 rounded-full bg-[#d89b53] opacity-0 transition-all group-hover:opacity-100" />
                {name}
              </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>
            </div>

            {/* CONTACT */}
            <div className="mt-16 border-t border-white/15 pt-7">

              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e6b77d]">
                Let's talk
              </h3>

              <a
                href="https://www.instagram.com/mixxit_official/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-lg transition-colors hover:text-[#f4c889]"
              >
                @mixxit_official ↗
              </a>

              <p className="mt-3 text-xs text-white/45">
                Got a little love for Mixxit? Find us on Instagram.
              </p>

            </div>
          </div>

          {/* RIGHT VIDEO SECTION */}
          <div className="relative min-h-[390px] overflow-hidden bg-[#67452c] sm:min-h-[520px] lg:min-h-full">

            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={VIDEO} type="video/mp4" />
            </video>

            {/* VIDEO OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#27140c]/55 via-transparent to-[#27140c]/10" />

            {/* FLOATING PAPER NOTE */}
            <div className="absolute left-6 top-8 z-10 w-[190px] rotate-[-6deg] bg-[#fffdf2] p-5 text-[#4c3524] shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:left-10 sm:top-12 sm:w-[225px] sm:p-7">

              {/* CLIP */}
              <div className="absolute -top-4 left-1/2 h-8 w-12 -translate-x-1/2 rounded-t-md border-[3px] border-[#a58c70] bg-[#e9dfcd] shadow-md" />

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#98764e]">
                A little note from
              </p>

              <p className="mt-2 font-script text-4xl">
                Mixxit.
              </p>

              <div className="my-5 space-y-4">
                <div className="border-b border-[#cfc3b0]" />
                <div className="border-b border-[#cfc3b0]" />
                <div className="border-b border-[#cfc3b0]" />
              </div>

              <p className="font-serif text-sm italic leading-6">
                A little sweetness,
                a lot of love,
                and memories in every sip.
              </p>

              <div className="mt-5 flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-[#98764e]">
                <span>Made with love</span>
                <span>♡</span>
              </div>

            </div>

            {/* VIDEO CAPTION */}
            <div className="absolute bottom-8 left-7 right-7 z-10 sm:bottom-12 sm:left-10">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f8d7a4]">
                A taste of happiness
              </p>

              <h3 className="mt-3 max-w-md font-script text-5xl leading-tight text-white sm:text-6xl">
                Sip. Smile.
                <br />
                Repeat.
              </h3>

              <a
                href="https://www.instagram.com/mixxit_official/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-xs font-medium text-white transition-colors hover:border-[#f4c889] hover:text-[#f4c889]"
              >
                Follow our journey on Instagram
                <span>↗</span>
              </a>

            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/15 px-6 py-6 text-[10px] text-white/45 sm:flex-row sm:items-center sm:px-10 lg:px-14">

          <p>
            © {new Date().getFullYear()} Mixxit. All rights reserved.
          </p>

          <p>
            Made with love, served with happiness.
          </p>

          <a
            href="https://www.instagram.com/mixxit_official/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Instagram ↗
          </a>

        </div>
      </section>

      {/* DECORATIVE WHITE ENDING */}
      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden bg-[#fffdf8] px-5 py-12 sm:min-h-[230px]">

        <div className="absolute left-[8%] top-12 h-8 w-12 rotate-[-20deg] bg-[#422719]" />

        <div className="absolute left-[28%] top-7 h-7 w-12 rotate-[12deg] rounded-full bg-[#d7a45c]" />

        <div className="absolute right-[18%] top-12 h-10 w-10 rotate-45 rounded-full border-[7px] border-[#e8c58c]" />

        <div className="absolute bottom-[-20px] left-[48%] h-16 w-16 rotate-[-25deg] bg-[#422719]" />

        <p className="relative z-10 text-center font-script text-5xl text-[#422719] sm:text-7xl">
          A little more sweetness.
        </p>

        <div className="absolute bottom-10 right-[8%] h-3 w-3 rounded-full bg-[#e5ad60]" />

      </section>

    </footer>
  );
}
