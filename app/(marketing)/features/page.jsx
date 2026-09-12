import React from 'react';
import FeaturesPageClient from './FeaturesPageClient';

export const metadata = {
  title: 'Shopify Affiliate App Features & Architecture',
  description:
    'Discover KickAffiliate platform capabilities: zero-loss dual attribution, automated refund deduction, multi-tier commission engine, white-label creator portals, and enterprise anti-fraud protection for Shopify.',
  alternates: {
    canonical: 'https://kickaffiliate.com/features',
  },
  keywords: [
    'Shopify affiliate features',
    'dual tracking affiliate Shopify',
    'multi tier commission engine',
    'Shopify creator portal',
    'automated refund deduction affiliate',
    'Shopify affiliate anti-fraud',
  ],
  openGraph: {
    title: 'KickAffiliate Platform Features & Technical Architecture',
    description:
      'Zero-loss dual tracking, multi-tier commissions, white-label creator portals, and automated refund reconciliation for high-growth Shopify merchants.',
    url: 'https://kickaffiliate.com/features',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Feature Suite for Shopify',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickAffiliate Platform Features & Technical Architecture',
    description:
      'Zero-loss dual tracking, multi-tier commissions, white-label creator portals, and automated refund reconciliation for high-growth Shopify merchants.',
    images: ['/website-hero.png'],
  },
};

export default function FeaturesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'KickAffiliate Core Features',
    description: 'Overview of enterprise affiliate infrastructure for Shopify merchants.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Zero-Loss Dual Attribution',
        url: 'https://kickaffiliate.com/features/dual-attribution',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Dynamic Tiered Commission Engine',
        url: 'https://kickaffiliate.com/features/commission-engine',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'White-Label Creator Portal',
        url: 'https://kickaffiliate.com/features/creator-portal',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Automated Refund & Payout Reconciliation',
        url: 'https://kickaffiliate.com/features/payout-reconciliation',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Enterprise Anti-Fraud & Self-Referral Shield',
        url: 'https://kickaffiliate.com/features/anti-fraud',
      },
    ],
  };

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
        name: 'Features',
        item: 'https://kickaffiliate.com/features',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FeaturesPageClient />
    </>
  );
}
