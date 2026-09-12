// app/(marketing)/HomePageClient.jsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import LogoMarquee from '@/components/sections/LogoMarquee';
import SectionDivider from '@/components/sections/SectionDivider';
import FeatureBlock from '@/components/sections/FeatureBlock';
import ManagementMethods from '@/components/sections/ManagementMethods';
import PayoutMethods from '@/components/sections/PayoutMethods';
import TabbedShowcase from '@/components/sections/TabbedShowcase';
import ProductDashboard from '@/components/sections/ProductDashboard';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import EnterpriseStats from '@/components/sections/EnterpriseStats';
import MigrationCTA from '@/components/sections/MigrationCTA';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';

export default function HomePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />
      <main>
        <Hero onBookDemo={openModal} />
        <LogoMarquee />
        <SectionDivider />
        <FeatureBlock />
        <ManagementMethods />
        <PayoutMethods />
        <TabbedShowcase />
        <ProductDashboard />
        <ProcessTimeline />
        <EnterpriseStats onBookDemo={openModal} />
        <MigrationCTA onBookDemo={openModal} />
        <FinalCTA onBookDemo={openModal} />
      </main>
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
