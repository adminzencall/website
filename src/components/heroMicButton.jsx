import React, { useState } from "react";
import { Mic, MicOff } from "lucide-react";

export default function HeroMicButton({ onActivate, onDeactivate, onStateChange }) {
  const [demoState, setDemoState] = useState("idle");

  const handlePlayVoiceDemo = () => {
    console.log("Voice demo activated");
    setDemoState("listening");
    if (onStateChange) onStateChange("listening");
    if (onActivate) onActivate();
    
    // Simulate conversation flow
    setTimeout(() => {
      setDemoState("ai_speaking");
      if (onStateChange) onStateChange("ai_speaking");
    }, 2000);
    
    setTimeout(() => {
      setDemoState("human_speaking");
      if (onStateChange) onStateChange("human_speaking");
    }, 5000);
    
    setTimeout(() => {
      setDemoState("ai_speaking");
      if (onStateChange) onStateChange("ai_speaking");
    }, 8000);

    setTimeout(() => {
      setDemoState("idle");
      if (onStateChange) onStateChange("idle");
      if (onDeactivate) onDeactivate();
    }, 12000);
  };

  const handleStopVoiceDemo = () => {
    console.log("Voice demo stopped");
    setDemoState("idle");
    if (onStateChange) onStateChange("idle");
    if (onDeactivate) onDeactivate();
  };

  const handleToggle = () => {
    if (demoState === "idle") {
      handlePlayVoiceDemo();
    } else {
      handleStopVoiceDemo();
    }
  };

  const isActive = demoState !== "idle";

  return (
    <div className="flex flex-col items-center">
      {/* Outer pulse rings */}
      <div className="relative">
        {isActive && (
          <>
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#355DFF]/30 to-[#5A7CFF]/20"
              style={{ 
                animation: 'hero-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                width: '200px',
                height: '200px',
                left: '-20px',
                top: '-20px'
              }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#355DFF]/20 to-[#5A7CFF]/10"
              style={{ 
                animation: 'hero-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                animationDelay: '0.5s',
                width: '240px',
                height: '240px',
                left: '-40px',
                top: '-40px'
              }}
            />
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/5"
              style={{ 
                animation: 'hero-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                animationDelay: '1s',
                width: '280px',
                height: '280px',
                left: '-60px',
                top: '-60px'
              }}
            />
          </>
        )}

        {/* Static outer ring when idle */}
        {!isActive && (
          <div 
            className="absolute rounded-full border-2 border-[#355DFF]/20"
            style={{ 
              width: '200px',
              height: '200px',
              left: '-20px',
              top: '-20px'
            }}
          />
        )}

        {/* Main button */}
        <button
          onClick={handleToggle}
          className={`relative w-40 h-40 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] shadow-[0_0_80px_rgba(53,93,255,0.6),0_0_120px_rgba(90,124,255,0.3)] scale-105'
              : 'bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] shadow-[0_0_50px_rgba(53,93,255,0.4)] hover:shadow-[0_0_70px_rgba(53,93,255,0.5)] hover:scale-105'
          }`}
          style={{
            animation: isActive ? 'mic-morph 3s ease-in-out infinite' : 'none'
          }}
        >
          {/* 3D lighting highlight */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
          </div>

          {/* Icon */}
          {isActive ? (
            <MicOff className="w-14 h-14 text-white relative z-10" />
          ) : (
            <Mic className="w-14 h-14 text-white relative z-10 group-hover:scale-110 transition-transform" />
          )}

          {/* Sound wave bars when active */}
          {isActive && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-white/50 rounded-full"
                    style={{
                      height: '20px',
                      animation: `wave-bar 0.8s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Status text */}
      <p className="mt-6 text-base font-medium text-[#355DFF]">
        {demoState === "idle" && "Tap to experience Zencall"}
        {demoState === "listening" && "Listening..."}
        {demoState === "ai_speaking" && "Zencall AI is speaking..."}
        {demoState === "human_speaking" && "Customer is speaking..."}
      </p>

      <style jsx>{`
        @keyframes hero-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes mic-morph {
          0%, 100% {
            border-radius: 50%;
          }
          25% {
            border-radius: 47% 53% 52% 48% / 50% 47% 53% 50%;
          }
          50% {
            border-radius: 53% 47% 48% 52% / 47% 53% 47% 53%;
          }
          75% {
            border-radius: 48% 52% 53% 47% / 53% 48% 52% 47%;
          }
        }

        @keyframes wave-bar {
          0%, 100% {
            height: 8px;
          }
          50% {
            height: 24px;
          }
        }
      `}</style>
    </div>
  );
}