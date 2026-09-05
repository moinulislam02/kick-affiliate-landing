'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import TrustBar from '@/components/sections/TrustBar';
import EnterpriseStats from '@/components/sections/EnterpriseStats';
import MigrationCTA from '@/components/sections/MigrationCTA';
import FinalCTA from '@/components/sections/FinalCTA';
import ComparisonTable from '@/components/compare/ComparisonTable';
import { ChevronRight, Scale } from 'lucide-react';

export default function CompetitorCompareClient({ competitorSlug }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Normalize slug to key: vs-goaffpro -> goaffpro
  const competitorKey = competitorSlug.replace('vs-', '').toLowerCase();

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />

      <main>
        {/* Breadcrumb & Navigation Bar */}
        <section className="pt-32 pb-8 md:pt-36 bg-slate-50 border-b border-slate-200/60">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/compare" className="hover:text-primary transition-colors">
                Compare
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold capitalize">
                {competitorSlug.replace('-', ' ')}
              </span>
            </div>
          </div>
        </section>

        {/* Comparison Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <ComparisonTable competitorKey={competitorKey} onBookDemo={openModal} />
          </div>
        </section>

        <TrustBar />

        {/* Enterprise Stats Section */}
        <EnterpriseStats onBookDemo={openModal} />

        {/* Final CTA */}
        <FinalCTA onBookDemo={openModal} />
      </main>

      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
