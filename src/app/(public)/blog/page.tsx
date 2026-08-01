import { Metadata } from 'next';
import { getPublishedPosts } from '@/lib/content';
import { prisma } from '@/lib/prisma';
import { BlogListPage } from '@/components/blog/BlogListPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore the latest insights on pediatric health, genetics, nutrition, and child wellness from GenExcel experts.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  const page = parseInt(searchParams.page || '1');

  let posts: Awaited<ReturnType<typeof getPublishedPosts>>['posts'] = [];
  let totalPages = 1;
  let categories: Awaited<ReturnType<typeof prisma.category.findMany>> = [];

  try {
    const result = await getPublishedPosts({
      page,
      limit: 12,
      categorySlug: searchParams.category,
    });
    posts = result.posts;
    totalPages = result.totalPages;
    categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
  } catch {
    // DB not available (e.g. Cloud Run without persistent storage)
  }

  return (
    <BlogListPage
      posts={posts}
      categories={categories}
      currentPage={page}
      totalPages={totalPages}
      activeCategory={searchParams.category}
    />
  );
}
