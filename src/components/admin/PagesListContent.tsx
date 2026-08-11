'use client';

import Link from 'next/link';
import { Layers, ArrowRight, Settings } from 'lucide-react';

interface ManagedPage {
  id: string;
  name: string;
  description: string;
  sections: string[];
}

export function PagesListContent({ pages }: { pages: ManagedPage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pages.map((page) => (
        <Link
          key={page.id}
          href={`/admin/pages/${page.id}`}
          className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-lg"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary-500 transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
            {page.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            {page.description}
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Settings className="w-3 h-3" />
            {page.sections.length} editable sections
          </div>
        </Link>
      ))}
    </div>
  );
}
