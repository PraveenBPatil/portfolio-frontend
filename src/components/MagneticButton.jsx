import { useRef } from "react";

export default function MagneticButton({ children, className, ...props }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
