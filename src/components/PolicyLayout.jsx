import { Link } from "react-router-dom";
import { scrollTo } from "../store";

export default function PolicyLayout({ children, title }) {
  return (
    <section className="min-h-[70vh] px-5 pt-24 pb-24 md:px-10 md:pt-32">
      <nav className="mb-10 flex items-center gap-2">
        <button
          onClick={() => scrollTo("body")}
          className="inline-flex items-center gap-1 text-brown hover:text-orange transition-colors"
          aria-label="Back to home"
        >
          <span className="text-sm">←</span>
          <span className="text-sm font-medium">Home</span>
        </button>
      </nav>

      <h1 className="mb-10 font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight text-brown">
        {title}
      </h1>

      <div className="prose prose-brown max-w-3xl mx-auto text-brown/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
