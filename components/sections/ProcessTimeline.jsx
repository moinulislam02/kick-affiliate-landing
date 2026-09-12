'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Translate deck horizontally so ~2.5 cards are visible at once and scrolls smoothly across all steps
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-56%']);

  const [activeStep, setActiveStep] = useState(0);

  // Sync scroll progress value events to update bottom capsule/dot indicator
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.28) {
      setActiveStep(0);
    } else if (latest >= 0.28 && latest < 0.58) {
      setActiveStep(1);
    } else if (latest >= 0.58 && latest < 0.84) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  const steps = [
    {
      number: '01',
      title: 'Onboard Creators',
      description:
        'New influencers and affiliates get their own profile and a unique coupon code the moment they join your program.',
      image: '/images/process/step-01-onboard.svg',
    },
    {
      number: '02',
      title: 'Track Referred Sales',
      description:
        'Orders are recorded and commission is calculated automatically. Both you and the creator see performance update in real time.',
      image: '/images/process/step-02-sales.svg',
    },
    {
      number: '03',
      title: 'Review & Approve Payouts',
      description:
        'Commission stays reserved after delivery. You review and approve the payout and if a refund lands before approval, commission is deducted automatically.',
      image: '/images/process/step-03-payouts.svg',
    },
    {
      number: '04',
      title: 'Scale & Analyze Growth',
      description:
        'Track ROI per creator, spot your best performers, and expand the programs that are actually driving revenue.',
      image: '/images/process/step-04-scale.svg',
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[290vh] md:h-[320vh] bg-black text-white">
      {/* Sticky Screen Viewport Pin */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-8 md:py-12">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Centered Main Title (matching reference image) */}
        <div className="w-full text-center px-6 pt-1 pb-2 z-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Automate the end-to-end process
          </h2>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden relative">
          
          {/* Continuous Dashed Line Across Timeline */}
          <div className="absolute top-[30px] sm:top-[36px] left-0 right-0 border-t border-dashed border-zinc-800 z-0 pointer-events-none" />

          {/* Sliding Cards Deck */}
          <motion.div
            style={{ x }}
            className="flex items-start gap-8 sm:gap-10 md:gap-12 pl-6 sm:pl-12 md:pl-16 lg:pl-20 pr-32 z-10"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="w-[88vw] sm:w-[560px] md:w-[640px] lg:w-[700px] flex-shrink-0 flex flex-col text-left"
              >
                {/* Timeline Step Header */}
                <div className="space-y-1 mb-3 sm:mb-4">
                  <span className="font-display font-medium text-2xl sm:text-3xl text-white block tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight pt-0.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal min-h-[38px] max-w-[620px]">
                    {step.description}
                  </p>
                </div>

                {/* Visual Card Container with Direct Image */}
                <div className="w-full h-[360px] sm:h-[400px] md:h-[440px] lg:h-[470px] rounded-2xl bg-[#0f0f12] border border-white/[0.08] shadow-2xl relative overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-white/[0.14] group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-2xl select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom capsule & dots progress indicator (matching reference: [ === ] • • •) */}
        <div className="flex justify-center items-center gap-2 pt-3 pb-1 z-10">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === idx
                  ? 'bg-white w-7 shadow-sm'
                  : 'bg-zinc-700 w-2 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
