import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { AquaField } from '@/components/effects/AquaField';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <AquaField />
      <Header />
      {children}
      <Footer />
    </>
  );
}
