'use client';

import React, { useState } from 'react';
import {
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  Shield,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';

export default function ContactForm({ onBookDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopDomain: '',
    revenueTier: '$10k - $50k / mo',
    topic: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
      
      {/* Left Column: Direct Info & Booking Card */}
      <div className="lg:col-span-5 space-y-6">
        
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            <MessageSquare className="w-3.5 h-3.5" />
            We&rsquo;re Here to Help
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight leading-snug">
            Talk with our growth &amp; technical specialists
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Have questions about migrating from another platform, custom commission logic, or enterprise setup? Reach out directly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-900">Email Support &amp; Sales</h4>
              <a
                href="mailto:support@techprob.org"
                className="text-xs font-semibold text-primary hover:underline"
              >
                support@techprob.org
              </a>
              <p className="text-[11px] text-slate-400 mt-0.5">Average reply time under 2 hours</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <Clock className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-900">Support Hours</h4>
              <p className="text-xs text-slate-600">Monday – Friday: 9:00 AM – 8:00 PM EST</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">● 24/7 Critical Webhook Monitoring</p>
            </div>
          </div>
        </div>

        {/* Live Demo Trigger Card (Dark Theme Contrast) */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-md">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-primary" />
            1-on-1 Personalized Walkthrough
          </div>
          <h3 className="font-display font-bold text-lg text-white leading-snug">
            Prefer a live interactive demonstration?
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Schedule a 15-minute video call with a Shopify affiliate specialist to see how KickAffiliate works with your store.
          </p>
          <button
            onClick={onBookDemo}
            className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Book a 15-Min Live Demo</span>
          </button>
        </div>

      </div>

      {/* Right Column: Contact & Inquiry Form */}
      <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xs">
        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-950">
              Message Received!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. A specialist from our team will review your store inquiry and get back to you at <strong>{formData.email}</strong> within 2 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  shopDomain: '',
                  revenueTier: '$10k - $50k / mo',
                  topic: 'General Inquiry',
                  message: '',
                });
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-display font-bold text-lg text-slate-950">
                Send us a message
              </h3>
              <p className="text-xs text-slate-500">
                Fill out the form below and we will get back to you promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@yourbrand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Shopify Store Domain */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Shopify Store URL
                </label>
                <input
                  type="text"
                  placeholder="yourstore.myshopify.com"
                  value={formData.shopDomain}
                  onChange={(e) => setFormData({ ...formData, shopDomain: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                />
              </div>

              {/* Monthly Revenue */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Monthly Store Revenue
                </label>
                <select
                  value={formData.revenueTier}
                  onChange={(e) => setFormData({ ...formData, revenueTier: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                >
                  <option>&lt; $10k / mo (Launching)</option>
                  <option>$10k - $50k / mo</option>
                  <option>$50k - $250k / mo</option>
                  <option>$250k+ / mo (Enterprise/Plus)</option>
                </select>
              </div>
            </div>

            {/* Inquiry Topic */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Topic of Interest
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              >
                <option>General Product Inquiry</option>
                <option>Free Migration from GoAffPro / UpPromote / Refersion</option>
                <option>Custom Enterprise / Shopify Plus Plan</option>
                <option>Technical Integration &amp; Webhooks</option>
                <option>Partnership or Agency Program</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                How can we help your store? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your brand, creator program goals, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-slate-400 text-center">
              We respect your data privacy. Your information will never be shared with third parties.
            </p>
          </form>
        )}
      </div>

    </div>
  );
}
