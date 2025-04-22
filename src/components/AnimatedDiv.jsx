import React from "react";
import { motion } from "framer-motion";

export default function AnimatedDiv({ children }) {
  return (
    <motion.div
      className="w-full mt-30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -100 }}
    >
      {children}
    </motion.div>
  );
}
