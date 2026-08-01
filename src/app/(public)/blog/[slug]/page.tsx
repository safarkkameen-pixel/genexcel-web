import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/content';
import { BlogPostDetail } from '@/components/blog/BlogPostDetail';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt || '',
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || '',
      images: post.ogImage || post.featuredImage
        ? [{ url: (post.ogImage || post.featuredImage)! }]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return <BlogPostDetail post={post} />;
}
