import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";
import FloatingProfile from "./FloatingProfile";
import ParallaxContainer from "./ParallaxContainer";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden"
    >

      <ParticleBackground />

      <ParallaxContainer>
        <div className="relative z-10 flex flex-col items-center">

          <FloatingProfile />

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight
            bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 
            bg-clip-text text-transparent drop-shadow-xl animate-fadeIn">
            Hi, I'm <br />
            <span className="font-black">Praveen Patil</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-200 animate-fadeIn animation-delay-200">
            Fullstack Developer • AI/ML Enthusiast
          </p>

          <div className="mt-8 flex flex-row gap-4 animate-fadeIn animation-delay-400">

            <MagneticButton
              onClick={() => (window.location.href = "#projects")}
              className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-200"
            >
              View Projects
            </MagneticButton>

            <MagneticButton
              onClick={() => (window.location.href = "#contact")}
              className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200"
            >
              Contact Me
            </MagneticButton>

          </div>

          <div className="mt-10 flex justify-center gap-6 text-white text-3xl animate-fadeIn animation-delay-600">

            <a href="https://github.com/PraveenBPatil" target="_blank">
              <FaGithub className="hover:text-yellow-300 transition scale-110" />
            </a>

            <a href="https://www.linkedin.com/in/praveenpatil123/" target="_blank">
              <FaLinkedin className="hover:text-yellow-300 transition scale-110" />
            </a>

            <a href="mailto:praveenbpatil18@gmail.com" target="_blank">
              <FaEnvelope className="hover:text-yellow-300 transition scale-110" />
            </a>

            <a href="https://instagram.com/praveen.patil.18" target="_blank">
              <FaInstagram className="hover:text-yellow-300 transition scale-110" />
            </a>

            <a href="https://wa.me/918867527459" target="_blank">
              <FaWhatsapp className="hover:text-yellow-300 transition scale-110" />
            </a>

          </div>

          <a
            href="#about"
            className="block mt-10 text-white animate-bounce text-xl opacity-70 hover:opacity-100"
          >
            ↓ Scroll Down
          </a>

        </div>
      </ParallaxContainer>
    </section>
  );
}
