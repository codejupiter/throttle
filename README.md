# Throttle

**A modern, CMS-driven dealership site for powersports.**

Built as a reference implementation for what a 2026-era powersports dealership site should feel like — fast, mobile-first, conversion-focused, and editable by a non-technical dealer marketing team via a headless CMS.

---

## Why this exists

Most powersports dealer sites are ugly, slow, and built on the same recycled WordPress templates from 2015. They convert poorly and are a nightmare to update. Throttle is the opposite: a bold, design-led, conversion-optimized inventory site backed by a clean content layer that a dealer can manage themselves.

It's a deliberate showcase of what platforms like [Revvable](https://www.revvable.com) could ship as a managed-website offering — a customer-facing front-end that pairs naturally with their CRM, credit app, and payment infrastructure.

## What it has

- **Bold hero** with marquee notice bar, animated stats, and category-driven CTAs
- **Featured inventory** carousel surfaced from CMS-flagged units
- **Live inventory grid** with search, category filters, and live status badges
- **Vehicle detail modal** with specs, estimated monthly payment, and lead capture
- **Lead capture form** modeled on Revvable's credit-app flow
- **Trust section**, testimonials, footer with hours/location, motion accents

## Stack

- **React 18** + Next.js-ready architecture
- **Tailwind CSS** with custom utility classes
- **Lucide React** for iconography
- **Bebas Neue + Space Grotesk + JetBrains Mono** type stack
- **Headless CMS pattern** — all content lives in structured arrays modeled on Sanity / Contentful schemas

## CMS architecture

The demo uses three structured data sources:

\`\`\`js
CMS_INVENTORY     // vehicles with id, category, make, model, specs, status, featured
CMS_CATEGORIES    // category slugs for navigation/filters
CMS_TESTIMONIALS  // customer quotes
\`\`\`

In production these would be replaced with a real CMS query — the data shape is intentional, so swapping the static array for a live fetch is a one-line change.

## What's next

- Wire up to a real Sanity / Contentful / Hygraph project
- Connect the lead-capture form to Revvable's credit-app webhook
- Server-rendered vehicle detail pages for SEO
- Inventory feed import from Lightspeed DMS

---

Built by [Zoriah Cocio](https://github.com/codejupiter) — info@zoriahcocio.com
