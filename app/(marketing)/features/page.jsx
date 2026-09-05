import React from 'react';
import FeaturesPageClient from './FeaturesPageClient';

export const metadata = {
  title: 'Features | KickAffiliate - Shopify Affiliate & Referral Platform',
  description:
    'Discover KickAffiliate features: zero-loss dual attribution, automated refund reconciliation, white-label creator portals, and 1-click batch payouts.',
  openGraph: {
    title: 'KickAffiliate Platform Features',
    description:
      'Zero-loss dual tracking, multi-tier commissions, white-label creator portals, and automated payouts for Shopify.',
    url: 'https://kick-affiliate.techprob.org/features',
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
