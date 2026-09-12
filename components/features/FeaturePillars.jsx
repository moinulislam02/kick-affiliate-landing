'use client';

import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function FeaturePillars({ onBookDemo }) {
  const pillars = [
    {
      id: 'dual-attribution',
      badge: 'Attribution & Tracking',
      title: 'Zero-Loss Dual Attribution (Links + Codes)',
      description:
        'Never lose credit for a sale. KickAffiliate captures referrals through both custom tracking links (?ref=creator) and automatic Shopify discount codes, prioritizing discount codes when shoppers use both.',
      bullets: [
        'Lightweight browser localStorage & cookie token persistence (1-365 days)',
        'Automatic Shopify GraphQL price rule & coupon provisioning',
        'Direct cart note_attribute tagging for uncrackable attribution',
        'Seamless checkout compatibility across Shopify Plus and standard themes',
      ],
      visual: (
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/feature-1.png"
            alt="Zero-Loss Dual Attribution (Links + Codes)"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      ),
      reversed: false,
    },
    {
      id: 'commission-engine',
      badge: 'Commission Flexibility',
      title: 'Dynamic Multi-Tier Commission Engine',
      description:
        'Motivate high-performers with custom commission rules, VIP tier escalations, and product-level incentives without complicated spreadsheets.',
      bullets: [
        'Set percentage commissions (e.g. 15%) or fixed dollar bounties ($20/order)',
        'Override rates for specific top-tier influencer ambassadors',
        'Exclude low-margin or clearance products from commission eligibility'
      ],
      visual: (
        <div className="overflow-hidden rounded-2xl ">
          <img
            src="/feature-2.png"
            alt="Dynamic Multi-Tier Commission Engine"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      ),
      reversed: true,
    },
    {
      id: 'creator-portal',
      badge: 'Creator Experience',
      title: 'White-Label Self-Serve Creator Portal',
      description:
        'Deliver an exceptional experience for your creators. Affiliates set their password on initial login to generate deep links, track conversions, and view live approved balances.',
      bullets: [
        'Secure email & password authentication with first-time password setup',
        'Instant copy buttons for referral links and custom discount codes',
        'Real-time earnings ledger with obfuscated shopper data for privacy',
        '2-Factor Email OTP verification for secure payout updates (PayPal & Bank/Wise)',
      ],
      visual: (
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/feature-3.png"
            alt="White-Label Self-Serve Creator Portal"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      ),
      reversed: false,
    },
    {
      id: 'payout-reconciliation',
      badge: 'Financial Reconciliation',
      title: 'Refund Reconciliation & Commission Management',
      description:
        'Never pay commissions on returned items or cancelled orders. KickAffiliate automatically syncs with Shopify order events and holds pending balances during your store return window.',
      bullets: [
        'Automated return and refund reconciliation via Shopify webhooks',
        'Customizable commission hold periods (e.g. 14, 30, or 60 days)',
        'Manual verification workflows with transparent audit logs',
        'Live creator balance tracking and deduction histories',
      ],
      visual: (
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/feature-4.png"
            alt="Refund Reconciliation & Commission Management"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      ),
      reversed: true,
    },
    {
      id: 'anti-fraud',
      badge: 'Security & Integrity',
      title: 'Enterprise Fraud Guard & Self-Referral Prevention',
      description:
        'Protect your margins from abusive practices. KickAffiliate monitors click frequencies, prevents affiliates from earning kickbacks on their own orders, and verifies every event.',
      bullets: [
        'Anti-Self-Referral checks: matches creator email/IP against shopper records',
        '1-minute IP click deduplication to block automated click farms',
        'HMAC SHA-256 cryptographic webhook verification on all events',
        'Suspicious transaction flags directly in your merchant dashboard',
      ],
      visual: (
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/feature-5.png"
            alt="Enterprise Fraud Guard & Self-Referral Prevention"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      ),
      reversed: false,
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {pillars.map((pillar, idx) => (
        <div
          key={pillar.id}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center ${
            pillar.reversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Content */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              pillar.reversed ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              {pillar.badge}
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-snug">
              {pillar.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {pillar.description}
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {pillar.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-dark transition-all group cursor-pointer"
              >
                <span>See Interactive Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div
            className={`lg:col-span-6 ${
              pillar.reversed ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="">
              {pillar.visual}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
