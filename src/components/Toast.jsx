// src/components/Toast.jsx
// Lightweight success/error toast — no external dependency needed.

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-200 flex items-center gap-3 px-5 py-3.5 rounded-xl glass border shadow-xl min-w-70 max-w-sm ${
            isSuccess ? "border-accent/40 text-accent" : "border-red-500/40 text-red-400"
          }`}
        >
          {isSuccess ? <FiCheckCircle className="text-lg shrink-0" /> : <FiAlertCircle className="text-lg shrink-0" />}
          <p className="text-sm font-medium flex-1">{message}</p>
          <button onClick={onClose} className="text-muted hover:text-text transition-colors shrink-0">
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
