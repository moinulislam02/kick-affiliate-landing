import React from 'react';
import PrivacyPolicyPageClient from './PrivacyPolicyPageClient';

export const metadata = {
  title: 'Privacy Policy | KickAffiliate - Shopify Affiliate Marketing',
  description:
    'Learn how KickAffiliate collects, uses, and safeguards personal information for Shopify merchants, creators, and shoppers in full compliance with GDPR, CCPA, and Shopify standards.',
  openGraph: {
    title: 'Privacy Policy | KickAffiliate',
    description:
      'Learn how KickAffiliate collects, uses, and safeguards personal information for Shopify merchants, creators, and shoppers.',
    url: 'https://kick-affiliate.techprob.org/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
