// components/features/FeatureBenefitsGrid.jsx
'use client';

import React from 'react';
import { Link2, Tag, ShieldCheck, Zap, Percent, LayoutDashboard, Wallet, TrendingUp } from 'lucide-react';

const iconMap = {
  Link2: Link2,
  Tag: Tag,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Percent: Percent,
  LayoutDashboard: LayoutDashboard,
  Wallet: Wallet,
  TrendingUp: TrendingUp,
};

export default function FeatureBenefitsGrid({ feature }) {
  const benefits = feature.benefits || [];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Key Advantages
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            Benefits of using KickAffiliate {feature.breadcrumb ? `for ${feature.breadcrumb}` : ''}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Engineered specifically for modern Shopify DTC brands seeking reliable tracking and streamlined workflows.
          </p>
        </div>

        {/* 4 Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || Zap;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-7 lg:p-8 shadow-xs hover:shadow-md hover:border-primary/30 transition-all flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2.5 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
