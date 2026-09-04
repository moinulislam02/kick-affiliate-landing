'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import Button from '../primitives/Button';

export default function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    monthlyRevenue: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid';
    }
    
    if (!formData.storeUrl.trim()) {
      tempErrors.storeUrl = 'Shopify store URL is required';
    }
    
    if (!formData.monthlyRevenue) {
      tempErrors.monthlyRevenue = 'Please select a monthly revenue bracket';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) return;

    setLoading(true);

    try {
      /*
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      */

      // Simulate a brief delay for UI feedback
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSuccess(true);
      setFormData({ name: '', email: '', storeUrl: '', monthlyRevenue: '' });
    } catch (err) {
      setApiError(err.message || 'Failed to submit form. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    // Reset states when closing
    setSuccess(false);
    setApiError('');
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-8 max-w-md w-full relative pointer-events-auto overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {success ? (
                  /* Success Content state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for booking a demo. One of our growth advisors will contact you shortly at your registered email address to set up your call.
                    </p>
                    <div className="pt-4">
                      <Button variant="secondary" onClick={handleClose} className="px-8">
                        Dismiss
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  /* Form Content state */
                  <motion.div key="form" className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                        Book a Live Demo
                      </h3>
                      <p className="text-xs text-muted">
                        See how KickAffiliate integrates with your store in real-time.
                      </p>
                    </div>

                    {apiError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-xl text-center">
                        {apiError}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Elena Rostova"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                            errors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-primary'
                          }`}
                        />
                        {errors.name && <span className="text-[11px] text-red-500 font-medium">{errors.name}</span>}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                          Business Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="elena@glowlab.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                            errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-primary'
                          }`}
                        />
                        {errors.email && <span className="text-[11px] text-red-500 font-medium">{errors.email}</span>}
                      </div>

                      {/* Store URL input */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                          Shopify Store Website
                        </label>
                        <input
                          type="text"
                          name="storeUrl"
                          value={formData.storeUrl}
                          onChange={handleChange}
                          placeholder="glow-lab.myshopify.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-slate-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                            errors.storeUrl ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-primary'
                          }`}
                        />
                        {errors.storeUrl && <span className="text-[11px] text-red-500 font-medium">{errors.storeUrl}</span>}
                      </div>

                      {/* Monthly Revenue select */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                          Monthly Store Revenue
                        </label>
                        <select
                          name="monthlyRevenue"
                          value={formData.monthlyRevenue}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-slate-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 ${
                            errors.monthlyRevenue ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-primary'
                          }`}
                        >
                          <option value="">Select range...</option>
                          <option value="under_50k">Under $50,000</option>
                          <option value="50k_100k">$50,000 - $100,000</option>
                          <option value="over_100k">Over $100,000</option>
                        </select>
                        {errors.monthlyRevenue && (
                          <span className="text-[11px] text-red-500 font-medium">{errors.monthlyRevenue}</span>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                          </>
                        ) : (
                          'Complete Booking'
                        )}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
