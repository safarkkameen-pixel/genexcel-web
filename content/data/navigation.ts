export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  columns?: NavLink[];
};

/** Primary nav structure — five top-level items: two dropdowns for the
 * product/solution surfaces, two direct links, one Resources dropdown.
 * Secondary pages (Company, Trust & Privacy) live in the footer so the
 * main bar stays calm. */
export const primaryNav: NavGroup[] = [
  {
    label: "Product",
    columns: [
      {
        label: "School Genomics",
        href: "/school-genomics",
        description: "The student-centred product",
      },
      {
        label: "Health & Wellness",
        href: "/health-wellness",
        description: "The adult, body-centred product",
      },
      {
        label: "Helix AI Tutor",
        href: "/helix",
        description: "The AI learning companion",
      },
      {
        label: "Genetic Reports & Science",
        href: "/science",
        description: "What a report contains, and how it's read",
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        label: "For Families",
        href: "/families",
        description: "Parents and students",
      },
      {
        label: "For Schools",
        href: "/schools",
        description: "Health camps, learning profiles, class analytics",
      },
      {
        label: "For Clinicians & Counsellors",
        href: "/clinicians",
        description: "Caseloads, telehealth, referrals",
      },
    ],
  },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    columns: [
      { label: "Blog & guides", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Help centre", href: "/resources/help" },
    ],
  },
];

export const utilityNav = {
  login: { label: "Log in", href: "/login" },
};

/**
 * Flat list of real destinations for the mobile drop-down menu — the
 * desktop hierarchy collapses to the most important pages so the panel
 * stays short and easy to scan. All hrefs are real existing routes.
 */
export const mobileMenuItems: { label: string; ariaLabel: string; link: string }[] = [
  { label: "Home", ariaLabel: "Go to homepage", link: "/" },
  { label: "School Genomics", ariaLabel: "Go to School Genomics", link: "/school-genomics" },
  { label: "Health & Wellness", ariaLabel: "Go to Health & Wellness", link: "/health-wellness" },
  { label: "Helix AI Tutor", ariaLabel: "Go to Helix AI Tutor", link: "/helix" },
  { label: "How it works", ariaLabel: "Go to How it works", link: "/how-it-works" },
  { label: "Pricing", ariaLabel: "Go to Pricing", link: "/pricing" },
  { label: "Resources", ariaLabel: "Go to Resources", link: "/resources" },
  { label: "Trust & Privacy", ariaLabel: "Go to Trust & Privacy", link: "/trust" },
  { label: "Contact", ariaLabel: "Go to Contact", link: "/contact" },
  { label: utilityNav.login.label, ariaLabel: "Log in", link: utilityNav.login.href },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "School Genomics", href: "/school-genomics" },
      { label: "Health & Wellness", href: "/health-wellness" },
      { label: "Helix AI Tutor", href: "/helix" },
      { label: "Genetic Reports & Science", href: "/science" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Who it's for",
    links: [
      { label: "For Families", href: "/families" },
      { label: "For Schools", href: "/schools" },
      { label: "For Clinicians & Counsellors", href: "/clinicians" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our vision / roadmap", href: "/roadmap" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & guides", href: "/resources/blog" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Help centre", href: "/resources/help" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Trust & Privacy", href: "/trust" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
      { label: "Consent & Data", href: "/legal/consent-and-data" },
    ],
  },
];
