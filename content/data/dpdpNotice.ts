import type { LegalDocument } from "./legalDocuments";

/** Full-text DPDP Compliance Notice — content inventory §20. */
export const dpdpNotice: LegalDocument = {
  slug: "dpdp-compliance-notice",
  eyebrow: "Data Protection",
  title: "DPDP Compliance Notice",
  subhead:
    "Digital Personal Data Protection Act, 2023 (India) — This notice explains how Curanova complies with the DPDP Act in relation to the GenExcel mobile application.",
  sections: [
    {
      id: "data-fiduciary-information",
      title: "1. Data Fiduciary Information",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Data Fiduciary: Curanova",
                "Registered Address: [Full registered address — placeholder in source]",
                "Email: dpo@curanova.ai",
                "Grievance Officer: [Name — placeholder in source]",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "lawful-purpose",
      title: "2. Lawful Purpose of Data Processing",
      subsections: [
        {
          title: "2.1 Based on Your Consent (Section 6)",
          blocks: [
            {
              type: "table",
              headers: ["Data Category", "Purpose"],
              rows: [
                ["Personal identity data (name, DOB, gender)", "Account creation and profile management"],
                ["Contact data (email, phone, address)", "Communication, verification, and account recovery"],
                ["Health measurements (vitals, BMI, growth)", "Personalised health tracking and insights"],
                [
                  "Genomic data (genetic test results, traits)",
                  "Genetic analysis and trait-based health recommendations",
                ],
                [
                  "Nutrition data (dietary logs, food images)",
                  "AI-powered nutritional analysis and dietary tracking",
                ],
                ["Activity and sleep data", "Fitness tracking and health monitoring"],
                ["Profile picture", "Account personalisation"],
                ["Telemedicine consultation data", "Connecting you with healthcare professionals"],
                ["AI chat interactions", "Providing AI-powered health and nutrition guidance"],
              ],
            },
          ],
        },
        {
          title: "2.2 For Legitimate Uses (Section 7)",
          blocks: [
            {
              type: "list",
              items: [
                "Ensuring security and preventing fraud",
                "Compliance with Indian law and regulations",
                "Medical emergencies (if applicable, with appropriate safeguards)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "consent-mechanism",
      title: "3. Consent Mechanism",
      subsections: [
        {
          title: "3.1 How We Obtain Consent",
          blocks: [
            {
              type: "list",
              items: [
                "Initial Consent: Before using the App, you are presented with a legal consent screen that requires you to review and accept our Privacy Policy, Terms of Service, and Medical Disclaimer",
                "Explicit Consent for Health Data: Health and genetic data is collected only after you explicitly provide it through the App",
                "Granular Permission Consent: Device permissions (camera, microphone, activity recognition, push notifications) are requested individually with clear explanations of their purpose",
                "Informed Consent: Each consent request is accompanied by a clear description in plain language",
              ],
            },
          ],
        },
        {
          title: "3.2 Withdrawing Consent",
          intro: "You may withdraw your consent at any time by:",
          blocks: [
            {
              type: "list",
              items: [
                "Declining the consent screen (you will be logged out)",
                "Deleting your account: Settings > Delete Account",
                "Revoking device permissions through your device's settings",
                "Disabling notifications: Settings > Notification Preferences",
                "Contacting us: privacy@curanova.ai",
              ],
            },
            {
              type: "p",
              text:
                "Withdrawing consent will not affect the lawfulness of processing carried out before the withdrawal. Some services may become unavailable after consent is withdrawn.",
            },
          ],
        },
      ],
    },
    {
      id: "rights-of-data-principals",
      title: "4. Rights of Data Principals",
      subsections: [
        {
          title: "4.1 Right to Access Information (Section 11)",
          blocks: [
            {
              type: "list",
              items: [
                "You can view all your personal data within the App (Profile, Health Dashboard, Reports)",
                "You can request a summary of your data processing activities by contacting us",
              ],
            },
          ],
        },
        {
          title: "4.2 Right to Correction and Erasure (Section 12)",
          blocks: [
            {
              type: "list",
              items: [
                "Correction: Edit your personal information through Settings > Edit Profile",
                "Erasure: Request deletion through Settings > Delete Account",
                "Timeline: Account deletion is processed within 30 days of the grace period ending",
                "Confirmation: You will receive a confirmation email when deletion is scheduled and when it is completed",
              ],
            },
          ],
        },
        {
          title: "4.3 Right to Data Portability",
          blocks: [
            {
              type: "list",
              items: [
                "Export your data: Settings > Privacy & Data > Download My Data",
                "Format: Your data is compiled into a ZIP file and sent to your registered email address",
                "Contents: All personal data, health records, activity logs, and genomic data associated with your account",
                "Processing time: Export requests are typically processed within 72 hours",
              ],
            },
          ],
        },
        {
          title: "4.4 Right to Grievance Redressal (Section 13)",
          blocks: [
            {
              type: "list",
              items: [
                "You may raise a grievance with our Grievance Officer (details in Section 1)",
                "We will acknowledge your grievance within 48 hours",
                "We will resolve your grievance within 30 days",
                "If unsatisfied, you may approach the Data Protection Board of India",
              ],
            },
          ],
        },
        {
          title: "4.5 Right to Nominate (Section 14)",
          blocks: [
            {
              type: "list",
              items: [
                "You may nominate another individual to exercise your rights in the event of your death or incapacity",
                "To register a nominee, contact privacy@curanova.ai",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-processing-for-children",
      title: "5. Data Processing for Children",
      subsections: [
        {
          title: "5.1 Parental/Guardian Consent",
          blocks: [
            {
              type: "list",
              items: [
                "GenExcel allows parents and legal guardians to manage health data of their minor children",
                "We process children's personal data only with verifiable parental or guardian consent",
                "Parents/guardians maintain full control over their children's data, including the ability to view, edit, export, and delete it",
              ],
            },
          ],
        },
        {
          title: "5.2 Safeguards",
          blocks: [
            {
              type: "list",
              items: [
                "We do not perform behavioural tracking or targeted advertising on children's data",
                "We do not process children's data in any manner that is likely to cause harm to them",
                "Children's genomic and health data is subject to the same security measures as adult data (AES-256 encryption, secure storage)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-processors-and-cross-border",
      title: "6. Data Processors and Cross-Border Transfers",
      subsections: [
        {
          title: "6.1 Data Processors",
          blocks: [
            {
              type: "table",
              headers: ["Processor", "Country", "Purpose", "Safeguards"],
              rows: [
                [
                  "Google Cloud / Firebase",
                  "US/India",
                  "Push notifications, crash reporting, file storage",
                  "Google Cloud DPA, encryption",
                ],
                [
                  "Google Gemini AI (Vertex AI)",
                  "US/India",
                  "Food image analysis (NutriScan)",
                  "Processed via our backend, no direct user access",
                ],
                [
                  "OpenAI",
                  "United States",
                  "AI chat assistance (Helix Chat)",
                  "Processed via our backend, no direct user access",
                ],
                ["Telemedicine Provider", "India", "Video consultations", "Encrypted WebSocket connections"],
              ],
            },
          ],
        },
        {
          title: "6.2 Cross-Border Data Transfers",
          blocks: [
            {
              type: "list",
              items: [
                "Your data may be transferred to countries where our data processors operate",
                "All transfers comply with the provisions of the DPDP Act regarding data transfer to permissible jurisdictions",
                "We ensure that adequate safeguards (contractual obligations, encryption) are in place before transferring data",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-security-measures",
      title: "7. Data Security Measures",
      subsections: [
        {
          intro:
            "In compliance with Section 8 of the DPDP Act, we implement the following reasonable security safeguards:",
          blocks: [
            {
              type: "list",
              items: [
                "Encryption: AES-256 encryption for data at rest; TLS/HTTPS for data in transit",
                "Secure Authentication: JWT tokens stored in device secure storage (iOS Keychain / Android EncryptedSharedPreferences)",
                "Minimal Local Storage: Personal data kept in memory only during active sessions; no PII persisted in unencrypted local storage",
                "Access Controls: Role-based access controls on all backend systems",
                "Token Management: Push notification tokens deactivated on logout and deleted on account deletion",
                "Regular Audits: Periodic security assessments and vulnerability testing",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-breach-notification",
      title: "8. Data Breach Notification",
      subsections: [
        {
          intro: "In the event of a personal data breach:",
          blocks: [
            {
              type: "list",
              items: [
                "We will notify the Data Protection Board of India as required under the DPDP Act",
                "We will notify affected Data Principals without unreasonable delay",
                "Notification will include the nature of the breach, data affected, and remedial measures taken",
                "We maintain an incident response plan for prompt breach detection and response",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "retention-and-deletion",
      title: "9. Retention and Deletion",
      subsections: [
        {
          blocks: [
            {
              type: "table",
              headers: ["Data Type", "Retention Period", "Deletion Method"],
              rows: [
                ["Account data", "Until account deletion + 30-day grace period", "Permanent deletion after grace period"],
                ["Health measurements", "Until user deletes or account deletion", "Permanent deletion"],
                ["Genomic data", "Until user deletes or account deletion", "Permanent deletion"],
                ["Nutrition & activity logs", "Until user deletes or account deletion", "Permanent deletion"],
                ["Telemedicine records", "As required by healthcare regulations", "Per regulatory requirements"],
                ["Push notification tokens", "Until logout or account deletion", "Automatic deactivation/deletion"],
                ["AI chat history", "Until user clears or account deletion", "Permanent deletion"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "significant-data-fiduciary",
      title: "10. Significant Data Fiduciary Obligations",
      subsections: [
        {
          intro: "If Curanova is designated as a Significant Data Fiduciary under the DPDP Act, we will:",
          blocks: [
            {
              type: "list",
              items: [
                "Appoint a Data Protection Officer (DPO) based in India",
                "Appoint an independent data auditor",
                "Conduct periodic Data Protection Impact Assessments (DPIA)",
                "Publish findings of such audits as required",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "updates-to-this-notice",
      title: "11. Updates to This Notice",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "This notice may be updated to reflect changes in law or our data practices",
                "Material changes will be communicated through in-app notifications",
                "The latest version will always be available at genexcel.ai/dpdp",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "contact-and-grievance-redressal",
      title: "12. Contact and Grievance Redressal",
      subsections: [
        {
          intro: "For questions, concerns, or grievances regarding data processing:",
          blocks: [
            {
              type: "table",
              headers: ["Field", "Value"],
              rows: [
                ["Grievance Officer", "[Name — placeholder in source]"],
                ["Email", "grievance@curanova.ai"],
                ["Phone", "[Phone number — placeholder in source]"],
                ["Address", "[Full address — placeholder in source]"],
                ["Response Time", "Acknowledgement within 48 hours; resolution within 30 days"],
              ],
            },
            {
              type: "p",
              text:
                "If your grievance is not resolved satisfactorily, you may file a complaint with the Data Protection Board of India as established under the DPDP Act, 2023.",
            },
          ],
        },
      ],
    },
  ],
};
