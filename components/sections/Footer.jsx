'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Features',
      links: [
        { label: 'Dual Attribution', href: '/features/dual-attribution' },
        { label: 'Commission Engine', href: '/features/commission-engine' },
        { label: 'Creator Portal', href: '/features/creator-portal' },
        { label: 'Refund Reconciliation', href: '/features/payout-reconciliation' },
        { label: 'Anti-Fraud Shield', href: '/features/anti-fraud' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Creator & Influencer Hubs', href: '/features/creator-portal' },
        { label: '7-Day Commission Protection', href: '/features/payout-reconciliation' },
        { label: 'Zero-Loss Link & Code Tracking', href: '/features/dual-attribution' },
        { label: 'Multi-Tier Commission Rules', href: '/features/commission-engine' },
        { label: 'Anti-Fraud & Leak Defense', href: '/features/anti-fraud' },
      ],
    },
    {
      title: 'Compare',
      links: [
        { label: 'vs GoAffPro Alternative', href: '/compare/vs-goaffpro' },
        { label: 'vs UpPromote Alternative', href: '/compare/vs-uppromote' },
        { label: 'vs Refersion Alternative', href: '/compare/vs-refersion' },
        { label: 'vs BixGrow Alternative', href: '/compare/vs-bixgrow' },
        { label: 'All Comparisons', href: '/compare' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Pricing Plans', href: '/pricing' },
        { label: 'Contact Support', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-and-conditions' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/kickaffiliate',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kickaffiliate/',
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kickaffiliate',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@KickAffiliate',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Shopify',
      href: process.env.NEXT_PUBLIC_SHOPIFY_APP_STORE_URL || 'https://apps.shopify.com/kick-affiliate',
      icon: (
        <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M30.837 7.78C30.814 7.569 30.626 7.475 30.486 7.475C30.346 7.475 27.276 7.241 27.276 7.241C27.276 7.241 25.144 5.109 24.886 4.898C24.652 4.664 24.206 4.734 24.019 4.781C23.996 4.781 23.55 4.922 22.824 5.156C22.098 3.07 20.856 1.172 18.63 1.172C18.63 1.172 18.419 1.172 18.419 1.172C17.808 0.375 17.012 0 16.356 0C11.201 0 8.717 6.444 7.944 9.725C5.929 10.358 4.499 10.779 4.335 10.85C3.21 11.201 3.187 11.225 3.046 12.279C2.929 13.076 0 35.735 0 35.735C0 35.735 22.8 40 22.8 40C22.8 40 35.173 37.329 35.173 37.329C35.196 37.282 30.861 7.991 30.837 7.78C30.837 7.78 30.837 7.78 30.837 7.78ZM21.558 5.483C20.996 5.647 20.316 5.858 19.637 6.092C19.637 6.092 19.637 5.671 19.637 5.671C19.637 4.406 19.473 3.375 19.168 2.554C20.339 2.695 21.066 3.984 21.558 5.483C21.558 5.483 21.558 5.483 21.558 5.483C21.558 5.483 21.558 5.483 21.558 5.483ZM17.738 2.812C18.043 3.609 18.254 4.734 18.254 6.28C18.254 6.28 18.254 6.514 18.254 6.514C16.989 6.912 15.653 7.311 14.27 7.756C15.043 4.804 16.52 3.351 17.738 2.812C17.738 2.812 17.738 2.812 17.738 2.812C17.738 2.812 17.738 2.812 17.738 2.812ZM16.238 1.359C16.472 1.359 16.707 1.453 16.894 1.593C15.23 2.366 13.473 4.311 12.746 8.248C11.645 8.599 10.59 8.904 9.583 9.232C10.427 6.233 12.536 1.359 16.238 1.359C16.238 1.359 16.238 1.359 16.238 1.359Z" fill="#7CB342" transform="translate(6.379 4)" />
            <path d="M7.616 2.718C7.475 2.718 4.406 2.484 4.406 2.484C4.406 2.484 2.274 0.352 2.016 0.141C1.921 0.0469999 1.804 0 1.711 0C1.711 0 0 35.29 0 35.29C0 35.29 12.373 32.619 12.373 32.619C12.373 32.619 8.038 3.281 8.014 3.07C7.92 2.859 7.756 2.765 7.616 2.718C7.616 2.718 7.616 2.718 7.616 2.718Z" fill="#558B2F" transform="translate(29.249 8.71)" />
            <path d="M12.976 0.575701C12.976 0.575701 11.501 5.0247 11.501 5.0247C11.501 5.0247 10.164 4.3097 8.574 4.3097C6.2 4.3097 6.085 5.8077 6.085 6.1767C6.085 8.2047 11.386 8.9887 11.386 13.7597C11.386 17.5167 9.012 19.9367 5.808 19.9367C1.936 19.9367 0 17.5397 0 17.5397C0 17.5397 1.037 14.1287 1.037 14.1287C1.037 14.1287 3.065 15.8807 4.771 15.8807C5.9 15.8807 6.361 15.0047 6.361 14.3597C6.361 11.7087 2.028 11.5937 2.028 7.2147C2.028 3.5497 4.656 0.000701904 9.98 0.000701904C11.961 -0.0233002 12.976 0.575701 12.976 0.575701C12.976 0.575701 12.976 0.575701 12.976 0.575701Z" fill="#FFFFFF" transform="translate(11.816 18.017)" />
          </g>
        </svg>
      ),
    }
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-8 h-8 bg-slate-950 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
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
                    <Link href={link.href} className="text-xs hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Segment: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-medium pt-8 border-t border-slate-900">
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
