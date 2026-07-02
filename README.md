<div align="center">

# ✦ Arya Rabade — Developer Portfolio

**A modern, animated, recruiter-ready portfolio built with React + Vite + Tailwind CSS + Framer Motion**

[![GitHub](https://img.shields.io/badge/GitHub-aryarabade-22d3ee?style=for-the-badge&logo=github)](https://github.com/aryarabade)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Arya_Rabade-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/arya-rabade)

</div>

---

## ✨ Features

- 🎨 **Premium dark UI** — glassmorphism cards, gradient accents, aurora background
- ⚡ **Smooth animations** — Framer Motion scroll reveals, stagger effects, hover lifts
- 📬 **Working contact form** — Web3Forms delivers messages straight to Gmail
- 📱 **Fully responsive** — mobile, tablet, laptop, desktop
- 🔢 **Scroll progress bar** — active nav highlighting as you scroll
- 🚀 **Lazy loaded** — fast initial load with React Suspense
- 🔝 **Scroll-to-top button** — appears after scrolling 500px
- 🌐 **SEO ready** — Open Graph, Twitter card, meta tags

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Contact | Web3Forms |
| Icons | React Icons |
| Fonts | Space Grotesk · Inter · JetBrains Mono |
| Deployment | Vercel / Netlify |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed nav with scroll progress + mobile menu
│   ├── Hero.jsx          # Typing animation, photo, CTA buttons
│   ├── About.jsx         # Personal story and goals
│   ├── Skills.jsx        # Categorized skill badges
│   ├── Experience.jsx    # Work timeline
│   ├── Projects.jsx      # Project cards with GitHub links
│   ├── Certifications.jsx
│   ├── Education.jsx     # Academic timeline
│   ├── Contact.jsx       # Web3Forms contact form
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   ├── Loader.jsx
│   └── Toast.jsx         # Success/error notifications
├── data/
│   └── portfolioData.js  # ← edit this to update all content
└── utils/
    └── animations.js     # Shared Framer Motion variants
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/aryarabade/portfolio.git
cd portfolio

# Install dependencies
npm install

# Add environment variable
echo "VITE_WEB3FORMS_KEY=your_key_here" > .env

# Start dev server
npm run dev
```

> Get your free Web3Forms key at [web3forms.com](https://web3forms.com) — just enter your email.

---

## ✏️ Customizing Content

All site content lives in one file:

```js
// src/data/portfolioData.js
export const profile = { name: "Your Name", ... }
export const projects = [ ... ]
export const skills = { ... }
```

Edit that file — everything else updates automatically. No need to touch any component.

---

## 📦 Build & Deploy

```bash
npm run build        # outputs to /dist
```

Deploy the `/dist` folder to **Vercel**, **Netlify**, or **GitHub Pages** in one click.

> Add `VITE_WEB3FORMS_KEY` as an environment variable in your hosting dashboard.

---

<div align="center">

Designed & built by **Arya Rabade** · [aryarabade2006@gmail.com](mailto:aryarabade2006@gmail.com)

</div>
