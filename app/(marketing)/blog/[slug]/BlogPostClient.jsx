// app/(marketing)/blog/[slug]/BlogPostClient.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Share2,
  Check,
  Copy,
  Sparkles,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BookDemoModal from '@/components/sections/BookDemoModal';
import Button from '@/components/primitives/Button';

// Clean inline social icons
function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function BlogPostClient({ post, relatedPosts = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Normalize author data across CMS and static data formats
  const author = post.author || {
    name: post.authorName || 'KickAffiliate Editorial Team',
    role: post.authorRole || 'E-Commerce Growth Strategist',
    avatar: post.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: post.authorBio || 'Analyzing affiliate attribution, creator revenue models, and merchant margin protection in high-growth Shopify stores.',
  };

  // Normalize key takeaways
  const keyTakeaways = Array.isArray(post.keyTakeaways)
    ? post.keyTakeaways.filter(Boolean)
    : [];

  // Handle active section highlighting on scroll for sections
  useEffect(() => {
    const handleScroll = () => {
      const headings = post.sections?.map((s) => document.getElementById(s.id)).filter(Boolean);
      if (!headings || headings.length === 0) return;

      const scrollPosition = window.scrollY + 180;
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveSection(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.sections]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`${post.title} via @KickAffiliate`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-body">
      {/* Global Header */}
      <Header onBookDemo={openModal} />

      <main className="pt-28 pb-20 md:pt-36 md:pb-32">
        {/* Breadcrumb & Article Header */}
        <article className="max-w-[1360px] w-full mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-8">
            <Link href="/" className="hover:text-slate-950 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-slate-950 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-700 font-bold">{post.category || 'Strategy'}</span>
          </div>

          {/* Article Header Container (Clean Editorial Agency Style) */}
          <div className="w-full space-y-6 pb-10">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                {post.category || 'Article'}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.publishedAt || 'Recent'}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime || '5 min read'}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[50px] text-slate-950 tracking-tight leading-[1.12] max-w-5xl">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-4xl">
                {post.subtitle}
              </p>
            )}

            {/* Author & Share Bar */}
            <div className="pt-6 border-t border-slate-200 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <p className="font-bold text-sm text-slate-950">{author.name}</p>
                  <p className="text-xs text-slate-500">{author.role}</p>
                </div>
              </div>

              {/* Social Share Group */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
                  Share
                </span>
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Link'}</span>
                </button>
                <button
                  onClick={handleShareTwitter}
                  aria-label="Share on X"
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition text-xs font-semibold cursor-pointer"
                >
                  <TwitterIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  aria-label="Share on LinkedIn"
                  className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition text-xs font-semibold cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Featured Image */}
          {post.image && (
            <div className="my-8 md:my-12">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-[16/9] max-h-[560px] w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {post.imageCaption && (
                <p className="text-xs text-slate-500 italic mt-3 text-center sm:text-left font-mono">
                  {post.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Article Main Layout (Content Column + Sticky Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
            {/* Sticky Sidebar (Table of Contents & Quick Author Info) */}
            <aside className="hidden lg:block lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8">
                {/* Table of Contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-700">
                      <BookOpen className="w-3.5 h-3.5 text-slate-900" />
                      Table of Contents
                    </div>
                    <nav className="space-y-2 text-xs">
                      {post.tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block py-1.5 transition-colors leading-snug font-medium ${
                            activeSection === item.id
                              ? 'text-primary font-bold pl-2 border-l-2 border-primary'
                              : 'text-slate-600 hover:text-slate-950'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Author Card in Sidebar */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-slate-950">{author.name}</h4>
                      <p className="text-[11px] text-slate-500">{author.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {author.bio}
                  </p>
                </div>

                {/* Return to Blog Button */}
                <div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Article Body Column */}
            <div className="lg:col-span-8 space-y-12 max-w-3xl">
              {/* Key Takeaways Box (Agency Executive Brief) */}
              {keyTakeaways.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Executive Summary &amp; Core Takeaways
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rich CMS HTML Content */}
              {post.content ? (
                <div
                  className="blog-content-body"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                /* Structured Article Sections Fallback */
                <div className="space-y-12 text-slate-800 leading-relaxed text-sm sm:text-base">
                  {post.sections?.map((sec) => (
                    <section key={sec.id} id={sec.id} className="space-y-5 pt-2 scroll-mt-32">
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight leading-snug">
                        {sec.heading}
                      </h2>

                      {sec.paragraphs?.map((pText, pIdx) => (
                        <p key={pIdx} className="text-slate-700 font-normal leading-[1.8]">
                          {pText}
                        </p>
                      ))}

                      {/* Pull Quote */}
                      {sec.quote && (
                        <blockquote className="my-8 border-l-2 border-slate-900 pl-6 py-1 space-y-2">
                          <p className="font-display font-bold text-lg sm:text-xl text-slate-950 italic leading-snug">
                            &ldquo;{sec.quote.text}&rdquo;
                          </p>
                          {sec.quote.attribution && (
                            <cite className="block text-xs uppercase tracking-wider text-slate-500 font-medium not-italic">
                              — {sec.quote.attribution}
                            </cite>
                          )}
                        </blockquote>
                      )}

                      {/* Callout Box */}
                      {sec.callout && (
                        <div className="my-6 p-5 sm:p-6 rounded-xl border border-slate-200 bg-slate-50/80 space-y-2">
                          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            {sec.callout.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {sec.callout.text}
                          </p>
                        </div>
                      )}

                      {/* Structured Comparison Table */}
                      {sec.table && (
                        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                          <table className="w-full text-left text-xs sm:text-sm border-collapse">
                            <thead>
                              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-bold">
                                {sec.table.headers.map((header, hIdx) => (
                                  <th key={hIdx} className="py-3 px-4 uppercase tracking-wider text-[11px]">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                              {sec.table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`py-3 px-4 text-slate-700 ${
                                        cIdx === 0 ? 'font-semibold text-slate-900' : ''
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              )}

              {/* Author Bio Segment at bottom of article */}
              <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-slate-50">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Written By
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-950">{author.name}</h3>
                  <p className="text-xs text-slate-500">{author.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{author.bio}</p>
                </div>
              </div>

              {/* Share Bar (Bottom of article) */}
              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
                </Link>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">Share</span>
                  <button
                    onClick={handleCopyLink}
                    aria-label="Copy link"
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleShareTwitter}
                    aria-label="Share on X"
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition text-xs font-semibold cursor-pointer"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleShareLinkedIn}
                    aria-label="Share on LinkedIn"
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition text-xs font-semibold cursor-pointer"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-[1360px] w-full mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700 block mb-1">
                  Further Reading
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                  Related Perspectives &amp; Essays
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-950 hover:text-primary transition-colors"
              >
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.slug}
                  className="flex flex-col justify-between group border border-slate-200 rounded-2xl p-5 bg-white hover:border-slate-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-3.5">
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="block relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/10] border border-slate-150"
                    >
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>

                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-bold text-slate-900 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        {rPost.category}
                      </span>
                      <span>{rPost.readTime}</span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-950 tracking-tight leading-snug">
                      <Link href={`/blog/${rPost.slug}`} className="group-hover:text-primary transition-colors">
                        {rPost.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">{rPost.publishedAt}</span>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="font-bold uppercase text-[11px] tracking-wider text-slate-900 group-hover:text-primary inline-flex items-center gap-1 transition-colors"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Pre-Footer Conversion Box (Clean Agency Style) */}
        <section className="max-w-[1360px] w-full mx-auto px-6 md:px-12 mt-20 md:mt-24">
          <div className="rounded-3xl border border-slate-900 bg-slate-950 text-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Shopify Native Affiliate Engine
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Protect Your Margins. Scale Your Ambassador Revenue.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
              Eliminate self-referral leakage, automate return hold reconciliation, and empower your creators with a white-label self-serve portal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                onClick={openModal}
                className="h-12 px-8 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20"
              >
                Start 14-Day Free Trial <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <button
                onClick={openModal}
                className="h-12 px-7 rounded-full border border-slate-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-900 hover:border-slate-500 transition-all"
              >
                Connect
              </button>
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
