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
  const feature = featureData[params.slug] || featureData['dual-attribution'];

  if (!feature) {
    return {
      title: 'Feature | KickAffiliate - Shopify Affiliate Platform',
      description: 'Discover powerful affiliate tracking, tiered commissions, and automated payouts for Shopify.',
    };
  }

  return {
    title: `${feature.title} | KickAffiliate`,
    description: feature.subtitle,
    openGraph: {
      title: `${feature.title} | KickAffiliate`,
      description: feature.subtitle,
      url: `https://kick-affiliate.techprob.org/features/${feature.slug}`,
    },
  };
}

export default function SingleFeaturePage({ params }) {
  const feature = featureData[params.slug];

  if (!feature) {
    // If not found in explicit dictionary, fallback to default or 404
    return notFound();
  }

  return <SingleFeatureTemplate feature={feature} />;
}
