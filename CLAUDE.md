# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

sinaghazi.com is a single-page React + TypeScript personal hub built around the SMLC (Sina's Multidimensional Leadership Cube). The core idea: a **person**, a **business**, and a **society** are all positioned on the *same* three dimensions (Agency / Mode / Orientation, each −1..1), so the distance between any two of them is a meaningful "fit" (alignment) or "friction" reading. The homepage is one narrative scroll — story → idea (the cube) → proof (testimonials) → työ (the product CTA).

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b (typecheck, project refs) then vite build → dist/
npm run preview   # serve the production build locally
npm run clean     # rimraf dist
./build.sh        # full CI-style build: clean, install, build, copy public/* into dist, verify
node verify-build.js   # assert dist/ contains index.html and assets/
```

There is **no test runner and no `lint` script** wired into package.json. ESLint is configured (`eslint.config.js`) but must be invoked directly (`npx eslint .`). `tsc -b` during `build` is the primary correctness gate — TypeScript runs in `strict` mode with `noUnusedLocals` and `noUnusedParameters`, so unused symbols break the build.

## Architecture

**Routing.** `App.tsx` → `routes/AppRouter.tsx` defines all routes inside a shared `<Layout />` (BrowserRouter): `/` (HomePage, composed from `components/home/*` sections), `/story`, `/explanation` (the SMLC deep-dive), `/work`, `/contact`. Unknown paths redirect to `/`. Each page sets its own head tags via `components/seo/Seo.tsx` (react-helmet-async); `index.html` carries only static homepage fallbacks for no-JS scrapers — do not add description/canonical there.

**The shared dimensions (`src/constants/dimensions.ts`).** The single source of truth for the model. `DIMENSIONS` names the axes (x = Agency, y = Mode, z = Orientation; sign convention locked: + = self-directed / analytical / bold cluster). `POLES` gives level-appropriate pole words per entity kind (person / business / society); `AXIS_ENDS` gives the generic cross-level glosses used inside the 3D cube; `ENTITY_LABEL` / `ENTITY_COLOR` brand the three kinds. **Scientific grounding:** society x follows Hofstede individualism–collectivism, society y follows Trompenaars universalism–particularism (rule-based vs relationship-based), z maps to Higgins' regulatory focus / openness-to-change; person y is Kahneman dual-process. The "note on honesty" in `SMLCExplanation.tsx` states these citations — keep poles, placements, and that note consistent when editing any of them.

**The cube (`src/components/SMLC/`).** `SMLCContainer` owns all state: a `Stack` (`types.ts`) = person + optional business + optional society, each an `EntityState { kind, position, active }`. Two modes: *explore* (one stack) and *compare* (two stacks side by side), plus presets (`SINA`, `FINLAND`, `IRAN` constants must mirror the hand-placed positions in `data/positionMapping.ts`). Children:
- `ControlPanel` — per-entity sliders (step 0.5, so values are always in {−1, −0.5, 0, 0.5, 1}).
- `CubeVisualization` — the Three.js scene (`@react-three/fiber` + drei): 2×2×2 wireframe cube, one marker per active entity (sphere/box/cone), drei `<Line>` fit-lines between every pair, axis-end labels from `AXIS_ENDS`. The `<Canvas>` is wrapped in `ErrorBoundary` with a text fallback — keep it that way; a WebGL failure must not take down the homepage.
- `PositionInfoDisplay` — per-entity profile card via `getPositionInsight`.
- `FitDisplay` — pairwise fit cards via `computeFit`.

**The fit engine (`src/components/SMLC/fit.ts`).** `computeFit(aKind, aPos, bKind, bPos)` returns per-axis gaps (0..2), Euclidean `friction` (0..√12), `similarity = 1 − friction/√12`, and a generated headline naming the widest-gap axis using kind-specific pole words.

**Examples (`src/data/positionMapping.ts`).** `EXAMPLES` holds ~13 hand-placed real-world examples per entity kind — positions are judgment calls anchored to the cited research; tune coordinates there. For any position, `profileFor` computes a magnitude-aware text profile ("Strongly …" at ±1, "Leans …" at ±0.5) and `nearestExample` finds the closest example by Euclidean distance (`getPositionInsight` combines both, flagging exact matches). There is no pre-generated position dictionary.

## Conventions

- **Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
- **Styling:** Tailwind (`tailwind.config.js`); `clsx` + `tailwind-merge` via `src/lib/utils.ts`. Design system ("coordinates", Swiss/technical): cool ink-on-paper neutrals mapped over the `stone` token name, electric cobalt `accent`, acid-lime `signal` (dark surfaces only), near-sharp `borderRadius` overrides, hairline borders. Fonts: Inter body, Space Grotesk `font-display`, JetBrains Mono `font-mono` for uppercase micro-labels/kickers (the recurring `font-mono text-xs uppercase tracking-[0.25em]` kicker pattern).
- **Three.js perf:** `vite.config.ts` manually chunks `three`, `three-fiber`, `three-drei`, `vendor`, and `utils` (npm utility packages) separately; assets are emitted under `assets/{js,img,...}/`.

## Deploy

`deploy.template.yaml` targets DigitalOcean App Platform as a static site: build command `./build.sh`, output dir `dist`, Node 20. Fathom analytics is loaded from `index.html`.
