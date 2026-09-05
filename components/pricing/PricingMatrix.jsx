'use client';

import React from 'react';
import { Check, Minus, Info } from 'lucide-react';

export default function PricingMatrix() {
  const categories = [
    {
      name: 'Tracking & Attribution',
      rows: [
        { feature: 'Active Creators Limit', starter: 'Up to 10', pro: 'Unlimited', premium: 'Unlimited' },
        { feature: 'Dual Attribution (Link + Code)', starter: true, pro: true, premium: true },
        { feature: 'Custom Tracking Cookie Window', starter: '30 Days fixed', pro: '1 - 365 Days', premium: '1 - 365 Days' },
        { feature: 'Shopify Automatic Coupon Code Sync', starter: true, pro: true, premium: true },
        { feature: 'Product Deep-Link Generator', starter: false, pro: true, premium: true },
        { feature: 'Cart Attribute Tagging', starter: true, pro: true, premium: true },
      ],
    },
    {
      name: 'Commissions & Rules Engine',
      rows: [
        { feature: 'Commission Programs Supported', starter: '1 Program', pro: 'Unlimited', premium: 'Unlimited' },
        { feature: 'Percentage & Fixed Amount Rates', starter: true, pro: true, premium: true },
        { feature: 'Individual Creator Custom Overrides', starter: false, pro: true, premium: true },
        { feature: 'Product / Collection-Specific Rules', starter: false, pro: true, premium: true },
        { feature: 'Milestone & Performance Bonuses', starter: false, pro: true, premium: true },
        { feature: 'Auto-Hold Return & Refund Period', starter: '14 Days', pro: 'Custom (0-90 days)', premium: 'Custom (0-90 days)' },
      ],
    },
    {
      name: 'Creator Experience & Portal',
      rows: [
        { feature: 'Self-Serve Creator Dashboard', starter: true, pro: true, premium: true },
        { feature: 'Passwordless Magic-Link / OTP Login', starter: true, pro: true, premium: true },
        { feature: 'White-Label Branding (Logos & Colors)', starter: false, pro: true, premium: true },
        { feature: 'Custom Portal Subdomain', starter: false, pro: false, premium: true },
        { feature: 'Brand Marketing Assets Repository', starter: false, pro: true, premium: true },
        { feature: 'Creator Payout Details Submission (PayPal/Bank)', starter: true, pro: true, premium: true },
      ],
    },
    {
      name: 'Payouts & Financial Accounting',
      rows: [
        { feature: 'Automatic Refund Reconciliation', starter: true, pro: true, premium: true },
        { feature: '1-Click Batch Payout Status Ledger', starter: true, pro: true, premium: true },
        { feature: 'PayPal MassPay CSV Export', starter: false, pro: true, premium: true },
        { feature: 'Bank Transfer / Wire Export Format', starter: false, pro: true, premium: true },
        { feature: 'Additional App Transaction Fees', starter: '0%', pro: '0%', premium: '0%' },
      ],
    },
    {
      name: 'Integrations, Security & Support',
      rows: [
        { feature: 'Shopify Embedded App Bridge', starter: true, pro: true, premium: true },
        { feature: 'Lightweight Theme App Embed (<8kb)', starter: true, pro: true, premium: true },
        { feature: 'Fraud Guard (Anti-Self-Referral)', starter: false, pro: true, premium: true },
        { feature: 'REST API & Webhooks Access', starter: false, pro: false, premium: true },
        { feature: 'Multi-Store & Currency Sync', starter: false, pro: false, premium: true },
        { feature: 'Customer Support', starter: 'Email (24-48h)', pro: 'Priority Live Chat & Email (<2h)', premium: 'Dedicated Manager (SLA <1h)' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
          Compare All Plan Features
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Detailed breakdown of capabilities across all KickAffiliate subscription tiers.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="p-4 sm:p-5 w-1/3 font-display font-bold text-slate-900 text-sm">
                Features &amp; Capabilities
              </th>
              <th className="p-4 sm:p-5 text-center font-display font-bold text-slate-900 text-sm w-1/5">
                Starter
                <span className="block text-xs font-normal text-slate-500">$0/mo</span>
              </th>
              <th className="p-4 sm:p-5 text-center font-display font-bold text-primary text-sm w-1/5 bg-primary/5 border-x border-primary/20">
                Pro (Growth)
                <span className="block text-xs font-normal text-primary/80">$29/mo</span>
              </th>
              <th className="p-4 sm:p-5 text-center font-display font-bold text-slate-900 text-sm w-1/5">
                Premium / Plus
                <span className="block text-xs font-normal text-slate-500">$99/mo</span>
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-100">
            {categories.map((cat, catIdx) => (
              <React.Fragment key={catIdx}>
                {/* Category Header Row */}
                <tr className="bg-slate-100/70">
                  <td
                    colSpan={4}
                    className="p-3.5 px-5 font-display font-bold text-xs uppercase tracking-wider text-slate-800"
                  >
                    {cat.name}
                  </td>
                </tr>

                {/* Items in Category */}
                {cat.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 px-5 font-medium text-slate-800">
                      {row.feature}
                    </td>

                    {/* Starter */}
                    <td className="p-4 text-center text-slate-600">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-slate-900">{row.starter}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="p-4 text-center text-slate-900 font-semibold bg-primary/5 border-x border-primary/15">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="w-4 h-4 text-primary mx-auto stroke-[2.5]" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-primary font-bold">{row.pro}</span>
                      )}
                    </td>

                    {/* Premium */}
                    <td className="p-4 text-center text-slate-600">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-slate-900">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
