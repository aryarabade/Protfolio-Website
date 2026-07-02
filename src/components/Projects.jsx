// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Section from "./Section";
import { projects } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

function TechBadge({ label }) {
  return (
    <span className="font-mono text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 0 30px -8px rgba(99,102,241,0.35)" }}
      transition={{ duration: 0.25 }}
      className="glass rounded-2xl p-6 flex flex-col border border-white/[0.07] hover:border-accent/30 transition-colors"
    >
      {/* header */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
        <div className="flex gap-2.5 shrink-0 text-muted mt-0.5">
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              whileHover={{ y: -2, color: "var(--color-accent)" }}
              className="transition-colors"
            >
              <FiGithub size={17} />
            </motion.a>
          ) : (
            <FiGithub size={17} className="opacity-25" title="Repo coming soon" />
          )}
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              whileHover={{ y: -2, color: "var(--color-accent)" }}
              className="transition-colors"
            >
              <FiExternalLink size={17} />
            </motion.a>
          ) : null /* hide live icon when no URL instead of showing faded */}
        </div>
      </div>

      <p className="font-mono text-xs text-accent/80 mb-3">{project.subtitle}</p>
      <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

      <ul className="space-y-1.5 mb-5">
        {project.features.map((f) => (
          <li key={f} className="text-sm text-muted flex gap-2 items-start">
            <span className="text-primary-light mt-1.25 shrink-0 text-xs">▹</span>
            {f}
          </li>
        ))}
      </ul>

      {/* tech + action buttons */}
      <div className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium border border-border text-muted hover:border-accent hover:text-accent transition-colors px-3 py-1.5 rounded-lg"
            >
              <FiGithub size={13} /> GitHub Repo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors px-3 py-1.5 rounded-lg"
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04 // Projects" title="Things I've built">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
