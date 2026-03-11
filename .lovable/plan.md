

# A-verse — Anjali Kamal's Portfolio

A modern, cosmic-warm dark portfolio with actual 3D elements, smooth animations, and a creative multi-page experience.

## Design System
- **Theme**: Dark backgrounds (#0F0F0F / deep charcoal) with warm amber/gold accents and subtle warm gradients
- **Style**: Minimal, futuristic, glassmorphism cards, clean typography
- **3D**: React Three Fiber for hero background with floating geometric shapes and particles
- **Animations**: Smooth scroll reveals, hover effects, page transitions, floating elements

## Pages & Sections

### 1. Main Page (Single-page scroll)

**Navbar** — Sticky, transparent → glass blur on scroll
- Logo: "A-verse" (links to home)
- Links: About, Experience, Skills, Blog, Creative Corner, Signature Book, Contact
- Resume download button
- "🟢 Available for Work" badge

**Hero Section** — Keep the bold minimal style from current site
- Large "ANJALI" heading, subtitle about full stack dev & creative tech
- 3D floating shapes background (Three.js canvas with warm-toned particles/geometries)
- "View Work" and "Contact" CTAs
- Location badge + role badge at bottom

**About Section** — Bio with photo, social links (LinkedIn, GitHub, Instagram)
- Content from current site + creative storytelling angle

**Experience Section** — Timeline layout with glassmorphism cards
- All 4 roles: FABRO, JMRC, APS Committee, GSSoC
- Tech tags, dates, bullet points per role

**Projects/Work Section** — Showcase grid with hover animations
- FocusMate, JMRC Portal, FABRO, APS Website, Palate
- Live demo links, tech stacks
- "See more →" link to GitHub

**Skills Section** — Interactive category cards with icons
- Full Stack: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, etc.
- Design: UI/UX, Figma, Graphic Design
- Creative: Photography, Editing, Visual Storytelling, Writing
- Tools: Git, Docker, AWS, Vercel, Linux

**Testimonials Section** — Carousel of quotes from mentors/colleagues (all 7 testimonials from current site)

**Blog Preview** — 2-3 sample blog cards linking to blog page

**Signature Book Preview** — Interactive guestbook section (mock data, floating cards UI)

**Currently Exploring** — Animated section: advanced full stack, creative coding, digital storytelling

**Contact Section** — "Let's Build Something Together" with contact form + social links

**Footer** — A-verse logo, tagline, GitHub/LinkedIn/Email links

### 2. Blog Page (`/blog`)
- Grid of blog cards with hardcoded sample posts (you'll provide real content later)
- Each card: title, excerpt, reading time, tags
- Individual blog post pages with clean article layout and reading progress bar

### 3. Creative Corner Page (`/creative`)
- **UI Design Showcase**: Mockup gallery with lightbox
- **Photography**: Masonry/grid gallery with aesthetic shots
- **Writings**: Poetry/reflections displayed as styled cards
- Subtitle: "Where creativity meets curiosity"

### 4. Signature Book Page (`/signature-book`)
- Guestbook UI with name + message form
- Entries displayed as floating glassmorphism cards
- Mock data for now (no backend)

## Key UX Details
- Smooth scroll indicator on hero
- Section reveal animations on scroll
- Card hover scale/glow effects
- Blog reading progress bar
- Mobile-responsive throughout
- GitHub activity section with "latest push" display
- Music/lyrics section inspired by current site

