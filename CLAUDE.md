# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

SMLC (Sina's Multidimensional Leadership Cube) is a single-page React + TypeScript site that visualizes leadership dynamics on an interactive 3D cube. Users place icons in a 3D space whose axes change meaning depending on the selected analysis level (Personal / Organizational / Societal), and the app maps that position to descriptive examples (personas, companies, countries).

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

**Routing.** `App.tsx` → `routes/AppRouter.tsx` defines all routes inside a shared `<Layout />` (BrowserRouter). Each top-level page is one component directory under `src/components/` (e.g. `assessment/`, `theoretical/`, `hackathon/`, `contact/`). Unknown paths redirect to `/`.

**The cube (`src/components/SMLC/`).** This is the core feature. `SMLCContainer` owns all state — two `IconState` objects (`primaryIcon`, `secondaryIcon`), each holding `{ position: {x,y,z}, active, color, axisType }` — and passes handlers down. It composes three children:
- `ControlPanel` — sliders/inputs that mutate icon position and axis level.
- `CubeVisualization` — the Three.js scene (via `@react-three/fiber` + `@react-three/drei`), rendering the cube, draggable icons, and `AxisLabelsOverlay`.
- `PositionInfoDisplay` — shows the example mapped from the current position.

**Axis semantics are level-dependent.** A cube position `(x,y,z)` means different things per level. `AxisType` (`src/types/axis.types.ts`) enumerates `PERSONAL`/`ORGANIZATIONAL`/`SOCIETAL`; `AXIS_LABELS` and `CUBE_DIMENSIONS` (`src/constants/cube.constants.ts`) hold the per-level axis label strings. Axis ranges are always `-1..1`.

**Position → example mapping (`src/data/`).** Each axis is discretized to `[-1, -0.5, 0, 0.5, 1]`, giving 125 positions per level. `positionMappingGenerator.ts` programmatically generates persona/company/country examples for every combination from the position values; `positionMapping.ts` merges those generated entries with hand-authored overrides via `mergeWithExistingMapping`. Look up examples with `getExamplesByPosition(...)` keyed by `getPositionKey({x,y,z})` (format `"x_y_z"`). When changing example content, check whether it's generated (edit the generator's `determine*Style`/`generate*Example` functions) or a hand-authored override (edit `positionMapping.ts`).

**Scientific grounding.** `.windsurf/rules/scientific-references.md` documents the validated psychological/organizational constructs behind each axis (Hofstede, Higgins regulatory focus, Competing Values Framework, Gelfand tightness-looseness, etc.). `src/data/scientificFoundations.ts` and the `theoretical/` pages surface this. **Preserve the theoretical grounding** when editing axis labels, dimension definitions, or framework copy — the axes are not arbitrary.

## Conventions

- **Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
- **Styling:** Tailwind (`tailwind.config.js`), with a few component-scoped `.css` files (e.g. `ControlPanel.css`). `clsx` + `tailwind-merge` via `src/lib/utils.ts`.
- **Three.js perf:** `vite.config.ts` manually chunks `three`, `three-fiber`, `three-drei`, `vendor`, and `utils` separately; assets are emitted under `assets/{js,img,...}/`. WebGL context options live in `src/utils/webglContext.ts`. Wrap risky 3D rendering in `ErrorBoundary`.

## Deploy

`deploy.template.yaml` targets DigitalOcean App Platform as a static site: build command `./build.sh`, output dir `dist`, Node 20.
