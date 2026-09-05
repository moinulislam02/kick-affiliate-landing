import React from 'react';
import CompetitorCompareClient from './CompetitorCompareClient';

export function generateStaticParams() {
  return [
    { competitor: 'vs-goaffpro' },
    { competitor: 'vs-uppromote' },
    { competitor: 'vs-refersion' },
    { competitor: 'vs-impact' },
  ];
}

export function generateMetadata({ params }) {
  const compName = params.competitor
    .replace('vs-', '')
    .replace(/^\w/, (c) => c.toUpperCase());

  return {
    title: `KickAffiliate vs ${compName} | Best Shopify Affiliate App Alternative`,
    description: `Compare KickAffiliate vs ${compName}. Discover modern UI, zero transaction fees, and instant Shopify webhook reconciliation.`,
    openGraph: {
      title: `KickAffiliate vs ${compName} - Full Comparison`,
      description: `See why merchants are switching from ${compName} to KickAffiliate.`,
      url: `https://kick-affiliate.techprob.org/compare/${params.competitor}`,
    },
  };
}

export default function CompetitorComparePage({ params }) {
  return <CompetitorCompareClient competitorSlug={params.competitor} />;
}
