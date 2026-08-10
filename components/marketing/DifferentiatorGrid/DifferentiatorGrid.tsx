import { differentiators, type Differentiator } from "@/content/data/differentiators";
import { MagicBento, type BentoItem } from "@/components/react-bits/MagicBento/MagicBento";

type DifferentiatorGridProps = {
  usedOn: "home" | "science" | "trust";
};

/**
 * Renders the six differentiators filtered to the current page — the
 * data is shared (content/data/differentiators.ts), never duplicated
 * copy, per plan §2 and the outline's explicit instruction that these
 * "echo" across Homepage, Science and Trust.
 */
export function DifferentiatorGrid({ usedOn }: DifferentiatorGridProps) {
  const items: BentoItem[] = differentiators
    .filter((d: Differentiator) => d.usedOn.includes(usedOn))
    .sort((a, b) => a.order - b.order)
    .map((d) => ({
      id: d.id,
      title: d.title,
      body: usedOn === "home" ? d.body : d.detail,
      iconSrc: d.iconSrc,
      wide: d.order === 1 || d.order === 6,
    }));

  return <MagicBento items={items} />;
}
