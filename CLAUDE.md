# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for FlowTech aerodynamic wind tunnel (ADT) company. Three design variants (A/B/C) for client review, sharing i18n, theming, and base components via a pnpm monorepo.

## Architecture

- `site/` — Production v1 site (frozen, DO NOT modify). Uses npm, not pnpm.
- `packages/shared/` — Shared i18n, theme system, base components, fonts/assets
- `packages/variant-a/` — Evolutionary redesign (cloned from current site, TypeScript)
- `packages/variant-b/` — Moderate departure (borrows core DNA, more changes)
- `packages/variant-c/` — Different approach

`site/` is excluded from the pnpm workspace. Only `packages/*` are workspace members.

## Commands

```
pnpm install                  # Install all workspace dependencies
pnpm dev:a                    # Variant A dev server (port 3001)
pnpm dev:b                    # Variant B dev server (port 3002)
pnpm dev:c                    # Variant C dev server (port 3003)
pnpm build:all                # Build all variants
pnpm typecheck                # TypeScript check across all packages
pnpm lint                     # ESLint across all packages
pnpm site:dev                 # Run original v1 site (uses npm internally)
```

## Tech Stack

- React 18, Vite 5, Tailwind CSS 3, TypeScript 5.4+
- i18next + react-i18next for internationalization
- pnpm workspaces
- No build step for shared package (consumed as source by Vite)

## Shared Package Usage

```tsx
// i18n — import once in main.tsx as side-effect
import '@flowtech/shared/i18n'

// Theme provider — wrap App
import { ThemeProvider, useTheme } from '@flowtech/shared/theme'

// Components
import { Button, LanguageSwitcher, ThemeToggle } from '@flowtech/shared/components'

// CSS — import in variant's index.css BEFORE tailwind directives
// @import '@flowtech/shared/assets/fonts.css';
// @import '@flowtech/shared/theme/tokens.css';
```

## i18n

- Three languages: Russian (default), English, Chinese
- Namespaces: common, hero, about, product, schools, news, contacts
- Translations in `packages/shared/i18n/locales/{ru,en,zh}/`
- Usage: `const { t } = useTranslation('hero')` then `t('title')`

## Theming

- CSS custom properties in `packages/shared/theme/tokens.css`
- Light/dark toggle via `.dark` class on `<html>` (Tailwind `darkMode: 'class'`)
- Semantic Tailwind classes: `bg-bg-primary`, `text-text-primary`, `text-text-muted`, etc.
- Legacy aliases still work: `bg-main`, `from-gd0`, `border-border`, etc.

## Conventions

- All v2 code is TypeScript (.ts/.tsx). site/ remains .jsx (frozen).
- Components: PascalCase folders with matching .tsx file (e.g., `Header/Header.tsx`)
- All new text content must use i18n `t()` calls, never hardcoded strings
- Tailwind shared via preset pattern — variants extend `packages/shared/theme/tailwind-preset.ts`
- Brand assets in shared, variant-specific images in each variant's `public/assets/`
- Content is in Russian with English and Chinese translations to be completed
