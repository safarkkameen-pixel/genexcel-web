import type { RoadmapItem } from "@/content/data/roadmap";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import styles from "./RoadmapList.module.scss";

const toneByStatus: Record<RoadmapItem["status"], "violet" | "cyan" | "indigo"> = {
  "The largest opportunity": "violet",
  "In progress": "cyan",
  Planned: "indigo",
};

export function RoadmapList({ items }: { items: RoadmapItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <ScrollReveal key={item.id} delay={index * 60}>
          <div className={styles.item}>
            <Badge tone={toneByStatus[item.status]}>{item.status}</Badge>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
