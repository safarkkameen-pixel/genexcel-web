export type FaqItem = {
  id: string;
  category: "privacy" | "accuracy" | "devices" | "pricing" | "sampling" | "general";
  question: string;
  answer: string;
};

/**
 * FAQ addressing genetic-data fears, device compatibility, accuracy,
 * pricing and sampling — outline priority topic #8. Every answer is
 * traceable to a Guide section.
 */
export const faqItems: FaqItem[] = [
  {
    id: "is-dna-safe",
    category: "privacy",
    question: "Is my child's genetic data safe?",
    answer:
      "Genetic data is stored against an anonymous sample code, not against a person's name. Connecting a sample to a person is a separate, permission-controlled action, and every time it happens it's recorded with who, when, and why. If the whole store of genetic information were somehow exposed, it would not identify anybody.",
  },
  {
    id: "who-sees-genetics",
    category: "privacy",
    question: "Who can see my child's genetic report?",
    answer:
      "Your child sees a curated, positively framed version of their own profile with risk-related traits withheld. You, as the parent, see the complete picture for a report linked to you. A genetic counsellor sees the full clinical picture for students in their caseload. A teacher never sees raw genetic readings — only a curated, one-to-ten learning profile.",
  },
  {
    id: "can-i-delete-data",
    category: "privacy",
    question: "Can I delete our data?",
    answer:
      "Yes. Account deletion can be requested in the app and carries a thirty-day grace period during which it can be cancelled. After thirty days, health and genetic data, consents, and relationships are removed, and the account itself is anonymised rather than deleted outright, so audit-relevant records stay intact without identifying anyone.",
  },
  {
    id: "where-is-ai-processed",
    category: "privacy",
    question: "Where is the AI processing done?",
    answer:
      "Every AI feature — conversation, voice, report reading, food recognition — is processed within Indian data-centre regions. This is checked automatically before release; the build fails if a non-compliant processing route is introduced.",
  },
  {
    id: "report-accuracy",
    category: "accuracy",
    question: "How accurate is the automatic report reading?",
    answer:
      "For the report format used by the current laboratory partner, reading is verified exact — every line covered, nothing invented, every gene reading correct — in about ten seconds. For an unfamiliar report layout, a slower, AI-assisted reader is used instead, with measured accuracy of approximately 93% for row recall and value accuracy, and 96% agreement on gene readings; anything it's unsure about is flagged for a human reviewer.",
  },
  {
    id: "high-result-meaning",
    category: "accuracy",
    question: "Does a 'high' result always mean something is wrong?",
    answer:
      "No — and this is one of the most important distinctions in the product. Only for health risks, addiction susceptibility and injury risk does a high band mean elevated risk. Everywhere else — creativity, verbal ability, personality dimensions — a 'high' result is simply a level, shown in neutral styling, never as a risk.",
  },
  {
    id: "which-devices",
    category: "devices",
    question: "Which wearables and health apps work with GenExcel?",
    answer:
      "On iPhone, GenExcel connects to Apple Health. On Android, it connects through Health Connect, the platform-level hub that Samsung Health, Google Fit and other apps write into — so a Samsung Galaxy Watch works, along with any other device whose companion app writes to Health Connect. The platform also connects directly to Bluetooth heart-rate straps and similar devices.",
  },
  {
    id: "watch-vs-phone-steps",
    category: "devices",
    question: "If I wear a watch and carry my phone, which step count is used?",
    answer:
      "A connected smartwatch always wins. If a smartwatch is providing steps, the phone stops contributing to the displayed total, so you see your real step count rather than an inflated one.",
  },
  {
    id: "basic-vs-pro",
    category: "pricing",
    question: "What's the difference between BASIC and PRO?",
    answer:
      "Both tiers include the AI tutor, textbook-grounded help, learning and study tools, nutrition, fitness and health tracking, and games. PRO additionally unlocks genetic report assignment, the My Traits section, genetic personalisation of the tutor, and genetic adjustments in nutrition and fitness plans. See the full comparison on the Pricing page.",
  },
  {
    id: "how-to-upgrade",
    category: "pricing",
    question: "How do I upgrade from BASIC to PRO?",
    answer:
      "You request PRO from within the app, an administrator approves the request, and the unlock takes effect on your device immediately — no need to sign out or restart.",
  },
  {
    id: "how-sampling-works",
    category: "sampling",
    question: "How is the saliva sample collected?",
    answer:
      "For school customers, samples are collected at a scheduled health camp. Each collection kit carries a printed code — that code, and nothing about the child's identity, is what travels with the sample to the laboratory. The lab returns a PDF report, which is uploaded against that same kit code.",
  },
  {
    id: "how-long-report-takes",
    category: "sampling",
    question: "How long does it take to get a genetic report after the sample is collected?",
    answer:
      "Once the laboratory returns the PDF, GenExcel's automatic reader processes the known report format in about ten seconds. An unfamiliar layout takes longer — roughly eight to nine minutes — and may need a short human review before it's assigned to a family.",
  },
];
