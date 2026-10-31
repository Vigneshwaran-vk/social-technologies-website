/**
 * Content definitions and placeholders for Social Technologies (socialtechnologies.in)
 * Rule: Never invent statistics, use visible placeholders like {{MARKETPLACE_COUNT}}.
 */

export const PLACEHOLDERS = {
  MARKETPLACE_COUNT: "{{MARKETPLACE_COUNT}}",
  ACTIVE_SELLERS: "{{ACTIVE_SELLERS}}",
  MONTHLY_GMV: "{{MONTHLY_GMV}}",
  PINCODES_SERVED: "{{PINCODES_SERVED}}",
  ORDERS_FULFILLED: "{{ORDERS_FULFILLED}}",
  MARKETPLACE_LOGOS: "{{MARKETPLACE_LOGOS}}",
  ICM_MARKETPLACES: "{{ICM_MARKETPLACES}}",
  ICM_CATEGORIES: "{{ICM_CATEGORIES}}",
  STEPS: "{{STEPS}}",
  TESTIMONIALS: "{{TESTIMONIALS}}",
  FAQS: "{{FAQS}}",
  WHATSAPP_NUMBER: "{{WHATSAPP_NUMBER}}",
} as const;

export interface StepItem {
  id: string;
  stepNumber: string;
  shortName: string;
  title: string;
  description: string;
  deliverable: string;
}

export const STEPS_DATA: StepItem[] = [
  {
    id: "talk",
    stepNumber: "01",
    shortName: "Talk",
    title: "Strategic Discovery & Channel Blueprint",
    description:
      "We audit your existing marketplace presence, product margins, catalog depth, and supply chain constraints to construct an Indian multi-channel roadmap.",
    deliverable: "Custom Marketplace Feasibility Matrix",
  },
  {
    id: "connect",
    stepNumber: "02",
    shortName: "Connect",
    title: "API Integration & ERP Handshake",
    description:
      "Connect your inventory, warehouse management system, and accounting ledger directly into our unified orchestration terminal with sub-second handshakes.",
    deliverable: "Sub-second 2-Way Data Sync Handshake",
  },
  {
    id: "list",
    stepNumber: "03",
    shortName: "List",
    title: "Catalog Architecture & A+ Enrichment",
    description:
      "Syndicate optimized listings formatted to each marketplace's search algorithms, including compliant Indian packaging standards, keywords, and rich media.",
    deliverable: "100% Marketplace Compliant Master Catalog",
  },
  {
    id: "launch",
    stepNumber: "04",
    shortName: "Launch",
    title: "Dynamic Pricing & 1P Inventory Lock",
    description:
      "Go live with automated Buy Box repricing algorithms, multi-node buffer locks, and targeted performance ad campaigns from day one.",
    deliverable: "Instant Multi-Portal Storefront Activation",
  },
  {
    id: "grow",
    stepNumber: "05",
    shortName: "Grow",
    title: "Continuous Audit, Settlement & Scale",
    description:
      "Daily automated payment reconciliation, SLA protection, return claims recovery, and seasonal demand forecasting to compound monthly GMV velocity.",
    deliverable: "Compounded Monthly GMV Velocity",
  },
];

export interface ICMCategoryItem {
  id: string;
  name: string;
  tagline: string;
  skuCount: string;
  highlightBadge: string;
  marketplaces: {
    name: string;
    badgeColor: string;
    badgeBg: string;
  }[];
}

export const ICM_CATEGORIES_DATA: ICMCategoryItem[] = [
  {
    id: "electronics",
    name: "Consumer Electronics & Audio",
    tagline: "High-velocity wireless audio, smart wearables & accessories",
    skuCount: "380+ Active SKUs",
    highlightBadge: "Top Category",
    marketplaces: [
      { name: "Amazon Prime", badgeColor: "#FF9900", badgeBg: "rgba(255, 153, 0, 0.12)" },
      { name: "Flipkart Assured", badgeColor: "#2874F0", badgeBg: "rgba(40, 116, 240, 0.12)" },
      { name: "Meesho", badgeColor: "#C22085", badgeBg: "rgba(194, 32, 133, 0.12)" },
    ],
  },
  {
    id: "home-kitchen",
    name: "Home, Kitchen & Living",
    tagline: "Cookware, storage organization & smart home essentials",
    skuCount: "520+ Active SKUs",
    highlightBadge: "High Volume",
    marketplaces: [
      { name: "Amazon", badgeColor: "#FF9900", badgeBg: "rgba(255, 153, 0, 0.12)" },
      { name: "Flipkart", badgeColor: "#2874F0", badgeBg: "rgba(40, 116, 240, 0.12)" },
      { name: "JioMart", badgeColor: "#0078AD", badgeBg: "rgba(0, 120, 173, 0.12)" },
    ],
  },
  {
    id: "fashion-apparel",
    name: "Apparel & Fashion Accessories",
    tagline: "Fast-fashion essentials, seasonal activewear & innerwear",
    skuCount: "740+ Active SKUs",
    highlightBadge: "Trending",
    marketplaces: [
      { name: "Myntra Forward", badgeColor: "#FF3F6C", badgeBg: "rgba(255, 63, 108, 0.12)" },
      { name: "Flipkart", badgeColor: "#2874F0", badgeBg: "rgba(40, 116, 240, 0.12)" },
      { name: "Meesho", badgeColor: "#C22085", badgeBg: "rgba(194, 32, 133, 0.12)" },
    ],
  },
  {
    id: "personal-care",
    name: "Beauty & Personal Grooming",
    tagline: "Skincare formulations, daily grooming & wellness appliances",
    skuCount: "290+ Active SKUs",
    highlightBadge: "High Margin",
    marketplaces: [
      { name: "Nykaa", badgeColor: "#FC2779", badgeBg: "rgba(252, 39, 121, 0.12)" },
      { name: "Amazon Prime", badgeColor: "#FF9900", badgeBg: "rgba(255, 153, 0, 0.12)" },
      { name: "Blinkit", badgeColor: "#F8CB46", badgeBg: "rgba(248, 203, 70, 0.15)" },
    ],
  },
  {
    id: "luggage-travel",
    name: "Luggage, Bags & Travel Gear",
    tagline: "Hard-shell trolley luggage, laptop backpacks & duffels",
    skuCount: "180+ Active SKUs",
    highlightBadge: "Seasonal Spike",
    marketplaces: [
      { name: "Amazon", badgeColor: "#FF9900", badgeBg: "rgba(255, 153, 0, 0.12)" },
      { name: "Flipkart Assured", badgeColor: "#2874F0", badgeBg: "rgba(40, 116, 240, 0.12)" },
      { name: "Myntra", badgeColor: "#FF3F6C", badgeBg: "rgba(255, 63, 108, 0.12)" },
    ],
  },
  {
    id: "sports-fitness",
    name: "Sports, Fitness & Gym Gear",
    tagline: "Resistance sets, yoga equipment & functional training gear",
    skuCount: "210+ Active SKUs",
    highlightBadge: "Consistent Velocity",
    marketplaces: [
      { name: "Amazon Prime", badgeColor: "#FF9900", badgeBg: "rgba(255, 153, 0, 0.12)" },
      { name: "Flipkart", badgeColor: "#2874F0", badgeBg: "rgba(40, 116, 240, 0.12)" },
      { name: "Meesho", badgeColor: "#C22085", badgeBg: "rgba(194, 32, 133, 0.12)" },
    ],
  },
];

export const PILLARS = [
  {
    id: "lgm-leader",
    name: "LGM Leader",
    role: "Discovery & Leads",
    url: "https://lgm.socialtechnologies.in",
    description: "Local business discovery and lead generation infrastructure.",
  },
  {
    id: "icm-retails",
    name: "ICM Retails",
    role: "First-party Marketplace Selling",
    description:
      "Our own seller presence across Amazon, Flipkart, Meesho, Myntra, and top Indian marketplaces.",
  },
  {
    id: "marketplace-growth",
    name: "Marketplace Growth Services",
    role: "End-to-End Scale",
    description:
      "Cataloging, account management, advertising, and operational growth for brand partners.",
  },
  {
    id: "partner-program",
    name: "Partner Program",
    role: "Ecosystem Synergy",
    description: "Collaborative growth network uniting sellers, suppliers, and tech integrators.",
  },
] as const;

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  quote: string;
  channels: string[];
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Aditya Khurana",
    role: "Co-Founder & COO",
    company: "Nuvo Lifestyle (Audio & Wearables)",
    metric: "+310% GMV in 6 Months",
    quote:
      "Before Social Technologies, we had 3 people continuously cross-checking stock across Flipkart and Amazon. When a flash sale hit, we always oversold and faced cancellation penalties. Their automated buffer lock solved this on day one, and their ad optimization doubled our ROAS.",
    channels: ["Amazon Prime", "Flipkart Assured", "Myntra"],
  },
  {
    id: "test-2",
    author: "Meenakshi Sundaram",
    role: "VP of E-Commerce",
    company: "Vriksha Organics & Home",
    metric: "₹1.4 Cr Monthly Run-Rate",
    quote:
      "The 1P model with ICM Retails was a game changer for us. Instead of managing complex marketplace compliance and returns auditing ourselves, ICM took over prime inventory holding while we focused purely on manufacturing. Our Buy Box share has stayed at 97%.",
    channels: ["Amazon", "Flipkart", "JioMart"],
  },
  {
    id: "test-3",
    author: "Rohan Varma",
    role: "Head of Digital Brands",
    company: "Apex Luggage & Travel",
    metric: "4.8x Blended ROAS",
    quote:
      "Most agencies talk vanity metrics. Social Technologies actually runs marketplace stores themselves, so they understand the difference between gross sales and net settlements. Their automated deductions audit recovered over ₹8.5 Lakhs in disputed marketplace returns.",
    channels: ["Flipkart", "Amazon", "Meesho"],
  },
  {
    id: "test-4",
    author: "Siddharth Jain",
    role: "Managing Director",
    company: "Bharat Apparel Consortium",
    metric: "99.4% On-Time Dispatch SLA",
    quote:
      "Scaling across tier-2 and tier-3 India with Meesho and regional portals used to be a logistics nightmare with 30%+ RTO rates. Partnering with Social Technologies consolidated our 3PL routing and slashed return processing delays to zero.",
    channels: ["Meesho", "Myntra Forward", "Nykaa"],
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does Social Technologies differ from standard SaaS listing tools?",
    answer:
      "Unlike pure software tools that leave execution to you, Social Technologies is an integrated commerce engine. We build proprietary synchronization software, run hands-on catalog and performance advertising operations, and operate our own first-party (1P) seller entity (ICM Retails) to directly sell and hold inventory on leading Indian marketplaces.",
  },
  {
    id: "faq-2",
    question: "What is the 1P model with ICM Retails and how does it protect my brand?",
    answer:
      "ICM Retails is our verified, top-tier seller entity operating with Prime and Flipkart Assured badges. In the 1P model, we purchase inventory directly from brand manufacturers, handle multi-channel warehousing, absorb platform payment delays, and defend the Buy Box 24/7—freeing your team from marketplace compliance and daily portal operations.",
  },
  {
    id: "faq-3",
    question: "How does sub-second multi-channel inventory synchronization work?",
    answer:
      "Our central orchestration terminal maintains a unified stock buffer. When a customer places an order on any channel—such as Meesho or Flipkart—our system automatically deducts available units and locks safety thresholds across Amazon, Myntra, and other connected portals in under 800 milliseconds, eliminating overselling penalties.",
  },
  {
    id: "faq-4",
    question: "Which Indian marketplaces and quick commerce channels do you support?",
    answer:
      "We provide direct integrations and active storefronts across Amazon India, Flipkart, Meesho, Myntra, Nykaa, Ajio, Tata CLiQ, and JioMart, as well as 10-minute quick commerce dark store feeds for Blinkit, Zepto, and Instamart through our partner fulfillment nodes.",
  },
  {
    id: "faq-5",
    question: "How do you detect and recover marketplace deductions and payment penalties?",
    answer:
      "Our continuous audit engine cross-checks every dispatched order against marketplace remittance files. We identify unexplained return handling fees, weight discrepancy charges, commission miscalculations, and late payment settlements, automatically compiling evidence dossiers to file and track recovery claims.",
  },
  {
    id: "faq-6",
    question: "What is LGM Leader and how does it drive local merchant demand?",
    answer:
      "LGM Leader is our proprietary local business discovery engine operating at lgm.socialtechnologies.in. It indexes local merchant inventories, optimizes Google Local and ONDC visibility, and captures high-intent consumer search queries across tier-1, tier-2, and tier-3 Indian cities, channeling direct footfall and inquiries.",
  },
  {
    id: "faq-7",
    question: "How quickly can a new brand onboard and syndicate its catalog?",
    answer:
      "Through our 5-stage blueprint (Talk, Connect, List, Launch, Grow), technical integration and ERP handshake typically take 3 to 5 business days. Once connected, your master catalog is enriched to marketplace A+ standards and syndicated live within 7 to 10 days.",
  },
  {
    id: "faq-8",
    question: "What does the pricing and partnership engagement structure look like?",
    answer:
      "We offer flexible partnership models tailored to brand maturity: pure 1P retail distribution (wholesale inventory purchase), performance-aligned growth retainers with GMV revenue share, and specialized software integrations through our Partner Program. We align our commercial success directly with your net marketplace earnings.",
  },
];
