# Shashank Kumar — Build / Design / Ship

A personal software-engineering portfolio built as a single-page, horizontally navigated experience. It uses a dark editorial identity, lime mosaic transitions, project case studies, a contrasting light About panel and a customisable companion named Semi.

## Live portfolio

https://shashank-systems-room.onrender.com

## How to navigate

The site is intentionally **horizontal**, not a vertically scrolling portfolio. Visitors can move between the eight full-screen panels with:

- Mouse wheel or trackpad gesture.
- Horizontal touch swipe on mobile.
- Left/right arrow keys, Home and End keys.
- The fixed top navigation or bottom section controller.

Each transition uses a staggered lime tile wipe. The page remains one viewport wide and high; long project details are presented in a dialog, and Semi's settings drawer scrolls independently when needed.

## What is included

1. **Home** — Shashank's introduction, education context and original dotted monogram artwork.
2. **Build** — a short Build / Design / Explore / Ship philosophy.
3. **Work** — four featured projects with selectable preview scenes and detailed case-study dialogs.
4. **Project index** — additional public repositories.
5. **About** — education, project interests and engineering principles.
6. **Journey** — learning and project-building themes without fabricated employment history.
7. **Skills** — technologies represented across the repositories.
8. **Contact** — verified public GitHub links and the interactive Semi capsule machine.

### Semi companion

Semi is a custom SVG character, not an external pet widget. Visitors can select:

- Shape: round, clover, flower or square.
- Material: fabric, glass, glow or plastic.
- Seven named colours.
- Mood: idle, working, sleeping or surprise.
- Pointer-follow on/off, surprise and reset.

The capsule dispenser triggers a small mechanical animation and gives Semi a new shape, colour and mood. Preferences are saved only in local browser storage. Semi does not need an account, network API or analytics service.

## Featured projects

| Project | What it explores | Source |
|---|---|---|
| **MitraCare** | Patient-first elder-care coordination, medication routines, appointments and care-circle access | https://github.com/shashankkumar8/MitraCare |
| **SettleGraph 0.6** | Merchant settlement reconciliation, financial evidence and human-led exception investigation | https://github.com/shashankkumar8/SettleGraph |
| **Rootline Omni** | FalkorDB-powered graph incident investigation, evidence ranking and isolated graph simulations | https://github.com/shashankkumar8/ROOTLINE-OMNI |
| **TraceFuse** | Explainable multi-hop financial-pattern investigation | https://github.com/shashankkumar8/Tracefuse |

The repository index also links ScholarRAG, GraphProbe-X, RAG AI Agent, GuardianShield CLI, BidSentry-E and PHOTON OS '06.

## Honesty and boundaries

- The feature dashboard previews are **illustrative UI compositions**, not live product screenshots, production telemetry or benchmark results. The page labels them “Illustrative UI”.
- Project datasets are synthetic where the individual repository documents say so. Project limitations are described in their case-study dialogs.
- There are no invented job titles, internships, clients, awards, users, revenue, performance claims or testimonials.
- The page uses an abstract “S” monogram rather than an unprovided personal photograph.
- The Contact panel links to the public GitHub profile. No unverified email address, LinkedIn URL or résumé file is published.
- No particle-portrait model, cloth simulation or third-party flower-valley engine is included. Semi is the one custom character experience, keeping the portfolio visually coherent and lightweight.

## Technology and delivery

- Single-file HTML, CSS and vanilla JavaScript; no runtime framework or build step.
- CSS transforms and a small event-driven controller for horizontal navigation and transitions.
- Inline SVG for the brand, Semi and small interface artwork.
- Google Fonts for DM Sans, DM Mono, Space Grotesk and DM Serif Display, with local system fallbacks.
- Local storage for the theme and Semi preferences only.
- No third-party animation engine, GLB model, analytics, backend API or external image dependency.

## Run locally

Open `index.html` directly, or serve the folder with Python:

```bash
python -m http.server 8080
```

Open http://localhost:8080.

## Deploy on Render

- Service: Static Site
- Repository: `shashankkumar8/main`
- Branch: `main`
- Build command: `echo "No build step required"`
- Publish directory: `.`

## One Who Codes 2026 — judging alignment

The supplied challenge brief lists the following weights. The implementation is designed around those criteria, without claiming a guaranteed rank:

| Criterion | Weight | Portfolio evidence |
|---|---:|---|
| Creativity | 30% | Original visual identity, horizontally navigated experience, tile transition system and Semi companion |
| Craft | 30% | Consistent typography, project-specific preview layouts, responsive panel composition, dialogs and interactive states |
| Content | 20% | Education and project summaries grounded in public repositories; prototype limitations are stated |
| Performance & accessibility | 20% | No runtime framework or 3D engine, no document scrolling, keyboard/touch navigation, visible focus, semantic controls and reduced-motion support |

The supplied rules permit AI tools, but reward the participant's own contribution and GitHub development history. The entry requirements also call for a ONEWHO address, an application link ending in `/a/unstop`, and the public source repository submitted through Unstop. Those account actions are not performed by this website.

## Quality checks performed

The inline JavaScript passed `node --check`. The HTML was parsed and checked for duplicate IDs. A headless Chromium interaction pass checked navigation, the project selector, project dialog, Semi settings and persistence, theme switching, wheel/keyboard/touch navigation, the capsule dispenser and mobile navigation. The document and panel inner areas were checked at 1600×900, 1280×720, 768×1024, 390×844, 375×667 and 360×640; no document-level scroll or panel-content overflow was found at those viewports.

A formal Lighthouse run, WCAG certification and assistive-technology audit have not been performed, so no scores or certification are claimed.