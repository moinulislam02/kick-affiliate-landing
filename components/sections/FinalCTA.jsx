'use client';

import React from 'react';
import Section from '../primitives/Section';
import Button from '../primitives/Button';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function FinalCTA({ onBookDemo }) {
  return (
    <div className="bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <Section className="py-24 md:py-32 relative z-10">
        <FadeInOnScroll direction="up" duration={0.6}>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-balance">
              Start Scaling Your Affiliate Channel Today
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              Join thousands of Shopify merchants leveraging KickAffiliate to automate rewards, drive conversions, and satisfy affiliate networks.
            </p>
            <div className="flex justify-center pt-2">
              <Button
                variant="secondary"
                onClick={onBookDemo}
                className="px-6 py-2 h-auto text-base !rounded-full !bg-white !text-slate-950 hover:!bg-slate-100 !border-transparent shadow-xl focus:!ring-white/50 font-bold"
              >
                Start for free
              </Button>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              14-day free trial. Setup takes under 5 minutes.
            </p>
          </div>
        </FadeInOnScroll>
      </Section>
    </div>
  );
}
