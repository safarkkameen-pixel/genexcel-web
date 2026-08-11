import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { BlogPostForm } from '@/components/admin/BlogPostForm';

export default async function EditBlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const [post, categories] = await Promise.all([
    prisma.blogPost.findUnique({
      where: { id: params.id },
      include: {
        tags: { include: { tag: true } },
      },
    }),
    prisma.category.findMany({ orderBy: { name: 'asc' } }),
  ]);

  if (!post) notFound();

  return (
    <AdminShell title="Edit Post">
      <BlogPostForm post={post} categories={categories} />
    </AdminShell>
  );
}
