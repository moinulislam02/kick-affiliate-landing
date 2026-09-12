import React from 'react';
import PricingPageClient from './PricingPageClient';

export const metadata = {
  title: 'Pricing Plans & 0% Transaction Fees',
  description:
    'Simple, transparent pricing for growing and enterprise Shopify brands. Free Starter plan, $19/mo Pro plan with 14-day free trial, and $59/mo Scale plan with zero transaction fees.',
  alternates: {
    canonical: 'https://kick-affiliate.techprob.org/pricing',
  },
  keywords: [
    'Shopify affiliate pricing',
    'affiliate software cost',
    'cheap Shopify affiliate app',
    'zero transaction fee affiliate',
    'KickAffiliate pricing plans',
  ],
  openGraph: {
    title: 'KickAffiliate Pricing Plans | 0% Performance Fees',
    description:
      'Simple, transparent pricing for scaling Shopify affiliate & influencer marketing. 0% performance fees, 14-day free trial.',
    url: 'https://kick-affiliate.techprob.org/pricing',
    type: 'website',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Transparent Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KickAffiliate Pricing Plans | 0% Performance Fees',
    description: 'Simple, transparent pricing for scaling Shopify affiliate & influencer marketing.',
    images: ['/website-hero.png'],
  },
};

export default function PricingPage() {
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
        name: 'Pricing',
        item: 'https://kick-affiliate.techprob.org/pricing',
      },
    ],
  };

  const pricingOffersJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'KickAffiliate Shopify App Subscription',
    description:
      'Affiliate marketing software for Shopify with zero-loss dual attribution, automated refund reconciliation, and creator portals.',
    brand: {
      '@type': 'Brand',
      name: 'KickAffiliate',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '59',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter Plan',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free forever for up to 5 active creators with basic dual tracking and portal access.',
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '19',
          priceCurrency: 'USD',
          description: 'For growing Shopify brands with up to 50 active creators, custom commission rates, and fraud shield.',
        },
        {
          '@type': 'Offer',
          name: 'Scale Premium Plan',
          price: '59',
          priceCurrency: 'USD',
          description: 'For high-volume merchants with unlimited creators, automated refund protection, and VIP support.',
        },
      ],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the 14-day free trial work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When you upgrade to the Pro plan, you get full access to all Pro features for 14 days without charge. You can cancel at any time during the trial to avoid charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there any hidden transaction fees on commissions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We do not charge any transaction fees or commission cuts on your affiliate sales. You only pay the flat subscription fee of your selected plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Automated Refund & Return Protection on the Scale plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On the Scale Premium plan, our system automatically listens to Shopify refund, return, and cancellation webhooks in real-time and marks affected commissions as Protected (voided).',
        },
      },
      {
        '@type': 'Question',
        name: 'How does billing work, and what payment methods can I use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All subscription charges are handled securely through official Shopify App Billing and added directly to your standard Shopify store invoice.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingOffersJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PricingPageClient />
    </>
  );
}
