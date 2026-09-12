'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Section from '../primitives/Section';

export default function TabbedShowcase() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // Track scroll progress of the tall outer wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const tabs = [
    {
      id: 'store-setup',
      title: '1-Click Store Setup',
      description:
        'Connect your Shopify store in seconds. Automatically sync your full product catalog, collections, and discounts with zero coding or complex configuration required.',
      video: '/Cursor_clicking_install_logo_reveal_20260912105233.mp4',
    },
    {
      id: 'create-program',
      title: 'Create program',
      description:
        'Define custom commission tiers, auto-issue discount coupons, and set automated payout rules aligned with your product margins.',
      video: '/Automating_program_form_text_typing_20260912105700.mp4',
    },
    {
      id: 'recruit-partners',
      title: 'Recruit partners',
      description:
        'Discover top-performing creator ambassadors, automate custom onboarding forms, and approve high-converting affiliates with zero friction.',
      video: '/Filling_form_fields_and_toggling…_20260912110347.mp4',
    },
    {
      id: 'get-support',
      title: 'Get support',
      description:
        'Connect directly with Shopify Plus affiliate strategists 24/7 to fine-tune attribution models and optimize your program ROI.',
      video: '/Cursor_clicking_opens_chat_modal_20260912110743.mp4',
    },
  ];

  // Auto-switch tabs as user scrolls through the tall pinned wrapper
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const numTabs = tabs.length;
    const step = 1 / numTabs;
    let index = Math.floor(latest / step);
    if (index >= numTabs) index = numTabs - 1;
    if (index < 0) index = 0;

    if (index !== activeTab) {
      setActiveTab(index);
    }
  });

  // Smooth scroll to corresponding position when user clicks a tab
  const handleTabClick = (idx) => {
    setActiveTab(idx);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      const numTabs = tabs.length;
      const step = 1 / numTabs;
      const targetProgress = (idx + 0.4) * step;

      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableHeight = containerHeight - windowHeight;

      const targetScroll = offsetTop + targetProgress * scrollableHeight;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={containerRef} className="relative h-[260vh] bg-[#f8f9fa]">
      {/* Sticky Viewport Wrapper */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-8 lg:py-12">
        <Section className="w-full">
          {/* Top Header */}
          <div className="mb-8 sm:mb-10">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2 font-display">
              LAUNCH
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Launch a New Program in a Few Clicks
            </h2>
          </div>

          {/* 2-Column Showcase Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Visual Showcase Preview (Video Canvas) */}
            <div className="lg:col-span-7 w-full">
              <div className="w-full h-[320px] sm:h-[420px] lg:h-[460px] bg-slate-900 rounded-2xl border border-slate-200/80 shadow-lg relative overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <video
                      key={tabs[activeTab].video}
                      src={tabs[activeTab].video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Accordion Tabs List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx;

                return (
                  <div
                    key={tab.id}
                    className="relative"
                  >
                    {/* Single top line: animated theme primary indicator for active tab, subtle gray divider for inactive tabs */}
                    {isActive ? (
                      <motion.div
                        layoutId="activeTabLine"
                        className="h-[2px] w-full bg-primary rounded-full shadow-sm shadow-primary/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      idx !== 0 && (
                        <div className="h-[1px] w-full bg-slate-200/80" />
                      )
                    )}

                    <button
                      onClick={() => handleTabClick(idx)}
                      className={`w-full text-left transition-all group ${
                        isActive ? 'pt-3 pb-5' : 'py-4 sm:py-5 hover:text-primary'
                      }`}
                    >
                      <h3
                        className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                          isActive
                            ? 'text-slate-900'
                            : 'text-slate-800 group-hover:text-slate-950'
                        }`}
                      >
                        {tab.title}
                      </h3>

                      {/* Expandable description for active tab */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mt-2 font-body max-w-md">
                              {tab.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </Section>
      </div>
    </div>
  );
}
