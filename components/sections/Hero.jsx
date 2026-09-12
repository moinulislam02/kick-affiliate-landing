'use client';

import React from 'react';

export default function Hero({ onBookDemo }) {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-50 border-b border-slate-200/60 pt-24 pb-16 lg:py-0">
      
      {/* 1. Full-screen Banner Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/website-hero.png"
          alt="KickAffiliate hero background"
          className="w-full h-full object-cover object-center lg:object-[82%_center] select-none"
        />
        {/* Soft Left-to-Right gradient overlay to ensure crystal clear readability for left-aligned content */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-35% md:via-white/80 md:via-45% to-white/10 lg:to-transparent" />
        
        {/* Subtle bottom fade to blend smoothly into the marquee section */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>

      {/* 2. Geometric grid watermark background overlay */}
      <div className="absolute inset-0 geometric-grid opacity-40 pointer-events-none" />

      {/* 3. Hero Content Container (Left Aligned & Positioned on the Left Side) */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl flex flex-col items-start text-left space-y-6 lg:space-y-7">
          
          {/* Rating & Platform Badge */}
          <div className="flex items-center gap-3.5 text-xs select-none">
            {/* Built for Shopify Diamond Tag */}
            <span className="flex items-center gap-1.5 text-[#0f2d59] bg-[#e0f2fe] px-2.5 py-1 rounded font-bold text-[11px] sm:text-xs shadow-xs border border-sky-200/60">
              {/* Diamond SVG Icon */}
              <svg className="w-3 h-3 text-[#0369a1] fill-current" viewBox="0 0 24 24">
                <path d="M6 2h12l4 6-10 14L2 8z" />
              </svg>
              Built for Shopify
            </span>
            
            {/* Vertical Divider */}
            <span className="h-4 w-px bg-slate-300" />
            
            {/* Rating Stars Text */}
            <span className="flex items-center gap-1.5 text-slate-900 font-bold text-[11px] sm:text-xs">
              <span className="text-amber-500">★</span> 4.9/5 <span className="text-slate-500 font-normal">(100+ reviews)</span>
            </span>
          </div>

          {/* Title Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-slate-950 text-balance">
            Track Every Influencer Sale <br />
            <span className="text-slate-950">Protect Every Commission</span>
          </h1>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed font-normal">
            The affiliate platform built for Shopify merchants who don&apos;t want to pay creators for orders that get refunded, cancelled, or faked.
          </p>

          {/* Left-Aligned Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={onBookDemo}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider h-11 px-8 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
            >
              Start for free on shopify
            </button>
          </div>

          {/* Trust points */}
          <div className="flex items-center gap-4 sm:gap-6 pt-1 text-[11px] sm:text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              14-day free trial
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}

