/**
 * Shared content model for the full-text legal documents (Privacy
 * Policy, Terms of Service, Cookie Policy, DPDP Compliance Notice) —
 * per the content inventory, §20-23. Each doc renders through
 * components/content/LegalDocument.tsx.
 *
 * Bracketed placeholders (e.g. "[Registered company address]") are
 * intentionally preserved verbatim from the inventory, per an explicit
 * decision to publish the full text now rather than wait on real
 * values from legal counsel — do not silently fill these in.
 */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string[] }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalSubsection = {
  title?: string;
  intro?: string;
  blocks: LegalBlock[];
};

export type LegalSection = {
  id: string;
  title: string;
  subsections: LegalSubsection[];
};

export type LegalDocument = {
  slug: string;
  eyebrow: string;
  title: string;
  subhead: string;
  sections: LegalSection[];
};
