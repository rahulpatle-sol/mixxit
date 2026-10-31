import { useState } from "react";

// Image fail ho jaye (Unsplash block, path galat) to broken icon nahi, soft tint dikhega.
// width/height roke layout shift (CLS) jo performance score giraata hai.
export default function Img({ src, alt, className = "", fallbackClassName = "bg-tan/40", width, height, ...rest }) {
  const [bad, setBad] = useState(false);

  if (!src || bad) {
    return <div role="img" aria-label={alt} className={`${className} ${fallbackClassName}`} {...rest} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      onError={() => setBad(true)}
      className={className}
      {...rest}
    />
  );
}