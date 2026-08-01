import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { CategoryManager } from '@/components/admin/CategoryManager';

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
    orderBy: { name: 'asc' },
  });

  return (
    <AdminShell title="Categories">
      <CategoryManager categories={categories} />
    </AdminShell>
  );
}
