// All portfolio copy and links live here, so updating the site
// (new project, new store link, new skill) never means touching layout code.

import fixproIcon from '../assets/fixpro-icon.webp'
import fixproWorkerIcon from '../assets/fixpro-worker-icon.webp'
import habitMirrorIcon from '../assets/habit-mirror-icon.webp'
import fixproFind from '../assets/fixpro-find-worker-dark.webp'
import fixproProfile from '../assets/fixpro-worker-profile-light.webp'
import fixproChat from '../assets/fixpro-chat-light.webp'
import habitHome from '../assets/habit-mirror-home.webp'
import habitMirror from '../assets/habit-mirror-mirror.webp'
import habitInvite from '../assets/habit-mirror-invite.webp'
import stashbaseImg from '../assets/stashbase.webp'
import elibraryImg from '../assets/elibrary-api.webp'

export const profile = {
  name: 'Chukwuemeka Obasi',
  shortName: 'Chukwuemeka',
  role: 'Backend-Focused Software Engineer',
  location: 'Lagos, Nigeria · Remote',
  email: 'obasyemeka@gmail.com',
  phone: '+2348132988927',
  phoneDisplay: '(+234) 813 298 8927',
  resume: 'https://drive.google.com/file/d/1dRv1hWo8QsOVvSXA2_qjHfBNyOn-TsBp/view?usp=drive_link',
  formspree: 'https://formspree.io/f/mgveandz',
  summary:
    'I’m a full-stack engineer who lives on the server side. I design APIs, data models, payment flows and the failure handling around them. I’m also a hands-on React Native engineer who ships and maintains production iOS and Android apps.',
  socials: {
    github: 'https://github.com/Chumexxx',
    linkedin: 'https://www.linkedin.com/in/chukwuemekaobasi',
    x: 'https://x.com/Esquire__Daniel',
    instagram: 'https://www.instagram.com/daniel_chukwuemeka_/',
  },
}

export const stats = [
  { value: '129', label: 'Secure endpoints on one analytics back end' },
  { value: '4', label: 'Backend stacks: Node, .NET, Python, Java' },
  { value: '3', label: 'Production apps live on iOS & Android' },
]

export const experience = [
  {
    company: 'FixPro',
    role: 'Full-Stack & Mobile Engineer (Backend-led)',
    period: 'Jul 2026 — Present',
    location: 'Production marketplace',
    link: 'https://fixpro.com.ng',
    points: [
      'Architected the Node.js/TypeScript/PostgreSQL platform behind a web app and two React Native apps, live with real users and real money moving through it.',
      'Designed payments and payouts around provider failure: multiple providers behind one interface with failover, escrow released on job completion, and admin dispute resolution.',
      'Built audit logging from scratch (severity levels, credential-sanitising writes, exportable admin views) and closed a production KYC access-control gap, with regression tests to keep it closed.',
      'Own the mobile release pipeline: EAS builds and store submissions for iOS and Android, OTA updates and push notifications, plus splitting one codebase into separate client and worker apps.',
    ],
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'React Native', 'Expo', 'EAS'],
  },
  {
    company: 'Habit Mirror',
    role: 'Full-Stack & Mobile Engineer (Backend-led)',
    period: 'Jul 2026 — Present',
    location: 'AI consumer app',
    link: 'https://habbitmirror.com',
    points: [
      'Own a FastAPI/PostgreSQL back end (SQLAlchemy, Alembic) that serves the mobile app and website from a single API contract.',
      'Recovered a live outage caused by a table created outside Alembic’s version tracking. Restored service with targeted SQL, then added a live-schema guard to the migration pipeline.',
      'Designed a dual-rail subscription system (Paystack on web; RevenueCat, StoreKit and Play Billing on mobile) behind one access gate, with a self-healing endpoint that re-verifies state against the provider so a missed webhook can’t lock out a paying user.',
      'Root-caused a native crash-on-launch with adb logcat, shipped an OTA mitigation the same day, then a permanent fix gated on the installed binary’s native version.',
      'Vetted the Meta and TikTok attribution SDKs and fixed three bugs in the vendor packages themselves, including an Expo config-plugin chain and a native Android compile error, before they reached production.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React Native', 'Expo', 'RevenueCat'],
  },
  {
    company: 'P+ Measurement Services',
    role: 'Backend Engineer (Node.js)',
    period: 'Jul 2025 — Jun 2026',
    location: 'Analytics platform',
    points: [
      'Architected an analytics back end with 129 secure endpoints on Node.js/Express and PostgreSQL, turning raw measurement data into real-time reports.',
      'Tuned the Sequelize data model with targeted indexing and query optimisation, improving retrieval performance by 40%.',
      'Built JWT and role-based access control plus aggregation and reporting features that cut manual reporting by ~50 hours a week.',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
  },
  {
    company: 'Fliq Tech',
    role: '.NET / C# Backend Engineer',
    period: 'Jan 2025 — Jul 2025',
    location: 'UK · Remote',
    points: [
      'Shipped 16 ASP.NET Core endpoints that expanded the mobile app’s core features, contributing to a 22% rise in monthly active users.',
      'Used EF Core and Dapper data-access patterns to cut API response times by 30% and database load by 25%.',
      'Built JWT auth middleware with GDPR in mind, reached 85% test coverage with xUnit/Moq, and cut release time from 2 days to 4 hours with Azure DevOps CI/CD.',
    ],
    stack: ['C#', 'ASP.NET Core', 'EF Core', 'Dapper', 'Azure DevOps'],
  },
]

export const featured = [
  {
    id: 'fixpro',
    name: 'FixPro',
    tagline: 'Find trusted skilled workers near you',
    icon: fixproIcon,
    accent: '#2f7fd6',
    accentSoft: 'rgba(47, 127, 214, 0.16)',
    kind: 'Two-sided marketplace · API + web + 2 mobile apps',
    description:
      'A marketplace connecting people with vetted local plumbers, electricians, mechanics, welders and more. I architected the back end every surface runs on (payments, payouts, KYC, audit trail, real-time tracking) and shipped the web app and both mobile apps on top of it.',
    highlights: [
      'Layered Node.js/TypeScript API (routes → services → repositories) on PostgreSQL with versioned migrations',
      'Payment and payout providers behind shared interfaces with failover, escrow and runtime switching, so no redeploy is needed',
      'Audit-logging system with severity levels and credential sanitising, so secrets never leak into admin views',
      'KYC pipeline with automated ID matching, admin review and verified-only access gates',
      'Live location tracking, time-based billing and push notifications, all backed by a test-first suite',
      'Two purpose-built React Native apps (client and worker) with maps, chat, biometrics, OTA updates and store releases on both platforms',
    ],
    stack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Sequelize', 'Vitest', 'Sentry', 'React Native', 'Expo', 'React'],
    screenshots: [
      { src: fixproFind, alt: 'FixPro app, Find a worker screen' },
      { src: fixproProfile, alt: 'FixPro app, Worker profile screen' },
      { src: fixproChat, alt: 'FixPro app, in-app chat screen' },
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vertexcraftcapital.fixpro',
      appStore: 'https://apps.apple.com/us/app/fixpro/id6799252413',
      website: 'https://fixpro.com.ng',
    },
    companion: {
      name: 'FixPro Worker',
      icon: fixproWorkerIcon,
      blurb: 'The companion app workers use to accept jobs, get paid and manage bookings.',
      playStore: 'https://play.google.com/store/apps/details?id=com.vertexcraftcapital.fixproworker',
    },
  },
  {
    id: 'habit-mirror',
    name: 'Habit Mirror',
    tagline: 'See yourself in 20 years',
    icon: habitMirrorIcon,
    accent: '#E5A93C',
    accentSoft: 'rgba(229, 169, 60, 0.16)',
    kind: 'AI mobile app · API + web + mobile',
    description:
      'Take a selfie, answer 8 lifestyle questions, and meet the version of you your current habits are building. Behind it is a FastAPI service that orchestrates generative-AI image and text models, then powers a social accountability layer on top.',
    highlights: [
      'Async FastAPI + PostgreSQL service (SQLAlchemy 2, asyncpg, Alembic) as the single contract for app and web',
      'AI pipeline with Gemini image generation and LLM reports, caching per time horizon and deterministic fallbacks',
      'Social graph with friend codes, proof posts, reactions, streaks and partner ratings with voice notes',
      'Dual-rail subscriptions (Paystack for web; RevenueCat, StoreKit and Play Billing for mobile) behind one gate, with server-side re-verification',
      'Expo Router app with camera, HealthKit / Health Connect, push and deep-link invites, plus native-version-gated OTA fixes',
      'Hardened Alembic migrations with a live-schema guard, learned from a real production incident',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Gemini', 'OpenAI', 'RevenueCat', 'React Native', 'Expo Router', 'HealthKit'],
    screenshots: [
      { src: habitHome, alt: 'Habit Mirror app, Meet your future self home screen' },
      { src: habitMirror, alt: 'Habit Mirror app, The Mirror accountability screen' },
      { src: habitInvite, alt: 'Habit Mirror app, Invite a friend screen' },
    ],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.vertexcraftcapital.habbitmirror',
      appStore: 'https://apps.apple.com/us/app/habit-mirror/id6799549235',
      website: 'https://habbitmirror.com',
    },
  },
]

export const moreProjects = [
  {
    name: 'Stashbase',
    description:
      'Back end for an AI content-bookmarking platform: 30+ secured endpoints (Argon2, refresh-token rotation), semantic search with Cohere embeddings on pgvector, a resurfacing engine, and SSE + FCM notifications.',
    image: stashbaseImg,
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'pgvector', 'Claude', 'SSE'],
    links: { website: 'https://stashbase-one.vercel.app/login' },
  },
  {
    name: 'E-Library API',
    description: 'A reliable server-side REST API with the schemas a modern e-library application needs. Built with ASP.NET Core on the .NET stack.',
    image: elibraryImg,
    stack: ['C#', 'ASP.NET Core', 'SQL', 'Swagger'],
    links: { github: 'https://github.com/Chumexxx/.NET-E-Library-API' },
  },
]

export const services = [
  {
    title: 'APIs & system design',
    body: 'REST APIs, data models and service boundaries in Node.js, .NET, Python or Java, designed for clear contracts and room to grow.',
  },
  {
    title: 'Data & performance',
    body: 'PostgreSQL schema design, indexing, query tuning, caching and migrations that don’t take production down.',
  },
  {
    title: 'Payments, auth & integrations',
    body: 'Payment and subscription flows with failover and reconciliation, JWT/OAuth with RBAC, KYC, email/SMS, push and AI services, built to fail safely.',
  },
  {
    title: 'Mobile apps',
    body: 'Cross-platform iOS and Android apps in React Native and Expo: maps, camera, health data, biometrics, deep links and native SDK integrations.',
  },
  {
    title: 'Release engineering',
    body: 'EAS builds, App Store and Play Console submissions, OTA updates, push notifications and on-device debugging when production breaks.',
  },
  {
    title: 'Web front ends',
    body: 'React web apps, admin dashboards and marketing sites that share one API contract with the mobile apps.',
  },
]

// Backend groups come first on purpose, with mobile right behind. Icons are mapped in Stack.jsx.
export const skills = [
  { group: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'C#', 'ASP.NET Core', 'Python', 'FastAPI', 'Java', 'Spring Boot'] },
  { group: 'Data', items: ['PostgreSQL', 'pgvector', 'MySQL', 'MongoDB', 'Sequelize', 'Entity Framework', 'SQLAlchemy'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'EAS', 'iOS', 'Android', 'Firebase', 'RevenueCat'] },
  { group: 'APIs & security', items: ['REST', 'GraphQL', 'JWT', 'OAuth', 'Swagger', 'Postman'] },
  { group: 'DevOps & testing', items: ['Docker', 'GitHub Actions', 'Azure DevOps', 'Jenkins', 'Render', 'Vercel', 'Sentry', 'Vitest', 'Jest', 'xUnit', 'JUnit', 'Pytest'] },
  { group: 'AI', items: ['Claude', 'Gemini', 'OpenAI', 'Cohere'] },
  { group: 'Web', items: ['React', 'Next.js', 'Tailwind CSS', 'styled-components'] },
]
