import CircularSkill from "./CircularSkill";

import {
  SiReact,
  SiJavascript,
  SiPython,
  SiFlask,
  SiTailwindcss,
  SiTensorflow,
  SiMysql,
  SiSpringboot,
  SiNodedotjs
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function SkillsSection() {
  const skills = [
    { name: "HTML / CSS", level: 90, icon: <SiTailwindcss /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript /> },
    { name: "React JS", level: 80, icon: <SiReact /> },
    { name: "Python", level: 90, icon: <SiPython /> },
    { name: "Flask / FastAPI", level: 75, icon: <SiFlask /> },
    { name: "Machine Learning", level: 70, icon: <SiTensorflow /> },
    { name: "SQL/MySQL", level: 90, icon: <SiMysql /> },
    { name: "Java", level: 95, icon: <FaJava /> },
    { name: "Deep Learning", level: 89, icon: <GiArtificialIntelligence /> },
    { name: "Spring Boot", level: 91, icon: <SiSpringboot /> },
    { name: "Node.js", level: 92, icon: <SiNodedotjs /> },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
      <h2 className="text-5xl font-extrabold mb-12 text-center 
      bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300
      bg-clip-text text-transparent drop-shadow-xl">
        Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, i) => (
          <CircularSkill
            key={i}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}
