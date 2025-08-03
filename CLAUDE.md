# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application that simulates The Sims mood tracking system across different game versions (Sims 1-4). Users can adjust mood sliders and see their values displayed in the visual style of each Sims game.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Core Structure
- **Next.js 15.3.5** with App Router in TypeScript
- **React 19** with client-side components
- **Tailwind CSS 4** for styling
- Path alias `@/*` maps to `./src/*`

### Component Organization
```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page with mood sliders
│   └── globals.css     # Global styles
└── components/
    ├── MoodSlider.tsx  # Reusable slider component
    ├── sims1/          # Sims 1 specific components
    ├── sims2/          # Sims 2 specific components  
    ├── sims3/          # Sims 3 specific components
    ├── sims4/          # Sims 4 specific components
    └── styles/         # Game-specific CSS files
```

### Key Patterns
- Each Sims version has its own component folder with `SimsXNeeds.tsx` and `SimsXNeedBar.tsx`
- Mood state is managed at the top level (`page.tsx:13-15`) and passed down
- Game version switching controlled by state variable (`page.tsx:16`)
- Each game version uses custom CSS for authentic visual styling

### Assets Structure
Static assets in `public/assets/` organized by game version:
- `simsX/logo.png` - Game logos for version selector
- `sims4/icons/` - Individual mood icons (bladder, energy, fun, etc.)
- Background images and game-specific illustrations

### State Management
- Simple React useState for mood values (8 moods: hunger, energy, comfort, fun, hygiene, social, bladder, room)
- Game version selection state controls which visual representation displays
- No external state management library used