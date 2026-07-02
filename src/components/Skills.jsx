// src/components/Skills.jsx
import { motion } from "framer-motion";
import Section from "./Section";
import { skills, softSkills } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const softSkillIcons = {
  Communication: "💬",
  Teamwork: "🤝",
  "Quick Learning": "⚡",
  "Problem Solving": "🧠",
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 // Skills" title="Technical skills">
      <div className="space-y-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-xs text-muted mb-3 uppercase tracking-widest">{category}</h3>
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex flex-wrap gap-2.5"
            >
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{ y: -3, borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                  className="glass px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}

        <div>
          <h3 className="font-mono text-xs text-muted mb-3 uppercase tracking-widest">Soft Skills</h3>
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {softSkills.map((skill) => (
              <motion.div
                key={skill}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: "var(--color-primary-light)" }}
                className="glass rounded-xl py-5 text-center cursor-default transition-colors"
              >
                <div className="text-2xl mb-1.5">{softSkillIcons[skill] ?? "✦"}</div>
                <p className="text-sm font-medium">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
