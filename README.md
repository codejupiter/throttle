# Throttle

**A modern, CMS-driven dealership site for powersports.**

Built as a reference implementation for what a 2026-era powersports dealership site should feel like — fast, mobile-first, conversion-focused, and editable by a non-technical dealer marketing team via a headless CMS.

---

## Why this exists

Most powersports dealer sites are slow, ugly, and built on recycled templates from a decade ago. They convert poorly and they're a nightmare to keep current with floor inventory. Throttle is the opposite: a bold, design-led, conversion-optimized inventory site backed by a clean content layer that a dealer's team can manage themselves.

A study in what the customer-facing surface of a modern dealership stack should look like — paired naturally with whatever CRM, credit-app, and payment infrastructure sits behind it.

## What it has

- **Bold hero** with marquee notice bar, animated stats, and category-driven CTAs
- **Featured inventory** carousel surfaced from CMS-flagged units
- **Live inventory grid** with search, category filters, and status badges (in-stock / incoming)
- **Vehicle detail modal** with specs, estimated monthly payment, and lead capture
- **Lead capture form** modeled on a real-world credit-app pre-qual flow
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
- Connect the lead-capture form to a real credit-app webhook
- Server-rendered vehicle detail pages for SEO
- Inventory feed import from a DMS

---

Built by [Zoriah Cocio](https://github.com/codejupiter) — info@zoriahcocio.com
