import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}   // ❗ REMOVED y:40
      whileInView={{ opacity: 1 }}   // ❗ REMOVED y:0
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
