import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";

// If you used local JSON: uncomment this import and ensure the file exists
// import contactAnimation from "../assets/lottie/contact.json";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setStatus("Copied to clipboard!");
    setTimeout(() => setStatus(""), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setSending(false);

      if (data.ok) {
        setStatus("Message sent successfully! ✔");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed. Try again.");
      }
    } catch (err) {
      setSending(false);
      setStatus("❌ Network error. Try later.");
    }
  };

  // ----- LOTTIE SOURCE -----
  // Option 1 (local file): uncomment import at top and use contactAnimation below
  // const lottieSource = contactAnimation;

  // Option 2 (CDN): a publicly hosted Lottie JSON (you can replace this URL)
  const lottieUrl = "https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json";

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white relative overflow-hidden">

      {/* BACKGROUND BLUR BLOBS */}
      <div className="absolute inset-0 z-0 opacity-18 pointer-events-none">
        <div className="animate-float absolute w-72 h-72 bg-purple-600 rounded-full blur-[120px] -top-20 -left-10"></div>
        <div className="animate-float2 absolute w-72 h-72 bg-pink-600 rounded-full blur-[120px] bottom-0 right-0"></div>
      </div>

      <h2 className="relative z-10 text-5xl font-extrabold text-center mb-16 
        bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 
        bg-clip-text text-transparent drop-shadow-xl">
        Contact Me
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">

        {/* LEFT: LOTTIE + INFO */}
        <div className="space-y-8 flex flex-col items-center md:items-start">
          <div className="w-full max-w-md p-6 rounded-3xl bg-white/6 backdrop-blur-xl border border-white/6 shadow-2xl">
            {/* Render Lottie */}
            <div className="flex items-center gap-6">
              <div className="w-36 h-36">
                {/* Option A: local JSON (uncomment and use if available) */}
                {/*
                <Lottie animationData={lottieSource} loop={true} />
                */}
                {/* Option B: CDN URL (default) */}
                <Lottie animationData={null} loop={true} rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} play={true} animationData={null}>
                  {/* If your Lottie lib requires a JSON load, we'll load via <Lottie> props below using 'animationData'. */}
                </Lottie>
                {/* NOTE: lottie-react supports passing a URL via fetch — but to keep it simple we will use <Lottie> with a small helper below. */}
              </div>

              <div>
                <p className="text-xl font-bold">Get in touch</p>
                <p className="text-gray-300 mt-2">I’m available for internships & freelance. Send a message and I’ll reply within 48 hrs.</p>
                <div className="mt-4 flex gap-3">
                  <button onClick={() => copyText("praveenbpatil18@gmail.com")} className="px-3 py-1 rounded-lg bg-white/6 text-sm">Copy Email</button>
                  <a href="mailto:praveenbpatil18@gmail.com" className="px-3 py-1 rounded-lg bg-purple-600/20 text-sm">Email Me</a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT INFO CARDS */}
          <div className="w-full grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-2xl" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-300">praveenbpatil18@gmail.com</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 flex items-center gap-4">
              <FaPhoneAlt className="text-purple-400 text-2xl" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-300">8867527459</div>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-2 text-3xl">
            <a href="https://www.linkedin.com/in/praveenpatil123/" target="_blank" className="hover:text-purple-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/PraveenBPatil" target="_blank" className="hover:text-purple-400 transition">
              <FaGithub />
            </a>
            <a href="https://instagram.com/praveen.patil.18" target="_blank" className="hover:text-purple-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form onSubmit={handleSubmit}
          className="p-10 rounded-3xl 
          backdrop-blur-2xl bg-white/6 border border-white/8 shadow-2xl
          hover:shadow-purple-500/40 transition-all space-y-6"
        >
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-purple-400 text-xl" />
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl border border-white/8 
              outline-none text-white focus:border-purple-500 focus:shadow-purple-500/30 transition-all"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-purple-400 text-xl" />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl border border-white/8 
              outline-none text-white focus:border-purple-500 transition-all"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-purple-400 text-xl" />
            <textarea
              rows="5"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl border border-white/8 
              outline-none text-white resize-none focus:border-purple-500 transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-4 text-lg font-semibold rounded-xl 
            bg-gradient-to-r from-purple-600 to-pink-500 
            hover:from-purple-500 hover:to-pink-400
            shadow-lg shadow-purple-600/40 hover:shadow-purple-400/50 
            active:scale-95 transition-all"
          >
            {sending ? "Sending..." : "Send Message 🚀"}
          </button>

          {status && (
            <p className="text-center text-purple-300 mt-4">{status}</p>
          )}
        </form>
      </div>

      {/* small helper script to load CDN Lottie if local file not used */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (async function(){
              try {
                // If you used local import above, skip this.
                const url = "${lottieUrl}";
                const res = await fetch(url);
                const json = await res.json();
                // Find the Lottie container and render
                const container = document.querySelector(".lottie-container");
                if(container && json) {
                  // use lottie-web if available
                  if(window.lottie) {
                    window.lottie.loadAnimation({
                      container,
                      renderer: 'svg',
                      loop: true,
                      autoplay: true,
                      animationData: json
                    });
                  } else {
                    // fallback: create an <img> preview (not ideal)
                    const img = document.createElement('img');
                    img.src = '';
                    container.appendChild(img);
                  }
                }
              } catch(e) {
                // ignore errors
              }
            })();
          `
        }}
      />

      {/* FLOAT ANIMATIONS */}
      <style>
        {`
          .animate-float {
            animation: float 8s infinite ease-in-out;
          }
          .animate-float2 {
            animation: float2 10s infinite ease-in-out;
          }
          @keyframes float {
            0% { transform: translateY(0px) }
            50% { transform: translateY(40px) }
            100% { transform: translateY(0px) }
          }
          @keyframes float2 {
            0% { transform: translateY(0px) }
            50% { transform: translateY(-40px) }
            100% { transform: translateY(0px) }
          }
        `}
      </style>
    </section>
  );
}
