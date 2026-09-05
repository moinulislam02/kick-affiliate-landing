// components/features/FeatureFAQ.jsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeatureFAQ({ feature }) {
  const faqs = feature.faqs || [
    {
      q: 'How does KickAffiliate tracking work with Shopify checkout?',
      a: 'KickAffiliate attaches tracking tokens via cart note_attributes and matches discount codes during checkout to guarantee zero attribution loss.',
    },
    {
      q: 'Can I import existing affiliates and coupon codes from my previous app?',
      a: 'Yes, KickAffiliate includes a 1-click CSV migration tool that preserves your creators, discount codes, and historical commission rates.',
    },
    {
      q: 'How are customer returns and refunds handled?',
      a: 'Our direct Shopify webhook integration automatically updates creator pending balances whenever orders are returned or cancelled.',
    },
    {
      q: 'Is there a contract or setup fee?',
      a: 'No contracts, no setup fees. All plans include a 14-day free trial with cancel-anytime flexibility.',
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-[900px] w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-14 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Everything you need to know about setting up and scaling your KickAffiliate program.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-blue-200 shadow-xs'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-blue-100/60 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
