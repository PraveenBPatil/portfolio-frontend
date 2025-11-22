import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const initParticles = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={initParticles}
      options={{
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 3 },

          // ✅ Stop movement completely  
          move: { enable: false },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
