'use client';

import React from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';

export default function CreatorRecruitmentSection({ onBookDemo }) {
  return (
    <div className="relative text-white overflow-hidden">
      {/* Subtle ambient light blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow in Coral/Pink */}
          <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block">
            CREATOR ONBOARDING &amp; RECRUITMENT
          </span>

          {/* Heading */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Custom Registration Pages
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Recruit top affiliates and creators on autopilot with a fully branded application portal tailored to your Shopify store. Included on every plan.
          </p>

          {/* Bullets List */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                <strong className="text-white font-bold">Visual Page Customizer:</strong> Customize brand logos, custom sidebar imagery, background colors, and welcome taglines in seconds.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                <strong className="text-white font-bold">Automated Approval Workflows:</strong> Auto-approve creators instantly or review social channels and audience size before granting links.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-white text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                <strong className="text-white font-bold">Transparent Perks Display:</strong> Highlight your commission rates, cookie duration, and exclusive partner perks directly on your signup page.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={onBookDemo}
              className="px-6 py-3 rounded-full bg-black text-white font-bold uppercase text-[11px] tracking-wider border border-white/20 hover:bg-slate-900 transition-all cursor-pointer shadow-sm"
            >
              Try for Free
            </button>
            <button
              onClick={onBookDemo}
              className="px-6 py-3 rounded-full bg-transparent text-white font-bold uppercase text-[11px] tracking-wider border border-slate-700 hover:border-slate-500 hover:bg-slate-900/50 transition-all cursor-pointer"
            >
              Explore Creator Onboarding
            </button>
          </div>
        </div>

        {/* Right Column: Single Image Placeholder */}
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-2xl bg-slate-900 flex flex-col items-center justify-center gap-3 text-slate-500 p-8">
            <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
              Image Placeholder
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
