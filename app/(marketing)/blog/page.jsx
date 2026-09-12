// app/(marketing)/blog/page.jsx
import React from 'react';
import BlogListClient from './BlogListClient';
import { blogPosts as fallbackPosts, blogCategories as fallbackCategories } from '@/data/blogData';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog & Perspectives | Shopify Affiliate Marketing Playbooks',
  description:
    'Essays, architectural breakdowns, unit economic blueprints, and growth playbooks for modern Shopify DTC brands scaling creator and affiliate channels.',
  alternates: {
    canonical: 'https://kick-affiliate.techprob.org/blog',
  },
  keywords: [
    'Shopify affiliate blog',
    'influencer marketing strategies Shopify',
    'affiliate program unit economics',
    'Shopify referral guides',
    'creator attribution playbook',
  ],
  openGraph: {
    title: 'Blog & Perspectives | KickAffiliate - Shopify Affiliate Platform',
    description:
      'Essays, architectural breakdowns, unit economic blueprints, and growth playbooks for modern Shopify DTC brands.',
    url: 'https://kick-affiliate.techprob.org/blog',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Blog & Engineering Perspectives',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Perspectives | KickAffiliate',
    description:
      'Essays, architectural breakdowns, unit economic blueprints, and growth playbooks for modern Shopify DTC brands.',
    images: ['/website-hero.png'],
  },
};

async function getBlogData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_PLATFORM_ADMIN_URL || 'http://localhost:3004';
    const res = await fetch(`${apiUrl}/api/blogs?status=published`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.posts && data.posts.length > 0) {
        return {
          posts: data.posts,
          categories: data.categories || fallbackCategories,
        };
      }
    }
  } catch (err) {
    console.warn('Could not fetch live blog posts, falling back to static data:', err.message);
  }

  return {
    posts: fallbackPosts,
    categories: fallbackCategories,
  };
}

export default async function BlogPage() {
  const { posts, categories } = await getBlogData();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kick-affiliate.techprob.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://kick-affiliate.techprob.org/blog',
      },
    ],
  };

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'KickAffiliate Journal & Engineering Perspectives',
    description:
      'Essays, architectural breakdowns, and growth playbooks for modern Shopify DTC brands scaling affiliate and creator programs.',
    url: 'https://kick-affiliate.techprob.org/blog',
    publisher: {
      '@type': 'Organization',
      name: 'KickAffiliate',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kick-affiliate.techprob.org/kick-logo-light.png',
      },
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.subtitle || post.excerpt || '',
      url: `https://kick-affiliate.techprob.org/blog/${post.slug}`,
      datePublished: post.publishedAt || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: post.author?.name || post.authorName || 'KickAffiliate Team',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogListClient initialPosts={posts} initialCategories={categories} />
    </>
  );
}
