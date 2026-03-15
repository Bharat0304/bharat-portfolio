This document provides detailed instructions on how to maintain, use, and install the key UI components within the sleek portfolio.

## 🛠 Project Stack
- **Framework**: Next.js 16 (Turbopack)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Monorepo**: Turborepo

## 🚀 Navigation & Bar Components

### 1. Floating Navbar (`FloatingNav`)
A high-end bottom-docked navigation pill that anchors the user experience.
- **Source**: `packages/ui/src/components/ui/floating-navbar.tsx`
- **Installation**: These are part of the `@workspace/ui` library.
- **How to Use**:
  Pass your navigation links to the `navItems` prop. You can also pass children to append extra elements (like Search or Socials) to the dock.
  ```tsx
  <FloatingNav navItems={navItems}>
    <Search />
  </FloatingNav>
  ```

### 2. Search Component (`Search`)
A minimalist, animated search bar built specifically for this portfolio.
- **Source**: `apps/web/components/Search.tsx`
- **Installation**: 
  Requires `lucide-react` for icons.
- **How to Use**:
  The component is designed to expand horizontally when focused (`w-40` to `w-64`), making it space-efficient.

---

## 3. Theme Switcher (`ThemeSwitcher`)

A sleek toggle for switching between Light, Dark, and System appearance.

### Installation
Located in `apps/web/components/theme-switcher.tsx`.

### Features
- **Haptic/Sound Feedback**: Integrates `use-sound` for a premium feel.
- **Magnetic Animation**: Smooth spring-based transitions between options.

---

## 4. Design System (Tailwind 4 + Shadcn)

This project uses **Tailwind 4** and is structured to allow sharing UI components across the workspace.

### Key Configuration
- **Global CSS**: `@import "tailwindcss";` and `@source` directives are used in `apps/web/app/global.css` to ensure all workspace components are correctly styled.
- **Consistency**: Components use curated colors like `zinc` and `neutral` for a premium, muted aesthetic.
