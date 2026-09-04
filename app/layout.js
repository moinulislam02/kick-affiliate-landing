import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
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
  title: 'KickAffiliate | Shopify Affiliate Marketing Platform',
  description: 'Turn your customers and creators into your highest-converting sales team. Launch, track, and pay affiliate networks on Shopify automatically.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-body bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
