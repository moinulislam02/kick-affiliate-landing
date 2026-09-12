import React from 'react';
import CompareHubClient from './CompareHubClient';

export const metadata = {
  title: 'Compare Shopify Affiliate Apps | KickAffiliate vs Alternatives',
  description:
    'Compare KickAffiliate to GoAffPro, UpPromote, Refersion, and BixGrow. Discover why modern Shopify merchants choose KickAffiliate for 0% extra fees and sub-second webhook tracking.',
  alternates: {
    canonical: 'https://kickaffiliate.com/compare',
  },
  keywords: [
    'Shopify affiliate app comparison',
    'GoAffPro alternative',
    'UpPromote alternative',
    'Refersion alternative',
    'BixGrow alternative',
    'best Shopify affiliate software',
  ],
  openGraph: {
    title: 'KickAffiliate vs Shopify Affiliate Competitors',
    description:
      'Compare KickAffiliate with legacy affiliate apps. See feature breakdowns, pricing transparency, and zero-fee unit economics.',
    url: 'https://kickaffiliate.com/compare',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate vs Shopify Affiliate App Competitors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickAffiliate vs Shopify Affiliate Competitors',
    description:
      'Compare KickAffiliate with legacy affiliate apps. See feature breakdowns, pricing transparency, and zero-fee unit economics.',
    images: ['/website-hero.png'],
  },
};

export default function ComparePage() {
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
        name: 'Compare',
        item: 'https://kickaffiliate.com/compare',
      },
    ],
  };

  const comparisonListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'KickAffiliate Competitor Comparison Guides',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'KickAffiliate vs GoAffPro',
        url: 'https://kickaffiliate.com/compare/vs-goaffpro',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'KickAffiliate vs UpPromote',
        url: 'https://kickaffiliate.com/compare/vs-uppromote',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'KickAffiliate vs Refersion',
        url: 'https://kickaffiliate.com/compare/vs-refersion',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'KickAffiliate vs BixGrow',
        url: 'https://kickaffiliate.com/compare/vs-bixgrow',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonListJsonLd) }}
      />
      <CompareHubClient />
    </>
  );
}
