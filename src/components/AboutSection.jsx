export default function SectionDivider() {
  return (
    <div className="w-full relative py-10 overflow-hidden">

      {/* 🌌 BACKGROUND NEON CLOUD GLOW */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div className="w-2/3 h-10 bg-purple-500 blur-[90px]"></div>
      </div>

      {/* ⚡ MULTI-LAYER GRADIENT LASER */}
      <div className="relative w-full h-[3px] rounded-full overflow-hidden">
        
        {/* Layer 1 — Slow */}
        <div className="absolute inset-0 w-[300%] h-full 
          bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400
          animate-ultraGradientSlow"></div>

        {/* Layer 2 — Medium speed */}
        <div className="absolute inset-0 w-[300%] h-full 
          bg-gradient-to-r from-purple-300 via-fuchsia-500 to-amber-300
          opacity-60 animate-ultraGradientMed"></div>

        {/* Layer 3 — Fast overlay */}
        <div className="absolute inset-0 w-[300%] h-full 
          bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-400
          opacity-40 animate-ultraGradientFast"></div>

      </div>

      {/* ✴ FLOATING PARTICLE 1 — White */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <div className="w-3 h-3 bg-white rounded-full shadow-xl shadow-purple-500/70 
        animate-particleFast"></div>
      </div>

      {/* ✴ PARTICLE 2 — Pink */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-80">
        <div className="w-4 h-4 bg-pink-400 rounded-full shadow-xl shadow-pink-500/70 
        animate-particleMed"></div>
      </div>

      {/* ✴ PARTICLE 3 — Blue */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-70">
        <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-xl shadow-cyan-500/70 
        animate-particleSlow"></div>
      </div>

      {/* 🔥 NOISE GLITCH OVERLAY */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-soft-light animate-noiseFlicker"
        style={{ backgroundImage: "url('https://i.imgur.com/9fHr0bB.png')" }}>
      </div>

      {/* ⚡ Animation Styles */}
      <style>
        {`
          /* ⚡ Gradient Motion Parallax */
          @keyframes ultraGradientSlow {
            0% { transform: translateX(-60%); }
            100% { transform: translateX(0%); }
          }
          @keyframes ultraGradientMed {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(0%); }
          }
          @keyframes ultraGradientFast {
            0% { transform: translateX(-200%); }
            100% { transform: translateX(0%); }
          }

          .animate-ultraGradientSlow {
            animation: ultraGradientSlow 10s linear infinite;
          }
          .animate-ultraGradientMed {
            animation: ultraGradientMed 6s linear infinite;
          }
          .animate-ultraGradientFast {
            animation: ultraGradientFast 3s linear infinite;
          }

          /* ✴ Particle Animations */
          @keyframes particleFast {
            0% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(120vw); opacity: 1; }
          }
          @keyframes particleMed {
            0% { transform: translateX(0); }
            100% { transform: translateX(120vw); }
          }
          @keyframes particleSlow {
            0% { transform: translateX(0); }
            100% { transform: translateX(120vw); }
          }

          .animate-particleFast {
            animation: particleFast 2.2s linear infinite;
          }
          .animate-particleMed {
            animation: particleMed 4s linear infinite;
          }
          .animate-particleSlow {
            animation: particleSlow 7s linear infinite;
          }

          /* 🔥 Glitch Noise Overlay */
          @keyframes noiseFlicker {
            0% { opacity: 0.04; }
            50% { opacity: 0.12; }
            100% { opacity: 0.04; }
          }
          .animate-noiseFlicker {
            animation: noiseFlicker 1.8s infinite alternate;
          }
        `}
      </style>
    </div>
  );
}
