import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { BlogListContent } from '@/components/admin/BlogListContent';

export default async function BlogListPage() {
  const [posts, categories] = await Promise.all([
    prisma.blogPost.findMany({
      include: {
        author: { select: { name: true } },
        category: { select: { name: true, slug: true } },
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.category.findMany({ orderBy: { name: 'asc' } }),
  ]);

  return (
    <AdminShell title="Blog Posts">
      <BlogListContent posts={posts} categories={categories} />
    </AdminShell>
  );
}
