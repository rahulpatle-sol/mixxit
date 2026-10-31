import { useState } from "react";

const FAQS = [
  {
    q: "What is Mixxit?",
    a: "Mixxit makes ready-to-drink premixes from Maa's handwritten recipes — haldi, rose, chocolate, and makhana — all sweetened with jaggery.",
  },
  {
    q: "How do I prepare a drink?",
    a: "Stir one spoon of premix into warm milk, wait 30 seconds, and sip well. No cooking needed.",
  },
  {
    q: "Is it sweetened with sugar?",
    a: "No. Everything is sweetened with jaggery, never refined sugar.",
  },
  {
    q: "Are these kid-friendly?",
    a: "Yes. All premixes are made from natural ingredients and safe for the whole family.",
  },
  {
    q: "How long does one pouch last?",
    a: "Each pouch makes about 10–12 servings, depending on how strong you like it.",
  },
  {
    q: "Where do you ship?",
    a: "We ship across India. Delivery usually takes 3–5 business days.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-cream px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-14 text-center font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-tight text-brown">
          Frequently asked
        </h2>
        <div className="space-y-4">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-brown/20 pb-6 last:border-0 last:pb-0 group"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 py-2 text-left text-brown hover:text-orange transition-colors focus-visible:outline-orange focus-visible:outline-3"
                >
                  <h3 className="flex-1 font-display text-[clamp(1rem,2vw,1.15rem)] font-semibold leading-snug">
                    {q}
                  </h3>
                  <span
                    className="shrink-0 w-5 h-5 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-[clamp(0.95rem,1.8vw,1.1rem)] leading-relaxed text-brown/80">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
