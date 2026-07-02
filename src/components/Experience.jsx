// src/components/Experience.jsx
import { motion } from "framer-motion";
import Section from "./Section";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 // Experience" title="Where I've worked">
      <div className="relative border-l border-border pl-8 space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-9.75 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />
            <p className="font-mono text-xs text-muted mb-1">{job.duration}</p>
            <h3 className="font-display text-xl font-semibold">{job.role}</h3>
            <p className="text-primary-light font-medium mb-3">
              {job.company} · {job.location}
            </p>
            <ul className="space-y-2 mb-4">
              {job.points.map((point, idx) => (
                <li key={idx} className="text-muted leading-relaxed flex gap-2">
                  <span className="text-accent mt-1.5 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-muted border border-border px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
