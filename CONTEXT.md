
PROMPT :
RECREATION PROMPT

Build a single-page landing site using React + TypeScript + Vite + Tailwind CSS + framer-motion + lucide-react. The entire page has a bg-black background. The font loaded via Google Fonts is Instrument Serif (italic and regular). Import it in index.css:


@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
LIQUID GLASS CSS (in index.css, inside @layer components)
Create a reusable .liquid-glass class used on every glass element:


.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
SECTION 1 -- HERO (full-viewport, in Index.tsx)
Full-screen (min-h-screen) container with overflow-hidden relative flex flex-col.

Background video: absolute, covers the entire viewport (absolute inset-0 w-full h-full object-cover object-bottom). URL:


https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4
Attributes: muted, autoPlay, playsInline, preload="auto". Starts at opacity: 0.

Video fade logic (vanilla JS via refs, no CSS transitions):

On canplay: play the video, then animate opacity from 0 to 1 over 500ms using requestAnimationFrame.
On timeupdate: when remaining time <= 0.55s, animate opacity from current to 0 over 500ms.
On ended: set opacity to 0, wait 100ms, reset currentTime to 0, play again, fade back to 1 over 500ms.
This creates a seamless loop with smooth crossfade to black between plays.
Navbar (relative z-20, px-6 py-6):

A liquid-glass rounded-full pill, max-w-5xl mx-auto, px-6 py-3, flex between left/right.
Left: Globe icon (24px, white) + "Asme" text (white, font-semibold, text-lg). Hidden on mobile: nav links "Features", "Pricing", "About" (text-white/80 hover:text-white text-sm font-medium, gap-8 ml-8).
Right: "Sign Up" text button (white, text-sm, font-medium) + "Login" button (liquid-glass rounded-full px-6 py-2, white text-sm font-medium).
Hero content (relative z-10, flex-1 flex flex-col items-center justify-center, px-6 py-12 text-center, -translate-y-[20%]):

Heading: text-7xl md:text-8xl lg:text-9xl, white, tracking-tight whitespace-nowrap, font-family 'Instrument Serif', serif. Text: Know it then <em className="italic">all</em>.
Email input: max-w-xl w-full. A liquid-glass rounded-full pill with pl-6 pr-2 py-2 flex items-center gap-3. Inside: transparent <input> with placeholder "Enter your email" (text-white placeholder:text-white/40). A white circular submit button (bg-white rounded-full p-3 text-black) containing ArrowRight icon (20px).
Subtitle: text-white text-sm leading-relaxed px-4. Text: "Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates."
Manifesto button: liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors.
Social icons footer (relative z-10, flex justify-center gap-4 pb-12):

Three liquid-glass rounded-full p-4 buttons for Instagram, Twitter, Globe icons (20px). text-white/80 hover:text-white hover:bg-white/5 transition-all.
SECTION 2 -- ABOUT SECTION (separate component AboutSection.tsx)
Uses framer-motion useInView (ref, { once: true, margin: "-100px" }).
bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden.
Subtle radial gradient overlay: bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)].
Label: "About Us" -- text-white/40 text-sm tracking-widest uppercase. Animates: opacity: 0, y: 20 -> opacity: 1, y: 0, duration 0.6.
Heading: text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight. Animates: opacity: 0, y: 40 -> opacity: 1, y: 0, duration 0.8, delay 0.1. Text structure:
Pioneering then ideas (Instrument Serif italic, text-white/60) for
Line break (hidden on mobile)
minds that then create, build, and inspire. (all Instrument Serif italic, text-white/60)
SECTION 3 -- FEATURED VIDEO (separate component FeaturedVideoSection.tsx)
bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden. Max-w-6xl.
A rounded-3xl overflow-hidden aspect-video container that animates opacity: 0, y: 60 -> opacity: 1, y: 0, duration 0.9.
Video: w-full h-full object-cover, muted, autoPlay, loop, playsInline, preload="auto". URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4
Gradient overlay on video: bg-gradient-to-t from-black/60 via-transparent to-transparent.
Bottom overlay content (absolute bottom-0 left-0 right-0 p-6 md:p-10):
Flex row on desktop, column on mobile.
Left: a liquid-glass rounded-2xl p-6 md:p-8 max-w-md card. Label "Our Approach" (text-white/50 text-xs tracking-widest uppercase mb-3). Body text (text-white text-sm md:text-base leading-relaxed): "We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation."
Right: "Explore more" button (liquid-glass rounded-full px-8 py-3, white text-sm font-medium) with whileHover={{ scale: 1.05 }} and whileTap={{ scale: 0.95 }}.
SECTION 4 -- PHILOSOPHY / INNOVATION x VISION (separate component PhilosophySection.tsx)
bg-black py-28 md:py-40 px-6 overflow-hidden. Max-w-6xl.
Heading: text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24. Animates opacity: 0, y: 40 -> opacity: 1, y: 0, duration 0.8. Text: Innovation then x in Instrument Serif italic text-white/40, then Vision.
Two-column grid (grid-cols-1 md:grid-cols-2 gap-8 md:gap-12):
Left: Video in rounded-3xl overflow-hidden aspect-[4/3]. Animates from opacity: 0, x: -40. URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4
muted, autoPlay, loop, playsInline, preload="auto".
Right: Animates from opacity: 0, x: 40. Two text blocks separated by a w-full h-px bg-white/10 divider.
Block 1: Label "Choose your space" (text-white/40 text-xs tracking-widest uppercase mb-4). Body (text-white/70 text-base md:text-lg leading-relaxed): "Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries."
Block 2: Label "Shape the future". Body: "We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression."
SECTION 5 -- SERVICES / WHAT WE DO (separate component ServicesSection.tsx)
bg-black py-28 md:py-40 px-6 overflow-hidden. Max-w-6xl.
Subtle radial gradient: bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)].
Header row: flex between "What we do" (text-3xl md:text-5xl text-white tracking-tight) and "Our services" label (text-white/40 text-sm, hidden on mobile). Animates opacity: 0, y: 30 -> visible, duration 0.7.
Two-card grid (grid-cols-1 md:grid-cols-2 gap-6 md:gap-8):
Each card: liquid-glass rounded-3xl overflow-hidden with group class. Animates opacity: 0, y: 50 -> visible, duration 0.8, staggered by 0.15s.
Card video area: aspect-video, object-cover, transition-transform duration-700 group-hover:scale-105. Gradient overlay: bg-gradient-to-t from-black/40 to-transparent.
Card body (p-6 md:p-8): tag label (uppercase, tracking-widest, text-white/40 text-xs), ArrowUpRight icon in a liquid-glass rounded-full p-2 circle, title (text-white text-xl md:text-2xl mb-3 tracking-tight), description (text-white/50 text-sm leading-relaxed).
Card 1: Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4
Tag: "Strategy". Title: "Research & Insight". Description: "We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change."
Card 2: Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4
Tag: "Craft". Title: "Design & Execution". Description: "From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary."


# Implementation Plan — Asme Landing Page

Implementation plan to build the Asme Landing Page based on [CONTEXT.md](file:///Users/em/web/hcc/CONTEXT.md). The application will be organized under a `frontend` folder and built using React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

---

## User Review Required

We need your confirmation on the following design and setup choices:

> [!IMPORTANT]
> **Tailwind CSS Version**
> We recommend using **Tailwind CSS v4** (the latest version). It is faster, features a CSS-first configuration, and integrates beautifully with Vite. Alternatively, we can use **Tailwind CSS v3** which requires a separate `tailwind.config.js` and `postcss.config.js`.

> [!IMPORTANT]
> **Video Poster Generation Strategy**
> Since `ffmpeg` is not installed on your system, we need to choose how to obtain the crisp poster frames for lazy-loaded videos:
> 1. **Option A (Recommended):** Install `ffmpeg` using Homebrew (`HOMEBREW_NO_AUTO_UPDATE=1 brew install ffmpeg`), then run a short script to extract the first frame from each remote CloudFront video. This ensures the poster frame perfectly matches the first frame of the video, preventing a visual flash/glitch.
> 2. **Option B:** Draw the video frames to a canvas dynamically on the client-side when the video starts loading. This does not require local image files but won't show a poster during the initial page load (before the video has started loading).
> 3. **Option C:** Generate beautiful, dark abstract glassmorphic images using our AI `generate_image` tool to serve as thematic poster frames.

---

## Proposed Changes

We will create a Vite React + TypeScript project inside a new `frontend/` directory.

```
/Users/em/web/hcc/
├── CONTEXT.md (existing)
└── frontend/
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js (if Tailwind v3 is selected)
    ├── public/
    │   └── posters/
    │       ├── hero.webp
    │       ├── featured.webp
    │       ├── philosophy.webp
    │       ├── strategy.webp
    │       └── craft.webp
    └── src/
        ├── main.tsx
        ├── index.css
        ├── App.tsx
        ├── Index.tsx (Main Layout & Hero Section)
        ├── components/
        │   ├── LazyVideo.tsx
        │   ├── AboutSection.tsx
        │   ├── FeaturedVideoSection.tsx
        │   ├── PhilosophySection.tsx
        │   └── ServicesSection.tsx
        └── hooks/
            └── useLenis.ts
```

---

### Phase 1: Project Initialization

We will initialize the project using Vite in non-interactive mode:
- **Command:** `npx -y create-vite@latest frontend --template react-ts`
- **Dependencies to install:**
  - `framer-motion`
  - `lucide-react`
  - `lenis`
  - `tailwind-merge` and `clsx` (helper utilities for combining Tailwind classes)

---

### Phase 2: Design System & Styling (Tailwind + Custom CSS)

1. **index.css**:
   - Import `Instrument Serif` from Google Fonts.
   - Define custom `@theme` variables (if Tailwind v4) or extend the tailwind config (if Tailwind v3) for fonts.
   - Add the `.liquid-glass` class inside the components layer as specified:
     ```css
     .liquid-glass {
       background: rgba(255, 255, 255, 0.01);
       background-blend-mode: luminosity;
       backdrop-filter: blur(4px);
       -webkit-backdrop-filter: blur(4px);
       border: none;
       box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
       position: relative;
       overflow: hidden;
     }
     .liquid-glass::before {
       content: '';
       position: absolute;
       inset: 0;
       border-radius: inherit;
       padding: 1.4px;
       background: linear-gradient(
         180deg,
         rgba(255, 255, 255, 0.45) 0%,
         rgba(255, 255, 255, 0.15) 20%,
         rgba(255, 255, 255, 0) 40%,
         rgba(255, 255, 255, 0) 60%,
         rgba(255, 255, 255, 0.15) 80%,
         rgba(255, 255, 255, 0.45) 100%
       );
       -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       -webkit-mask-composite: xor;
       mask-composite: exclude;
       pointer-events: none;
     }
     ```

---

### Phase 3: Implement Custom Components

#### [NEW] [LazyVideo.tsx](file:///Users/em/web/hcc/frontend/src/components/LazyVideo.tsx)
Implement the IntersectionObserver-based lazy video component to defer loading off-screen videos.

#### [NEW] [useLenis.ts](file:///Users/em/web/hcc/frontend/src/hooks/useLenis.ts)
Implement the Lenis smooth-scroll setup and standard `requestAnimationFrame` loop.

#### [NEW] [Index.tsx](file:///Users/em/web/hcc/frontend/src/Index.tsx)
Build the layout that coordinates all sections:
- **Navbar:** Liquid glass rounded-full pill. Responsive structure (collapses menu on mobile).
- **Hero Section:** Fullscreen viewport. Implement the custom crossfade-loop video logic with HTML5 video events (`canplay`, `timeupdate`, `ended`) and requestAnimationFrame fade transitions.
- **Footer/Socials:** Glassmorphic social buttons.

#### [NEW] [AboutSection.tsx](file:///Users/em/web/hcc/frontend/src/components/AboutSection.tsx)
- Scroll-triggered entry animations using Framer Motion's `useInView`.
- Subtle dark top radial gradient.

#### [NEW] [FeaturedVideoSection.tsx](file:///Users/em/web/hcc/frontend/src/components/FeaturedVideoSection.tsx)
- Framer Motion scroll parallax using `useScroll` and `useTransform` (drifting from -8% to +8%).
- Aspect ratio 16:9 container, bottom overlays (liquid glass card and Explore button).

#### [NEW] [PhilosophySection.tsx](file:///Users/em/web/hcc/frontend/src/components/PhilosophySection.tsx)
- Two columns: Video aspect-[4/3] (left) and 2 text blocks with dividing line (right).
- Entry animations.

#### [NEW] [ServicesSection.tsx](file:///Users/em/web/hcc/frontend/src/components/ServicesSection.tsx)
- Dual card layout.
- Individual videos displaying on hover (zoom scale-105 effect) with ArrowUpRight indicators and descriptions.

---

### Phase 4: Video Poster Generation

If **Option A** is chosen, we will:
1. Propose command to install `ffmpeg` via Homebrew.
2. Run a small node script or shell command to download the first 1-second segment of each remote video and extract frame 00:00:01 to `/public/posters/[name].webp`.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify TypeScript compile and production bundling.
- Start local dev server via `npm run dev` and verify no console errors.

### Manual Verification
- Verify the video loading timeline in DevTools Network tab to confirm videos only load when scrolled near viewport.
- Confirm Lenis smooth scroll works on wheel/touch.
- Verify the custom crossfade loop on the Hero video transitions cleanly without flashing black.
