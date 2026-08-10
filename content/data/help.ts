export type HelpArticle = {
  id: string;
  category: "Onboarding" | "Account" | "Consent" | "Troubleshooting";
  title: string;
  body: string;
};

/** Help centre articles — Guide §6, §19.6, §19.9. */
export const helpArticles: HelpArticle[] = [
  {
    id: "add-a-child",
    category: "Onboarding",
    title: "Adding a child to your household",
    body: "From the profile picker, choose 'Add child' and enter their name, date of birth, class and a PIN. This creates a real, separate account for that child — with their own learning history, tutor conversations and plans — not a sub-profile of yours. Up to five children can be added by default.",
  },
  {
    id: "childs-own-device",
    category: "Onboarding",
    title: "Giving a child their own device",
    body: "Generate a one-time access code from your phone (Profile → Household → Set up child device). On the child's device, install the app, choose 'Join family', and enter the code. Their account stays inside the household, and you keep consent control.",
  },
  {
    id: "pin-management",
    category: "Account",
    title: "Setting, changing or resetting a child's PIN",
    body: "From your Profile, open the child's entry in your household list to set, change or reset their PIN. The parent section of the app re-locks every time the profile picker is visited, so leaving the phone unlocked on a table doesn't leave your area open.",
  },
  {
    id: "password-reset",
    category: "Account",
    title: "Resetting your password",
    body: "In-app password reset requests are currently routed to our support team rather than an automated email, while we finish enabling automated delivery. Contact us and we'll help you back in quickly.",
  },
  {
    id: "delete-account",
    category: "Account",
    title: "Deleting your account",
    body: "Request deletion from the Privacy & Data screen. Your account is deactivated immediately, and you have a thirty-day grace period to cancel the request. After thirty days, health and genetic data, consents and relationships are removed, and the account itself is anonymised.",
  },
  {
    id: "grant-revoke-consent",
    category: "Consent",
    title: "Granting or revoking consent",
    body: "Open Consents from your Profile to see cards for each category — health data, academic data, genetic testing, communications and others. Grant or revoke any of them independently, at any time. Revoking is recorded, never silently erased.",
  },
  {
    id: "learning-assessment-consent",
    category: "Consent",
    title: "Why the learning assessment asks for consent differently",
    body: "The learning-style questionnaire is the one thing a student may always consent to for themselves, even without a guardian account — so a student registering directly isn't blocked by a requirement only a guardian could satisfy. Every other kind of consent for a minor requires a guardian.",
  },
  {
    id: "no-textbook-help",
    category: "Troubleshooting",
    title: "\"Textbook help is unavailable\" for my child",
    body: "This means your child's class, school or syllabus board is missing or incomplete in their profile — the platform deliberately refuses to guess, rather than risk showing content from the wrong class. Complete the academic details in their profile to fix it.",
  },
  {
    id: "watch-steps-mismatch",
    category: "Troubleshooting",
    title: "My step count looks different from my watch",
    body: "If a smartwatch is connected and providing steps, its count is authoritative and the phone stops contributing — so you should see one consistent number, sourced from the watch. Check the wearables screen to confirm your watch is still connected.",
  },
];
