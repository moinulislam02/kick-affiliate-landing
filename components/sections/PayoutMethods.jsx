'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../primitives/Section';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function PayoutMethods() {
  return (
    <div className="bg-white border-b border-slate-200/50 relative overflow-hidden select-none">
      <Section className="py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Interface Image (Mirrored) */}
          <div className="lg:col-span-7 flex justify-center w-full relative order-2 lg:order-1">
            <FadeInOnScroll direction="up" duration={0.6} className="w-full flex justify-center">
              <div className="relative w-full max-w-[620px] flex items-center justify-center">
                <img
                  src="/payout_status_cards_ui_1789186679499.png"
                  alt="Payout Status and Tracking Interface"
                  className="w-full h-auto object-contain drop-shadow-xl select-none"
                />
              </div>
            </FadeInOnScroll>
          </div>

          {/* Right Column: Payout Methods Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight text-balance">
              Pay Creators With Confidence, Not Guesswork
            </h2>
            <div className="space-y-4 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Track every creator&apos;s payment status—paid, pending, reserved, approved, cancelled, or refunded in one dashboard. Release payouts only after you&apos;ve reviewed and approved them.
              </p>
            </div>
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href="/features/payout-reconciliation"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-dark transition group"
              >
                Explore refund &amp; payout tracking
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
