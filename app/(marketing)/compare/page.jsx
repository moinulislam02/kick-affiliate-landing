import React from 'react';
import CompareHubClient from './CompareHubClient';

export const metadata = {
  title: 'Compare Shopify Affiliate Apps | KickAffiliate vs Competitors',
  description:
    'Compare KickAffiliate to GoAffPro, UpPromote, Refersion, and Impact.com. Discover why modern Shopify merchants are switching to KickAffiliate.',
  openGraph: {
    title: 'KickAffiliate vs Competitors - Feature & Pricing Comparison',
    description:
      'Compare KickAffiliate with legacy affiliate software for Shopify. See feature breakdowns, pricing, and migration steps.',
    url: 'https://kick-affiliate.techprob.org/compare',
  },
};

export default function ComparePage() {
  return <CompareHubClient />;
}
