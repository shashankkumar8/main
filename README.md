# Shashank Kumar — Systems in Bloom

A personal engineering portfolio built as one standalone HTML page. It brings together a point-cloud companion, a tactile fabric interaction, a generative flower valley, project case studies, and a customisable Semi pet.

## Live portfolio

https://shashank-systems-room.onrender.com

## Visual journey

1. **Point-cloud introduction** — a small procedural Three.js companion named Semi assembles from 4,800 generated particles. The progress ring measures local particle generation, not a remote model download. Pointer movement steers the light and gently turns the particle group.
2. **Selected builds** — MitraCare, SettleGraph 0.6, Rootline Omni and TraceFuse, plus an index of additional public repositories. Project mockups are labelled illustrative, not live product screenshots.
3. **Pull the thread** — a custom canvas-based Verlet fabric study with a portfolio-specific holographic graphic. It can be grabbed and tugged with a pointer or touch.
4. **Flower valley** — an original procedural 2.5D canvas environment with perspective, bloom sprites, depth fog, cursor response and scroll-driven travel. Optional ambient audio is generated with Web Audio; no third-party soundtrack or copied Gladeye engine is used.
5. **About / toolkit** — education, approach and tools shown in the public projects.
6. **Semi capsule ending** — customisable companion with shape, material, colour, mood and follow settings, plus an interactive capsule dispenser.

## Featured projects

| Project | Focus | Source / demo |
|---|---|---|
| MitraCare | Shared elder-care and medication coordination | [Source](https://github.com/shashankkumar8/MitraCare) · [Live app](https://mitracare-api-shashank-k8r3-cfr0.onrender.com) |
| SettleGraph 0.6 | Merchant settlement reconciliation and evidence investigation | [Source](https://github.com/shashankkumar8/SettleGraph) · [Live app](https://settlegraph-frontend-shashank.onrender.com) |
| Rootline Omni | Graph-powered incident investigation with FalkorDB | [Source](https://github.com/shashankkumar8/ROOTLINE-OMNI) |
| TraceFuse | Explainable multi-hop financial-crime pattern investigation | [Source](https://github.com/shashankkumar8/Tracefuse) |

Additional projects linked in the page include RAG AI Agent, ScholarRAG, GraphProbe-X, GuardianShield CLI, BidSentry-E and PHOTON OS '06.

## Technical implementation

- One `index.html`; no build system, package installation or server API required.
- Three.js 0.170.0 loaded from jsDelivr for the point-cloud companion, with a CSS fallback if WebGL/Three.js is unavailable.
- Canvas 2D for the cloth physics and flower valley.
- Web Audio API for user-enabled ambient tones; audio starts muted.
- Google Fonts: DM Sans, DM Mono, DM Serif Display, Space Grotesk and Antonio.
- Responsive CSS, visible focus states, reduced-motion support, and section navigation.

## Run locally

Open `index.html` directly, or start a static server:

```bash
python -m http.server 8080
```

Then open http://127.0.0.1:8080.

## Render Static Site

- Repository: `shashankkumar8/main`
- Branch: `main`
- Build command: `echo "Static portfolio — no build step required"`
- Publish directory: `.`

## Accuracy and boundaries

- The Semi particle scene is generated procedurally. It is not a scan or portrait of a real person.
- The cloth study is an original, simplified 2D Verlet simulation, not the supplied third-party WebGL implementation.
- The flower valley is an original 2.5D canvas recreation of the interaction idea, not the licensed Gladeye scene or its compiled engine.
- MitraCare and SettleGraph have hosted demos. The project preview cards are illustrative dashboard mockups; they are not screenshots of those live systems.
- Rootline Omni and TraceFuse are prototypes built around synthetic data. Their pages do not claim production incident or banking integrations.
- No internships, jobs, client relationships, awards, user counts, revenue or unverified performance metrics are claimed.

## Design references

The supplied prompts and screenshots informed the interaction vocabulary: dot-cloud assembly, a draggable iridescent fabric, a generative night garden, and a warm footer with a small companion customiser. The code, copy, companion art, cloth graphic and valley scene in this repository are independently implemented for Shashank Kumar; reference sites' proprietary code, models, textures, music and logos are not reused.