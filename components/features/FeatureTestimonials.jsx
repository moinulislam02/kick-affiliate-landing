// components/features/FeatureTestimonials.jsx
'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function FeatureTestimonials() {
  const reviews = [
    {
      stars: 5,
      quote:
        'The dual-tracking system saved us thousands in missing commissions. Our creators love the self-serve portal, and automated refund deductions prevent any payout headaches.',
      name: 'Marcus Vance',
      role: 'Head of Growth, Sol Apparel',
      storeType: 'Shopify Plus • Apparel DTC',
      impact: '+340% Affiliate GMV in 90 days',
      avatarText: 'MV',
    },
    {
      stars: 5,
      quote:
        'Migrating from our legacy affiliate app took less than 15 minutes. The tiered commission engine motivated our top 20 creators to double their posting frequency.',
      name: 'Elena Rostova',
      role: 'Founder & CMO, Glow Botanicals',
      storeType: 'Shopify • Skincare DTC',
      impact: '12.4x Return on Ad Spend',
      avatarText: 'ER',
    },
    {
      stars: 5,
      quote:
        'KickAffiliate is hands down the cleanest affiliate app on Shopify. The anti-self-referral guard stopped coupon leaks, and batch PayPal payouts take 30 seconds.',
      name: 'David Chen',
      role: 'E-commerce Director, Apex Gear',
      storeType: 'Shopify Plus • Sports Equipment',
      impact: '$180k+ Monthly Creator Sales',
      avatarText: 'DC',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Customer Success
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            Our Excellence, in Our Customers&apos; Words
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            See how high-performing Shopify merchants scale their ambassador and referral programs with KickAffiliate.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 p-7 lg:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(rev.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author & Growth Badge */}
              <div className="pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                    {rev.avatarText}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 leading-tight">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{rev.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500 font-medium">
                  <span>{rev.storeType}</span>
                  <span className="text-emerald-600 font-bold font-mono">{rev.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
