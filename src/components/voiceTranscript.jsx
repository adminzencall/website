import React from "react";

export default function VoiceTranscript({ isVisible, text }) {
  if (!isVisible || !text) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-2xl px-4">
      <div className="bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 px-6 py-4">
        <p className="text-slate-800 text-center text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}