'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PricingCards({ onBookDemo }) {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Starter',
      subtitle: 'FOR INDIVIDUALS & STARTERS',
      description: 'Perfect for new merchants starting with affiliate marketing.',
      priceMonthly: 0,
      priceYearly: 15, // monthly equivalent on yearly
      priceYearlyTotal: 0,
      savingsYearly: 0,
      promoBanner: 'Start immediately for free',
      featuresHeader: "What's included on Starter",
      features: [
        '5 creators',
        '1 active program',
        'Unlimited Referral Order',
        'Full Dashboard Access',
        'Direct login to Creator Portal',
        'Email Notification',
        '24/7 support',
      ],
      buttonText: 'Start for Free',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      subtitle: 'FOR GROWING BUSINESSES',
      description: 'Grow your sales with advanced management and custom commission rules.',
      priceMonthly: 19,
      priceYearly: 15,
      priceYearlyTotal: 180,
      savingsYearly: 48,
      promoBanner: '🚀 Includes 14-day free trial',
      featuresHeader: "What's included on Pro",
      features: [
        'Up to 50 active creators',
        'Up to 10 active programs',
        'Custom registration image backdrop',
        'Advanced commission overrides',
        'Full Creator Analytics & Reports',
        'Automated discount codes creation',
        'Affiliate portal access',
        'Priority email & chat support',
      ],
      buttonText: 'Start 14-day Free Trial',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Scale Premium',
      subtitle: 'FOR HIGH-VOLUME BRANDS',
      description: 'For high-volume brands requiring tailored scale, automation, and control.',
      priceMonthly: 59,
      priceYearly: 47,
      priceYearlyTotal: 564,
      savingsYearly: 144,
      promoBanner: 'Enterprise support & automated protection',
      featuresHeader: "What's included on Premium",
      features: [
        'Unlimited active creators',
        'Unlimited active programs',
        'Custom registration image backdrop',
        'Automated Refund & Return Protection',
        'Full Creator Analytics & Reports',
        'Advanced commission overrides',
        'Affiliate portal access',
        'Dedicated account manager',
        'Priority API & webhook integrations',
        '24/7 VIP priority support',
      ],
      buttonText: 'Upgrade to Premium',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Billing Switcher Toggle */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="inline-flex items-center p-1.5 bg-slate-200/80 rounded-full shadow-inner">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              billingCycle === 'yearly'
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <span>Yearly</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                billingCycle === 'yearly'
                  ? 'bg-white/20 text-white'
                  : 'bg-emerald-100 text-emerald-700'
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          All paid plans include a risk-free 14-day trial. Billed securely through Shopify.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-[1240px] mx-auto">
        {plans.map((plan) => {
          const displayPrice =
            billingCycle === 'yearly' ? plan.priceYearlyTotal : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`relative rounded-[24px] bg-white transition-all duration-200 flex flex-col justify-between p-8 sm:p-9 ${
                plan.popular
                  ? 'border-2 border-primary shadow-2xl shadow-primary/10 ring-4 ring-primary/10 md:-translate-y-2'
                  : 'border border-slate-200/90 shadow-md shadow-slate-100 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-extrabold tracking-wider uppercase px-4 py-1 rounded-full shadow-md shadow-primary/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Header */}
                <div className="space-y-2 mb-6">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
                    {plan.name}
                  </h2>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                    {plan.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 min-h-[84px] flex flex-col justify-start">
                  <div className="flex items-start">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 leading-tight mr-1">
                      $
                    </span>
                    <span className="font-display font-black text-5xl sm:text-6xl text-slate-950 tracking-tight leading-none">
                      {displayPrice}
                    </span>
                    <div className="ml-1.5 flex flex-col leading-tight mt-1">
                      <span className="text-xs font-bold text-slate-950">
                        {billingCycle === 'yearly' ? '/yr' : '/mo'}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">USD</span>
                    </div>
                  </div>

                  {billingCycle === 'yearly' ? (
                    <div className="mt-2.5 text-xs text-slate-600 font-medium flex items-center flex-wrap gap-1.5">
                      {plan.id === 'free' ? (
                        <span>Free forever</span>
                      ) : (
                        <>
                          <span>
                            Equivalent to{' '}
                            <strong className="text-slate-900 font-bold">
                              ${plan.priceYearly}/mo
                            </strong>
                          </span>
                          <span className="inline-block bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                            Save ${plan.savingsYearly}/yr
                          </span>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="mt-2.5 text-xs text-slate-500 font-medium">
                      <span>{plan.id === 'free' ? 'Free forever' : 'Billed monthly'}</span>
                    </div>
                  )}
                </div>

                {/* Promo Banner Strip */}
                <div className="bg-primary/10 border-y border-primary/20 -mx-8 sm:-mx-9 px-8 sm:px-9 py-3 text-center text-xs font-bold text-primary mb-7">
                  {plan.promoBanner}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider">
                    {plan.featuresHeader}
                  </h3>
                  <div className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 leading-snug">
                        <span className="text-primary font-black text-sm shrink-0 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-4 pt-2">
                <button
                  onClick={onBookDemo}
                  className={`w-full py-3.5 px-6 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-primary/25'
                      : 'bg-primary hover:bg-primary-hover text-white shadow-primary/20'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Shopify Billing protected</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
