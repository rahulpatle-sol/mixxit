
export function Splash({
  color = "#fc7305",
  className = "w-24",
  style,
}) {
  return (
    <svg
      viewBox="0 0 160 60"
      className={`block h-auto shrink-0 will-change-transform ${className}`}
      style={style}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 38 C30 14, 70 8, 120 14 C140 16, 152 22, 154 28 C148 30, 138 28, 124 30 C80 34, 44 46, 14 50 C6 50, 2 44, 6 38 Z"
        fill={color}
      />
    </svg>
  );
}

export default Splash;
