'use client';

import React from 'react';
import {
  Link2,
  Percent,
  LayoutDashboard,
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Tag,
  Zap,
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
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <span className="font-semibold text-slate-300">Live Attribution Stream</span>
            <span className="text-emerald-400 font-mono text-[11px] font-bold">● Tracking Active</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Tag className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-bold text-white">EMMA20 (Discount Code)</p>
                  <p className="text-[10px] text-slate-400">Order #1042 • $140.00 subtotal</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[10px]">
                +$14.00 Due
              </span>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Link2 className="w-4 h-4 text-indigo-400" />
                <div>
                  <p className="font-bold text-white">?ref=alex_fitness (Link Click)</p>
                  <p className="text-[10px] text-slate-400">Order #1043 • $85.50 subtotal</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono font-bold text-[10px]">
                +$8.55 Due
              </span>
            </div>
          </div>
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
        'Exclude low-margin or clearance products from commission eligibility',
        'Automatic milestone rewards when creators hit revenue targets',
      ],
      visual: (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 text-slate-900 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
            <span className="text-slate-800">Tiered Commission Rules</span>
            <span className="text-primary text-[11px]">3 Active Tiers</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Standard Affiliate</p>
                <p className="text-[11px] text-slate-500">Default for new signups</p>
              </div>
              <span className="font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">10%</span>
            </div>

            <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200/80 flex items-center justify-between">
              <div>
                <p className="font-bold text-indigo-950">VIP Creator Tier</p>
                <p className="text-[11px] text-indigo-700">&gt; $5,000 monthly sales</p>
              </div>
              <span className="font-mono font-bold text-primary bg-white px-2 py-1 rounded border border-indigo-200">15%</span>
            </div>

            <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 flex items-center justify-between">
              <div>
                <p className="font-bold text-amber-950">Ambassador Elite</p>
                <p className="text-[11px] text-amber-700">&gt; $20,000 monthly sales</p>
              </div>
              <span className="font-mono font-bold text-amber-800 bg-white px-2 py-1 rounded border border-amber-200">20% + Bonus</span>
            </div>
          </div>
        </div>
      ),
      reversed: true,
    },
    {
      id: 'creator-portal',
      badge: 'Creator Experience',
      title: 'White-Label Self-Serve Creator Portal',
      description:
        'Deliver an exceptional experience for your creators. Affiliates log in with fast passwordless magic links to generate deep links, track conversions, and input their PayPal/bank details.',
      bullets: [
        'Passwordless login via 1-click magic link or secure OTP codes',
        'Instant copy buttons for referral links and custom discount codes',
        'Real-time earnings ledger with obfuscated shopper data for privacy',
        'Downloadable media kit repository (banners, logos, copy captions)',
      ],
      visual: (
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                S
              </div>
              <span className="text-xs font-bold text-white">Sarah Jenkins (Creator)</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">Approved</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Pending Payout</span>
              <span className="font-display font-bold text-lg text-emerald-400">$640.00</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Total Orders Driven</span>
              <span className="font-display font-bold text-lg text-white">74 Orders</span>
            </div>
          </div>
        </div>
      ),
      reversed: false,
    },
    {
      id: 'payout-reconciliation',
      badge: 'Financial Reconciliation',
      title: '1-Click Payouts & Auto Refund Deductions',
      description:
        'Never pay commissions on returned items or cancelled orders. KickAffiliate automatically syncs with Shopify order events and holds pending balances during your store return window.',
      bullets: [
        'Automated return and refund reconciliation via Shopify webhooks',
        'Customizable commission hold periods (e.g. 14, 30, or 60 days)',
        '1-Click bulk payout marking with clean audit log ledgers',
        'Export ready-to-upload CSV files for PayPal MassPay or direct bank wires',
      ],
      visual: (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 text-slate-900 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
            <span>Payout Settlement Ledger</span>
            <span className="text-slate-500 text-[11px]">Ready to Export</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Total Unpaid Balance</p>
                <p className="text-[11px] text-slate-500">12 Creators approved</p>
              </div>
              <span className="font-mono font-bold text-emerald-600 text-sm">$3,420.00</span>
            </div>

            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200/60 flex items-center gap-2 text-[11px] text-amber-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>3 orders adjusted after customer returns (-$45.00 auto-reconciled)</span>
            </div>
          </div>
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
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white space-y-4 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Security &amp; Fraud Telemetry
            </span>
            <span className="text-emerald-400 font-mono text-[11px]">Active</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Self-Referral Attempt Blocked</span>
              <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold text-[10px]">Blocked</span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Shopify Webhook HMAC Integrity</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">Verified</span>
            </div>
          </div>
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
            <div className="p-2 sm:p-3 rounded-3xl bg-slate-100 border border-slate-200/80 shadow-xs">
              {pillar.visual}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
