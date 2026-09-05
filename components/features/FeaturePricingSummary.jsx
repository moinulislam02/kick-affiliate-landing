// components/features/FeaturePricingSummary.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../primitives/Button';

export default function FeaturePricingSummary({ onBookDemo }) {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      desc: 'For stores launching their first affiliate program.',
      highlighted: false,
      features: [
        'Up to $1,000 monthly affiliate sales',
        'Unlimited active affiliates',
        'Dual link & coupon tracking',
        'Standard creator portal',
      ],
      cta: 'Start for Free',
    },
    {
      name: 'Growth',
      price: '$29',
      period: '/month',
      desc: 'For scaling DTC brands growing creator partnerships.',
      highlighted: false,
      features: [
        'Up to $5,000 monthly affiliate sales',
        'Multi-tier commission engine',
        'Custom affiliate registration page',
        'Email notifications & triggers',
      ],
      cta: 'Start 14-Day Free Trial',
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      desc: 'Our most popular plan for established Shopify brands.',
      highlighted: true,
      badge: 'Most Popular',
      features: [
        'Up to $20,000 monthly affiliate sales',
        'Automated refund reconciliation',
        '1-Click batch PayPal MassPay exports',
        'VIP creator overrides & media kits',
        'Anti-fraud self-referral blocker',
      ],
      cta: 'Start 14-Day Free Trial',
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      desc: 'For high-volume Shopify Plus stores.',
      highlighted: false,
      features: [
        'Unlimited monthly affiliate sales',
        'Custom domain portal (e.g. creators.brand.com)',
        'Dedicated onboarding manager',
        'Custom webhook integrations & SLA',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Transparent Pricing
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            Get the Perfect KickAffiliate Plan for Your Store
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Transparent plans that scale with your affiliate revenue. No hidden fees or surprise charges.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                plan.highlighted
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10 border-2 border-primary ring-4 ring-primary/10'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="font-display font-bold text-lg mb-1">{plan.name}</h3>
                <p className={`text-xs mb-5 ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-200/40">
                  <span className="font-display font-black text-3xl sm:text-4xl tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-xs font-medium ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs font-medium">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-primary' : 'text-emerald-500'
                        }`}
                      />
                      <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onBookDemo}
                className={`w-full h-11 rounded-full text-xs font-bold uppercase tracking-wider transition-all select-none shadow-xs ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-primary/25'
                    : 'bg-white border border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Link to full pricing page */}
        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover transition-colors"
          >
            Compare All Plan Features &amp; Add-ons <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
