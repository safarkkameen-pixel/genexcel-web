import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { solutionsCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

type SolutionCard = {
  title: string;
  href: string;
  description: string;
  tags: string[];
};

const solutionCards: SolutionCard[] = [
  {
    title: "For Families",
    href: "/solutions/families",
    description:
      "A household account for every child, with Helix — an AI tutor grounded in their own textbooks — plus a genetic report that shapes their nutrition and fitness plans.",
    tags: ["Helix AI Tutor", "Genetic Report", "Nutrition & Fitness", "Family Account"],
  },
  {
    title: "For Schools",
    href: "/solutions/schools",
    description:
      "School Genomics brings health camps, per-student learning profiles for teachers, and an AI lesson generator to your campus — with Helix available to every student at home.",
    tags: ["Health Camps", "Teacher Learning Profiles", "Lesson Generator", "Helix at Home"],
  },
  {
    title: "For Healthcare",
    href: "/solutions/healthcare",
    description:
      "A genetic counsellor workspace, telehealth scheduling, and lab report verification built for pediatric practices, hospitals, and counsellors.",
    tags: ["NABL Certified Labs", "Counsellor Workspace", "Telehealth Booking", "DPDP Compliant"],
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Whether you're a parent, school administrator, or healthcare provider, GenExcel has solutions tailored to your needs.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />

      <Hero
        eyebrow="Solutions"
        heading="Personalized Health For Everyone"
        subhead="Whether you're a parent, school administrator, or healthcare provider, GenExcel has solutions tailored to your needs."
      />

      <Section>
        <div className={styles.grid}>
          {solutionCards.map((card) => (
            <Link key={card.title} href={card.href} className={styles.card}>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.body}>{card.description}</p>
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className={styles.cta}>Learn More →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={solutionsCta} />
      </Section>
    </>
  );
}
