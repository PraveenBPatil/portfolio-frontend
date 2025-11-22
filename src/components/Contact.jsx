import { useEffect, useState } from "react";

/**
 * CircularSkill
 * props:
 *  - name: string
 *  - level: number (0-100)
 *  - icon: React node (icon component)
 */
export default function CircularSkill({ name, level, icon }) {
  // circumference for r=70 (same as earlier)
  const CIRC = 2 * Math.PI * 70; // 440 approx
  const [offset, setOffset] = useState(CIRC);

  useEffect(() => {
    // animate from full (CIRC) -> target offset
    const progress = CIRC - (CIRC * level) / 100;
    // small timeout for nicer entrance
    const t = setTimeout(() => setOffset(progress), 150);
    return () => clearTimeout(t);
  }, [level]);

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative w-40 h-40">
        {/* Outer soft glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl rounded-full opacity-25"></div>

        {/* SVG circle (rotated so progress starts at 12 o'clock) */}
        <svg className="w-full h-full rotate-[-90deg]">
          {/* background track */}
          <circle
            cx="70"
            cy="70"
            r="70"
            stroke="#111827" /* dark track */
            strokeWidth="15"
            fill="none"
          />

          {/* animated progress */}
          <circle
            cx="70"
            cy="70"
            r="70"
            stroke="url(#grad1)"
            strokeWidth="15"
            fill="none"
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-[1200ms] ease-out"
          />

          <defs>
            <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content (icon + percent) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {/* Icon container — slightly raised */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/6 backdrop-blur-md border border-white/10 text-white mb-1 shadow-md">
            {/* icon passed as prop */}
            <div className="text-2xl">{icon}</div>
          </div>

          {/* Percentage */}
          <div className="text-white text-lg font-bold">{level}%</div>
        </div>
      </div>

      {/* Name below circle */}
      <p className="text-gray-200 font-semibold text-sm md:text-base">{name}</p>
    </div>
  );
}
