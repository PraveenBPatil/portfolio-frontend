import {
  SiReact,
  SiJavascript,
  SiPython,
  SiFlask,
  SiTailwindcss,
  SiTensorflow,
  SiMysql,
  SiNodedotjs,
  SiSpringboot,
  SiGithub,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export default function GlassSkills() {
  const skills = [
    { name: "React JS", icon: <SiReact className="text-blue-400 text-5xl" /> },
    { name: "Java", icon: <FaJava className="text-orange-500 text-5xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-5xl" /> },
    { name: "Node JS", icon: <SiNodedotjs className="text-green-400 text-5xl" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300 text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-100 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400 text-5xl" /> },
    { name: "SQL / MySQL", icon: <SiMysql className="text-teal-400 text-5xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-white text-5xl" /> },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">

      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl">
        Technologies I Use
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-purple-500/40 hover:scale-[1.05] transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{skill.icon}</div>

            <h3 className="text-xl font-semibold text-gray-100 tracking-wide">
              {skill.name}
            </h3>

            <div className="mt-4 w-1/2 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-md shadow-purple-500/40"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
