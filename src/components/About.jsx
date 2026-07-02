// src/components/About.jsx
import { motion } from "framer-motion";
import Section from "./Section";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <Section id="about" eyebrow="01 // About" title="A bit about me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <p className="text-muted leading-relaxed text-lg">{about.story}</p>
        <p className="text-muted leading-relaxed text-lg">{about.goal}</p>
        <p className="text-muted leading-relaxed text-lg">{about.motivation}</p>
      </motion.div>
    </Section>
  );
}
