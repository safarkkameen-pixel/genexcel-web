# GenExcel.ai Design System

## Overview

This design system defines the visual language and component library for the GenExcel.ai website. It is derived from the mobile application's design patterns to ensure brand consistency across platforms.

---

## 1. Color Tokens

### 1.1 Primary Palette (Healthcare Blue)

```css
:root {
  /* Primary - Trust & Healthcare */
  --color-primary-50:  #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB; /* DEFAULT */
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;
}
```

### 1.2 Secondary Palette (Sky Blue)

```css
:root {
  --color-secondary-50:  #F0F9FF;
  --color-secondary-100: #E0F2FE;
  --color-secondary-200: #BAE6FD;
  --color-secondary-300: #7DD3FC;
  --color-secondary-400: #38BDF8;
  --color-secondary-500: #0EA5E9; /* DEFAULT */
  --color-secondary-600: #0284C7;
  --color-secondary-700: #0369A1;
  --color-secondary-800: #075985;
  --color-secondary-900: #0C4A6E;
}
```

### 1.3 Accent Palette (Cyan/Teal)

```css
:root {
  --color-accent-50:  #ECFEFF;
  --color-accent-100: #CFFAFE;
  --color-accent-200: #A5F3FC;
  --color-accent-300: #67E8F9;
  --color-accent-400: #22D3EE;
  --color-accent-500: #06B6D4; /* DEFAULT */
  --color-accent-600: #0891B2;
  --color-accent-700: #0E7490;
  --color-accent-800: #155E75;
  --color-accent-900: #164E63;
}
```

### 1.4 Neutral Palette (Slate)

```css
:root {
  --color-neutral-50:  #F8FAFC;
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;
  --color-neutral-900: #0F172A;
  --color-neutral-950: #020617;
}
```

### 1.5 Semantic Colors

```css
:root {
  /* Success */
  --color-success-50:  #ECFDF5;
  --color-success-500: #10B981;
  --color-success-700: #047857;

  /* Warning */
  --color-warning-50:  #FFFBEB;
  --color-warning-500: #F59E0B;
  --color-warning-700: #B45309;

  /* Error */
  --color-error-50:  #FEF2F2;
  --color-error-500: #EF4444;
  --color-error-700: #B91C1C;

  /* Info */
  --color-info-50:  #EFF6FF;
  --color-info-500: #3B82F6;
  --color-info-700: #1D4ED8;
}
```

### 1.6 Health Metric Colors

```css
:root {
  --color-heart:       #EF4444; /* Heart rate */
  --color-weight:      #F59E0B; /* Weight */
  --color-height:      #3B82F6; /* Height */
  --color-temperature: #F97316; /* Temperature */
  --color-oxygen:      #06B6D4; /* O2 Saturation */
  --color-sleep:       #8B5CF6; /* Sleep */
  --color-water:       #0EA5E9; /* Hydration */
  --color-nutrition:   #10B981; /* Nutrition */
}
```

---

## 2. Typography

### 2.1 Font Stack

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
               Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  --font-malayalam: 'Noto Sans Malayalam', sans-serif;
}
```

### 2.2 Type Scale

```css
:root {
  /* Display */
  --text-display-lg: 3rem;      /* 48px */
  --text-display-md: 2.5rem;    /* 40px */
  --text-display-sm: 2.25rem;   /* 36px */

  /* Headings */
  --text-heading-xl: 2rem;      /* 32px */
  --text-heading-lg: 1.75rem;   /* 28px */
  --text-heading-md: 1.5rem;    /* 24px */
  --text-heading-sm: 1.25rem;   /* 20px */
  --text-heading-xs: 1.125rem;  /* 18px */

  /* Body */
  --text-body-lg: 1.125rem;     /* 18px */
  --text-body-md: 1rem;         /* 16px */
  --text-body-sm: 0.875rem;     /* 14px */
  --text-body-xs: 0.75rem;      /* 12px */

  /* Labels */
  --text-label-lg: 1rem;        /* 16px */
  --text-label-md: 0.875rem;    /* 14px */
  --text-label-sm: 0.75rem;     /* 12px */
  --text-label-xs: 0.625rem;    /* 10px */
}
```

### 2.3 Font Weights

```css
:root {
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 2.4 Line Heights

```css
:root {
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### 2.5 Letter Spacing

```css
:root {
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
}
```

### 2.6 Typography Classes

```css
/* Display */
.text-display-lg {
  font-size: var(--text-display-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

.text-display-md {
  font-size: var(--text-display-md);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}

/* Headings */
.text-heading-xl {
  font-size: var(--text-heading-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.text-heading-lg {
  font-size: var(--text-heading-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.text-heading-md {
  font-size: var(--text-heading-md);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

.text-heading-sm {
  font-size: var(--text-heading-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

/* Body */
.text-body-lg {
  font-size: var(--text-body-lg);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
}

.text-body-md {
  font-size: var(--text-body-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.text-body-sm {
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

/* Labels */
.text-label-md {
  font-size: var(--text-label-md);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}
```

---

## 3. Spacing Scale

### 3.1 Base Unit: 4px

```css
:root {
  --space-0:   0;
  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
}
```

### 3.2 Container Widths

```css
:root {
  --container-sm:  640px;
  --container-md:  768px;
  --container-lg:  1024px;
  --container-xl:  1280px;
  --container-2xl: 1536px;
}
```

### 3.3 Section Spacing

```css
.section-padding-sm { padding: var(--space-12) 0; }
.section-padding-md { padding: var(--space-16) 0; }
.section-padding-lg { padding: var(--space-20) 0; }
.section-padding-xl { padding: var(--space-24) 0; }
```

---

## 4. Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm:   0.5rem;    /* 8px */
  --radius-md:   0.75rem;   /* 12px */
  --radius-lg:   1rem;      /* 16px */
  --radius-xl:   1.25rem;   /* 20px */
  --radius-2xl:  1.5rem;    /* 24px */
  --radius-3xl:  2rem;      /* 32px */
  --radius-full: 9999px;
}
```

---

## 5. Shadows

```css
:root {
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
               0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
               0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Colored shadows */
  --shadow-primary: 0 4px 14px 0 rgba(37, 99, 235, 0.25);
  --shadow-success: 0 4px 14px 0 rgba(16, 185, 129, 0.25);
  --shadow-error:   0 4px 14px 0 rgba(239, 68, 68, 0.25);
}
```

---

## 6. Transitions & Animations

### 6.1 Duration

```css
:root {
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   500ms;
}
```

### 6.2 Easing

```css
:root {
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce:  cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 6.3 Common Transitions

```css
.transition-default {
  transition: all var(--duration-normal) var(--ease-in-out);
}

.transition-fast {
  transition: all var(--duration-fast) var(--ease-in-out);
}

.transition-colors {
  transition: color, background-color, border-color var(--duration-fast) var(--ease-in-out);
}

.transition-transform {
  transition: transform var(--duration-normal) var(--ease-out);
}
```

### 6.4 Keyframe Animations

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## 7. Component Specifications

### 7.1 Buttons

#### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background-color: var(--color-primary-600);
  color: white;
  font-size: var(--text-body-md);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-in-out);
}

.btn-primary:hover {
  background-color: var(--color-primary-700);
  box-shadow: var(--shadow-primary);
}

.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary-200);
}

.btn-primary:active {
  background-color: var(--color-primary-800);
  transform: scale(0.98);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Secondary Button
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background-color: transparent;
  color: var(--color-primary-600);
  font-size: var(--text-body-md);
  font-weight: var(--font-weight-semibold);
  border: 2px solid var(--color-primary-600);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-in-out);
}

.btn-secondary:hover {
  background-color: var(--color-primary-50);
}

.btn-secondary:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-primary-200);
}
```

#### Button Sizes
```css
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-body-sm);
}

.btn-md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-body-md);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-body-lg);
}
```

### 7.2 Cards

#### Standard Card
```css
.card {
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--space-6);
}

.card-hover:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
  transition: all var(--duration-normal) var(--ease-out);
}
```

#### Feature Card
```css
.card-feature {
  background: linear-gradient(135deg, var(--color-primary-50), white);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
}

.card-feature .icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-4);
  background-color: var(--color-primary-100);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-600);
}

.card-feature .title {
  font-size: var(--text-heading-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-2);
}

.card-feature .description {
  font-size: var(--text-body-sm);
  color: var(--color-neutral-600);
}
```

### 7.3 Form Elements

#### Input Field
```css
.input {
  width: 100%;
  height: 48px;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  font-size: var(--text-body-md);
  color: var(--color-neutral-900);
  background-color: white;
  transition: all var(--duration-fast) var(--ease-in-out);
}

.input::placeholder {
  color: var(--color-neutral-400);
}

.input:hover {
  border-color: var(--color-neutral-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.input-error {
  border-color: var(--color-error-500);
}

.input-error:focus {
  box-shadow: 0 0 0 3px var(--color-error-100);
}
```

#### Label
```css
.label {
  display: block;
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
}
```

#### Error Message
```css
.error-message {
  font-size: var(--text-body-sm);
  color: var(--color-error-500);
  margin-top: var(--space-1);
}
```

### 7.4 Navigation

#### Header
```css
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 72px;
  background-color: white;
  border-bottom: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);
}

.header-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

#### Nav Link
```css
.nav-link {
  font-size: var(--text-label-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: all var(--duration-fast) var(--ease-in-out);
}

.nav-link:hover {
  color: var(--color-primary-600);
  background-color: var(--color-primary-50);
}

.nav-link-active {
  color: var(--color-primary-600);
  font-weight: var(--font-weight-semibold);
}
```

### 7.5 Hero Section

```css
.hero {
  padding: var(--space-20) 0;
  background: linear-gradient(135deg,
    var(--color-primary-600) 0%,
    var(--color-secondary-500) 50%,
    var(--color-accent-500) 100%);
  color: white;
}

.hero-content {
  max-width: var(--container-lg);
  margin: 0 auto;
  padding: 0 var(--space-6);
  text-align: center;
}

.hero-title {
  font-size: var(--text-display-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-6);
}

.hero-subtitle {
  font-size: var(--text-body-lg);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto var(--space-8);
}

.hero-cta-group {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}
```

### 7.6 Section Headers

```css
.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-12);
}

.section-label {
  font-size: var(--text-label-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-600);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  margin-bottom: var(--space-3);
}

.section-title {
  font-size: var(--text-heading-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-4);
}

.section-description {
  font-size: var(--text-body-lg);
  color: var(--color-neutral-600);
}
```

### 7.7 Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-label-sm);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-full);
}

.badge-primary {
  background-color: var(--color-primary-100);
  color: var(--color-primary-700);
}

.badge-success {
  background-color: var(--color-success-50);
  color: var(--color-success-700);
}

.badge-warning {
  background-color: var(--color-warning-50);
  color: var(--color-warning-700);
}

.badge-error {
  background-color: var(--color-error-50);
  color: var(--color-error-700);
}
```

---

## 8. Icons

### 8.1 Icon Library

**Recommended:** Lucide Icons (https://lucide.dev)
- Open source, MIT license
- Consistent 24x24 grid
- Stroke-based, customizable
- React component support

### 8.2 Icon Sizes

```css
.icon-xs { width: 12px; height: 12px; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
.icon-2xl { width: 48px; height: 48px; }
```

### 8.3 Key Icons Reference

| Purpose | Icon Name | Usage |
|---------|-----------|-------|
| DNA/Genetics | `dna` | Genetic features |
| Brain | `brain` | Cognitive games |
| Camera | `camera` | NutriScan |
| Heart | `heart-pulse` | Health tracking |
| Video | `video` | Telemedicine |
| Users | `users` | Family management |
| Shield | `shield-check` | Security |
| Chart | `bar-chart-3` | Analytics |
| Star | `star` | Achievements |
| Trophy | `trophy` | Gamification |
| Book | `book-open` | Resources |
| Mail | `mail` | Contact |
| Phone | `phone` | Support |
| Download | `download` | App download |
| Menu | `menu` | Mobile nav |
| X | `x` | Close |
| Check | `check` | Success |
| Alert | `alert-circle` | Warning |
| Arrow Right | `arrow-right` | CTA arrows |
| External Link | `external-link` | External links |

---

## 9. Responsive Breakpoints

### 9.1 Breakpoint Values

```css
/* Tailwind CSS default breakpoints */
--breakpoint-sm:  640px;   /* Small devices (landscape phones) */
--breakpoint-md:  768px;   /* Medium devices (tablets) */
--breakpoint-lg:  1024px;  /* Large devices (laptops) */
--breakpoint-xl:  1280px;  /* Extra large devices (desktops) */
--breakpoint-2xl: 1536px;  /* 2X large devices (large desktops) */
```

### 9.2 Mobile-First Media Queries

```css
/* Base styles (mobile) */
.element { ... }

/* Small and up */
@media (min-width: 640px) { ... }

/* Medium and up */
@media (min-width: 768px) { ... }

/* Large and up */
@media (min-width: 1024px) { ... }

/* Extra large and up */
@media (min-width: 1280px) { ... }
```

### 9.3 Container Responsiveness

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}
```

---

## 10. Accessibility Guidelines

### 10.1 Color Contrast

- **Normal text (< 18px):** Minimum 4.5:1 contrast ratio
- **Large text (>= 18px bold / 24px):** Minimum 3:1 contrast ratio
- **UI components & graphics:** Minimum 3:1 contrast ratio

### 10.2 Focus States

```css
/* Visible focus indicator for all interactive elements */
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Remove default outline, replace with custom */
*:focus {
  outline: none;
}
```

### 10.3 Touch Targets

- Minimum touch target size: 44x44 pixels
- Adequate spacing between interactive elements

### 10.4 Motion & Animation

```css
/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. Dark Mode Support (Future)

### 11.1 CSS Variables for Dark Mode

```css
:root {
  /* Light mode (default) */
  --bg-primary: white;
  --bg-secondary: var(--color-neutral-50);
  --text-primary: var(--color-neutral-900);
  --text-secondary: var(--color-neutral-600);
  --border-color: var(--color-neutral-200);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--color-neutral-900);
    --bg-secondary: var(--color-neutral-800);
    --text-primary: var(--color-neutral-50);
    --text-secondary: var(--color-neutral-300);
    --border-color: var(--color-neutral-700);
  }
}
```

---

## Usage Notes

1. **Tailwind CSS Integration:** This design system maps directly to Tailwind CSS configuration for easy implementation.

2. **CSS-in-JS:** If using styled-components or Emotion, export these tokens as a theme object.

3. **Figma:** Create a parallel Figma library using these exact values for design-development consistency.

4. **Storybook:** Document all components in Storybook with this design system for reference.

---

*Last updated: 2026-01-10*
