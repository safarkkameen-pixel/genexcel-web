import type { LegalDocument } from "./legalDocuments";

/**
 * Full-text Privacy Policy — content inventory §21. Bracketed
 * placeholders (registered address, DPO contact) are preserved verbatim
 * per an explicit decision to publish now rather than wait on real
 * values from legal counsel.
 */
export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  eyebrow: "Your Privacy Matters",
  title: "Privacy Policy",
  subhead:
    "We are committed to protecting your privacy and ensuring transparency in how we handle your data.",
  sections: [
    {
      id: "intro",
      title: "Introduction",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                'Curanova ("we," "us," or "our") operates the GenExcel mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. Please read this policy carefully. By using GenExcel, you consent to the data practices described in this policy.',
                "If you do not agree with the terms of this Privacy Policy, please do not access or use the App.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      subsections: [
        {
          title: "1.1 Personal Information",
          intro: "When you create an account or use our services, we may collect:",
          blocks: [
            {
              type: "list",
              items: [
                "Identity Data: First name, last name, date of birth, gender",
                "Contact Data: Email address, phone number, postal address (address line 1, address line 2, city, state, country, postal code)",
                "Account Data: Email, password (hashed), account creation date, last login timestamp",
                "Profile Data: Profile picture, language preference, timezone",
              ],
            },
          ],
        },
        {
          title: "1.2 Health and Wellness Data",
          intro: "With your explicit consent, we collect:",
          blocks: [
            {
              type: "list",
              items: [
                "Genomic Data: Genetic test results, trait analysis, genetic profiles, and lab results",
                "Health Measurements: Height, weight, BMI, blood pressure, heart rate, temperature, oxygen saturation, head circumference (for paediatric users)",
                "Nutrition Data: Dietary logs (meal type, food items, macronutrients including calories, protein, carbohydrates, fats, and fibre), water intake records",
                "Activity Data: Activity type, duration, intensity, calories burned, distance, daily step count (via device pedometer)",
                "Sleep Data: Sleep date, bedtime, wake time, sleep quality, interruptions",
              ],
            },
          ],
        },
        {
          title: "1.3 Telemedicine Data",
          intro: "When you use our consultation services:",
          blocks: [
            {
              type: "list",
              items: [
                "Consultation Records: Doctor details, consultation reason, session status, duration, timestamps",
                "Session Notes: Notes recorded by the consulting healthcare professional",
              ],
            },
          ],
        },
        {
          title: "1.4 AI Interaction Data",
          blocks: [
            {
              type: "list",
              items: [
                "NutriScan: Food images captured via camera for AI-powered nutritional analysis",
                "Helix Chat: Conversational inputs and AI-generated health and nutrition guidance history",
              ],
            },
          ],
        },
        {
          title: "1.5 Device and Technical Data",
          intro: "We automatically collect:",
          blocks: [
            {
              type: "list",
              items: [
                "Device Information: Device type, operating system, OS version, app version, platform (Android/iOS)",
                "Push Notification Tokens: Firebase Cloud Messaging (FCM) device token for delivering push notifications",
                "Authentication Tokens: JSON Web Tokens (JWT) stored securely on your device for session management",
              ],
            },
          ],
        },
        {
          title: "1.6 Authentication Data",
          blocks: [
            {
              type: "list",
              items: [
                "Google Sign-In: If you sign in with Google, we receive your name, email address, and profile picture from Google. We do not receive or store your Google password.",
                "Phone Verification: Phone number verified via OTP (One-Time Password)",
                "Email Verification: Email address verified via OTP",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      subsections: [
        {
          blocks: [
            {
              type: "table",
              headers: ["Purpose", "Legal Basis"],
              rows: [
                ["Provide and maintain the App", "Performance of contract"],
                ["Create and manage your account", "Performance of contract"],
                ["Deliver personalised health insights and genetic trait analysis", "Your explicit consent"],
                ["Provide AI-powered nutritional analysis (NutriScan)", "Your explicit consent"],
                ["Enable telemedicine consultations", "Performance of contract"],
                ["Track health metrics (activity, sleep, nutrition)", "Your explicit consent"],
                ["Send push notifications (reminders, updates, alerts)", "Your consent (configurable)"],
                ["Improve our services and develop new features", "Legitimate interest"],
                ["Respond to your enquiries and provide support", "Performance of contract"],
                ["Ensure security and prevent fraud", "Legitimate interest"],
                ["Comply with legal obligations", "Legal obligation"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-sharing",
      title: "3. Data Sharing and Disclosure",
      subsections: [
        {
          intro:
            "We do not sell your personal data to third parties. We may share your information in the following circumstances:",
          blocks: [],
        },
        {
          title: "3.1 Third-Party Service Providers",
          blocks: [
            {
              type: "table",
              headers: ["Service Provider", "Purpose", "Data Shared"],
              rows: [
                ["Google Firebase", "Push notifications, crash reporting", "Device token, platform info"],
                ["Google Sign-In", "Authentication", "Name, email (during OAuth flow)"],
                [
                  "Google Gemini AI (Vertex AI)",
                  "Food image analysis (NutriScan)",
                  "Food images (processed via our backend)",
                ],
                ["OpenAI", "Helix Chat AI assistant", "Conversation text (processed via our backend)"],
                ["Telemedicine Service", "Video consultations", "Patient name, consultation details"],
              ],
            },
            {
              type: "quote",
              text: [
                "Important: All AI processing (Gemini, OpenAI) is routed through our secure backend servers. Your data is never sent directly from your device to third-party AI providers. All API keys are stored server-side.",
              ],
            },
          ],
        },
        {
          title: "3.2 Other Disclosures",
          intro: "We may disclose your information:",
          blocks: [
            {
              type: "list",
              items: [
                "When required by law, regulation, or legal process",
                "To protect the rights, property, or safety of Curanova, our users, or others",
                "In connection with a merger, acquisition, or sale of assets (with prior notice to you)",
                "With your explicit consent for research purposes (anonymised and aggregated data only)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-security",
      title: "4. Data Security",
      subsections: [
        {
          intro: "We implement robust security measures to protect your information:",
          blocks: [
            {
              type: "list",
              items: [
                "Encryption in Transit: All data transmitted between the App and our servers uses HTTPS/TLS encryption",
                "Encryption at Rest: Personal and health data is encrypted using industry-standard AES-256 encryption on our servers",
                "Secure Token Storage: Authentication tokens (JWT) are stored using the device's secure keychain (iOS) or encrypted shared preferences (Android) via Expo SecureStore",
                "No PII in Local Storage: Personal Identifiable Information is held in memory only during active sessions and is not persisted to unencrypted local storage",
                "Access Controls: Strict role-based access controls on our backend systems",
                "Regular Security Audits: We conduct periodic security assessments of our infrastructure",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-retention",
      title: "5. Data Retention",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Active Accounts: Your data is retained for as long as your account is active and as needed to provide our services.",
                "Account Deletion: Upon requesting account deletion, your account enters a 30-day grace period. During this period, you can cancel the deletion request. After 30 days, all personal data is permanently and irreversibly deleted from our systems.",
                "Health Data: Health measurements, activity logs, nutrition logs, and sleep data are retained for as long as your account is active. You may delete individual records at any time.",
                "AI Interaction Data: Chat history and NutriScan analysis logs are retained for service improvement and can be cleared by you at any time.",
                "Telemedicine Records: Consultation records are retained as required by applicable healthcare regulations.",
                "Push Notification Tokens: Device tokens are deactivated upon logout and deleted upon account deletion.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Right to Access: Request a copy of all personal data we hold about you",
                "Right to Rectification: Update or correct your personal information through the App's Edit Profile feature",
                "Right to Erasure: Request deletion of your account and all associated data (30-day grace period applies)",
                "Right to Data Portability: Export all your data in a downloadable format (ZIP file sent to your registered email)",
                "Right to Withdraw Consent: Withdraw consent for data processing at any time through Settings",
                "Right to Restrict Processing: Request limitation of how we process your data",
                "Right to Object: Object to data processing based on legitimate interest",
              ],
            },
          ],
        },
        {
          title: "How to exercise your rights:",
          blocks: [
            {
              type: "list",
              items: [
                "In-App: Settings > Privacy & Data > Download My Data (for export) or Settings > Delete Account (for erasure)",
                "Email: privacy@curanova.ai",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "7. Children's Privacy",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                "GenExcel may be used by parents/guardians to manage the health data of their children (care seekers). We collect children's data only with verifiable parental/guardian consent. Parents have full control over their children's data, including the ability to view, modify, export, and delete it.",
                "We do not knowingly collect personal information from children under the age of 13 (or applicable age in your jurisdiction) without parental consent.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "device-permissions",
      title: "8. Device Permissions",
      subsections: [
        {
          blocks: [
            {
              type: "table",
              headers: ["Permission", "Purpose", "Required?"],
              rows: [
                ["Camera", "NutriScan food scanning, profile picture capture", "Optional"],
                ["Microphone", "Voice input for Gene AI Assistant", "Optional"],
                ["Activity Recognition / Motion", "Step counter and physical activity tracking", "Optional"],
                ["Push Notifications", "Receiving health reminders, updates, and alerts", "Optional"],
              ],
            },
            {
              type: "p",
              text:
                "You can revoke any permission at any time through your device settings. Revoking a permission will disable the associated feature but will not affect other App functionality.",
            },
          ],
        },
      ],
    },
    {
      id: "international-transfers",
      title: "9. International Data Transfers",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                "Our servers are located in India (AWS Mumbai region). If you access the App from outside this region, your data may be transferred to and processed in the country where our servers are located. We ensure appropriate safeguards are in place for any international data transfers.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "policy-changes",
      title: "10. Changes to This Policy",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                'The "Last Updated" date at the top will be revised',
                "For significant changes, we will notify you via in-app notification or email",
                "Continued use of the App after changes constitutes acceptance of the updated policy",
                "If you do not agree with the changes, you should stop using the App and delete your account",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "contact-us",
      title: "11. Contact Us",
      subsections: [
        {
          intro: "If you have questions or concerns about this Privacy Policy or our data practices:",
          blocks: [
            {
              type: "list",
              items: [
                "Company: Curanova",
                "Email: privacy@curanova.ai",
                "Address: [Registered company address — placeholder in source, needs real value]",
                "Data Protection Officer: [DPO name and contact — placeholder in source, needs real value]",
              ],
            },
          ],
        },
      ],
    },
  ],
};
