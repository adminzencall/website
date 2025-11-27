import React, { useState } from "react";
import { Mic, MicOff, ChevronDown } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const scenarios = [
  { value: "booking", label: "Booking appointment" },
  { value: "pricing", label: "Pricing inquiry" },
  { value: "cancellation", label: "Late cancellation" },
  { value: "walkin", label: "Walk-in availability" },
];

export default function DemoScenarioSelector({ onActivate, onDeactivate, onStateChange, onScenarioChange }) {
  const [demoState, setDemoState] = useState("idle");
  const [selectedScenario, setSelectedScenario] = useState("booking");

  const handlePlayVoiceDemo = () => {
    console.log("Demo started with scenario:", selectedScenario);
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
    console.log("Demo stopped");
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

  const handleScenarioChange = (value) => {
    setSelectedScenario(value);
    if (onScenarioChange) onScenarioChange(value);
  };

  const isActive = demoState !== "idle";

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Scenario Selector */}
      <div className="w-full max-w-xs">
        <label className="block text-sm font-medium text-slate-600 mb-2 text-center">
          Choose a scenario
        </label>
        <Select value={selectedScenario} onValueChange={handleScenarioChange} disabled={isActive}>
          <SelectTrigger className="w-full h-12 rounded-xl border-slate-200 bg-white text-slate-900">
            <SelectValue placeholder="Select scenario" />
          </SelectTrigger>
          <SelectContent>
            {scenarios.map((scenario) => (
              <SelectItem key={scenario.value} value={scenario.value}>
                {scenario.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Mic Button */}
      <div className="relative">
        {/* Pulse rings */}
        {isActive && (
          <>
            <div 
              className="absolute rounded-full bg-gradient-to-br from-[#355DFF]/30 to-[#5A7CFF]/20"
              style={{ 
                animation: 'demo-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                width: '180px',
                height: '180px',
                left: '-30px',
                top: '-30px'
              }}
            />
            <div 
              className="absolute rounded-full bg-gradient-to-br from-[#355DFF]/20 to-[#5A7CFF]/10"
              style={{ 
                animation: 'demo-pulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                animationDelay: '0.5s',
                width: '220px',
                height: '220px',
                left: '-50px',
                top: '-50px'
              }}
            />
          </>
        )}

        {/* Static ring when idle */}
        {!isActive && (
          <div 
            className="absolute rounded-full border-2 border-[#355DFF]/20"
            style={{ 
              width: '160px',
              height: '160px',
              left: '-20px',
              top: '-20px'
            }}
          />
        )}

        <button
          onClick={handleToggle}
          className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] shadow-[0_0_60px_rgba(53,93,255,0.5)] scale-105'
              : 'bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] shadow-[0_0_40px_rgba(53,93,255,0.35)] hover:shadow-[0_0_50px_rgba(53,93,255,0.45)] hover:scale-105'
          }`}
        >
          {/* 3D lighting */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
          </div>

          {isActive ? (
            <MicOff className="w-10 h-10 text-white relative z-10" />
          ) : (
            <Mic className="w-10 h-10 text-white relative z-10" />
          )}
        </button>
      </div>

      {/* Status text */}
      <p className="text-base font-medium text-[#355DFF]">
        {isActive ? "Tap to stop" : "Start Live Demo"}
      </p>

      <style jsx>{`
        @keyframes demo-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}