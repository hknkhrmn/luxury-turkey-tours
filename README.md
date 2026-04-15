# 🌙 Luxury Turkey Tours

> A cinematic, luxury travel website built for elite American travelers exploring Turkey. Crafted with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-C8A96A?style=flat-square)

---

## ✨ Live Preview

```
npm install && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📸 Sections

| Section | Description |
|---|---|
| **Hero** | Fullscreen cinematic background with parallax, fade-in animations and dual CTA buttons |
| **Why Us** | 4-column icon grid highlighting key differentiators with hover effects |
| **Experiences** | Netflix-style horizontal scroll with hover text reveal — Yacht, Balloon, Fine Dining, Historical |
| **Destinations** | Interactive full-width image slider — Istanbul, Cappadocia, Antalya, Bodrum |
| **Custom Trip** | Glassmorphism form with interest tag selection and animated submit state |
| **Testimonials** | Animated quote slider with progress dots and navigation arrows |
| **Gallery** | Masonry grid with zoom-in hover effect |
| **Services** | 3-column numbered service cards — VIP Transfer, Private Chauffeur, Luxury Hotels and more |
| **About** | Split layout with stats, decorative image frame and gold badge |
| **Contact** | Dark CTA section with WhatsApp, Email and Call cards |
| **Footer** | 4-column footer with newsletter subscription, quick links and social icons |

---

## 🗂️ Project Structure

```
luxury-turkey-tours/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Root component — assembles all sections
    ├── index.css             # Global styles, Tailwind directives, animations
    │
    ├── data/
    │   └── siteData.js       # All site content (experiences, destinations, testimonials, etc.)
    │
    ├── hooks/
    │   └── useScrollReveal.js  # IntersectionObserver hook for scroll animations
    │
    ├── components/
    │   ├── Loader.jsx        # Animated page loader with progress bar
    │   ├── Navbar.jsx        # Sticky transparent navbar with mobile menu
    │   ├── StickyCTA.jsx     # Fixed WhatsApp + Plan Trip buttons (appears on scroll)
    │   └── Footer.jsx        # Multi-column footer with newsletter form
    │
    └── sections/
        ├── Hero.jsx
        ├── WhyUs.jsx
        ├── Experiences.jsx
        ├── Destinations.jsx
        ├── CustomTrip.jsx
        ├── Testimonials.jsx
        ├── Gallery.jsx
        ├── Services.jsx
        ├── About.jsx
        └── Contact.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm `9+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/luxury-turkey-tours.git
cd luxury-turkey-tours

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Background | `#0B0F1A` |
| Gold Accent | `#C8A96A` |
| Text Secondary | `#A0A0A0` |
| Heading Font | Playfair Display (Google Fonts) |
| Body Font | Inter (Google Fonts) |
| Max Width | 1320px |

### Key UI Effects

- Smooth scroll reveal on all sections (IntersectionObserver)
- Parallax hero background with slow zoom animation
- Glassmorphism form card with backdrop blur
- Horizontal scroll experience cards (Netflix style)
- Hover zoom on gallery and experience images
- Sticky navbar transition (transparent → dark on scroll)
- Page loader with animated progress bar

---

## ✏️ Customization

All site content lives in one file:

```
src/data/siteData.js
```

Edit this file to change experiences, destinations, testimonials, services and gallery images — no need to touch component files.

To replace images, swap the Unsplash URLs with your own hosted images or use a CDN.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18 | UI framework |
| vite | ^5 | Build tool & dev server |
| tailwindcss | ^3 | Utility-first CSS |
| lucide-react | latest | Icon library |
| swiper | latest | (available, not active by default) |

---

## 📄 License

MIT © 2026 — Free to use and modify for personal and commercial projects.

---

