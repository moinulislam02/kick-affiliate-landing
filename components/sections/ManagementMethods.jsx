'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../primitives/Section';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function ManagementMethods() {
  return (
    <div className="bg-slate-50 border-b border-slate-200/50 relative overflow-hidden select-none">
      <Section className="py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Management Methods Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight text-balance">
              Manage Every Creator, Your Way
            </h2>
            <div className="space-y-4 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Manage affiliates and influencers at whatever scale fits your brand. Assign different commission structures to different creator tiers, track individual performance, and see exactly who&apos;s driving revenue all from one dashboard.
              </p>
            </div>
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-dark transition group"
              >
                Observe full management approaches
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Interface Image */}
          <div className="lg:col-span-7 flex justify-center w-full relative">
            <FadeInOnScroll direction="up" duration={0.6} className="w-full flex justify-center">
              <div className="relative w-full max-w-[620px] flex items-center justify-center">
                <img
                  src="/creator_ui_transparent_1789186097844.png"
                  alt="Creator Management Dashboard Interface"
                  className="w-full h-auto object-contain drop-shadow-xl select-none"
                />
              </div>
            </FadeInOnScroll>
          </div>

        </div>
      </Section>
    </div>
  );
}
