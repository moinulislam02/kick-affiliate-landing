import React from 'react';
import PricingPageClient from './PricingPageClient';

export const metadata = {
  title: 'Pricing Plans | KickAffiliate - Transparent Shopify Affiliate Software',
  description:
    'Simple, transparent pricing for growing Shopify brands. 0% extra transaction fees. 14-day free trial on all plans.',
  openGraph: {
    title: 'KickAffiliate Pricing Plans',
    description: 'Simple, transparent pricing for scaling Shopify affiliate & influencer marketing.',
    url: 'https://kick-affiliate.techprob.org/pricing',
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
