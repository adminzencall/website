import React, { useState } from "react";
import { Mic, MicOff } from "lucide-react";

export default function VoiceAssistantButton() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    if (!isActive) {
      // Auto stop after 10s
      setTimeout(() => setIsActive(false), 10000);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] shadow-[0_0_40px_rgba(53,93,255,0.5)] scale-110'
          : 'bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] shadow-lg hover:shadow-[0_0_30px_rgba(53,93,255,0.4)] hover:scale-105'
      }`}
    >
      {isActive ? (
        <MicOff className="w-6 h-6 text-white" />
      ) : (
        <Mic className="w-6 h-6 text-white" />
      )}
    </button>
  );
}