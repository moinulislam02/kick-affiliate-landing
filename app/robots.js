// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://kickaffiliate.com/sitemap.xml',
    host: 'https://kickaffiliate.com',
  };
}
