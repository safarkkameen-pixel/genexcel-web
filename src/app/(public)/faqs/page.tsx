import type { Metadata } from 'next';
import FAQsPage from './FAQsClient';

export const metadata: Metadata = {
  title: 'FAQs',
  description: "Answers to common questions about GenExcel's genetic report, Helix the AI tutor, data privacy, and plans.",
};

export default function Page() {
  return <FAQsPage />;
}
