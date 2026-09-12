'use client';

import React, { useState } from 'react';
import { ChevronDown, PlusCircle, MinusCircle } from 'lucide-react';

export default function PricingMatrix() {
  const [showComparison, setShowComparison] = useState(true);
  const [collapsedCategories, setCollapsedCategories] = useState({
    pricing: false,
    programSettings: false,
    recruitment: false,
    protection: false,
  });

  const toggleCategory = (key) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categories = [
    {
      id: 'pricing',
      name: 'Pricing',
      rows: [
        {
          name: 'Recurring fee',
          desc: 'Billed monthly or annually',
          starter: 'Free',
          pro: '$19/mo ($15/mo billed yearly)',
          premium: '$59/mo ($47/mo billed yearly)',
        },
        {
          name: 'Performance fee',
          desc: '% of successful referral sales',
          starter: 'None',
          pro: 'None',
          premium: 'None',
        },
      ],
    },
    {
      id: 'programSettings',
      name: 'Program Settings',
      rows: [
        {
          name: 'Program / offer limit',
          desc: 'Number of active commission campaigns',
          starter: '1 active program',
          pro: '10 active programs',
          premium: 'Unlimited',
        },
        {
          name: 'Referral orders',
          desc: 'Tracked order volume & sales attribution',
          starter: 'Unlimited',
          pro: 'Unlimited',
          premium: 'Unlimited',
        },
        {
          name: 'Dashboard access',
          desc: 'Full access to metrics, charts, and reports',
          starter: 'Full access',
          pro: 'Full access',
          premium: 'Full access',
        },
        {
          name: 'Commission rates on order values',
          desc: 'Percentage or fixed-amount rates',
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: 'Custom commission rate overrides per creator',
          desc: 'Override default rates with individual custom creator rates',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'Special product commission',
          desc: 'Define rates per specific product',
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: 'Exclude products/collections from commission',
          desc: 'Prevent commissions on selected items',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'Auto tier commission',
          desc: 'Increase commission based on performance tiers',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'Lifetime commission',
          desc: 'Reward affiliates on subsequent recurring buys',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'New customer commission',
          desc: 'Pay higher rates strictly on first-time buyers',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'Subscription order commission',
          desc: 'Integrate rates directly on recurring orders',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'Special coupon commission',
          desc: 'Custom coupon code attribution matches',
          starter: false,
          pro: false,
          premium: true,
        },
      ],
    },
    {
      id: 'recruitment',
      name: 'Creator Management & Analytics',
      rows: [
        {
          name: 'Active creator limits',
          desc: 'Number of registered affiliates in list',
          starter: '5 creators',
          pro: '50 creators',
          premium: 'Unlimited',
        },
        {
          name: 'Detailed Creator Analytics & Reports',
          desc: 'Daily sales performance charts, orders ledger, and date breakdowns',
          starter: false,
          pro: true,
          premium: true,
        },
        {
          name: 'Direct login to Creator Portal',
          desc: 'Secure email and password login for registered creators',
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: 'Email Notification',
          desc: 'Automated welcome and milestone emails',
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: 'Customer support',
          desc: 'Technical and merchant assistance',
          starter: '24/7 support',
          pro: 'Priority 24/7 support',
          premium: 'Dedicated manager & 24/7',
        },
        {
          name: 'Affiliate signup page',
          desc: 'Landing page configuration',
          starter: 'Standard',
          pro: 'Customizable',
          premium: 'Branded + Custom Domain',
        },
        {
          name: 'Affiliate portal dashboard',
          desc: 'Creator dashboard logins',
          starter: 'Full access',
          pro: 'Branded portal',
          premium: 'Branded portal + API',
        },
      ],
    },
    {
      id: 'protection',
      name: 'Fraud & Refund Protection',
      rows: [
        {
          name: 'Automated Webhook Refund & Return Protection',
          desc: 'Auto-detects Shopify customer refunds & cancellations to protect unpaid commissions',
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: 'Manual referral order verification',
          desc: 'Approve or reject commissions before payout batches',
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: 'Anti-fraud & self-referral checks',
          desc: 'Prevent creators from earning commission on own purchases',
          starter: true,
          pro: true,
          premium: true,
        },
        {
          name: 'Custom portal domain & API webhook integration',
          desc: 'Host affiliate portal on your own domain with direct API endpoints',
          starter: false,
          pro: false,
          premium: true,
        },
        {
          name: 'Dedicated Account Manager',
          desc: '1-on-1 strategy sessions and priority technical assistance',
          starter: false,
          pro: false,
          premium: true,
        },
      ],
    },
  ];

  return (
    <div className="space-y-10 max-w-[1200px] mx-auto">
      {/* Toggle Comparison Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowComparison((prev) => !prev)}
          className="bg-white hover:bg-primary/5 text-primary border border-primary/30 hover:border-primary px-6 py-3 rounded-full text-sm font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
        >
          {showComparison ? (
            <MinusCircle className="w-4 h-4 text-primary" />
          ) : (
            <PlusCircle className="w-4 h-4 text-primary" />
          )}
          <span>{showComparison ? 'Hide plan comparison' : 'Compare plan features'}</span>
        </button>
      </div>

      {showComparison && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-slate-100/90 border-b border-slate-200 p-4 sm:p-5 font-display font-extrabold text-xs sm:text-sm text-slate-900">
            <div className="col-span-6 md:col-span-5">Features &amp; Capabilities</div>
            <div className="col-span-2 text-center text-slate-800">
              Starter
              <span className="block text-[11px] font-normal text-slate-500">$0/mo</span>
            </div>
            <div className="col-span-2 text-center text-primary bg-primary/10 -my-4 sm:-my-5 py-4 sm:py-5 px-2 border-x border-primary/20">
              Pro
              <span className="block text-[11px] font-normal text-primary">$19/mo</span>
            </div>
            <div className="col-span-2 md:col-span-3 text-center text-slate-800">
              Scale Premium
              <span className="block text-[11px] font-normal text-slate-500">$59/mo</span>
            </div>
          </div>

          {/* Categories */}
          {categories.map((cat) => {
            const isCollapsed = collapsedCategories[cat.id];

            return (
              <div key={cat.id} className="border-b border-slate-200 last:border-b-0">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 p-4 px-6 flex justify-between items-center transition-colors cursor-pointer border-b border-slate-200/60"
                >
                  <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-primary">
                    {cat.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary transition-transform duration-200 ${
                      isCollapsed ? '' : 'rotate-180'
                    }`}
                  />
                </button>

                {/* Category Rows */}
                {!isCollapsed && (
                  <div className="divide-y divide-slate-100">
                    {cat.rows.map((row, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="grid grid-cols-12 items-center hover:bg-slate-50/60 transition-colors text-xs sm:text-sm"
                      >
                        {/* Feature name & desc */}
                        <div className="col-span-6 md:col-span-5 p-4 px-6">
                          <div className="font-bold text-slate-900">{row.name}</div>
                          {row.desc && (
                            <div className="text-[11px] text-slate-500 font-normal mt-0.5 leading-snug">
                              {row.desc}
                            </div>
                          )}
                        </div>

                        {/* Starter Value */}
                        <div className="col-span-2 p-4 text-center font-medium text-slate-700">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <span className="text-primary font-black text-base">✓</span>
                            ) : (
                              <span className="text-slate-300 font-bold text-base">—</span>
                            )
                          ) : (
                            <span className="font-semibold text-slate-900">{row.starter}</span>
                          )}
                        </div>

                        {/* Pro Value (Highlighted) */}
                        <div className="col-span-2 p-4 text-center font-bold text-primary bg-primary/5 border-x border-primary/15 h-full flex items-center justify-center">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <span className="text-primary font-black text-base">✓</span>
                            ) : (
                              <span className="text-slate-300 font-bold text-base">—</span>
                            )
                          ) : (
                            <span className="text-primary font-bold">{row.pro}</span>
                          )}
                        </div>

                        {/* Scale Premium Value */}
                        <div className="col-span-2 md:col-span-3 p-4 text-center font-medium text-slate-700">
                          {typeof row.premium === 'boolean' ? (
                            row.premium ? (
                              <span className="text-primary font-black text-base">✓</span>
                            ) : (
                              <span className="text-slate-300 font-bold text-base">—</span>
                            )
                          ) : (
                            <span className="font-semibold text-slate-900">{row.premium}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
