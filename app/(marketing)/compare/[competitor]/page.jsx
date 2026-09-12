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

export function generateMetadata({ params }) {
  const competitorNames = {
    'vs-goaffpro': 'GoAffPro',
    'vs-uppromote': 'UpPromote',
    'vs-refersion': 'Refersion',
    'vs-bixgrow': 'BixGrow',
  };

  const compName =
    competitorNames[params.competitor] ||
    params.competitor
      .replace('vs-', '')
      .replace(/^\w/, (c) => c.toUpperCase());

  return {
    title: `Kick Affiliate vs ${compName} | Best Shopify Affiliate App Alternative`,
    description: `Compare Kick Affiliate vs ${compName}. Discover modern UI, zero transaction fees, and instant Shopify webhook reconciliation.`,
    openGraph: {
      title: `Kick Affiliate vs ${compName} - Full Comparison`,
      description: `See why merchants are switching from ${compName} to Kick Affiliate.`,
      url: `https://kick-affiliate.techprob.org/compare/${params.competitor}`,
    },
  };
}

export default function CompetitorComparePage({ params }) {
  return <CompetitorCompareClient competitorSlug={params.competitor} />;
}
