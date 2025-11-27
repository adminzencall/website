import React, { useState, useEffect } from "react";
import { User } from "lucide-react";

const LOGO_ICON = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a67a80ef25071a588bb792/c2c8b2165_Untitleddesign1.png";

const conversation = [
  { type: "human", text: "Hi, I'd like to book a haircut for tomorrow." },
  { type: "ai", text: "Of course! I'd be happy to help you book an appointment. What time works best for you tomorrow?" },
  { type: "human", text: "Do you have anything around 2pm?" },
  { type: "ai", text: "Yes! I have 2:00 PM and 2:30 PM available. Which would you prefer?" },
  { type: "human", text: "2pm works great." },
  { type: "ai", text: "You're all set for 2:00 PM tomorrow. I'll send you a confirmation text. See you then!" },
];

export default function ChatConversationDemo({ darkMode = false }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingType, setTypingType] = useState(null);

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextMessage = () => {
      if (currentIndex >= conversation.length) {
        // Reset and start over after a pause
        setTimeout(() => {
          setVisibleMessages([]);
          currentIndex = 0;
          setTimeout(showNextMessage, 1000);
        }, 4000);
        return;
      }

      const message = conversation[currentIndex];
      
      // Show typing indicator
      setIsTyping(true);
      setTypingType(message.type);
      
      // After typing delay, show the message
      const typingDuration = message.type === "ai" ? 1200 : 800;
      
      setTimeout(() => {
        setIsTyping(false);
        setTypingType(null);
        setVisibleMessages(prev => [...prev, { ...message, id: currentIndex }]);
        currentIndex++;
        
        // Schedule next message
        setTimeout(showNextMessage, 1500);
      }, typingDuration);
    };

    // Start the conversation
    const timer = setTimeout(showNextMessage, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'}`}>
      {/* Chat Header */}
      <div className={`px-5 py-4 border-b flex items-center gap-3 ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center">
          <img src={LOGO_ICON} alt="Zencall" className="w-6 h-6 object-contain" />
        </div>
        <div>
          <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>Zencall AI</p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-600">Online 24/7</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-5 space-y-4 min-h-[320px] max-h-[320px] overflow-hidden">
        {visibleMessages.map((message, index) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
              message.type === "human" ? "justify-start" : "justify-end"
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {message.type === "human" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <User className={`w-4 h-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
              </div>
            )}
            
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                message.type === "human"
                  ? darkMode 
                    ? "bg-slate-700 text-white rounded-bl-md" 
                    : "bg-slate-100 text-slate-900 rounded-bl-md"
                  : "bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] text-white rounded-br-md"
              }`}
            >
              {message.text}
            </div>

            {message.type === "ai" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className={`flex items-end gap-2 animate-in fade-in duration-200 ${
            typingType === "human" ? "justify-start" : "justify-end"
          }`}>
            {typingType === "human" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                <User className={`w-4 h-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`} />
              </div>
            )}
            
            <div className={`px-4 py-3 rounded-2xl ${
              typingType === "human"
                ? darkMode ? "bg-slate-700 rounded-bl-md" : "bg-slate-100 rounded-bl-md"
                : "bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] rounded-br-md"
            }`}>
              <div className="flex gap-1">
                <span className={`w-2 h-2 rounded-full animate-bounce ${typingType === "human" ? (darkMode ? 'bg-slate-400' : 'bg-slate-400') : 'bg-white/70'}`} style={{ animationDelay: '0ms' }} />
                <span className={`w-2 h-2 rounded-full animate-bounce ${typingType === "human" ? (darkMode ? 'bg-slate-400' : 'bg-slate-400') : 'bg-white/70'}`} style={{ animationDelay: '150ms' }} />
                <span className={`w-2 h-2 rounded-full animate-bounce ${typingType === "human" ? (darkMode ? 'bg-slate-400' : 'bg-slate-400') : 'bg-white/70'}`} style={{ animationDelay: '300ms' }} />
              </div>
            </div>

            {typingType === "ai" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">Z</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}