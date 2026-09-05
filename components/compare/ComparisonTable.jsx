'use client';

import React from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ComparisonTable({ competitorKey = 'goaffpro', onBookDemo }) {
  const competitorData = {
    goaffpro: {
      name: 'GoAffPro',
      headline: 'KickAffiliate vs. GoAffPro',
      tagline: 'A modern, reliable Shopify-native affiliate platform without clunky 2010s interfaces or hidden paywalls.',
      summary: 'While GoAffPro is widely used, merchants frequently struggle with its complex legacy UI, slow support times, and unexpected plan restrictions as you scale. KickAffiliate delivers a clean, intuitive modern dashboard, zero extra transaction fees, and instant Shopify webhook reconciliation.',
      advantages: [
        'Clean modern UI that your team and creators actually enjoy using',
        'Zero extra transaction cuts on referred customer orders',
        'Native Shopify GraphQL integration and real-time webhook sync',
        'High-speed passwordless creator login via Magic Links & OTP',
        'Automatic order refund & cancellation reconciliation',
      ],
      tableRows: [
        { feature: 'Modern, Intuitive User Interface', kick: true, comp: false, note: 'GoAffPro uses a legacy complex interface' },
        { feature: 'Zero Extra Transaction Fees', kick: true, comp: false, note: 'GoAffPro limits features on lower tiers' },
        { feature: 'Fast Passwordless Creator Login (Magic Link)', kick: true, comp: false, note: 'Requires manual passwords' },
        { feature: 'Real-Time Order & Refund Webhook Sync', kick: true, comp: true, note: 'Both sync with Shopify' },
        { feature: 'Lightweight Theme App Embed (<8kb)', kick: true, comp: false, note: 'Heavier client script' },
        { feature: 'Automated 1-Click Payout Reconciliation', kick: true, comp: true, note: 'Both offer payout ledgers' },
        { feature: 'Priority Support SLA (<2 hours)', kick: true, comp: false, note: 'Often 24-48h turnaround' },
      ],
    },
    uppromote: {
      name: 'UpPromote',
      headline: 'KickAffiliate vs. UpPromote',
      tagline: 'Transparent pricing with no unexpected referral limits or complex tiered lock-ins.',
      summary: 'UpPromote offers an extensive feature list but locks critical tracking and automated payout capabilities behind expensive high-tier plans. KickAffiliate gives you full access to multi-tier commissions, white-label portals, and unmetered creator onboarding at transparent rates.',
      advantages: [
        'Full multi-tier commission engine without enterprise tier surcharges',
        'Dedicated white-label creator portal on simple flat pricing',
        'Lightweight theme embed designed for Core Web Vitals speed',
        'Straightforward, unbloated setup taking under 5 minutes',
      ],
      tableRows: [
        { feature: 'Transparent Flat Pricing', kick: true, comp: false, note: 'UpPromote has complex feature gating' },
        { feature: 'Unlimited Active Creators on Growth Plan', kick: true, comp: false, note: 'Strict referral limits on basic plans' },
        { feature: 'Dual Attribution (Link + Discount Codes)', kick: true, comp: true, note: 'Supported by both' },
        { feature: 'White-Label Creator Portal Branding', kick: true, comp: false, note: 'Locked behind $139+/mo tier' },
        { feature: 'Automated Return & Refund Deductions', kick: true, comp: true, note: 'Supported by both' },
        { feature: 'Fast Passwordless Creator Onboarding', kick: true, comp: false, note: 'Standard username/password only' },
        { feature: 'Free 1-on-1 Migration Support', kick: true, comp: false, note: 'Self-serve on entry plans' },
      ],
    },
    refersion: {
      name: 'Refersion',
      headline: 'KickAffiliate vs. Refersion',
      tagline: 'Enterprise-grade affiliate tracking without the $119+/mo baseline cost or legacy bloat.',
      summary: 'Refersion is an established affiliate platform, but its steep entry price ($119+/mo) and rigid tracking workflows make it unnecessarily expensive for fast-moving Shopify DTC merchants. KickAffiliate provides equivalent dual-attribution accuracy, clean modern aesthetics, and automated payouts at a fraction of the cost.',
      advantages: [
        'Save up to 75% on monthly software costs while gaining a cleaner modern interface',
        'Built specifically for Shopify merchants, rather than generic e-commerce',
        'Rapid setup in 5 minutes vs multi-week implementation cycles',
        'Self-serve creator portal with zero login friction',
      ],
      tableRows: [
        { feature: 'Affordable Starting Plans ($0 - $29/mo)', kick: true, comp: false, note: 'Refersion starts at $119/mo' },
        { feature: 'Shopify Native Embedded App Experience', kick: true, comp: false, note: 'External standalone dashboard' },
        { feature: 'Zero Extra Per-Order Surcharges', kick: true, comp: false, note: 'Tiered order thresholds' },
        { feature: 'Dual Attribution & Coupon Code Sync', kick: true, comp: true, note: 'Supported by both' },
        { feature: 'Instant 1-Click CSV Migration', kick: true, comp: false, note: 'Complex migration process' },
        { feature: 'Real-Time Webhook Refund Reconciliation', kick: true, comp: true, note: 'Supported by both' },
      ],
    },
    impact: {
      name: 'Impact.com',
      headline: 'KickAffiliate vs. Impact.com',
      tagline: 'Designed for agile Shopify brands, not complex enterprise conglomerates.',
      summary: 'Impact.com is built for massive multinational enterprise affiliate partnerships with steep contracts, percent-of-revenue cuts, and multi-month onboarding. KickAffiliate gives Shopify merchants complete control over their creator and influencer programs with zero contracts, instant setup, and no percentage fees.',
      advantages: [
        'No multi-thousand dollar enterprise contracts or revenue-share cuts',
        'No long onboarding delays — install and start recruiting creators in 5 minutes',
        'Native Shopify app integration embedded inside your Shopify Admin',
        'Transparent flat SaaS pricing without platform revenue commissions',
      ],
      tableRows: [
        { feature: 'No Percentage-of-Revenue Take Rate', kick: true, comp: false, note: 'Impact charges platform rev-shares' },
        { feature: 'Zero Setup Time (Ready in 5 mins)', kick: true, comp: false, note: 'Requires weeks of enterprise setup' },
        { feature: 'Built Exclusively for Shopify DTC Brands', kick: true, comp: false, note: 'Generic enterprise affiliate network' },
        { feature: 'White-Label Creator Experience', kick: true, comp: true, note: 'Both provide creator portals' },
        { feature: 'No Long-Term Annual Lock-In Contracts', kick: true, comp: false, note: 'Impact requires enterprise contracts' },
      ],
    },
  };

  const data = competitorData[competitorKey] || competitorData.goaffpro;

  return (
    <div className="space-y-16">
      {/* Competitor Overview Box */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            Head-to-Head Comparison
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight">
            {data.headline}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            {data.summary}
          </p>
        </div>

        {/* Key Advantages Grid */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
            Why Shopify Merchants Switch to KickAffiliate:
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
            {data.advantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-xl border border-slate-200/80 flex items-start gap-2.5 shadow-2xs"
              >
                <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-200">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
          Feature-by-Feature Breakdown
        </h3>

        <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-white shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80">
                <th className="p-4 sm:p-5 font-display font-bold text-slate-900 text-sm w-2/5">
                  Capability / Feature
                </th>
                <th className="p-4 sm:p-5 text-center font-display font-bold text-primary text-sm w-1/4 bg-primary/5 border-x border-primary/20">
                  KickAffiliate
                </th>
                <th className="p-4 sm:p-5 text-center font-display font-bold text-slate-700 text-sm w-1/4">
                  {data.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.tableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">
                    {row.feature}
                    {row.note && (
                      <span className="block text-[11px] font-normal text-slate-400 mt-0.5">
                        {row.note}
                      </span>
                    )}
                  </td>

                  {/* KickAffiliate */}
                  <td className="p-4 sm:p-5 text-center bg-primary/5 border-x border-primary/15">
                    {row.kick ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                        <span>Included</span>
                      </div>
                    ) : (
                      <X className="w-4 h-4 text-slate-300 mx-auto" />
                    )}
                  </td>

                  {/* Competitor */}
                  <td className="p-4 sm:p-5 text-center text-slate-600">
                    {row.comp ? (
                      <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium">
                        Supported
                      </span>
                    ) : (
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-red-50 text-red-600 font-medium border border-red-100">
                        <X className="w-3.5 h-3.5" />
                        <span>Limited / Missing</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Migration Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
            Hassle-Free Migration
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Ready to switch from {data.name}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Import your existing creators, affiliate links, and historical discount codes in under 3 minutes with zero downtime.
          </p>
        </div>

        <button
          onClick={onBookDemo}
          className="px-6 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
        >
          <span>Get Free Migration Assistance</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
