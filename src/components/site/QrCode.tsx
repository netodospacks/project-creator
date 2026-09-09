/** QR Code fictício, apenas ilustrativo (não é um código válido). */
export function QrCode({ seed = 7, className }: { seed?: number; className?: string }) {
  const size = 21;
  const cells: boolean[] = [];
  let x = seed * 9301 + 49297;
  for (let i = 0; i < size * size; i++) {
    x = (x * 9301 + 49297) % 233280;
    cells.push(x / 233280 > 0.5);
  }

  const isFinder = (r: number, c: number) =>
    (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} role="img" aria-label="QR Code fictício de demonstração">
      <rect width={size} height={size} fill="var(--card)" />
      {cells.map((on, i) => {
        const r = Math.floor(i / size);
        const c = i % size;
        if (isFinder(r, c) || !on) return null;
        return <rect key={i} x={c} y={r} width="1" height="1" fill="var(--forest)" />;
      })}
      {[
        [0, 0],
        [0, size - 7],
        [size - 7, 0],
      ].map(([r, c]) => (
        <g key={`${r}-${c}`}>
          <rect x={c} y={r} width="7" height="7" fill="var(--forest)" />
          <rect x={c + 1} y={r + 1} width="5" height="5" fill="var(--card)" />
          <rect x={c + 2} y={r + 2} width="3" height="3" fill="var(--forest)" />
        </g>
      ))}
    </svg>
  );
}
