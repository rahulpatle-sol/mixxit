export function Splash({ color, className = "", style }) {
  return (
    <svg
      viewBox="0 0 360 300"
      className={`will-change-transform ${className}`}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 28 C 110 -20, 260 60, 220 150 S 100 240, 60 180 S 10 120, 40 28"
        stroke={color}
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 170 C 140 150, 200 190, 170 260 S 110 290, 80 230 S 50 190, 80 170"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
    </svg>
  );
}
