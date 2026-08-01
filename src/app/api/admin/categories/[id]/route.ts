import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

// PUT /api/admin/categories/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { name, description, color } = await req.json();
  const slug = slugify(name, { lower: true, strict: true });

  const category = await prisma.category.update({
    where: { id: params.id },
    data: { name, slug, description, color },
  });

  return NextResponse.json({ category });
}

// DELETE /api/admin/categories/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await prisma.category.delete({ where: { id: params.id } });

  return NextResponse.json({ success: true });
}
