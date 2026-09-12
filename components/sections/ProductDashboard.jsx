'use client';

import React from 'react';
import { Activity, UserCheck, CheckCircle } from 'lucide-react';
import Section from '../primitives/Section';
import Eyebrow from '../primitives/Eyebrow';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function ProductDashboard() {
  const points = [
    {
      icon: <Activity className="w-5 h-5 text-primary" />,
      title: 'Real-Time Performance Tracking',
      description: 'See clicks, orders, revenue, and conversion rate update as they happen, per creator and per campaign.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-primary" />,
      title: 'Fraud & Suspicious Activity Detection',
      description: 'Automatically flag fake orders, bot-generated traffic, and coupon abuse, so you can block commission before it\'s paid.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      title: 'Automatic Refund Adjustment',
      description: 'If an order is refunded or cancelled before commission is approved for payout, Kick automatically deducts it no manual math.',
    },
  ];

  return (
    <div className="bg-white border-b border-slate-100">
      <Section>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Eyebrow>TRACK</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Your Complete Affiliate Command Center
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Monitor campaign performance, creator activity, and commission status in one unified dashboard, built specifically to catch what other affiliate trackers miss.
          </p>
        </div>

        {/* Browser Chrome Wrapper with Track Dashboard Image */}
        <FadeInOnScroll direction="up" duration={0.7} className="mb-16">
          <div className="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden w-full mx-auto">
            {/* Browser Header Bar */}
            <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-slate-950 border border-slate-800 px-6 sm:px-10 py-1.5 rounded-lg text-slate-400 text-[11px] font-mono select-none">
                https://admin.kickaffiliate.com/overview
              </div>
            </div>

            {/* Dashboard Screenshot */}
            <div className="w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src="/track.png"
                alt="KickAffiliate Real-Time Tracking & Command Center"
                className="w-full h-auto object-cover select-none"
              />
            </div>
          </div>
        </FadeInOnScroll>

        {/* Supporting Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full mx-auto">
          {points.map((pt, index) => (
            <FadeInOnScroll
              key={index}
              direction="up"
              delay={index * 0.15} // Staggered delay sequentially
              duration={0.5}
              className="flex flex-col items-center md:items-start text-center md:text-left p-4 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-sm">
                {pt.icon}
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base">
                {pt.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed max-w-[280px] md:max-w-none">
                {pt.description}
              </p>
            </FadeInOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
}
