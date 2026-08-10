import styles from "./DnaBackdrop.module.scss";

const WIDTH = 1200;
const HEIGHT = 260;
const AMPLITUDE = 46;
const WAVELENGTH = 220;
const MID = HEIGHT / 2;

function strandPath(phaseOffset: number): string {
  const segments = Math.ceil(WIDTH / (WAVELENGTH / 2)) + 2;
  let d = `M -40 ${MID}`;
  for (let i = 0; i < segments; i++) {
    const x1 = i * (WAVELENGTH / 2) - 40 + WAVELENGTH / 4;
    const y1 = MID + (i % 2 === 0 ? 1 : -1) * AMPLITUDE * Math.cos(phaseOffset);
    const x2 = (i + 1) * (WAVELENGTH / 2) - 40;
    const y2 = MID + (i % 2 === 0 ? -1 : 1) * AMPLITUDE * Math.cos(phaseOffset);
    d += ` C ${x1} ${y1}, ${x1} ${y1}, ${x2} ${y2}`;
  }
  return d;
}

function rungs(): { x: number; y1: number; y2: number }[] {
  const points = [];
  const count = Math.ceil(WIDTH / (WAVELENGTH / 2)) + 2;
  for (let i = 0; i < count; i++) {
    const x = i * (WAVELENGTH / 2) - 40;
    const y = MID + (i % 2 === 0 ? 1 : -1) * AMPLITUDE;
    points.push({ x, y1: y, y2: HEIGHT - y });
  }
  return points;
}

/**
 * A quiet, decorative double-helix line drawing behind the hero
 * heading — the one "subtle DNA animation" the brief asks for, kept
 * intentionally low-contrast (a few percent opacity) so it never
 * competes with the type. Pure SVG + CSS, no JS, gated by the global
 * prefers-reduced-motion rule.
 */
export function DnaBackdrop() {
  return (
    <svg
      className={styles.backdrop}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {rungs().map((rung, i) => (
        <line
          key={i}
          x1={rung.x}
          y1={rung.y1}
          x2={rung.x}
          y2={rung.y2}
          className={styles.rung}
        />
      ))}
      <path d={strandPath(0)} className={styles.strandA} />
      <path d={strandPath(Math.PI)} className={styles.strandB} />
    </svg>
  );
}
