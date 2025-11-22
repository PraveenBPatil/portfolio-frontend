import { useState } from "react";

export default function ParallaxContainer({ children }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;
    setOffset({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="relative"
      style={{
        // ⛔ NO rotateX / rotateY — this is what blocks anchor scroll
        // Small parallax movement instead:
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
}
