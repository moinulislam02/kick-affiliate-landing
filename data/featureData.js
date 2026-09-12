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
    title: 'White-Label Self-Serve Creator Portal for Easy Tracking & Payouts',
    subtitle:
      'Give creators a branded dashboard to track real-time clicks, copy their personalized Shopify discount codes & referral links, configure payout methods with 2-Factor OTP, and view full earnings ledgers.',
    heroStats: [
      { label: 'Authentication', value: 'Email & Password + OTP' },
      { label: 'Payout Channels', value: 'PayPal & Bank / Wise' },
      { label: 'Security', value: '2-Factor OTP Payout Shield' },
    ],
    journeyTitle: 'Deliver an exceptional self-serve creator experience',
    journeySubtitle: 'Empower creators to self-manage links, view performance analytics, and configure secure payout preferences.',
    journeyStages: [
      {
        stage: 'Stage 1',
        title: 'Branded Self-Serve Registration',
        desc: 'Creators sign up via your store-branded registration page with custom background imagery and social channel inputs.',
        points: ['Store-tailored branding & logo', 'Instant Shopify discount code sync', 'Auto or manual merchant approval'],
      },
      {
        stage: 'Stage 2',
        title: 'Seamless Password Setup & Login',
        desc: 'Creators set their password on their first login attempt, with support for passwordless 6-digit email OTPs and multi-store switching.',
        points: ['First-time password initialization', 'Passwordless 6-digit OTP option', 'Multi-store creator account switcher'],
      },
      {
        stage: 'Stage 3',
        title: '1-Click Link & Discount Code Provisioning',
        desc: 'Creators access their dedicated 30-day tracking URL and personalized Shopify checkout discount code with live follower savings terms.',
        points: ['1-Click tracking link copy', 'Shopify discount code card', 'Live follower savings badge'],
      },
      {
        stage: 'Stage 4',
        title: 'Real-Time Performance Ledger & 2FA Payouts',
        desc: 'Creators monitor 6 real-time financial KPIs, interactive 30-day click-to-order charts, referred order streams, and secure their payout preferences.',
        points: ['6 Real-time financial & conversion KPIs', 'Interactive 30-day performance graph', '2-Factor OTP payout method protection'],
      },
    ],
    milestones: {
      tag: 'Creator Engagement',
      title: 'Equip affiliates with a professional self-serve portal',
      description:
        'When creators have direct, transparent visibility into their clicks, conversions, pending payouts, and discount codes, they promote more consistently and build trusted, long-term partnerships.',
      stats: [
        { value: '100%', label: 'White-Label Store Customization' },
        { value: '6 KPIs', label: 'Real-Time Earnings & Conversion Metrics' },
        { value: '2FA', label: 'Email OTP Payout Protection' },
        { value: '24/7', label: 'Self-Serve Creator Dashboard Access' },
      ],
    },
    benefits: [
      {
        icon: 'LayoutDashboard',
        title: '100% Custom White-Label',
        desc: 'Match your store logo, brand name, custom background imagery, and light/dark themes for a seamless creator experience.',
      },
      {
        icon: 'ShieldCheck',
        title: '2-Factor OTP Payout Security',
        desc: 'Protect creator earnings by requiring a 6-digit email verification code whenever payout methods (PayPal or Bank/Wise) are updated.',
      },
      {
        icon: 'Link2',
        title: 'Dual Referral Credentials',
        desc: 'Provides both a 30-day sliding window tracking link and a native Shopify checkout coupon code side-by-side.',
      },
      {
        icon: 'Wallet',
        title: 'Transparent Earnings & Order Ledger',
        desc: 'Real-time visibility into attributed sales, lifetime earnings, pending balances, click traffic, conversion rates, and itemized order records.',
      },
    ],
    deepDives: [
      {
        badge: 'Access & Security',
        title: 'First-Time Password Setup & Flexible Login',
        description:
          'Onboarding is friction-free. Newly registered or merchant-invited creators set up their password on their initial login attempt. For ongoing access, creators can log in with email and password or use passwordless 6-digit email OTPs, with multi-store switching for ambassadors representing several brands.',
        bullets: [
          'Instant password initialization on first sign-in',
          'Passwordless 6-digit OTP email login option',
          'One account supports multiple merchant store portals',
        ],
        mockupType: 'creator-login',
      },
      {
        badge: 'Referral Credentials',
        title: '1-Click Referral Link & Shopify Discount Code Card',
        description:
          'Creators get immediate access to their promotional tools without confusion. The portal clearly presents both the 30-day tracking link and the active Shopify checkout discount code with follower discount terms.',
        bullets: [
          '1-Click clipboard copy for links and promo codes',
          'Live display of follower discount percentage',
          'Dual attribution ensuring link clicks and codes credit the creator',
        ],
        mockupType: 'creator-credentials',
      },
      {
        badge: 'Performance Transparency',
        title: '6 Financial KPIs, 30-Day Chart & Order Ledger',
        description:
          'Creators see their exact performance in real-time. The dashboard features 6 key KPI cards, an interactive 30-day click-to-order trend chart, and a granular ledger of every referred sale and payout receipt.',
        bullets: [
          '6 KPI metrics: Sales Volume, Lifetime Earnings, Pending, Paid, Clicks, and Conversion Rate',
          'Interactive 30-day visual graph plotting daily click traffic against converted orders',
          'Filterable tabs for referred order transactions and historical payout receipts',
        ],
        mockupType: 'creator-dashboard',
      },
      {
        badge: 'Payout Management',
        title: 'Self-Serve Payout Preferences & 2-Factor OTP Protection',
        description:
          'Creators easily configure where they want to receive their earnings—via PayPal or direct Bank Transfer / Wise. To protect creator funds from unauthorized changes, updating payout methods requires a 6-digit verification code sent to their registered email.',
        bullets: [
          'Support for PayPal and direct Bank Transfer / Wire / Wise',
          '2-Factor Email OTP verification for all payout modifications',
          'Built-in FAQ knowledge base explaining hold periods and payout timelines',
        ],
        mockupType: 'creator-settings',
      },
    ],
    faqs: [
      {
        q: 'Can I customize the branding and logo of the creator portal?',
        a: 'Yes! The creator portal inherits your store logo, brand name, and custom registration backdrop image configured in your Merchant Admin.',
      },
      {
        q: 'How do creators sign up and access their portal?',
        a: 'Creators register via your branded signup link (or are invited directly from your admin). Upon first login, they set their password and can access their dashboard anytime with email & password or passwordless OTP.',
      },
      {
        q: 'What payment methods can creators configure?',
        a: 'Creators can set up PayPal or direct Bank Transfer / Wise details. Any changes to payout methods require a 6-digit OTP verification code sent to the creator\'s email for security.',
      },
      {
        q: 'What metrics and data can creators see in their dashboard?',
        a: 'Creators have full visibility over their total attributed sales, lifetime earnings, pending balance, paid commissions, click traffic, conversion rate, and a 30-day performance graph with an itemized orders ledger.',
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
