export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <a 
          href="#home"
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Praveen
        </a>

        <nav className="flex items-center gap-8 text-white">

          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>

          <a 
            href="/PRAVEEN PATIL.pdf" 
            download
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:opacity-90 transition"
          >
            Resume
          </a>

        </nav>
      </div>
    </header>
  );
}
