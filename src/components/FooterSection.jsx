import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="py-10 bg-black text-gray-400 text-center">

      <div className="flex justify-center gap-6 text-3xl mb-4">

        <a href="https://github.com/PraveenBPatil"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/praveenpatil123/"><FaLinkedin/></a>
        <a href="mailto:praveenbpatil18@gmail.com"><FaEnvelope/></a>
        <a href="https://instagram.com/praveen.patil.18"><FaInstagram/></a>
        <a href="https://wa.me/918867527459"><FaWhatsapp/></a>

      </div>

      <p className="text-sm">© 2025 Praveen Patil — All Rights Reserved.</p>

    </footer>
  );
}
