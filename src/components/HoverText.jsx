import { motion } from "motion/react";

// Letters pop up on hover (Sheriyans-style hover text).
export default function HoverText({ text, className = "" }) {
  return (
    <span className={className} aria-label={text}>
      {[...text].map((c, i) =>
        c === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            aria-hidden="true"
            className="inline-block cursor-default"
            whileHover={{ y: -16, rotate: i % 2 ? 7 : -7, color: "#ff5a1f" }}
            transition={{ type: "spring", stiffness: 420, damping: 12 }}
          >
            {c}
          </motion.span>
        )
      )}
    </span>
  );
}
