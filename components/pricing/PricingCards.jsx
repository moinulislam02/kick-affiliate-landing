'use client';

import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Button from '../primitives/Button';

export default function PricingCards({ onBookDemo }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for new Shopify merchants launching their first affiliate & referral program.',
      monthlyPrice: 0,
      annualPrice: 0,
      badge: 'Free Forever',
      ctaText: 'Start for Free',
      ctaVariant: 'secondary',
      popular: false,
      features: [
        'Up to 10 active creators',
        'Standard referral links & coupon codes',
        'Single commission program rule',
        '30-day tracking cookie window',
        'Basic order attribution & reporting',
        'Standard creator portal dashboard',
        'Community & email support',
      ],
      limitations: [
        'No white-label custom branding',
        'No multi-tier commission rules',
      ],
    },
    {
      name: 'Pro (Growth)',
      description: 'The complete toolkit for scaling DTC brands looking to automate their influencer channel.',
      monthlyPrice: 29,
      annualPrice: 23,
      badge: 'Most Popular',
      ctaText: 'Start 14-Day Free Trial',
      ctaVariant: 'primary',
      popular: true,
      features: [
        'Unlimited active creators & affiliates',
        'Unlimited tiered commission programs',
        '0% additional transaction fees',
        'Zero-loss dual tracking (Links + Codes)',
        'Custom white-label creator portal',
        'Auto refund & cancellation reconciliation',
        '1-Click batch payouts & PayPal CSV export',
        'Fraud guard & self-referral detection',
        'Priority live chat & email support',
      ],
      limitations: [],
    },
    {
      name: 'Premium / Plus',
      description: 'Advanced capabilities and white-glove onboarding for high-growth & Shopify Plus stores.',
      monthlyPrice: 99,
      annualPrice: 79,
      badge: 'For Scaling Brands',
      ctaText: 'Start 14-Day Free Trial',
      ctaVariant: 'secondary',
      popular: false,
      features: [
        'Everything in Pro plan',
        'Custom domain for creator portal',
        'Custom onboarding questions & forms',
        'Multi-store & currency conversion',
        'Raw webhook streaming & REST API',
        'Automated milestone bonus rewards',
        '1-on-1 migration concierge service',
        'Dedicated account manager (SLA < 1h)',
      ],
      limitations: [],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Billing Switcher Toggle */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-full border border-slate-200">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              !isAnnual
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
              isAnnual
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-emerald-600 font-bold text-xs">
              (Save 20%)
            </span>
          </button>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          All paid plans include a risk-free 14-day trial. Billed securely through Shopify.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div
              key={idx}
              className={`relative rounded-3xl transition-all duration-200 flex flex-col justify-between p-8 sm:p-9 ${
                plan.popular
                  ? 'bg-white border-2 border-primary shadow-xl shadow-primary/5 ring-1 ring-primary/20 scale-100 md:-translate-y-2'
                  : 'bg-white border border-slate-200/80 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Most Popular Ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-extrabold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xl text-slate-950">
                    {plan.name}
                  </h3>
                  {!plan.popular && (
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 min-h-[36px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-slate-950 tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      / month
                    </span>
                  </div>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                      Billed annually (${price * 12}/yr) — Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr
                    </p>
                  )}
                  {plan.monthlyPrice === 0 && (
                    <p className="text-[11px] text-slate-400 font-medium mt-1">
                      No credit card or setup fees required
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onBookDemo}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                    What&rsquo;s included:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {plan.features.map((feat, featIdx) => (
                      <li key={featIdx} className="flex items-start gap-2.5">
                        <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5 border border-emerald-200">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Shopify Billing protected</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
