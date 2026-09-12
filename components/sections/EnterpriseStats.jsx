'use client';

import React from 'react';
import { BarChart3, Globe, Lock, ArrowRight } from 'lucide-react';
import Section from '../primitives/Section';
import FadeInOnScroll from '../primitives/FadeInOnScroll';
import Button from '../primitives/Button';

export default function EnterpriseStats({ onBookDemo }) {
  const features = [
    {
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
      title: 'Fraud Guard Monitoring',
      description: 'Identify click spamming, coupon abuse, and self-referrals automatically flagged directly in your dashboard.',
      visual: (
        <div className="bg-indigo-950 px-4 py-3.5 rounded-xl border border-indigo-900 flex items-center justify-between text-xs text-indigo-200 h-[50px]">
          <span className="font-semibold text-white">Pixel Sync Status</span>
          <span className="text-emerald-400 font-mono font-bold">100% Active</span>
        </div>
      ),
    },
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      title: 'Commission Protection at Scale',
      description: 'Whether you\'re running 5 creators or 500, every order goes through the same delivery-based hold and refund-adjustment logic.',
      visual: (
        <div className="bg-slate-900 px-4 py-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300 h-[50px]">
          <span>Supported Currencies</span>
          <div className="flex gap-1.5 font-mono font-bold text-white text-[10px]">
            <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">USD</span>
            <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">EUR</span>
            <span className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">GBP</span>
          </div>
        </div>
      ),
    },
    {
      icon: <Lock className="w-5 h-5 text-primary" />,
      title: 'Real-Time Affiliate Tracking',
      description: 'Track clicks, orders, revenue, conversion rates, and commissions across your creator campaigns.',
      visual: (
        <div className="bg-indigo-900 px-4 py-3.5 rounded-xl border border-indigo-850 flex items-center justify-between text-xs text-indigo-100 h-[50px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span>Abuse Alert: Self Referral</span>
          </div>
          <span className="text-red-400 font-bold">Blocked</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white border-b border-slate-100">
      <Section>
        {/* Header Block with Secondary CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl space-y-4 text-center md:text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Built to Track More. Protect More. Grow Smarter.
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Everything you need to manage creator affiliate sales with better visibility and stronger commission control.
            </p>
          </div>
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <Button variant="secondary" onClick={onBookDemo} className="gap-2">
              Explore Enterprise Plans <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Features Columns */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {features.map((feat, index) => (
            <FadeInOnScroll
              key={index}
              direction="up"
              delay={index * 0.15}
              className="h-full flex flex-col justify-between p-6 bg-slate-50 border border-slate-200/50 rounded-2xl"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                  {feat.icon}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-display font-bold text-slate-800 text-base">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-auto">
                {feat.visual}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
}
