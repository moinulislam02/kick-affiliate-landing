// components/features/FeatureDeepDiveTour.jsx
'use client';

import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Link2,
  Tag,
  Percent,
  ShieldCheck,
  Wallet,
  Users,
  Copy,
  Zap,
  Lock,
  KeyRound,
  TrendingUp,
  BarChart3,
  RefreshCw,
  Sliders,
  Calendar,
  CreditCard,
  AlertTriangle,
  FileText,
  Check,
  Store,
  HelpCircle,
} from 'lucide-react';
import Button from '../primitives/Button';

export default function FeatureDeepDiveTour({ feature, onBookDemo }) {
  const deepDives = feature.deepDives || [];

  const renderMockup = (type) => {
    switch (type) {
      // 1. Attribution Stream
      case 'attribution-stream':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-semibold text-slate-300">Live Attribution Stream</span>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">● Tracking Active</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Tag className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-bold text-white">EMMA20 (Discount Code)</p>
                    <p className="text-[10px] text-slate-400">Order #1042 • $140.00 subtotal</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[10px]">
                  +$14.00 Due
                </span>
              </div>
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Link2 className="w-4 h-4 text-indigo-400" />
                  <div>
                    <p className="font-bold text-white">?ref=alex_fitness (Link Click)</p>
                    <p className="text-[10px] text-slate-400">Order #1043 • $85.50 subtotal</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono font-bold text-[10px]">
                  +$8.55 Due
                </span>
              </div>
            </div>
          </div>
        );

      // 2. Webhook Telemetry
      case 'webhook-telemetry':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-semibold text-slate-300">Shopify Webhook Stream</span>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">● Zero Dropped Events</span>
            </div>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-white text-[11px]">orders/create → #1048</p>
                  <p className="text-[10px] text-slate-400">HMAC-SHA256 Validated</p>
                </div>
                <span className="text-emerald-400 text-[10px]">48ms</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-white text-[11px]">orders/updated → #1046</p>
                  <p className="text-[10px] text-slate-400">Status: Fulfilled</p>
                </div>
                <span className="text-emerald-400 text-[10px]">35ms</span>
              </div>
            </div>
          </div>
        );

      // 3. Dynamic Commission Tiers
      case 'token-ledger':
      case 'commission-tiers':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span className="text-slate-800">Dynamic Commission Tiers</span>
              <span className="text-primary text-[11px]">3 Active Rules</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Standard Affiliate</p>
                  <p className="text-[11px] text-slate-500">Base level for new creators</p>
                </div>
                <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200">
                  10%
                </span>
              </div>
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-blue-950">VIP Creator Tier</p>
                  <p className="text-[11px] text-blue-700">&gt; $5,000 monthly sales</p>
                </div>
                <span className="font-mono font-bold text-primary bg-white px-2.5 py-1 rounded border border-blue-200">
                  15%
                </span>
              </div>
              <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-indigo-950">Ambassador Elite</p>
                  <p className="text-[11px] text-indigo-700">&gt; $20,000 monthly sales</p>
                </div>
                <span className="font-mono font-bold text-indigo-800 bg-white px-2.5 py-1 rounded border border-indigo-200">
                  20% + Bonus
                </span>
              </div>
            </div>
          </div>
        );

      // 4. Product Level Rules & SKU Exclusions
      case 'product-rules':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span className="text-slate-800">Collection &amp; SKU Rules</span>
              <span className="text-emerald-600 text-[11px]">Margin Shield Active</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-emerald-950">Hero Silk Collection</p>
                  <p className="text-[11px] text-emerald-700">High-margin hero apparel</p>
                </div>
                <span className="font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded border border-emerald-200">
                  20% Bounty
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Accessories &amp; Core</p>
                  <p className="text-[11px] text-slate-500">Standard store collection</p>
                </div>
                <span className="font-mono font-bold text-slate-800 bg-white px-2.5 py-1 rounded border border-slate-200">
                  10% Bounty
                </span>
              </div>
              <div className="p-3 bg-red-50/60 rounded-xl border border-red-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-red-950">Clearance / Outlet SKUs</p>
                  <p className="text-[11px] text-red-600">Zero commission exclusion</p>
                </div>
                <span className="font-mono font-bold text-red-700 bg-white px-2.5 py-1 rounded border border-red-200">
                  0% Excluded
                </span>
              </div>
            </div>
          </div>
        );

      // 5. Milestone Bounties
      case 'milestone-bonuses':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-semibold text-slate-300">Creator Milestone Rewards</span>
              <span className="text-amber-400 font-mono text-[11px] font-bold">★ Active Campaign</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">50 Monthly Orders Challenge</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">
                    +$100.00 Cash Bonus
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-4/5 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>42 / 50 Orders driven</span>
                  <span className="text-amber-300">84% Complete</span>
                </div>
              </div>
            </div>
          </div>
        );

      // 6. Transparent Earnings Ledger
      case 'earnings-ledger':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span>Commission Calculation Audit</span>
              <span className="text-slate-500 text-[11px]">Real-Time Line Items</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Order #1049 (Post-Discount Subtotal)</p>
                  <p className="text-[11px] text-slate-500">$150.00 × 15% VIP Rate</p>
                </div>
                <span className="font-mono font-bold text-emerald-600">+$22.50</span>
              </div>
              <div className="p-2.5 bg-blue-50/80 rounded-lg border border-blue-200/60 flex items-center gap-2 text-[11px] text-blue-900">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Shipping ($12.00) &amp; Taxes ($14.20) excluded from commission subtotal</span>
              </div>
            </div>
          </div>
        );

      // 7. Creator Portal: Login & First-Time Setup
      case 'creator-login':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-primary" />
                <span className="font-bold text-white">Luxe Boutique • Creator Portal</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-bold text-[10px]">
                Sign In
              </span>
            </div>

            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-[11px] text-blue-300 flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-blue-400 shrink-0" />
              <span>First time here? Enter your email to set your account password.</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block font-medium">Affiliate Email</span>
                <span className="font-mono text-white text-xs">sarah@lifestyle.co</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block font-medium">Account Password</span>
                <span className="font-mono text-slate-400 text-xs">••••••••••••</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px]">
              <span className="text-slate-400 hover:text-slate-300 cursor-pointer">
                Or sign in with 6-digit email OTP
              </span>
              <span className="text-primary font-bold cursor-pointer hover:underline">
                Portal Switcher ▾
              </span>
            </div>
          </div>
        );

      // 8. Creator Portal: Referral Credentials
      case 'creator-credentials':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                  S
                </div>
                <span className="text-xs font-bold text-white">Sarah Jenkins (Active Creator)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                Dual Tracking Active
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {/* Tracking Link Card */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5 text-indigo-400" /> Dedicated Referral Link
                  </span>
                  <span className="text-[10px] text-indigo-400 font-mono">30-Day Cookie</span>
                </div>
                <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
                  <span className="text-white font-mono text-[11px] truncate">https://luxeboutique.com?ref=sarah_style</span>
                  <button className="flex items-center gap-1 text-[11px] text-primary font-bold hover:underline shrink-0 ml-2">
                    <Copy className="w-3 h-3" /> Copy
                  </button>
                </div>
              </div>

              {/* Discount Code Card */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-400" /> Shopify Discount Coupon
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">15% Off Followers</span>
                </div>
                <div className="flex items-center justify-between bg-slate-900 px-3 py-2 rounded-lg border border-slate-800">
                  <span className="text-white font-mono font-bold text-xs">SARAH15</span>
                  <button className="flex items-center gap-1 text-[11px] text-primary font-bold hover:underline shrink-0 ml-2">
                    <Copy className="w-3 h-3" /> Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-[10px] text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Auto-applied at Shopify checkout • Dual-attribution protection</span>
            </div>
          </div>
        );

      // 9. Creator Portal: Dashboard & 6 KPIs
      case 'creator-dashboard':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-white">Sarah Jenkins • Performance Dashboard</span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">● Live 30-Day Window</span>
            </div>

            {/* 6 Real-Time KPIs */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[9px] text-slate-400 uppercase font-medium block">Sales Volume</span>
                <span className="font-display font-bold text-sm text-white">$12,480</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[9px] text-slate-400 uppercase font-medium block">Lifetime Earned</span>
                <span className="font-display font-bold text-sm text-emerald-400">$1,872</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[9px] text-slate-400 uppercase font-medium block">Pending Payout</span>
                <span className="font-display font-bold text-sm text-amber-300">$480</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[9px] text-slate-400 uppercase font-medium block">Paid Out</span>
                <span className="font-display font-bold text-sm text-white">$1,392</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[9px] text-slate-400 uppercase font-medium block">Total Clicks</span>
                <span className="font-display font-bold text-sm text-white">2,450</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[9px] text-slate-400 uppercase font-medium block">Conv. Rate</span>
                <span className="font-display font-bold text-sm text-primary">4.28%</span>
              </div>
            </div>

            {/* Itemized Order Stream */}
            <div className="space-y-1.5 text-xs">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-200 font-mono">Order #2048</span>
                  <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">SARAH15</span>
                </div>
                <span className="text-emerald-400 font-bold font-mono">+$18.00</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <Link2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-slate-200 font-mono">Order #2041</span>
                  <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">LINK</span>
                </div>
                <span className="text-emerald-400 font-bold font-mono">+$12.75</span>
              </div>
            </div>
          </div>
        );

      // 10. Creator Portal: Settings & 2FA OTP
      case 'creator-settings':
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-primary" /> Payout Preferences
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                2FA Shield Active
              </span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-medium">Selected Method: PayPal</span>
                <span className="text-emerald-400 font-mono text-[10px]">Verified</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">sarah.payouts@gmail.com</p>
            </div>

            {/* 2-Factor OTP Verification Modal Box */}
            <div className="p-3.5 bg-slate-950/90 rounded-xl border border-primary/40 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold flex items-center gap-1.5 text-[11px]">
                  <Lock className="w-3.5 h-3.5" /> 2-Factor Email OTP Required
                </span>
                <span className="text-[10px] text-slate-400">Sent to creator email</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-1">
                {['4', '8', '1', '9', '3', '0'].map((digit, i) => (
                  <div
                    key={i}
                    className="w-7 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-bold text-white text-xs"
                  >
                    {digit}
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-center text-slate-400">
                Identity verified. Payout account changes locked to authorized creator.
              </p>
            </div>
          </div>
        );

      // 11. Refund Reconciliation Ledger
      case 'refund-ledger':
      case 'payout-batch':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span>Payout Settlement Ledger</span>
              <span className="text-slate-500 text-[11px]">Ready to Settle</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">Total Approved Balance</p>
                  <p className="text-[11px] text-slate-500">12 Creators approved</p>
                </div>
                <span className="font-mono font-bold text-emerald-600 text-sm">$3,420.00</span>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200/60 flex items-center gap-2 text-[11px] text-amber-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>3 orders adjusted after returns (-$45.00 auto-reconciled)</span>
              </div>
            </div>
          </div>
        );

      // 12. Hold Window
      case 'hold-window':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span>Return Window Cooling Off Period</span>
              <span className="text-indigo-600 text-[11px]">14 Days Default</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-700">Order #1042 Delivered</span>
                <span className="text-emerald-600 font-bold">Mature in 4 Days</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[70%] rounded-full" />
              </div>
              <p className="text-[10px] text-slate-500">
                Protects merchants against paying out commissions before return windows close.
              </p>
            </div>
          </div>
        );

      // 13. Tax Reports
      case 'tax-reports':
        return (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-slate-900 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold">
              <span>Tax &amp; Disbursement Statements</span>
              <span className="text-emerald-600 text-[11px]">CSV &amp; PDF Export</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <div>
                    <p className="font-bold text-slate-900">2026 Annual Creator Payouts</p>
                    <p className="text-[10px] text-slate-500">Itemized 1099 Summary Ready</p>
                  </div>
                </div>
                <span className="font-mono text-primary font-bold text-[11px] hover:underline cursor-pointer">
                  Download CSV
                </span>
              </div>
            </div>
          </div>
        );

      // 14. Anti-Fraud & Self Referral
      case 'self-referral-block':
      case 'click-dedup':
      case 'hmac-security':
      case 'risk-ledger':
      case 'fraud-telemetry':
      default:
        return (
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold">
              <span className="text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Security &amp; Fraud Telemetry
              </span>
              <span className="text-emerald-400 font-mono text-[11px]">Active</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-300 block">Self-Referral Attempt Blocked</span>
                  <span className="text-[10px] text-slate-500">Affiliate email matched checkout billing</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold text-[10px]">
                  Blocked
                </span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-300 block">1-Min IP Click Deduplication</span>
                  <span className="text-[10px] text-slate-500">Automated spam traffic filtered</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">
                  Filtered
                </span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            Feature Deep-Dive Tour
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-[42px] text-slate-950 tracking-tight leading-tight">
            KickAffiliate&apos;s Core Feature Tour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Explore how our native Shopify platform automates your creator partnerships from click to payout.
          </p>
        </div>

        {/* Alternating Deep Dives */}
        <div className="space-y-24 md:space-y-28">
          {deepDives.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {item.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Mockup */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {renderMockup(item.mockupType)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Bottom Action Bar */}
        <div className="pt-8 text-center flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="primary"
            onClick={onBookDemo}
            className="h-12 px-8 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20"
          >
            Start 14-Day Free Trial <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <button
            onClick={onBookDemo}
            className="h-12 px-7 rounded-full border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
          >
            Connect
          </button>
        </div>
      </div>
    </section>
  );
}
