'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  FileText,
  Clock,
  Calendar,
  Share2,
  Printer,
  ChevronRight,
  Mail,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function LegalLayout({
  title,
  description,
  lastUpdated = 'September 3, 2026',
  effectiveDate = 'September 3, 2026',
  activeDoc = 'privacy', // 'privacy' | 'terms'
  sections = [],
  children,
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fafbfc]">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-x-0 top-0 h-[520px] geometric-grid opacity-60 pointer-events-none -z-10" />

      {/* Hero Header Section */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-18 border-b border-slate-200/70 bg-gradient-to-b from-white via-white/80 to-[#fafbfc]">
        <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
          
          {/* Breadcrumbs & Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-medium">
            <Link
              href="/"
              className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">Legal</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-primary font-semibold">{title}</span>

            <span className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
              <Shield className="w-3 h-3" />
              Legal & Compliance
            </span>
          </div>

          {/* Document Switcher Tabs */}
          <div className="inline-flex p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 mb-6">
            <Link
              href="/privacy-policy"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeDoc === 'privacy'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lock className="w-3.5 h-3.5 text-primary" />
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeDoc === 'terms'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              Terms & Conditions
            </Link>
          </div>

          {/* Title and Meta Info */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {description}
              </p>
            </div>

            {/* Quick Actions & Meta Ribbon */}
            <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
              <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-xs text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Effective: <strong>{effectiveDate}</strong></span>
                </div>
                <span className="w-px h-3.5 bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Updated: <strong>{lastUpdated}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 hover:text-primary transition-colors shadow-xs text-slate-600 cursor-pointer"
                  title="Copy Page Link"
                  aria-label="Copy Page Link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copied && (
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                    Copied!
                  </span>
                )}
                <button
                  onClick={handlePrint}
                  className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 hover:text-primary transition-colors shadow-xs text-slate-600 cursor-pointer"
                  title="Print Document"
                  aria-label="Print Document"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <main className="max-w-[1360px] w-full mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-primary" />
                  Table of Contents
                </span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {sections.length} Sections
                </span>
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                {sections.map((sec, idx) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(sec.id);
                      if (target) {
                        const top = target.getBoundingClientRect().top + window.scrollY - 110;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className={`group flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                      activeSection === sec.id
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono shrink-0 mt-0.5 ${
                        activeSection === sec.id ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug line-clamp-2">{sec.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Compliance Badges Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-5 text-white shadow-md border border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs">Certified Standards</h4>
                  <p className="text-[10px] text-slate-400">Enterprise Data Protection</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Built for Shopify Plus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>GDPR & CCPA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Mandatory Webhooks Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>TLS 1.3 & AES-256 Encryption</span>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-xs">
                <Mail className="w-4 h-4 text-primary" />
                <span>Questions or Inquiries?</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contact our compliance team at{' '}
                <a
                  href="mailto:support@kickaffiliate.io"
                  className="text-primary hover:underline font-semibold"
                >
                  support@kickaffiliate.io
                </a>
              </p>
            </div>
          </aside>

          {/* Legal Article Body */}
          <article className="lg:col-span-8 xl:col-span-9 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 md:p-14 shadow-xs">
            {children}
          </article>

        </div>
      </main>

      {/* Bottom Contact / Next Steps Callout */}
      <section className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Commitment to Transparency
            </span>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">
              Have specific legal or data compliance requirements?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Our engineering and compliance team is available to execute custom Data Processing Agreements (DPA) or discuss enterprise security audits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:support@kickaffiliate.io"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md shadow-primary/20"
            >
              <Mail className="w-4 h-4" />
              Contact Legal Team
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all border border-slate-700"
            >
              Back to Home
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
