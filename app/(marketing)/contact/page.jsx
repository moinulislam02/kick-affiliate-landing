import React from 'react';
import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact Support & Enterprise Sales',
  description:
    'Contact the KickAffiliate team for technical support, migration assistance from GoAffPro/UpPromote, or custom enterprise solutions for Shopify Plus brands.',
  alternates: {
    canonical: 'https://kickaffiliate.com/contact',
  },
  keywords: [
    'contact KickAffiliate',
    'Shopify affiliate support',
    'affiliate migration assistance',
    'Shopify Plus affiliate enterprise',
  ],
  openGraph: {
    title: 'Contact KickAffiliate | Support & Enterprise Solutions',
    description:
      'Get in touch with our Shopify affiliate growth specialists for onboarding, technical support, and migrations.',
    url: 'https://kickaffiliate.com/contact',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'Contact KickAffiliate Support & Sales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact KickAffiliate | Support & Enterprise Solutions',
    description: 'Get in touch with our Shopify affiliate growth specialists.',
    images: ['/website-hero.png'],
  },
};

export default function ContactPage() {
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
        name: 'Contact',
        item: 'https://kickaffiliate.com/contact',
      },
    ],
  };

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact KickAffiliate',
    description: 'Support and sales contact page for KickAffiliate Shopify app.',
    url: 'https://kickaffiliate.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'KickAffiliate',
      url: 'https://kickaffiliate.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://kickaffiliate.com/contact',
        availableLanguage: ['English'],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactPageClient />
    </>
  );
}
