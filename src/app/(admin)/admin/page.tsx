import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { DashboardContent } from '@/components/admin/DashboardContent';

async function getDashboardStats() {
  const [postCount, publishedCount, draftCount, categoryCount, mediaCount] =
    await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
      prisma.blogPost.count({ where: { status: 'DRAFT' } }),
      prisma.category.count(),
      prisma.media.count(),
    ]);

  const posts = await prisma.blogPost.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      author: { select: { name: true } },
      category: { select: { name: true, slug: true } },
    },
  });

  const totalViews = await prisma.blogPost.aggregate({
    _sum: { viewCount: true },
  });

  return {
    postCount,
    publishedCount,
    draftCount,
    categoryCount,
    mediaCount,
    totalViews: totalViews._sum.viewCount || 0,
    recentPosts: posts,
  };
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <AdminShell title="Dashboard">
      <DashboardContent stats={stats} />
    </AdminShell>
  );
}
