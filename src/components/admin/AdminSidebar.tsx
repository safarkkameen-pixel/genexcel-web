'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderOpen,
  Layers,
  Image,
  Settings,
  LogOut,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  {
    label: 'Blog',
    icon: FileText,
    children: [
      { label: 'All Posts', href: '/admin/blog' },
      { label: 'New Post', href: '/admin/blog/new', icon: PlusCircle },
      { label: 'Categories', href: '/admin/categories', icon: FolderOpen },
    ],
  },
  { label: 'Pages', href: '/admin/pages', icon: Layers },
  { label: 'Media', href: '/admin/media', icon: Image },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [openSections, setOpenSections] = useState<string[]>(['Blog']);

  const toggleSection = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen shrink-0">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold text-sm">
            G
          </div>
          <span className="text-lg font-semibold">GenExcel Admin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          if ('children' in item && item.children) {
            const isOpen = openSections.includes(item.label);
            const hasActiveChild = item.children.some((child) =>
              isActive(child.href)
            );

            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleSection(item.label)}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    hasActiveChild
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                          isActive(child.href)
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        )}
                      >
                        {child.icon && <child.icon className="w-4 h-4" />}
                        {!child.icon && <span className="w-4" />}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href!}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive(item.href!)
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* View Site Link */}
      <div className="px-4 py-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          View Site
        </Link>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center text-sm font-medium">
            {session?.user?.name?.[0] || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {session?.user?.name || 'Admin'}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {session?.user?.email}
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
