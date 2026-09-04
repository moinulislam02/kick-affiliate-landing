'use client';

import React from 'react';
import { ArrowRight, Send, Heart, MessageSquare, ShoppingCart, CheckCircle2 } from 'lucide-react';
import Section from '../primitives/Section';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function ManagementMethods() {
  return (
    <div className="bg-slate-50 border-b border-slate-200/50 relative overflow-hidden select-none">
      <Section className="py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Management Methods Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight text-balance">
              Diverse management methods
            </h2>
            <div className="space-y-4 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Manage and motivate affiliates at ease. We provide multiple touch points within the reward system that encourage your affiliates to reach better results such as tier-based commissions and bonuses.
              </p>
              <p>
                Also, you can manage the team professionally with our advanced features to chat and email them automatically.
              </p>
            </div>
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-dark transition group"
              >
                Observe full management approaches
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockups & Connection Lines */}
          <div className="lg:col-span-7 flex justify-center w-full relative">
            <FadeInOnScroll direction="up" duration={0.6}>
              <div className="relative flex items-center justify-center min-h-[360px] w-full max-w-[620px] font-sans">
                
                {/* 1. Main Performance Dashboard Window */}
                <div className="w-[380px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden z-10 mr-12">
                  {/* Titlebar */}
                  <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                    <span className="font-display font-extrabold text-xs text-white uppercase tracking-wider">Performance</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    </div>
                  </div>

                  {/* Window Body */}
                  <div className="p-3.5 space-y-3.5">
                    
                    {/* Charts Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Left Chart: Total Sales */}
                      <div className="bg-slate-50 border border-slate-150 p-2.5 rounded-lg text-xs space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-800 text-[10px]">Total sales</span>
                          <span className="text-[8px] font-extrabold text-emerald-600 bg-emerald-50 px-1 rounded flex items-center gap-0.5 border border-emerald-100">
                            &uarr; 18%
                          </span>
                        </div>
                        {/* Mini Bar Chart */}
                        <div className="flex items-end justify-between h-10 pt-2 px-1">
                          <div className="w-2.5 h-6 bg-slate-200 rounded-t" />
                          <div className="w-2.5 h-10 bg-primary/80 rounded-t" />
                          <div className="w-2.5 h-5 bg-slate-200 rounded-t" />
                          <div className="w-2.5 h-8 bg-primary rounded-t" />
                        </div>
                      </div>

                      {/* Right Chart: Total Referrals */}
                      <div className="bg-slate-50 border border-slate-150 p-2.5 rounded-lg text-xs space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-800 text-[10px]">Total referrals</span>
                          <span className="text-[8px] font-extrabold text-indigo-600 bg-indigo-50 px-1 rounded border border-indigo-100">
                            +125
                          </span>
                        </div>
                        {/* Mini Line Chart SVG */}
                        <div className="w-full h-10 relative">
                          <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path d="M 0 35 C 20 28, 40 32, 60 15 T 100 5 L 100 40 L 0 40 Z" fill="#ecf0ff" />
                            <path d="M 0 35 C 20 28, 40 32, 60 15 T 100 5" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>

                    </div>

                    {/* Tables Grid */}
                    <div className="grid grid-cols-2 gap-3 text-[9px]">
                      
                      {/* Affiliates List */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100 pb-1">
                          <span>Affiliate</span>
                          <span>Score</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80"
                              alt="Sarah"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="font-semibold text-slate-800">Sarah</span>
                          </div>
                          {/* Score indicator bars */}
                          <div className="flex gap-0.5">
                            <div className="w-1.5 h-3 bg-amber-500 rounded-sm" />
                            <div className="w-1.5 h-3 bg-amber-500 rounded-sm" />
                            <div className="w-1.5 h-3 bg-slate-200 rounded-sm" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=40&h=40&q=80"
                              alt="Luna"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="font-semibold text-slate-800">Luna</span>
                          </div>
                          {/* Score indicator bars */}
                          <div className="flex gap-0.5">
                            <div className="w-1.5 h-3 bg-emerald-550 rounded-sm" />
                            <div className="w-1.5 h-3 bg-slate-200 rounded-sm" />
                            <div className="w-1.5 h-3 bg-slate-200 rounded-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Product Samples List */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100 pb-1">
                          <span>Product Sample</span>
                          <span className="text-right">Action</span>
                        </div>
                        
                        {/* Headphone row with SEND button target */}
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-850 truncate max-w-[64px]">Headphone</span>
                          <button
                            id="btn-send-sample"
                            className="bg-emerald-550 hover:bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded shadow-xs transition flex items-center justify-center"
                          >
                            Send
                          </button>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-850 truncate max-w-[64px]">Smart watch</span>
                          <button className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 font-bold text-[8px] px-2 py-0.5 rounded transition">
                            Sent
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* 2. Creator Card (Tanna) - Right overlap */}
                <div className="w-[180px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden absolute right-4 top-4 z-20 font-sans">
                  
                  {/* Top Image area */}
                  <div className="relative aspect-square w-full">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80"
                      alt="Tanna Creator"
                      className="w-full h-full object-cover"
                    />
                    {/* Engagement badge */}
                    <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                      &uarr; Engagement
                    </div>
                    {/* Discount Code overlay on photo */}
                    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs border border-slate-250/20 text-slate-900 text-[8px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
                      Tanna10%
                    </div>
                  </div>

                  {/* Username info */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center gap-1">
                      <span className="font-display font-extrabold text-[11px] text-slate-900">@Tanna</span>
                      <CheckCircle2 className="w-3.5 h-3.5 fill-blue-500 text-white flex-shrink-0" />
                    </div>
                    
                    {/* Interaction icons */}
                    <div className="flex items-center gap-3.5 text-slate-400">
                      <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 cursor-pointer" />
                      <MessageSquare className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                      <ShoppingCart className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                    </div>
                  </div>

                </div>

                {/* 3. Blue Paper Plane Connector Icon */}
                <div className="absolute right-36 bottom-10 z-30 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
                  <Send className="w-4 h-4 transform rotate-45 -translate-x-0.5 translate-y-0.5 fill-current" />
                </div>

                {/* 4. Curved SVG Connecting Arrow */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <svg className="w-full h-full" viewBox="0 0 620 360">
                    <path
                      d="M 330 242 Q 410 320 460 252"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="1.5"
                      strokeDasharray="4"
                    />
                  </svg>
                </div>

              </div>
            </FadeInOnScroll>
          </div>

        </div>
      </Section>
    </div>
  );
}
