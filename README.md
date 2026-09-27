# Chukwuemeka Obasi — Portfolio

Personal portfolio of Chukwuemeka Obasi, full-stack & mobile engineer. It showcases shipped products such as **FixPro** and **Habit Mirror**, with direct Google Play, App Store and web links.

Built with React 18, Vite and styled-components. It's a single page with a dark/light theme and a responsive layout down to 320px.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Updating content

All copy, links and project data live in **`src/data/content.js`**:

| What | Where |
| --- | --- |
| Name, role, email, phone, résumé link, socials | `profile` |
| Hero stat strip | `stats` |
| Featured apps (store links, highlights, stack, screenshots) | `featured` |
| Smaller project cards | `moreProjects` |
| "What I do" cards | `services` |
| Tech stack groups | `skills` (icons are mapped in `src/components/Stack.jsx`) |

To add a project image, drop an optimised `.webp` into `src/assets/`, import it at the top of `content.js`, and reference it.

## Structure

```
src/
  components/   Nav, Hero, Work, Services, Stack, Contact, Footer, ui (shared primitives)
  data/         content.js (all site content), socials.js
  hooks/        useTheme (dark/light toggle, persisted)
  styles/       GlobalStyle (design tokens for both themes)
  assets/       optimised images (webp)
public/         favicon, apple-touch-icon, og-image
```

The contact form posts to Formspree (`profile.formspree`).
