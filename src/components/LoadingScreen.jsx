import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl">
          Praveen Patil
        </h1>
        <p className="text-gray-300 mt-3 tracking-wide">
          Fullstack Developer • AI/ML Engineer
        </p>
      </div>
    </div>
  );
}
