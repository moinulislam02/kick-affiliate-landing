import React from 'react';
import PrivacyPolicyPageClient from './PrivacyPolicyPageClient';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how KickAffiliate collects, uses, and safeguards personal information for Shopify merchants, creators, and shoppers in full compliance with GDPR, CCPA, and Shopify standards.',
  alternates: {
    canonical: 'https://kickaffiliate.com/privacy-policy',
  },
  keywords: [
    'KickAffiliate privacy policy',
    'Shopify app privacy compliance',
    'GDPR affiliate tracking',
    'CCPA affiliate data protection',
  ],
  openGraph: {
    title: 'Privacy Policy | KickAffiliate',
    description:
      'Learn how KickAffiliate collects, uses, and safeguards personal information for Shopify merchants, creators, and shoppers.',
    url: 'https://kickaffiliate.com/privacy-policy',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | KickAffiliate',
    description:
      'Learn how KickAffiliate collects, uses, and safeguards personal information for Shopify merchants, creators, and shoppers.',
    images: ['/website-hero.png'],
  },
};

export default function PrivacyPolicyPage() {
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
        name: 'Privacy Policy',
        item: 'https://kickaffiliate.com/privacy-policy',
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'KickAffiliate Privacy Policy',
    description: 'Privacy Policy and Data Protection guidelines for KickAffiliate.',
    url: 'https://kickaffiliate.com/privacy-policy',
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
      <PrivacyPolicyPageClient />
    </>
  );
}
