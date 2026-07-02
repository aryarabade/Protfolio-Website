// src/App.jsx
import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Lazy-load sections further down the page so the initial bundle stays small
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <div className="min-h-screen bg-bg text-text">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />

        <Suspense fallback={<div className="text-center py-24 text-muted font-mono">Loading…</div>}>
          <Projects />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
        </Suspense>

        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
