'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  AlertTriangle,
  Scale,
  CreditCard,
  Ban,
  Megaphone,
  ShoppingBag,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export const termsSections = [
  { id: 'section-1', title: '1. Acceptance of Terms' },
  { id: 'section-2', title: '2. Description of the Service' },
  { id: 'section-3', title: '3. Account Eligibility & Responsibilities' },
  { id: 'section-4', title: '4. Affiliate Marketing Conduct & FTC' },
  { id: 'section-5', title: '5. Commission Tracking & Adjustments' },
  { id: 'section-6', title: '6. Subscriptions & Shopify Billing' },
  { id: 'section-7', title: '7. Intellectual Property Rights' },
  { id: 'section-8', title: '8. Data Privacy & Security' },
  { id: 'section-9', title: '9. Third-Party & Platform Dependencies' },
  { id: 'section-10', title: '10. Disclaimer of Warranties' },
  { id: 'section-11', title: '11. Limitation of Liability' },
  { id: 'section-12', title: '12. Indemnification' },
  { id: 'section-13', title: '13. Termination & Suspension' },
  { id: 'section-14', title: '14. Changes to These Terms' },
  { id: 'section-15', title: '15. Governing Law & Jurisdiction' },
  { id: 'section-16', title: '16. Contact Information' },
];

export default function TermsContent() {
  return (
    <div className="space-y-12 text-slate-700 text-sm leading-relaxed">
      
      {/* Intro Summary Callout */}
      <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-start gap-4">
        <div className="p-2 rounded-xl bg-white/10 text-white shrink-0 mt-0.5">
          <FileText className="w-5 h-5 text-primary-300" />
        </div>
        <div className="space-y-1">
          <h4 className="font-display font-bold text-white text-sm">
            Terms of Service Agreement Overview
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            These terms govern your usage of the Kick Affiliate application, Creator Portal, and related platform services. By installing or accessing our services, you agree to these terms.
          </p>
        </div>
      </div>

      {/* 1. Acceptance of Terms */}
      <section id="section-1" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            01
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            1. Acceptance of Terms
          </h2>
        </div>
        <p>
          By installing the Kick Affiliate application from the Shopify App Store, accessing our website, creating an Affiliate account, or utilizing any services provided by Kick Affiliate, you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;).
        </p>
        <p>
          If you are entering into these Terms on behalf of a business, merchant entity, or corporate organization, you represent and warrant that you have the legal authority to bind that entity. If you do not agree with any part of these Terms, you must immediately uninstall the application and discontinue use of the Service.
        </p>
      </section>

      {/* 2. Description of the Service */}
      <section id="section-2" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            02
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            2. Description of the Service
          </h2>
        </div>
        <p>
          Kick Affiliate is a software-as-a-service (SaaS) platform engineered for Shopify merchants to create, configure, track, and scale affiliate marketing, influencer partnerships, and referral networks.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
          <p className="font-semibold text-xs text-slate-900">Core Platform Features Include:</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
            <li>Automated referral link and coupon code tracking.</li>
            <li>Multi-tier commission calculation and attribution rules engine.</li>
            <li>White-label Creator Portal for affiliate onboarding, dashboards, and payout data management.</li>
            <li>Webhook-driven order lifecycle reconciliation (fulfillments, returns, refunds, cancellations).</li>
            <li>Payout settlement tracking and reporting.</li>
          </ul>
        </div>
      </section>

      {/* 3. Account Eligibility & Responsibilities */}
      <section id="section-3" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            03
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            3. Account Eligibility &amp; Responsibilities
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-primary" />
              3.1 Merchant Accounts &amp; Payout Liability
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 pl-1">
              <li><strong>Installation &amp; Access:</strong> Merchants must maintain an active Shopify store and authorize Kick Affiliate via Shopify OAuth.</li>
              <li><strong>Accuracy of Program Terms:</strong> Merchants are solely responsible for configuring accurate commission percentages, holding periods, and discount codes.</li>
            </ul>
            
            {/* Critical Payout Callout */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-amber-900 text-xs mt-2 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                Sole Liability for Affiliate Payouts
              </p>
              <p className="text-[11.5px] leading-relaxed">
                <strong>Kick Affiliate is a software platform, not a financial institution, bank, escrow agent, or money transmitter.</strong> Merchants are solely and exclusively responsible for reviewing, approving, funding, and paying commission balances owed to their affiliates. Kick Affiliate is not liable for unpaid affiliate commissions or payment disputes between merchants and affiliates.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-primary" />
              3.2 Affiliate &amp; Creator Accounts
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
              <li><strong>Age Requirement:</strong> Affiliates must be at least 18 years of age (or legal age of majority in their jurisdiction).</li>
              <li><strong>Credential Security:</strong> Affiliates must maintain the strict confidentiality of password credentials and OTP verification codes.</li>
              <li><strong>Accuracy of Payment Info:</strong> Affiliates are solely responsible for ensuring submitted payout records (PayPal email or bank details) are accurate. Kick Affiliate is not liable for misrouted funds due to erroneous creator input.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Affiliate Conduct & FTC */}
      <section id="section-4" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            04
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            4. Affiliate Conduct, Marketing Rules &amp; Legal Disclosures
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-2">
            <h4 className="font-display font-bold text-xs text-blue-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              4.1 Required Advertising Disclosures (FTC Compliance)
            </h4>
            <p className="text-xs text-blue-900 leading-relaxed">
              Affiliates must conspicuously disclose their commercial connection with the Merchant across all promotional channels (YouTube, Instagram, TikTok, blogs, podcasts) using clear statements or hashtags like <strong className="font-mono bg-white px-1.5 py-0.5 rounded text-blue-800">#ad</strong>, <strong className="font-mono bg-white px-1.5 py-0.5 rounded text-blue-800">#sponsored</strong>, or <strong className="font-mono bg-white px-1.5 py-0.5 rounded text-blue-800">#affiliate</strong> positioned prominently before any affiliate link or coupon code.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-xs text-slate-900 flex items-center gap-2">
              <Ban className="w-4 h-4 text-red-500" />
              4.2 Prohibited Marketing Practices
            </h4>
            <p className="text-xs text-slate-600">Affiliates and Merchants shall NOT:</p>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                1. Engage in spamming, mass unsolicited emails, or click-farming.
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                2. Use &ldquo;cookie-stuffing,&rdquo; invisible iframes, or forced clicks.
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                3. Make deceptive, unsubstantiated, or misleading claims.
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                4. Bid on Merchant trademarks in search ads (Google/PPC) without authorization.
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60 sm:col-span-2">
                5. Execute self-referrals (clicking one&rsquo;s own link to claim unauthorized kickbacks on personal purchases) where disallowed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Commission Tracking & Adjustments */}
      <section id="section-5" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            05
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            5. Commission Tracking, Calculation &amp; Adjustments
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-xs text-slate-600 pl-2">
          <li><strong>Attribution Mechanics:</strong> Commissions are attributed using cookies/local storage (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">_ref_creator</code>) and Shopify order webhooks. Kick Affiliate is not liable for sales unrecorded due to browser ad-blockers, private modes, or custom checkout scripts.</li>
          <li><strong>Cancellations &amp; Fraud:</strong> If a referred order is voided or flagged fraudulent, the associated commission is automatically adjusted or cancelled.</li>
          <li><strong>Returns &amp; Refunds:</strong> When orders are returned or cancelled, associated unpaid commissions are voided per Merchant store settings.</li>
          <li><strong>Holding Periods:</strong> Merchants may enforce holding windows (e.g., 30 days) to accommodate delivery confirmation and return window expiration before commissions convert to approved balances.</li>
        </ul>
      </section>

      {/* 6. Subscriptions & Shopify Billing */}
      <section id="section-6" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            06
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            6. Subscriptions, Fees &amp; Shopify Billing
          </h2>
        </div>
        <div className="space-y-3">
          <p>
            Kick Affiliate offers tiered subscription plans (Free, Pro, Premium) billed on 30-day (monthly) or 365-day (annual) intervals.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <CreditCard className="w-4 h-4 text-primary" />
              Unified Shopify Billing API
            </div>
            <p>
              All recurring subscription charges are processed exclusively through Shopify&rsquo;s official Billing API and appear directly on the merchant&rsquo;s standard Shopify invoice.
            </p>
            <p>
              Merchants can cancel their subscription at any time by changing plan tiers or uninstalling the app. Uninstallation immediately terminates recurring billing. Subscription fees are non-refundable except where required by law.
            </p>
          </div>
        </div>
      </section>

      {/* 7. IP Rights */}
      <section id="section-7" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            07
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            7. Intellectual Property Rights
          </h2>
        </div>
        <p>
          Kick Affiliate, its source code, databases, algorithms, user interface components, trademarks, and documentation remain the exclusive intellectual property of Kick Affiliate (Techprob).
        </p>
        <p>
          Merchants and Creators retain full ownership of their respective trademarks, product photography, logos, and promotional assets uploaded to or displayed via the Service.
        </p>
      </section>

      {/* 8. Privacy */}
      <section id="section-8" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            08
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            8. Data Privacy &amp; Security
          </h2>
        </div>
        <p>
          Our collection, storage, and processing of personal data are governed by our{' '}
          <Link href="/privacy-policy" className="text-primary font-bold hover:underline">
            Privacy Policy
          </Link>
          . By using Kick Affiliate, you acknowledge that your data will be handled in compliance with our Privacy Policy and relevant international regulations (GDPR, CCPA, PIPEDA).
        </p>
      </section>

      {/* 9. Platform Dependency */}
      <section id="section-9" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            09
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            9. Third-Party Integrations &amp; Shopify Platform Dependency
          </h2>
        </div>
        <p>
          The Service operates as an integrated app on the Shopify e-commerce platform. We are not liable for outages, API modifications, or service interruptions originating from Shopify Inc., hosting infrastructure, or third-party email providers. Users agree to comply with Shopify&rsquo;s Acceptable Use Policy.
        </p>
      </section>

      {/* 10. Disclaimer of Warranties */}
      <section id="section-10" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            10
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            10. Disclaimer of Warranties
          </h2>
        </div>
        <div className="p-4 rounded-xl bg-slate-100 text-slate-800 text-xs uppercase leading-relaxed font-mono">
          THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KICK AFFILIATE DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE SPECIFIC SALES, REVENUE TARGETS, OR UNINTERRUPTED UPTIME.
        </div>
      </section>

      {/* 11. Limitation of Liability */}
      <section id="section-11" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            11
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            11. Limitation of Liability
          </h2>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL KICK AFFILIATE OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR UNPAID AFFILIATE COMMISSIONS).
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO KICK AFFILIATE IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE CLAIM EVENT.
        </p>
      </section>

      {/* 12. Indemnification */}
      <section id="section-12" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            12
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            12. Indemnification
          </h2>
        </div>
        <p>
          You agree to defend, indemnify, and hold harmless Kick Affiliate, its directors, and officers from and against any claims, liabilities, losses, or legal costs arising from: (1) your violation of these Terms; (2) violations of advertising laws or FTC guidelines; (3) disputes between merchants and affiliates over commissions or payouts; or (4) infringement of third-party intellectual property rights.
        </p>
      </section>

      {/* 13. Termination & Suspension */}
      <section id="section-13" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            13
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            13. Termination &amp; Suspension
          </h2>
        </div>
        <p>
          Merchants may terminate at any time by uninstalling the app. Kick Affiliate reserves the right to immediately suspend or terminate access without notice if a user engages in fraudulent conduct, cookie-stuffing, security attacks, or material breaches of these Terms.
        </p>
      </section>

      {/* 14. Changes to Terms */}
      <section id="section-14" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            14
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            14. Changes to These Terms
          </h2>
        </div>
        <p>
          We reserve the right to revise these Terms at any time. When modified, the &ldquo;Last Updated&rdquo; date at the top will be revised. Continued use of Kick Affiliate after modifications constitutes binding acceptance of the updated Terms.
        </p>
      </section>

      {/* 15. Governing Law */}
      <section id="section-15" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            15
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            15. Governing Law &amp; Jurisdiction
          </h2>
        </div>
        <p>
          These Terms and any disputes arising out of them shall be governed by and construed in accordance with applicable laws without regard to conflict of law principles.
        </p>
      </section>

      {/* 16. Contact Info */}
      <section id="section-16" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            16
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            16. Contact Information
          </h2>
        </div>
        <p>
          For legal inquiries, terms interpretation, or agreement notices:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
          <p><strong>Application:</strong> Kick Affiliate (Techprob)</p>
          <p><strong>Support &amp; Legal:</strong> <a href="mailto:support@techprob.org" className="text-primary font-bold hover:underline">support@techprob.org</a></p>
          <p><strong>Website:</strong> <a href="https://kick-affiliate.techprob.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://kick-affiliate.techprob.org</a></p>
        </div>
      </section>

    </div>
  );
}
