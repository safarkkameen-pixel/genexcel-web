import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/admin/pages/[page]/[section]
export async function GET(
  req: NextRequest,
  { params }: { params: { page: string; section: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const content = await prisma.pageContent.findUnique({
    where: { page_section: { page: params.page, section: params.section } },
  });

  if (!content) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ content });
}

// PUT /api/admin/pages/[page]/[section]
export async function PUT(
  req: NextRequest,
  { params }: { params: { page: string; section: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { content } = await req.json();

  const record = await prisma.pageContent.upsert({
    where: { page_section: { page: params.page, section: params.section } },
    update: {
      content: typeof content === 'string' ? content : JSON.stringify(content),
      version: { increment: 1 },
    },
    create: {
      page: params.page,
      section: params.section,
      content: typeof content === 'string' ? content : JSON.stringify(content),
    },
  });

  return NextResponse.json({ content: record });
}
