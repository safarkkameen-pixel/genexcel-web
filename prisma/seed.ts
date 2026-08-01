import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. Create admin user
  const email = process.env.ADMIN_EMAIL || 'admin@genexcel.ai';
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash,
      name: 'Admin',
      role: 'SUPER_ADMIN',
    },
  });
  console.log(`Admin user created: ${admin.email}`);

  // 2. Seed categories
  const categories = [
    { name: 'Genetics', slug: 'genetics', color: 'from-blue-500 to-cyan-500' },
    { name: 'Nutrition', slug: 'nutrition', color: 'from-green-500 to-emerald-500' },
    { name: 'Parenting', slug: 'parenting', color: 'from-purple-500 to-pink-500' },
    { name: 'Health Tips', slug: 'health-tips', color: 'from-red-500 to-orange-500' },
    { name: 'Product Updates', slug: 'product-updates', color: 'from-indigo-500 to-blue-500' },
    { name: 'Research', slug: 'research', color: 'from-teal-500 to-cyan-500' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log(`${categories.length} categories created`);

  // 3. Seed page content from existing hardcoded data
  const pageContents = [
    {
      page: 'home',
      section: 'stats',
      content: JSON.stringify([
        { value: 10000, suffix: '+', label: 'Families Trust Us' },
        { value: 450, suffix: '+', label: 'Genetic Traits' },
        { value: 50, suffix: '+', label: 'Partner Schools' },
        { value: 99, suffix: '%', label: 'Satisfaction Rate' },
      ]),
    },
    {
      page: 'home',
      section: 'features',
      content: JSON.stringify([
        { icon: 'Dna', title: 'Genetic Insights', description: 'Discover 450+ genetic traits across 34 health categories, from metabolism to cognitive abilities.', color: 'from-blue-500 to-cyan-500', href: '/solutions/families#genetics' },
        { icon: 'Brain', title: 'Brain Games', description: '10 scientifically designed cognitive games that adapt to your child\'s age and abilities.', color: 'from-purple-500 to-pink-500', href: '/solutions/families#games' },
        { icon: 'Camera', title: 'AI NutriScan', description: 'Snap a photo of any meal for instant, personalized nutritional analysis powered by AI.', color: 'from-green-500 to-emerald-500', href: '/solutions/families#nutrition' },
        { icon: 'HeartPulse', title: 'Health Tracking', description: 'Track 13 vital health metrics with beautiful visualizations and trend analysis.', color: 'from-red-500 to-orange-500', href: '/solutions/families#health' },
        { icon: 'Video', title: 'Telemedicine', description: 'Connect with verified pediatricians and genetic counselors via secure video calls.', color: 'from-indigo-500 to-blue-500', href: '/solutions/families#telemedicine' },
        { icon: 'Users', title: 'Family Dashboard', description: 'Manage multiple children from one account with comprehensive family health insights.', color: 'from-teal-500 to-cyan-500', href: '/solutions/families#family' },
      ]),
    },
    {
      page: 'home',
      section: 'testimonials',
      content: JSON.stringify([
        { quote: "GenExcel helped us understand why our son struggled with focus in school. The genetic insights led us to the right dietary changes and learning strategies. He's thriving now!", author: 'Priya M.', role: 'Parent of 9-year-old', location: 'Mumbai', avatar: '/images/testimonials/avatar-1.jpg' },
        { quote: "As a pediatrician, I recommend GenExcel to families who want to take a proactive approach to their child's health. The insights are clinically relevant and beautifully presented.", author: 'Dr. Rajesh K.', role: 'Pediatrician', location: 'Bangalore', avatar: '/images/testimonials/avatar-2.jpg' },
        { quote: "My daughter loves the brain games and is always excited to 'scan' her meals. It's made healthy eating fun and helped her take ownership of her health at just 7 years old.", author: 'Anita S.', role: 'Parent of 7-year-old', location: 'Delhi', avatar: '/images/testimonials/avatar-3.jpg' },
      ]),
    },
    {
      page: 'home',
      section: 'pricing',
      content: JSON.stringify([
        { name: 'Free', price: '0', period: 'forever', description: 'Get started with basic health tracking', features: ['Health metrics tracking (13 metrics)', '5 brain games per month', 'Basic nutrition logging', '1 child profile', 'Community support'], cta: 'Get Started Free', href: '/signup', popular: false },
        { name: 'Premium', price: '2,999', period: 'per year', description: 'Complete genetic insights for your child', features: ['Everything in Free', 'Genetic test kit included', '450+ genetic traits analyzed', 'Unlimited brain games', 'AI-powered NutriScan', 'Personalized recommendations', 'Priority email support'], cta: 'Order Genetic Test', href: '/order', popular: true },
        { name: 'Family', price: '7,999', period: 'per year', description: 'For families with multiple children', features: ['Everything in Premium', 'Up to 4 children', 'Family health comparisons', 'Combined genetic insights', 'Priority telemedicine booking', 'Dedicated family support'], cta: 'Get Family Plan', href: '/order?plan=family', popular: false },
      ]),
    },
  ];

  for (const pc of pageContents) {
    await prisma.pageContent.upsert({
      where: { page_section: { page: pc.page, section: pc.section } },
      update: { content: pc.content },
      create: pc,
    });
  }
  console.log(`${pageContents.length} page content sections seeded`);

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
