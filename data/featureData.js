// data/featureData.js

export const featureData = {
  'dual-attribution': {
    slug: 'dual-attribution',
    badge: 'Attribution & Tracking',
    breadcrumb: 'Attribution & Tracking',
    title: 'Zero-Loss Dual Attribution Platform for All Acquisition Channels',
    subtitle:
      'Capture every referral sale with unshakeable dual tracking. KickAffiliate pairs custom referral links with automatic Shopify discount codes, guaranteeing 100% accurate conversion credit.',
    heroStats: [
      { label: 'Attribution Accuracy', value: '99.98%' },
      { label: 'Cookie Lifetime', value: '1-365 Days' },
      { label: 'Shopify Sync Latency', value: '< 150ms' },
    ],
    journeyTitle: 'All-in-one attribution platform tackles every touchpoint',
    journeySubtitle: 'From first creator link click to checkout coupon application and recurring attribution.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Discover & Link Creation',
        desc: 'Creators generate custom deep links and auto-provisioned Shopify discount codes directly inside their portal.',
        points: ['Instant unique discount codes', 'Deep link to any product page', 'UTM parameter preservation'],
      },
      {
        stage: 'Stage 2',
        title: 'Zero-Loss Click Attribution',
        desc: 'Browser cookie and localStorage token capture shopper visits with fallback IP and browser fingerprinting.',
        points: ['Dual cookie & localStorage persistence', 'Cross-session cookie retention', 'Zero script theme slowdown'],
      },
      {
        stage: 'Stage 3',
        title: 'Checkout & Cart Sync',
        desc: 'Attribution attaches to Shopify cart note_attributes and order line items automatically at checkout.',
        points: ['Shopify Plus checkout extensibility', 'Discount code conflict resolution', 'Headless & Liquid compatibility'],
      },
      {
        stage: 'Stage 4',
        title: 'Instant Event Reconciliation',
        desc: 'Live Shopify webhooks instantly credit the right creator with dynamic commission calculation in real-time.',
        points: ['Sub-second webhook ingestion', 'Multi-currency auto conversion', 'Transparent earnings ledger'],
      },
    ],
    milestones: {
      tag: 'Scale & Reliability',
      title: 'See how high-growth Shopify brands use KickAffiliate to scale revenue',
      description:
        'Say goodbye to broken affiliate links and missed commissions. Our dual-attribution infrastructure handles millions of monthly clicks with zero downtime.',
      stats: [
        { value: '$18.4M+', label: 'Affiliate Gross Revenue Driven' },
        { value: '250,000+', label: 'Active Creators & Affiliates' },
        { value: '11.2x', label: 'Average Merchant ROI' },
        { value: '99.98%', label: 'Tracking & Webhook Reliability' },
      ],
    },
    benefits: [
      {
        icon: 'Link2',
        title: 'Zero Tracking Leakage',
        desc: 'Whether shoppers click a bio link, swipe up, or type a discount code at checkout, the sale is 100% reliably attributed.',
      },
      {
        icon: 'Tag',
        title: 'Automated Shopify Coupon Sync',
        desc: 'Automatically generate and sync unique discount codes directly to your Shopify Admin via GraphQL price rules.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Anti-Self-Referral Detection',
        desc: 'Prevents creators from earning kickbacks on their own personal purchases by matching emails, shipping addresses, and IPs.',
      },
      {
        icon: 'Zap',
        title: 'Lightning-Fast Script (<12kB)',
        desc: 'Optimized tracking snippet loads asynchronously without degrading your Shopify Core Web Vitals or page load speed.',
      },
    ],
    deepDives: [
      {
        badge: 'Link + Code Harmony',
        title: 'Dual-Layer Tracking: Referral Links & Coupon Codes',
        description:
          'Shoppers frequently switch devices or forget to click links. KickAffiliate bridges the gap by letting creators share both custom tracking URLs (?ref=handle) and personalized Shopify promo codes. If both are used, discount code priority ensures clean attribution.',
        bullets: [
          'Automatic discount code creation synced to Shopify price rules',
          'Persistent 30, 60, or 90-day attribution windows',
          'Direct integration with Shopify Checkout Extensibility',
        ],
        mockupType: 'attribution-stream',
      },
      {
        badge: 'Smart Token Persistence',
        title: 'Cross-Device & Cross-Browser Token Retention',
        description:
          'Utilizes first-party cookies and localStorage tokens to maintain attribution across sessions, even when modern browsers restrict third-party cookies or purge caches.',
        bullets: [
          'First-party storage bypasses third-party cookie restrictions',
          'Configurable cookie lifespan from 1 day to 365 days',
          'Cart note_attribute tagging for uncrackable audit trails',
        ],
        mockupType: 'token-ledger',
      },
      {
        badge: 'Webhook Engine',
        title: 'Real-Time Sub-Second Order Reconciliation',
        description:
          'KickAffiliate connects directly to Shopify Orders API via secure HMAC-verified webhooks. As soon as an order is paid, commissions calculate dynamically without manual data imports.',
        bullets: [
          'Real-time order creation and fulfillment tracking',
          'Multi-currency exchange rate calculation',
          'Automatic adjustment when order subtotals change',
        ],
        mockupType: 'webhook-telemetry',
      },
      {
        badge: 'Security & Integrity',
        title: 'Enterprise Fraud Guard & Click Deduplication',
        description:
          'Protect your marketing budget from click farms and unauthorized kickbacks. Anti-fraud filters block bot traffic and flag suspicious spike anomalies before payouts are issued.',
        bullets: [
          '1-minute IP click deduplication to block automated bots',
          'Automatic buyer-creator email and address cross-check',
          'Cryptographic HMAC SHA-256 webhook validation',
        ],
        mockupType: 'fraud-telemetry',
      },
    ],
    faqs: [
      {
        q: 'How does dual attribution work if a customer uses both a link and a discount code?',
        a: 'KickAffiliate prioritizes the creator whose discount code was entered at checkout. If no code was entered, the referral link cookie determines the attribution.',
      },
      {
        q: 'Does KickAffiliate tracking slow down my Shopify store?',
        a: 'Not at all. The tracking snippet is ultra-lightweight (<12kB) and loads asynchronously without blocking DOM rendering or affecting Core Web Vitals (LCP/FID).',
      },
      {
        q: 'What happens if a customer returns an order or requests a refund?',
        a: 'KickAffiliate automatically listens to Shopify refund webhooks and deducts the corresponding commission from the creator’s pending balance during your store return window.',
      },
      {
        q: 'Does this work with Shopify Plus and headless storefronts?',
        a: 'Yes. KickAffiliate is fully compatible with standard Shopify themes, Shopify Plus Checkout Extensibility, and custom headless Hydrogen/Next.js storefronts.',
      },
    ],
  },

  'commission-engine': {
    slug: 'commission-engine',
    badge: 'Commission Flexibility',
    breadcrumb: 'Commission Engine',
    title: 'Dynamic Multi-Tier Commission Engine for Motivating Top Creators',
    subtitle:
      'Reward top-performing influencers and affiliates with customized commission structures, milestone revenue bonuses, and automated tier promotions.',
    heroStats: [
      { label: 'Commission Tiers', value: 'Unlimited' },
      { label: 'Rule Customization', value: 'Product & SKU' },
      { label: 'Auto Escalations', value: 'Revenue-Based' },
    ],
    journeyTitle: 'Automate commission scaling across creator lifecycles',
    journeySubtitle: 'Motivate high performers with clear milestones and product-specific incentives.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Base Tier Enrollment',
        desc: 'New creators automatically start at your default commission rate (e.g. 10% or $15 fixed bounty).',
        points: ['Instant onboarding rate', 'Global storewide commission', 'Custom welcome instructions'],
      },
      {
        stage: 'Stage 2',
        title: 'Revenue Milestone Tracking',
        desc: 'Real-time sales tracking calculates total monthly volume driven by each individual creator.',
        points: ['Automatic sales aggregation', 'Progress bar in creator portal', 'Gamified tier achievements'],
      },
      {
        stage: 'Stage 3',
        title: 'Automated Tier Promotion',
        desc: 'Creators graduating to $5k+ or $20k+ tiers unlock higher percentage cuts and exclusive perks automatically.',
        points: ['Instant VIP tier upgrade', 'Automatic notification email', 'Custom commission overrides'],
      },
      {
        stage: 'Stage 4',
        title: 'Product-Level Incentives',
        desc: 'Offer higher bounties on high-margin product collections while excluding clearance or low-margin SKUs.',
        points: ['Collection-level multipliers', 'Zero-commission exclusion lists', 'Flat dollar bounty bonuses'],
      },
    ],
    milestones: {
      tag: 'Performance Lift',
      title: 'Power your growth with gamified affiliate commission structures',
      description:
        'Merchants who implement tiered rewards see a 42% average increase in monthly creator output within 60 days.',
      stats: [
        { value: '+42%', label: 'Avg Increase in Creator Output' },
        { value: '3x', label: 'Higher VIP Creator Retention' },
        { value: '100%', label: 'Automated Tier Upgrades' },
        { value: '$0', label: 'Manual Spreadsheet Math Needed' },
      ],
    },
    benefits: [
      {
        icon: 'Percent',
        title: 'Percentage or Fixed Bounties',
        desc: 'Choose between percentage of subtotal (e.g., 15%) or flat dollar bounties ($25/order) per campaign.',
      },
      {
        icon: 'TrendingUp',
        title: 'Automated Tier Escalations',
        desc: 'Auto-promote creators when they hit monthly sales targets to keep them driven and motivated.',
      },
      {
        icon: 'ShieldCheck',
        title: 'SKU & Collection Exclusions',
        desc: 'Exclude low-margin items, gift cards, or specific collections from earning affiliate commissions.',
      },
      {
        icon: 'Zap',
        title: 'VIP Influencer Overrides',
        desc: 'Grant bespoke rates to marquee ambassadors without affecting your public affiliate tiers.',
      },
    ],
    deepDives: [
      {
        badge: 'Tier Hierarchy',
        title: 'Multi-Tier Commission Structure Setup',
        description:
          'Create tiered programs like Standard (10%), VIP (15%), and Ambassador Elite (20% + bonuses). Creators automatically level up as their gross referred sales grow.',
        bullets: [
          'Set custom thresholds based on 30-day rolling sales or total lifetime orders',
          'Automatic tier badge displays in creator portal',
          'Customizable welcome and congratulatory emails on tier upgrades',
        ],
        mockupType: 'commission-tiers',
      },
      {
        badge: 'SKU-Level Control',
        title: 'Product-Level Commission Rules & Exclusions',
        description:
          'Protect your gross margins. Set distinct commission rates for high-margin hero products while excluding zero-margin clearance items.',
        bullets: [
          'Collection-based commission multipliers',
          'Exclude gift cards, taxes, and shipping from commissionable subtotal',
          'Fixed dollar bonuses on designated bundle promotions',
        ],
        mockupType: 'product-rules',
      },
      {
        badge: 'Recurring Incentives',
        title: 'Milestone Bounties & Performance Bonuses',
        description:
          'Award instant one-time cash bonuses when creators achieve breakthrough milestones (e.g., $100 bonus for driving 50 orders in a single month).',
        bullets: [
          'Gamified creator leaderboard and milestone trackers',
          'Automated bonus calculation added directly to payout ledgers',
          'Custom promotional contest periods',
        ],
        mockupType: 'milestone-bonuses',
      },
      {
        badge: 'Real-Time Ledger',
        title: 'Transparent Earnings Auditing & Calculations',
        description:
          'Every order transaction records the exact rate applied, item subtotals, and applied discounts for seamless reconciliation.',
        bullets: [
          'Line-by-line commission calculation audits',
          'Obfuscated customer data for creator privacy',
          'Live calculation preview before payouts are released',
        ],
        mockupType: 'earnings-ledger',
      },
    ],
    faqs: [
      {
        q: 'Can I set different commission rates for different influencers?',
        a: 'Yes! You can assign custom commission rates to specific creator profiles that override the default public tier.',
      },
      {
        q: 'Are commissions calculated before or after discounts, shipping, and taxes?',
        a: 'By default, KickAffiliate calculates commissions on the post-discount order subtotal, excluding shipping and taxes to protect your margins.',
      },
      {
        q: 'What happens if a creator drops below a tier threshold?',
        a: 'You can configure whether tiers evaluate on lifetime revenue (permanent upgrades) or 30/90-day rolling performance windows.',
      },
      {
        q: 'Can I offer fixed dollar amounts instead of percentages?',
        a: 'Yes, you can configure flat bounties (e.g. $20 per order) or percentage commissions (e.g. 15%) on any tier or product.',
      },
    ],
  },

  'creator-portal': {
    slug: 'creator-portal',
    badge: 'Creator Experience',
    breadcrumb: 'Creator Portal',
    title: 'White-Label Self-Serve Creator Portal with Zero Login Friction',
    subtitle:
      'Give creators a branded dashboard where they can generate tracking links, copy discount codes, access creative brand assets, and view live earnings.',
    heroStats: [
      { label: 'Login Method', value: 'Magic Link & OTP' },
      { label: 'Branding', value: '100% White-Label' },
      { label: 'Asset Sharing', value: 'Built-in Media Kit' },
    ],
    journeyTitle: 'Deliver an exceptional self-serve creator experience',
    journeySubtitle: 'Empower creators to self-manage links, creative assets, and payment preferences.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Frictionless Registration',
        desc: 'Creators sign up via your branded landing page with instant or manual merchant approval workflows.',
        points: ['Custom form fields', 'Auto-generated welcome email', 'Instant discount code provisioning'],
      },
      {
        stage: 'Stage 2',
        title: 'Passwordless Magic Login',
        desc: 'No passwords to remember. Creators log in via 1-click email magic links or secure one-time passcode.',
        points: ['1-click secure login', 'Zero forgotten password tickets', 'Mobile-optimized dashboard'],
      },
      {
        stage: 'Stage 3',
        title: 'Deep Link & Code Generator',
        desc: 'Creators paste any store product URL to generate customized attribution links and copy their personal coupon code.',
        points: ['1-click copy discount code', 'Instant product deep linker', 'QR code generator for offline events'],
      },
      {
        stage: 'Stage 4',
        title: 'Live Analytics & Payout Setup',
        desc: 'Creators track clicks, conversions, pending balances, and submit their preferred PayPal or bank details.',
        points: ['Real-time earnings ledger', 'Privacy-compliant customer data', 'PayPal/Bank detail management'],
      },
    ],
    milestones: {
      tag: 'Creator Engagement',
      title: 'Empower creators with a professional, frictionless portal',
      description:
        'When creators have instant access to links, analytics, and asset kits, they post 3x more frequently and drive 2.4x higher conversion rates.',
      stats: [
        { value: '3x', label: 'More Frequent Creator Posts' },
        { value: '98%', label: 'Creator Portal Login Success' },
        { value: '< 2min', label: 'Average Onboarding Time' },
        { value: '0', label: 'Password Reset Support Tickets' },
      ],
    },
    benefits: [
      {
        icon: 'LayoutDashboard',
        title: '100% Custom White-Label',
        desc: 'Match your brand typography, colors, and logo for a cohesive merchant experience.',
      },
      {
        icon: 'Zap',
        title: 'Passwordless Magic Links',
        desc: 'Affiliates log in instantly with email verification links — no forgotten password headaches.',
      },
      {
        icon: 'Link2',
        title: 'Deep Link Generator',
        desc: 'Creators can paste any product URL from your store to create tracking links in seconds.',
      },
      {
        icon: 'Wallet',
        title: 'Self-Serve Payment Info',
        desc: 'Creators manage their own PayPal email or direct deposit details securely.',
      },
    ],
    deepDives: [
      {
        badge: 'Seamless Access',
        title: 'Passwordless Magic Link & OTP Authentication',
        description:
          'Password friction is the #1 reason affiliates stop promoting products. With KickAffiliate, creators enter their email and receive an instant magic link or 6-digit OTP code to log in immediately.',
        bullets: [
          'Zero password management or forgotten credentials',
          'Encrypted session tokens with automatic expiry',
          'Responsive UI designed for smartphone browsers',
        ],
        mockupType: 'magic-login',
      },
      {
        badge: 'Creative Toolkit',
        title: 'Built-In Media Kit & Promotional Assets',
        description:
          'Equip your ambassadors with high-converting brand creative. Upload banners, logos, lifestyle photography, and recommended caption copy directly into the portal repository.',
        bullets: [
          'High-res image and video downloads',
          'Pre-written social caption templates and hashtag guides',
          'Brand guideline documentation and product talking points',
        ],
        mockupType: 'media-kit',
      },
      {
        badge: 'Instant Deep Linking',
        title: 'Custom Deep Link & QR Code Generation',
        description:
          'Empower creators to promote specific products. They simply paste any URL from your Shopify store, and the portal generates a tracked referral link with optional QR codes for video overlays.',
        bullets: [
          'Product page and collection deep-linking',
          'Custom vanity URL slug customization',
          'Downloadable vector QR codes for TikTok & Instagram stories',
        ],
        mockupType: 'link-generator',
      },
      {
        badge: 'Privacy & Analytics',
        title: 'Live Conversions & Transparent Earnings Ledger',
        description:
          'Creators love clarity. They can see their clicks, conversion rates, order counts, pending payouts, and historical transaction receipts in real-time.',
        bullets: [
          'Live order stream with obfuscated customer names for privacy',
          'Clear breakdown of pending vs. paid balances',
          'Exportable CSV statements for tax and accounting purposes',
        ],
        mockupType: 'creator-analytics',
      },
    ],
    faqs: [
      {
        q: 'Can I customize the colors and logo in the creator portal?',
        a: 'Yes, the creator portal is 100% white-label. You can configure your store logo, primary brand color, and portal greeting.',
      },
      {
        q: 'How do creators log in without a password?',
        a: 'Creators enter their registered email address and receive an instant secure magic link or 6-digit one-time code to log in securely.',
      },
      {
        q: 'Can creators generate links to specific product pages?',
        a: 'Yes! Creators can paste any URL from your Shopify store into the link generator to create custom deep links.',
      },
      {
        q: 'Can creators see who bought using their links?',
        a: 'For customer privacy compliance (GDPR/CCPA), creators see order numbers, timestamps, order subtotals, and commissions, with customer names obfuscated (e.g. S*** J***).',
      },
    ],
  },

  'payout-reconciliation': {
    slug: 'payout-reconciliation',
    badge: 'Financial Reconciliation',
    breadcrumb: 'Payouts & Reconciliation',
    title: '1-Click Batch Payouts with Automated Refund Deductions',
    subtitle:
      'Never pay commissions on returned items or cancelled orders. KickAffiliate automatically syncs with Shopify refunds and settles balances via PayPal or CSV bank exports.',
    heroStats: [
      { label: 'Refund Sync', value: 'Automatic' },
      { label: 'Payout Methods', value: 'PayPal & CSV' },
      { label: 'Hold Window', value: 'Configurable (14-90d)' },
    ],
    journeyTitle: 'Streamline affiliate financial reconciliation',
    journeySubtitle: 'Eliminate manual accounting spreadsheets and prevent overpaying commissions on refunded goods.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Order Tracking & Hold Window',
        desc: 'New commission earnings enter a designated hold window (e.g. 30 days) to match your store return policy.',
        points: ['Configurable return hold period', 'Live pending balance ledger', 'Automatic tax exclusion'],
      },
      {
        stage: 'Stage 2',
        title: 'Automated Refund Deduction',
        desc: 'When a customer returns an item in Shopify, KickAffiliate automatically recalculates or voids the unpaid commission.',
        points: ['Webhook return detection', 'Partial refund proportional math', 'Transparent audit reason logging'],
      },
      {
        stage: 'Stage 3',
        title: '1-Click Batch Settlement',
        desc: 'Select approved creators and generate a PayPal MassPay file or export formatted CSVs for direct bank transfers.',
        points: ['1-Click batch marking', 'PayPal MassPay CSV export', 'Direct bank wire formatting'],
      },
      {
        stage: 'Stage 4',
        title: 'Instant Receipts & Audit Trails',
        desc: 'Creators receive automated payout receipts, while your merchant dashboard maintains clean financial logs for accounting.',
        points: ['Automated creator email notification', 'Permanent transaction history', 'One-click tax report exports'],
      },
    ],
    milestones: {
      tag: 'Accounting Accuracy',
      title: 'Eliminate overpayments with automated refund reconciliation',
      description:
        'Merchants save an average of 8-14% on total affiliate payouts by automatically adjusting commissions on customer returns.',
      stats: [
        { value: '8-14%', label: 'Saved in Prevented Overpayments' },
        { value: '1-Click', label: 'Batch Payout Settlement' },
        { value: '100%', label: 'Automated Return Reconciliation' },
        { value: '0 hrs', label: 'Spent on Manual Payout Spreadsheets' },
      ],
    },
    benefits: [
      {
        icon: 'Wallet',
        title: 'Auto Refund Deductions',
        desc: 'Webhook sync listens to Shopify return events and instantly deducts commissions from pending creator balances.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Configurable Hold Windows',
        desc: 'Hold commissions for 14, 30, or 60 days so payouts are only released after your store return window closes.',
      },
      {
        icon: 'Zap',
        title: '1-Click PayPal & Bank Export',
        desc: 'Export pre-formatted PayPal MassPay files or generic CSVs for direct wire settlement in one click.',
      },
      {
        icon: 'Percent',
        title: 'Partial Return Proportional Math',
        desc: 'If a customer returns 1 out of 3 items, the commission recalculates proportionally to the kept subtotal.',
      },
    ],
    deepDives: [
      {
        badge: 'Automated Sync',
        title: 'Shopify Return & Refund Webhook Reconciliation',
        description:
          'When an order is cancelled or refunded in Shopify Admin, KickAffiliate intercepts the webhook event in real-time. If the commission is pending, it is automatically reduced or cancelled with a clear audit trail.',
        bullets: [
          'Automatic partial and full refund reconciliation',
          'Line-item return math protects profit margins',
          'Full audit log with original Shopify order and refund IDs',
        ],
        mockupType: 'refund-ledger',
      },
      {
        badge: 'Batch Payouts',
        title: '1-Click Batch Payouts & MassPay Export',
        description:
          'Settle hundreds of affiliates in under 60 seconds. Generate PayPal MassPay batch files with creator emails and owed balances, or mark them as paid with a single click.',
        bullets: [
          'Ready-to-upload PayPal MassPay CSV exports',
          'Bank wire and Wise-compatible settlement spreadsheets',
          'Instant status change from Pending to Paid across all records',
        ],
        mockupType: 'payout-batch',
      },
      {
        badge: 'Risk Mitigation',
        title: 'Customizable Commission Hold Periods',
        description:
          'Protect cash flow by locking commissions until your store return policy expires (e.g., 30 days after fulfillment). Only finalized orders qualify for payout batches.',
        bullets: [
          'Configurable hold period (14, 30, 45, or 60 days)',
          'Clear release dates displayed in creator portal',
          'Manual override option for trusted VIP ambassadors',
        ],
        mockupType: 'hold-window',
      },
      {
        badge: 'Financial Reporting',
        title: 'Comprehensive Tax & Accounting Ledgers',
        description:
          'Export complete financial ledgers containing creator tax IDs, historical payouts, deduction logs, and gross driven volume for end-of-year tax reporting.',
        bullets: [
          'Downloadable CSVs for QuickBooks, Xero, and accountants',
          'Tax compliance tracking with creator details',
          'Detailed lifetime merchant spend breakdown',
        ],
        mockupType: 'tax-reports',
      },
    ],
    faqs: [
      {
        q: 'What happens if an order is refunded after the commission has already been paid?',
        a: 'If a commission was already paid, KickAffiliate applies a negative balance credit to the creator’s ledger, automatically offsetting their next payout.',
      },
      {
        q: 'Can I use PayPal MassPay to pay all my creators at once?',
        a: 'Yes! KickAffiliate generates a 1-click PayPal MassPay CSV that you can upload directly to PayPal to pay all creators simultaneously.',
      },
      {
        q: 'Can I set a minimum payout threshold?',
        a: 'Yes, you can set a minimum payout threshold (e.g. $50). Creators whose balances are below the threshold roll over to the next billing cycle.',
      },
      {
        q: 'How does partial refund calculation work?',
        a: 'If a customer returns $30 worth of products from a $100 order, KickAffiliate recalculates the creator’s commission based on the remaining $70 subtotal.',
      },
    ],
  },

  'anti-fraud': {
    slug: 'anti-fraud',
    badge: 'Security & Integrity',
    breadcrumb: 'Fraud Guard',
    title: 'Enterprise Fraud Guard & Self-Referral Prevention',
    subtitle:
      'Safeguard your marketing budget from abusive kickbacks and automated click farms. KickAffiliate monitors IP traffic, blocks self-referrals, and cryptographically signs webhook data.',
    heroStats: [
      { label: 'Click Deduplication', value: '1-Minute IP Window' },
      { label: 'Self-Referral Check', value: 'Multi-Factor' },
      { label: 'Webhook Security', value: 'HMAC SHA-256' },
    ],
    journeyTitle: 'Multi-layer security architecture protects your store',
    journeySubtitle: 'Detect and block suspicious affiliate activities before paying out commissions.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Click Traffic Deduplication',
        desc: 'High-frequency bot clicks from identical IPs within 60 seconds are automatically filtered out.',
        points: ['1-minute IP rate limiting', 'Bot and scraper detection', 'Zero inflated click telemetry'],
      },
      {
        stage: 'Stage 2',
        title: 'Anti-Self-Referral Matching',
        desc: 'Shopper emails, shipping addresses, and IP subnets are cross-checked against creator profiles.',
        points: ['Creator email cross-matching', 'Shipping address correlation', 'Automatic self-kickback blocker'],
      },
      {
        stage: 'Stage 3',
        title: 'HMAC Cryptographic Validation',
        desc: 'Every Shopify webhook event is verified against your store secret with HMAC SHA-256 signatures.',
        points: ['Shopify webhook signature check', 'Tamper-proof payload ingestion', 'Zero spoofed order events'],
      },
      {
        stage: 'Stage 4',
        title: 'Flagged Transaction Auditing',
        desc: 'Suspicious conversions are held in a review queue with detailed risk indicators before payout release.',
        points: ['Visual anomaly flags', '1-click manual reject/approve', 'Detailed risk analysis telemetry'],
      },
    ],
    milestones: {
      tag: 'Security & Savings',
      title: 'Stop affiliate fraud and protect your profit margins',
      description:
        'Unauthorized coupon leakage and self-referrals cost e-commerce brands up to 15% of their affiliate budget. KickAffiliate stops fraud at the source.',
      stats: [
        { value: '100%', label: 'Self-Referrals Blocked' },
        { value: '99.99%', label: 'Bot Click Filtering' },
        { value: 'SHA-256', label: 'Cryptographic Security' },
        { value: '$0', label: 'Paid to Fraudulent Referrals' },
      ],
    },
    benefits: [
      {
        icon: 'ShieldCheck',
        title: 'Self-Referral Prevention',
        desc: 'Blocks creators from using their own referral links or discount codes to get cash-back kickbacks.',
      },
      {
        icon: 'Zap',
        title: '1-Minute Click Deduplication',
        desc: 'Filters out rapid repetitive clicks from single IP addresses to keep conversion statistics accurate.',
      },
      {
        icon: 'Percent',
        title: 'HMAC Webhook Verification',
        desc: 'Verifies the cryptographic signature of all Shopify order events to prevent forged data injection.',
      },
      {
        icon: 'Wallet',
        title: 'Suspicious Anomaly Queue',
        desc: 'Flags orders with sudden velocity spikes or high refund rates for merchant manual review.',
      },
    ],
    deepDives: [
      {
        badge: 'Anti-Kickback',
        title: 'Multi-Factor Self-Referral Detection',
        description:
          'Affiliates often try to buy through their own links to get discounts. KickAffiliate automatically compares customer email, customer shipping address, and credit card holder name against registered creators, instantly flagging matches.',
        bullets: [
          'Automatic email match detection (including alias variations)',
          'Shipping address and phone number cross-referencing',
          'Option to auto-block or send to manual review queue',
        ],
        mockupType: 'self-referral-block',
      },
      {
        badge: 'Bot Defense',
        title: 'Click Deduplication & Bot Rate Limiting',
        description:
          'Automated scrapers and click farms can skew conversion rates. KickAffiliate deduplicates clicks occurring within 60 seconds from the same IP, recording only authentic unique shopper interest.',
        bullets: [
          '1-minute unique IP rate limiting',
          'Known datacenter and VPN proxy flag detection',
          'Clean, accurate conversion rate metrics',
        ],
        mockupType: 'click-dedup',
      },
      {
        badge: 'Data Integrity',
        title: 'HMAC SHA-256 Cryptographic Webhook Security',
        description:
          'Every Shopify webhook payload is validated using HMAC SHA-256 encryption. Forged or replay attacks are rejected immediately, ensuring only genuine paid Shopify orders generate commissions.',
        bullets: [
          'Official Shopify webhook HMAC validation',
          'Replay attack prevention with unique webhook IDs',
          'Strict end-to-end data encryption at rest and in transit',
        ],
        mockupType: 'hmac-security',
      },
      {
        badge: 'Risk Telemetry',
        title: 'Suspicious Activity Monitoring & Review Queue',
        description:
          'Keep full control over payouts. Orders flagged for suspicious behavior are held in your review ledger with highlighted risk reasons, allowing you to reject fraudulent commissions with one click.',
        bullets: [
          'Visual risk score tags (Low, Medium, High Risk)',
          '1-click commission cancellation and creator suspension',
          'Exportable audit log for merchant security records',
        ],
        mockupType: 'risk-ledger',
      },
    ],
    faqs: [
      {
        q: 'How does KickAffiliate detect self-referrals?',
        a: 'KickAffiliate checks the buyer’s email, name, shipping address, and IP address against all registered creator records in your program.',
      },
      {
        q: 'What happens if a self-referral is detected?',
        a: 'The order discount is applied to the customer if configured, but zero commission is credited to the creator. The transaction is marked as "Self-Referral Blocked" in your logs.',
      },
      {
        q: 'Can I manually override and approve a flagged transaction?',
        a: 'Yes, merchants have full control to review flagged transactions and approve or reject them at any time before payout.',
      },
      {
        q: 'Does fraud protection slow down checkout?',
        a: 'No, fraud validation executes asynchronously on the server side after order completion, with zero impact on customer checkout speed.',
      },
    ],
  },
};
