import React from 'react';
import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact Support & Enterprise Sales | KickAffiliate',
  description:
    'Contact the KickAffiliate team for technical support, free creator migration assistance, or custom enterprise solutions for Shopify Plus.',
  openGraph: {
    title: 'Contact KickAffiliate',
    description: 'Get in touch with our Shopify affiliate growth specialists.',
    url: 'https://kick-affiliate.techprob.org/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
