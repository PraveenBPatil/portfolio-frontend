import { useEffect, useState } from "react";

export default function CircularSkill({ name, level, icon }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progress = circumference - (circumference * level) / 100;
    const timer = setTimeout(() => {
      setOffset(progress);
    }, 150);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="relative w-40 h-40 flex items-center justify-center">

        {/* GLOW BACKGROUND */}
        <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"></div>

        {/* ICON (top-most) */}
        <div className="absolute z-30 text-white text-4xl drop-shadow-md pointer-events-none">
          {icon}
        </div>

        {/* PERCENTAGE */}
        <div className="absolute z-20 text-white text-base font-semibold mt-16">
          {level}%
        </div>

        {/* SVG PROGRESS CIRCLE */}
        <svg className="w-full h-full z-0 relative">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#1f2937"
            strokeWidth="15"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#grad1)"
            strokeWidth="15"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-[1500ms]"
          />

          <defs>
            <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="text-gray-200 font-semibold text-sm md:text-base">
        {name}
      </p>
    </div>
  );
}
