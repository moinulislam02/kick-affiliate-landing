'use client';

import React from 'react';
import { Cpu, Zap, Lock, Database, Code, CheckCircle2 } from 'lucide-react';

export default function TechnicalSpecs() {
  const specs = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: '< 8kb Lightweight Embed',
      desc: 'Zero impact on page load speed or Core Web Vitals (LCP/FID). Injected automatically via Shopify Theme App Extension.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: 'Real-Time Webhook Engine',
      desc: 'Instant event delivery on orders/create, orders/updated, and fulfillments/update with HMAC-SHA256 verification.',
    },
    {
      icon: <Database className="w-5 h-5 text-primary" />,
      title: 'Distributed Cloud Storage',
      desc: 'Multi-region MongoDB Atlas cluster with encrypted at-rest storage (AES-256) and automated daily snapshots.',
    },
    {
      icon: <Code className="w-5 h-5 text-primary" />,
      title: 'GraphQL Admin API Native',
      desc: 'Built natively on Shopify modern GraphQL Price Rules, Discount Codes, and Cart note_attribute APIs.',
    },
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
          Developer &amp; Performance Grade
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white">
          Engineered for Speed, Reliability, and Scale
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Built according to Shopify Plus standards to guarantee zero storefront slowdowns and 99.99% attribution uptime.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
              {item.icon}
            </div>
            <h4 className="font-display font-bold text-sm text-white">
              {item.title}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
