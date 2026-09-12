// components/features/FeatureHero.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import Button from '../primitives/Button';

export default function FeatureHero({ feature, onBookDemo }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-200/60">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{feature.breadcrumb || feature.badge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              {feature.badge}
            </span>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-slate-950 tracking-tight leading-[1.12]">
              {feature.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {feature.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                onClick={onBookDemo}
                className="h-12 px-7 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20"
              >
                Start 14-Day Free Trial <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <button
                onClick={onBookDemo}
                className="h-12 px-6 rounded-full border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
              >
                Connect
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                1-Click Shopify install
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                Free setup assistance
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual / Feature Card (Gradient 3D Presentation) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-950 to-indigo-950 p-6 sm:p-8 text-white shadow-2xl shadow-indigo-950/20 border border-slate-800/80 overflow-hidden">
              {/* Isometric Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                    <Sparkles className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Live Engine Telemetry</h3>
                    <p className="text-[11px] text-slate-400">Shopify Native Integration</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-3 gap-3 my-6 relative z-10">
                {(feature.heroStats || [
                  { label: 'Attribution', value: '99.98%' },
                  { label: 'Latency', value: '< 150ms' },
                  { label: 'Sync Status', value: 'Real-Time' },
                ]).map((stat, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 text-center">
                    <span className="font-display font-bold text-base sm:text-lg text-white block">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 3D Stepped Visual Preview */}
              <div className="space-y-2.5 relative z-10 text-xs">
                <div className="p-3.5 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <p className="font-bold text-white text-xs">Automated Attribution Layer</p>
                      <p className="text-[10px] text-slate-400">Links + Discount Codes auto-synced</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-primary font-bold">● Synced</span>
                </div>

                <div className="p-3.5 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <div>
                      <p className="font-bold text-white text-xs">Shopify Webhook Stream</p>
                      <p className="text-[10px] text-slate-400">HMAC SHA-256 cryptographic verification</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-300 font-bold">● Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
