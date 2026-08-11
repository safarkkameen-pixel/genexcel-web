import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

// GET /api/admin/tags
export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const tags = await prisma.tag.findMany({
    include: { _count: { select: { posts: true } } },
    orderBy: { name: 'asc' },
  });

  return NextResponse.json({ tags });
}

// POST /api/admin/tags
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { name } = await req.json();
  const slug = slugify(name, { lower: true, strict: true });

  const existing = await prisma.tag.findUnique({ where: { slug } });
  if (existing) {
    return NextResponse.json({ tag: existing });
  }

  const tag = await prisma.tag.create({
    data: { name, slug },
  });

  return NextResponse.json({ tag }, { status: 201 });
}
