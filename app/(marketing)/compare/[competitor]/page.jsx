import React from 'react';
import CompetitorCompareClient from './CompetitorCompareClient';

export function generateStaticParams() {
  return [
    { competitor: 'vs-goaffpro' },
    { competitor: 'vs-uppromote' },
    { competitor: 'vs-refersion' },
    { competitor: 'vs-bixgrow' },
  ];
}

const competitorNames = {
  'vs-goaffpro': 'GoAffPro',
  'vs-uppromote': 'UpPromote',
  'vs-refersion': 'Refersion',
  'vs-bixgrow': 'BixGrow',
};

export function generateMetadata({ params }) {
  const compName =
    competitorNames[params.competitor] ||
    params.competitor
      .replace('vs-', '')
      .replace(/^\w/, (c) => c.toUpperCase());

  const title = `KickAffiliate vs ${compName} | Best Shopify Affiliate App Alternative`;
  const description = `Compare KickAffiliate vs ${compName} for Shopify. Get 0% performance fees, automated refund reconciliation, modern white-label portals, and sub-second tracking.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://kickaffiliate.com/compare/${params.competitor}`,
    },
    keywords: [
      `KickAffiliate vs ${compName}`,
      `${compName} alternative`,
      `${compName} vs KickAffiliate`,
      'Shopify affiliate app comparison',
      'switch affiliate software Shopify',
    ],
    openGraph: {
      title: `KickAffiliate vs ${compName} - Full Feature & Pricing Breakdown`,
      description: `See why Shopify merchants are switching from ${compName} to KickAffiliate for zero fees and reliable tracking.`,
      url: `https://kickaffiliate.com/compare/${params.competitor}`,
      type: 'website',
      images: [
        {
          url: '/website-hero.png',
          width: 1200,
          height: 630,
          alt: `KickAffiliate vs ${compName} Comparison`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `KickAffiliate vs ${compName} Comparison`,
      description: `See why Shopify merchants are switching from ${compName} to KickAffiliate for zero fees and reliable tracking.`,
      images: ['/website-hero.png'],
    },
  };
}

export default function CompetitorComparePage({ params }) {
  const compName =
    competitorNames[params.competitor] ||
    params.competitor
      .replace('vs-', '')
      .replace(/^\w/, (c) => c.toUpperCase());

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
      {
        '@type': 'ListItem',
        position: 3,
        name: `KickAffiliate vs ${compName}`,
        item: `https://kickaffiliate.com/compare/${params.competitor}`,
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `KickAffiliate vs ${compName} Comparison`,
    description: `Detailed comparison and migration guide between KickAffiliate and ${compName} for Shopify stores.`,
    url: `https://kickaffiliate.com/compare/${params.competitor}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <CompetitorCompareClient competitorSlug={params.competitor} />
    </>
  );
}
