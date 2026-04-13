# 🌌 Anti-Gravity Portfolio — Dev Log

## Session: 2026-04-13 (Day 1)

### ✅ ما تم إنجازه اليوم

---

#### Phase 0: Foundation (100% ✅)
تم بناء البنية التحتية الكاملة للـ WebGL layer:

| File | Purpose | Status |
|------|---------|--------|
| `vite.config.js` | Added `vite-plugin-glsl` + TresJS template compiler | ✅ |
| `src/main.js` | Registered Pinia + all GSAP plugins | ✅ |
| `src/stores/webgl.js` | Pinia store: scroll, mouse, camera, particles, quality | ✅ |
| `src/stores/ui.js` | Pinia store: menu, intro, project detail, cursor, loading | ✅ |
| `src/App.vue` | 4-layer architecture: WebGL → Intro → Content → UI overlays | ✅ |

**New Dependencies:**
- `@tresjs/core`, `@tresjs/cientos`, `@tresjs/post-processing`
- `three`, `pinia`, `vite-plugin-glsl`

---

#### Phase 1: Scene Orchestration (100% ✅)

| File | Purpose | Status |
|------|---------|--------|
| `src/composables/useCameraRig.js` | CatmullRom spline path, scroll → camera position, mouse parallax | ✅ |
| `src/composables/useHyperScroll.js` | Scroll normalization (0→1), velocity tracking, mouse tracking → store | ✅ |
| `src/composables/useSceneOrchestrator.js` | Section state machine (hero/about/projects/contact) | ✅ |
| `src/components/webgl/CameraController.vue` | TresJS camera on spline + dynamic FOV breathing | ✅ |

---

#### Phase 2: Visual Layers (100% ✅)

| File | Purpose | Status |
|------|---------|--------|
| `src/components/webgl/WebGLCanvas.vue` | Persistent full-viewport TresCanvas (fixed, z-index: 0) | ✅ |
| `src/components/webgl/SceneEnvironment.vue` | Multi-light setup + fog + mouse-following point light | ✅ |
| `src/components/webgl/CosmicDust.vue` | **3-layer system**: nebulae blobs + 45 particles + 200 star points | ✅ |
| `src/components/webgl/FloatingGeometry.vue` | 4 wireframe crystals + 3 thin rings (very low opacity ghost shapes) | ✅ |
| `src/components/webgl/FloatingProjects.vue` | 6 orbital wireframe cards (fade in at Projects section) | ✅ |
| `src/components/webgl/EnergyCore.vue` | Pulsing sphere + 3 orbiting rings (fade in at Contact section) | ✅ |

**GLSL Shaders Created:**
| File | Purpose |
|------|---------|
| `src/shaders/simulation.frag.glsl` | FBO particle physics (curl noise, cursor, morph) |
| `src/shaders/velocity.frag.glsl` | Velocity simulation buffer |
| `src/shaders/particles.vert.glsl` | Particle render vertex (FBO lookup + size attenuation) |
| `src/shaders/particles.frag.glsl` | Particle render fragment (glow + speed coloring) |
| `src/shaders/morphDisplacement.vert.glsl` | Object melting/morphing transitions |
| `src/shaders/morphDisplacement.frag.glsl` | Displacement coloring + dissolve |

---

#### Phase 3: Post-Processing & UI (100% ✅)

| File | Purpose | Status |
|------|---------|--------|
| `src/components/webgl/PostProcessing.vue` | Bloom (selective, high threshold) + Vignette (scroll-reactive) | ✅ |
| `src/components/CustomCursor.vue` | 3-layer cursor: dot + ring + glow (mix-blend-mode: difference) | ✅ |
| `src/components/ScrollProgress.vue` | Side progress bar with section dots + labels on hover | ✅ |
| `src/components/Navbar.vue` | **Updated**: glassmorphism bg + audio toggle button | ✅ |

---

#### Phase 4: Integration (100% ✅)

| Change | Details |
|--------|---------|
| `Landing.vue` | Background: `ag-section--clear` (fully transparent) |
| `About.vue` | Background: `rgba(255,255,255,0.92)` with backdrop-filter |
| `featuredProjects.vue` | Background: `ag-section` (semi-transparent) + card glassmorphism |
| `Contact.vue` | Background: `ag-section` (semi-transparent) |
| `Footer.vue` | Background: `ag-section` |
| `Projects.vue` | Background: `ag-section` |
| `ProjectDetails.vue` | Background: `ag-section` |
| `Intro.vue` | Background: `var(--bg-solid)` |
| `style.css` | New CSS variables: `--bg-solid`, `--bg-transparent`, `--bg-glass`, `--glow-*` |
| `style.css` | New utility classes: `.ag-section`, `.ag-glass`, `.ag-glow`, `.ag-section--clear` |
| `style.css` | `prefers-reduced-motion` kills WebGL canvas entirely |

---

#### Composables Created

| File | Purpose |
|------|---------|
| `src/composables/useAudioReactive.js` | Web Audio API oscillator drone + frequency analysis → store |
| `src/composables/useRaycastInteraction.js` | Three.js Raycaster + GSAP Flip for 3D → HTML transitions |
| `src/composables/useParticleFormations.js` | DataTexture generators: galaxy, sphere, torus, core, scatter, text |

---

### 🏗️ Architecture Diagram

```
App.vue
├── LAYER 0: WebGLCanvas.vue (position: fixed, z-index: 0)
│   ├── CameraController.vue (spline + FOV breathing)
│   ├── SceneEnvironment.vue (lights + fog)
│   ├── CosmicDust.vue (nebulae + particles + stars)
│   ├── FloatingGeometry.vue (wireframe shapes + rings)
│   ├── FloatingProjects.vue (orbital cards, visible in Projects section)
│   ├── EnergyCore.vue (pulsing sphere, visible in Contact section)
│   └── PostProcessing.vue (Bloom + Vignette)
├── LAYER 1: Intro.vue (overlay, fades out)
├── LAYER 2: Content Layer (smooth-wrapper)
│   └── router-view (Home, Projects, ProjectDetails)
│       ├── Landing.vue (transparent bg → particles visible)
│       ├── About.vue (92% white glass)
│       ├── featuredProjects.vue (dark glass + card glass)
│       ├── Contact.vue (dark glass)
│       └── Footer.vue (dark glass)
├── LAYER 3: ScrollProgress.vue (fixed right side)
└── LAYER 4: CustomCursor.vue (z-index: 9999)
```

---

### ❌ Known Issues

1. **FBO Particles not used yet** — `FBOParticles.vue` and `SimpleParticles.vue` exist but aren't imported in the current WebGLCanvas. These are ready for Phase 2 FBO upgrade.
2. **Three.js bundle size** — 1.29MB JS bundle. Need code splitting with `manualChunks`.
3. **Unused SectionTransition.vue** — Created then removed from Home.vue, file still exists.
4. **Navbar audio toggle** — The `computed` property pattern needs testing. May need to be reactive ref.
5. **Camera spline points** — Current control points are generic. Need to be tuned to match actual section heights.

---

### 📋 TODO بكرة (Day 2)

#### Priority 1: Visual Refinement
- [ ] Tune camera spline control points to match real section scroll positions
- [ ] Tune CosmicDust particle colors/sizes/positions for perfect look
- [ ] Tune FloatingGeometry opacity and placement
- [ ] Test and refine PostProcessing bloom/vignette values
- [ ] Fix any console errors from Navbar audio composable

#### Priority 2: FBO Particle Upgrade
- [ ] Replace CosmicDust stars layer with proper FBO particle GPU system
- [ ] Wire FBO particles to section formations (galaxy → sphere → torus → core)
- [ ] Add cursor repulsion/attraction to FBO particles
- [ ] Add scroll-velocity curl noise turbulence

#### Priority 3: Interaction Polish
- [ ] Test and wire GSAP Flip transitions (3D card → HTML detail panel)
- [ ] Add hover glow effect on FloatingProjects cards
- [ ] Wire CustomCursor hover state to 3D raycasting
- [ ] Add subtle audio reactivity to CosmicDust/EnergyCore

#### Priority 4: Performance
- [ ] Add Three.js code splitting (`build.rollupOptions.output.manualChunks`)
- [ ] Lazy-load WebGL components
- [ ] Add FPS counter in dev mode
- [ ] Test on mobile (should see no WebGL, clean fallback)
- [ ] Lighthouse audit (target 90+)

#### Priority 5: Cleanup
- [ ] Delete unused files: `SectionTransition.vue`, `SimpleParticles.vue`
- [ ] Clean up old FBO shader files if not using
- [ ] Final commit and merge to main

---

### 📁 New Files Created Today

```
src/
├── stores/
│   ├── webgl.js                  (NEW)
│   └── ui.js                     (NEW)
├── composables/
│   ├── useCameraRig.js           (NEW)
│   ├── useHyperScroll.js         (NEW)
│   ├── useSceneOrchestrator.js   (NEW)
│   ├── useParticleFormations.js  (NEW)
│   ├── useAudioReactive.js       (NEW)
│   └── useRaycastInteraction.js  (NEW)
├── components/
│   ├── webgl/
│   │   ├── WebGLCanvas.vue       (NEW)
│   │   ├── CameraController.vue  (NEW)
│   │   ├── SceneEnvironment.vue  (NEW)
│   │   ├── CosmicDust.vue        (NEW)
│   │   ├── FloatingGeometry.vue  (NEW)
│   │   ├── FloatingProjects.vue  (NEW)
│   │   ├── EnergyCore.vue        (NEW)
│   │   ├── PostProcessing.vue    (NEW)
│   │   ├── FBOParticles.vue      (NEW - unused, ready for upgrade)
│   │   └── SimpleParticles.vue   (NEW - unused fallback)
│   ├── CustomCursor.vue          (NEW)
│   ├── ScrollProgress.vue        (NEW)
│   └── SectionTransition.vue     (NEW - unused)
├── shaders/
│   ├── simulation.frag.glsl      (NEW)
│   ├── velocity.frag.glsl        (NEW)
│   ├── particles.vert.glsl       (NEW)
│   ├── particles.frag.glsl       (NEW)
│   ├── morphDisplacement.vert.glsl (NEW)
│   └── morphDisplacement.frag.glsl (NEW)
```

### 📁 Modified Files Today

```
vite.config.js          — Added GLSL plugin + TresJS compiler
src/main.js             — Added Pinia
src/App.vue             — 4-layer architecture
src/style.css           — Anti-gravity CSS system
src/Pages/Home.vue      — Clean layout (no section transitions)
src/Pages/Projects.vue  — Transparent bg
src/Pages/ProjectDetails.vue — Transparent bg
src/components/Landing.vue   — Transparent bg
src/components/About.vue     — Glass white bg
src/components/featuredProjects.vue — Glass bg + card glassmorphism
src/components/Contact.vue   — Glass bg
src/components/Footer.vue    — Glass bg
src/components/Intro.vue     — Solid bg
src/components/Navbar.vue    — Glassmorphism + audio toggle
```
