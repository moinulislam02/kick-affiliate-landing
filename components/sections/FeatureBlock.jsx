'use client';

import React from 'react';
import { Link2, Sliders, CheckSquare, Palette } from 'lucide-react';
import Section from '../primitives/Section';
import Eyebrow from '../primitives/Eyebrow';
import FadeInOnScroll from '../primitives/FadeInOnScroll';

export default function FeatureBlock() {
  const subFeatures = [
    {
      icon: <Link2 className="w-6 h-6 text-primary" />,
      title: 'Track Every Creator Sale',
      description: 'See clicks, orders, revenue, conversion rates, and commissions for every creator from one dashboard.',
    },
    {
      icon: <Sliders className="w-6 h-6 text-primary" />,
      title: 'Control Every Commission',
      description: 'Set custom commission rates by program, product, or individual creator without complicated spreadsheets.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-primary" />,
      title: 'Protect Before You Pay',
      description: 'Reserve eligible commissions until the order is delivered and your protection period is complete.',
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: 'Catch Suspicious Activity',
      description: 'Identify potentially fraudulent orders, bot activity, and coupon abuse before unnecessary commissions are paid.',
    },
  ];

  return (
    <div id="features" className="bg-white">
      <Section>
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Eyebrow>LAUNCH</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Scaffold Your Campaign in Minutes
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Everything you need to launch a high-performing referral marketing channel tailored entirely to your brand guidelines.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {subFeatures.map((feat, index) => (
            <FadeInOnScroll
              key={index}
              direction="up"
              delay={index * 0.1} // Stagger delay per card
              duration={0.6}
              className="flex flex-col p-6 bg-slate-50 border border-slate-200/50 rounded-2xl hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-sm group-hover:border-primary/30 transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="font-display font-bold text-slate-800 text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                {feat.description}
              </p>
            </FadeInOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
}
