'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import LegalLayout from '@/components/legal/LegalLayout';
import PrivacyPolicyContent, { privacySections } from '@/components/legal/PrivacyPolicyContent';

export default function PrivacyPolicyPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />
      
      <LegalLayout
        title="Privacy Policy"
        description="This Privacy Policy describes how Kick Affiliate collects, uses, processes, stores, and protects personal information for merchants, affiliates, and store customers in compliance with GDPR, CCPA, and Shopify requirements."
        lastUpdated="September 3, 2026"
        effectiveDate="September 3, 2026"
        activeDoc="privacy"
        sections={privacySections}
      >
        <PrivacyPolicyContent />
      </LegalLayout>

      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
