# DESIGN SYSTEM MANIFEST

## 1. The Creative North Star: "Binary Editorial"
We transitioned the portfolio from a **"Hacker/Terminal"** aesthetic to a high-end **"Binary Editorial"** design system.
**Goal:**  
Simulate a printed, architectural broadsheet—raw, structural, and uncompromising.

### ❌ Rejected
- Soft shadows  
- Gradients  
- Gray mid-tones  
- Rounded corners  
- "Bouncy" animations  
- Pseudo-hacker jargon and terminal based words (e.g., `[ ]`, `.exe`, `INITIALIZED`)

### ✅ Embraced
- Pure black and white contrast  
- Sharp 90° geometry  
- Severe typographic scales  
- Instant hover inversions  
- Factual/editorial copywriting  

---

## 2. Core Global Rules (Strictly Followed)

### A. The Binary Color Constraint
- No grays allowed.
- **Surface/Background:** `#FFFFFF` or `#000000`
- **Text/Borders:** Must perfectly contrast background
- **Inversion Rule:** Use inversion instead of shadows  
  _(e.g., white page → black contact form)_

---

### B. Geometry & Shadows
- `border-radius: 0px` globally
- No `box-shadow`
- Depth created using:
  - Heavy borders (`border-b-4 border-black`)
  - Color inversion

---

### C. Typography
- **Primary Headers:**  
  - Font: Space Grotesk  
  - Uppercase  
  - `-tracking-tighter`  
  - Dense line-height  

- **Body Copy:**  
  - Font: Inter  
  - Medium weight  
  - Compact line-height  

- **Metadata/Labels:**  
  - Space Grotesk or monospace  
  - `text-xs` or `text-[10px]`  
  - Uppercase  
  - `tracking-widest`  

---

### D. Motion & Interaction
- **Hover States:**  
  - `transition-none`  
  - Instant snap (no fade)

- **Animations:**  
  - `ease: "linear"` only  
  - No springs or bounce  

---

## 3. What We Have Built & Changed

### 1. globals.css (Foundation)
- Removed terminal effects (`.ascii-bg`, blinking cursors)
- Overrode Shadcn defaults → only black/white variables

---

### 3. Navigation / Sidebar (`Sidebar.tsx`)
- Removed `[ MENU ]`
- Custom sharp SVG icons
- Fixed mobile menu overlay with proper `z-index`

---

### 4. Hero Section (`Hero.tsx`)
- Removed terminal-style text
- Replaced with structured data:
  - PROFILE OVERVIEW  
  - AVAILABLE FOR HIRE  
  - NEW DELHI NCR, INDIA  

---

### 5. Technical Stack (`Skills.tsx`)
- Grid-based matrix layout (square cells)
- Dynamic SVG icons
- `group-hover:invert` for instant color swap
- Added filler blocks for grid alignment

---

### 6. Project Archive (`Projects.tsx`)
- Added 11 real projects
- Rewrote descriptions → engineering tone
- Cards:
  - Default: white  
  - Hover: instant black flood  
- Custom SVG arrow (square-cap)

---

### 7. Global Footer & 3D Globe (`Footer.tsx`)
- Replaced image → **3D Earth (Globe3D)**

**Math Fix:**
- Converted lat/lng to radians:
  - `x: 0.496`
  - `y: -2.916`

**UI Fix:**
- Full black footer
- Floating GPS coordinate box

---

### 8. Contact Form (`Contact.tsx`)
- Asymmetrical layout
- Brutalist inputs:
  - No background  
  - `border-b-2` → `border-b-[4px]` on focus  
- Heavy submit button with arrows

---

### 9. Case Study Pages (`[slug]/page.tsx`, `StickyScroll.tsx`)
- Fixed scroll sync using `mb-[40vh]` spacing
- Forced "scroll through emptiness"
- Responsive:
  - Mobile → sticky top image (40% height)
  - Text scrolls below

---

## 4. Image Preparation Protocol (Canva)

### Dimensions
- **Standard:** `1080 × 1350` (4:5)
- **Landing Pages:** `1440px × variable height`

---

### Canva Process
1. Place screenshot in white frame  
2. Add `2px` black border  
3. Add black header bar (no rounded dots)  
4. Header text:  
   - `VIEW: DASHBOARD`  
   - `SECTION 01`  
5. Apply filters:
   - Saturation: `-30 to -50`  
   - Contrast: `+20`  

**Website Processing:**
- `grayscale-[50%]`
- `contrast-125`

---

## 5. Future Development Checklist

Before shipping anything:

- ❓ Any grays used?  
  → Replace with black/white or opacity  

- ❓ Any rounded corners?  
  → Use `rounded-none`  

- ❓ Copy too marketing/hacker?  
  → Make it technical, direct  

- ❓ Animation too smooth?  
  → Use `linear`  

- ❓ Hover too soft?  
  → Use `transition-none`  

- ❓ Icons too soft?  
  → Use sharp custom SVGs (`strokeLinecap="square"`)  