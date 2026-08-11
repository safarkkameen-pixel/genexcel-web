export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/** FAQs §13.2 — the standalone /faqs page's single flat accordion. */
export const faqItems: FaqItem[] = [
  {
    id: "what-is-genexcel",
    question: "What is GenExcel, and what does it actually do?",
    answer:
      "GenExcel starts with a simple saliva sample, read by one of our partner labs. Once your child's genetic report is reviewed by our team and assigned to their account under your consent, it changes how Helix (our AI tutor) teaches them, adjusts their nutrition and fitness targets, and gives parents, teachers, and counsellors views appropriate to their role. It's designed to work alongside how your child already learns and grows, not replace it.",
  },
  {
    id: "what-is-helix",
    question: "What is Helix, the AI tutor?",
    answer:
      "Helix is an AI companion that acts as a tutor to your child and a professional assistant to you as a parent. It answers homework strictly from your child's own prescribed textbook rather than general knowledge, and works in English or your child's regional language, by text or voice. Helix never tells a child that their genetics shaped how it's teaching them, never discusses disease risk with a child, and never invents a quiz score.",
  },
  {
    id: "what-report-covers",
    question: "What does the genetic report actually cover, and how is it read?",
    answer:
      "Our master catalogue covers 1,020+ genetic traits across 26 profiles in 5 categories: Diet & Nutrition, Academic & Cognitive, Fitness & Sport, Personality & Talents, and Health-related. Each individual report covers 113-117 of these traits. The report is read automatically (about 10 seconds for known formats, self-checked four different ways) and then reviewed by our staff before it's ever assigned to your child's account.",
  },
  {
    id: "data-linked-to-identity",
    question: "Is my child's genetic data linked to their name or identity?",
    answer:
      "No. Genetic data is stored against an anonymous sample code, never directly against a name, email, or date of birth. Connecting a sample to a specific person is a separate action that requires explicit permission and is fully logged, so your family's identity and genetic data are never carelessly joined together.",
  },
  {
    id: "what-child-sees",
    question: "What can my child see, and what do I see as a parent?",
    answer:
      "Your child sees age-appropriate insights about their learning, diet, and fitness, but never disease-risk traits, addiction-susceptibility results, or their own psychometric score or label. Those more sensitive findings are visible only to parents and genetic counsellors, and are always framed with proper context rather than handed over as a raw number.",
  },
  {
    id: "diagnose-disease-risk",
    question: "Does GenExcel diagnose disease risk or predict how my child will respond to medication?",
    answer:
      "Not yet. Today's reports focus on diet, learning, fitness, personality, and general health-related traits reviewed by our team; polygenic risk scores and medication-response (pharmacogenomic) insights are not currently generated. Any health-related trait we do report is meant to inform conversations with your paediatrician or our genetic counsellors, not to replace medical diagnosis.",
  },
  {
    id: "free-vs-report",
    question: "What's the difference between the free tier and having a genetic report?",
    answer:
      "Helix, homework help, study plans, and our diet and fitness tools all work on the Free plan — your child just sees a general \"Lifestyle\" section instead of \"My Traits,\" since Helix is never instructed to mention genes or DNA on Free. Adding a genetic report through Premium or Family unlocks My Traits and genetically personalized nutrition and fitness guidance.",
  },
  {
    id: "data-processed-outside-india",
    question: "Is any of my family's data processed outside India?",
    answer:
      "No. All AI processing, including Helix's conversations, voice, and the reading of genetic reports, stays within Indian data-centre regions. GenExcel is built to comply with India's Digital Personal Data Protection (DPDP) Act, 2023.",
  },
  {
    id: "delete-account",
    question: "Can I delete my account or my child's data?",
    answer:
      "Yes. Deleting an account starts a 30-day grace period, during which you can cancel the deletion if you change your mind. After 30 days, the data is anonymised rather than instantly wiped, which is what lets us safely unwind consent-linked genetic data.",
  },
];

/** Pricing §12.3 — the /pricing page's own FAQ, distinct from the general FAQ list above. */
export const pricingFaqItems: FaqItem[] = [
  {
    id: "whats-included-genetic-test",
    question: "What's included in the genetic test?",
    answer:
      "Your child's saliva sample is checked against our master catalogue of 1,020+ genetic traits, organized into 26 profiles across 5 categories: Diet & Nutrition, Academic & Cognitive, Fitness & Sport, Personality & Talents, and Health-related. Each individual report covers 113-117 of these traits. The report is read automatically (in about 10 seconds for known formats, self-checked four different ways) and then reviewed by our staff before it's ever assigned to your child's account.",
  },
  {
    id: "how-long-results",
    question: "How long does it take to get results?",
    answer:
      "From the time our lab receives your sample, results are typically available within 2-3 weeks. You'll receive an email notification when your report is ready. Results are accessible through our mobile app and web portal.",
  },
  {
    id: "upgrade-free-to-premium",
    question: "Can I upgrade from Free to Premium later?",
    answer:
      "Absolutely! You can upgrade at any time from within the app. Your existing data will be preserved, and you'll gain immediate access to premium features. The genetic test kit will be shipped within 3-5 business days after upgrade.",
  },
  {
    id: "free-premium-vs-report",
    question: "What's the difference between Free/Premium and having a genetic report?",
    answer:
      "Helix (our AI tutor), homework help, study plans, and diet and fitness tools all work on the Free plan — your child just sees a general \"Lifestyle\" section instead of \"My Traits,\" and Helix is never instructed to mention genes, DNA, or traits. Upgrading to Premium or Family adds the genetic report itself: My Traits unlocks, and nutrition and fitness plans become genetically personalized. Upgrades are approved by our team and unlock on your device immediately, with no restart needed.",
  },
  {
    id: "is-genetic-data-safe",
    question: "Is my genetic data safe?",
    answer:
      "Yes, we take data security extremely seriously. All genetic data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. We comply with DPDP regulations and never share your data with third parties without explicit consent. You can request complete deletion at any time.",
  },
  {
    id: "age-groups-supported",
    question: "What age groups are supported?",
    answer:
      "GenExcel is built for school-age children. Rather than locking content to a fixed age band, Helix adapts its language, explanations, and difficulty to your child's class and grade level, so the tutor keeps pace automatically as they move up in school.",
  },
  {
    id: "add-more-children",
    question: "Can I add more children to my account?",
    answer:
      "The Free plan supports 1 child, Premium supports 1 child, and the Family plan supports up to 4 children. For larger families or organizations, please contact our sales team for custom pricing.",
  },
  {
    id: "refund-policy",
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for genetic test purchases. If you're not satisfied with your results, contact us within 30 days for a full refund. App subscription refunds are handled through your respective app store.",
  },
  {
    id: "school-enterprise-pricing",
    question: "Do you offer school or enterprise pricing?",
    answer:
      "Yes! We have special pricing for schools, hospitals, and enterprises. Contact our sales team for a customized quote based on your organization's needs.",
  },
];
