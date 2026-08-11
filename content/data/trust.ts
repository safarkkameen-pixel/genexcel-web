export type TrustSection = {
  id: string;
  title: string;
  body: string[];
};

/** Trust & Privacy hub content — six pillar sections per the content inventory. */
export const trustSections: TrustSection[] = [
  {
    id: "not-linked-to-name",
    title: "Not linked to a name",
    body: [
      "Every genetic record is stored against an anonymous sample code — never a name, email or date of birth. Connecting a sample to a person is a separate, permission-gated action, and every single time it happens, it's recorded with who, when and why.",
    ],
  },
  {
    id: "ai-stays-in-india",
    title: "AI stays in India",
    body: [
      "Every AI feature — conversation, voice, report reading, food recognition — runs inside Indian data-centre regions, checked automatically before every release. One high-profile voice capability was deliberately left switched off because the only way to run it would have moved children's audio abroad.",
    ],
  },
  {
    id: "child-safety-rules",
    title: "Child-safety rules Helix can't talk around",
    body: [
      "A child is never told they carry a disease risk. A child never sees a psychometric score or label. Helix refuses to fabricate a quiz score even if asked, and never tells a child that genetics shaped how it teaches them. These are enforced rules, not guidelines in a document.",
    ],
  },
  {
    id: "layered-consent",
    title: "Consent, layered and revocable",
    body: [
      "Legal documents, genetic testing consent, and per-category consent (health, academic, communications) are each granted separately — usually by a verified guardian for a minor. Every grant and every withdrawal is recorded, and withdrawing never deletes the history.",
    ],
  },
  {
    id: "protected-beyond-storage",
    title: "Protected beyond the storage layer",
    body: [
      "Every gene reading and extracted genetic record carries its own encryption, on top of the storage system's own protection. Report PDFs live in private storage with short-lived, single-purpose links, and access is re-checked the moment a report is viewed — so revoking access cuts it off immediately, even mid-session.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights, honoured directly",
    body: [
      "Request an export of your data, correct it, or ask for deletion — which anonymises your account after a 30-day grace period you can still cancel. Withdraw any consent at any time. A grievance mechanism and nominee registration are both available.",
    ],
  },
];
