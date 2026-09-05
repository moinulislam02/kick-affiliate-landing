'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import TrustBar from '@/components/sections/TrustBar';
import MigrationCTA from '@/components/sections/MigrationCTA';
import FinalCTA from '@/components/sections/FinalCTA';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      <Header onBookDemo={openModal} />

      <main>
        {/* Contact Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/60">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Get In Touch
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.1]">
              We&rsquo;d Love to Hear From You
            </h1>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              Whether you need help choosing a plan, migrating existing creator data, or requesting enterprise features, our team is ready to assist.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/70">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            <ContactForm onBookDemo={openModal} />
          </div>
        </section>

        <TrustBar />

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
