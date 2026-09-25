# Portfolio Project Documentation

## Project overview

This repository contains a pure frontend, single-page developer portfolio for Daniel Rillera. It presents a professional profile, selected projects, technical skills, credentials, downloadable documents, and contact links in a light editorial-style interface. It is intended to be deployed directly to Vercel without an application backend.

The portfolio also includes a dedicated graphic design showroom at `/showroom`, presenting a curated selection from an Elevate Digital Solutions client collection.

The application is currently an in-progress local implementation. This document describes the repository as it exists; proposed enhancements are maintained separately in `plan.md` and `proposal.md`.

## Technology stack

- Next.js 16.3.6 with the App Router
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4
- GSAP and `@gsap/react` for interaction and animation support
- Lenis for smooth scrolling
- Lucide React for icons
- ESLint with the Next.js configuration

## Getting started

### Requirements

- Node.js compatible with Next.js 16
- npm

### Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

### Available commands

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Repository structure

```text
portfolio/
|-- public/
|   |-- certificates.pdf
|   |-- profile.jpeg
|   `-- resume.pdf
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   `-- showroom/
|   |       `-- page.tsx
|   |-- components/
|   |   |-- BentoGrid.tsx
|   |   |-- CertificatesSection.tsx
|   |   |-- Footer.tsx
|   |   |-- HeroSection.tsx
|   |   |-- Icons.tsx
|   |   |-- MagneticButton.tsx
|   |   |-- Navbar.tsx
|   |   |-- ProjectCard.tsx
|   |   |-- SmoothScroll.tsx
|   |   |-- SpotlightCard.tsx
|   |   |-- ShowroomGallery.tsx
|   |   |-- ShowroomPreview.tsx
|   |   `-- TechStackSection.tsx
|   |-- data/
|   |   `-- portfolioData.ts
|   `-- types/
|       `-- portfolio.ts
|-- next.config.ts
|-- package.json
`-- tsconfig.json
```

## Application architecture

`src/app/layout.tsx` defines global metadata, Geist fonts, viewport settings, and the shared page shell. `src/app/page.tsx` composes the portfolio from the smooth-scroll wrapper, navigation, Bento grid content, and footer.

The portfolio uses local TypeScript data and static assets. It does not require a database, custom API, server action, authentication system, CMS, or server-side contact processing. Contact actions should remain direct links such as email and approved external profiles.

The UI is split into focused components:

- `Navbar` provides desktop and mobile navigation plus a contact action.
- `HeroSection` displays the profile, availability, location, live local time, résumé and certificate downloads, social links, and primary calls to action.
- `BentoGrid` assembles the hero, projects, skills, and certificate sections.
- `ProjectCard` renders each project with its technology list and external link.
- `ShowroomPreview` introduces the graphic design discipline on the home page.
- `ShowroomGallery` provides client-side category filters and an accessible enlarged design viewer.
- `TechStackSection` groups skills by engineering discipline.
- `CertificatesSection` lists credentials and links to the certificate PDF.
- `Footer` provides contact and social actions.
- `SmoothScroll`, `MagneticButton`, and `SpotlightCard` provide interaction behavior and visual effects.

## Content model

Portfolio content is centralized in `src/data/portfolioData.ts` and typed by `src/types/portfolio.ts`.

The exported data collections are:

- `PROFILE_DATA`: identity, role, biography, availability, statistics, location, timezone, and social links.
- `PROJECTS_DATA`: project descriptions, categories, technologies, featured status, live URLs, metrics, and mockup type.
- `SKILL_CATEGORIES`: grouped skills with proficiency labels and featured status.
- `CERTIFICATES_DATA`: credential metadata, issuing organizations, dates, skills, and verification links.
- `GRAPHIC_DESIGNS`: curated artwork metadata, categories, descriptions, alternative text, optimized image paths, and original source references.

Update these data objects before editing presentation components when changing portfolio content.

## Styling and design

Global styles live in `src/app/globals.css`. The current visual system uses:

- A light slate background and white cards
- Indigo as the primary accent color
- Geist Sans and Geist Mono
- Grid and dot background utilities
- Custom scrollbars and selection colors
- Responsive Tailwind utility classes within components
- Lenis-managed smooth scrolling

## Static assets

- `/profile.jpeg` is the profile image.
- `/resume.pdf` is the downloadable résumé.
- `/certificates.pdf` is the certificate document linked by the credentials section.
- `/showroom/*.webp` contains optimized derivatives used by the public design gallery.

The original 2000×2000 PNG artwork remains locally in `graphics/`. These source files are ignored by Git and are not deployed; the optimized derivatives in `public/showroom/` are committed and served to visitors.

Files in `public/` are served from the site root, so component links should use paths such as `/resume.pdf`.

## Current routes and anchors

The project exposes two statically prerendered routes:

- `/` for the main portfolio
- `/showroom` for the graphic design collection

Home-page navigation uses these anchors:

- `#projects`
- `#skills`
- `#credentials`
- `#contact`

## Configuration

`next.config.ts` currently uses the default configuration without project-specific options. TypeScript path aliases use `@/` for imports rooted in `src/`.

## Deployment model

The target platform is Vercel. The project should remain a frontend-only deployment with portfolio content stored in the repository. Enhancements must not introduce a database or custom backend service. Before deployment, run `npm run lint` and `npm run build`, then verify static assets and external links in the Vercel preview deployment.

## Current validation status

As of September 25, 2026, `npm run lint` completes without errors or warnings. `npm run build` also completes successfully, with `/` and `/showroom` prerendered as static routes.

The works interface now uses optimized screenshots captured from matching public project pages instead of generic fictional UI. The Attendance Monitoring System is the featured workforce platform and uses `https://attendacev2.xandree.com`. Wedding RSVP uses its owner-approved public landing screen from `https://rsvp-indol.vercel.app/`. Sketchpad uses the owner-confirmed URL at `http://72.62.254.60:9000/`.

## Known content items requiring confirmation

- The public email is `danrilllera.va@gmail.com`, and the GitHub link points to `https://github.com/Dane-22/dante.git`. LinkedIn and X still require confirmation.
- The profile name in the data file and the name in page metadata are inconsistent.
- Project descriptions, technologies, metrics, and URLs should be verified by the portfolio owner.
- The consolidated Attendance Monitoring System uses the owner-confirmed `https://attendacev2.xandree.com` spelling.
- Accessibility, performance, responsive behavior, and external links still require a formal review.

## Maintenance notes

- Keep content data separate from presentation logic.
- Keep the application frontend-only and compatible with direct Vercel deployment.
- Prefer repository-managed data and static assets over a CMS or database.
- Run lint and a production build before merging changes.
- Confirm downloadable documents do not expose information that should remain private.
- Update this document when routes, dependencies, commands, or content structures change.
- Consult the repository's `AGENTS.md` and the installed Next.js documentation before changing application code because this Next.js version may differ from older conventions.
