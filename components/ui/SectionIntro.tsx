import { Heading } from "./Heading";
import { Text } from "./Text";
import { Badge } from "./Badge";
import styles from "./SectionIntro.module.scss";

type SectionIntroProps = {
  eyebrow?: string;
  eyebrowTone?: "cyan" | "violet" | "indigo" | "neutral";
  heading: string;
  subhead?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

/** Shared eyebrow + heading + subhead block used at the top of most sections. */
export function SectionIntro({
  eyebrow,
  eyebrowTone = "cyan",
  heading,
  subhead,
  align = "left",
  tone = "default",
}: SectionIntroProps) {
  return (
    <div className={[styles.intro, align === "center" && styles.center].filter(Boolean).join(" ")}>
      {eyebrow && (
        <Badge tone={eyebrowTone} inverse={tone === "inverse"}>
          {eyebrow}
        </Badge>
      )}
      <Heading as="h2" size="display-lg" align={align} className={styles.heading}>
        {heading}
      </Heading>
      {subhead && (
        <Text size="lg" tone={tone === "inverse" ? "inverse-muted" : "muted"} className={styles.subhead}>
          {subhead}
        </Text>
      )}
    </div>
  );
}
