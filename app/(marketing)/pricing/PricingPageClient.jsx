'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import TrustBar from '@/components/sections/TrustBar';
import MigrationCTA from '@/components/sections/MigrationCTA';
import FinalCTA from '@/components/sections/FinalCTA';
import SectionDivider from '@/components/sections/SectionDivider';
import PricingCards from '@/components/pricing/PricingCards';
import CreatorRecruitmentSection from '@/components/pricing/CreatorRecruitmentSection';
import PricingMatrix from '@/components/pricing/PricingMatrix';
import PricingFAQ from '@/components/pricing/PricingFAQ';

export default function PricingPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />

      <main>
        {/* Pricing Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/60">
          {/* Subtle ambient light blurs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 space-y-16">
            {/* Title Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.1]">
                Simple, transparent pricing
              </h1>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Choose the plan that fits your business scale. Save 20% with yearly billing.
              </p>
            </div>

            {/* Pricing Cards */}
            <PricingCards onBookDemo={openModal} />
          </div>
        </section>

        {/* Trust Badges Bar */}
        <TrustBar />

        {/* Creator Registration & Onboarding Section (Dark Section) */}
        <section className="py-20 md:py-28 bg-slate-950 border-y border-slate-900">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <CreatorRecruitmentSection onBookDemo={openModal} />
          </div>
        </section>

        {/* Detailed Feature Comparison Matrix Section (Light Surface) */}
        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <PricingMatrix />
          </div>
        </section>

        {/* Pricing FAQ Section */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/70">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <PricingFAQ />
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
