# Akash — Personal Portfolio Website

> **WordPress Developer & Creative Digital Professional**  
> Technical Web Engineering × Cinematic Post-Production

A modern, highly animated, dark cinematic portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed for agency clients, recruiters, and hiring managers.

---

## 🌟 Positioning & Identity

- **Name:** Akash
- **Primary Role:** WordPress Developer & Creative Digital Professional
- **Specialties:** WordPress • Web Design • Video • Color Grading • Digital Marketing
- **Core Mantra:** *I BUILD. I EDIT. I DESIGN. I CREATE.*
- **Academic Foundation:** MCA Candidate (BCA Foundation) — Yenepoya University

---

## 🚀 Key Features & Animations

1. **Dark Cinematic Aesthetic:** Deep obsidian darks (`#08080a`), warm cinematic amber-gold accents (`#E5A93C`), fine borders, frosted glassmorphism, and subtle film noise textures.
2. **Interactive Custom Cursor:** Smooth spring-following cursor that expands on interactive elements and adapts contextually with dynamic labels (`VIEW`, `PLAY`, `DRAG`, `TOOL`, `EXPAND`). Automatically disabled on mobile/touch devices.
3. **Smooth Momentum Scroll:** Integrated with Lenis for butter-smooth momentum scrolling, with built-in `prefers-reduced-motion` accessibility support.
4. **Cinematic Hero Section:** Animated brand typography, real profile photo reveal, floating tech badges, magnetic CTA buttons, and interactive showreel teaser modal.
5. **WordPress Work Showcase (Primary Section):** 3D perspective tilt cards, project info reveals, tag filters, speed metrics (98+), and comprehensive case study popups.
6. **Creative Portfolio:** Video editing, DaVinci Resolve color grading, vertical reels (9:16), motion graphics, and photography with interactive video preview modal.
7. **Interactive LUTs & Presets Before/After Slider:** Draggable comparison slider testing flat Log captures (Sony S-Log3, Apple Log, Rec.709) against 3D graded LUT looks.
8. **Services Accordion:** 7 structured service offerings (01 to 07) with expandable descriptions, deliverables, and tech stack badges.
9. **Experience & Education Timelines:** Vertical animated timeline detailing software development experience at Thinksonic Global Solutions Pvt Ltd and MCA/BCA degrees at Yenepoya University.
10. **Production Toolkit:** Interactive grid of 13+ tools (WordPress, Elementor, DaVinci Resolve, Premiere Pro, After Effects, Flutter, Firebase, Figma, etc.) with dynamic usage HUD.
11. **Validated Contact Hub:** Form with client validation, service select, budget ranges, copy-to-clipboard email, confetti feedback, and prefilled mailto fallback.
12. **Editorial Footer:** Animated marquee banner, quick navigation, back-to-top button, and social links.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14 (App Router)** | Framework & SSR/SSG Routing |
| **React 18 & TypeScript** | Component Architecture & Type Safety |
| **Tailwind CSS** | Styling & Design System |
| **Framer Motion** | Complex UI Animations, Modals & Staggers |
| **Lenis** | Smooth Momentum Scrolling |
| **Lucide React** | Clean, Modern Iconography |
| **Canvas Confetti** | Form Submission Celebration Effects |

---

## 📂 Project Architecture

```plaintext
├── public/
│   ├── images/
│   │   ├── akash-profile.png           # Akash's official profile portrait
│   │   ├── luts/                       # Before/After color grading assets
│   │   └── placeholders/               # WordPress & Creative showcase graphics
├── src/
│   ├── app/
│   │   ├── globals.css                 # Global styling, tokens & noise
│   │   ├── layout.tsx                  # Root layout & SEO metadata
│   │   └── page.tsx                    # Main single-page portfolio
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx        # Interactive spring cursor
│   │   │   ├── MagneticButton.tsx      # Physics magnetic button
│   │   │   ├── PageLoader.tsx          # Initial page intro loader
│   │   │   └── SmoothScroll.tsx        # Lenis scroll provider
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Sticky scrollspy navbar & mobile drawer
│   │   │   └── Footer.tsx              # Marquee & copyright footer
│   │   ├── modals/
│   │   │   ├── ProjectModal.tsx        # In-depth WordPress case study modal
│   │   │   └── VideoModal.tsx          # Showreel & creative video modal
│   │   └── sections/
│   │       ├── HeroSection.tsx         # Cinematic Hero
│   │       ├── AboutSection.tsx        # About & manifesto words
│   │       ├── SkillsSection.tsx       # Categorized interactive skills
│   │       ├── WordPressSection.tsx    # WordPress work cards
│   │       ├── CreativeSection.tsx     # Creative video/photo portfolio
│   │       ├── LutSliderSection.tsx    # Draggable Before/After LUT slider
│   │       ├── ServicesSection.tsx     # 7 Expandable services
│   │       ├── ExperienceSection.tsx   # Thinksonic timeline
│   │       ├── EducationSection.tsx    # MCA & BCA degree cards
│   │       ├── ToolsSection.tsx        # Interactive toolkit HUD
│   │       └── ContactSection.tsx      # Working contact form & mailto
│   └── data/                           # Centralized content store
│       ├── profile.ts                  # Personal bio & contact details
│       ├── projects.ts                 # WordPress projects & case studies
│       ├── creative.ts                 # Creative items & categories
│       ├── luts.ts                     # Before/After LUT presets
│       ├── services.ts                 # Services list & deliverables
│       ├── experience.ts               # Work history & internship data
│       ├── education.ts                # Degrees & academic focus
│       ├── skills.ts                   # Categorized skills
│       └── tools.ts                    # Toolkit data & descriptions
```

---

## ⚙️ Installation & Development

### 1. Clone the repository
```bash
git clone https://github.com/smooth8x/akash-portfolio.git
cd akash-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Start production server
```bash
npm run start
```

---

## ✏️ How to Customize & Add Content

All portfolio content is decoupled from UI components and stored in modular files under `src/data/`:

1. **Add Real WordPress Projects:** Open `src/data/projects.ts` and add or edit project objects with real screenshots, URLs, and case studies.
2. **Add Video Showreels / MP4 / YouTube Links:** Open `src/data/creative.ts` and insert your video embed URLs into `videoUrl`.
3. **Update LUT Before/After Images:** Place new images in `public/images/luts/` and configure them in `src/data/luts.ts`.
4. **Update Experience / Dates:** Edit `src/data/experience.ts` to replace placeholder dates with verified dates.
5. **Update Education:** Edit `src/data/education.ts` to set graduation years or specialized coursework.
6. **Update Instagram URL:** Edit `src/data/profile.ts` to replace the placeholder Instagram link with your live handle.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import the `akash-portfolio` repository.
4. Click **Deploy**. Next.js will automatically detect build settings.

### Deploy to Netlify / GitHub Pages
- Run `npm run build` to generate the production build.

---

## 📬 Contact & Links

- **Email:** [akash965644@gmail.com](mailto:akash965644@gmail.com)
- **GitHub:** [https://github.com/smooth8x](https://github.com/smooth8x)
- **LinkedIn:** [https://www.linkedin.com/in/akashpradeep9656/](https://www.linkedin.com/in/akashpradeep9656/)

---

© 2026 Akash. All rights reserved.
