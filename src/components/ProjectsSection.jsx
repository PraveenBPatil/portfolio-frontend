import { useState } from "react";
import ProjectModal from "./ProjectModal";

// IMPORT IMAGES
import chatbotImg from "../assets/projects/chatbot.png";
import deepfakeImg from "../assets/projects/deepfake.png";
import portfolioImg from "../assets/projects/portfolio.png";

export default function ProjectsSection() {
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      title: "AI Chatbot System",
      image: chatbotImg,
      description:
        "A Python + React chatbot using NLP and Machine Learning with Flask backend.",
      tech: ["Python", "Flask", "React", "NLP"],
    },
    {
      title: "Deepfake Detection (AIML)",
      image: deepfakeImg,
      description:
        "A deepfake detection engine using CNN + TensorFlow, trained on face-swap datasets.",
      tech: ["TensorFlow", "Python", "OpenCV"],
    },
    {
      title: "Modern Portfolio Website",
      image: portfolioImg,
      description:
        "A premium 3D animated portfolio using React, Tailwind, and Framer Motion.",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-black text-center">
      {/* SECTION TITLE */}
      <h2 className="text-6xl font-extrabold mb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {projects.map((p, index) => (
          <div
            key={index}
            onClick={() => setModalProject(p)}
            className="
              group relative cursor-pointer rounded-3xl overflow-hidden 
              bg-white/10 backdrop-blur-2xl 
              border border-white/20 
              shadow-2xl hover:shadow-purple-500/40
              transition-all duration-500 
              hover:-translate-y-3 hover:scale-[1.03]
            "
            style={{ perspective: "1000px" }}
          >
            {/* 3D TILT */}
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* IMAGE */}
              <img
                src={p.image}
                className="
                  w-full h-56 object-cover rounded-2xl 
                  transition-all duration-700 
                  group-hover:scale-110
                "
              />

              {/* NEON BORDER */}
              <div
                className="
                  absolute inset-0 rounded-2xl 
                  border-2 border-purple-500/10 
                  group-hover:border-purple-500/50 
                  transition-all duration-500
                "
              ></div>

              {/* CARD BODY */}
              <div className="p-6">
                {/* TITLE */}
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-purple-300 transition">
                  {p.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-300 leading-relaxed text-sm">
                  {p.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 rounded-full text-xs font-medium
                        bg-purple-600/20 text-purple-300 
                        border border-purple-500/30
                        group-hover:bg-purple-600/30 
                        transition
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
