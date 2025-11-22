import { motion } from "framer-motion";

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 opacity-60">
      
      {/* Main Purple Blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/50 dark:bg-purple-700/40 rounded-full blur-3xl"
        animate={{
          x: [0, 120, -100, 0],
          y: [0, -100, 150, 0],
          scale: [1, 1.2, 1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink Blob */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[350px] h-[350px] bg-pink-500/40 dark:bg-pink-700/40 rounded-full blur-3xl"
        animate={{
          x: [-120, 0, 100, -80],
          y: [100, -50, 80, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue Blob */}
      <motion.div
        className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-blue-500/40 dark:bg-blue-700/40 rounded-full blur-3xl"
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 60, -120, 0],
          scale: [1, 1.15, 1, 0.95],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
