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
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {post.category && (
              <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full mb-4">
                {post.category.name}
              </span>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-slate-400">
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
              prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <Tag className="w-4 h-4 text-slate-400" />
              {post.tags.map(({ tag }) => (
                <span
                  key={tag.slug}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-400 rounded-full"
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
