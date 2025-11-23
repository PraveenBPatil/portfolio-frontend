import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="hidden md:flex fixed left-5 top-1/3 flex-col gap-5 text-white text-2xl z-50">

      <a href="https://github.com/PraveenBPatil" target="_blank">
        <FaGithub className="hover:text-yellow-300 transition" />
      </a>

      <a href="https://www.linkedin.com/in/praveenpatil123/" target="_blank">
        <FaLinkedin className="hover:text-yellow-300 transition" />
      </a>

      <a href="mailto:praveenbpatil18@gmail.com">
        <FaEnvelope className="hover:text-yellow-300 transition" />
      </a>

      <a href="https://instagram.com/praveen.patil.18" target="_blank">
        <FaInstagram className="hover:text-yellow-300 transition" />
      </a>

      <a href="https://wa.me/918867527459" target="_blank">
        <FaWhatsapp className="hover:text-yellow-300 transition" />
      </a>

    </div>
  );
}
