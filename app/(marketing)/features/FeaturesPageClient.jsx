'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import TrustBar from '@/components/sections/TrustBar';
import EnterpriseStats from '@/components/sections/EnterpriseStats';
import MigrationCTA from '@/components/sections/MigrationCTA';
import FinalCTA from '@/components/sections/FinalCTA';
import FeaturePillars from '@/components/features/FeaturePillars';
import TechnicalSpecs from '@/components/features/TechnicalSpecs';

export default function FeaturesPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />

      <main>
        {/* Features Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/60">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Powerful Platform Features
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.1]">
              Everything You Need to Scale Your Creator Network
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              From zero-loss tracking and automated commission payouts to white-label creator portals. Built natively for high-growth Shopify merchants.
            </p>
          </div>
        </section>

        {/* Trust Badges Bar */}
        <TrustBar />

        {/* Feature Pillars Deep-Dive Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <FeaturePillars onBookDemo={openModal} />
          </div>
        </section>

        {/* Technical Architecture Specs Section (Dark Section) */}
        <section className="py-20 md:py-28 bg-slate-950 border-y border-slate-900">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <TechnicalSpecs />
          </div>
        </section>

        {/* Enterprise Stats Section (Reused from homepage) */}
        <EnterpriseStats onBookDemo={openModal} />

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
