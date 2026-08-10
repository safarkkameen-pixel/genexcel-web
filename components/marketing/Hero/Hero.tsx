import type { ReactNode } from "react";
import { MaskedHeading } from "@/components/react-bits/MaskedHeading/MaskedHeading";
import { Topography } from "@/components/react-bits/Topography/Topography";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradualBlur } from "@/components/react-bits/GradualBlur/GradualBlur";
import { ImageSlot } from "@/components/marketing/ImageSlot/ImageSlot";
import { DnaBackdrop } from "./DnaBackdrop";
import styles from "./Hero.module.scss";

type HeroProps = {
  eyebrow?: string;
  heading: string;
  subhead: string;
  actions?: ReactNode;
  tone?: "light" | "dark";
  ambient?: boolean;
  /**
   * Renders the WebGL Topography contour background instead of the SVG
   * DnaBackdrop. The two are mutually exclusive — never stack a second
   * WebGL/canvas effect on the same hero (plan §11.1, §16).
   */
  topography?: boolean;
  /**
   * Renders a full-width image panel below the text, and centers the
   * text block. Optional — only the homepage uses this today; every
   * other page's Hero call is unaffected by leaving it unset.
   */
  imageAspectRatio?: string;
  /** Real image for the panel above — omit to keep the abstract placeholder. */
  imageSrc?: string;
  /** A small caption line under the image (e.g. compliance/trust marks). */
  caption?: string;
};

/**
 * Reusable hero section used on Homepage, Science, Helix, product and
 * audience pages — configurable eyebrow/heading/subhead/actions, one
 * ambient background variant (either the SVG DnaBackdrop or the WebGL
 * Topography contour field), never both at once (plan §11.1, §16).
 */
export function Hero({
  eyebrow,
  heading,
  subhead,
  actions,
  tone = "light",
  ambient = false,
  topography = false,
  imageAspectRatio,
  imageSrc,
  caption,
}: HeroProps) {
  return (
    <div className={[styles.hero, tone === "dark" && styles.dark].filter(Boolean).join(" ")}>
      {topography && (
        <div className={styles.topography}>
          <Topography
            lowColor="#241b4d"
            midColor="#6b5bd6"
            highColor="#cfd4ff"
            speed={0.14}
            morphSpeed={0.04}
            morphAmount={1.6}
            bands={1.8}
            scale={1.5}
            thickness={0.012}
            glow={0.12}
            contrast={1.9}
            brightness={0.7}
            opacity={0.5}
            grain={false}
            fillBands={false}
            mouseInteraction
            mouseRadius={0.35}
            mouseStrength={0.25}
          />
        </div>
      )}
      {ambient && <DnaBackdrop />}
      <Container>
        <div className={[styles.inner, imageAspectRatio && styles.centered].filter(Boolean).join(" ")}>
          {eyebrow && (
            <Badge tone={tone === "dark" ? "violet" : "cyan"} inverse={tone === "dark"}>
              {eyebrow}
            </Badge>
          )}
          <MaskedHeading as="h1" text={heading} className={styles.heading} />
          <Text size="lg" tone={tone === "dark" ? "inverse-muted" : "muted"} className={styles.subhead}>
            {subhead}
          </Text>
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>

        {imageAspectRatio && (
          <div className={styles.imageWrap}>
            <ImageSlot aspectRatio={imageAspectRatio} src={imageSrc} priority sizes="(min-width: 1280px) 1200px, 100vw" />
            {caption && (
              <Text size="sm" tone="faint" className={styles.caption}>
                {caption}
              </Text>
            )}
          </div>
        )}
      </Container>
      <GradualBlur position="bottom" height={64} />
    </div>
  );
}
