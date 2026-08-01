import { AdminShell } from '@/components/admin/AdminShell';
import { PagesListContent } from '@/components/admin/PagesListContent';

const managedPages = [
  {
    id: 'home',
    name: 'Homepage',
    description: 'Hero, stats, features, testimonials, pricing sections',
    sections: ['stats', 'features', 'testimonials', 'pricing'],
  },
  {
    id: 'about',
    name: 'About',
    description: 'Company story, values, team, milestones',
    sections: ['hero', 'story', 'values', 'team'],
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Research methodology, advisors, publications',
    sections: ['hero', 'stats', 'categories', 'methodology'],
  },
  {
    id: 'pricing',
    name: 'Pricing',
    description: 'Pricing plans, FAQs',
    sections: ['plans', 'faqs'],
  },
  {
    id: 'contact',
    name: 'Contact',
    description: 'Contact info, departments',
    sections: ['contactInfo', 'departments'],
  },
];

export default function PagesListPage() {
  return (
    <AdminShell title="Page Management">
      <PagesListContent pages={managedPages} />
    </AdminShell>
  );
}
