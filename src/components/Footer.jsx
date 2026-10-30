import HoverText from "./HoverText";

export default function Footer() {
  return (
    <footer className="bg-brown px-5 pb-12 pt-32 text-white md:px-10">
      <p className="font-script text-[clamp(4rem,19vw,17rem)] leading-[0.9] text-white mb-6">
        <HoverText text="Mixxit" />
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-white/90">
        <p>Made from Maa's recipes. Sweetened with jaggery.</p>
        <p>© {new Date().getFullYear()} Mixxit</p>
      </div>
    </footer>
  );
}
