import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/admin/blog/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
    include: {
      author: { select: { name: true, email: true } },
      category: true,
      tags: { include: { tag: true } },
    },
  });

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ post });
}

// PUT /api/admin/blog/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const {
    title,
    slug,
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

  // Check slug uniqueness (exclude current post)
  if (slug) {
    const existing = await prisma.blogPost.findFirst({
      where: { slug, id: { not: params.id } },
    });
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }
  }

  // Get current post to check status change
  const currentPost = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!currentPost) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  // Handle tag updates
  if (tagIds !== undefined) {
    await prisma.tagsOnPosts.deleteMany({ where: { postId: params.id } });
  }

  const post = await prisma.blogPost.update({
    where: { id: params.id },
    data: {
      title,
      slug,
      content: content
        ? typeof content === 'string'
          ? content
          : JSON.stringify(content)
        : undefined,
      contentHtml,
      excerpt,
      featuredImage,
      status,
      publishedAt:
        status === 'PUBLISHED' && currentPost.status !== 'PUBLISHED'
          ? new Date()
          : undefined,
      categoryId: categoryId !== undefined ? categoryId || null : undefined,
      metaTitle,
      metaDescription,
      ogImage,
      isFeatured,
      tags:
        tagIds !== undefined
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

  return NextResponse.json({ post });
}

// DELETE /api/admin/blog/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await prisma.tagsOnPosts.deleteMany({ where: { postId: params.id } });
  await prisma.blogPost.delete({ where: { id: params.id } });

  return NextResponse.json({ success: true });
}
