'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { TextReveal } from '@/components/ui/TextReveal';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Target,
  Award,
  Linkedin,
  Twitter,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Child Safety First',
    description: 'Everything we build prioritizes the safety and well-being of children. Age-appropriate content, strict privacy controls, and clinical oversight.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Scientific Rigor',
    description: 'Our insights are grounded in peer-reviewed research and validated by our Scientific Advisory Board. We never overstate what genetics can tell us.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Data Privacy',
    description: "Your family's genetic data is sacred. We use industry-leading encryption, comply with DPDP regulations, and never share data without explicit consent.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Family Empowerment',
    description: "We believe parents should have access to the best information about their child's health. We make complex science accessible and actionable.",
    color: 'from-green-500 to-emerald-500',
  },
];

const team = [
  {
    name: 'Dr. Priya Sharma',
    role: 'CEO & Co-Founder',
    bio: 'Former pediatric geneticist at AIIMS with 15+ years of experience in genomic medicine.',
    image: '/images/team/priya.jpg',
  },
  {
    name: 'Rajesh Kumar',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer, specialized in AI/ML and healthcare technology.',
    image: '/images/team/rajesh.jpg',
  },
  {
    name: 'Dr. Anita Patel',
    role: 'Chief Medical Officer',
    bio: 'Board-certified pediatrician with expertise in personalized medicine.',
    image: '/images/team/anita.jpg',
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Product',
    bio: 'Former product lead at Practo, passionate about child health technology.',
    image: '/images/team/vikram.jpg',
  },
];

const milestones = [
  { year: '2023', title: 'Founded', description: 'GenExcel founded with a mission to transform pediatric health' },
  { year: '2023', title: 'Seed Funding', description: 'Raised $2M seed round from leading healthcare VCs' },
  { year: '2024', title: 'Platform Launch', description: 'Launched mobile app and genetic testing service' },
  { year: '2024', title: 'School Partnerships', description: 'Partnered with 50+ schools across India' },
  { year: '2025', title: '10K Families', description: 'Reached milestone of 10,000+ families on platform' },
];

export default function AboutPage() {
  useSmoothScroll();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />

        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gradient" className="mb-6">
                <Target className="h-3 w-3 mr-1" />
                Our Mission
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              <TextReveal>Building the Future of</TextReveal>
              <br />
              <span className="gradient-text">
                <TextReveal delay={0.3}>Pediatric Health</TextReveal>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              To transform pediatric healthcare by making personalized, genetics-informed health guidance accessible to every family. We believe every child deserves health insights tailored to their unique genetic blueprint.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="default" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                From a Simple Question to a <span className="gradient-text">Revolution</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  GenExcel was born from a simple question: What if we could understand each child&apos;s unique genetic makeup and use that knowledge to help them thrive?
                </p>
                <p>
                  Founded in 2023 by a team of geneticists, pediatricians, and technologists, GenExcel combines cutting-edge genetic science with AI-powered insights to create the most comprehensive pediatric health platform in the world.
                </p>
                <p>
                  We believe every child deserves personalized health guidance based on who they truly are—not generic advice meant for everyone. Our mission is to empower families with the knowledge and tools they need to unlock their child&apos;s full potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline */}
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{milestone.year}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-800 shadow" />
                      {index !== milestones.length - 1 && (
                        <div className="absolute top-6 -left-[2px] w-0.5 h-full bg-slate-200 dark:bg-slate-700" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-slate-900 dark:text-white">{milestone.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-8 h-full" glow>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg`}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="gradient" className="mb-4">
              <Award className="h-3 w-3 mr-1" />
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Meet the <span className="gradient-text">Visionaries</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A passionate team of experts dedicated to transforming pediatric healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-primary-100 dark:hover:border-primary-800 transition-all duration-300 text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
