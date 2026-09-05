'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import TrustBar from '@/components/sections/TrustBar';
import MigrationCTA from '@/components/sections/MigrationCTA';
import FinalCTA from '@/components/sections/FinalCTA';
import { ArrowRight, CheckCircle2, Zap, Scale, Layers } from 'lucide-react';

export default function CompareHubClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const competitors = [
    {
      name: 'GoAffPro',
      slug: 'vs-goaffpro',
      description: 'Why fast-growing Shopify stores leave GoAffPro’s complex legacy interface for KickAffiliate’s modern, intuitive platform.',
      tag: 'Most Popular Switch',
    },
    {
      name: 'UpPromote',
      slug: 'vs-uppromote',
      description: 'How KickAffiliate offers transparent pricing and unmetered creator onboarding without locking essential features behind enterprise tiers.',
      tag: 'Best Value Alternative',
    },
    {
      name: 'Refersion',
      slug: 'vs-refersion',
      description: 'Enterprise dual-attribution tracking and automated payouts at a fraction of Refersion’s $119+/month baseline cost.',
      tag: 'Save up to 75%',
    },
    {
      name: 'Impact.com',
      slug: 'vs-impact',
      description: 'Built specifically for Shopify DTC brands without multi-thousand dollar enterprise contracts or revenue take rates.',
      tag: '0% Revenue Take Rate',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/60">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              <Scale className="w-3.5 h-3.5" />
              Platform Comparisons
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.1]">
              How KickAffiliate Compares to Other Shopify Apps
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              See why hundreds of high-growth Shopify merchants are migrating from legacy affiliate software to KickAffiliate.
            </p>
          </div>
        </section>

        <TrustBar />

        {/* Competitor Cards Grid */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/70">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitors.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {comp.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">Side-by-Side</span>
                    </div>

                    <h2 className="font-display font-bold text-2xl text-slate-950 group-hover:text-primary transition-colors">
                      KickAffiliate vs. {comp.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>

                  <Link
                    href={`/compare/${comp.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary transition-colors"
                  >
                    <span>Read Full Comparison</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Banner */}
        <MigrationCTA onBookDemo={openModal} />

        {/* Final CTA */}
        <FinalCTA onBookDemo={openModal} />
      </main>

      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
