'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the 14-day free trial work?',
      a: 'When you upgrade to the Pro plan, you get full access to all Pro features for 14 days without charge. You can cancel at any time during the trial to avoid charges.',
    },
    {
      q: 'Can I change my plan or cancel at any time?',
      a: 'Yes, you can upgrade, downgrade, or cancel your subscription directly from this page at any time. Changes will be reflected on your next Shopify billing cycle.',
    },
    {
      q: 'What happens if I exceed the creator limit on the Free plan?',
      a: "If you have 5 active creators and want to approve more, you'll need to upgrade to the Pro or Premium plan. We'll notify you when you reach the limit.",
    },
    {
      q: 'Are there any hidden transaction fees on commissions?',
      a: 'No. We do not charge any transaction fees or commission cuts on your affiliate sales. You only pay the flat subscription fee of your selected plan.',
    },
    {
      q: 'How is affiliate tracking verified?',
      a: 'Affiliate tracking is handled via URL parameters (ref=token) and unique Shopify discount codes. Transactions are captured securely via Shopify webhooks and verified against active rules.',
    },
    {
      q: 'How does annual billing work and how much do I save?',
      a: 'With annual billing, you pay upfront for the full year and save over 20% compared to monthly billing ($180/year vs $228/year on Pro, and $564/year vs $708/year on Scale Premium). You get all plan features with locked-in discounted pricing.',
    },
    {
      q: 'What is the difference between active programs on Starter, Pro, and Scale?',
      a: 'On the Starter plan, you can run 1 active campaign at a time. The Pro plan allows up to 10 simultaneously active campaigns (e.g., separate campaigns for TikTok, YouTube, or seasonal sales), and the Scale Premium plan offers unlimited active programs with no restrictions.',
    },
    {
      q: 'What is Automated Refund & Return Protection on the Scale plan?',
      a: 'On the Scale Premium plan, our system automatically listens to Shopify refund, return, and cancellation webhooks in real-time and marks affected commissions as Protected (voided). On Starter and Pro plans, you can still manually review and reject commissions on unfulfilled or returned orders before issuing payouts.',
    },
    {
      q: 'Can I set custom commission rates for individual top-performing creators?',
      a: 'Yes! On the Pro and Scale Premium plans, you can override your default program commission and set tailored flat or percentage rates for specific VIP creators directly inside their creator profile.',
    },
    {
      q: 'How does billing work, and what payment methods can I use?',
      a: "All subscription charges are handled securely through official Shopify App Billing and added directly to your standard Shopify store invoice. You don't need to enter a separate credit card—Shopify charges your existing store payment method on file.",
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
