// app/(marketing)/features/[slug]/page.jsx
import React from 'react';
import { notFound } from 'next/navigation';
import { featureData } from '@/data/featureData';
import SingleFeatureTemplate from '@/components/features/SingleFeatureTemplate';

export async function generateStaticParams() {
  return Object.keys(featureData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const feature = featureData[params.slug];

  if (!feature) {
    return {
      title: 'Feature Overview | KickAffiliate',
      description: 'Discover powerful affiliate tracking, tiered commissions, and automated payouts for Shopify.',
    };
  }

  return {
    title: `${feature.title}`,
    description: feature.subtitle,
    alternates: {
      canonical: `https://kick-affiliate.techprob.org/features/${feature.slug}`,
    },
    keywords: [
      `${feature.title}`,
      `${feature.badge}`,
      'Shopify affiliate software',
      'Shopify creator marketing',
      'KickAffiliate features',
    ],
    openGraph: {
      title: `${feature.title} | KickAffiliate`,
      description: feature.subtitle,
      url: `https://kick-affiliate.techprob.org/features/${feature.slug}`,
      type: 'website',
      images: [
        {
          url: '/website-hero.png',
          width: 1200,
          height: 630,
          alt: `${feature.title} - KickAffiliate Feature`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${feature.title} | KickAffiliate`,
      description: feature.subtitle,
      images: ['/website-hero.png'],
    },
  };
}

export default function SingleFeaturePage({ params }) {
  const feature = featureData[params.slug];

  if (!feature) {
    return notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kick-affiliate.techprob.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://kick-affiliate.techprob.org/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: feature.title,
        item: `https://kick-affiliate.techprob.org/features/${feature.slug}`,
      },
    ],
  };

  const faqJsonLd = feature.faqs && feature.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: feature.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <SingleFeatureTemplate feature={feature} />
    </>
  );
}
