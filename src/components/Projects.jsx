import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "AI Chatbot", desc: "RAG + LLM chatbot with Flask API", img: "/assets/proj1.jpg", link: "#" },
  { id: 2, title: "Advance Deepfake Detection Using AIML", desc: "CV model to detect manipulated videos", img: "/assets/proj2.jpg", link: "#" },
  { id: 3, title: "Modern Portfolio App", desc: "React + Tailwind + Flask +JS +", img: "/assets/proj3.jpg", link: "#" }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p,i) => (
            <motion.a key={p.id} href={p.link} className="block rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 card-anim" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.12, duration: 0.5 }}>
              <div className="h-44 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-indigo-600"><span>View →</span><span className="text-gray-400">2025</span></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
