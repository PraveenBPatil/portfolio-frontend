import { motion } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[9999] flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl w-full bg-white/10 dark:bg-gray-900/40 border border-white/20 rounded-2xl shadow-2xl p-6 text-white relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400"
        >
          <FaTimes size={25} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        {/* Image */}
        <img
          src={project.image}
          className="rounded-lg w-full mb-4 shadow-lg"
        />

        {/* Description */}
        <p className="text-gray-200 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-600/40 border border-purple-300/40 rounded-lg text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
