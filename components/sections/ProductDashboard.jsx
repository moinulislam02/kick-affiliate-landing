'use client';

import React from 'react';
import { Activity, UserCheck, CheckCircle, BarChart3, Users, DollarSign } from 'lucide-react';
import Section from '../primitives/Section';
import Eyebrow from '../primitives/Eyebrow';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function ProductDashboard() {
  const points = [
    {
      icon: <Activity className="w-5 h-5 text-primary" />,
      title: 'Real-Time Click Tracking',
      description: 'Observe visitor interactions, referral sources, and order checkout paths instantly as they happen.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-primary" />,
      title: 'Automated Partner Onboarding',
      description: 'Review custom questionnaires and check social account profiles automatically based on threshold filters.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      title: 'Return Adjustment Engine',
      description: 'Cancel pending rewards automatically when orders are returned, avoiding overpayments.',
    },
  ];

  return (
    <div className="bg-white border-b border-slate-100">
      <Section>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Eyebrow>TRACK</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Centralize Your Affiliate Command Center
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Monitor partner applications, revenue charts, and transaction audits within a unified dashboard interface.
          </p>
        </div>

        {/* Browser Chrome Wrapper */}
        <FadeInOnScroll direction="up" duration={0.7} className="mb-16">
          <div className="bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden w-full mx-auto">
            {/* Browser Header Bar */}
            <div className="bg-slate-900/80 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto bg-slate-950 border border-slate-800 px-10 py-1.5 rounded-lg text-slate-500 text-[11px] font-mono select-none">
                https://admin.kickaffiliate.com/overview
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="grid grid-cols-12 min-h-[380px] bg-slate-950 font-sans text-slate-300">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-slate-850 p-4 space-y-6 hidden md:block select-none">
                <div className="flex items-center gap-2">
                  <img src="/kick-affiliate.png" alt="KickAffiliate" className="w-5 h-5 object-contain" />
                  <span className="font-display font-bold text-white text-sm">KickAffiliate</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="bg-slate-900 text-white font-bold p-2.5 rounded-lg">Overview</div>
                  <div className="p-2.5 hover:bg-slate-900 hover:text-white rounded-lg transition">Partners</div>
                  <div className="p-2.5 hover:bg-slate-900 hover:text-white rounded-lg transition">Payouts</div>
                  <div className="p-2.5 hover:bg-slate-900 hover:text-white rounded-lg transition">Commissions</div>
                  <div className="p-2.5 hover:bg-slate-900 hover:text-white rounded-lg transition">Integrations</div>
                </div>
              </div>

              {/* Main Content Workspace */}
              <div className="col-span-12 md:col-span-9 p-6 sm:p-8 space-y-6">
                {/* Dashboard Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-850">
                    <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-2">
                      <span>Affiliate Revenue</span>
                      <DollarSign className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white">$45,850</div>
                  </div>
                  <div className="bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-850">
                    <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-2">
                      <span>Payouts Shared</span>
                      <Users className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white">$6,870</div>
                  </div>
                  <div className="bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-850">
                    <div className="flex items-center justify-between text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-2">
                      <span>Conversion</span>
                      <BarChart3 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white">5.8%</div>
                  </div>
                </div>

                {/* Dashboard Graph Visual representation */}
                <div className="bg-slate-900/50 p-4 sm:p-6 rounded-xl border border-slate-850 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-4">
                    <span>Program Performance Tracker</span>
                    <span className="text-[10px] text-slate-400">LAST 7 DAYS</span>
                  </div>
                  {/* SVG line chart representing sales metrics */}
                  <div className="w-full h-40 relative">
                    <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="500" y2="20" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3" />
                      <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3" />
                      <line x1="0" y1="80" x2="500" y2="80" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3" />
                      {/* Gradient fill */}
                      <path d="M 0 90 Q 80 50 160 70 T 320 20 T 500 10 L 500 100 L 0 100 Z" fill="url(#chartGrad)" />
                      {/* Line chart stroke */}
                      <path d="M 0 90 Q 80 50 160 70 T 320 20 T 500 10" fill="none" stroke="#6366f1" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Supporting Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full mx-auto">
          {points.map((pt, index) => (
            <FadeInOnScroll
              key={index}
              direction="up"
              delay={index * 0.15} // Staggered delay sequentially
              duration={0.5}
              className="flex flex-col items-center md:items-start text-center md:text-left p-4 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-sm">
                {pt.icon}
              </div>
              <h3 className="font-display font-bold text-slate-800 text-base">
                {pt.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed max-w-[280px] md:max-w-none">
                {pt.description}
              </p>
            </FadeInOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
}
