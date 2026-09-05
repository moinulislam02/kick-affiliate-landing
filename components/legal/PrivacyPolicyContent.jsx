'use client';

import React from 'react';
import {
  Shield,
  Lock,
  Database,
  Eye,
  Server,
  RefreshCw,
  Cpu,
  UserCheck,
  Globe2,
  AlertCircle,
  CheckCircle2,
  FileCheck,
  Building,
  Users,
  ShoppingBag,
  ExternalLink,
} from 'lucide-react';

export const privacySections = [
  { id: 'section-1', title: '1. Introduction & Scope' },
  { id: 'section-2', title: '2. Roles Under Data Privacy Laws' },
  { id: 'section-3', title: '3. Information We Collect' },
  { id: 'section-4', title: '4. How We Use Information (Legal Bases)' },
  { id: 'section-5', title: '5. Cookies & Tracking Technologies' },
  { id: 'section-6', title: '6. Sharing & Sub-processors' },
  { id: 'section-7', title: '7. Data Retention & Deletion' },
  { id: 'section-8', title: '8. Shopify Webhooks & Compliance' },
  { id: 'section-9', title: '9. Data Security & Encryption' },
  { id: 'section-10', title: '10. Your Rights (GDPR & CCPA/CPRA)' },
  { id: 'section-11', title: '11. International Data Transfers' },
  { id: 'section-12', title: '12. Children\'s Privacy' },
  { id: 'section-13', title: '13. Changes to this Privacy Policy' },
  { id: 'section-14', title: '14. Contact Information' },
];

export default function PrivacyPolicyContent() {
  return (
    <div className="space-y-12 text-slate-700 text-sm leading-relaxed">
      
      {/* Intro Summary Callout */}
      <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15 flex items-start gap-4">
        <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
          <Shield className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-display font-bold text-slate-950 text-sm">
            Summary of Privacy Commitments
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Kick Affiliate is engineered from the ground up to respect merchant, creator, and consumer data privacy. We comply with GDPR, CCPA/CPRA, PIPEDA, and the Shopify App Store Partner Requirements. We never sell or broker customer personal information.
          </p>
        </div>
      </div>

      {/* 1. Introduction & Scope */}
      <section id="section-1" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            01
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            1. Introduction &amp; Scope
          </h2>
        </div>
        <p>
          Kick Affiliate provides an affiliate, influencer, and referral marketing platform specifically designed for Shopify merchants. This Privacy Policy describes how Kick Affiliate (&ldquo;the App&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, processes, stores, and protects personal information when:
        </p>
        
        <div className="grid sm:grid-cols-3 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <Building className="w-4 h-4 text-primary" />
              1. Shopify Merchants
            </div>
            <p className="text-xs text-slate-600">
              Merchants installing and configuring the application within their Shopify administrative store.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <Users className="w-4 h-4 text-primary" />
              2. Affiliates &amp; Creators
            </div>
            <p className="text-xs text-slate-600">
              Creators registering, accessing their Creator Portal, generating tracking links, and managing payouts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <ShoppingBag className="w-4 h-4 text-primary" />
              3. Store Shoppers
            </div>
            <p className="text-xs text-slate-600">
              Store visitors clicking referral links (<code className="text-[11px] bg-white px-1 py-0.5 rounded text-primary">?ref=TOKEN</code>) or applying discount codes at checkout.
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500 pt-1">
          This Privacy Policy is designed to comply with the <strong>Shopify App Store Partner Requirements</strong>, European General Data Protection Regulation (<strong>GDPR</strong>), California Consumer Privacy Act / CPRA (<strong>CCPA/CPRA</strong>), the Personal Information Protection and Electronic Documents Act (<strong>PIPEDA</strong>), and other applicable global data privacy frameworks.
        </p>
      </section>

      {/* 2. Roles Under Data Privacy Laws */}
      <section id="section-2" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            02
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            2. Roles Under Data Privacy Laws
          </h2>
        </div>
        <p>
          Depending on the context and interaction, Kick Affiliate acts in different legal capacities:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
              Data Processor / Service Provider
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              When processing Customer order and store transaction data on behalf of a Merchant, Kick Affiliate acts strictly as a <strong>Data Processor</strong>. The Merchant is the <strong>Data Controller</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              Data Controller
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              When processing Affiliate account credentials, payment setup preferences, and direct Merchant administrative contact info, Kick Affiliate acts as a <strong>Data Controller</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Information We Collect */}
      <section id="section-3" className="scroll-mt-32 space-y-5">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            03
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            3. Information We Collect
          </h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-primary" />
              A. Information Collected from Merchants
            </h3>
            <p className="text-xs text-slate-600">
              When you install and authorize Kick Affiliate via Shopify OAuth, we securely retrieve:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li><strong>Store &amp; Account Details:</strong> Store name, <code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">.myshopify.com</code> domain, custom domain, primary contact email, store currency, timezone, locale, and country.</li>
              <li><strong>Shopify Access Tokens:</strong> Secure, offline OAuth tokens required to interact with the Shopify Admin API.</li>
              <li><strong>Subscription &amp; Billing Info:</strong> Plan tier selections managed through Shopify&rsquo;s Billing API (we do <em>not</em> store credit cards directly; all transactions are processed securely by Shopify).</li>
              <li><strong>Store Configuration:</strong> Custom commission tiers, cookie durations, brand logos, and email templates.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              B. Information Collected from Affiliates / Creators
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li><strong>Account &amp; Profile Data:</strong> Full name, email address, phone number, company name, address (city, state, zip), and social media handles.</li>
              <li><strong>Authentication Credentials:</strong> Password hashes, magic login tokens, and one-time password (OTP) verification records.</li>
              <li><strong>Payout &amp; Banking Details:</strong> Preferred payout method (PayPal email address, bank name, account name, account number, routing number) voluntarily provided for commission settlements.</li>
              <li><strong>Tracking Identifiers:</strong> Assigned referral tokens (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">?ref=TOKEN</code>), Shopify discount codes, and commission history.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-primary" />
              C. Information Collected from Store Customers / End Users
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li><strong>Attribution Metadata:</strong> Unique referral token (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">_ref_creator</code>), landing URL, referring URL, cart note attributes, and applied coupon codes.</li>
              <li><strong>Order Financial Data:</strong> Shopify order ID, order number, subtotal, discount value, total price, currency, purchased product IDs, and fulfillment/refund status.</li>
              <li><strong>Click &amp; Anti-Fraud Telemetry:</strong> IP address (used strictly for 1-minute deduplication and fraud prevention), User-Agent header, device type, and click timestamps.</li>
            </ul>
          </div>

          {/* Shopper Privacy Callout Box */}
          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display font-bold text-emerald-950 text-xs">
                Important Shopper Privacy Protection
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                To protect consumer privacy, <strong>Kick Affiliate never displays Customer names, phone numbers, or delivery addresses to Affiliates or Creators</strong>. Affiliates only view obfuscated order references, subtotal amounts, and their resulting commission calculation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Use Information */}
      <section id="section-4" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            04
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            4. How We Use Collected Information
          </h2>
        </div>
        <p>
          We process personal and operational data exclusively for legitimate business purposes in accordance with global data protection standards:
        </p>

        {/* Legal Bases Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80 font-display font-bold">
              <tr>
                <th className="p-3.5">Purpose of Processing</th>
                <th className="p-3.5">Legal Basis (GDPR)</th>
                <th className="p-3.5">Categories of Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-semibold text-slate-900">Affiliate Link Tracking &amp; Attribution</td>
                <td className="p-3.5"><span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">Legitimate Interests / Contract</span></td>
                <td className="p-3.5">Referral tokens, click timestamps, IP hash, discount codes</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-semibold text-slate-900">Commission Calculation &amp; Settlement</td>
                <td className="p-3.5"><span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">Performance of Contract</span></td>
                <td className="p-3.5">Order amounts, product IDs, discount values, creator rates</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-semibold text-slate-900">Order Lifecycle Syncing</td>
                <td className="p-3.5"><span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">Performance of Contract</span></td>
                <td className="p-3.5">Shopify webhooks (<code className="text-[11px]">orders/create</code>, <code className="text-[11px]">orders/updated</code>)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-semibold text-slate-900">Fraud Prevention &amp; Anti-Abuse</td>
                <td className="p-3.5"><span className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-medium">Legitimate Interests</span></td>
                <td className="p-3.5">IP deduplication, self-referral checks, HMAC verification</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-semibold text-slate-900">Authentication &amp; Account Security</td>
                <td className="p-3.5"><span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">Performance of Contract</span></td>
                <td className="p-3.5">Login credentials, OTP codes, session tokens</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-semibold text-slate-900">Shopify App Compliance</td>
                <td className="p-3.5"><span className="inline-block px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-medium">Legal Obligation</span></td>
                <td className="p-3.5">Shopify compliance webhooks (<code className="text-[11px]">customers/redact</code>, <code className="text-[11px]">shop/redact</code>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs font-semibold text-slate-800">
          We do NOT sell, rent, monetize, or broker personal data to third-party data aggregators or advertising networks.
        </p>
      </section>

      {/* 5. Cookies and Tracking */}
      <section id="section-5" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            05
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            5. Cookies and Tracking Technologies
          </h2>
        </div>
        <p>
          Kick Affiliate uses lightweight client-side storage technologies solely to attribute referral sales:
        </p>
        <ul className="list-disc list-inside space-y-2 text-xs text-slate-600 pl-2">
          <li>
            <strong>Referral Storage (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">_ref_creator</code>):</strong> A persistent cookie or local storage item written when a visitor clicks an affiliate link (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">?ref=TOKEN</code>).
          </li>
          <li>
            <strong>Duration:</strong> Configured by the Merchant (e.g. 7, 30, 60, or 90 days; standard default is 30 days).
          </li>
          <li>
            <strong>Purpose:</strong> Allows attributing purchases made during subsequent visits within the active tracking window.
          </li>
          <li>
            <strong>Opt-Out:</strong> Shoppers may clear browser cookies or utilize standard browser privacy controls at any time to remove tracking tokens.
          </li>
        </ul>
      </section>

      {/* 6. Sub-processors */}
      <section id="section-6" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            06
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            6. Sharing &amp; Disclosure of Data (Sub-processors)
          </h2>
        </div>
        <p>
          We share data strictly with trusted third-party infrastructure providers necessary to deliver the SaaS service:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200/80 font-display font-bold">
              <tr>
                <th className="p-3.5">Sub-processor</th>
                <th className="p-3.5">Role / Purpose</th>
                <th className="p-3.5">Location &amp; Security</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-bold text-slate-900">Shopify Inc.</td>
                <td className="p-3.5">E-commerce platform host, OAuth authentication, Billing API &amp; Webhook delivery</td>
                <td className="p-3.5">Canada / Global (SOC 2, ISO 27001)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-bold text-slate-900">MongoDB Atlas</td>
                <td className="p-3.5">Encrypted cloud database hosting, multi-region replication &amp; session storage</td>
                <td className="p-3.5">Global (SOC 2 Type II, HIPAA, ISO 27001)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-bold text-slate-900">Hostinger / SMTP Gateway</td>
                <td className="p-3.5">Transactional email delivery (OTP verification, affiliate notices)</td>
                <td className="p-3.5">European Union / USA</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="p-3.5 font-bold text-slate-900">Cloudflare / VPS Infrastructure</td>
                <td className="p-3.5">Reverse proxy, SSL/TLS termination, DDoS mitigation</td>
                <td className="p-3.5">Global Edge Network</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Data Retention & Deletion */}
      <section id="section-7" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            07
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            7. Data Retention &amp; Deletion
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-xs text-slate-600 pl-2">
          <li><strong>Merchant Data:</strong> Maintained for the active duration of the app installation.</li>
          <li><strong>App Uninstallation:</strong> When an app uninstallation webhook (<code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded">app/uninstalled</code>) is received, store tokens are immediately invalidated and store data is queued for permanent purge within 48 hours to 30 days.</li>
          <li><strong>Affiliate Data:</strong> Stored until the creator or merchant requests account deletion, subject to tax and accounting retention requirements.</li>
          <li><strong>Click Telemetry:</strong> Temporary click records are aggregated and systematically pruned after 90 days.</li>
        </ul>
      </section>

      {/* 8. Shopify Mandatory Webhooks */}
      <section id="section-8" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            08
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            8. Shopify Mandatory Webhooks &amp; GDPR / CCPA Compliance
          </h2>
        </div>
        <p>
          Kick Affiliate implements and automatedly handles all mandatory Shopify privacy webhooks:
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-[11px]">customers/data_request</span>
              Customer Data Request
            </div>
            <p className="text-xs text-slate-600">
              Upon receiving a customer access request forwarded by Shopify, we export any attribution records connected to the customer within 30 days.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-mono text-[11px]">customers/redact</span>
              Customer Data Redaction
            </div>
            <p className="text-xs text-slate-600">
              Upon receiving a deletion request, all personal identifiers associated with the shopper are permanently erased or anonymized from referral logs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-mono text-[11px]">shop/redact</span>
              Shop Data Redaction
            </div>
            <p className="text-xs text-slate-600">
              Dispatched 48 hours after store uninstallation. Kick Affiliate automatically and irreversibly purges remaining merchant settings and creator database records.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Data Security */}
      <section id="section-9" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            09
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            9. Data Security &amp; Encryption
          </h2>
        </div>
        <p>
          We employ industry standard technological controls to protect stored and transmitted data:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <Lock className="w-4 h-4 text-primary" />
              Encryption in Transit
            </div>
            <p className="text-xs text-slate-600">
              All communications between clients, Shopify APIs, and backend endpoints enforce <strong>TLS 1.2+ / TLS 1.3</strong> with modern cipher suites.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <Database className="w-4 h-4 text-primary" />
              Encryption at Rest
            </div>
            <p className="text-xs text-slate-600">
              All database storage volumes, backups, and secure credential tables are encrypted with industry-standard <strong>AES-256</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <Shield className="w-4 h-4 text-primary" />
              HMAC Signature Verification
            </div>
            <p className="text-xs text-slate-600">
              Every incoming Shopify webhook is validated cryptographically via SHA-256 HMAC headers before payload processing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="flex items-center gap-2 font-display font-bold text-xs text-slate-900">
              <UserCheck className="w-4 h-4 text-primary" />
              MFA Access Control
            </div>
            <p className="text-xs text-slate-600">
              Infrastructure administrative access is locked down with strict role-based permissions and mandatory Multi-Factor Authentication.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Your Rights */}
      <section id="section-10" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            10
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            10. Your Rights (GDPR &amp; CCPA/CPRA)
          </h2>
        </div>
        <p>
          Depending on your jurisdiction, you possess the following rights regarding personal data:
        </p>
        <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <strong>Right of Access:</strong> Request a copy of records held concerning you.
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <strong>Right to Rectification:</strong> Request correction of inaccurate information.
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <strong>Right to Erasure:</strong> Request permanent removal of your data.
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/60">
            <strong>Right to Data Portability:</strong> Obtain data in a structured, machine-readable format.
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <p className="font-semibold text-slate-900">How to exercise your privacy rights:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li><strong>Store Shoppers:</strong> Please submit requests directly to the Merchant from whom you purchased (the Data Controller).</li>
            <li><strong>Merchants &amp; Creators:</strong> Contact us directly at <a href="mailto:support@techprob.org" className="text-primary font-bold hover:underline">support@techprob.org</a>. We respond to all verified requests within 30 days.</li>
          </ul>
        </div>
      </section>

      {/* 11. International Transfers */}
      <section id="section-11" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            11
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            11. International Data Transfers
          </h2>
        </div>
        <p>
          Kick Affiliate operates globally. Information collected may be stored and processed in secure data centers across the United States, European Union, and allied jurisdictions. We apply adequate cross-border transfer safeguards including standard contractual clauses (SCCs) and robust encryption standards.
        </p>
      </section>

      {/* 12. Children's Privacy */}
      <section id="section-12" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            12
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            12. Children&rsquo;s Privacy
          </h2>
        </div>
        <p>
          Kick Affiliate is a commercial B2B and creator marketing platform. We do not knowingly solicit or collect data from individuals under 16 years of age. If we learn that personal data of a minor under 16 has been collected without parental consent, we will promptly delete it.
        </p>
      </section>

      {/* 13. Changes */}
      <section id="section-13" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            13
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            13. Changes to this Privacy Policy
          </h2>
        </div>
        <p>
          We may update this Privacy Policy periodically to reflect technological improvements, new product features, or regulatory amendments. When updates occur, the &ldquo;Last Updated&rdquo; date at the top of this document will be modified. Continued use of Kick Affiliate constitutes acceptance of the revised terms.
        </p>
      </section>

      {/* 14. Contact Information */}
      <section id="section-14" className="scroll-mt-32 space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
          <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-900 font-display font-bold text-xs flex items-center justify-center shrink-0">
            14
          </span>
          <h2 className="font-display font-bold text-xl text-slate-950">
            14. Contact Information
          </h2>
        </div>
        <p>
          For privacy inquiries, Data Protection Officer requests, or compliance questions:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
          <p><strong>Company / Developer:</strong> Kick Affiliate (Techprob)</p>
          <p><strong>Compliance Email:</strong> <a href="mailto:support@techprob.org" className="text-primary font-bold hover:underline">support@techprob.org</a></p>
          <p><strong>Application Website:</strong> <a href="https://kick-affiliate.techprob.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://kick-affiliate.techprob.org</a></p>
        </div>
      </section>

    </div>
  );
}
