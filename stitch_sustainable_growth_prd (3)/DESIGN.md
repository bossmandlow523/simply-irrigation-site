# Terra Architectura Design System

### 1. Overview & Creative North Star
**Creative North Star: "The Agrarian Estate"**
Terra Architectura is a design system that marries technical precision with a high-end editorial aesthetic. Inspired by architectural blueprints and premium agricultural journals, the system rejects the "app-like" clutter of modern software in favor of a "Documentary Layout" approach. It utilizes a strict 0px radius (sharp corners), intentional whitespace, and a high-contrast typographic scale to convey authority, sustainability, and industrial heritage.

### 2. Colors
The palette is rooted in earth and utility.
- **Primary & Secondary:** Derived from deep forest greens (#2C4027) and slate blues (#1E3A40), representing water and foliage.
- **The "No-Line" Rule:** Sectioning is achieved through the transition between `#F4F1EB` (Light Linen) and `#E9E4DA` (Pressed Clay). Do not use 1px borders to separate main content blocks; use color shifts or 1px strokes of `outline` sparingly for technical data only.
- **Surface Hierarchy:** 
    - `surface_container_low`: The standard page background.
    - `surface_container`: Used for interactive hover states or to highlight technical specifications.
    - `surface_container_highest`: Used for secondary navigation or footer elements.
- **Signature Textures:** Use image overlays with a subtle `sepia(0.2)` or `contrast(1.1)` filter to maintain a consistent vintage-technical warmth across all photography.

### 3. Typography
The system uses a sophisticated pairing of serif and sans-serif to bridge the gap between "The Master Gardener" and "The Engineer."

**Typography Scale (Extracted Ground Truth):**
- **Display (Hero):** 3.75rem (60px) to 6rem (96px). Used for high-impact brand statements.
- **Headline (H1/H2):** 2.25rem (36px) to 3rem (48px). Set in *Playfair Display* (Newsreader) with tight leading.
- **Title (Section):** 1.125rem (18px) to 1.875rem (30px).
- **Body:** 1rem (16px) or 0.875rem (14px). Set in *Work Sans* for maximum legibility in technical data.
- **Label/Caption:** 0.75rem (12px) with `tracking-[2px]` and `uppercase` for a technical, blueprint-like feel.

### 4. Elevation & Depth
Terra Architectura is a "Flat-Stack" system. It avoids traditional shadows in favor of tonal layering.
- **The Layering Principle:** Depth is conveyed by placing a `surface_container_low` element inside a `surface_container_lowest` container, or vice versa.
- **Ambient Shadows:** Standard shadows are prohibited. In rare cases where a floating element (like a modal) is required, use a high-spread, extremely low-opacity shadow or a 1px border in `primary`.
- **Glassmorphism:** Use `backdrop-blur-sm` with a 95% opacity background (e.g., `bg-background-light/95`) for sticky headers to maintain context without breaking the architectural grid.

### 5. Components
- **Buttons:** Strictly rectangular (0px radius). Primary buttons are outlined in `primary` color with no fill, transitioning to full fill on hover.
- **Data Tables:** Use horizontal rules only (no vertical lines). The header row should use `font-display` for an editorial look.
- **Chips/Badges:** Small uppercase text with a leading 10px horizontal rule (stroke) rather than a background pill.
- **Inputs:** Simple bottom-border only or a full rectangle with `outline_variant`. No rounded corners.
- **Cards:** Defined by a change in background color (`surface_container`) and a slight padding increase (spacing 3).

### 6. Do's and Don'ts
- **Do:** Use large-scale serif typography for section headings to create a sense of history.
- **Do:** Use "Technical Annotations"—small, uppercase, wide-tracked labels next to icons or lines.
- **Don't:** Use rounded corners on any element, including buttons, inputs, or images.
- **Don't:** Use vibrant, saturated colors outside of the brand-defined `primary` and `accent` tones.
- **Do:** Ensure all imagery has a consistent warm/earthy filter to match the #F4F1EB background.