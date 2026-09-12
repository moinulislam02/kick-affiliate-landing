'use client';

import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

function renderCell(val, isKick = false) {
  if (val === true || val === '✓') {
    return (
      <div
        className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs ${
          isKick
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs'
            : 'bg-slate-100 text-slate-700 border border-slate-200'
        }`}
      >
        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        {isKick && <span>Included</span>}
      </div>
    );
  }

  if (val === false || val === '✕' || val === 'X') {
    return (
      <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-medium text-xs border border-red-100">
        <X className="w-3.5 h-3.5 shrink-0" />
        <span>Not Available</span>
      </div>
    );
  }

  if (typeof val === 'string') {
    if (val.startsWith('✓')) {
      const text = val.replace('✓', '').trim();
      return (
        <div
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs ${
            isKick
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs'
              : 'bg-slate-100 text-slate-700 border border-slate-200'
          }`}
        >
          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          {text ? <span>{text}</span> : isKick ? <span>Included</span> : null}
        </div>
      );
    }

    if (val.startsWith('✕') || val.startsWith('X ')) {
      const text = val.replace(/^[✕X]\s*/, '').trim();
      return (
        <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 font-medium text-xs border border-red-100">
          <X className="w-3.5 h-3.5 shrink-0" />
          <span>{text || 'Not Available'}</span>
        </div>
      );
    }

    if (val.startsWith('△')) {
      const text = val.replace('△', '').trim();
      return (
        <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-medium text-xs border border-amber-200/80">
          <span className="font-bold text-[11px] text-amber-600">△</span>
          {text ? <span>{text}</span> : <span>Limited</span>}
        </div>
      );
    }

    return (
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
          isKick
            ? 'bg-primary/10 text-primary border border-primary/20'
            : 'bg-slate-100 text-slate-700 border border-slate-200'
        }`}
      >
        {val}
      </span>
    );
  }

  return val;
}

export default function ComparisonTable({ competitorKey = 'goaffpro', onBookDemo }) {
  const competitorData = {
    goaffpro: {
      name: 'GoAffPro',
      headline: 'Kick Affiliate vs. GoAffPro',
      tagline:
        'Get advanced creator affiliate controls from $19/month, with commission protection and 0% performance fees, without jumping to a $49+ paid plan.',
      summary:
        'Get advanced creator affiliate controls from $19/month, with commission protection and 0% performance fees, without jumping to a $49+ paid plan. Kick Affiliate delivers a clean, intuitive modern dashboard, zero extra transaction fees, and instant Shopify webhook reconciliation.',
      advantages: [
        'Start Pro features from just $19/month',
        '7-day post-delivery commission protection',
        'Fraud/bot protection on Pro',
        'Automated refund & return protection on Premium',
        '0% performance fee',
        'Unlimited referral orders',
        'Custom commission & commission override',
        'Dedicated account manager on Premium',
      ],
      tableRows: [
        { feature: 'Starting paid price', kick: 'Free or $19/mo', comp: '$49/mo' },
        { feature: 'UI/UX', kick: 'Premium', comp: 'Limited' },
        { feature: 'Performance fee', kick: '✓ 0%', comp: '✓ 0%' },
        { feature: 'Free plan', kick: '✓', comp: '✓' },
        { feature: 'Free referral orders', kick: '✓ Unlimited', comp: '✓ Unlimited' },
        { feature: 'Unlimited active creators', kick: '✓ Premium', comp: '✓ Free' },
        { feature: 'Unlimited programs', kick: '✓ Premium', comp: '△ Limited groups/program features' },
        { feature: 'Custom commission', kick: '✓ Free', comp: '✓' },
        { feature: 'Commission override', kick: '✓ Pro', comp: '✓ Premium' },
        { feature: 'Creator analytics', kick: '✓ Pro', comp: '✓' },
        { feature: 'Program reporting', kick: '✓ Premium', comp: '✓' },
        { feature: 'Fraud protection', kick: '✓ Pro', comp: '△ Business' },
        { feature: 'Bot/suspicious activity protection', kick: '✓ Free', comp: '△ Business fraud management' },
        { feature: 'Manual refund deduction', kick: '✓ Pro', comp: '△ Commission/referral controls' },
        { feature: 'Automated refund protection', kick: '✓ Premium', comp: '△ Limited Available through commission/referral controls' },
        { feature: 'Approval/hold protection', kick: '✓', comp: '✓' },
        { feature: '7-day post-delivery protection', kick: '✓', comp: '✕' },
        { feature: 'Creator portal', kick: '✓', comp: '✓' },
        { feature: 'Custom email', kick: '✓ Free', comp: '✓ Premium' },
        { feature: 'Email marketing', kick: '✓ Free', comp: '✓ Premium' },
        { feature: 'Dedicated account manager', kick: '✓ Premium', comp: '✓ Enterprise' },
        { feature: 'API / integrations', kick: '✓ Premium', comp: '✓' },
        { feature: '24/7 support', kick: '✓', comp: '✓' },
      ],
    },
    uppromote: {
      name: 'UpPromote',
      headline: 'Kick Affiliate vs. UpPromote',
      tagline:
        'Track creator sales and manage commissions from $19/month, without paying a percentage of your affiliate revenue.',
      summary:
        'Track creator sales and manage commissions from $19/month, without paying a percentage of your affiliate revenue. UpPromote locks critical tracking and payout capabilities behind expensive high-tier plans. Kick Affiliate gives you full access to multi-tier commissions, white-label portals, and unmetered creator onboarding at transparent rates.',
      advantages: [
        '$19/month Pro plan with 0% performance fee',
        '7-day post-delivery commission protection',
        'Custom commission & commission override controls',
        'Fraud/bot protection included on Pro',
        'Automated refund & return protection on Premium',
        '24/7 support across all plans',
        '$59 Premium with unlimited active creators',
        'Priority API & webhook integrations',
      ],
      tableRows: [
        { feature: 'Starting paid price', kick: '$19/mo', comp: '$29.99/mo' },
        { feature: 'Performance fee', kick: '✓ 0%', comp: '✕ 2% Extra charge for each referral' },
        { feature: 'Free plan', kick: '✓', comp: '✓' },
        { feature: 'Free referral orders', kick: '✓ Unlimited', comp: '△ $3,000 referral review (Limited)' },
        { feature: 'Custom commission', kick: '✓', comp: '✓' },
        { feature: 'Commission override', kick: '✓', comp: '✓' },
        { feature: 'Creator analytics', kick: '✓', comp: '✓' },
        { feature: 'Program reporting', kick: '✓', comp: '✓' },
        { feature: 'Fraud protection', kick: '✓ Free', comp: '✓ Paid' },
        { feature: 'Bot/suspicious activity protection', kick: '✓', comp: '✓' },
        { feature: 'Manual refund deduction', kick: '✓', comp: '✓' },
        { feature: 'Automated refund protection', kick: '✓', comp: '✓' },
        { feature: 'Approval/hold protection', kick: '✓', comp: '✓' },
        { feature: '7-day post-delivery protection', kick: '✓', comp: '✕' },
        { feature: 'Creator portal', kick: '✓', comp: '✓' },
        { feature: 'Custom email', kick: '✓ Pro', comp: '✓ Growth+' },
        { feature: 'Unlimited active creators', kick: '✓', comp: '✓' },
        { feature: 'Unlimited programs', kick: '✓', comp: '✓' },
        { feature: 'Dedicated account manager', kick: '✓ Premium', comp: '△ Higher tier/support' },
        { feature: 'API / integrations', kick: '✓', comp: '✓' },
        { feature: '24/7 support', kick: '✓', comp: '✓' },
      ],
    },
    refersion: {
      name: 'Refersion',
      headline: 'Kick Affiliate vs. Refersion',
      tagline:
        'Run your creator affiliate program from $19/month with 0% performance fees, while keeping commission protection, fraud controls and analytics in one platform.',
      summary:
        'Run your creator affiliate program from $19/month with 0% performance fees, while keeping commission protection, fraud controls and analytics in one platform. Refersion entry price ($39/mo + 3% fee) makes it unnecessarily expensive for fast-moving Shopify DTC merchants. Kick Affiliate provides equivalent dual-attribution accuracy, clean modern aesthetics, and automated payouts at a fraction of the cost.',
      advantages: [
        '$19/month Pro plan',
        '0% performance fee',
        'Unlimited referral orders',
        '7-day post-delivery commission protection',
        'Fraud/bot protection',
        'Automated refund & return protection',
        'Custom creator commissions',
        '$59 Premium with unlimited creators',
      ],
      tableRows: [
        { feature: 'Starting paid price', kick: '$19/mo', comp: '✕ $39/mo + 3% Extra charge for each referral' },
        { feature: 'Performance fee', kick: '✓ 0%', comp: '✕ 3% Launch' },
        { feature: 'Free plan', kick: '✓', comp: '✕ Marketplace/free entry' },
        { feature: 'Free referral orders', kick: '✓ Unlimited', comp: '△ Marketplace model limited' },
        { feature: 'Unlimited active creators', kick: '✓ Premium', comp: '✓ Launch' },
        { feature: 'Unlimited referral orders', kick: '✓ Free', comp: '✓ Launch' },
        { feature: 'Custom commission', kick: '✓', comp: '✓' },
        { feature: 'Commission override', kick: '✓ Pro', comp: '✓' },
        { feature: 'Creator analytics', kick: '✓', comp: '✓' },
        { feature: 'Program reporting', kick: '✓ Premium', comp: '✓' },
        { feature: 'Fraud protection', kick: '✓ Free', comp: '△ Plan/features dependent' },
        { feature: 'Bot/suspicious activity protection', kick: '✓ Free', comp: '△' },
        { feature: 'Manual refund deduction', kick: '✓ Pro', comp: '✓' },
        { feature: 'Automated refund protection', kick: '✓ Premium', comp: '△ Reversal/approval workflow' },
        { feature: 'Approval/hold protection', kick: '✓', comp: '✓' },
        { feature: '7-day post-delivery protection', kick: '✓', comp: '✕' },
        { feature: 'Creator portal', kick: '✓', comp: '✓' },
        { feature: 'Custom email', kick: '✓ Free', comp: '✓' },
        { feature: 'Custom coupon codes', kick: '✓ Premium', comp: '✓' },
        { feature: 'Automated payouts', kick: '△', comp: '✓' },
        { feature: 'Dedicated account manager', kick: '✓ Premium', comp: '△ Scale' },
        { feature: 'API / integrations', kick: '✓ Premium', comp: '✓' },
        { feature: '0% revenue share', kick: '✓', comp: '✕' },
      ],
    },
    bixgrow: {
      name: 'BixGrow',
      headline: 'Kick Affiliate vs. BixGrow',
      tagline:
        'Kick adds a dedicated commission-protection workflow designed to help merchants control refunds, returns and creator payouts.',
      summary:
        'Kick adds a dedicated commission-protection workflow designed to help merchants control refunds, returns and creator payouts. While BixGrow offers basic affiliate features, merchants frequently struggle when managing complex payout hold periods, creator tiers, and return reconciliation.',
      advantages: [
        '7-day post-delivery commission protection',
        '$19 Pro plan',
        '0% performance fee',
        'Fraud/bot protection',
        'Automated refund & return protection',
        'Custom creator commission controls',
        'Creator + program analytics',
        '24/7 support',
        '$59 Premium with unlimited creators',
      ],
      tableRows: [
        { feature: 'Starting paid price', kick: '$19/mo', comp: '$19.99/mo' },
        { feature: 'Performance fee', kick: '✓ 0%', comp: '✓ 0%' },
        { feature: 'Free plan', kick: '✓', comp: '✓' },
        { feature: 'Free referral orders', kick: '✓ Unlimited', comp: '△ 50/month' },
        { feature: 'Unlimited active creators', kick: '✓ Premium', comp: '✓ Scale' },
        { feature: 'Unlimited programs', kick: '✓ Premium', comp: '✓ Scale' },
        { feature: 'Unlimited referral orders', kick: '✓', comp: '✓ Scale' },
        { feature: 'Custom commission', kick: '✓', comp: '✓' },
        { feature: 'Commission override', kick: '✓ Pro', comp: '✓ Advanced commission rules' },
        { feature: 'Creator analytics', kick: '✓', comp: '✓' },
        { feature: 'Program reporting', kick: '✓ Premium', comp: '△ Reporting available' },
        { feature: 'Fraud protection', kick: '✓ Free', comp: '✓ Scale' },
        { feature: 'Bot/suspicious activity protection', kick: '✓', comp: '△ Fraud protection' },
        { feature: 'Manual refund deduction', kick: '✓ Pro', comp: '✕' },
        { feature: 'Automated refund protection', kick: '✓ Premium', comp: '✕' },
        { feature: 'Approval/hold protection', kick: '✓', comp: '✕' },
        { feature: '7-day post-delivery protection', kick: '✓', comp: '✕' },
        { feature: 'Creator portal', kick: '✓', comp: '✓' },
        { feature: 'Custom email', kick: '✓ Free', comp: '✓' },
        { feature: 'Anti-leak coupon', kick: '✓', comp: '✓ Pro' },
        { feature: 'Dedicated account manager', kick: '✓ Premium', comp: '△' },
        { feature: 'API access', kick: '✓ Premium', comp: '✓ Advanced' },
        { feature: 'Webhooks', kick: '✓ Pro', comp: '✓ Pro' },
        { feature: '24/7 support', kick: '✓', comp: '✓' },
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
          {/* <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            {data.summary}
          </p> */}
        </div>

        {/* Key Advantages Grid */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
            WHY MERCHANTS CHOOSE KICK AFFILIATE:
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
                <span className="font-medium text-slate-900">{adv}</span>
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
                  Kick Affiliate
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
                  </td>

                  {/* Kick Affiliate Column */}
                  <td className="p-4 sm:p-5 text-center bg-primary/5 border-x border-primary/15">
                    {renderCell(row.kick, true)}
                  </td>

                  {/* Competitor Column */}
                  <td className="p-4 sm:p-5 text-center text-slate-600">
                    {renderCell(row.comp, false)}
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
