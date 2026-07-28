import { IMAGES } from '@/constants/images';

export type Company = {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  status: 'operating' | 'future';
  image: string;
  description: string;
  services: string[];
  strengths: string[];
  accent: string;
};

export const COMPANIES: Company[] = [
  {
    id: 'productions',
    name: 'Nexira Productions',
    tagline: 'Stories told with intention.',
    industry: 'Film, Broadcast & Visual Storytelling',
    status: 'operating',
    image: IMAGES.ecosystem.productionsA,
    description:
      'A full-service production house creating documentaries, branded films, and broadcast content that captures the spirit of South Sudan and the wider region — for audiences at home and abroad.',
    services: ['Documentary & branded film', 'Broadcast production', 'Post-production & editing', 'Creative direction'],
    strengths: ['Authentic regional narratives', 'In-house crew & equipment', 'Pan-African distribution reach'],
    accent: '#BFA07A',
  },
  {
    id: 'media',
    name: 'Nexira Media',
    tagline: 'A voice for what is being built.',
    industry: 'Media, Publishing & Digital Content',
    status: 'operating',
    image: IMAGES.ecosystem.mediaA,
    description:
      'A modern media platform producing journalism, analysis, and digital content that elevates underrepresented stories and builds an informed public across South Sudan.',
    services: ['Editorial & journalism', 'Digital publishing', 'Brand & corporate media', 'Audience strategy'],
    strengths: ['Independent editorial standards', 'Multi-platform distribution', 'Trusted regional network'],
    accent: '#8FA28A',
  },
  {
    id: 'farms',
    name: 'Nexira Farms',
    tagline: 'From soil to sustenance.',
    industry: 'Agriculture & Agri-Business',
    status: 'operating',
    image: IMAGES.ecosystem.farmsA,
    description:
      'An agribusiness developing productive, sustainable farmland that strengthens food security, creates rural employment, and supplies local and regional markets.',
    services: ['Commercial crop production', 'Supply & distribution', 'Agronomy & training', 'Community partnerships'],
    strengths: ['Food security focus', 'Climate-aware practices', 'Local market integration'],
    accent: '#8FA28A',
  },
  {
    id: 'horizon',
    name: 'Horizon Seekers',
    tagline: 'See the country differently.',
    industry: 'Tourism, Travel & Hospitality',
    status: 'operating',
    image: IMAGES.ecosystem.horizonA,
    description:
      'A tourism and hospitality brand opening South Sudan to the world — curating journeys that reveal its landscapes, wildlife, and cultures with care and respect.',
    services: ['Curated expeditions', 'Hospitality partnerships', 'Cultural tours', 'Destination marketing'],
    strengths: ['Responsible travel ethos', 'Local guide network', 'Emerging destination expertise'],
    accent: '#C5D2E2',
  },
  {
    id: 'events',
    name: 'Nexira Events',
    tagline: 'Gatherings that move people.',
    industry: 'Conferences, Events & Experiences',
    status: 'operating',
    image: IMAGES.ecosystem.eventsA,
    description:
      'An events company designing conferences, summits, and cultural experiences that bring together leaders, communities, and partners to shape what comes next.',
    services: ['Conference & summit design', 'Cultural events', 'Corporate experiences', 'Production & logistics'],
    strengths: ['End-to-end production', 'High-profile convening', 'Cross-sector partnerships'],
    accent: '#BFA07A',
  },
];

export const FUTURE_VENTURES: Company[] = [
  {
    id: 'technologies',
    name: 'Nexira Technologies',
    tagline: 'Building the digital foundations of a young nation.',
    industry: 'Technology & Digital Infrastructure',
    status: 'future',
    image: IMAGES.future.tech,
    description:
      'A technology venture building digital infrastructure, platforms, and services that serve a fast-growing, mobile-first population — and the businesses that serve them.',
    services: ['Digital platforms', 'Enterprise software', 'Connectivity & infrastructure', 'Talent development'],
    strengths: ['Youth-first market', 'Leapfrog opportunity', 'Regional scale potential'],
    accent: '#556780',
  },
  {
    id: 'logistics',
    name: 'Nexira Logistics',
    tagline: 'Connecting production to possibility.',
    industry: 'Logistics, Transport & Supply Chain',
    status: 'future',
    image: IMAGES.future.logisticsA,
    description:
      'A logistics company developing the transport, warehousing, and supply-chain backbone that allows commerce to move efficiently across South Sudan and its neighbours.',
    services: ['Freight & transport', 'Warehousing & storage', 'Cross-border supply chain', 'Last-mile delivery'],
    strengths: ['Strategic corridor access', 'Trade-enabling infrastructure', 'Regional connectivity'],
    accent: '#8FA28A',
  },
  {
    id: 'foundation',
    name: 'Nexira Foundation',
    tagline: 'Returning value to the communities we grow with.',
    industry: 'Social Impact & Community Development',
    status: 'future',
    image: IMAGES.future.foundationA,
    description:
      'A foundation channelling the success of the group into education, youth opportunity, and community resilience — ensuring growth reaches the people who make it possible.',
    services: ['Education & scholarships', 'Youth programmes', 'Community investment', 'Partnership grants'],
    strengths: ['Group-wide impact reach', 'Long-term commitment', 'Measurable outcomes'],
    accent: '#BFA07A',
  },
  {
    id: 'energy',
    name: 'Nexira Energy',
    tagline: 'Powering growth that does not cost the future.',
    industry: 'Energy & Renewables',
    status: 'future',
    image: IMAGES.future.energyA,
    description:
      'An energy venture developing renewable and distributed power solutions that bring reliable, affordable energy to businesses, communities, and underserved regions.',
    services: ['Solar & hybrid generation', 'Distributed power', 'Energy services', 'Off-grid solutions'],
    strengths: ['Renewable-first approach', 'Underserved-market focus', 'Scalable models'],
    accent: '#C5D2E2',
  },
  {
    id: 'properties',
    name: 'Nexira Properties',
    tagline: 'Spaces where the future takes shape.',
    industry: 'Real Estate & Development',
    status: 'future',
    image: IMAGES.future.properties,
    description:
      'A property development company creating the commercial, residential, and mixed-use spaces that a growing capital and its businesses will need for decades to come.',
    services: ['Commercial development', 'Mixed-use projects', 'Property management', 'Urban planning partnerships'],
    strengths: ['Capital-city positioning', 'Long-horizon development', 'Partnership-ready'],
    accent: '#556780',
  },
];

export type Project = {
  id: string;
  title: string;
  industry: string;
  image: string;
  overview: string;
  objectives: string[];
  impact: string;
  results: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: 'nile-agri',
    title: 'Nile Basin Agriculture Initiative',
    industry: 'Agriculture & Food Security',
    image: IMAGES.projects.harbor,
    overview:
      'A multi-season programme developing productive farmland along South Sudan\u2019s river belt — combining modern agronomy, local labour, and direct market access to build a reliable domestic food supply.',
    objectives: [
      'Establish productive acreage across multiple growing seasons',
      'Train and employ local farming communities',
      'Build direct supply lines to urban markets',
    ],
    impact:
      'The initiative strengthened regional food security, created stable rural employment, and demonstrated that domestic production can meaningfully substitute for imports.',
    results: [
      { label: 'Hectares developed', value: '480+' },
      { label: 'Local jobs created', value: '120' },
      { label: 'Seasons operating', value: '6' },
    ],
  },
  {
    id: 'horizon-launch',
    title: 'Horizon Seekers — Destination Launch',
    industry: 'Tourism & Hospitality',
    image: IMAGES.projects.elephants,
    overview:
      'The founding programme of Horizon Seekers — positioning South Sudan as a credible, responsible destination for curated travel, built around wildlife, landscape, and cultural heritage.',
    objectives: [
      'Establish a responsible-tourism operating standard',
      'Build a network of trained local guides',
      'Launch destination marketing to regional and international travellers',
    ],
    impact:
      'The programme opened a new category of opportunity for the country — generating visibility, foreign interest, and local income while preserving the ecosystems at its centre.',
    results: [
      { label: 'Curated expeditions', value: '35+' },
      { label: 'Guides trained', value: '24' },
      { label: 'International reach', value: '14 countries' },
    ],
  },
  {
    id: 'media-platform',
    title: 'Nexira Media — Platform Build',
    industry: 'Media & Digital',
    image: IMAGES.projects.communityGarden,
    overview:
      'The launch of Nexira Media\u2019s digital publishing platform — a multi-channel operation producing original journalism and analysis for a fast-growing, mobile-first audience.',
    objectives: [
      'Build a multi-platform publishing operation',
      'Establish independent editorial standards',
      'Reach audiences across mobile and social channels',
    ],
    impact:
      'The platform gave South Sudan a new, independent editorial voice — elevating stories that had been underrepresented and building an engaged, informed readership.',
    results: [
      { label: 'Original stories published', value: '200+' },
      { label: 'Monthly readers', value: '45K' },
      { label: 'Platforms live', value: '4' },
    ],
  },
];

export type Insight = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const INSIGHTS: Insight[] = [
  {
    id: 'south-sudan-opportunity',
    category: 'Perspective',
    title: 'Why South Sudan Is the Opportunity the World Is Missing',
    excerpt:
      'A young population, vast arable land, and an economy being built from the ground up. The case for long-term investment in one of Africa\u2019s most overlooked markets.',
    date: 'March 2025',
    readTime: '6 min read',
    image: IMAGES.insights.team,
    featured: true,
  },
  {
    id: 'agri-security',
    category: 'Agriculture',
    title: 'Food Security Begins With Trust in the Soil',
    excerpt:
      'How domestic agriculture is quietly becoming the foundation of a more resilient South Sudanese economy.',
    date: 'February 2025',
    readTime: '4 min read',
    image: IMAGES.insights.charts,
  },
  {
    id: 'media-voice',
    category: 'Media',
    title: 'A New Editorial Voice for a New Generation',
    excerpt:
      'The launch of Nexira Media and the responsibility of building independent journalism in a young nation.',
    date: 'January 2025',
    readTime: '5 min read',
    image: IMAGES.insights.graphs,
  },
  {
    id: 'partnership-model',
    category: 'Partnerships',
    title: 'How We Choose the Partners We Build With',
    excerpt:
      'Our framework for evaluating partnerships, joint ventures, and investment — and what we look for beyond the term sheet.',
    date: 'December 2024',
    readTime: '7 min read',
    image: IMAGES.story.meeting,
  },
];

export type ImpactMetric = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
};

export const IMPACT_METRICS: ImpactMetric[] = [
  { label: 'Operating companies', value: 5, suffix: '+', description: 'Distinct businesses across production, media, agriculture, tourism, and events.' },
  { label: 'Future ventures', value: 5, suffix: '', description: 'Companies in development across technology, logistics, energy, property, and social impact.' },
  { label: 'Local jobs supported', value: 340, suffix: '+', description: 'Direct and indirect employment across the group\u2019s operating businesses.' },
  { label: 'Sectors represented', value: 10, suffix: '', description: 'Industries the group is active in or actively developing for the future.' },
];

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: 'Foundation',
    title: 'A holding company is born in Juba',
    body: 'Nexira Enterprises Ltd is established with a single conviction: that South Sudan\u2019s next chapter will be written by its own businesses, built to last.',
  },
  {
    year: 'Year One',
    title: 'Building the first companies',
    body: 'Nexira Productions and Nexira Media are founded to tell the country\u2019s stories — on screen and in print — and to build an informed, connected public.',
  },
  {
    year: 'Expansion',
    title: 'Into land, travel, and gatherings',
    body: 'Nexira Farms, Horizon Seekers, and Nexira Events join the group, extending its reach into agriculture, tourism, and the convening of people and ideas.',
  },
  {
    year: 'Today',
    title: 'A diversified, operating group',
    body: 'Five companies operate across the economy — each independent, each connected, each contributing to a more resilient, self-sustaining national story.',
  },
  {
    year: 'Tomorrow',
    title: 'Building the next decade',
    body: 'Five future ventures — technology, logistics, foundation, energy, and properties — take shape, designed for the country South Sudan is becoming.',
  },
];

export type Opportunity = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'partnerships',
    title: 'Business Partnerships',
    summary: 'Co-build operating businesses with us — sharing capital, capability, and conviction.',
    detail: 'We partner with established operators and emerging founders who see what we see in South Sudan, and who want to build something that outlasts a single cycle.',
    icon: 'Handshake',
  },
  {
    id: 'investment',
    title: 'Investment Opportunities',
    summary: 'Back the growth of a diversified, long-horizon group and its ventures.',
    detail: 'We work with investors who think in decades, not quarters — and who understand that the most meaningful returns in a young market are built patiently, with discipline.',
    icon: 'TrendingUp',
  },
  {
    id: 'joint-ventures',
    title: 'Joint Ventures',
    summary: 'Combine strengths to enter new sectors or scale existing ones.',
    detail: 'Where a partner brings capability, market access, or technology, we bring local knowledge, operating businesses, and a long-term commitment to the country.',
    icon: 'Layers',
  },
  {
    id: 'corporate-services',
    title: 'Corporate Services',
    summary: 'Engage our companies for production, media, events, and agri-services.',
    detail: 'Governments, NGOs, and corporate clients work with Nexira\u2019s operating businesses for projects that require local reach, regional credibility, and high standards.',
    icon: 'Briefcase',
  },
  {
    id: 'development',
    title: 'Development Projects',
    summary: 'Collaborate on initiatives that build capacity, livelihoods, and infrastructure.',
    detail: 'We partner with development organisations on programmes where private-sector discipline and local presence can multiply impact and sustainability.',
    icon: 'Sprout',
  },
  {
    id: 'collaborations',
    title: 'Strategic Collaborations',
    summary: 'Shape the ecosystem through long-term, mission-aligned alliances.',
    detail: 'For institutions and organisations whose goals align with ours, we build durable collaborations that extend the reach and the effect of both sides.',
    icon: 'Compass',
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Our Story', href: '#story' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Impact', href: '#impact' },
  { label: 'Future', href: '#future' },
  { label: 'Connect', href: '#connect' },
];

// @/constants/data.ts — CONTACT block
// Updated with details provided by Conison Technologies (18/07/2026):
//   Domain:  nexiraenterprises.com
//   Email:   info@nexiraenterprises.com
//   Phone:   +211 925 576 720 (South Sudan)

export const CONTACT = {
  office: 'Juba, South Sudan',
  address: 'Nexira Enterprises Ltd, Juba, Central Equatoria, South Sudan',
  domain: 'nexiraenterprises.com',
  website: 'https://www.nexiraenterprises.com',
  email: 'info@nexiraenterprises.com',
  phone: '+211 925 576 720',
  whatsapp: '+211 925 576 720', // add this line
  mapsQuery: 'Juba, South Sudan',
};

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nexira-enterprises' },
  { label: 'Email', href: 'mailto:info@nexiraenterprises.com' },
  { label: 'WhatsApp', href: 'https://wa.me/211925576720' },
];

export const HERO_STATS = [
  { value: 5, suffix: '+', label: 'Operating Companies' },
  { value: 5, suffix: '', label: 'Future Ventures' },
  { value: 100, suffix: '%', label: 'South Sudan Rooted' },
];
