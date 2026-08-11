import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { familiesCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

const stats: { value: string; label: string }[] = [
  { value: "1,020+", label: "Genetic Traits Catalogued" },
  { value: "225,000+", label: "Textbook Passages" },
  { value: "8", label: "Playable Cognitive Games" },
  { value: "26", label: "Trait Profiles" },
];

const features: BentoItem[] = [
  {
    id: "genetic-insights",
    title: "Genetic Insights",
    body: "Your child's report covers roughly 113-117 traits, drawn from our master catalogue of 1,020+ traits organized into 26 profiles spanning nutrition, fitness, cognition, and more.",
  },
  {
    id: "helix-tutor",
    title: "Helix, Your Child's AI Tutor",
    body: "Helix answers homework questions only from your child's own textbooks — 225,000+ searchable passages in English, Hindi, Malayalam, Tamil, and Kannada. Available by text or voice.",
  },
  {
    id: "ai-nutrition",
    title: "AI Nutrition",
    body: "NutriScan technology analyzes meals instantly, and once a genetic report is linked, calorie and macro targets adjust automatically to your child's profile.",
  },
  {
    id: "genetically-tuned-fitness",
    title: "Genetically-Tuned Fitness",
    body: "Fitness plans adjust for your child's power-versus-endurance disposition and injury risk once a genetic report is on file, so activity goals fit the child, not a generic chart.",
  },
  {
    id: "book-a-counsellor",
    title: "Book a Counsellor",
    body: "Schedule a consultation with a certified genetic counsellor to walk through your child's report and get clear next steps, right from the app.",
  },
  {
    id: "gamified-experience",
    title: "Gamified Experience",
    body: "Kids earn Genie coins, unlock achievements, and play 8 cognitive games designed just for them.",
  },
];

const checklist: string[] = [
  "Personalized health recommendations based on genetics",
  "Helix, an AI tutor grounded in your child's own textbooks",
  "Dual experience: safe view for kids, full insights for parents",
  "Track multiple children on one family account",
  "Regular progress reports and health insights",
  "Access to certified genetic counsellors for consultations",
];

const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "GenExcel helped us understand why our son was struggling with certain foods. The genetic insights were eye-opening!",
    name: "Meera Gupta",
    role: "Mother of 2",
  },
  {
    quote:
      "The brain games are fantastic. My daughter looks forward to them every day, and I can see her cognitive skills improving.",
    name: "Arjun Reddy",
    role: "Father",
  },
  {
    quote:
      "Between the genetic nutrition plan and Helix helping with homework every evening, GenExcel has become part of our family's daily routine.",
    name: "Priyanka Singh",
    role: "Mother of 3",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "For Families",
  description:
    "Meet Helix, your child's AI tutor grounded in their own textbooks, plus a genetic report that shapes their nutrition and fitness plans.",
  path: "/solutions/families",
});

export default function SolutionsFamiliesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "For Families", path: "/solutions/families" },
        ])}
      />

      <Hero
        eyebrow="For Families"
        heading="Unlock Your Child's Full Potential"
        subhead="Meet Helix, your child's AI tutor grounded in their own textbooks, plus a genetic report that shapes their nutrition and fitness plans. GenExcel helps families make informed decisions about learning and wellness, tailored to each child."
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
          eyebrow="Features"
          heading="Everything Your Family Needs"
          subhead="Comprehensive tools designed to support your child's health journey from genetics to daily wellness."
          align="center"
        />
        <ScrollReveal>
          <MagicBento items={features} />
        </ScrollReveal>
      </Section>

      <Section>
        <div className={styles.benefitsGrid}>
          <div>
            <SectionIntro
              eyebrow="Why Families Love Us"
              heading="Built for Modern Families"
              subhead="GenExcel understands that every child is unique. Our platform adapts to your family's needs and grows with your children."
            />
            <ul className={styles.checklist}>
              {checklist.map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.testimonialStack}>
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className={styles.testimonialCard}>
                <p className={styles.quote}>“{testimonial.quote}”</p>
                <footer className={styles.attribution}>
                  <span className={styles.name}>{testimonial.name}</span>
                  <span className={styles.role}>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={familiesCta} />
      </Section>
    </>
  );
}
