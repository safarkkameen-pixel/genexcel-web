import type { LegalDocument } from "./legalDocuments";

/** Full-text Cookie Policy — content inventory §23. */
export const cookiePolicy: LegalDocument = {
  slug: "cookie-policy",
  eyebrow: "Transparency",
  title: "Cookie Policy",
  subhead:
    "This policy explains how we use cookies and similar technologies on the GenExcel website and in relation to the GenExcel mobile application.",
  sections: [
    {
      id: "what-are-cookies",
      title: "1. What Are Cookies?",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                "Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and enhance user experience.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "cookies-on-website",
      title: "2. Cookies on Our Website",
      subsections: [
        {
          intro: "Our website (genexcel.ai) uses the following types of cookies:",
          blocks: [],
        },
        {
          title: "2.1 Strictly Necessary Cookies",
          intro: "These cookies are essential for the website to function and cannot be switched off.",
          blocks: [
            {
              type: "table",
              headers: ["Cookie", "Purpose", "Duration"],
              rows: [
                ["Session cookies", "Maintain your browsing session", "Session"],
                ["Security cookies", "Prevent cross-site request forgery (CSRF)", "Session"],
              ],
            },
          ],
        },
        {
          title: "2.2 Functional Cookies",
          intro: "These cookies enable enhanced functionality and personalisation.",
          blocks: [
            {
              type: "table",
              headers: ["Cookie", "Purpose", "Duration"],
              rows: [
                ["Language preference", "Remember your preferred language", "1 year"],
                ["Theme preference", "Remember light/dark mode selection", "1 year"],
              ],
            },
          ],
        },
        {
          title: "2.3 Analytics Cookies",
          blocks: [{ type: "p", text: "We currently do not use analytics cookies on our website." }],
        },
        {
          title: "2.4 Third-Party Cookies",
          blocks: [{ type: "p", text: "We currently do not use third-party cookies on our website." }],
        },
      ],
    },
    {
      id: "cookies-and-mobile-app",
      title: "3. Cookies and the Mobile App",
      subsections: [
        {
          intro:
            "The GenExcel mobile application does not use traditional browser cookies. Instead, the App uses the following local storage technologies:",
          blocks: [
            {
              type: "list",
              items: [
                "Expo SecureStore — Purpose: Secure authentication. Data: JWT access and refresh tokens (encrypted)",
                "AsyncStorage — Purpose: App preferences and state. Data: Non-PII settings: biometric preference, cached role flags, legal consent status, notification preferences",
                "In-Memory State — Purpose: Active session data. Data: User profile data (held in memory only, not persisted to disk)",
              ],
            },
          ],
        },
        {
          intro: "Key points about App data storage:",
          blocks: [
            {
              type: "list",
              items: [
                "No PII is persisted to unencrypted local storage on your device",
                "Authentication tokens are stored using platform-native secure storage (iOS Keychain / Android EncryptedSharedPreferences)",
                "All locally stored data is cleared upon logout",
                "Legal consent records are cached locally and synced with our backend",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "firebase-and-push-notifications",
      title: "4. Firebase and Push Notifications",
      subsections: [
        {
          intro: "The App uses Firebase Cloud Messaging (FCM) for push notifications. Firebase may store:",
          blocks: [
            {
              type: "table",
              headers: ["Data", "Purpose", "Control"],
              rows: [
                [
                  "FCM device token",
                  "Delivering push notifications to your device",
                  "Deactivated on logout; deleted on account deletion",
                ],
                ["Platform and app version", "Ensuring compatibility of notifications", "Automatically collected"],
              ],
            },
            {
              type: "p",
              text:
                "Firebase does not use cookies within the mobile app context. For Firebase's privacy practices, see Google's Privacy Policy (policies.google.com/privacy).",
            },
          ],
        },
      ],
    },
    {
      id: "how-to-manage-cookies",
      title: "5. How to Manage Cookies",
      subsections: [
        {
          title: "5.1 Website Cookies",
          intro: "You can control and manage cookies through your browser settings:",
          blocks: [
            {
              type: "list",
              items: [
                "Chrome: Settings > Privacy and Security > Cookies and other site data",
                "Firefox: Settings > Privacy & Security > Cookies and Site Data",
                "Safari: Preferences > Privacy > Manage Website Data",
                "Edge: Settings > Cookies and site permissions",
              ],
            },
            { type: "p", text: "Blocking essential cookies may affect website functionality." },
          ],
        },
        {
          title: "5.2 Mobile App Storage",
          intro: "You can manage App data storage through:",
          blocks: [
            {
              type: "list",
              items: [
                "Logout: Clears all in-memory personal data and deactivates push notification tokens",
                "Delete Account: Permanently removes all data from our servers (30-day grace period) and clears all local storage",
                "Device Settings: Revoke individual app permissions (camera, microphone, notifications, activity recognition)",
                "Clear App Data: Through your device's application settings (this will log you out)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "do-not-track",
      title: "6. Do Not Track (DNT)",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "The GenExcel App does not use behavioural tracking or targeted advertising",
                "We do not employ any third-party analytics SDKs (no Sentry, Amplitude, Mixpanel, Segment, or Google Analytics) within the mobile app",
                "We respect Do Not Track signals from browsers on our website",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "updates-to-this-policy",
      title: "7. Updates to This Policy",
      subsections: [
        {
          blocks: [
            {
              type: "quote",
              text: [
                "We may update this Cookie Policy to reflect changes in technology or legal requirements. The latest version will always be available at genexcel.ai/cookies.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "contact-us",
      title: "8. Contact Us",
      subsections: [
        {
          intro: "For questions about this Cookie Policy:",
          blocks: [
            {
              type: "list",
              items: [
                "Company: Curanova",
                "Email: privacy@curanova.ai",
                "Address: [Registered company address — placeholder in source, needs real value]",
              ],
            },
          ],
        },
      ],
    },
  ],
};
