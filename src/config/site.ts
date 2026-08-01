export const siteConfig = {
  name: 'GenExcel.ai',
  description: 'The AI-powered pediatric health platform combining genetic insights with personalized nutrition, brain games, and wellness tracking for children ages 4-18.',
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
    title: 'Solutions',
    href: '/solutions',
    children: [
      { title: 'For Families', href: '/solutions/families', description: 'Comprehensive health tracking for your children' },
      { title: 'For Schools', href: '/solutions/schools', description: 'School health programs and kiosk integration' },
      { title: 'For Healthcare', href: '/solutions/healthcare', description: 'Tools for pediatricians and specialists' },
    ],
  },
  { title: 'Science', href: '/science' },
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
  ],
  resources: [
    { title: 'Blog', href: '/blog' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Help Center', href: '/help' },
    { title: 'Webinars', href: '/#' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'DPDP Compliance', href: '/dpdp' },
    { title: 'Delete Account', href: '/delete-account' },
  ],
};

export const stats = [
  { value: 10000, suffix: '+', label: 'Families Trust Us' },
  { value: 450, suffix: '+', label: 'Genetic Traits' },
  { value: 50, suffix: '+', label: 'Partner Schools' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate' },
];

export const features = [
  {
    icon: 'Dna',
    title: 'Genetic Insights',
    description: 'Discover 450+ genetic traits across 34 health categories, from metabolism to cognitive abilities.',
    color: 'from-blue-500 to-cyan-500',
    href: '/solutions/families#genetics',
  },
  {
    icon: 'Brain',
    title: 'Brain Games',
    description: '10 scientifically designed cognitive games that adapt to your child\'s age and abilities.',
    color: 'from-purple-500 to-pink-500',
    href: '/solutions/families#games',
  },
  {
    icon: 'Camera',
    title: 'AI NutriScan',
    description: 'Snap a photo of any meal for instant, personalized nutritional analysis powered by AI.',
    color: 'from-green-500 to-emerald-500',
    href: '/solutions/families#nutrition',
  },
  {
    icon: 'HeartPulse',
    title: 'Health Tracking',
    description: 'Track 13 vital health metrics with beautiful visualizations and trend analysis.',
    color: 'from-red-500 to-orange-500',
    href: '/solutions/families#health',
  },
  {
    icon: 'Video',
    title: 'Telemedicine',
    description: 'Connect with verified pediatricians and genetic counselors via secure video calls.',
    color: 'from-indigo-500 to-blue-500',
    href: '/solutions/families#telemedicine',
  },
  {
    icon: 'Users',
    title: 'Family Dashboard',
    description: 'Manage multiple children from one account with comprehensive family health insights.',
    color: 'from-teal-500 to-cyan-500',
    href: '/solutions/families#family',
  },
];

export const testimonials = [
  {
    quote: "GenExcel helped us understand why our son struggled with focus in school. The genetic insights led us to the right dietary changes and learning strategies. He's thriving now!",
    author: 'Priya M.',
    role: 'Parent of 9-year-old',
    location: 'Mumbai',
    avatar: '/images/testimonials/avatar-1.jpg',
  },
  {
    quote: "As a pediatrician, I recommend GenExcel to families who want to take a proactive approach to their child's health. The insights are clinically relevant and beautifully presented.",
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
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Get started with basic health tracking',
    features: [
      'Health metrics tracking (13 metrics)',
      '5 brain games per month',
      'Basic nutrition logging',
      '1 child profile',
      'Community support',
    ],
    cta: 'Get Started Free',
    href: '/signup',
    popular: false,
  },
  {
    name: 'Premium',
    price: '2,999',
    period: 'per year',
    description: 'Complete genetic insights for your child',
    features: [
      'Everything in Free',
      'Genetic test kit included',
      '450+ genetic traits analyzed',
      'Unlimited brain games',
      'AI-powered NutriScan',
      'Personalized recommendations',
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
      'Up to 4 children',
      'Family health comparisons',
      'Combined genetic insights',
      'Priority telemedicine booking',
      'Dedicated family support',
    ],
    cta: 'Get Family Plan',
    href: '/order?plan=family',
    popular: false,
  },
];
