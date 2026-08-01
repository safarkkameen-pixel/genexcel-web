import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/admin/media
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const folder = searchParams.get('folder');
  const search = searchParams.get('search');

  const where: Record<string, unknown> = {};
  if (folder && folder !== 'all') where.folder = folder;
  if (search) where.filename = { contains: search };

  const media = await prisma.media.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ media });
}

// POST /api/admin/media - Add media by URL
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { filename, url, mimeType, size, width, height, altText, folder } =
    await req.json();

  const media = await prisma.media.create({
    data: {
      filename: filename || 'image',
      url,
      key: `manual-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      mimeType: mimeType || 'image/jpeg',
      size: size || 0,
      width,
      height,
      altText,
      folder: folder || 'general',
    },
  });

  return NextResponse.json({ media }, { status: 201 });
}
