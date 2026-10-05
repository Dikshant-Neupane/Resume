---
name: Mandala Book
colors:
  surface: '#fff8f4'
  surface-dim: '#e0d9d3'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ed'
  surface-container: '#f4ece7'
  surface-container-high: '#eee7e1'
  surface-container-highest: '#e8e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#4e453b'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efea'
  outline: '#7f756a'
  outline-variant: '#d1c5b7'
  surface-tint: '#735a36'
  primary: '#735a36'
  on-primary: '#ffffff'
  primary-container: '#c4a57b'
  on-primary-container: '#503b1a'
  inverse-primary: '#e2c195'
  secondary: '#715b3e'
  on-secondary: '#ffffff'
  secondary-container: '#f9dbb7'
  on-secondary-container: '#755f42'
  tertiary: '#4f5f77'
  on-tertiary: '#ffffff'
  tertiary-container: '#9aabc5'
  on-tertiary-container: '#2f3f55'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb1'
  primary-fixed-dim: '#e2c195'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#594321'
  secondary-fixed: '#fcdeba'
  secondary-fixed-dim: '#dfc29f'
  on-secondary-fixed: '#281903'
  on-secondary-fixed-variant: '#574329'
  tertiary-fixed: '#d3e4ff'
  tertiary-fixed-dim: '#b7c8e3'
  on-tertiary-fixed: '#0a1c30'
  on-tertiary-fixed-variant: '#37485e'
  background: '#fff8f4'
  on-background: '#1e1b18'
  surface-variant: '#e8e1dc'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  accent-italic:
    fontFamily: Crimson Text
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  page-margin: 4rem
  gutter: 2rem
  unit: 8px
  container-max: 1280px
---

## Brand & Style
This design system is built upon the concept of the "Digital Monograph"—a high-end, tactile experience that bridges the gap between traditional bookbinding craftsmanship and interactive digital media. The brand personality is cerebral, sophisticated, and archival. It targets an audience that appreciates intentionality, slow-consumption content, and the physical sensation of paper and ink.

The visual style is **Tactile / Skeuomorphic Modernism**. It avoids the clutter of traditional skeuomorphism by maintaining minimalist layouts while employing hyper-realistic shadows, subtle paper grain textures, and "pressed" or "stamped" interaction states. The emotional goal is to evoke the quiet reverence of a private library or an exclusive art gallery.

## Colors
The palette is derived from natural materials: aged vellum, carbon ink, and metallic foils. 

- **Background/Paper (#F8F6F1):** A warm, off-white base that reduces eye strain and provides a canvas for texture overlays.
- **Text/Ink (#2C2C2C):** A deep, slightly softened charcoal that mimics high-quality printing ink.
- **Accent/Bronze (#8B7355):** Used for structural elements, borders, and secondary interactions.
- **Mandala/Gold (#C4A57B):** Reserved for focal points, iconography, and high-priority call-to-actions, mimicking gold-leaf stamping.

## Typography
The typographic hierarchy utilizes a classic editorial trio. **Playfair Display** provides a sense of heritage and authority for headings. **Inter** is used for body copy to ensure maximum legibility and a contemporary functional edge. **Crimson Text** is employed sparingly for pull-quotes, captions, and decorative flourishes, almost always in italics to suggest a hand-annotated quality. Use generous leading (line height) to reinforce the premium, "breathable" feel of the page.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy within a "spread" metaphor. The interface should feel like a physical book centered in the viewport. 

- **The Spread:** A centered container with a maximum width of 1280px.
- **Margins:** Large, 64px (4rem) inner margins to simulate the "safe area" of a printed book gutter and edge.
- **Rhythm:** All spacing is based on an 8px base unit. Vertical rhythm should be strictly maintained to ensure body text aligns across columns, mimicking traditional typesetting.

## Elevation & Depth
Depth in this design system is achieved through "Ambient Skeuomorphism." 

- **Surface Layers:** The background paper layer is the lowest. Floating cards or "pages" use multi-layered, highly diffused shadows (e.g., `0 10px 30px rgba(44, 44, 44, 0.05), 0 1px 4px rgba(44, 44, 44, 0.03)`).
- **The Page Fold:** Use a subtle linear gradient on the Y-axis of the center gutter to imply the 3D curvature of a book spine.
- **Interaction Depth:** Buttons should use an "inner shadow" on click to appear as if they are being physically pressed into the paper, rather than floating above it.

## Shapes
Shapes are disciplined and "Soft" (radius: 4px). This mimics the slightly blunted corners of heavy cardstock or hardbound book covers. Avoid large radiuses or pill shapes, as they lean too far into modern software aesthetics and away from the tactile book metaphor. All borders should be thin (1px) and use the Bronze accent at a low opacity (20-30%) to simulate a blind deboss or a light pencil mark.

## Components
- **Buttons:** Designed to look like foil-stamped labels. Use the Gold accent for the background with Ink text. On hover, the shadow deepens; on active state, use an inner shadow.
- **Chips/Tags:** Small, Crimson Text italic labels wrapped in a subtle 1px Bronze border with a very light paper-tinted background.
- **Cards:** These represent "inserts" within the book. They should have a subtle texture overlay (noise at 2-3% opacity) and a distinct soft shadow to separate them from the main page.
- **Inputs:** Minimalist bottom-borders only, using the Bronze color. When focused, the line transforms into a Gold highlight with a small decorative serif at the edges.
- **Navigation:** A "Bookmark" component that hangs from the top of the viewport, using the Gold accent, functioning as the primary menu trigger or "back to top" link.
- **Page Transitions:** All transitions between views should use a "flip" or "horizontal slide" motion to reinforce the book metaphor.