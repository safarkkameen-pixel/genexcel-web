import { AdminProviders } from '@/components/admin/AdminProviders';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Panel | GenExcel',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProviders>{children}</AdminProviders>;
}
