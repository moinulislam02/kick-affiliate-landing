// app/(marketing)/page.jsx
import React from 'react';
import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Track Every Influencer Sale. Protect Every Commission.',
  description:
    'The affiliate marketing platform built for Shopify brands. Capture sales with zero-loss dual attribution (links + codes), reconcile refunds automatically, block self-referrals, and empower creators with white-label portals.',
  alternates: {
    canonical: 'https://kickaffiliate.com',
  },
  openGraph: {
    title: 'KickAffiliate | Track Every Influencer Sale. Protect Every Commission.',
    description:
      'The modern Shopify affiliate platform with zero-loss dual tracking, automated refund reconciliation, and white-label creator portals. 0% performance fees.',
    url: 'https://kickaffiliate.com',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Shopify Dashboard & Creator Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickAffiliate | Track Every Influencer Sale. Protect Every Commission.',
    description:
      'Shopify affiliate software with zero-loss dual attribution, automated refund reconciliation, and white-label creator portals.',
    images: ['/website-hero.png'],
  },
};

export default function MarketingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KickAffiliate',
    url: 'https://kickaffiliate.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://kickaffiliate.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
