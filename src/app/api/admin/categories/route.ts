import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

// GET /api/admin/categories
export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
    orderBy: { name: 'asc' },
  });

  return NextResponse.json({ categories });
}

// POST /api/admin/categories
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { name, description, color } = await req.json();
  const slug = slugify(name, { lower: true, strict: true });

  const existing = await prisma.category.findUnique({ where: { slug } });
  if (existing) {
    return NextResponse.json({ error: 'Category already exists' }, { status: 400 });
  }

  const category = await prisma.category.create({
    data: { name, slug, description, color },
  });

  return NextResponse.json({ category }, { status: 201 });
}
