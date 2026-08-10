export type LegalDoc = {
  slug: string;
  title: string;
  summary: string;
  covers: string[];
};

/**
 * These pages describe, in the Guide's own factual terms, what each
 * legal document covers in the product today (Guide §6.7, §19). The
 * binding legal text itself is maintained by CuraNovaAI's legal counsel
 * and is presented here once finalised — this page intentionally does
 * not fabricate contract language ahead of that review.
 */
export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "Describes what GenExcel collects, why, and how it is protected — including the platform's core commitment that genetic data is stored against an anonymous sample code, never a person's name.",
    covers: [
      "What categories of data are collected at registration, and why",
      "How genetic data is anonymised and how re-identification is controlled and recorded",
      "Where data is processed (Indian data-centre regions for all AI features)",
      "How long data is retained, and what happens on account deletion",
      "Data-subject rights: access, export, correction, erasure, withdrawal, grievance",
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    summary:
      "The terms governing use of the GenExcel application and web portals, for account holders, guardians, schools and clinical partners.",
    covers: [
      "Account eligibility and responsibilities, including guardian responsibilities for a minor's account",
      "Plan tiers (BASIC and PRO) and the upgrade request-and-approval flow",
      "Acceptable use of the AI companion, Helix, and its safety rules",
      "School, counsellor and clinical-partner responsibilities within the platform",
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    summary:
      "Clarifies what GenExcel is and is not — including that Helix is an AI assistant, not a replacement for a medical professional.",
    covers: [
      "The platform's genetic and wellness content is informational and does not constitute medical advice",
      "Helix explicitly states to parents that it is an AI assistant, not a substitute for a medical professional",
      "Clinical decisions flow through the counsellor and telehealth features, not through the AI companion",
    ],
  },
  {
    slug: "consent-and-data",
    title: "Consent & Data",
    summary:
      "How consent works in GenExcel — layered, per-category, and recorded separately from the consent itself, with one deliberate exception for the learning assessment.",
    covers: [
      "Privacy notices, legal documents, genetic testing consent and psychometric consent, each individually acceptable",
      "Per-category consents (health data, academic data, communications) granted and revoked individually",
      "Guardian consent for a minor, with the learning-style assessment as the one thing a student may always consent to themselves",
      "How a withdrawn consent is recorded, never simply deleted",
    ],
  },
];
