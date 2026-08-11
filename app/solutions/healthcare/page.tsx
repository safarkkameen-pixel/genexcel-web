import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { MagicBento } from "@/components/react-bits/MagicBento/MagicBento";
import type { BentoItem } from "@/components/react-bits/MagicBento/MagicBento";
import { SpotlightCard } from "@/components/react-bits/SpotlightCard/SpotlightCard";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { CTABand } from "@/components/marketing/CTABand/CTABand";
import { JsonLd } from "@/components/content/JsonLd";
import { healthcareCta } from "@/content/data/cta";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.scss";

const stats: { value: string; label: string }[] = [
  { value: "1,020+", label: "Genetic Traits Catalogued" },
  { value: "117", label: "Traits per Patient Report" },
  { value: "24hr", label: "Support" },
  { value: "100%", label: "DPDP Compliant" },
];

const features: BentoItem[] = [
  {
    id: "counsellor-workspace",
    title: "Genetic Counsellor Workspace",
    body: "Caseload-scoped access gives counsellors full genetic profiles, report review and assignment, consultations, and secure messaging, with instant loss of visibility the moment a patient leaves the caseload.",
  },
  {
    id: "clinical-reports",
    title: "Clinical Reports",
    body: "Detailed, physician-friendly reports with actionable recommendations, drawn from a genetic profile covering up to 117 traits per patient, reviewed and assigned by a certified counsellor.",
  },
  {
    id: "telehealth-scheduling",
    title: "Telehealth Scheduling",
    body: "Doctor profiles, scheduling, and booking are fully live, along with consultation notes and prescriptions, so care coordination doesn't wait on a phone tag.",
  },
  {
    id: "lab-result-verification",
    title: "Lab Result Verification",
    body: "Every lab report is automatically read and self-verified against the glossary, row counts, and page counts, before it's ever assigned to a patient.",
  },
  {
    id: "referral-hospital-management",
    title: "Referral & Hospital Management",
    body: "Coordinate referrals across hospitals and specialists, with case history and clinical reports following the patient through every handoff.",
  },
  {
    id: "dpdp-compliant",
    title: "DPDP Compliant",
    body: "Enterprise-grade security with role-based access and full compliance with India's Digital Personal Data Protection Act. Every genetic-data view is logged and auditable.",
  },
];

const useCases: { title: string; body: string }[] = [
  {
    title: "Pediatric Clinics",
    body: "Integrate genetic reports into routine pediatric care. Nutrition and fitness plans adjust automatically once a report is on file.",
  },
  {
    title: "Hospitals",
    body: "Coordinate multi-department referrals and case handoffs, with custom API integration available for your existing systems.",
  },
  {
    title: "Diagnostic Laboratories",
    body: "Partner labs feed reports directly into GenExcel, where each one is automatically read and verified within about 10 seconds for known formats.",
  },
  {
    title: "Genetic Counselors",
    body: "Full genetic profiles, caseload-scoped visibility, and secure messaging tools for counselling sessions with clear, patient-friendly explanations.",
  },
];

const certifications: string[] = [
  "NABL Certified Laboratory",
  "ISO 27001 Security",
  "DPDP Compliant",
  "SOC 2 Type II",
  "Clinical Validation",
];

const integrations: string[] = [
  "Custom API Integration",
  "Secure Data Export",
  "Referral Network Access",
  "Lab Report Import",
  "Single Sign-On (SSO)",
  "Webhook Notifications",
];

export const metadata: Metadata = buildMetadata({
  title: "For Healthcare",
  description:
    "Empower your practice with a genetic counsellor workspace, automatic lab report reading, and telehealth scheduling, built for pediatric practices, hospitals, and counsellors.",
  path: "/solutions/healthcare",
});

export default function SolutionsHealthcarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "For Healthcare", path: "/solutions/healthcare" },
        ])}
      />

      <Hero
        eyebrow="For Healthcare"
        heading="Clinical-Grade Genetic Solutions"
        subhead="Empower your practice with a genetic counsellor workspace, automatic lab report reading, and telehealth scheduling, built for pediatric practices, hospitals, and counsellors."
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
          eyebrow="Clinical Features"
          heading="Built for Healthcare Professionals"
          subhead="Clinical-grade tools designed to integrate seamlessly into your practice."
          align="center"
        />
        <ScrollReveal>
          <MagicBento items={features} />
        </ScrollReveal>
      </Section>

      <Section>
        <SectionIntro eyebrow="Use Cases" heading="Solutions for Every Healthcare Setting" align="center" />
        <ScrollReveal>
          <div className={styles.useCaseGrid}>
            {useCases.map((useCase) => (
              <SpotlightCard key={useCase.title}>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseBody}>{useCase.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section background="alt">
        <SectionIntro heading="Certifications & Integrations" />
        <div className={styles.certGrid}>
          <div className={styles.certColumn}>
            <h3 className={styles.certHeading}>Certifications</h3>
            <ul className={styles.certList}>
              {certifications.map((item) => (
                <li key={item} className={styles.certItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.certColumn}>
            <h3 className={styles.certHeading}>Integrations</h3>
            <ul className={styles.certList}>
              {integrations.map((item) => (
                <li key={item} className={styles.certItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section background="inverse" spacing="lg">
        <CTABand data={healthcareCta} />
      </Section>
    </>
  );
}
