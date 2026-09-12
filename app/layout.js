import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://kickaffiliate.com'),
  title: {
    default: 'KickAffiliate | Shopify Affiliate & Creator Marketing Platform',
    template: '%s | KickAffiliate',
  },
  description:
    'The modern Shopify affiliate platform with zero-loss dual attribution, automated return reconciliation, anti-fraud protection, and white-label creator portals with 0% extra transaction fees.',
  applicationName: 'KickAffiliate',
  keywords: [
    'Shopify affiliate app',
    'Shopify influencer marketing',
    'Shopify referral program',
    'creator tracking software',
    'affiliate marketing platform',
    'Shopify discount code tracking',
    'automated refund reconciliation',
    'white-label creator portal',
    'affiliate fraud prevention',
    'Shopify Plus affiliate software',
  ],
  authors: [{ name: 'KickAffiliate Team', url: 'https://kickaffiliate.com' }],
  creator: 'KickAffiliate',
  publisher: 'KickAffiliate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kickaffiliate.com',
    siteName: 'KickAffiliate',
    title: 'KickAffiliate | Shopify Affiliate Marketing Platform',
    description:
      'Track every influencer sale, protect every commission with automated refund reconciliation, and launch branded creator portals on Shopify with 0% performance fees.',
    images: [
      {
        url: '/website-hero.png',
        width: 1200,
        height: 630,
        alt: 'KickAffiliate Shopify Dashboard & Creator Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KickAffiliate',
    creator: '@KickAffiliate',
    title: 'KickAffiliate | Shopify Affiliate Marketing Platform',
    description:
      'Turn creators and customers into your highest-converting sales engine. Zero-loss dual tracking, automated refund protection, and white-label creator portals.',
    images: ['/website-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/kick-affiliate.png', type: 'image/png' },
    ],
    shortcut: '/kick-affiliate.png',
    apple: '/kick-affiliate.png',
  },
  alternates: {
    canonical: 'https://kickaffiliate.com',
  },
  category: 'business',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kickaffiliate.com/#organization',
        name: 'KickAffiliate',
        url: 'https://kickaffiliate.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kickaffiliate.com/kick-logo-light.png',
        },
        sameAs: [
          'https://www.facebook.com/kickaffiliate',
          'https://www.instagram.com/kickaffiliate/',
          'https://www.linkedin.com/company/kickaffiliate',
          'https://www.youtube.com/@KickAffiliate',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://kickaffiliate.com/#software',
        name: 'KickAffiliate',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Shopify',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '0',
          highPrice: '59',
          offerCount: '3',
        },
        description:
          'Shopify affiliate and creator marketing platform with zero-loss dual attribution, automated refund reconciliation, and white-label creator portals.',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7R8YJ8BKZ8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7R8YJ8BKZ8');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-body bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
