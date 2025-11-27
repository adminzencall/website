import React, { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";

const ZENCALL_LOGO = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a67a80ef25071a588bb792/8970e90bf_Untitled_design__1_-removebg-preview.png";

const defaultConversation = [
  { type: "ai", text: "Hi, thank you for calling Classic Cuts Barbershop! This is Zencall, your AI receptionist. How can I help you today?" },
  { type: "human", text: "Hey, I'd like to book a haircut for tomorrow afternoon." },
  { type: "ai", text: "Perfect! I'd be happy to help you book an appointment for tomorrow afternoon. What time works best for you?" },
  { type: "human", text: "Do you have anything around 2 or 3pm?" },
  { type: "ai", text: "Let me check our availability... Yes! I have openings at 2:00 PM and 3:15 PM tomorrow. Which would you prefer?" },
  { type: "human", text: "2pm sounds great." },
  { type: "ai", text: "Excellent choice! I've booked you for 2:00 PM tomorrow. Can I get your name and phone number to confirm the appointment?" },
  { type: "human", text: "It's Mike, 416-555-0123." },
  { type: "ai", text: "All set, Mike! You're confirmed for 2:00 PM tomorrow at Classic Cuts. I'll send you a confirmation text shortly. Is there anything else I can help you with?" },
  { type: "human", text: "That's all, thanks!" },
  { type: "ai", text: "You're welcome! See you tomorrow at 2. Have a great day!" },
];

export default function LiveConversationDemo({ darkMode = false, isActive = true, autoPlay = true }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingType, setTypingType] = useState(null);
  const [showWaveform, setShowWaveform] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const shouldPlay = autoPlay || isActive;
    
    if (!shouldPlay) {
      setVisibleMessages([]);
      setIsTyping(false);
      setTypingType(null);
      setShowWaveform(false);
      return;
    }

    let currentIndex = 0;
    let timeoutId;
    
    const showNextMessage = () => {
      if (currentIndex >= defaultConversation.length) {
        // Pause then restart
        timeoutId = setTimeout(() => {
          setVisibleMessages([]);
          currentIndex = 0;
          setTimeout(showNextMessage, 1500);
        }, 5000);
        return;
      }

      const message = defaultConversation[currentIndex];
      const typingDuration = message.type === "ai" 
        ? Math.min(800 + message.text.length * 15, 2000) 
        : Math.min(500 + message.text.length * 10, 1200);
      
      // Show typing/listening indicator
      setIsTyping(true);
      setTypingType(message.type);
      setShowWaveform(message.type === "human");
      
      timeoutId = setTimeout(() => {
        setIsTyping(false);
        setTypingType(null);
        setShowWaveform(false);
        setVisibleMessages(prev => [...prev, { ...message, id: currentIndex }]);
        currentIndex++;
        
        // Scroll to bottom
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
        
        // Natural pause before next message
        const pauseDuration = 800 + Math.random() * 600;
        timeoutId = setTimeout(showNextMessage, pauseDuration);
      }, typingDuration);
    };

    timeoutId = setTimeout(showNextMessage, 800);
    
    return () => clearTimeout(timeoutId);
  }, [autoPlay, isActive]);

  // Auto-scroll when messages change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [visibleMessages, isTyping]);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl border ${
      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      {/* Chat Header */}
      <div className={`px-5 py-4 border-b flex items-center justify-between ${
        darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center p-1">
            <img src={ZENCALL_LOGO} alt="Zencall" className="w-full h-full object-contain" />
          </div>
          <div>
            <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Zencall AI Receptionist
            </p>
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${(autoPlay || isActive) ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
              <span className={`text-xs ${(autoPlay || isActive) ? 'text-green-600' : 'text-slate-500'}`}>
                {(autoPlay || isActive) ? 'Live Call' : 'Tap mic to start'}
              </span>
            </div>
          </div>
        </div>

        {/* Waveform indicator */}
        {showWaveform && (
          <div className="flex items-center gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-green-500 rounded-full"
                style={{
                  animation: 'waveform 0.6s ease-in-out infinite',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <div 
        ref={containerRef}
        className="p-5 space-y-4 h-[380px] overflow-y-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {!autoPlay && !isActive && visibleMessages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/10 flex items-center justify-center mb-4">
              <img src={ZENCALL_LOGO} alt="Zencall" className="w-10 h-10 object-contain opacity-50" />
            </div>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Tap the microphone to start the demo
            </p>
          </div>
        )}

        {visibleMessages.map((message, index) => (
          <div
            key={message.id}
            className={`flex items-end gap-2.5 ${message.type === "human" ? "justify-start" : "justify-end"}`}
            style={{
              animation: 'message-slide-up 0.4s ease-out forwards',
              opacity: 0,
              transform: 'translateY(10px)'
            }}
          >
            {message.type === "human" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                darkMode ? 'bg-slate-700' : 'bg-slate-200'
              }`}>
                <User className={`w-4 h-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
              </div>
            )}
            
            <div
              className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
                message.type === "human"
                  ? darkMode 
                    ? "bg-slate-700 text-white rounded-2xl rounded-bl-md" 
                    : "bg-slate-100 text-slate-900 rounded-2xl rounded-bl-md"
                  : "bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] text-white rounded-2xl rounded-br-md"
              }`}
            >
              {message.text}
            </div>

            {message.type === "ai" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center flex-shrink-0 p-1">
                <img src={ZENCALL_LOGO} alt="Z" className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className={`flex items-end gap-2.5 ${typingType === "human" ? "justify-start" : "justify-end"}`}
               style={{ animation: 'fade-in 0.2s ease-out' }}>
            {typingType === "human" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                darkMode ? 'bg-slate-700' : 'bg-slate-200'
              }`}>
                <User className={`w-4 h-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
              </div>
            )}
            
            <div className={`px-4 py-3 rounded-2xl ${
              typingType === "human"
                ? darkMode ? "bg-slate-700 rounded-bl-md" : "bg-slate-100 rounded-bl-md"
                : "bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] rounded-br-md"
            }`}>
              <div className="flex gap-1.5 items-center h-4">
                <span className={`w-2 h-2 rounded-full animate-bounce ${
                  typingType === "human" ? (darkMode ? 'bg-slate-400' : 'bg-slate-400') : 'bg-white/70'
                }`} style={{ animationDelay: '0ms' }} />
                <span className={`w-2 h-2 rounded-full animate-bounce ${
                  typingType === "human" ? (darkMode ? 'bg-slate-400' : 'bg-slate-400') : 'bg-white/70'
                }`} style={{ animationDelay: '150ms' }} />
                <span className={`w-2 h-2 rounded-full animate-bounce ${
                  typingType === "human" ? (darkMode ? 'bg-slate-400' : 'bg-slate-400') : 'bg-white/70'
                }`} style={{ animationDelay: '300ms' }} />
              </div>
            </div>

            {typingType === "ai" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center flex-shrink-0 p-1">
                <img src={ZENCALL_LOGO} alt="Z" className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes message-slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes waveform {
          0%, 100% { height: 8px; }
          50% { height: 20px; }
        }
      `}</style>
    </div>
  );
}