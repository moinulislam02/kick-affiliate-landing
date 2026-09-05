'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the 14-day free trial work?',
      a: 'You can install KickAffiliate and test any of our paid plans for 14 days completely free. You will not be billed until the 14-day trial concludes. You can change plans or cancel at any time directly through your Shopify App admin.',
    },
    {
      q: 'Are there any hidden transaction fees on referred sales?',
      a: 'No. Unlike some competitors that take a 1% - 3% cut on every referral order, KickAffiliate charges 0% extra transaction fees. You keep 100% of your store revenue.',
    },
    {
      q: 'How is billing processed?',
      a: 'All subscription charges are processed through Shopify Official Billing API. Your subscription charge appears as a single unified line item on your regular Shopify monthly invoice.',
    },
    {
      q: 'Can I migrate my existing creators from GoAffPro, UpPromote, or Refersion?',
      a: 'Yes! You can export your creator list and active coupon codes as a CSV and import them directly into KickAffiliate in under 3 minutes with zero downtime for your creators.',
    },
    {
      q: 'How does KickAffiliate handle customer returns and refunds?',
      a: 'When an order is refunded, cancelled, or returned in Shopify, KickAffiliate receives a real-time webhook and automatically deducts or reverses the calculated commission before you pay out your creators.',
    },
    {
      q: 'Do you offer custom pricing or migration assistance for Shopify Plus stores?',
      a: 'Yes. For high-volume Shopify Plus stores with large creator networks, we provide a dedicated account manager, custom onboarding, and free migration assistance.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
          <HelpCircle className="w-3.5 h-3.5" />
          Frequently Asked Questions
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
          Got Questions About Our Pricing?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Everything you need to know about our plans, billing, and trial policies.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-slate-900 hover:text-primary transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
