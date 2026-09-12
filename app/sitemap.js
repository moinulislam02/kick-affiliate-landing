// app/sitemap.js
import { featureData } from '@/data/featureData';
import { blogPosts as fallbackPosts } from '@/data/blogData';

const BASE_URL = 'https://kick-affiliate.techprob.org';

async function getBlogSlugs() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_PLATFORM_ADMIN_URL || 'http://localhost:3004';
    const res = await fetch(`${apiUrl}/api/blogs?status=published`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.posts && data.posts.length > 0) {
        return data.posts.map((post) => ({
          slug: post.slug,
          updatedAt: post.updatedAt || post.publishedAt || new Date().toISOString(),
        }));
      }
    }
  } catch (err) {
    console.warn('[Sitemap] Could not fetch live blog slugs, using fallback dataset:', err.message);
  }

  return fallbackPosts.map((post) => ({
    slug: post.slug,
    updatedAt: post.publishedAt || new Date().toISOString(),
  }));
}

export default async function sitemap() {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    {
      url: `${BASE_URL}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // Feature pages
  const featureRoutes = Object.keys(featureData).map((slug) => ({
    url: `${BASE_URL}/features/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Competitor comparison pages
  const competitorRoutes = ['vs-goaffpro', 'vs-uppromote', 'vs-refersion', 'vs-bixgrow'].map(
    (comp) => ({
      url: `${BASE_URL}/compare/${comp}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  // Dynamic Blog Posts
  const blogSlugs = await getBlogSlugs();
  const blogRoutes = blogSlugs.map((item) => ({
    url: `${BASE_URL}/blog/${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...featureRoutes, ...competitorRoutes, ...blogRoutes];
}
