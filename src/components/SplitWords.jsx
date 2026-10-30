export default function SplitWords({ text, inner = "h-word" }) {
  return text.split(" ").map((w, i) => (
    <span key={i} className="mr-[0.22em] inline-block overflow-hidden px-[0.06em] pb-[0.14em] align-bottom">
      <span className={`inline-block ${inner}`}>{w}</span>
    </span>
  ));
}
