'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import slugify from 'slugify';
import { Loader2, Save, ArrowLeft, ImageIcon, X, FolderOpen, Upload, Link2 } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MediaPickerModal } from './MediaPickerModal';
import { adminFetch, AdminSessionExpiredError } from '@/lib/adminFetch';

const TipTapEditor = dynamic(
  () => import('./TipTapEditor').then((mod) => ({ default: mod.TipTapEditor })),
  { ssr: false, loading: () => <div className="h-96 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" /> }
);

const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']),
  categoryId: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  featuredImage: z.string().optional(),
});

type PostFormData = z.infer<typeof postSchema>;

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogPostFormProps {
  post?: {
    id: string;
    title: string;
    slug: string;
    content: string;
    contentHtml?: string | null;
    excerpt?: string | null;
    status: string;
    categoryId?: string | null;
    featuredImage?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
  categories: Category[];
}

export function BlogPostForm({ post, categories }: BlogPostFormProps) {
  const router = useRouter();
  const [content, setContent] = useState(post?.content || '');
  const [contentHtml, setContentHtml] = useState(post?.contentHtml || '');
  const isEditing = !!post;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      excerpt: post?.excerpt || '',
      status: (post?.status as PostFormData['status']) || 'DRAFT',
      categoryId: post?.categoryId || '',
      metaTitle: post?.metaTitle || '',
      metaDescription: post?.metaDescription || '',
      featuredImage: post?.featuredImage || '',
    },
  });

  const title = watch('title');
  const featuredImage = watch('featuredImage');
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await adminFetch('/api/admin/upload', { method: 'POST', body: formData });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Upload failed');
      }
      const data = await res.json();
      setValue('featuredImage', data.url);
      toast.success('Image uploaded!');
    } catch (err) {
      if (!(err instanceof AdminSessionExpiredError)) {
        toast.error(err instanceof Error ? err.message : 'Upload failed');
      }
    } finally {
      setUploading(false);
    }
  };

  // Auto-generate slug from title
  useEffect(() => {
    if (!isEditing && title) {
      setValue('slug', slugify(title, { lower: true, strict: true }));
    }
  }, [title, isEditing, setValue]);

  const onSubmit = async (data: PostFormData) => {
    try {
      const url = isEditing
        ? `/api/admin/blog/${post.id}`
        : '/api/admin/blog';

      const res = await adminFetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          content,
          contentHtml,
          categoryId: data.categoryId || null,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to save post');
      }

      toast.success(isEditing ? 'Post updated!' : 'Post created!');
      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      if (!(err instanceof AdminSessionExpiredError)) {
        toast.error(err instanceof Error ? err.message : 'Something went wrong');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/admin/blog"
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Posts
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm font-medium"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {isEditing ? 'Update Post' : 'Save Post'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <input
              {...register('title')}
              placeholder="Post title"
              className="w-full text-3xl font-bold bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-0 text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-600 pb-3"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
              Slug
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400">/blog/</span>
              <input
                {...register('slug')}
                className="flex-1 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
            )}
          </div>

          {/* Editor */}
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
              Content
            </label>
            <TipTapEditor
              content={content}
              onChange={(json, html) => {
                setContent(json);
                setContentHtml(html);
              }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish Settings */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Publish
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">
                  Status
                </label>
                <select
                  {...register('status')}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Category
            </h3>
            <select
              {...register('categoryId')}
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">No category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Featured Image */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Featured Image
            </h3>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(file);
                e.target.value = '';
              }}
            />
            {featuredImage ? (
              <div className="space-y-3">
                <div className="relative group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-600">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 bg-white/90 rounded-lg hover:bg-white"
                      title="Upload new image"
                    >
                      <Upload className="w-4 h-4 text-slate-700" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowMediaPicker(true)}
                      className="p-2 bg-white/90 rounded-lg hover:bg-white"
                      title="Choose from library"
                    >
                      <FolderOpen className="w-4 h-4 text-slate-700" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setValue('featuredImage', '')}
                      className="p-2 bg-white/90 rounded-lg hover:bg-white"
                      title="Remove image"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const file = e.dataTransfer.files?.[0];
                  if (file && file.type.startsWith('image/')) handleFileUpload(file);
                }}
                className="space-y-3"
              >
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="w-full h-32 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/10 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                      <span className="text-sm text-slate-500">Uploading...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-slate-400" />
                      <span className="text-sm text-slate-500">Click to upload or drag & drop</span>
                      <span className="text-xs text-slate-400">PNG, JPG, GIF, WebP (max 5MB)</span>
                    </>
                  )}
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowMediaPicker(true)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-sm text-slate-500 hover:text-primary-500 border border-slate-200 dark:border-slate-600 rounded-lg transition-colors"
                  >
                    <FolderOpen className="w-4 h-4" />
                    Media Library
                  </button>
                </div>
                <div className="relative flex items-center gap-2">
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-600" />
                  <span className="text-xs text-slate-400">or paste URL</span>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-600" />
                </div>
                <div className="flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="flex-1 px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const val = (e.target as HTMLInputElement).value.trim();
                        if (val) setValue('featuredImage', val);
                      }
                    }}
                    onBlur={(e) => {
                      const val = e.target.value.trim();
                      if (val) setValue('featuredImage', val);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <MediaPickerModal
            open={showMediaPicker}
            onClose={() => setShowMediaPicker(false)}
            onSelect={(url) => setValue('featuredImage', url)}
          />

          {/* Excerpt */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Excerpt
            </h3>
            <textarea
              {...register('excerpt')}
              rows={3}
              placeholder="Brief description of this post..."
              className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
          </div>

          {/* SEO */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              SEO
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-slate-500 mb-1">
                  Meta Title
                </label>
                <input
                  {...register('metaTitle')}
                  placeholder="SEO title"
                  className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">
                  Meta Description
                </label>
                <textarea
                  {...register('metaDescription')}
                  rows={2}
                  placeholder="SEO description"
                  className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
