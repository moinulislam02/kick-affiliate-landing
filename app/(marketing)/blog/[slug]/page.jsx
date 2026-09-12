// app/(marketing)/blog/[slug]/page.jsx
import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogData';
import BlogPostClient from './BlogPostClient';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

const PLATFORM_ADMIN_URL =
  process.env.NEXT_PUBLIC_PLATFORM_ADMIN_URL ||
  process.env.PLATFORM_ADMIN_URL ||
  'http://localhost:3004';

async function fetchPostBySlug(slug) {
  try {
    const res = await fetch(`${PLATFORM_ADMIN_URL}/api/blogs/${slug}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.post) {
        return {
          post: data.post,
          relatedPosts: data.relatedPosts || [],
        };
      }
    }
  } catch (err) {
    console.warn(`[Blog] Failed to fetch article "${slug}" from admin API, falling back to static dataset:`, err.message);
  }

  // Fallback to static blog data
  const staticPost = blogPosts.find((p) => p.slug === slug);
  if (staticPost) {
    const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
    return {
      post: staticPost,
      relatedPosts: related,
    };
  }

  return null;
}

export async function generateMetadata({ params }) {
  const data = await fetchPostBySlug(params.slug);
  const post = data?.post;

  if (!post) {
    return {
      title: 'Article Not Found | KickAffiliate',
      description: 'The requested article could not be found.',
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.subtitle || post.excerpt || '';
  const authorName = post.author?.name || post.authorName || 'KickAffiliate Editorial Team';
  const imageUrl = post.image || 'https://kickaffiliate.com/website-hero.png';
  const publishedDate = post.publishedAt || post.createdAt || new Date().toISOString();
  const modifiedDate = post.updatedAt || publishedDate;

  return {
    title: `${title}`,
    description,
    alternates: {
      canonical: `https://kickaffiliate.com/blog/${post.slug}`,
    },
    keywords: [
      ...(post.tags || []),
      post.category || 'Shopify Affiliate Marketing',
      'KickAffiliate Journal',
      'Shopify DTC growth',
    ],
    openGraph: {
      title: `${title} | KickAffiliate`,
      description,
      url: `https://kickaffiliate.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: [authorName],
      section: post.category || 'Affiliate Strategy',
      tags: post.tags || ['Shopify', 'Affiliate Marketing'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | KickAffiliate`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const data = await fetchPostBySlug(params.slug);

  if (!data || !data.post) {
    return notFound();
  }

  const post = data.post;
  const authorName = post.author?.name || post.authorName || 'KickAffiliate Editorial Team';
  const authorAvatar = post.author?.avatar || 'https://kickaffiliate.com/kick-logo-light.png';
  const imageUrl = post.image || 'https://kickaffiliate.com/website-hero.png';
  const publishedDate = post.publishedAt || post.createdAt || new Date().toISOString();
  const modifiedDate = post.updatedAt || publishedDate;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kickaffiliate.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://kickaffiliate.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://kickaffiliate.com/blog/${post.slug}`,
      },
    ],
  };

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kickaffiliate.com/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.subtitle || post.excerpt || post.seoDescription || '',
    image: [imageUrl],
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: authorName,
      image: authorAvatar,
    },
    publisher: {
      '@type': 'Organization',
      name: 'KickAffiliate',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kickaffiliate.com/kick-logo-light.png',
      },
    },
    articleSection: post.category || 'Affiliate Strategy',
    keywords: post.tags?.join(', ') || 'Shopify, Affiliate Marketing',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <BlogPostClient post={data.post} relatedPosts={data.relatedPosts} />
    </>
  );
}
