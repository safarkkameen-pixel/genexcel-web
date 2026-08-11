import { prisma } from '@/lib/prisma';
import { AdminShell } from '@/components/admin/AdminShell';
import { PageSectionEditor } from '@/components/admin/PageSectionEditor';
import type { PageContent } from '@prisma/client';

const pageNames: Record<string, string> = {
  home: 'Homepage',
  about: 'About',
  science: 'Science',
  pricing: 'Pricing',
  contact: 'Contact',
};

export default async function EditPagePage({
  params,
}: {
  params: { page: string };
}) {
  const sections = await prisma.pageContent.findMany({
    where: { page: params.page },
    orderBy: { order: 'asc' },
  });

  const pageName = pageNames[params.page] || params.page;

  return (
    <AdminShell title={`Edit ${pageName}`}>
      <PageSectionEditor
        page={params.page}
        sections={sections.map((s: PageContent) => ({
          id: s.id,
          section: s.section,
          content: s.content,
          updatedAt: s.updatedAt,
        }))}
      />
    </AdminShell>
  );
}
