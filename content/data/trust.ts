export type TrustSection = {
  id: string;
  title: string;
  body: string[];
};

/** Trust & Privacy hub content — Guide §19 in full. */
export const trustSections: TrustSection[] = [
  {
    id: "governing-regime",
    title: "The governing regime",
    body: [
      "India's Digital Personal Data Protection Act of 2023 is the applicable law. It requires verifiable guardian consent for children's data, imposes heightened security obligations on sensitive personal data, restricts certain kinds of processing for children outright, and governs transfer of data outside the country.",
      "The platform's design responds to each of these, and the responses are visible in the product rather than confined to a policy document.",
    ],
  },
  {
    id: "not-linked-to-name",
    title: "Genetic data is not linked to a name",
    body: [
      "This is the most important protection in the platform. Every genetic record is stored against an anonymous sample code. There is no name, no email address, no date of birth and no other identifier attached to it.",
      "Only staff holding a specific permission can connect a sample to a person, every single use of that connection is recorded — naming who, when, which sample and why — and the internal operator console cannot browse genetic or identity records at all.",
      "The consequence, stated plainly: if the whole store of genetic information were exposed, it would not identify anybody.",
    ],
  },
  {
    id: "ai-in-india",
    title: "All AI processing stays in India",
    body: [
      "Every AI feature — conversation, voice recognition, speech, report reading, food recognition, lesson generation — is processed within Indian data-centre regions.",
      "This is enforced rather than intended: an automated check scans the platform's own code before release and fails the build if a non-compliant processing route has been introduced.",
      "The most telling illustration is a capability the team chose not to ship: the highest-quality conversational voice model is not available in an Indian region, and using it would have moved children's audio abroad. It is fully built and deliberately switched off, and a formal request has been made to the vendor to make it available in India.",
    ],
  },
  {
    id: "layered-consent",
    title: "Layered consent",
    body: [
      "Consent is not a single checkbox. Privacy notices, the Privacy Policy, Terms of Service and Disclaimer, genetic testing consent, psychometric consent, and per-category consents (health data, academic data, communications and others) are each granted and revoked individually.",
      "For a child, a verified guardian grants consent. The one deliberate exception is the learning-style assessment, which a student may always consent to for themselves — so a self-registering student is not blocked by a requirement only a guardian could satisfy.",
      "Certain kinds of processing are prohibited for children outright and cannot be consented to by anybody. Revocation is never a deletion of the record — a withdrawn consent is marked as withdrawn, with the time and reason, and the history is preserved.",
    ],
  },
  {
    id: "what-a-child-never-sees",
    title: "What a child never sees",
    body: [
      "Disease-risk genetic traits, addiction-susceptibility results, and mental-health-related traits are withheld from a child's own report view.",
      "No psychometric score or label from the learning assessment is shown to the child, and the AI tutor will not state or imply that genetics informed a teaching decision.",
      "Shame language about study habits is never used, a fabricated quiz score is never given even if asked, and a teach-back understanding percentage is recorded but never read out to the child.",
    ],
  },
  {
    id: "data-subject-rights",
    title: "Your rights",
    body: [
      "Access and export can be requested from the privacy screen in the app. Correction happens through profile and record editing, plus report review correction for staff.",
      "Erasure is requestable in-app, with a thirty-day grace period and cancellation. After thirty days, health and genetic data, consents and relationships are removed, and the account itself is anonymised rather than deleted, so records that audit integrity depends on stay intact without identifying anyone.",
      "Consent can be withdrawn per category at any time. A grievance mechanism exists with acknowledgement, a nominee may be registered to act on a data principal's behalf, and a process exists to notify both affected users and the regulator in the event of a breach.",
    ],
  },
  {
    id: "audit-and-accountability",
    title: "Audit and accountability",
    body: [
      "The platform keeps records of who accessed what and when: every re-identification of a sample with the reason given, every counsellor view of a person's genetic information (exactly once per genuine page view), consent grants, changes and withdrawals in a separate record from the consent itself, security-relevant account events, and cross-border data-transfer records.",
      "Audit records are kept in a form intended to resist tampering, and account deletion anonymises rather than removes the records that audit integrity depends on.",
    ],
  },
  {
    id: "protection-of-stored-data",
    title: "How data is protected",
    body: [
      "Every gene reading, every extracted genetic record, names and contact details, laboratory sample identifiers, clinical interpretations and counselling notes carry additional encryption beyond the storage system's own protection.",
      "Genetic report PDFs live in their own separate, privately stored area with short-lived, single-purpose access links, and access is re-checked at the moment of viewing — so revoking a report cuts access immediately, even mid-session. All traffic is carried over encrypted connections.",
    ],
  },
];
