'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Measure exact scrollable track width dynamically and reliably across screen sizes
  useEffect(() => {
    const updateScrollRange = () => {
      if (!trackRef.current) return;
      const children = trackRef.current.children;
      if (!children || children.length === 0) return;

      const lastChild = children[children.length - 1];
      const rightPadding = window.innerWidth >= 1024 ? 96 : window.innerWidth >= 640 ? 48 : 24;
      // Calculate exact distance to bring last card fully into view with right padding
      const lastChildEnd = lastChild.offsetLeft + lastChild.offsetWidth;
      const maxScroll = Math.max(0, lastChildEnd - window.innerWidth + rightPadding);
      setScrollRange(maxScroll);
    };

    updateScrollRange();

    // Use ResizeObserver for responsive updates as images, fonts, and DOM layout settle
    const resizeObserver = new ResizeObserver(() => {
      updateScrollRange();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateScrollRange);

    const timer1 = setTimeout(updateScrollRange, 50);
    const timer2 = setTimeout(updateScrollRange, 250);
    const timer3 = setTimeout(updateScrollRange, 600);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollRange);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Finish sliding at 0.82 so Step 04 is 100% revealed and rests stably on screen before unpinning
  const x = useTransform(scrollYProgress, [0, 0.82], [0, -scrollRange], {
    clamp: true,
  });

  const [activeStep, setActiveStep] = useState(0);

  // Sync step indicators with horizontal progress and rest zone
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.22) {
      setActiveStep(0);
    } else if (latest >= 0.22 && latest < 0.48) {
      setActiveStep(1);
    } else if (latest >= 0.48 && latest < 0.72) {
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
      image: '/step1.png',
    },
    {
      number: '02',
      title: 'Track Referred Sales',
      description:
        'Orders are recorded and commission is calculated automatically. Both you and the creator see performance update in real time.',
      image: '/step2.png',
    },
    {
      number: '03',
      title: 'Review & Approve Payouts',
      description:
        'Commission stays reserved after delivery. You review and approve the payout and if a refund lands before approval, commission is deducted automatically.',
      image: '/step3.png',
    },
    {
      number: '04',
      title: 'Scale & Analyze Growth',
      description:
        'Track ROI per creator, spot your best performers, and expand the programs that are actually driving revenue.',
      image: '/step4.png',
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[360vh] md:h-[400vh] bg-black text-white">
      {/* Sticky Screen Viewport Pin */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-8 md:py-12">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Centered Main Title */}
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
            ref={trackRef}
            style={{ x }}
            className="flex items-start gap-8 sm:gap-10 md:gap-12 pl-6 sm:pl-12 md:pl-16 lg:pl-20 pr-8 sm:pr-16 md:pr-24 z-10 w-max"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="w-[85vw] sm:w-[540px] md:w-[620px] lg:w-[720px] xl:w-[780px] 2xl:w-[840px] flex-shrink-0 flex flex-col text-left"
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

                {/* Visual Card Container with Direct Image matching natural aspect ratio */}
                <div className="w-full aspect-[1672/941] rounded-2xl bg-white border border-white/[0.08] shadow-2xl relative overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-white/[0.14] group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain rounded-2xl select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom capsule & dots progress indicator */}
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
