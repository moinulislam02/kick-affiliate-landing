// components/features/SingleFeatureTemplate.jsx
'use client';

import React, { useState } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import BookDemoModal from '../sections/BookDemoModal';
import TrustBar from '../sections/TrustBar';
import FinalCTA from '../sections/FinalCTA';
import FeatureHero from './FeatureHero';
import FeatureJourneyStages from './FeatureJourneyStages';
import FeatureMilestonesGrid from './FeatureMilestonesGrid';
import FeatureBenefitsGrid from './FeatureBenefitsGrid';
import FeatureDeepDiveTour from './FeatureDeepDiveTour';
import FeaturePricingSummary from './FeaturePricingSummary';
import FeatureTestimonials from './FeatureTestimonials';
import FeatureFAQ from './FeatureFAQ';

export default function SingleFeatureTemplate({ feature }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Global Header */}
      <Header onBookDemo={openModal} />

      <main>
        {/* 1. Feature Hero Section */}
        <FeatureHero feature={feature} onBookDemo={openModal} />

        {/* 2. Merchant Trust Bar */}
        <TrustBar />

        {/* 3. Customer Journey 4-Stage Connected Cards */}
        <FeatureJourneyStages feature={feature} />

        {/* 4. Milestones 2x2 Stats Grid & Scale Narrative */}
        <FeatureMilestonesGrid feature={feature} onBookDemo={openModal} />

        {/* 5. Key Advantages 4-Card Grid */}
        <FeatureBenefitsGrid feature={feature} />

        {/* 6. Alternating Core Feature Tour (Zig-Zag Deep Dives) */}
        <FeatureDeepDiveTour feature={feature} onBookDemo={openModal} />

        {/* 7. Compact 4-Tier Plan Grid */}
        <FeaturePricingSummary onBookDemo={openModal} />

        {/* 8. Customer Testimonials */}
        <FeatureTestimonials />

        {/* 9. Interactive FAQ Accordion */}
        <FeatureFAQ feature={feature} />

        {/* 10. Pre-Footer High-Impact CTA */}
        <FinalCTA onBookDemo={openModal} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Book a Demo Interactive Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
