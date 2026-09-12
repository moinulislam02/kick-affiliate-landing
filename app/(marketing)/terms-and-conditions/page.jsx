import React from 'react';
import TermsPageClient from './TermsPageClient';

export const metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the complete terms and conditions of service for KickAffiliate, covering merchant accounts, creator responsibilities, commission attribution, and Shopify billing.',
  alternates: {
    canonical: 'https://kickaffiliate.com/terms-and-conditions',
  },
  keywords: [
    'KickAffiliate terms of service',
    'Shopify affiliate terms',
    'merchant affiliate agreement',
    'affiliate program terms and conditions',
  ],
  openGraph: {
    title: 'Terms and Conditions | KickAffiliate',
    description:
      'Read the complete terms and conditions of service for KickAffiliate platform users, merchants, and affiliates.',
    url: 'https://kickaffiliate.com/terms-and-conditions',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | KickAffiliate',
    description:
      'Read the complete terms and conditions of service for KickAffiliate platform users, merchants, and affiliates.',
    images: ['/website-hero.png'],
  },
};

export default function TermsPage() {
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
        name: 'Terms and Conditions',
        item: 'https://kickaffiliate.com/terms-and-conditions',
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'KickAffiliate Terms and Conditions',
    description: 'Terms and conditions for KickAffiliate Shopify app and creator platform.',
    url: 'https://kickaffiliate.com/terms-and-conditions',
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
      <TermsPageClient />
    </>
  );
}
