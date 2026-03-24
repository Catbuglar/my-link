# GEMINI.md - MyLink Project Guide

This file provides the instructional context for Gemini CLI to support the development of the MyLink project.

## 1. Project Overview
**MyLink** is a service that allows developers and creators to aggregate their major links (GitHub, blog, portfolio, etc.) into a single micro-landing page for easy sharing.

### Core Values
- **Simplicity**: Exclude unnecessary features (image uploads, theme changes, etc.) and focus on essentials.
- **Intuitiveness**: Direct **Inline Editing** on the screen without separate forms.
- **Automation**: Automatically display icons for registered links using the Google Favicon API.

### Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Backend/Auth**: Firebase (Google Social Login), Firestore (NoSQL)
- **Icons**: @tabler/icons-react
- **Language**: TypeScript

---

## 2. Building and Running
Commands should be executed within the `@my-link-app/` directory.

- **Install Dependencies**: `npm install`
- **Local Development**: `npm run dev` (using Turbopack)
- **Build Project**: `npm run build`
- **Lint Check**: `npm run lint`
- **Format Code**: `npm run format` (Prettier)
- **Type Check**: `npm run typecheck`

---

## 3. Development Conventions

### UI/UX Principles
- **shadcn/ui Based**: Utilize shadcn/ui components as much as possible for a consistent design system.
- **Mobile First**: Ensure all screens provide an optimal experience on mobile devices.
- **Inline Editing**: Text should toggle to `Input` or `Textarea` for immediate editing in admin mode.

### Data Structure (Firestore)
- **User Document**: Includes `displayName` and `bio`. `displayName` serves as the URL Slug.
- **Links Sub-collection**: Managed as `users/{userId}/links/{linkId}`.

### Coding Style
- **Components**: Place reusable UI components in the `@my-link-app/components/` directory.
- **Logic**: Separate UI and logic using the `@my-link-app/hooks/` or `@my-link-app/lib/` directories when necessary.
- **Icons**: Use `@tabler/icons-react` as the default icon library.

---

## 4. Key Paths and Files
- `@docs/`: PRD, User Scenarios, Wireframes
- `@my-link-app/app/`: Next.js App Router pages and layouts
- `@my-link-app/components/ui/`: shadcn/ui components
- `@my-link-app/lib/utils.ts`: Common utilities (e.g., tailwind-merge)

---
*Last Updated: 2026-03-24*
