'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';
import Section from '../primitives/Section';
import Button from '../primitives/Button';

const testimonials = [
  {
    quote: "We migrated 14,000 active affiliates to KickAffiliate in one afternoon. Our checkout attribution accuracy immediately improved by 28% and we haven't seen a single double-commission error since.",
    author: 'Elena Rostova',
    role: 'VP of Growth, Glow Lab',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    stat: '+28% Tracking Accuracy',
  },
  {
    quote: "KickAffiliate completely removed payout day headaches. What used to take our finance team a full day of manually verifying records is now completed in two clicks using their Wise batch integrations.",
    author: 'Marcus Brody',
    role: 'Head of Finance, Velo Gear',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    stat: '12h Saved Monthly',
  },
  {
    quote: "Our creators love having instant, transparent portal insights. Seeing referral updates in real-time motivated them to share our custom codes more frequently, driving organic orders.",
    author: 'Leah Jenkins',
    role: 'Founder, FitMeal',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    stat: '+18% Sales Generated',
  },
];

export default function MigrationCTA({ onBookDemo }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  }, [stopTimer]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const handleNext = () => {
    stopTimer();
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
    startTimer();
  };

  const handlePrev = () => {
    stopTimer();
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTimer();
  };

  const handleDotSelect = (index) => {
    stopTimer();
    setActiveSlide(index);
    startTimer();
  };

  const current = testimonials[activeSlide];

  return (
    <div id="testimonials" className="bg-slate-50 border-b border-slate-200/50">
      <Section className="py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Migration CTA Details */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 border border-primary/20 text-primary">
              Easy Setup
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Switch From Other Affiliate Apps, Simply
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Starting fresh with a new affiliate app doesn&apos;t have to mean losing momentum. Connect your Shopify store, recreate your commission structure, and start inviting your existing creators most merchants are up and running the same day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button variant="primary" onClick={onBookDemo} className="w-full sm:w-auto shadow-sm">
                Install on Shopify
              </Button>
              <button
                onClick={onBookDemo}
                className="font-bold text-sm text-slate-700 hover:text-primary transition-all flex items-center gap-1"
              >
                Explore Setup Guide <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Testimonial Carousel */}
          <div className="lg:col-span-7 classy-card rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            {/* Background icon decoration */}
            <div className="absolute right-6 top-6 text-slate-100/50 pointer-events-none">
              <MessageSquare className="w-24 h-24 stroke-[1]" />
            </div>

            {/* Slide Animator */}
            <div className="relative flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Testimonial Quote */}
                  <blockquote className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed font-body">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Profile & Metric Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={current.avatar}
                        alt={current.author}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs"
                      />
                      <div>
                        <cite className="not-italic text-sm font-bold text-slate-900 block font-display">
                          {current.author}
                        </cite>
                        <span className="text-xs text-muted font-medium">
                          {current.role}
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex self-start sm:self-auto px-3 py-1 bg-emerald-50 border border-emerald-250/20 rounded-lg text-xs font-extrabold text-emerald-700">
                      {current.stat}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Controls Section */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
              {/* Dots Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotSelect(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      activeSlide === idx ? 'bg-primary w-6' : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-650 hover:bg-slate-50 hover:text-slate-900 transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-650 hover:bg-slate-50 hover:text-slate-900 transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
