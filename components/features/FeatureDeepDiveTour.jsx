// components/features/FeatureDeepDiveTour.jsx
'use client';

import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Link2,
  Tag,
  Percent,
  ShieldCheck,
  Wallet,
  Users,
  Copy,
  Zap,
} from 'lucide-react';
import Button from '../primitives/Button';

export default function FeatureDeepDiveTour({ feature, onBookDemo }) {
  const deepDives = feature.deepDives || [];

  const renderMockup = (type) => {
    switch (type) {
      case 'attribution-stream':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-semibold text-slate-300">Live Attribution Stream</span>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">● Tracking Active</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Tag className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-bold text-white">EMMA20 (Discount Code)</p>
                    <p className="text-[10px] text-slate-400">Order #1042 • $140.00 subtotal</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[10px]">
                  +$14.00 Due
                </span>
              </div>
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Link2 className="w-4 h-4 text-indigo-400" />
                  <div>
                    <p className="font-bold text-white">?ref=alex_fitness (Link Click)</p>
                    <p className="text-[10px] text-slate-400">Order #1043 • $85.50 subtotal</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono font-bold text-[10px]">
                  +$8.55 Due
                </span>
              </div>
            </div>
          </div>
        );

      case 'token-ledger':
      case 'commission-tiers':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span className="text-slate-800">Dynamic Commission Tiers</span>
              <span className="text-primary text-[11px]">3 Active Rules</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Standard Affiliate</p>
                  <p className="text-[11px] text-slate-500">Base level for new creators</p>
                </div>
                <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200">
                  10%
                </span>
              </div>
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-blue-950">VIP Creator Tier</p>
                  <p className="text-[11px] text-blue-700">&gt; $5,000 monthly sales</p>
                </div>
                <span className="font-mono font-bold text-primary bg-white px-2.5 py-1 rounded border border-blue-200">
                  15%
                </span>
              </div>
              <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-indigo-950">Ambassador Elite</p>
                  <p className="text-[11px] text-indigo-700">&gt; $20,000 monthly sales</p>
                </div>
                <span className="font-mono font-bold text-indigo-800 bg-white px-2.5 py-1 rounded border border-indigo-200">
                  20% + Bonus
                </span>
              </div>
            </div>
          </div>
        );

      case 'magic-login':
      case 'media-kit':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                  S
                </div>
                <span className="text-xs font-bold text-white">Sarah Jenkins (Creator)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                Approved
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Pending Payout</span>
                <span className="font-display font-bold text-lg text-emerald-400">$640.00</span>
              </div>
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Total Orders Driven</span>
                <span className="font-display font-bold text-lg text-white">74 Orders</span>
              </div>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-mono text-[11px]">?ref=sarah_style</span>
              <button className="flex items-center gap-1 text-[11px] text-primary font-bold hover:underline">
                <Copy className="w-3 h-3" /> Copy
              </button>
            </div>
          </div>
        );

      case 'refund-ledger':
      case 'payout-batch':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span>Payout Settlement Ledger</span>
              <span className="text-slate-500 text-[11px]">Ready to Settle</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Total Unpaid Balance</p>
                  <p className="text-[11px] text-slate-500">12 Creators approved</p>
                </div>
                <span className="font-mono font-bold text-emerald-600 text-sm">$3,420.00</span>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200/60 flex items-center gap-2 text-[11px] text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>3 orders adjusted after returns (-$45.00 auto-reconciled)</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold">
              <span className="text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Security &amp; Fraud Telemetry
              </span>
              <span className="text-emerald-400 font-mono text-[11px]">Active</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Self-Referral Attempt Blocked</span>
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold text-[10px]">
                  Blocked
                </span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Shopify Webhook HMAC Signature</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">
                  Verified
                </span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Feature Deep-Dive Tour
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            KickAffiliate&apos;s Core Feature Tour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Explore how our native Shopify platform automates your creator partnerships from click to payout.
          </p>
        </div>

        {/* Alternating Deep Dives */}
        <div className="space-y-24 md:space-y-28">
          {deepDives.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {item.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Mockup */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {renderMockup(item.mockupType)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Bottom Action Bar */}
        <div className="pt-8 text-center flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            onClick={onBookDemo}
            className="h-12 px-8 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20"
          >
            Start 14-Day Free Trial <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <button
            onClick={onBookDemo}
            className="h-12 px-7 rounded-full border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
