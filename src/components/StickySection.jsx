import { motion } from "framer-motion";

// ICONS
import { FaJava, FaLaptopCode } from "react-icons/fa";
import { SiPython, SiJavascript, SiReact, SiFlask, SiMysql } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function StickySection() {
  const journey = [
    {
      year: "2025",
      title: "Full-Stack Developer Intern — JSpiders",
      description:
        "Worked on Java, HTML, CSS, JavaScript, React, and database fundamentals. Built full-stack mini projects and strengthened backend + frontend foundations.",
      icon: <FaLaptopCode className="text-pink-400 text-4xl" />,
    },
    {
      year: "2024 – 2025",
      title: "Student Intern — Rooman Technologies",
      description:
        "Hands-on experience in Data Analytics, Excel automation, SQL, data visualization, and dashboard creation. Gained exposure to real business insights.",
      icon: <SiMysql className="text-yellow-300 text-4xl" />,
    },
    {
      year: "2023 – 2024",
      title: "Python Developer — LetsGrowMore",
      description:
        "Developed Python-based automation and ML tasks, worked on API interactions, data processing, and beginner-level ML model building.",
      icon: <SiPython className="text-yellow-400 text-4xl" />,
    },
    {
      year: "2023 – 2024",
      title: "Data Scientist Intern — Oasis Infobyte",
      description:
        "Completed ML projects including data cleaning, visualization and classification models.",
      icon: <GiArtificialIntelligence className="text-purple-400 text-4xl" />,
    },
    {
      year: "2023",
      title: "Web Development Intern — Bharat Intern",
      description:
        "Created responsive websites using HTML, CSS, JavaScript, and React. Built landing pages and UI components.",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    },
    {
      year: "2022",
      title: "Java Developer Intern — CodeClause",
      description:
        "Learned Java fundamentals, OOP, debugging, and desktop application development.",
      icon: <FaJava className="text-orange-400 text-4xl" />,
    },
    {
      year: "2024",
      title: "Certificate — Data Visualisation",
      description:
        "Learned dashboards, data storytelling, charts, and insight-driven business decisions.",
      icon: <SiFlask className="text-green-300 text-4xl" />,
    },
    {
      year: "2023 – 2025",
      title: "AI & ML Projects",
      description:
        "Built AI chatbot, Deepfake detection system, and multiple ML mini-projects using Python, CV, NLP & OpenCV.",
      icon: <GiArtificialIntelligence className="text-pink-400 text-4xl" />,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-b from-purple-900 via-pink-800 to-black"></div>

      <h2 className="text-center text-5xl font-extrabold text-white mb-20 drop-shadow-xl">
        🚀 My Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b 
            from-purple-500 via-pink-500 to-orange-400 shadow-[0_0_20px_rgba(255,0,150,0.4)]"></div>

        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center gap-8 mb-24 
              ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Year Badge */}
            <div className="z-20 bg-gradient-to-br from-purple-600 to-pink-500 
                text-white font-bold text-xl w-24 h-24 flex justify-center items-center 
                rounded-full shadow-lg border border-white/10">
              {item.year}
            </div>

            {/* Icon */}
            <div className="z-20 bg-white/10 p-4 rounded-xl backdrop-blur-md 
                border border-white/10 shadow-lg">
              {item.icon}
            </div>

            {/* Content Card */}
            <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl 
                border border-white/10 max-w-md text-white hover:bg-white/20 
                transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 
                  bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
