'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  contentHtml: string | null;
  content: string;
  featuredImage: string | null;
  publishedAt: Date | null;
  viewCount: number;
  author: { name: string };
  category: { name: string; slug: string } | null;
  tags: Array<{ tag: { name: string; slug: string } }>;
}

export function BlogPostDetail({ post }: { post: Post }) {
  const htmlContent = post.contentHtml || '';

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative z-[1]" style={{ padding: 'clamp(112px,16vh,168px) 24px 48px' }}>
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-[#8B9AB5] hover:text-cyan-600 dark:hover:text-cyan-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {post.category && (
              <span className="inline-flex items-center py-[9px] px-4 mb-4 rounded-full border border-slate-200 bg-white shadow-glass text-xs font-semibold tracking-[0.02em] text-slate-600 dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[.16] dark:to-white/[.05] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-white/20 dark:shadow-none dark:text-[#C7D2E5]">
                {post.category.name}
              </span>
            )}

            <h1
              className="font-display font-light text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.08] mb-6 text-balance"
              style={{ fontSize: 'clamp(30px,4.6vw,52px)' }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-[#8B9AB5]">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author.name}
              </span>
              {post.publishedAt && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="container-custom max-w-4xl -mt-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div
            className="prose prose-lg prose-slate dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:font-light prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-white/[.15]">
              <Tag className="w-4 h-4 text-slate-400 dark:text-[#8B9AB5]" />
              {post.tags.map(({ tag }) => (
                <span
                  key={tag.slug}
                  className="px-3 py-1 bg-slate-100 text-sm text-slate-600 rounded-full dark:bg-transparent dark:bg-gradient-to-br dark:from-white/10 dark:to-white/[.03] dark:backdrop-blur-xl dark:border dark:border-white/[.15] dark:text-[#C7D2E5]"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
