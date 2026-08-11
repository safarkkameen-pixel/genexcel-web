import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { schoolsCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

const stats: { value: string; label: string }[] = [
  { value: "50+", label: "Partner Schools" },
  { value: "15,000+", label: "Students" },
  { value: "9", label: "Learning Indicators per Student" },
  { value: "15", label: "Teaching Methods Supported" },
];

const features: BentoItem[] = [
  {
    id: "health-camps",
    title: "Health Camps & Sample Collection",
    body: "We run on-campus health camps to collect saliva samples, then read each returned lab report automatically — self-verified before a single data point reaches a student profile.",
  },
  {
    id: "teacher-learning-profiles",
    title: "Teacher Learning Profiles",
    body: "Every student gets a curated learning profile covering 9 indicators: cognitive ability, memory, attention, motivation, reading, maths, verbal ability, creativity, and stress resilience. Teachers never see raw genetic data.",
  },
  {
    id: "ai-lesson-generator",
    title: "AI Lesson Generator",
    body: "Generate lesson plans across 15 teaching methods, from the 5E model to project-based learning and Socratic questioning, tailored to how each class actually learns.",
  },
  {
    id: "helix-at-home",
    title: "Helix at Home",
    body: "Every student gets Helix, an AI tutor that answers homework questions only from their own textbooks, over 225,000 searchable passages across five languages, available by text or voice.",
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking",
    body: "Track each student's learning profile over time, alongside quiz results and teach-back sessions from Helix, to see growth beyond test scores.",
  },
  {
    id: "data-privacy",
    title: "Data Privacy",
    body: "Role-based access keeps genetic data clinical-eyes-only. Teachers see the curated learning profile; full genetic data stays with certified counsellors, under India's DPDP Act.",
  },
];

const benefits: { title: string; body: string }[] = [
  {
    title: "A Learning Profile for Every Student",
    body: "Teachers get a curated 9-indicator learning profile, memory, attention, motivation, and more, so lessons can be personalized without ever touching raw genetic data.",
  },
  {
    title: "Homework Help That Doesn't Stop at the School Gate",
    body: "Helix, the AI tutor, is available to every student at home, grounded in their own textbooks, so homework help matches what was actually taught in class.",
  },
  {
    title: "Parent Engagement",
    body: "Keep parents informed and involved with shared progress reports and insights drawn from each student's learning profile.",
  },
  {
    title: "Teacher Empowerment",
    body: "Give educators 15 teaching methods and an AI lesson generator so every class plan fits how their students actually learn.",
  },
];

type Package = {
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const packages: Package[] = [
  {
    name: "Starter",
    description: "Perfect for small schools getting started",
    features: [
      "Up to 100 students",
      "On-campus health camp scheduling",
      "Standard learning profile reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "Most popular for K-12 schools",
    popular: true,
    features: [
      "Up to 500 students",
      "Full 9-indicator learning profiles",
      "AI lesson generator (15 teaching methods)",
      "Helix tutor access for every student",
      "Parent portal access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For school districts and chains",
    features: [
      "Unlimited students",
      "Multi-school management",
      "Custom integrations",
      "Dedicated account manager",
      "On-site training",
      "SLA guarantee",
    ],
  },
];

export const metadata: Metadata = buildMetadata({
  title: "For Schools",
  description:
    "School Genomics brings health camps, per-student learning profiles, and an AI lesson generator to your campus, plus Helix, an AI tutor grounded in each student's own textbooks, available to every student at home.",
  path: "/solutions/schools",
});

export default function SolutionsSchoolsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "For Schools", path: "/solutions/schools" },
        ])}
      />

      <Hero
        eyebrow="For Schools"
        heading="From Health Camp To Learning Profile"
        subhead="School Genomics brings health camps, per-student learning profiles, and an AI lesson generator to your campus, plus Helix, an AI tutor grounded in each student's own textbooks, available to every student at home."
      />

      <Section spacing="md">
        <dl className={styles.statGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statValue}>{stat.value}</dt>
              <dd className={styles.statLabel}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Platform Features"
          heading="Everything Schools Need"
          subhead="A comprehensive platform designed specifically for educational institutions."
          align="center"
        />
        <ScrollReveal>
          <MagicBento items={features} />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionIntro eyebrow="Why Choose GenExcel" heading="Benefits for Your School" align="center" />
        <ScrollReveal>
          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => (
              <SpotlightCard key={benefit.title}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitBody}>{benefit.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section background="alt">
        <SectionIntro
          eyebrow="Pricing"
          heading="Flexible School Packages"
          subhead="Choose the plan that fits your school's size and needs."
          align="center"
        />
        <div className={styles.pricingGrid}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={[styles.pricingCard, pkg.popular && styles.popular].filter(Boolean).join(" ")}
            >
              <div className={styles.pricingHead}>
                <span className={styles.pricingName}>{pkg.name}</span>
                {pkg.popular && <Badge tone="violet">Most Popular</Badge>}
              </div>
              <p className={styles.pricingDescription}>{pkg.description}</p>
              <ul className={styles.pricingFeatures}>
                {pkg.features.map((feature) => (
                  <li key={feature} className={styles.pricingFeature}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.popular ? "primary" : "secondary"}
                size="md"
                className={styles.pricingCta}
              >
                Contact Sales
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={schoolsCta} />
      </Section>
    </>
  );
}
