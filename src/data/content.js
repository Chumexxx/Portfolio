// All portfolio copy and links live here, so updating the site
// (new project, new store link, new skill) never means touching layout code.

import fixproIcon from '../assets/fixpro-icon.webp'
import fixproWorkerIcon from '../assets/fixpro-worker-icon.webp'
import habitMirrorIcon from '../assets/habit-mirror-icon.webp'
import fixproFind from '../assets/fixpro-find-worker-dark.webp'
import fixproProfile from '../assets/fixpro-worker-profile-light.webp'
import fixproChat from '../assets/fixpro-chat-light.webp'
import stashbaseImg from '../assets/stashbase.webp'
import elibraryImg from '../assets/elibrary-api.webp'

export const profile = {
  name: 'Chukwuemeka Obasi',
  shortName: 'Chukwuemeka',
  role: 'Full-Stack & Mobile Engineer',
  location: 'Nigeria · Remote',
  email: 'obasyemeka@gmail.com',
  phone: '+2349030894433',
  phoneDisplay: '(+234) 903 089 4433',
  resume: 'https://drive.google.com/file/d/1EP2s2o8hRZiSUKSmEJOPv7YN53fC5qql/view?usp=drive_link',
  formspree: 'https://formspree.io/f/mgveandz',
  summary:
    'I design, build and ship production software end to end — native-feeling mobile apps on Google Play and the App Store, the web platforms around them, and the APIs, payments, maps and AI integrations that power them.',
  socials: {
    github: 'https://github.com/Chumexxx',
    linkedin: 'https://www.linkedin.com/in/chukwuemekaobasi',
    x: 'https://x.com/Esquire__Daniel',
    instagram: 'https://www.instagram.com/daniel_chukwuemeka_/',
  },
}

export const stats = [
  { value: '3', label: 'Apps live on the stores' },
  { value: 'iOS + Android', label: 'Shipped with Expo & EAS' },
  { value: 'End-to-end', label: 'Mobile, web, API & infra' },
]

export const featured = [
  {
    id: 'fixpro',
    name: 'FixPro',
    tagline: 'Find trusted skilled workers near you',
    icon: fixproIcon,
    accent: '#2f7fd6',
    accentSoft: 'rgba(47, 127, 214, 0.16)',
    kind: 'Two-sided marketplace · 2 mobile apps + web + API',
    description:
      'A marketplace connecting people with vetted local plumbers, electricians, mechanics, welders and more. I built the whole platform: a client app, a separate worker app, a web app with an admin back office, and the shared API behind all of them.',
    highlights: [
      'Map-based search that ranks workers by distance, plus in-app chat',
      'Live location tracking en route and on-site, with check-in / check-out',
      'Paystack checkout and multi-provider worker payouts, switchable at runtime',
      'Worker KYC onboarding with automated ID matching and admin review',
      'Google, Apple & Face ID sign-in, push notifications and OTA updates',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind', 'Google Maps', 'Sentry'],
    screenshots: [
      { src: fixproFind, alt: 'FixPro — Find a worker screen' },
      { src: fixproProfile, alt: 'FixPro — Worker profile screen' },
      { src: fixproChat, alt: 'FixPro — In-app chat screen' },
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
    kind: 'AI mobile app + web companion + API',
    description:
      'Take a selfie, answer 8 lifestyle questions, and meet the version of you your current habits are building. Generative AI renders a photorealistic future face, then a social accountability layer helps you actually change course.',
    highlights: [
      'AI "Future Face": a photorealistic aged portrait with a Now / +20 years reveal',
      'Timeline from 3 months to 20 years, generated on demand and cached',
      'Per-habit impact report with actionable tips and a deterministic fallback',
      '"The Mirror": friends, proof posts, reactions, streaks and partner ratings with voice notes',
      'Step sync from Apple HealthKit & Android Health Connect, plus an AI health coach chat',
    ],
    stack: ['React Native', 'Expo Router', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Gemini', 'OpenAI', 'Cloudinary', 'React'],
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
    description: 'AI-powered content bookmarking platform for saving, organising and rediscovering the content you find across the web.',
    image: stashbaseImg,
    stack: ['React', 'AI', 'Vercel'],
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
    title: 'Mobile apps',
    body: 'Cross-platform iOS & Android apps with React Native and Expo, taken all the way through EAS builds, store review and OTA updates.',
  },
  {
    title: 'Web platforms',
    body: 'Fast, responsive React / Next.js front ends, marketing sites and admin dashboards that share one design language with the app.',
  },
  {
    title: 'APIs & integrations',
    body: 'Typed Node/Express and FastAPI back ends on PostgreSQL, with payments, maps, KYC, email/SMS, push and media storage wired in.',
  },
  {
    title: 'AI features',
    body: 'Production LLM and image-generation features using Gemini and OpenAI, with caching, sensible fallbacks and cost-aware design.',
  },
]

// Icon keys map to react-icons in Stack.jsx
export const skills = [
  { group: 'Mobile', items: ['React Native', 'Expo', 'EAS', 'iOS', 'Android'] },
  { group: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'styled-components'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'C#', '.NET', 'PostgreSQL', 'Sequelize', 'SQLAlchemy', 'MongoDB'] },
  { group: 'AI', items: ['Gemini', 'OpenAI'] },
  { group: 'Cloud & tooling', items: ['Vercel', 'Render', 'Firebase', 'Cloudinary', 'Sentry', 'GitHub Actions', 'Git', 'Jest', 'Vitest', 'Pytest', 'Postman', 'Figma'] },
]
