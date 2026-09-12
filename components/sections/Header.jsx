'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Rocket,
  Share2,
  ShoppingBag,
  BarChart3,
  Megaphone,
  Wallet,
  Settings,
  Users,
  Star,
  ArrowLeftRight,
  Handshake,
  Shirt,
  Heart,
  Home,
  Trophy,
  Zap,
  Link2,
  Percent,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Globe,
  Activity,
  Coffee,
} from 'lucide-react';
import Button from '../primitives/Button';

export default function Header({ onBookDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMegaOpen, setIsMobileMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuFeatures = [
    { title: 'Dual Link & Code Tracking', icon: <Link2 className="w-4 h-4 text-blue-600" />, href: '/features/dual-attribution' },
    { title: 'Tiered Commission Engine', icon: <Percent className="w-4 h-4 text-blue-600" />, href: '/features/commission-engine' },
    { title: 'White-Label Creator Portal', icon: <LayoutDashboard className="w-4 h-4 text-blue-600" />, href: '/features/creator-portal' },
    { title: 'Refunds & Commission Tracking', icon: <Wallet className="w-4 h-4 text-blue-600" />, href: '/features/payout-reconciliation' },
    { title: 'Fraud Guard & Security', icon: <ShieldCheck className="w-4 h-4 text-blue-600" />, href: '/features/anti-fraud' },
  ];

  const megaMenuUseCases = [
    { title: 'Influencer & Creator Programs', icon: <Sparkles className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Customer Referral Program', icon: <ArrowLeftRight className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Affiliate Publisher Networks', icon: <Globe className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Brand Ambassador Clubs', icon: <Trophy className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'B2B & Agency Partnerships', icon: <Handshake className="w-4 h-4 text-blue-600" />, href: '/features' },
  ];

  const megaMenuIndustries = [
    { title: 'Fashion & Apparel', icon: <Shirt className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Beauty & Cosmetics', icon: <Heart className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Health, Fitness & Wellness', icon: <Activity className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Home & Consumer Goods', icon: <Home className="w-4 h-4 text-blue-600" />, href: '/features' },
    { title: 'Food, Beverage & DTC', icon: <Coffee className="w-4 h-4 text-blue-600" />, href: '/features' },
  ];

  const megaMenuData = [
    {
      title: 'By Feature',
      icon: <Rocket className="w-3.5 h-3.5 text-blue-600" />,
      items: megaMenuFeatures,
    },
    {
      title: 'By Use Case',
      icon: <Share2 className="w-3.5 h-3.5 text-blue-600" />,
      items: megaMenuUseCases,
    },
    {
      title: 'By Industry',
      icon: <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />,
      items: megaMenuIndustries,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200/60 py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Full-width container with edge padding instead of constrained max-width container */}
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Block: Logo + Navigation Links */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center select-none group">
              <img
                src="/kick-logo-light.png"
                alt="Kick Affiliate"
                className="h-8 md:h-8.5 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">

              <Link href="/features" className="font-medium text-slate-850 hover:text-slate-950 text-[13px] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="font-medium text-slate-850 hover:text-slate-950 text-[13px] transition-colors">
                Pricing
              </Link>
              <Link href="/compare" className="font-medium text-slate-850 hover:text-slate-950 text-[13px] transition-colors">
                Compare
              </Link>
              <Link href="/blog" className="font-medium text-slate-850 hover:text-slate-950 text-[13px] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="font-medium text-slate-850 hover:text-slate-950 text-[13px] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Block: Call to Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookDemo}
              className="bg-white border border-slate-300 text-slate-950 font-bold uppercase text-[10px] tracking-wider rounded-full px-5 py-2 hover:bg-slate-50 hover:border-slate-400 transition-all duration-205 select-none shadow-xs"
            >
              Connect
            </button>
            <a
              href={process.env.NEXT_PUBLIC_SHOPIFY_APP_STORE_URL || "https://apps.shopify.com/kick-affiliate"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-bold uppercase text-[10px] tracking-wider rounded-full px-5 py-2 border border-pink-500/80 hover:bg-slate-900 shadow-xs transition-all duration-205 select-none inline-flex items-center justify-center cursor-pointer"
            >
              Start for free
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-slate-650 hover:text-slate-950 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-5.5 h-5.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900 z-50 md:hidden"
            />

            {/* Drawer Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white shadow-xl border-l border-slate-200 z-50 md:hidden p-5 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                    <img
                      src="/kick-logo-light.png"
                      alt="Kick Affiliate"
                      className="h-7 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-slate-700 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Nav Links */}
                <nav className="flex flex-col gap-3.5">
                  {/* Mega Menu Accordion */}
                  <div className="border-b border-slate-100 pb-3">
                    <button
                      onClick={() => setIsMobileMegaOpen(!isMobileMegaOpen)}
                      className="flex items-center justify-between w-full font-bold text-slate-800 text-sm py-1"
                    >
                      Solutions
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMobileMegaOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isMobileMegaOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3 pt-2 space-y-3"
                        >
                          {megaMenuData.map((col, idx) => (
                            <div key={idx} className="space-y-1.5">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                {col.title}
                              </span>
                              <ul className="space-y-1 pl-1">
                                {col.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      href={item.href || '/features'}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="text-xs text-slate-500 hover:text-primary block py-1"
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/features"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 block"
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 block"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/compare"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 block"
                  >
                    Compare Apps
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 block"
                  >
                    Blog &amp; Insights
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 block"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="flex flex-col gap-2.5 border-t border-slate-100 pt-5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookDemo();
                  }}
                  className="font-bold text-xs text-slate-650 hover:text-slate-950 text-center py-2.5 border border-slate-200 rounded-lg bg-slate-50"
                >
                  Connect
                </button>
                <a
                  href={process.env.NEXT_PUBLIC_SHOPIFY_APP_STORE_URL || "https://apps.shopify.com/kick-affiliate"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full h-10 text-xs rounded-lg bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary-hover transition flex items-center justify-center cursor-pointer"
                >
                  Start for free
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
