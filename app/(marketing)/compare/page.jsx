import React from 'react';
import CompareHubClient from './CompareHubClient';

export const metadata = {
  title: 'Compare Shopify Affiliate Apps | Kick Affiliate vs Competitors',
  description:
    'Compare Kick Affiliate to GoAffPro, UpPromote, Refersion, and BixGrow. Discover why modern Shopify merchants are switching to Kick Affiliate.',
  openGraph: {
    title: 'Kick Affiliate vs Competitors - Feature & Pricing Comparison',
    description:
      'Compare Kick Affiliate with legacy affiliate software for Shopify. See feature breakdowns, pricing, and migration steps.',
    url: 'https://kick-affiliate.techprob.org/compare',
  },
};

export default function ComparePage() {
  return <CompareHubClient />;
}
