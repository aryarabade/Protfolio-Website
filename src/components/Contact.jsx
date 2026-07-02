// src/components/Contact.jsx
// Uses Web3Forms (https://web3forms.com) — no backend needed, free, delivers to Gmail.

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FiMail, FiPhone, FiLinkedin, FiGithub,
  FiCopy, FiCheck, FiSend, FiUser,
  FiMessageSquare, FiTag,
} from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Section from "./Section";
import Toast from "./Toast";
import { profile } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

// ── Floating decorative icons ─────────────────────────────────────────────────
function FloatingIcon({ icon: Icon, className }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute pointer-events-none select-none opacity-10 text-3xl ${className}`}
    >
      <Icon />
    </motion.div>
  );
}

// ── Copy-to-clipboard contact row ─────────────────────────────────────────────
function CopyRow({ icon: Icon, label, value, href }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* fail silently */ }
  };
  return (
    <div className="glass rounded-xl p-4 flex items-center justify-between gap-3">
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer" className="flex items-center gap-3 min-w-0 group">
        <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary-light">
          <Icon size={15} />
        </span>
        <div className="min-w-0">
          <p className="text-xs text-muted">{label}</p>
          <p className="text-sm font-medium truncate group-hover:text-accent transition-colors">{value}</p>
        </div>
      </a>
      <button onClick={handleCopy} aria-label={`Copy ${label}`}
        className="shrink-0 text-muted hover:text-accent transition-colors p-1.5">
        {copied ? <FiCheck size={14} className="text-accent" /> : <FiCopy size={14} />}
      </button>
    </div>
  );
}

// ── Form field wrapper ────────────────────────────────────────────────────────
function Field({ label, icon: Icon, error, children }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-mono text-muted mb-1.5">
        <Icon size={11} className="text-accent" /> {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

// ── Validation ────────────────────────────────────────────────────────────────
function validate({ name, email, subject, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  if (!subject.trim()) errors.subject = "Subject is required.";
  if (!message.trim()) errors.message = "Message is required.";
  else if (message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  const closeToast = useCallback(() => setToast({ message: "", type: "success" }), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio Contact: ${form.subject}`,
          from_name: form.name,
          // These field names show up clearly in the email you receive:
          Name: form.name,
          Email: form.email,
          Subject: form.subject,
          Message: form.message,
          // Redirect disabled — we handle success in UI
          redirect: "false",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setToast({ message: "Message sent! I'll reply soon 🎉", type: "success" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setToast({
        message: "Failed to send. Please email me directly at " + profile.email,
        type: "error",
      });
    } finally {
      setSending(false);
    }
  };

  const inputBase =
    "w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <Section id="contact" eyebrow="07 // Contact" title="Let's build something together">
      <Toast message={toast.message} type={toast.type} onClose={closeToast} />

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

        {/* ── Left: contact details ── */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-3"
        >
          <motion.p variants={fadeUp} className="text-muted leading-relaxed mb-5 text-[15px]">
            Have a role in mind or just want to say hi? Drop me a message — I
            usually reply within a day.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CopyRow icon={FiMail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <CopyRow icon={FiPhone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          </motion.div>
          <motion.div variants={fadeUp} className="flex gap-3 pt-1">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 glass px-4 py-3 rounded-xl text-sm hover:border-accent/40 hover:text-accent transition-colors">
              <FiLinkedin size={15} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 glass px-4 py-3 rounded-xl text-sm hover:border-accent/40 hover:text-accent transition-colors">
              <FiGithub size={15} /> GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: contact form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative glass rounded-2xl p-7 overflow-hidden"
        >
          <FloatingIcon icon={FiMail} className="top-4 right-8 text-primary" />
          <FloatingIcon icon={FiMessageSquare} className="bottom-6 right-5 text-accent" />

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" icon={FiUser} error={errors.name}>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Jane Doe"
                  className={`${inputBase} ${errors.name ? "border-red-500/60" : ""}`} />
              </Field>
              <Field label="Email Address" icon={FiMail} error={errors.email}>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="jane@example.com"
                  className={`${inputBase} ${errors.email ? "border-red-500/60" : ""}`} />
              </Field>
            </div>

            <Field label="Subject" icon={FiTag} error={errors.subject}>
              <input name="subject" value={form.subject} onChange={handleChange}
                placeholder="Internship / Role / Collaboration"
                className={`${inputBase} ${errors.subject ? "border-red-500/60" : ""}`} />
            </Field>

            <Field label="Message" icon={FiMessageSquare} error={errors.message}>
              <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputBase} resize-none ${errors.message ? "border-red-500/60" : ""}`} />
            </Field>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={!sending ? { scale: 1.02 } : {}}
              whileTap={!sending ? { scale: 0.98 } : {}}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3 rounded-xl glow hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <motion.span animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
                    <AiOutlineLoading3Quarters size={16} />
                  </motion.span>
                  Sending…
                </>
              ) : (
                <><FiSend size={15} /> Send Message</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
