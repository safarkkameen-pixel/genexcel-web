import { prisma } from './prisma';
import {
  stats as defaultStats,
  features as defaultFeatures,
  testimonials as defaultTestimonials,
  pricingPlans as defaultPricingPlans,
} from '@/config/site';

// Fetch page content from DB with fallback to hardcoded defaults
export async function getPageContent<T>(
  page: string,
  section: string
): Promise<T> {
  try {
    const record = await prisma.pageContent.findUnique({
      where: { page_section: { page, section } },
    });

    if (record && record.isActive) {
      return JSON.parse(record.content) as T;
    }
  } catch (error) {
    console.error(`Error fetching content for ${page}/${section}:`, error);
  }

  // Fallback to hardcoded defaults
  return getDefaultContent(page, section) as T;
}

function getDefaultContent(page: string, section: string): unknown {
  const defaults: Record<string, Record<string, unknown>> = {
    home: {
      stats: defaultStats,
      features: defaultFeatures,
      testimonials: defaultTestimonials,
      pricing: defaultPricingPlans,
    },
  };
  return defaults[page]?.[section] ?? null;
}

// Public blog queries
export async function getPublishedPosts(options: {
  page?: number;
  limit?: number;
  categorySlug?: string;
}) {
  const { page = 1, limit = 12, categorySlug } = options;

  const where: Record<string, unknown> = { status: 'PUBLISHED' };
  if (categorySlug) {
    where.category = { slug: categorySlug };
  }

  const [posts, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      include: {
        author: { select: { name: true } },
        category: { select: { name: true, slug: true } },
      },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.blogPost.count({ where }),
  ]);

  return {
    posts,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: {
      author: { select: { name: true } },
      category: { select: { name: true, slug: true } },
      tags: { include: { tag: true } },
    },
  });

  if (!post || post.status !== 'PUBLISHED') return null;

  // Increment view count
  await prisma.blogPost.update({
    where: { id: post.id },
    data: { viewCount: { increment: 1 } },
  });

  return post;
}
