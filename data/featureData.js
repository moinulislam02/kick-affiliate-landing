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
    title: 'White-Label Self-Serve Creator Portal for Easy Link & Performance Tracking',
    subtitle:
      'Give creators a branded dashboard where they can set up their password, generate tracking links, copy discount codes, access creative brand assets, and view live earnings.',
    heroStats: [
      { label: 'Account Setup', value: 'Set Password on 1st Login' },
      { label: 'Login Access', value: 'Email & Password' },
      { label: 'Asset Sharing', value: 'Built-in Media Kit' },
    ],
    journeyTitle: 'Deliver an exceptional self-serve creator experience',
    journeySubtitle: 'Empower creators to self-manage links, creative assets, and track their referral earnings.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Frictionless Registration & Invites',
        desc: 'Creators sign up via your branded landing page or are directly added and invited from your merchant admin.',
        points: ['Custom signup forms', 'Direct merchant invite provisioning', 'Instant discount code setup'],
      },
      {
        stage: 'Stage 2',
        title: 'First-Time Password Setup & Login',
        desc: 'When creators join or are added for the first time, they set their account password upon initial login, then easily log in with email and password anytime.',
        points: ['One-time initial password setup', 'Secure email & password authentication', 'Mobile-optimized dashboard access'],
      },
      {
        stage: 'Stage 3',
        title: 'Deep Link & Code Generator',
        desc: 'Creators paste any store product URL to generate customized attribution links and copy their personal coupon code.',
        points: ['1-click copy discount code', 'Instant product deep linker', 'QR code generator for offline events'],
      },
      {
        stage: 'Stage 4',
        title: 'Live Analytics & Performance Ledger',
        desc: 'Creators track clicks, conversions, pending balances, and monitor approved commission earnings in real-time.',
        points: ['Real-time earnings ledger', 'Privacy-compliant customer data', 'Transparent commission records'],
      },
    ],
    milestones: {
      tag: 'Creator Engagement',
      title: 'Empower creators with a professional, self-serve portal',
      description:
        'When creators have direct access to links, analytics, and asset kits, they post 3x more frequently and drive 2.4x higher conversion rates.',
      stats: [
        { value: '3x', label: 'More Frequent Creator Posts' },
        { value: '100%', label: 'White-Label Portal Branding' },
        { value: '< 2min', label: 'Average Onboarding Time' },
        { value: '24/7', label: 'Self-Serve Creator Access' },
      ],
    },
    benefits: [
      {
        icon: 'LayoutDashboard',
        title: '100% Custom White-Label',
        desc: 'Match your brand typography, colors, and logo for a cohesive creator experience.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Secure Account Access',
        desc: 'Creators set their password on first login and securely access their dashboard with email and password anytime.',
      },
      {
        icon: 'Link2',
        title: 'Deep Link Generator',
        desc: 'Creators can paste any product URL from your store to create tracking links in seconds.',
      },
      {
        icon: 'Wallet',
        title: 'Transparent Earnings Dashboard',
        desc: 'Creators monitor real-time referral clicks, order conversions, and approved commission balances.',
      },
    ],
    deepDives: [
      {
        badge: 'Secure Login',
        title: 'Direct First-Time Password Setup & Secure Login',
        description:
          'Onboarding is simple and secure. When a creator signs up or is added from your merchant admin, they set up their password on their first login attempt. Afterwards, they simply log in with their email and password whenever they want to check performance.',
        bullets: [
          'Intuitive first-time password setup for new and invited creators',
          'Standard secure email & password login for daily access',
          'Responsive dashboard designed for mobile and desktop browsers',
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
        q: 'How do creators set up their account and log in?',
        a: 'When a creator joins through your registration page or is added directly from your merchant admin, they set their account password on their first login. For all subsequent visits, they securely log in with their registered email and password.',
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
    breadcrumb: 'Refunds & Commission Tracking',
    title: 'Automated Refund Reconciliation & Commission Management',
    subtitle:
      'Never pay commissions on returned items or cancelled orders. KickAffiliate automatically tracks Shopify refunds, voids cancelled commissions, and maintains clear balance ledgers for your creator network.',
    heroStats: [
      { label: 'Refund Sync', value: 'Real-Time Webhooks' },
      { label: 'Return Protection', value: '100% Protected' },
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
        title: 'Automated Refund Reconciliation',
        desc: 'When a customer returns or cancels an order in Shopify, KickAffiliate automatically detects the webhook event and voids the unpaid commission.',
        points: ['Webhook return detection', 'Instant commission voiding', 'Transparent audit reason logging'],
      },
      {
        stage: 'Stage 3',
        title: 'Commission Review & Payout Tracking',
        desc: 'Review approved creator balances and maintain clean, transparent records as you issue payouts according to your schedule.',
        points: ['Manual verification workflows', 'Individual creator balance tracking', 'Clean payout status updates'],
      },
      {
        stage: 'Stage 4',
        title: 'Transparent Ledgers & Audit Trails',
        desc: 'Creators see accurate, updated balance breakdowns inside their portal, while your merchant dashboard maintains full financial logs for accounting.',
        points: ['Live creator portal balance sync', 'Permanent transaction history', 'Detailed deduction logs'],
      },
    ],
    milestones: {
      tag: 'Accounting Accuracy',
      title: 'Eliminate overpayments with automated refund reconciliation',
      description:
        'Merchants save an average of 8-14% on total affiliate spend by automatically adjusting commissions on customer returns.',
      stats: [
        { value: '8-14%', label: 'Saved in Prevented Overpayments' },
        { value: 'Real-Time', label: 'Refund Reconciliation' },
        { value: '100%', label: 'Order Attribution Accuracy' },
        { value: '0 hrs', label: 'Spent on Manual Refund Calculations' },
      ],
    },
    benefits: [
      {
        icon: 'Wallet',
        title: 'Auto Refund Deductions',
        desc: 'Webhook sync listens to Shopify return events and instantly voids or deducts commissions from pending creator balances.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Configurable Hold Windows',
        desc: 'Hold commissions for 14, 30, or 60 days so commissions are only finalized after your store return window closes.',
      },
      {
        icon: 'Zap',
        title: 'Transparent Balance Tracking',
        desc: 'Track live pending, approved, and paid commission balances for each creator in your dashboard.',
      },
      {
        icon: 'Percent',
        title: 'Zero-Overpayment Protection',
        desc: 'Never pay commissions on unfulfilled, cancelled, or returned orders with automated order state sync.',
      },
    ],
    deepDives: [
      {
        badge: 'Automated Sync',
        title: 'Shopify Return & Refund Webhook Reconciliation',
        description:
          'When an order is cancelled or refunded in Shopify Admin, KickAffiliate intercepts the webhook event in real-time. If the commission is pending, it is automatically voided with a clear audit trail.',
        bullets: [
          'Automatic cancellation and refund detection via Shopify webhooks',
          'Instant commission voiding protects store profit margins',
          'Full audit log with original Shopify order and refund IDs',
        ],
        mockupType: 'refund-ledger',
      },
      {
        badge: 'Payout Tracking',
        title: 'Clear Commission & Payout Status Management',
        description:
          'Keep your creator finances organized with intuitive balance tracking. Review approved earnings, mark payouts as fulfilled, and provide creators with complete visibility over their earnings.',
        bullets: [
          'Real-time pending vs. approved balance ledgers',
          'Straightforward payout status updates across all creators',
          'Transparent earnings visibility inside creator portals',
        ],
        mockupType: 'payout-batch',
      },
      {
        badge: 'Risk Mitigation',
        title: 'Customizable Commission Hold Periods',
        description:
          'Protect cash flow by locking commissions until your store return policy expires (e.g., 30 days after fulfillment). Only finalized orders qualify for approved status.',
        bullets: [
          'Configurable hold period (14, 30, 45, or 60 days)',
          'Clear release dates displayed in creator portal',
          'Manual override option for trusted VIP ambassadors',
        ],
        mockupType: 'hold-window',
      },
      {
        badge: 'Financial Reporting',
        title: 'Comprehensive Ledger & Deduction Records',
        description:
          'Maintain complete financial records containing historical earnings, deduction logs, and gross driven volume for store accounting and reporting.',
        bullets: [
          'Detailed deduction and refund logs',
          'Historical earnings ledgers with creator details',
          'Detailed lifetime merchant spend breakdown',
        ],
        mockupType: 'tax-reports',
      },
    ],
    faqs: [
      {
        q: 'What happens if an order is refunded after the commission has already been paid?',
        a: 'If a commission was already paid out, KickAffiliate records a negative deduction on the creator’s balance ledger, automatically offsetting subsequent referral earnings.',
      },
      {
        q: 'How do I review and verify commissions before issuing payouts?',
        a: 'You can review all pending referral orders directly in your KickAffiliate dashboard, inspect order details, and approve or reject commissions with one click.',
      },
      {
        q: 'How do hold windows protect my store from refund losses?',
        a: 'Hold windows lock commissions for a configurable duration (such as 30 days) matching your store return policy, ensuring you only finalize commissions once orders are past the return period.',
      },
      {
        q: 'What happens when a customer returns or cancels an order?',
        a: 'KickAffiliate immediately receives the Shopify cancellation webhook and automatically marks the associated commission as voided, preventing any payout from being issued.',
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
