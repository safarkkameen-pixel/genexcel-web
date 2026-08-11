import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

// GET /api/admin/blog - List blog posts
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const status = searchParams.get('status');
  const search = searchParams.get('search');
  const categoryId = searchParams.get('categoryId');

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (categoryId) where.categoryId = categoryId;
  if (search) {
    where.OR = [
      { title: { contains: search } },
      { excerpt: { contains: search } },
    ];
  }

  const [posts, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      include: {
        author: { select: { name: true } },
        category: { select: { name: true, slug: true } },
        tags: { include: { tag: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.blogPost.count({ where }),
  ]);

  return NextResponse.json({
    posts,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

// POST /api/admin/blog - Create blog post
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const {
    title,
    slug: customSlug,
    content,
    contentHtml,
    excerpt,
    featuredImage,
    status,
    categoryId,
    tagIds,
    metaTitle,
    metaDescription,
    ogImage,
    isFeatured,
  } = body;

  const slug = customSlug || slugify(title, { lower: true, strict: true });

  // Check slug uniqueness
  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (existing) {
    return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
  }

  const post = await prisma.blogPost.create({
    data: {
      title,
      slug,
      content: typeof content === 'string' ? content : JSON.stringify(content),
      contentHtml,
      excerpt,
      featuredImage,
      status: status || 'DRAFT',
      publishedAt: status === 'PUBLISHED' ? new Date() : null,
      categoryId: categoryId || null,
      authorId: (session.user as Record<string, unknown>).id as string,
      metaTitle,
      metaDescription,
      ogImage,
      isFeatured: isFeatured || false,
      tags: tagIds?.length
        ? {
            create: tagIds.map((tagId: string) => ({ tagId })),
          }
        : undefined,
    },
    include: {
      author: { select: { name: true } },
      category: true,
      tags: { include: { tag: true } },
    },
  });

  return NextResponse.json({ post }, { status: 201 });
}
