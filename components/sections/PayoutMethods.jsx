'use client';

import React from 'react';
import { ArrowRight, Send, Check, Heart, MessageSquare, ShoppingCart, CheckCircle2 } from 'lucide-react';
import Section from '../primitives/Section';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function PayoutMethods() {
  return (
    <div className="bg-white border-b border-slate-200/50 relative overflow-hidden select-none">
      <Section className="py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Dashboard Mockups & Connection Lines (Mirrored) */}
          <div className="lg:col-span-7 flex justify-center w-full relative order-2 lg:order-1">
            <FadeInOnScroll direction="up" duration={0.6}>
              <div className="relative flex items-center justify-center min-h-[360px] w-full max-w-[620px] font-sans">
                
                {/* 1. Creator Card (Marcus) - Left overlap */}
                <div className="w-[180px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden absolute left-4 top-4 z-20 font-sans">
                  
                  {/* Top Image area */}
                  <div className="relative aspect-square w-full">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
                      alt="Marcus Creator"
                      className="w-full h-full object-cover"
                    />
                    {/* Status badge */}
                    <div className="absolute top-2 left-2 bg-indigo-650 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                      <Check className="w-2.5 h-2.5" /> Payout Status
                    </div>
                    {/* Discount Code overlay on photo */}
                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs border border-slate-250/20 text-slate-900 text-[8px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
                      MARCUS15
                    </div>
                  </div>

                  {/* Username info */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center gap-1">
                      <span className="font-display font-extrabold text-[11px] text-slate-900">@Marcus</span>
                      <CheckCircle2 className="w-3.5 h-3.5 fill-blue-500 text-white flex-shrink-0" />
                    </div>
                    
                    {/* Interaction icons */}
                    <div className="flex items-center gap-3.5 text-slate-400">
                      <Heart className="w-3.5 h-3.5 fill-slate-300 text-slate-350 cursor-pointer" />
                      <MessageSquare className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                      <ShoppingCart className="w-3.5 h-3.5 cursor-pointer hover:text-slate-600" />
                    </div>
                  </div>

                </div>

                {/* 2. Main Payout Dashboard Window - Offset to the right */}
                <div className="w-[380px] bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden z-10 ml-12">
                  {/* Titlebar */}
                  <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                    <span className="font-display font-extrabold text-xs text-white uppercase tracking-wider">Wise Ledger</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    </div>
                  </div>

                  {/* Window Body */}
                  <div className="p-3.5 space-y-3.5">
                    
                    {/* Charts Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Left Chart: Wise Balance */}
                      <div className="bg-slate-50 border border-slate-150 p-2.5 rounded-lg text-xs space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-850 text-[10px]">Wise Balance</span>
                          <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wide">US Account</span>
                        </div>
                        <span className="text-sm font-extrabold text-slate-900 font-mono block pt-1">$28,450.00</span>
                      </div>

                      {/* Right Chart: Earnings Trends */}
                      <div className="bg-slate-50 border border-slate-150 p-2.5 rounded-lg text-xs space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-850 text-[10px]">Payout Release</span>
                          <span className="text-[8px] font-extrabold text-indigo-600 bg-indigo-50 px-1 rounded">Active</span>
                        </div>
                        {/* Mini Line Chart SVG */}
                        <div className="w-full h-10 relative">
                          <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path d="M 0 5 C 30 10, 50 25, 80 18 T 100 35 L 100 40 L 0 40 Z" fill="#eef2ff" />
                            <path d="M 0 5 C 30 10, 50 25, 80 18 T 100 35" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>

                    </div>

                    {/* Tables Grid */}
                    <div className="grid grid-cols-2 gap-3 text-[9px]">
                      
                      {/* Recent Payouts */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100 pb-1">
                          <span>Recipient</span>
                          <span className="text-right">Action</span>
                        </div>
                        
                        {/* Marcus Payout row with RELEASE target */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40&q=80"
                              alt="Marcus"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="font-semibold text-slate-850">Marcus</span>
                          </div>
                          <button
                            id="btn-release-payout"
                            className="bg-primary hover:bg-primary-dark text-white font-bold text-[8px] px-2 py-0.5 rounded shadow-xs transition"
                          >
                            Release
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=40&h=40&q=80"
                              alt="David"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="font-semibold text-slate-850">David</span>
                          </div>
                          <button className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-650 font-bold text-[8px] px-2 py-0.5 rounded transition">
                            Sent
                          </button>
                        </div>
                      </div>

                      {/* Gateways Status Sync */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100 pb-1">
                          <span>Gateway Sync</span>
                          <span className="text-right">Status</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-800">PayPal Payouts</span>
                          <span className="text-emerald-600 font-bold">Active</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-800">Wise Batch</span>
                          <span className="text-emerald-600 font-bold">Active</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* 3. Blue Paper Plane Connector Icon (Mirrored left side) */}
                <div className="absolute left-36 bottom-10 z-30 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20">
                  <Send className="w-4 h-4 transform rotate-225 translate-x-0.5 -translate-y-0.5 fill-current" />
                </div>

                {/* 4. Curved SVG Connecting Arrow (Mirrored) */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  <svg className="w-full h-full" viewBox="0 0 620 360">
                    <path
                      d="M 290 242 Q 210 320 160 252"
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

          {/* Right Column: Payout Methods Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight text-balance">
              Frictionless payouts
            </h2>
            <div className="space-y-4 text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Send batch payments globally in a single click. Keep affiliates happy and motivated by supporting multiple payout methods including PayPal, Wise, and bank wires with automated scheduling rules.
              </p>
              <p>
                No more manual spreadsheets or validation checks. KickAffiliate handles the calculations and runs automated fraud auditing before every release.
              </p>
            </div>
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href="#timeline"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-dark transition group"
              >
                Discover payment automation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
