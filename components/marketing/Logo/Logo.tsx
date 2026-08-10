import Image from "next/image";

type LogoProps = {
  /** Pixel height; width follows the mark's natural aspect ratio. */
  size?: number;
  className?: string;
  /** Show "GenExcel" next to the mark. */
  withWordmark?: boolean;
};

/**
 * The real GenExcel brandmark (public/logo-mark.png) — the source PNG
 * had a flat, non-transparent background baked in, so it's been
 * chroma-keyed to transparency and trimmed once (see the processing
 * notes below) rather than reprocessed on every render.
 *
 * To replace the artwork later: drop the new file at
 * public/logo-mark.png (transparent background, roughly square) and
 * nothing else needs to change — every usage reads from this one
 * component.
 */
export function Logo({ size = 32, className, withWordmark = false }: LogoProps) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.32 }}
    >
      <Image
        src="/logo-mark.png"
        alt="GenExcel"
        width={size}
        height={size}
        style={{ height: size, width: "auto" }}
        priority
      />

      {withWordmark && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: size * 0.5,
            color: "var(--color-text)",
            letterSpacing: "0.01em",
          }}
        >
          Gen<span style={{ color: "var(--color-accent)" }}>Excel</span>
        </span>
      )}
    </span>
  );
}
