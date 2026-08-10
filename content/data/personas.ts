export type Persona = {
  slug: "families" | "schools" | "clinicians";
  eyebrow: string;
  headline: string;
  intro: string;
  valueProps: { title: string; body: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/** Audience pages — Guide §16, §9, §15 and outline pages 08-09. */
export const personas: Persona[] = [
  {
    slug: "families",
    eyebrow: "For Families",
    headline: "One app for your child's learning, health and habits — with you in control",
    intro:
      "Parents get visibility into a child's learning, health and habits, and control over what is collected and shared. Students get a tutor that already knows how they learn, and schoolwork help grounded in their own textbooks.",
    valueProps: [
      {
        title: "For parents",
        body: "A household picture: children's health snapshots, progress, consents, and your own genetic report if you have one. A nutrition and wellness plan for the whole household.",
      },
      {
        title: "For students",
        body: "A tutor that already knows how you learn, schoolwork help grounded in your own textbooks, and a report about yourself written to be encouraging rather than alarming.",
      },
      {
        title: "Easy household setup",
        body: "A simple profile picker, per-child PINs, and the option to give a child their own device with a one-time family access code.",
      },
      {
        title: "You stay in control",
        body: "Consent is layered and granted or revoked per category, any time. Nothing about a child's genetics is ever shown to the child directly if it's a risk trait.",
      },
    ],
    primaryCta: { label: "Get the app", href: "/get-the-app" },
    secondaryCta: { label: "See pricing", href: "/pricing" },
  },
  {
    slug: "schools",
    eyebrow: "For Schools",
    headline: "Per-student learning profiles, class analytics, and lessons matched to how a class learns",
    intro:
      "School Genomics is the platform's primary product: a child's genetic profile and learning-style assessment together change how that child is taught, visibly and actionably for the child, the parent, the teacher and the counsellor — without ever telling a child they carry a risk.",
    valueProps: [
      {
        title: "Value to a school",
        body: "Per-student learning profiles, class and student performance analytics with export, and lesson plans generated to match how a particular class learns, in one of fifteen supported teaching methods.",
      },
      {
        title: "Health camps & enrolment",
        body: "Schedule and track health camps through to completion, list students attending, and manage enrolment with grade, section and status — the enrolment record is what lets the tutor find the right textbooks.",
      },
      {
        title: "The teacher portal",
        body: "Dashboards, a searchable student roster, activity reports, a roadmap planner, a doubts inbox, and the fifteen-method lesson generator.",
      },
      {
        title: "Built for children's data",
        body: "Samples travel under an anonymous kit code, never a name. Teachers see a curated nine-indicator learning profile on a one-to-ten scale — never raw genetic readings.",
      },
    ],
    primaryCta: { label: "Book a school demo", href: "/demo" },
    secondaryCta: { label: "See how it works", href: "/how-it-works" },
  },
  {
    slug: "clinicians",
    eyebrow: "For Clinicians & Counsellors",
    headline: "A caseload workspace with full genetic profiles, consultations and messaging",
    intro:
      "Genetic counselling is a first-class part of the product. Everything a counsellor can see or do flows from one caseload definition, and every genuine view of a person's genetic information is recorded exactly once.",
    valueProps: [
      {
        title: "Counsellor workspace",
        body: "A defined caseload with statistics, a full genetic profile per caseload user with filters and search, report upload/review/correction/assignment, consultations and direct messaging.",
      },
      {
        title: "Telehealth & referrals",
        body: "Doctor profiles, availability and scheduling, appointment booking and management, consultation notes, prescriptions, and a hospital console for referrals and follow-up.",
      },
      {
        title: "Airtight scope",
        body: "If a user leaves a caseload, is deactivated, or drops off the PRO plan, the counsellor loses report visibility, assignment and upload eligibility at the same instant. A sample outside the caseload returns \"not found,\" not \"not permitted.\"",
      },
      {
        title: "Accountable by design",
        body: "Every time a counsellor views a user's genetic information, exactly one access record is written — once per genuine page view.",
      },
    ],
    primaryCta: { label: "Partner with us", href: "/demo" },
    secondaryCta: { label: "Read our privacy commitments", href: "/trust" },
  },
];
