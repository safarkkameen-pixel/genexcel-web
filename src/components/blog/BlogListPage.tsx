'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageHero, GradientText } from '@/components/ui/PageHero';

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
      <PageHero
        icon={Newspaper}
        eyebrow="Blog"
        title={<>Insights &amp; <GradientText>Updates</GradientText></>}
        subtitle="Expert articles on pediatric health, genetics, nutrition, and child wellness."
      />

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/blog"
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                !activeCategory
                  ? 'bg-gradient-to-br from-primary-600 to-secondary-500 text-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.06] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/20 dark:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#C7D2E5] dark:hover:bg-transparent dark:hover:bg-gradient-to-br dark:hover:from-white/[.16] dark:hover:to-white/[.06] dark:hover:backdrop-blur-2xl dark:hover:backdrop-saturate-150 dark:hover:text-white'
              )}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === cat.slug
                    ? 'bg-gradient-to-br from-primary-600 to-secondary-500 text-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.06] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/20 dark:text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#C7D2E5] dark:hover:bg-transparent dark:hover:bg-gradient-to-br dark:hover:from-white/[.16] dark:hover:to-white/[.06] dark:hover:backdrop-blur-2xl dark:hover:backdrop-saturate-150 dark:hover:text-white'
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
                    className={cn(
                      'group block rounded-3xl overflow-hidden transition-all duration-300 ease-out',
                      'bg-white border border-slate-200 shadow-glass',
                      'dark:bg-transparent dark:bg-gradient-to-br dark:from-white/10 dark:to-white/[.03] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/[.15] dark:shadow-none',
                      'hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/[.34]'
                    )}
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden">
                      {post.featuredImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Tag className="w-12 h-12 text-cyan-500/30" />
                        </div>
                      )}
                      {post.category && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/80 dark:backdrop-blur-md text-xs font-medium rounded-full text-cyan-700 dark:text-cyan-300">
                          {post.category.name}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="font-display font-light text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 mb-2">
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
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
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
                      'w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200',
                      page === currentPage
                        ? 'bg-gradient-to-br from-primary-600 to-secondary-500 text-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.06] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border dark:border-white/20 dark:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#C7D2E5] dark:hover:bg-transparent dark:hover:bg-gradient-to-br dark:hover:from-white/[.16] dark:hover:to-white/[.06] dark:hover:backdrop-blur-2xl dark:hover:backdrop-saturate-150 dark:hover:text-white'
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
