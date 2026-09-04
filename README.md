# PartnerHub — Shopify Affiliate Marketing SaaS Landing Page

PartnerHub is a modern, high-converting marketing landing page for a Shopify affiliate marketing SaaS product. The application is built using Next.js 14, Tailwind CSS, Framer Motion, and Mongoose (MongoDB).

---

## Tech Stack
- **Framework:** Next.js 14 (App Router), React 18, JavaScript ES6 (no TypeScript)
- **Styling:** Tailwind CSS + CSS modules/custom keyframes
- **Animation:** Framer Motion (for staggered reveals, floating cards, tab crossfades, responsive drawers, and accessible modals) + `react-intersection-observer` (for scroll-triggered activations)
- **Database:** MongoDB via Mongoose

---

## Project Structure
```text
/kick-affiliate
  /app
    /(marketing)
      /page.js            # Main landing page combining all section components
    /api
      /leads
        /route.js         # Lead submissions (POST) and list getter (GET)
    /layout.js            # Root layout configuring Inter & Outfit Google Fonts
    /globals.css          # Styling rules, custom scrollbars, and keyframes
  /components
    /primitives           # Atomic primitives (<Button>, <Badge>, <Eyebrow>, <StatCounter>, etc.)
    /sections             # The 13 structured landing page section components
  /lib
    /mongodb.js           # Mongoose singleton connection provider
  /models
    /Lead.js              # Lead document Mongoose schema and validations
  /.env.local             # Local environment variables
```

---

## Local Setup

### 1. Pre-requisites
- Node.js (v18.x or later)
- npm (v9.x or later)
- MongoDB instance (local server or remote cluster link like MongoDB Atlas)

### 2. Install dependencies
Initialize packages using:
```bash
npm install
```

### 3. Environment Variables Configuration
Create a `.env.local` file at the root of the project (one is already generated for you with a local development fallback):
```env
MONGODB_URI=mongodb://127.0.0.1:27017/partnerhub
```
Replace the connection string with your active MongoDB URI (e.g., MongoDB Atlas connection string).

### 4. Running the Development Server
Launch the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Compilation
Generate an optimized production build:
```bash
npm run build
```

To run the compiled production build locally:
```bash
npm run start
```

---

## API Documentation

### `POST /api/leads`
Creates a new lead in the database.
- **Payload:**
  ```json
  {
    "name": "Elena Rostova",
    "email": "elena@glowlab.com",
    "storeUrl": "glowlab.myshopify.com",
    "monthlyRevenue": "over_100k"
  }
  ```
- **Validation:** Ensures email follows correct standard regex formatting, names/store urls are non-empty, and monthly revenue conforms to string options: `under_50k`, `50k_100k`, or `over_100k`.

### `GET /api/leads`
Retrieves a list of all lead submissions sorted by newest first.
