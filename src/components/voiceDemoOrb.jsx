import React, { useState, useEffect } from "react";
import { Mic } from "lucide-react";

export default function VoiceDemoOrb({ size = "large", onActivate, onDeactivate, onStateChange }) {
  const [demoState, setDemoState] = useState("idle"); // idle, listening, ai_speaking, human_speaking, stopped

  // Placeholder for audio playback - Technical partner will replace with actual AI voice files
  const handlePlayVoiceDemo = () => {
    // TODO: Replace with actual audio sequence
    // Example structure:
    // playAudio("ai_voice_greeting.mp3");        // AI: "Hello! Thank you for calling Zencall..."
    // setTimeout(() => playAudio("human_voice_response.mp3"), 3000);     // Human: "Hi, I'd like to book an appointment..."
    // setTimeout(() => playAudio("ai_voice_booking.mp3"), 6000);         // AI: "I'd be happy to help you with that..."
    
    console.log("Voice demo activated - audio playback placeholder");
    
    // Simulate conversation flow
    setDemoState("listening");
    if (onStateChange) onStateChange("listening");
    
    setTimeout(() => {
      setDemoState("ai_speaking");
      if (onStateChange) onStateChange("ai_speaking");
    }, 2000);
    
    setTimeout(() => {
      setDemoState("human_speaking");
      if (onStateChange) onStateChange("human_speaking");
    }, 5000);
    
    setTimeout(() => {
      setDemoState("listening");
      if (onStateChange) onStateChange("listening");
    }, 8000);
  };

  const handleStopVoiceDemo = () => {
    // TODO: Stop all playing audio
    // Example: audioPlayer.stop();
    
    console.log("Voice demo stopped");
    setDemoState("stopped");
    if (onStateChange) onStateChange("stopped");
    
    setTimeout(() => {
      setDemoState("idle");
      if (onStateChange) onStateChange("idle");
    }, 1000);
  };

  const handleToggle = () => {
    if (demoState === "idle" || demoState === "stopped") {
      handlePlayVoiceDemo();
      if (onActivate) onActivate();
    } else {
      handleStopVoiceDemo();
      if (onDeactivate) onDeactivate();
    }
  };

  const isLarge = size === "large";
  const isActive = demoState !== "idle" && demoState !== "stopped";

  return (
    <button
      onClick={handleToggle}
      className={`relative group ${
        isLarge 
          ? "w-48 h-48" 
          : "w-16 h-16 fixed bottom-8 right-8 shadow-2xl z-50"
      } transition-all duration-200 ease-out ${!isLarge && 'hover:scale-105'}`}
      style={{
        animation: isActive 
          ? `morph 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite${isLarge ? ', float 5s cubic-bezier(0.4, 0, 0.2, 1) infinite' : ''}` 
          : 'none'
      }}
    >
      {/* Particle shimmer effect */}
      {isActive && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 animate-spin-slow">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full blur-sm"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-${isLarge ? '100' : '35'}px)`,
                  animation: `shimmer 2s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Outer glowing rings - ChatGPT style */}
      {isActive && (
        <>
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#355DFF]/20 via-[#5A7CFF]/15 to-[#5A7CFF]/10"
            style={{ 
              animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#355DFF]/15 via-[#5A7CFF]/10 to-[#5A7CFF]/5"
            style={{ 
              animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              animationDelay: '0.6s'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#355DFF]/10 via-[#5A7CFF]/5 to-[#5A7CFF]/2"
            style={{ 
              animation: 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              animationDelay: '1.2s'
            }}
          />
        </>
      )}

      {/* Main orb with premium gradient and 3D lighting */}
      <div
        className={`relative w-full h-full rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center transition-all duration-150 ${
          isActive
            ? 'shadow-[0_0_60px_rgba(53,93,255,0.6),0_0_100px_rgba(90,124,255,0.3)]' 
            : 'shadow-[0_0_40px_rgba(53,93,255,0.4),0_0_60px_rgba(90,124,255,0.15)] hover:shadow-[0_0_50px_rgba(53,93,255,0.5),0_0_80px_rgba(90,124,255,0.2)]'
        } ${!isLarge && 'hover:scale-110'}`}
      >
        {/* 3D lighting highlight */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-2xl" />
        </div>

        {/* Bloom lighting effect */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
        
        {/* Icon */}
        <Mic 
          className={`${isLarge ? 'w-16 h-16' : 'w-6 h-6'} text-white relative z-10 transition-transform duration-150 ${
            isActive ? 'scale-110' : 'group-hover:scale-110'
          }`} 
        />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 50%;
            transform: rotate(0deg);
          }
          20% {
            border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%;
            transform: rotate(2deg);
          }
          40% {
            border-radius: 55% 45% 40% 60% / 45% 55% 45% 55%;
            transform: rotate(-2deg);
          }
          60% {
            border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%;
            transform: rotate(1deg);
          }
          80% {
            border-radius: 60% 40% 45% 55% / 40% 60% 40% 60%;
            transform: rotate(-1deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-8px) scale(1.02);
          }
          50% {
            transform: translateY(-12px) scale(1);
          }
          75% {
            transform: translateY(-8px) scale(0.98);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          40% {
            transform: scale(1.4);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.2;
            transform: rotate(0deg) translateY(-${isLarge ? '100' : '35'}px);
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </button>
  );
}