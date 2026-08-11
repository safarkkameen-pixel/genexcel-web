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

/**
 * Primary nav structure, per the content inventory: Platform (dropdown)
 * · Solutions (dropdown) · Pricing · Blog · About · Contact. Deeper
 * product pages (Helix, School Genomics, Health & Wellness, Roadmap)
 * stay live and linked from the Platform page's own body copy rather
 * than crowding this bar — the inventory's nav is deliberately short.
 */
export const primaryNav: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    columns: [
      {
        label: "Platform Overview",
        href: "/platform",
        description: "Genetics, Helix and every system in one place",
      },
      {
        label: "How It Works",
        href: "/how-it-works",
        description: "From saliva sample to a tutor that teaches differently",
      },
      {
        label: "The Science",
        href: "/science",
        description: "How the genetic report is built and read",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        label: "Solutions Overview",
        href: "/solutions",
        description: "Find the right fit for your family, school or practice",
      },
      {
        label: "For Families",
        href: "/solutions/families",
        description: "One household account for every child",
      },
      {
        label: "For Schools",
        href: "/solutions/schools",
        description: "Health camps, teacher tools and School Genomics",
      },
      {
        label: "For Healthcare",
        href: "/solutions/healthcare",
        description: "Genetic counsellors, labs and telehealth partners",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const utilityNav = {
  getStarted: { label: "Get Started", href: "/pricing" },
  contact: { label: "Contact", href: "/contact" },
};

/**
 * Flat list for the mobile slide-in panel. The desktop dropdown items
 * are repeated here flat so the panel stays a single scroll, per the
 * inventory's "full-height slide-in panel" description.
 */
export const mobileMenuItems: { label: string; ariaLabel: string; link: string }[] = [
  { label: "Home", ariaLabel: "Go to homepage", link: "/" },
  { label: "Platform Overview", ariaLabel: "Go to Platform Overview", link: "/platform" },
  { label: "How It Works", ariaLabel: "Go to How It Works", link: "/how-it-works" },
  { label: "The Science", ariaLabel: "Go to The Science", link: "/science" },
  { label: "For Families", ariaLabel: "Go to For Families", link: "/solutions/families" },
  { label: "For Schools", ariaLabel: "Go to For Schools", link: "/solutions/schools" },
  { label: "For Healthcare", ariaLabel: "Go to For Healthcare", link: "/solutions/healthcare" },
  { label: "Pricing", ariaLabel: "Go to Pricing", link: "/pricing" },
  { label: "Blog", ariaLabel: "Go to Blog", link: "/blog" },
  { label: "About", ariaLabel: "Go to About", link: "/about" },
  { label: "Contact", ariaLabel: "Go to Contact", link: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "For Families", href: "/solutions/families" },
      { label: "For Schools", href: "/solutions/schools" },
      { label: "For Healthcare", href: "/solutions/healthcare" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/help" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Platform Overview", href: "/platform" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faqs" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Trust & Privacy", href: "/trust" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "DPDP Compliance", href: "/dpdp" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
];
