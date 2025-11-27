import React, { useState, useEffect } from "react";

export default function VoiceWaveform({ isActive, mode = "listening" }) {
  const [bars, setBars] = useState(Array(16).fill(0));

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => {
        const baseAmplitude = mode === "speaking" ? 0.8 : 0.4;
        const variation = mode === "speaking" ? 0.6 : 0.3;
        return baseAmplitude + Math.random() * variation;
      }));
    }, 150);

    return () => clearInterval(interval);
  }, [isActive, mode]);

  if (!isActive) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-slate-200/50 px-8 py-5">
        <div className="flex items-center gap-1.5 h-8">
          {bars.map((amplitude, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-[#355DFF] to-[#5A7CFF] transition-all duration-150 ease-out"
              style={{
                height: `${12 + amplitude * 20}px`,
                opacity: 0.6 + amplitude * 0.4,
                transform: `scaleY(${amplitude})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}