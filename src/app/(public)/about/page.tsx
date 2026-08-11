import type { Metadata } from 'next';
import AboutPage from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'GenExcel is building a genomics-led learning and wellness platform for Indian families, where a genetic report shapes an AI tutor, a diet plan and a fitness coach.',
};

export default function Page() {
  return <AboutPage />;
}
