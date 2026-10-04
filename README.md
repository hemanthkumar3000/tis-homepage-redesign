# Tulas International School — Homepage Redesign

A modern, responsive, animated redesign of the Tulas International School homepage. The project retains TIS’s core educational positioning while presenting it through a premium, conversion-focused digital experience.

## Live Demo

- Live URL: (https://tis-homepage-redesign-alpha.vercel.app/)
- Repository: https://github.com/hemanthkumar3000/tis-homepage-redesign
## Tech Stack

- React 18 with Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Standout Features

- Scroll-triggered reveals using reusable Framer Motion animation components.
- Animated scroll progress indicator using `useScroll` and `useSpring`.
- Desktop-only custom cursor with hover-responsive scale states.
- Responsive navigation with animated mobile menu.
- Controlled enquiry form with validation and demo success feedback.
- Mobile-first layouts tested across mobile, tablet, and desktop widths.
- Semantic HTML, accessible labels, keyboard focus states, and reduced-motion support.

## Local Setup

Clone the repository:

```bash
git clone [https://github.com/your-username/tis-homepage-redesign.git](https://github.com/your-username/tis-homepage-redesign.git)
cd tis-homepage-redesign
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:5173
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
├── components/
│   ├── animation/
│   │   ├── CustomCursor.jsx
│   │   ├── Reveal.jsx
│   │   └── ScrollProgress.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── sections/
│   │   ├── AboutSection.jsx
│   │   ├── AcademicsSection.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── AdmissionsSection.jsx
│   │   ├── CampusLifeSection.jsx
│   │   ├── HeroSection.jsx
│   │   └── SportsSection.jsx
│   └── ui/
│       ├── Button.jsx
│       └── StatCard.jsx
├── data/
│   └── navigation.js
├── App.jsx
├── index.css
└── main.jsx
```

## Architecture Notes

- `components/ui/` contains reusable visual primitives.
- `components/layout/` contains page-level navigation and footer elements.
- `components/sections/` contains the major homepage content sections.
- `components/animation/` contains reusable animation behaviour.
- `data/` separates static content from component rendering logic.
- The custom cursor is restricted to fine-pointer devices and does not appear on touch screens.
- The `Reveal` component respects reduced-motion preferences.

## Brand Note

This is a frontend assessment project inspired by Tulas International School. Educational copy and brand context were adapted from the official TIS website. Replace temporary development images with properly licensed assets before final submission.