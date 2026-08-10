import type { Metadata } from 'next';
import TrustPage from './TrustClient';

export const metadata: Metadata = {
  title: 'Trust & Privacy',
  description: "How GenExcel protects children's genetic data: anonymous sample codes, AI that stays in India, layered consent, and child-safety rules built into Helix.",
};

export default function Page() {
  return <TrustPage />;
}
