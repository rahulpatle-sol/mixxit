import { useState } from "react";

// Image fail ho jaye (Unsplash block, path galat) to broken icon nahi, soft tint dikhega.
export default function Img({ src, alt, className = "", fallbackClassName = "bg-tan/40", ...rest }) {
  const [bad, setBad] = useState(false);

  if (!src || bad) {
    return <div role="img" aria-label={alt} className={`${className} ${fallbackClassName}`} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setBad(true)}
      className={className}
      {...rest}
    />
  );
}