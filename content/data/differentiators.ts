export type Differentiator = {
  id: string;
  order: number;
  title: string;
  body: string;
  detail: string;
  usedOn: ("home" | "science" | "trust")[];
  iconSrc?: string;
};

/**
 * The six differentiators — Guide §2.4. Modeled as shared data (not
 * duplicated copy) because the outline explicitly calls for these to
 * echo on the Homepage, Science, and Trust pages (plan §2).
 */
export const differentiators: Differentiator[] = [
  {
    id: "genetics-changes-behaviour",
    order: 1,
    title: "Genetics that changes behaviour, not just a report",
    body: "The genetic profile feeds the tutor, the nutrition engine and the fitness engine. It's wired into the product, not bolted onto it.",
    detail:
      "Most genetic testing products stop at a PDF a family reads once. GenExcel treats the report as an input: once it's linked to a child's account, the AI tutor teaches differently, the nutrition plan is adjusted, and the fitness programme is shaped.",
    usedOn: ["home", "science"],
    iconSrc: "/icons/bento/dna-document.png",
  },
  {
    id: "textbook-grounded-tutor",
    order: 2,
    title: "A tutor grounded in the child's own textbooks",
    body: "Helix answers schoolwork questions from the actual prescribed textbook for that child's board, class and subject — more than 225,000 passages, in English and Indian languages.",
    detail:
      "When Helix doesn't know something, it says so and offers the chapters it does have, rather than inventing an answer from general knowledge.",
    usedOn: ["home"],
    iconSrc: "/icons/bento/chatbot.png",
  },
  {
    id: "child-safety-built-in",
    order: 3,
    title: "Child-safety rules built into the AI itself",
    body: "A child is never told they carry a disease risk, never shown a psychometric score or label, and never shamed about a missed streak or a weak subject.",
    detail:
      "These aren't guidelines in a document — they're enforced rules the AI cannot talk its way around, even if a child asks directly.",
    usedOn: ["home", "trust"],
    iconSrc: "/icons/roles/child.png",
  },
  {
    id: "genetic-data-not-linked-to-name",
    order: 4,
    title: "Genetic data that is not linked to a name",
    body: "Genetic information is stored against an anonymous sample code, never against a person's identity.",
    detail:
      "Connecting a sample to a person is a separate, permission-controlled action, and every single time it happens it is recorded. If the whole store of genetic information were somehow exposed, it would not identify anybody.",
    usedOn: ["home", "trust", "science"],
    iconSrc: "/icons/bento/target-circle.png",
  },
  {
    id: "ai-stays-in-india",
    order: 5,
    title: "All AI processing stays in India",
    body: "Every AI feature — conversation, voice, report reading, food recognition — is processed within Indian data-centre regions.",
    detail:
      "This is enforced automatically before release, not just a policy statement. One high-profile voice capability was deliberately left switched off because the only way to run it would have moved children's audio outside the country.",
    usedOn: ["home", "trust"],
    iconSrc: "/icons/bento/roadmap-path.png",
  },
  {
    id: "reports-read-without-lab-in-loop",
    order: 6,
    title: "Reports read without a laboratory in the loop",
    body: "GenExcel reads the laboratory's PDF report automatically and turns it into structured, searchable, personalised content.",
    detail:
      "For the report format used by the current laboratory partner, this happens in about ten seconds with verified accuracy, at no per-report processing cost.",
    usedOn: ["home", "science"],
    iconSrc: "/icons/bento/report-chat.png",
  },
];
