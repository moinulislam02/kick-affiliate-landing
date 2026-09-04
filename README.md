# PartnerHub — Shopify Affiliate Marketing SaaS Landing Page

PartnerHub is a modern, high-converting marketing landing page for a Shopify affiliate marketing SaaS product. The application is built using Next.js 14, Tailwind CSS, and Framer Motion.

---

## Tech Stack
- **Framework:** Next.js 14 (App Router), React 18, JavaScript ES6 (no TypeScript)
- **Styling:** Tailwind CSS + CSS modules/custom keyframes
- **Animation:** Framer Motion (for staggered reveals, floating cards, tab crossfades, responsive drawers, and accessible modals) + `react-intersection-observer` (for scroll-triggered activations)

---

## Project Structure
```text
/kick-affiliate
  /app
    /(marketing)
      /page.js            # Main landing page combining all section components
    /layout.js            # Root layout configuring Inter & Outfit Google Fonts
    /globals.css          # Styling rules, custom scrollbars, and keyframes
  /components
    /primitives           # Atomic primitives (<Button>, <Badge>, <Eyebrow>, <StatCounter>, etc.)
    /sections             # The structured landing page section components
```

---

## Local Setup

### 1. Pre-requisites
- Node.js (v18.x or later)
- npm (v9.x or later)

### 2. Install dependencies
Initialize packages using:
```bash
npm install
```

### 3. Running the Development Server
Launch the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Compilation
Generate an optimized production build:
```bash
npm run build
```

To run the compiled production build locally:
```bash
npm run start
```
