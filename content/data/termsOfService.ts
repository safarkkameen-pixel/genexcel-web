import type { LegalDocument } from "./legalDocuments";

/** Full-text Terms of Service — content inventory §22. */
export const termsOfService: LegalDocument = {
  slug: "terms-of-service",
  eyebrow: "Legal Agreement",
  title: "Terms of Service",
  subhead:
    "Please read these terms carefully before using GenExcel. By using our App, you agree to be bound by these Terms.",
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
                'These Terms of Service ("Terms") govern your access to and use of the GenExcel mobile application ("App") provided by Curanova ("Company," "we," "us," or "our"). By downloading, installing, or using the App, you agree to be bound by these Terms.',
                "If you do not agree to these Terms, do not use the App.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "definitions",
      title: "1. Definitions",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                '"App" refers to the GenExcel mobile application available on Android and iOS platforms',
                '"User," "you," or "your" refers to any individual who accesses or uses the App',
                '"Care Seeker" refers to the individual whose health and genetic data is being managed (may be the User themselves or a dependent)',
                '"Services" refers to all features and functionality provided through the App, including health tracking, genetic analysis, AI-powered nutrition analysis, and telemedicine consultations',
                '"Content" refers to all text, images, data, information, and other materials available through the App',
              ],
            },
          ],
        },
      ],
    },
    {
      id: "eligibility",
      title: "2. Eligibility",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "You must be at least 18 years of age to create an account",
                "Parents or legal guardians may create accounts to manage the health data of their minor children (care seekers)",
                "By using the App, you represent that you have the legal capacity to enter into these Terms",
                "If you are using the App on behalf of a minor, you accept these Terms on their behalf and are responsible for their use of the App",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "account-registration",
      title: "3. Account Registration and Security",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "You must provide accurate, current, and complete information during registration",
                "You are responsible for maintaining the confidentiality of your account credentials",
                "You must notify us immediately of any unauthorised access to or use of your account",
                "You are responsible for all activities that occur under your account",
                "We reserve the right to suspend or terminate accounts that violate these Terms",
                "You may sign in using email/password, phone OTP, or Google Sign-In",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "medical-disclaimer",
      title: "4. Medical Disclaimer",
      subsections: [
        {
          blocks: [
            { type: "p", text: "Important: Please Read Carefully" },
            {
              type: "list",
              items: [
                "GenExcel provides health and genomic information strictly for educational and informational purposes.",
                "The App is NOT a substitute for professional medical advice, diagnosis, or treatment.",
                "Genetic test results and interpretations are based on current scientific understanding, which continues to evolve. Results should not be used alone to make health decisions.",
                "Use of the App does NOT create a doctor-patient relationship (except during active telemedicine consultations with licensed healthcare providers).",
                "Always consult a qualified healthcare provider before making any medical decisions based on information provided by the App.",
                "Emergency: In case of a medical emergency, call your local emergency services immediately. Do not rely on the App for emergency medical guidance.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ai-powered-features",
      title: "5. AI-Powered Features",
      subsections: [
        {
          title: "5.1 NutriScan (Food Analysis)",
          blocks: [
            {
              type: "list",
              items: [
                "NutriScan uses artificial intelligence (Google Gemini) to analyse food images and estimate nutritional content.",
                "Results are estimates and may not be perfectly accurate. Do not rely solely on NutriScan for dietary decisions, especially if you have food allergies, intolerances, or specific medical dietary requirements.",
                "Food images are processed through our secure backend servers.",
              ],
            },
          ],
        },
        {
          title: "5.2 Helix Chat (AI Assistant)",
          blocks: [
            {
              type: "list",
              items: [
                "Helix Chat provides AI-generated health and nutrition guidance powered by OpenAI technology.",
                "Responses are informational and educational only. They do not constitute medical advice.",
                "AI responses may occasionally be inaccurate or incomplete. Always verify health-related information with a qualified professional.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "telemedicine-services",
      title: "6. Telemedicine Services",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Telemedicine consultations connect you with licensed healthcare professionals",
                "Telemedicine is not a replacement for in-person medical care for all conditions",
                "The availability of telemedicine services depends on your location and the availability of healthcare providers",
                "You consent to the collection and sharing of relevant health data with the consulting healthcare professional during a consultation",
                "Session notes and records are maintained as required by applicable healthcare regulations",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "permitted-use",
      title: "7. Permitted Use",
      subsections: [
        {
          intro: "You agree to use the App for:",
          blocks: [
            {
              type: "list",
              items: [
                "Personal, non-commercial health and wellness tracking",
                "Managing your own or your dependent children's health data (as a parent/guardian)",
                "Accessing genetic analysis and personalised health insights",
                "Legitimate telemedicine consultations",
              ],
            },
          ],
        },
        {
          intro: "You agree NOT to:",
          blocks: [
            {
              type: "list",
              items: [
                "Use the App for any unlawful or fraudulent purpose",
                "Attempt to gain unauthorised access to our systems or other users' accounts",
                "Reverse-engineer, decompile, or disassemble the App",
                "Scrape, mine, or extract data from the App using automated means",
                "Share your account credentials with third parties",
                "Upload malicious content, viruses, or harmful code",
                "Use the App to provide medical advice to others",
                "Misrepresent your identity or create accounts under false pretences",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "All content, features, functionality, design, and code of GenExcel are owned by Curanova and are protected by intellectual property laws",
                "The GenExcel name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Curanova",
                "You may not copy, modify, distribute, sell, or lease any part of the App without our prior written consent",
                "You retain ownership of any personal data and content you submit to the App",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "user-content",
      title: "9. User Content",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "By submitting content (including health data, images, and chat messages), you grant us a limited licence to use, store, process, and display it as necessary to provide our Services",
                "You represent that you have the right to submit any content you provide",
                "We do not claim ownership of your personal data or health records",
                "You may export or delete your content at any time through the App",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "account-deletion",
      title: "10. Account Deletion",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "You may request account deletion at any time through Settings > Delete Account.",
                "Upon requesting deletion, your account enters a 30-day grace period during which: your account is deactivated; you can cancel the deletion request and restore your account.",
                "After the 30-day grace period, all personal data is permanently and irreversibly deleted.",
                "Certain data may be retained longer if required by law or healthcare regulations.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "service-availability",
      title: "11. Service Availability and Modifications",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "We strive to maintain the App's availability but do not guarantee uninterrupted access",
                "We reserve the right to modify, suspend, or discontinue any feature or service at any time",
                "We will provide reasonable notice of significant changes when possible",
                "We are not liable for any loss resulting from service interruptions or modifications",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "12. Limitation of Liability",
      subsections: [
        {
          intro: "To the maximum extent permitted by applicable law:",
          blocks: [
            {
              type: "list",
              items: [
                'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied',
                "We do not warrant that the App will be error-free, secure, or uninterrupted",
                "We are not liable for any indirect, incidental, special, consequential, or punitive damages",
                "Our total liability for any claim arising from or related to the App shall not exceed the amount you have paid us in the 12 months preceding the claim, or INR 5,000, whichever is greater",
                "We are not responsible for the accuracy of AI-generated content, including NutriScan analysis and Helix Chat responses",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "indemnification",
      title: "13. Indemnification",
      subsections: [
        {
          intro:
            "You agree to indemnify and hold harmless Curanova, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:",
          blocks: [
            {
              type: "list",
              items: [
                "Your use of the App",
                "Your violation of these Terms",
                "Your violation of any third-party rights",
                "Any content you submit through the App",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "governing-law",
      title: "14. Governing Law and Dispute Resolution",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "These Terms are governed by the laws of India",
                "Any disputes arising from these Terms or your use of the App shall first be attempted to be resolved through amicable negotiation",
                "If negotiation fails, disputes shall be resolved through arbitration in Bangalore, India in accordance with the Arbitration and Conciliation Act, 1996",
                "The language of arbitration shall be English",
                "Nothing in these Terms prevents either party from seeking urgent interim relief from a court of competent jurisdiction",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "severability",
      title: "15. Severability",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "entire-agreement",
      title: "16. Entire Agreement",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                "These Terms, together with our Privacy Policy, DPDP Compliance Notice, and Cookie Policy, constitute the entire agreement between you and Curanova regarding the use of the App.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "changes-to-terms",
      title: "17. Changes to These Terms",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "We may update these Terms from time to time",
                "Material changes will be communicated via in-app notification or email",
                "Continued use of the App after changes constitutes acceptance",
                "If you disagree with updated Terms, you must stop using the App",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "contact-us",
      title: "18. Contact Us",
      subsections: [
        {
          intro: "For questions about these Terms:",
          blocks: [
            {
              type: "list",
              items: [
                "Company: Curanova",
                "Email: legal@curanova.ai",
                "Address: [Registered company address — placeholder in source, needs real value]",
              ],
            },
          ],
        },
      ],
    },
  ],
};
