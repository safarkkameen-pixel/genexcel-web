import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { BlogPostForm } from '@/components/admin/BlogPostForm';

export default async function NewBlogPostPage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' },
  });

  return (
    <AdminShell title="New Post">
      <BlogPostForm categories={categories} />
    </AdminShell>
  );
}
