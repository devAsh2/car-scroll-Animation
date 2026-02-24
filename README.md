## Scroll-Car Hero – GSAP Scroll Animation

This project implements a **scroll‑driven hero section** built with **React, Vite, Tailwind (via CDN)** and **GSAP + ScrollTrigger**.  
The hero simulates a sports car driving across a road while revealing headline text and impact metrics as the user scrolls.

### Feature Overview

- **Above‑the‑fold hero**
  - Full‑screen hero (`200vh` scroll height with pinned viewport).
  - Large, letter‑spaced headline: `WELCOME ITZFIZZ`.
  - Impact / value cards showing percentages and short descriptions.

- **Scroll‑based car animation**
  - A car image moves horizontally across a road as the user scrolls.
  - Motion is tied to scroll progress via **GSAP ScrollTrigger** (`scrub: true`), not time-based autoplay.
  - The car stops exactly at the end of the road width—no overflow off the screen.
  - A green trail bar grows behind the car to visualize its progress.

- **Dynamic text reveal**
  - Headline is rendered as individual `.value-letter` spans.
  - As the car’s center passes each letter’s x‑position, that letter fades in.
  - This creates a “car reveals the message” effect driven purely by scroll position.

- **Impact metrics / stat cards**
  - Four stat boxes (`#box1`–`#box4`) are positioned around the road (two above, two below) to match the reference design.
  - Each box fades in at different scroll offsets using independent ScrollTriggers, so the story unfolds as you scroll.

- **Initial load feel**
  - Layout is ready for an intro timeline (e.g. subtle fade/slide on hero and cards) while keeping the core car motion scroll‑controlled.

- **Performance**
  - Uses GPU‑friendly transform and width animations (no manual scroll event listeners).
  - ScrollTrigger handles all scroll syncing and pinning, avoiding forced reflows.

### Key Implementation Details

- **Hero structure**
  - `.section` – scrollable hero wrapper (200vh).
  - `.track` – pinned viewport area that stays in place during scroll.
  - `.road` – 200px‑tall dark strip containing the car, trail, and headline.

- **Core GSAP logic (in `useHeroAnimation.js`)**
  - Registers `ScrollTrigger` from the GSAP CDN loaded in `index.html`.
  - Selects:
    - `#car` – car image element.
    - `#trail` – expanding green bar.
    - `.value-letter` – headline letters.
    - `.value-add` – headline container.
  - Computes:
    - `endX = window.innerWidth - 150` so the car width (150px) fits exactly within the road.
    - Letter x‑positions from `getBoundingClientRect` and stored offsets.
  - Car tween:
    - Triggered by `.section`, pinned on `.track`, scrubbed from `start: "top top"` to `end: "bottom top"`.
    - On each update:
      - Updates the car’s center position.
      - Sets the trail width to match the car’s progress.
      - Toggles each letter’s opacity based on whether the car has passed it.
  - Stat box tweens:
    - Four separate `gsap.to` calls on `#box1`–`#box4` with staggered scroll ranges (`top+=400`, `top+=600`, etc.).

### Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the printed local URL in your browser and scroll the page to experience:
   - The car driving across the hero.
   - The headline revealing letter by letter.
   - The stat cards appearing progressively as you scroll.

This setup is a good reference for building **premium, scroll‑driven hero sections** using React + GSAP ScrollTrigger with smooth, performant motion.
