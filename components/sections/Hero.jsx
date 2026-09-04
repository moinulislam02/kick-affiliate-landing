'use client';

import React from 'react';

export default function Hero({ onBookDemo }) {
  // Stacking dummy avatar assets for the New Customers overlay card
  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=40&h=40&q=80',
    'https://images.unsplash.com/photo-152202176988-66273c2fd55f?auto=format&fit=crop&w=40&h=40&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&h=40&q=80',
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-white border-b border-slate-200/50">
      
      {/* 1. Subtle, blurry background abstracts */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 1.5. Transparent check/grid watermark background overlay */}
      <div className="absolute inset-x-0 bottom-0 top-[240px] md:top-[280px] geometric-grid pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-7">
          
          {/* 2. Rating & Platform Badge */}
          <div className="flex items-center gap-3.5 text-xs select-none">
            {/* Built for Shopify Diamond Tag */}
            <span className="flex items-center gap-1.5 text-[#0f2d59] bg-[#e0f2fe] px-2 py-0.5 rounded-xs font-bold text-[10px] sm:text-xs">
              {/* Diamond SVG Icon */}
              <svg className="w-3 h-3 text-[#0369a1] fill-current" viewBox="0 0 24 24">
                <path d="M6 2h12l4 6-10 14L2 8z" />
              </svg>
              Built for Shopify
            </span>
            
            {/* Vertical Divider */}
            <span className="h-4 w-px bg-slate-300/80" />
            
            {/* Rating Stars Text */}
            <span className="flex items-center gap-1.5 text-slate-950 font-bold text-[10px] sm:text-xs">
              <span className="text-slate-950">★</span> 4.9/5 (3300+ reviews)
            </span>
          </div>

          {/* 3. Title Content */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-slate-950 max-w-4xl mx-auto text-balance">
            Power trusted partnerships <br />
            Fuel measurable growth
          </h1>

          {/* 4. Subtitle content */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            A data-backed Shopify affiliate marketing solution built to scale trusted partnerships into continuous, predictable growth
          </p>

          {/* 5. Center Capsule Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider h-11 px-8 rounded-full transition shadow-md flex items-center justify-center"
            >
              Start for free on shopify
            </button>
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-250 text-slate-800 font-bold text-xs uppercase tracking-wider h-11 px-8 rounded-full transition flex items-center justify-center"
            >
              Book a demo
            </button>
          </div>

          {/* 6. Landscape Centered Hero Image Frame & Overlaps */}
          <div className="relative w-full aspect-video rounded-2xl border border-slate-200/80 shadow-2xl overflow-visible bg-slate-100 mt-10">
            
            {/* Creator landscape background photo */}
            <img
              src="/hero-fashion.jpg"
              alt="Fashion branding campaign"
              className="w-full h-full object-cover rounded-2xl select-none"
            />
            
            {/* Subtle bottom shadow vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent rounded-2xl pointer-events-none" />

            {/* Overlap 1: New Customers Card (Top Left) */}
            <div className="absolute -left-4 md:-left-12 top-6 md:top-12 w-[150px] md:w-[210px] p-3 md:p-4 bg-white/95 border border-slate-200 rounded-xl shadow-lg flex flex-col items-start gap-2 select-none z-20 text-left">
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider">New Customers</span>
              <div className="flex items-center justify-between w-full">
                {/* 5 Stacked avatar circles */}
                <div className="flex -space-x-1.5 overflow-hidden">
                  {avatars.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Avatar"
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm font-extrabold text-slate-950 font-mono tracking-tight">+1,223</span>
              </div>
            </div>

            {/* Overlap 2: Affiliate Revenue Card (Bottom Left) */}
            <div className="absolute -left-3 md:-left-8 bottom-8 md:bottom-12 w-[150px] md:w-[210px] p-3 md:p-4 bg-white/95 border border-slate-200 rounded-xl shadow-lg flex flex-col items-start gap-1 md:gap-1.5 select-none z-20 text-left">
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Affiliate Revenue</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm md:text-base font-extrabold text-slate-950 font-mono">$1.4M</span>
                <span className="text-[8px] md:text-[9px] font-extrabold text-emerald-600 flex items-center gap-0.5">
                  &uarr; 15%
                </span>
              </div>
            </div>

            {/* Overlap 3: Commissions Card (Top Right) */}
            <div className="absolute -right-4 md:-right-10 top-12 md:top-20 w-[150px] md:w-[210px] p-3 md:p-4 bg-white/95 border border-slate-200 rounded-xl shadow-lg flex flex-col items-start gap-1 md:gap-1.5 select-none z-20 text-left">
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Commissions</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm md:text-base font-extrabold text-slate-950 font-mono">$14,680</span>
                <span className="text-[8px] md:text-[9px] font-extrabold text-emerald-600">87% ↗</span>
              </div>
            </div>

            {/* Overlap 4: Clicks Card (Bottom Right) */}
            <div className="absolute -right-3 md:-right-8 bottom-6 md:bottom-10 w-[150px] md:w-[210px] p-3 md:p-4 bg-white/95 border border-slate-200 rounded-xl shadow-lg flex flex-col items-start gap-1 select-none z-20 text-left">
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider">Clicks</span>
              <div className="flex justify-between items-center w-full">
                <span className="text-sm md:text-base font-extrabold text-slate-950 font-mono">+5,659</span>
                {/* Mini blue vector wave SVG */}
                <div className="w-12 h-6 overflow-hidden flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 60 20" preserveAspectRatio="none">
                    <path d="M 0 18 Q 15 2, 30 14 T 60 5" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
