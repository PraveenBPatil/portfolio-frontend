import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import profile from "../data/profile";

export default function Hero() {
  return (
    <header className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover -z-10 parallax-bg"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')`, backgroundAttachment: "fixed" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 -z-5"></div>

      <div className="container mx-auto h-full flex items-center px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Hi, I’m <span className="text-indigo-400">{profile.name}</span></h1>
          <p className="mt-4 text-xl md:text-2xl text-indigo-200">{profile.title} — <TypingEffect texts={["Full-Stack Developer","AIML Enthusiast","React & Python"]} /></p>
          <p className="mt-6 text-gray-200/90">{profile.bio}</p>

          <div className="mt-8 flex gap-4">
            <a href={profile.resume} download className="inline-block px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold text-sm btn-zoom">Download Resume</a>
            <a href="#projects" className="inline-block px-5 py-3 border rounded-md text-white/90 hover:bg-white/5">View Projects</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="ml-auto hidden md:block">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
