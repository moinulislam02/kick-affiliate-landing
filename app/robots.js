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
    sitemap: 'https://kick-affiliate.techprob.org/sitemap.xml',
    host: 'https://kick-affiliate.techprob.org',
  };
}
