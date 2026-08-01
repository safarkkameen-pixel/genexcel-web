import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// PUT /api/admin/media/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { altText, caption } = await req.json();

  const media = await prisma.media.update({
    where: { id: params.id },
    data: { altText, caption },
  });

  return NextResponse.json({ media });
}

// DELETE /api/admin/media/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await prisma.media.delete({ where: { id: params.id } });

  return NextResponse.json({ success: true });
}
