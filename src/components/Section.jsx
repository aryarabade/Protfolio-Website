// src/components/Section.jsx
// Reusable wrapper that gives every section consistent spacing, the eyebrow label,
// heading, and a scroll-reveal entrance animation.

import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative max-w-4xl mx-auto px-6 py-24 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="font-mono text-accent text-sm mb-2 tracking-wide">{eyebrow}</p>
          )}
          {title && (
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">{title}</h2>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
