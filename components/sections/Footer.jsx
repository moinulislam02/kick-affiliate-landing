'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Features',
      links: ['Link Tracking', 'Commission Engine', 'Automated Payouts', 'White-label Portals'],
    },
    {
      title: 'Use Cases',
      links: ['Shopify Brands', 'Creator Networks', 'Influencer Hubs', 'Ambassador Programs'],
    },
    {
      title: 'Compare Us',
      links: ['vs GoAffPro', 'vs UpPromote', 'vs Refersion', 'vs Impact.com'],
    },
    {
      title: 'Resources',
      links: ['Affiliate Guides', 'API Documentation', 'Developer Tools', 'Help Center'],
    },
    {
      title: 'Company',
      links: ['About KickAffiliate', 'Careers', 'Brand Kit', 'Contact Support'],
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: '#',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      href: '#',
    },
    {
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: '#',
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 sm:py-20 select-none">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Top Segment: Logo + Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/kick-affiliate.png" alt="KickAffiliate" className="w-7 h-7 object-contain group-hover:scale-105 transition-transform" />
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Kick<span className="text-primary">Affiliate</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[240px]">
              The highest-converting affiliate marketing SaaS for scaling Shopify merchants. Launch, track, and pay creators seamlessly.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  className="w-8 h-8 rounded-full border border-slate-900 bg-slate-950 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-xs hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Segment: Trust & Award Badges Row */}
        <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-900 mb-8 justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Built for Shopify design indicator */}
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-850 px-3.5 py-1.5 rounded-lg text-xs text-white font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Built for Shopify Plus</span>
            </div>
            {/* Security Indicator */}
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-850 px-3.5 py-1.5 rounded-lg text-xs text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>SOC 2 Type II Certified</span>
            </div>
            {/* G2 Indicator */}
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-850 px-3.5 py-1.5 rounded-lg text-xs text-white font-medium">
              <span>G2 High Performer 2026</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-600 font-medium">
            Uptime: 99.98%
          </div>
        </div>

        {/* Bottom Segment: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} KickAffiliate Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition">Terms of Service</Link>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            <span>for Shopify brands</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
