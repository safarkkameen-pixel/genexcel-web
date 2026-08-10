export const siteConfig = {
  name: 'GenExcel.ai',
  description: "GenExcel pairs a child's genetic report with Helix, an AI tutor grounded in their own textbooks, plus genetics-adjusted nutrition and fitness guidance.",
  url: 'https://genexcel.ai',
  ogImage: 'https://genexcel.ai/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/genexcel',
    linkedin: 'https://linkedin.com/company/genexcel',
    instagram: 'https://instagram.com/genexcel.ai',
  },
  creator: 'Curanova Global Med LLP',
};

export const navItems = [
  {
    title: 'Platform',
    href: '/platform',
    children: [
      { title: 'Platform Overview', href: '/platform', description: 'Genetics, Helix and every system in one place' },
      { title: 'How It Works', href: '/how-it-works', description: 'From saliva sample to a tutor that teaches differently' },
      { title: 'The Science', href: '/science', description: 'How the genetic report is built and read' },
    ],
  },
  {
    title: 'Solutions',
    href: '/solutions',
    children: [
      { title: 'For Families', href: '/solutions/families', description: 'One household account for every child' },
      { title: 'For Schools', href: '/solutions/schools', description: 'Health camps, teacher tools and School Genomics' },
      { title: 'For Healthcare', href: '/solutions/healthcare', description: 'Genetic counsellors, labs and telehealth partners' },
    ],
  },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export const footerLinks = {
  solutions: [
    { title: 'For Families', href: '/solutions/families' },
    { title: 'For Schools', href: '/solutions/schools' },
    { title: 'For Healthcare', href: '/solutions/healthcare' },
    { title: 'Pricing', href: '/pricing' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Press', href: '/press' },
    { title: 'Contact', href: '/contact' },
    { title: 'Support', href: '/help' },
  ],
  resources: [
    { title: 'How It Works', href: '/how-it-works' },
    { title: 'Platform Overview', href: '/platform' },
    { title: 'Blog', href: '/blog' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Help Center', href: '/help' },
  ],
  legal: [
    { title: 'Trust & Privacy', href: '/trust' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'DPDP Compliance', href: '/dpdp' },
    { title: 'Delete Account', href: '/delete-account' },
  ],
};

export const stats = [
  { value: 1020, suffix: '+', label: 'Genetic Traits Catalogued' },
  { value: 225000, suffix: '+', label: 'Textbook Passages for Helix' },
  { value: 26, suffix: '', label: 'Genetic Trait Profiles' },
  { value: 8, suffix: '', label: 'Playable Cognitive Games' },
];

export const features = [
  {
    icon: 'Dna',
    title: 'Genetic Reports',
    description: 'A report across diet, learning, fitness, personality and health, read from the lab PDF in about ten seconds and framed the same way your counsellor sees it.',
    color: 'from-blue-500 to-cyan-500',
    href: '/platform#genetics',
  },
  {
    icon: 'Bot',
    title: 'Helix, the AI Tutor',
    description: "Answers homework from your child's own textbook, in their own language, and never mentions genetics while it teaches.",
    color: 'from-purple-500 to-pink-500',
    href: '/platform#helix',
  },
  {
    icon: 'Camera',
    title: 'AI NutriScan',
    description: 'Snap a photo of any meal for instant nutrition analysis, with calorie and macro targets that carry genetic adjustments.',
    color: 'from-green-500 to-emerald-500',
    href: '/platform#nutrition',
  },
  {
    icon: 'HeartPulse',
    title: 'Fitness & Habits',
    description: 'Workout plans, live gym logging and step tracking that sync with Apple Health or Health Connect.',
    color: 'from-red-500 to-orange-500',
    href: '/platform#fitness',
  },
  {
    icon: 'GraduationCap',
    title: 'School Genomics',
    description: 'A learning profile that shapes lesson plans for teachers and study plans for students, without ever showing a child a score or a label.',
    color: 'from-indigo-500 to-blue-500',
    href: '/solutions/schools',
  },
  {
    icon: 'Users',
    title: 'Family Dashboard',
    description: 'One household account for up to five children, with consent you grant and can withdraw at any time.',
    color: 'from-teal-500 to-cyan-500',
    href: '/solutions/families',
  },
];

export const testimonials = [
  {
    quote: "GenExcel helped us understand why our son struggled with focus in school. The genetic insights led us to the right dietary changes, and Helix explains his homework in a way that finally clicks. He's thriving now!",
    author: 'Priya M.',
    role: 'Parent of 9-year-old',
    location: 'Mumbai',
    avatar: '/images/testimonials/avatar-1.jpg',
  },
  {
    quote: "As a pediatrician, I recommend GenExcel to families who want to take a proactive approach to their child's health. The insights are clinically relevant, and the risk-related findings are framed carefully for parents rather than the child.",
    author: 'Dr. Rajesh K.',
    role: 'Pediatrician',
    location: 'Bangalore',
    avatar: '/images/testimonials/avatar-2.jpg',
  },
  {
    quote: "My daughter loves the brain games and is always excited to 'scan' her meals. It's made healthy eating fun and helped her take ownership of her health at just 7 years old.",
    author: 'Anita S.',
    role: 'Parent of 7-year-old',
    location: 'Delhi',
    avatar: '/images/testimonials/avatar-3.jpg',
  },
  {
    quote: "What sold me was that Helix answers from my son's actual textbook, not generic internet answers — and it never once mentioned his genetic report to him. That line between what I see as a parent and what he sees matters to us.",
    author: 'Karthik R.',
    role: 'Parent of 11-year-old',
    location: 'Chennai',
    avatar: '/images/testimonials/avatar-4.jpg',
  },
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'The AI tutor and lifestyle tools, on us',
    features: [
      'Helix AI tutor, chat and voice',
      'Textbook-grounded homework help',
      'Study plans, lesson learner and roadmaps',
      'Diet plans, NutriScan and water tracking',
      'Fitness plans and gym logging',
      'Lifestyle tracking (My Traits unlocks on PRO)',
      '1 child profile',
    ],
    cta: 'Get Started Free',
    href: '/signup',
    popular: false,
  },
  {
    name: 'Premium',
    price: '2,999',
    period: 'per year',
    description: "Everything in Free, plus your child's genetic report",
    features: [
      'Everything in Free',
      'Genetic test kit included',
      'Full My Traits report: diet, learning, fitness, personality and health',
      'Genetic adjustments in nutrition and fitness plans',
      'Genetic counsellor consultations',
      'Priority email support',
    ],
    cta: 'Order Genetic Test',
    href: '/order',
    popular: true,
  },
  {
    name: 'Family',
    price: '7,999',
    period: 'per year',
    description: 'For families with multiple children',
    features: [
      'Everything in Premium',
      'Up to 4 children on genetic reports',
      'Family health comparisons',
      'Combined genetic insights',
      'Priority consultation booking',
      'Dedicated family support',
    ],
    cta: 'Get Family Plan',
    href: '/order?plan=family',
    popular: false,
  },
];
