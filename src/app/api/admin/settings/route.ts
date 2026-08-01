import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/admin/settings
export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const settings = await prisma.pageContent.findUnique({
    where: { page_section: { page: '_global', section: 'siteConfig' } },
  });

  return NextResponse.json({
    settings: settings ? JSON.parse(settings.content) : null,
  });
}

// PUT /api/admin/settings
export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();

  await prisma.pageContent.upsert({
    where: { page_section: { page: '_global', section: 'siteConfig' } },
    update: { content: JSON.stringify(body) },
    create: {
      page: '_global',
      section: 'siteConfig',
      content: JSON.stringify(body),
    },
  });

  return NextResponse.json({ success: true });
}
