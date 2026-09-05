// components/features/FeatureJourneyStages.jsx
'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function FeatureJourneyStages({ feature }) {
  const stages = feature.journeyStages || [];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            End-to-End Workflow
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            {feature.journeyTitle || 'All-in-one platform tackles every stage of creator growth'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {feature.journeySubtitle || 'Automate discovery, tracking, commission scaling, and payouts without manual spreadsheets.'}
          </p>
        </div>

        {/* 4-Stage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-primary/40 transition-all group relative"
            >
              {/* Top Step Number Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-primary font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {stage.stage}
                  </span>
                </div>

                {/* Stage Title & Description */}
                <h3 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                  {stage.desc}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {stage.points?.map((pt, ptIdx) => (
                  <div key={ptIdx} className="flex items-start gap-2 text-[11.5px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
