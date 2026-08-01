# GenExcel.ai Website Documentation

## Project Overview

**GenExcel.ai** is a comprehensive pediatric health and genomics platform. This documentation package provides everything needed to build a **stunning, world-class marketing website**.

---

## Technology Stack (Mandatory)

### Core Framework: **Next.js 14+**

```
Next.js 14 (App Router) + React 18 + TypeScript 5
```

This is non-negotiable. Next.js provides:
- Server-side rendering for SEO
- Image & font optimization
- Edge runtime for performance
- App Router for modern patterns

### Visual Effects Stack

```
Framer Motion     → Page animations, micro-interactions
React Three Fiber → 3D DNA visualization in hero
GSAP              → Scroll-triggered animations
Lenis             → Buttery smooth scrolling
```

### Styling

```
Tailwind CSS 3.4  → Utility-first styling
Radix UI          → Accessible components
Lucide Icons      → Consistent iconography
```

---

## Documentation Files

| File | Purpose |
|------|---------|
| **GENEXCEL_WEBSITE_DOCUMENTATION.md** | Complete website specification (sitemap, pages, content strategy, SEO, compliance) |
| **NEXTJS_SUPER_WEBSITE_SPEC.md** | Next.js implementation with all visual effects code |
| **DESIGN_SYSTEM.md** | Colors, typography, spacing, component specs |
| **TECHNICAL_SPECIFICATION.md** | Full tech stack, project structure, API routes |
| **IMAGE_PROMPTS.md** | 42 AI image generation prompts for all visuals |
| **CONTENT_TEMPLATES.md** | Ready-to-use copy for all pages and emails |

---

## Super Appealing Visual Features

The website MUST include these effects:

### Hero Section
- **3D DNA Animation** - Interactive Three.js DNA helix with particles
- **Animated gradient background** - Slowly morphing color blobs
- **Text reveal animation** - Words animate in with stagger
- **Magnetic CTA buttons** - Follow cursor on hover

### Throughout Site
- **Smooth scroll** - Lenis-powered buttery scrolling
- **Scroll animations** - GSAP fade-up reveals on scroll
- **Glassmorphism cards** - Frosted glass effect with blur
- **Parallax layers** - Elements move at different speeds
- **Cursor glow** - Subtle light follows mouse
- **Animated counters** - Numbers count up when visible
- **Micro-interactions** - Every element responds to user

### Component Effects
- **Hover states** - Scale, glow, shadow transitions
- **Loading skeletons** - Beautiful placeholder animations
- **Page transitions** - Smooth cross-page animations
- **Bento grid layout** - Modern card arrangements

---

## Visual Quality Standards

| Metric | Target |
|--------|--------|
| Animation FPS | 60fps minimum |
| LCP | < 2.5 seconds |
| CLS | < 0.1 |
| Mobile Score | 90+ Lighthouse |
| Desktop Score | 95+ Lighthouse |

---

## Design Inspiration

Reference these award-winning sites for quality bar:

1. **Linear.app** - Gradient-heavy, clean SaaS
2. **Stripe.com** - Sophisticated animations
3. **Vercel.com** - Modern developer aesthetic
4. **Raycast.com** - Beautiful glassmorphism
5. **Loom.com** - Friendly product design

---

## Color Palette

```css
Primary Blue:    #2563EB (trust, healthcare)
Secondary Sky:   #0EA5E9 (fresh, clean)
Accent Cyan:     #06B6D4 (tech, modern)
Success Green:   #10B981
Warning Orange:  #F59E0B
Error Red:       #EF4444
```

---

## Quick Start for Developers

```bash
# 1. Create Next.js project
npx create-next-app@latest genexcel-website --typescript --tailwind --app

# 2. Install dependencies
npm install framer-motion @react-three/fiber @react-three/drei three gsap lenis

# 3. Install UI dependencies
npm install class-variance-authority clsx tailwind-merge lucide-react

# 4. Install Radix UI components
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-tabs

# 5. Start development
npm run dev
```

---

## Product Summary

**GenExcel.ai** transforms pediatric healthcare through:

| Feature | Description |
|---------|-------------|
| **Genetic Insights** | 450+ traits across 34 health categories |
| **AI NutriScan** | Photo-based nutrition analysis |
| **Brain Games** | 10 cognitive development games |
| **Health Tracking** | 13 vital metrics with trends |
| **Telemedicine** | Video consultations with specialists |
| **Family Dashboard** | Multi-child management |

**Target Users:**
- Parents of children ages 4-18
- Schools & educational institutions
- Healthcare providers

---

## File Structure

```
genexcel_website/
├── documents/
│   ├── README.md                         ← You are here
│   ├── GENEXCEL_WEBSITE_DOCUMENTATION.md
│   ├── NEXTJS_SUPER_WEBSITE_SPEC.md
│   ├── DESIGN_SYSTEM.md
│   ├── TECHNICAL_SPECIFICATION.md
│   ├── IMAGE_PROMPTS.md
│   └── CONTENT_TEMPLATES.md
└── src/                                  ← Website code (to be created)
```

---

## Contact

For questions about this documentation, contact the GenExcel.ai team.

---

*Last Updated: 2026-01-10*
