# NEXUS · Landing Page

Landing page (CTA) for **NEXUS — Networked Experiential Intelligence & User System**,
an adaptive AI assistant inspired by J.A.R.V.I.S. Project repository:
https://github.com/Bryan-M-Almeida/nexusAI

Live: https://nexus-landing-dun.vercel.app

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build in /dist
```

## Structure

| File | Purpose |
| --- | --- |
| `src/components/HudRings.jsx` | HUD rings in SVG (boot-up + continuous rotation) |
| `src/components/Hero.jsx` | Intro: rings → N.E.X.U.S name → content and CTAs |
| `src/components/NexusWordmark.jsx` | Letter-by-letter animated logo |
| `src/components/About.jsx` | Acronym breakdown |
| `src/components/HowItWorks.jsx` | Form → profile → adaptation flow |
| `src/components/Features.jsx` | Capabilities (memory, APIs, profiles…) |
| `src/components/Profiles.jsx` | Interactive profession profiles demo |
| `src/components/Roadmap.jsx` | Project phases (up to smart home) |
| `src/components/FinalCta.jsx` | Final GitHub CTA |
| `src/i18n/translations.js` | All page copy in English, Portuguese and Spanish |
| `src/i18n/I18nProvider.jsx` | Language state, detection and `useI18n()` hook |
| `src/components/LanguageSwitcher.jsx` | EN · PT · ES toggle in the navbar |
| `src/config.js` | Repository URL |
| `src/index.css` | Palette, typography and all animations |

Intro timing lives in the `TIMELINE` constant in `Hero.jsx`. Visitors with
"reduce motion" enabled see the page in its final state right away.

## Languages

The page is available in English, Portuguese and Spanish. The initial language
is picked from `?lang=en|pt|es` in the URL, then the visitor's last choice,
then the browser language, falling back to English. To add a language, add an
entry to `LANGUAGES` and a matching object to `TRANSLATIONS` in
`src/i18n/translations.js`.

## Deployment

Hosted on Vercel and connected to this repository: every push to `main`
triggers a production deploy.
