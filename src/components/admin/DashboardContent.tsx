'use client';

import Link from 'next/link';
import {
  FileText,
  Eye,
  ImageIcon,
  FolderOpen,
  PlusCircle,
  ArrowRight,
  TrendingUp,
  Edit,
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DashboardStats {
  postCount: number;
  publishedCount: number;
  draftCount: number;
  categoryCount: number;
  mediaCount: number;
  totalViews: number;
  recentPosts: Array<{
    id: string;
    title: string;
    status: string;
    createdAt: Date;
    viewCount: number;
    author: { name: string };
    category: { name: string; slug: string } | null;
  }>;
}

const statCards = [
  { key: 'postCount', label: 'Total Posts', icon: FileText, color: 'from-blue-500 to-cyan-500' },
  { key: 'totalViews', label: 'Total Views', icon: Eye, color: 'from-purple-500 to-pink-500' },
  { key: 'mediaCount', label: 'Media Files', icon: ImageIcon, color: 'from-green-500 to-emerald-500' },
  { key: 'categoryCount', label: 'Categories', icon: FolderOpen, color: 'from-orange-500 to-red-500' },
] as const;

export function DashboardContent({ stats }: { stats: DashboardStats }) {
  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div
            key={card.key}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.label}
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {stats[card.key].toLocaleString()}
                </p>
              </div>
              <div
                className={cn(
                  'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center',
                  card.color
                )}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-medium">
                {stats.publishedCount}
              </span>
              <span className="text-slate-400">published</span>
              <span className="text-slate-300 dark:text-slate-600 mx-1">
                |
              </span>
              <span className="text-amber-500 font-medium">
                {stats.draftCount}
              </span>
              <span className="text-slate-400">drafts</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl hover:opacity-90 transition-opacity"
        >
          <PlusCircle className="w-5 h-5" />
          <span className="font-medium">New Blog Post</span>
          <ArrowRight className="w-4 h-4 ml-auto" />
        </Link>
        <Link
          href="/admin/pages"
          className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-500 transition-colors"
        >
          <Edit className="w-5 h-5 text-primary-500" />
          <span className="font-medium text-slate-900 dark:text-white">
            Edit Pages
          </span>
          <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
        </Link>
        <Link
          href="/admin/media"
          className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-500 transition-colors"
        >
          <ImageIcon className="w-5 h-5 text-primary-500" />
          <span className="font-medium text-slate-900 dark:text-white">
            Media Library
          </span>
          <ArrowRight className="w-4 h-4 ml-auto text-slate-400" />
        </Link>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Posts
          </h2>
          <Link
            href="/admin/blog"
            className="text-sm text-primary-500 hover:text-primary-600 font-medium"
          >
            View All
          </Link>
        </div>
        {stats.recentPosts.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-slate-500 dark:text-slate-400">
              No blog posts yet.
            </p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 mt-3 text-primary-500 hover:text-primary-600 font-medium text-sm"
            >
              <PlusCircle className="w-4 h-4" />
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {stats.recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="text-sm font-medium text-slate-900 dark:text-white hover:text-primary-500 truncate block"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-400">
                      {post.author.name}
                    </span>
                    {post.category && (
                      <>
                        <span className="text-xs text-slate-300">|</span>
                        <span className="text-xs text-slate-400">
                          {post.category.name}
                        </span>
                      </>
                    )}
                    <span className="text-xs text-slate-300">|</span>
                    <span className="text-xs text-slate-400">
                      {format(new Date(post.createdAt), 'MMM d, yyyy')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Eye className="w-3 h-3" />
                    {post.viewCount}
                  </span>
                  <span
                    className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      post.status === 'PUBLISHED'
                        ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
                        : post.status === 'DRAFT'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-600 dark:text-slate-300'
                    )}
                  >
                    {post.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
