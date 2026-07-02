// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const roles = ["Full-Stack Developer", "MERN Stack Engineer"];
const badges = ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 35 : 70;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) setTimeout(() => setIsDeleting(true), 1400);
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span>
      {text}
      <span className="inline-block w-0.5 h-6 bg-accent ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-16">
      <div className="bg-aurora" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-center">

        {/* ── Text column ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-mono text-accent text-sm mb-4"
          >
            <FiMapPin size={13} /> {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text block sm:inline">{profile.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl sm:text-2xl text-text/80 font-medium mb-6 h-8"
          >
            <TypingText />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted leading-relaxed max-w-xl mb-8 text-[15px]"
          >
            {profile.summary}
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-9"
          >
            {badges.map((b) => (
              <span key={b}
                className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-3 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-9"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-linear-to-r from-primary to-primary-light text-white font-semibold px-6 py-3 rounded-xl glow hover:brightness-110 transition-all"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border border-border text-text font-semibold px-6 py-3 rounded-xl hover:border-accent hover:text-accent transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors font-medium px-3 py-3"
            >
              <FiDownload size={15} /> Resume
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="flex gap-5"
          >
            {[
              { href: profile.github, icon: FiGithub, label: "GitHub" },
              { href: profile.linkedin, icon: FiLinkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: FiMail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, color: "var(--color-accent)" }}
                className="text-muted transition-colors text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Photo column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative justify-self-center"
        >
          {/* glow halo */}
          <div className="absolute -inset-5 rounded-3xl bg-linear-to-br from-primary to-accent opacity-25 blur-2xl" />
          {/* subtle ring animation */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-3xl border border-accent/20"
          />
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-border glass">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
