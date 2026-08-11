import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/admin/pages - List all page content grouped by page
export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const contents = await prisma.pageContent.findMany({
    orderBy: [{ page: 'asc' }, { order: 'asc' }],
  });

  // Group by page
  const grouped: Record<string, typeof contents> = {};
  for (const content of contents) {
    if (!grouped[content.page]) grouped[content.page] = [];
    grouped[content.page].push(content);
  }

  return NextResponse.json({ pages: grouped });
}
