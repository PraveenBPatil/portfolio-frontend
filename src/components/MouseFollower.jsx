import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      animate={{
        x: position.x - 15,
        y: position.y - 15
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="w-10 h-10 rounded-full bg-purple-500/40 dark:bg-purple-300/40 blur-xl animate-pulse" />
    </motion.div>
  );
}
