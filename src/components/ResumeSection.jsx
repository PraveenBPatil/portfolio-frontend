import profile from "../assets/profile.jpeg";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6 bg-black text-white text-center">

      <h2 className="text-5xl font-extrabold mb-12 
        bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 
        bg-clip-text text-transparent">
        My Resume
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 
        bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/20">

        {/* PROFILE IMAGE */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl 
           border-4 border-purple-500/40">
          <img src={profile} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* TEXT + BUTTONS */}
        <div className="text-left">
          <h3 className="text-3xl font-bold mb-3">Praveen Patil</h3>
          <p className="text-gray-300 mb-6">
            Fullstack Developer • AI/ML Developer  
            <br />
            Here is my latest resume. You can view or download it below.
          </p>

          <div className="flex gap-4">

            {/* VIEW RESUME */}
            <a 
              href="/PRAVEEN PATIL.pdf" 
              target="_blank"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 
                rounded-lg text-white font-semibold transition"
            >
              View Resume
            </a>

            {/* DOWNLOAD RESUME */}
            <a 
              href="/PRAVEEN PATIL.pdf" 
              download 
              className="px-6 py-3 bg-yellow-400 text-black 
                hover:bg-yellow-300 rounded-lg font-semibold transition"
            >
              Download
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
