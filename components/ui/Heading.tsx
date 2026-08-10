import type { ElementType, ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  /** Visual size, independent of semantic level — pick the level the outline needs, the size the design needs. */
  size?: "display-xl" | "display-lg" | "display-md" | "heading-sm";
  className?: string;
  id?: string;
  align?: "left" | "center";
};

export function Heading({
  children,
  as = "h2",
  size = "display-md",
  className,
  id,
  align = "left",
}: HeadingProps) {
  const Tag: ElementType = as;
  return (
    <Tag
      id={id}
      className={[styles.heading, styles[size], styles[align], className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
