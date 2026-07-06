<div align="center">

# ✦ Arya Rabade — Developer Portfolio

**A modern, animated, recruiter-ready portfolio built with React + Vite + Tailwind CSS + Framer Motion**

### 🌐 Live Demo
**🔗 https://protfolio-website-two-sepia.vercel.app/**

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
| Deployment | Vercel |

---

## 📂 Project Structure

```text
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
# Clone the repository
git clone https://github.com/aryarabade/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Add environment variable
echo "VITE_WEB3FORMS_KEY=your_key_here" > .env

# Start development server
npm run dev
```

> Get your free Web3Forms key at **https://web3forms.com** by signing up with your email.

---

## ✏️ Customizing Content

All portfolio content is managed from a single file:

```javascript
// src/data/portfolioData.js

export const profile = {
  name: "Your Name",
  ...
}

export const projects = [
  ...
]

export const skills = {
  ...
}
```

Simply edit `portfolioData.js` to update your portfolio without modifying any React components.

---

## 🌐 Live Demo

Visit the deployed portfolio here:

**https://protfolio-website-two-sepia.vercel.app/**

---

## 📦 Build & Deploy

```bash
# Create production build
npm run build
```

Deploy the generated `/dist` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

> Don't forget to add `VITE_WEB3FORMS_KEY` as an environment variable in your hosting platform.

---

## 📬 Contact

- **Email:** aryarabade2006@gmail.com
- **Portfolio:** https://protfolio-website-two-sepia.vercel.app/
- **GitHub:** https://github.com/aryarabade

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Designed & Built with ❤️ by **Arya Rabade**

</div>
