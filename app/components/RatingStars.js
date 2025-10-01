export default function RatingStars({ value = 0, size = 14 }) {
  const rounded = Math.round(value * 2) / 2;
  const stars = [1, 2, 3, 4, 5].map((i) => {
    const diff = rounded - i;
    const fill = diff >= 0 ? 100 : diff === -0.5 ? 50 : 0;
    return (
      <span key={i} aria-hidden className="inline-block" style={{ width: size, height: size }}>
        <svg viewBox="0 0 24 24" width={size} height={size} className="align-middle">
          <defs>
            <linearGradient id={`half-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${fill}%`} stopColor="currentColor" />
              <stop offset={`${fill}%`} stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192z" fill={`url(#half-${i})`} stroke="currentColor" strokeWidth="1"/>
        </svg>
      </span>
    );
  });
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Rating ${value}`}>
      {stars}
      <span className="text-xs opacity-70">{value.toFixed(1)}</span>
    </span>
  );
}


