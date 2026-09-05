'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import LegalLayout from '@/components/legal/LegalLayout';
import TermsContent, { termsSections } from '@/components/legal/TermsContent';

export default function TermsPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />
      
      <LegalLayout
        title="Terms and Conditions"
        description="These Terms and Conditions govern your access to and use of the Kick Affiliate platform, services, website, and Creator Portal. Please review them thoroughly."
        lastUpdated="September 3, 2026"
        effectiveDate="September 3, 2026"
        activeDoc="terms"
        sections={termsSections}
      >
        <TermsContent />
      </LegalLayout>

      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
