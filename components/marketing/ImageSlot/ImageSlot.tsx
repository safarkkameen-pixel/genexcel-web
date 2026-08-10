import Image from "next/image";
import styles from "./ImageSlot.module.scss";

type ImageSlotProps = {
  aspectRatio: string;
  radius?: "md" | "lg";
  className?: string;
  /** Once a real image exists for this slot, pass its path here — the
   * abstract gradient placeholder still renders underneath (via the
   * same background/ring), the image just paints on top of it. */
  src?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * A placeholder for real photography that doesn't exist yet — an
 * abstract gradient panel, not a fabricated stock photo or a visible
 * "drop an image here" label (that would read as unfinished on a live
 * site). Every usage (Hero, FeatureTrio, AboutSplit) takes the same
 * aspect-ratio prop, so passing `src` is the only change needed once
 * real photography/renders exist for that slot.
 */
export function ImageSlot({
  aspectRatio,
  radius = "lg",
  className,
  src,
  priority,
  sizes = "100vw",
}: ImageSlotProps) {
  return (
    <div
      className={[styles.slot, styles[radius], className].filter(Boolean).join(" ")}
      style={{ aspectRatio }}
      aria-hidden="true"
    >
      {src && (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  );
}
