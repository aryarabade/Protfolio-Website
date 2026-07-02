// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const socials = [
  { href: profile.github, icon: FiGithub, label: "GitHub" },
  { href: profile.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: FiMail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left space-y-1">
          <p className="font-display font-semibold gradient-text">{profile.name}</p>
          <p className="text-muted text-xs font-mono flex items-center gap-1.5 justify-center sm:justify-start">
            <FiCode size={12} /> Built with React, Tailwind &amp; Framer Motion · {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex gap-5">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -3, color: "var(--color-accent)" }}
              className="text-muted transition-colors text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
