'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu } from 'lucide-react';

interface AdminTopbarProps {
  title: string;
  onMenuToggle?: () => void;
}

export function AdminTopbar({ title, onMenuToggle }: AdminTopbarProps) {
  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
