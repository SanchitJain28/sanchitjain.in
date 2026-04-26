# Design System Specification: The Binary Editorial

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Manifest"**

This design system rejects the "softness" of modern SaaS interfaces in favor of raw, uncompromising clarity. It is a strictly editorial framework that treats the screen as a high-contrast printed broadsheet. By stripping away grays, gradients, and shadows, we shift the user's focus entirely to information density and structural rhythm.

The "Manifest" aesthetic is achieved through **intentional tension**: large, aggressive headlines paired with ultra-compact metadata. It breaks the "template" look by utilizing asymmetrical layouts where content is anchored by heavy black blocks or stark white containers, creating a digital experience that feels both archival and avant-garde.

---

## 2. Colors: The Binary Constraint

This system operates on a zero-tolerance policy for mid-tones.

* **Primary/Background:** `#000000` (Pure Black)
* **Surface/On-Primary:** `#FFFFFF` (Pure White)

### The "No-Line" Rule

Traditional 1px gray borders are strictly prohibited. Sectioning must be achieved through **Interchangeable Inversion**. To separate a section, invert the color scheme: if the global background is `Surface (#FFFFFF)`, the inner section or header must be `Primary (#000000)`.

### Surface Hierarchy & Nesting

Depth is an illusion created by density, not shadows.

- **Tier 1 (Base):** Pure White surface.
- **Tier 2 (Emphasis):** Pure Black block.
- **Tier 3 (Interactive):** Inverted text within a black block.
- **Nesting:** When a card sits within a section, it does not use a shadow. It uses a 1px solid `#000000` border (the only exception to the no-line rule — defining a container against an identical background) or a 100% black fill with white text.

---

## 3. Typography: Monospaced Authority

Typography is the primary vehicle for brand expression. We utilize a high-contrast pairing of **Space Grotesk** for impact and **Inter** for utility.

* **Display (Space Grotesk, 3.5rem):** Used for "shouting" headers. Tracking: -2%. Line-height: 0.9.
* **Headline (Space Grotesk, 2rem):** Used for section starts. Always uppercase.
* **Body (Inter, 0.875rem):** Used for long-form content. Line-height: 1.2 (Compact).
* **Label (Space Grotesk, 0.75rem):** Used for metadata. Always paired with a bracketed prefix like `[INFO]` or `[STATUS]`.

**Editorial Rule:** High-contrast scales are mandatory. Never place two font sizes from the same category next to each other. Pair a `Display` with a `Label` for maximum tension.

---

## 4. Elevation & Depth: Tonal Layering

We do not use Z-axis depth. We use **Graphic Priority**.

* **The Layering Principle:** Content is stacked like cut-out paper. If an element needs to feel "above" another, it simply obscures it with a solid `#FFFFFF` or `#000000` fill.
* **Ambient Shadows:** Prohibited.
* **The Ghost Border Fallback:** If a container requires definition against a white background, use a `1px solid #000000` stroke.

---

## 5. Components: The Brutalist Toolkit

### Buttons

* **Primary:** Solid `#000000` fill, `#FFFFFF` text. Sharp 0px corners.
* **Secondary:** 1px solid `#000000` border, `#FFFFFF` fill, `#000000` text.
* **Interaction:** On hover, the button must **invert** (Primary becomes White background/Black text).
* **Labeling:** Buttons use uppercase labels. Directional intent is communicated by pairing with a typographic arrow: `ENTER →`

### Inputs & Text Fields

* **Style:** Bottom-border only (`1px solid #000000`). No box, no background.
* **Focus State:** The bottom border increases to `3px`. No glow, no color change.
* **Error State:** No red. Error is indicated by a solid black block (`#000000`) containing white uppercase text with the prefix `! ERROR`.

### Cards & Lists

* **Forbid Dividers:** Do not use lines to separate list items. Use the spacing scale (`0.3rem` to `0.5rem`) to create tight, dense clusters.
* **Section Headers:** Rendered as full-width inverted blocks — black background, white uppercase label — to delineate sections without borders or dividers.

### Separators

Replace standard `<hr>` elements with heavy typographic weight dividers using a solid `4px` black rule, or a full-bleed inverted band (`background: #000000`, `height: 4px`). No decorative characters.

---

## 6. Do's and Don'ts

### Do

* **Do** embrace extreme density. Information is more important than "white space."
* **Do** use 0px border radius for every single element, including checkboxes and radio buttons (rendered as square `[ ]` and `[X]` using CSS only — no icon libraries).
* **Do** use asymmetric margins (e.g., 3rem left, 1rem right) to create an editorial layout.

### Don't

* **Don't** use gray. There is no gray in this system.
* **Don't** use icons from standard libraries (Material/Lucide). Create icons using basic geometric shapes — squares, lines, triangles — built from raw CSS or SVG primitives.
* **Don't** animate with "springs" or "bounces." Use immediate, linear transitions (`0ms` or `100ms`) to maintain the mechanical feel.