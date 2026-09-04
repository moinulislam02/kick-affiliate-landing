'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, Sparkles, CheckCircle2, ArrowRight, Headphones, ShieldCheck } from 'lucide-react';
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
      id: 'ask-ai',
      title: 'Ask AI',
      description:
        'AI-powered assistant learns from 50,000+ successful affiliate programs to recommend commission rates and setup structures that fit your business.',
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 select-none">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

          {/* AI Search Bar Mockup matching screenshot */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-[440px]"
          >
            {/* Gradient Outline Capsule */}
            <div className="p-[2px] rounded-full bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-500 shadow-lg shadow-purple-500/10">
              <div className="bg-white rounded-full px-5 py-3 sm:py-3.5 flex items-center gap-3">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium truncate font-body">
                  Build me a full commisi<span className="inline-block w-[1.5px] h-3.5 bg-slate-900 ml-0.5 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* AI Floating Suggestion Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="mt-5 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-xl p-3.5 shadow-sm text-xs text-slate-700 space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-primary font-bold text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Recommendation</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                Suggested commission: <strong className="text-slate-900">12% Base + 18% Tier</strong> for partners over $2,000/mo GMV.
              </p>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 'create-program',
      title: 'Create program',
      description:
        'Define custom commission tiers, auto-issue discount coupons, and set automated payout rules aligned with your product margins.',
      visual: (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
          
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-[420px] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-xs text-slate-900">VIP Creator Tier</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1.5 px-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500 font-medium">Commission Rate</span>
                <span className="font-bold text-slate-900">15% per sale</span>
              </div>
              <div className="flex justify-between items-center py-1.5 px-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500 font-medium">Auto-Discount Code</span>
                <span className="font-mono font-bold text-primary">CREATOR15</span>
              </div>
              <div className="flex justify-between items-center py-1.5 px-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500 font-medium">Cookie Length</span>
                <span className="font-bold text-slate-900">30 Days</span>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-1.5">
              <span>Save & Launch Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      ),
    },
    {
      id: 'recruit-partners',
      title: 'Recruit partners',
      description:
        'Discover top-performing creator ambassadors, automate custom onboarding forms, and approve high-converting affiliates with zero friction.',
      visual: (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
          
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-[420px] space-y-3"
          >
            {/* Creator 1 */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Creator"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h5 className="font-display font-bold text-xs text-slate-900">Emma Watson</h5>
                  <span className="text-[10px] text-slate-400">TikTok • 180k Followers</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                Approved
              </span>
            </div>

            {/* Creator 2 */}
            <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Creator"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h5 className="font-display font-bold text-xs text-slate-900">Liam Henderson</h5>
                  <span className="text-[10px] text-slate-400">Instagram • 95k Followers</span>
                </div>
              </div>
              <button className="text-[10px] font-bold text-white bg-primary hover:bg-primary-dark px-3 py-1 rounded-lg transition">
                Invite
              </button>
            </div>

            {/* Link Portal Pill */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-lg p-2.5 text-center text-[11px] text-slate-500 font-mono">
              portal.kickaffiliate.com/join/yourbrand
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 'get-support',
      title: 'Get support',
      description:
        'Connect directly with Shopify Plus affiliate strategists 24/7 to fine-tune attribution models and optimize your program ROI.',
      visual: (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-6 select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
          
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-[420px] bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-display font-bold text-xs text-slate-900">Dedicated Growth Strategist</h5>
                <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Online • Avg reply &lt; 4 min
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs text-slate-700 space-y-2">
              <p className="text-[11px] text-slate-600 leading-relaxed">
                &ldquo;We reviewed your catalog conversion rate and recommend boosting your tier 2 creator commission to 18% for Q4 seasonality.&rdquo;
              </p>
              <div className="text-[10px] text-slate-400 font-mono">10:42 AM • Strategy Advisor</div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>SOC-2 & Shopify Plus Certified</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
          </motion.div>
        </div>
      ),
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
            <span className="text-pink-500 font-bold text-xs uppercase tracking-widest block mb-2 font-display">
              LAUNCH
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Start new affiliate channel
            </h2>
          </div>

          {/* 2-Column Showcase Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Visual Showcase Preview (Large Canvas) */}
            <div className="lg:col-span-7 w-full">
              <div className="w-full h-[420px] sm:h-[480px] lg:h-[500px] bg-white rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {tabs[activeTab].visual}
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
                    {/* Single top line: animated gradient for active tab, subtle gray divider for inactive tabs */}
                    {isActive ? (
                      <motion.div
                        layoutId="activeTabLine"
                        className="h-[2px] w-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 rounded-full"
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
