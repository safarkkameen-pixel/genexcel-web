import type { Metadata } from 'next';
import HealthcarePage from './HealthcareClient';

export const metadata: Metadata = {
  title: 'For Healthcare',
  description: "A genetic counsellor workspace, telehealth booking and consultations, and laboratory result verification — built for pediatric and genetics practices under India's DPDP Act.",
};

export default function Page() {
  return <HealthcarePage />;
}
