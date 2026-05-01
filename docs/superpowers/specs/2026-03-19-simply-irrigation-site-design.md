# Simply Irrigation LLC — Website Design Spec

## Overview

Rebuild the 4 Google Stitch mockups as a Next.js site for Simply Irrigation LLC (Bradenton, FL). Keep the Terra Architectura design system exactly as-is. Rewrite all copy to represent Simply Irrigation's actual services, contact info, and local market. No dark mode.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings) + Work Sans (body) via Google Fonts
- **Icons:** Material Symbols Outlined
- **Deployment:** Static export via `output: 'export'` in next.config.js

## Design System (Terra Architectura)

Preserved from `DESIGN.md` and the stitch mockups. All 4 pages use the same system — mockup 4 (services detail) originally uses Newsreader font and MD3 tokens, but will be normalized to match the shared system below.

- **Colors:** `primary: #2C4027`, `background-light: #F4F1EB`, `surface: #E9E4DA`, `text: #32302E`, `muted: #8C867B`, `accent: #1E3A40`
- **Typography:** Playfair Display (serif) for headings, Work Sans (sans) for body. 0px border-radius on everything.
- **Depth:** Flat-stack — no shadows, tonal layering only
- **Imagery:** Earthy warm filter on all photography
- **Header blur:** `backdrop-blur-sm` with `bg-background-light/95` per DESIGN.md
- **Section dividers:** Color shifts between `#F4F1EB` and `#E9E4DA`, with `border-b border-muted` accepted as a supplementary pattern per mockups
- **Dark mode:** Out of scope

## Navigation (final structure)

- **Logo:** "SIMPLY IRRIGATION" (left)
- **Links:** Home, Solutions, Services, Consultation
- **CTA button:** "Get a Free Quote" (green fill)
- **Mobile:** Hamburger menu — no bottom nav bar (mockup 4's app-style bottom nav is removed)

## Pages (4 total)

### 1. Home (`/`)
**Source mockup:** `code.html` (root)

- **Hero:** Full-screen parallax background image (use `AdobeStock_383312941.jpeg` — full yard sprinklers). "Cultivating Tomorrow" eyebrow, large serif headline, "Get a Free Quote" CTA, scroll indicator.
- **Sustainable Mission section:** Split editorial layout. Rewrite for Fernando's story — honest, reliable service, treats every property as his own. Keep the blockquote treatment.
- **Technical Integration section:** 3 cards showcasing core services (Installation, Repair, Maintenance) with stock photos instead of the drip/controller/valve product shots.
- **Footer:** Business name, real address (810 56th Ave E, Bradenton, FL 34203), real phone (941-538-2593), real email (simplyirrigationllc@gmail.com), nav links, copyright. Replace all placeholder/template data from mockup.

### 2. Solutions (`/solutions`)
**Source mockup:** `stitch_sustainable_growth_prd/code.html`

This is the **overview page** — high-level presentation of services with the editorial split 30/70 layout.

- **Hero title:** Rewritten headline for Simply Irrigation's services
- **Service sections** (split 30/70 layout with sticky sidebar): Cover Simply Irrigation's services with brief descriptions, stock photos, and links to the detail page. Use stock photos instead of expired Google URLs.
- **Case study interstitial:** Repurpose as a testimonial or "Why Choose Us" section with a stock photo background.
- **Footer**

### 3. Consultation (`/consultation`)
**Source mockup:** `stitch_sustainable_growth_prd (2)/code.html`

- **Split-screen layout:** `AdobeStock_1856037653.jpeg` (pipe install hands) on the left, form on the right
- **Form:** Rewrite from "Site Audit" to "Get a Free Quote." Fields: First Name, Last Name, Email, Phone, Message. Single-step form — remove the 3-step progress indicator from the mockup since the simplified fields don't warrant multi-step UX.
- No footer — full-screen split layout as in mockup

### 4. Services Detail (`/services`)
**Source mockup:** `stitch_sustainable_growth_prd (3)/code.html`

This is the **deep-dive page** — detailed breakdowns with specs, process steps, and brands. Distinct from Solutions (overview) because this page provides the full detail.

Rebuilt using the Terra Architectura design system (Playfair Display, 6-color palette, no bottom nav bar). The mockup's Newsreader font and MD3 color tokens are replaced.

- Numbered service breakdowns for Simply Irrigation's actual services
- Real specs: brands (Rain Bird, Hunter), process steps, benefits
- Stock photos replacing expired Google image URLs
- Case study section → repurpose as a local project highlight or testimonial

## Shared Components

- **Header/Nav:** Fixed top, `bg-background-light/95 backdrop-blur-sm`. Logo left, nav links, CTA button right. Mobile hamburger menu.
- **Footer:** Dark green (`#2C4027`) background, business info, nav links, service areas list, copyright. All placeholder data from mockups replaced with real Simply Irrigation info.

## Stock Photo Assignments

| File | Assignment |
|------|-----------|
| `AdobeStock_166031167.jpeg` (sprinkler on lawn) | Solutions page service card |
| `AdobeStock_1856037653.jpeg` (pipe install hands) | Consultation page left panel, installation sections |
| `AdobeStock_289926852.jpeg` (drip landscaping) | Landscaping service section |
| `AdobeStock_368842269.jpeg` (sprinkler repair) | Repair service section |
| `AdobeStock_383312941.jpeg` (full yard sprinklers) | Home hero background |
| `AdobeStock_417858939.jpeg` (close-up spray) | Maintenance section, services detail page |

## Copy Rewrites

All copy rewritten to reflect:
- **Business:** Simply Irrigation LLC, owner Fernando Davila
- **Location:** Bradenton, FL — serving Bradenton, Sarasota, Lakewood Ranch, Palmetto, Manatee County
- **Services:** Irrigation Installation, System Repair, Landscaping, Irrigation Maintenance, Tree Removal
- **Tone:** Professional but approachable. Honest, local, owner-operated. Not corporate/agricultural estate.
- **CTAs:** "Call Now: 941-538-2593" and "Get a Free Quote"
- **Trust signals:** Licensed & Insured, Free Estimates, Rain Bird & Hunter parts, owner-operated

## Contact Info (hardcoded)

- Phone: 941-538-2593
- Email: simplyirrigationllc@gmail.com
- Address: 810 56th Ave E, Bradenton, FL 34203
