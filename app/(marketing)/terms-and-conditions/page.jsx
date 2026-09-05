import React from 'react';
import TermsPageClient from './TermsPageClient';

export const metadata = {
  title: 'Terms and Conditions | KickAffiliate - Shopify Affiliate Marketing',
  description:
    'Read the complete terms and conditions of service for KickAffiliate, covering merchant accounts, creator responsibilities, commission attribution, and Shopify billing.',
  openGraph: {
    title: 'Terms and Conditions | KickAffiliate',
    description:
      'Read the complete terms and conditions of service for KickAffiliate platform users, merchants, and affiliates.',
    url: 'https://kick-affiliate.techprob.org/terms-and-conditions',
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}
