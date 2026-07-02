// src/components/Certifications.jsx
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import Section from "./Section";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 // Certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl p-5 flex gap-4 hover:border-accent/40 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <FiAward />
            </div>
            <div>
              <h3 className="font-display font-semibold leading-snug">{cert.name}</h3>
              <p className="text-sm text-primary-light mb-1">
                {cert.org} · {cert.date}
              </p>
              <p className="text-sm text-muted leading-relaxed">{cert.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
