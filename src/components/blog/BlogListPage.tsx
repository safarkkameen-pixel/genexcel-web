'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImage: string | null;
  publishedAt: Date | null;
  author: { name: string };
  category: { name: string; slug: string } | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export function BlogListPage({
  posts,
  categories,
  currentPage,
  totalPages,
  activeCategory,
}: {
  posts: Post[];
  categories: Category[];
  currentPage: number;
  totalPages: number;
  activeCategory?: string;
}) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Insights & Updates
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Expert articles on pediatric health, genetics, nutrition, and child
              wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/blog"
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                !activeCategory
                  ? 'bg-primary-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === cat.slug
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-500">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 relative overflow-hidden">
                      {post.featuredImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Tag className="w-12 h-12 text-primary-500/30" />
                        </div>
                      )}
                      {post.category && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-xs font-medium rounded-full text-primary-600 dark:text-primary-400">
                          {post.category.name}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author.name}
                          </span>
                          {post.publishedAt && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {format(
                                new Date(post.publishedAt),
                                'MMM d, yyyy'
                              )}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={`/blog?page=${page}${
                      activeCategory ? `&category=${activeCategory}` : ''
                    }`}
                    className={cn(
                      'w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors',
                      page === currentPage
                        ? 'bg-primary-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    )}
                  >
                    {page}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
