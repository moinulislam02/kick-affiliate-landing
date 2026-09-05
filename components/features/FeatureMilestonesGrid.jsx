// components/features/FeatureMilestonesGrid.jsx
'use client';

import React from 'react';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export default function FeatureMilestonesGrid({ feature, onBookDemo }) {
  const milestones = feature.milestones || {
    tag: 'Scale & Reliability',
    title: 'See how high-growth Shopify brands use KickAffiliate to hit milestones',
    description:
      'Say goodbye to broken affiliate links and missed commissions. Our dual-attribution infrastructure handles millions of monthly clicks with zero downtime.',
    stats: [
      { value: '$18.4M+', label: 'Affiliate Gross Revenue' },
      { value: '250,000+', label: 'Active Creators' },
      { value: '11.2x', label: 'Average Merchant ROI' },
      { value: '99.98%', label: 'Tracking Reliability' },
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 2x2 Stats Card Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
            {milestones.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-center flex flex-col justify-center items-center"
              >
                <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-[13px] text-slate-500 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Narrative Copy & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <TrendingUp className="w-3.5 h-3.5" />
              {milestones.tag}
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[40px] text-slate-950 tracking-tight leading-[1.18]">
              {milestones.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {milestones.description}
            </p>

            <div className="pt-2">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover group transition-colors"
              >
                Explore Enterprise Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
