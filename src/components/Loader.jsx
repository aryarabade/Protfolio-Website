// src/components/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-100 bg-bg flex items-center justify-center"
    >
      <motion.span
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="font-mono text-accent text-lg"
      >
        loading_portfolio()...
      </motion.span>
    </motion.div>
  );
}
