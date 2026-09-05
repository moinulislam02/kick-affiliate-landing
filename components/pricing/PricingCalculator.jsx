'use client';

import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, ArrowRight, Calculator } from 'lucide-react';

export default function PricingCalculator({ onBookDemo }) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [affiliateShare, setAffiliateShare] = useState(18); // 18% of revenue driven by affiliates
  const [commissionRate, setCommissionRate] = useState(10); // 10% commission

  const affiliateDrivenRevenue = Math.round((monthlyRevenue * affiliateShare) / 100);
  const creatorCommission = Math.round((affiliateDrivenRevenue * commissionRate) / 100);
  const netAffiliateProfit = Math.round(affiliateDrivenRevenue - creatorCommission - 29); // Assuming $29 Pro plan
  const roiMultiplier = creatorCommission > 0 ? (affiliateDrivenRevenue / (creatorCommission + 29)).toFixed(1) : 0;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
      {/* Subtle corner highlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-indigo-300 border border-primary/30">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            ROI &amp; Revenue Projection
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Estimate Your Affiliate Revenue Potential
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            See how much incremental revenue KickAffiliate can unlock for your Shopify store compared to high-cost ad channels.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Input Sliders */}
          <div className="lg:col-span-7 space-y-6 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {/* Slider 1: Monthly Store Revenue */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-300">Your Monthly Store Revenue</span>
                <span className="text-emerald-400 font-mono text-sm">${monthlyRevenue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>$10k/mo</span>
                <span>$250k/mo</span>
                <span>$500k+/mo</span>
              </div>
            </div>

            {/* Slider 2: Target Affiliate Contribution */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-300">Target Affiliate Sales Share (%)</span>
                <span className="text-indigo-300 font-mono text-sm">{affiliateShare}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={affiliateShare}
                onChange={(e) => setAffiliateShare(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>5% (Starter)</span>
                <span>15-20% (Typical)</span>
                <span>40% (Creator Heavy)</span>
              </div>
            </div>

            {/* Slider 3: Commission Payout Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-300">Creator Commission Rate</span>
                <span className="text-amber-300 font-mono text-sm">{commissionRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>5%</span>
                <span>10% (Average)</span>
                <span>30% (High Margin)</span>
              </div>
            </div>
          </div>

          {/* Right: Output Stats Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-850 to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-750 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Estimated Monthly Impact
              </span>

              {/* Stat 1 */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400">Attributed Affiliate Revenue</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400">
                  ${affiliateDrivenRevenue.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal"> /mo</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400">Creator Commissions Paid:</span>
                <span className="font-mono font-bold text-white">${creatorCommission.toLocaleString()}</span>
              </div>

              {/* Stat 3 */}
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">KickAffiliate Software Cost:</span>
                <span className="font-mono font-bold text-white">$29/mo</span>
              </div>

              {/* Highlight ROI */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimated ROI</span>
                  <span className="text-xs text-slate-300">Revenue per $1 spent</span>
                </div>
                <div className="font-display font-extrabold text-xl text-primary-300">
                  {roiMultiplier}x
                </div>
              </div>
            </div>

            <button
              onClick={onBookDemo}
              className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Unlock This Growth</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
