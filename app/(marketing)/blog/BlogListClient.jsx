// app/(marketing)/blog/BlogListClient.jsx
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import { blogPosts as defaultBlogPosts, blogCategories as defaultBlogCategories } from '@/data/blogData';

function normalizePost(post) {
  if (!post) return null;
  const authorName = post.author?.name || post.authorName || 'KickAffiliate Editorial';
  const authorRole = post.author?.role || post.authorRole || 'Growth Strategy Team';
  const authorAvatar = post.author?.avatar || post.authorAvatar || '/blog/authors/marcus-chen.jpg';
  const authorBio = post.author?.bio || post.authorBio || 'Growth and attribution specialist at KickAffiliate.';

  let formattedDate = post.publishedAt;
  if (post.publishedAt && !isNaN(new Date(post.publishedAt).getTime())) {
    formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(post.publishedAt));
  }

  return {
    ...post,
    publishedAt: formattedDate || 'Recently',
    author: {
      name: authorName,
      role: authorRole,
      avatar: authorAvatar,
      bio: authorBio,
    },
  };
}

export default function BlogListClient({
  initialPosts = defaultBlogPosts,
  initialCategories = defaultBlogCategories,
}) {
  const [posts] = useState(() => (initialPosts || defaultBlogPosts).map(normalizePost).filter(Boolean));
  const [categories] = useState(() => initialCategories || defaultBlogCategories);
  const [selectedCategory, setSelectedCategory] = useState('All Perspectives');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Perspectives' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.subtitle && post.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.author?.name && post.author.name.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Determine featured post
  const featuredPost = useMemo(() => {
    return filteredPosts.find((p) => p.featured) || filteredPosts[0] || posts[0];
  }, [filteredPosts, posts]);

  // Remaining posts (excluding featured post when looking at all perspectives with no search)
  const regularPosts = useMemo(() => {
    if (selectedCategory === 'All Perspectives' && searchQuery.trim() === '' && featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, selectedCategory, searchQuery, featuredPost]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-body">
      {/* Global Header */}
      <Header onBookDemo={openModal} />

      <main className="pt-28 pb-20 md:pt-36 md:pb-32">
        {/* Editorial Masthead Header */}
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white pb-16 md:pb-20">
          <div className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-8">
              <Link href="/" className="hover:text-slate-950 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold">Blog &amp; Perspectives</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  KickAffiliate Journal
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[56px] text-slate-950 tracking-tight leading-[1.08]">
                  Writings on Shopify Affiliate Architecture &amp; Creator Economics
                </h1>
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl pt-1">
                  Analytical essays, technical frameworks, and unit economic blueprints for modern DTC brands scaling high-leverage ambassador programs.
                </p>
              </div>

              {/* Search input in hero */}
              <div className="lg:col-span-4 w-full">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search perspectives &amp; topics..."
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 uppercase font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category Navigation Bar (Minimalist Agency Underline Tabs) */}
            <div className="mt-12 pt-6 border-t border-slate-200/80 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-1">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-slate-950 text-white shadow-xs'
                          : 'bg-transparent text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-[1360px] w-full mx-auto px-6 md:px-12 pt-14 md:pt-16">
          {/* Show Featured Article only if looking at all posts without a search query */}
          {selectedCategory === 'All Perspectives' && searchQuery.trim() === '' && featuredPost && (
            <div className="mb-16 md:mb-20 pb-16 md:pb-20 border-b border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700 block mb-6">
                Featured Analysis
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Featured Image */}
                <div className="lg:col-span-7">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group block relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-[16/10]"
                  >
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>

                {/* Featured Copy */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-slate-950 tracking-tight leading-[1.18]">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {featuredPost.excerpt}
                  </p>

                  {/* Author Bio Snippet */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{featuredPost.author.name}</p>
                        <p className="text-[11px] text-slate-500">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-950 hover:text-primary transition-colors group"
                    >
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid Section Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950 tracking-tight">
                {searchQuery
                  ? `Search results for "${searchQuery}" (${regularPosts.length})`
                  : selectedCategory === 'All Perspectives'
                  ? 'All Recent Essays & Perspectives'
                  : `${selectedCategory} (${regularPosts.length})`}
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Showing {regularPosts.length} article{regularPosts.length === 1 ? '' : 's'}
            </span>
          </div>

          {/* Regular Articles Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col justify-between group border border-slate-200/90 rounded-2xl p-5 sm:p-6 bg-white hover:border-slate-400/80 hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/10] border border-slate-150"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span className="font-bold text-slate-900 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight leading-snug">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group-hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author and Date Footer */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-none">{post.author.name}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{post.publishedAt}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary inline-flex items-center gap-1 transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <p className="font-display font-bold text-lg text-slate-900">No matching perspectives found</p>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                No articles matched your filter criteria. Try clearing your search query or selecting &quot;All Perspectives&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Perspectives');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-slate-950 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Minimalist Agency Newsletter Box */}
          <div className="mt-20 md:mt-28 rounded-2xl border border-slate-200 bg-slate-50/80 p-8 sm:p-12 md:p-16">
            <div className="max-w-2xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-700">
                <Mail className="w-3.5 h-3.5" />
                The Weekly Commission Brief
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 tracking-tight">
                High-Signal Perspectives for Modern Shopify Operators
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                Delivered every Tuesday morning. In-depth analysis on creator attribution, return hold reconciliation, and affiliate unit economics. Zero promotional noise.
              </p>

              {newsletterSubscribed ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Thank you for subscribing. Look for our briefing in your inbox next Tuesday.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="founder@yourbrand.com"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all select-none shadow-xs"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-[11px] text-slate-400">Unsubscribe anytime with 1-click. We respect your privacy.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Book a Demo Interactive Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
