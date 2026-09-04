'use client';

import React from 'react';
import Section from '../primitives/Section';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function SectionDivider() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white border-y border-slate-900">
      {/* Elegant visual mesh glow backdrops for dark mode */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-indigo-550/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Section className="py-28 md:py-32 relative z-10">
        <FadeInOnScroll direction="up" duration={0.6}>
          <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
            {/* Elegant vertical line accent */}
            <div className="w-px h-8 bg-slate-800 mb-2" />
            
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">
              THE SHIFT TO ORGANIC CHANNEL GROWTH
            </span>
            
            <blockquote className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-slate-100 leading-relaxed tracking-tight text-balance">
              &ldquo;Traditional advertising is hitting a wall. Customer acquisition costs are up 60% year-over-year. PartnerHub helps you build an organic referral engine that turns customer loyalty into your <span className="text-indigo-400 italic font-semibold">most predictable, cost-efficient growth driver</span>.&rdquo;
            </blockquote>
          </div>
        </FadeInOnScroll>
      </Section>
    </div>
  );
}
