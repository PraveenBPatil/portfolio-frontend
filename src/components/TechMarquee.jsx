import {
  SiReact,
  SiJavascript,
  SiPython,
  SiFlask,
  SiTailwindcss,
  SiGithub,
  SiMysql,
} from "react-icons/si";

export default function TechMarquee() {
  const tech = [
    { name: "React", icon: <SiReact className="text-blue-400 text-5xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300 text-5xl" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-100 text-5xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-white text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-teal-400 text-5xl" /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
      <h2 className="text-5xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 
        bg-clip-text text-transparent drop-shadow-xl">
        Technologies I Use
      </h2>

      {/* STATIC GRID (No scrolling) */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 px-6 text-center">
        {tech.map((t, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="
              w-24 h-24 flex items-center justify-center 
              rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg 
              border border-white/10 hover:scale-110 
              transition-all duration-300
            ">
              {t.icon}
            </div>

            <p className="mt-3 text-gray-300 font-semibold text-sm md:text-base">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
