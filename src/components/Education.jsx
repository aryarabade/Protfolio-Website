// src/components/Education.jsx
import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <Section id="education" eyebrow="06 // Education" title="Academic background">
      <div className="relative border-l border-border pl-8 space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-9.75 top-1.5 w-3 h-3 rounded-full bg-primary-light ring-4 ring-primary/20" />
            <p className="font-mono text-xs text-muted mb-1">{edu.duration}</p>
            <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
            <p className="text-muted">{edu.institution}</p>
            <p className="text-accent text-sm font-mono mt-1">{edu.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
