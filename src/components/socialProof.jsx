import React from "react";
import { Badge } from "@/components/ui/badge";

export default function SocialProof({ darkMode = false }) {
  // Only show tools with real/planned integrations
  const integrations = [
    { 
      name: "Square", 
      logo: "https://cdn.brandfetch.io/idHyhmTbsG/theme/dark/symbol.svg",
      status: "live"
    },
    { 
      name: "Google Calendar", 
      logo: "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_31_2x.png",
      status: "live"
    },
    { 
      name: "Booksy", 
      logo: "https://cdn.brandfetch.io/idcPzL0b8H/w/400/h/400/theme/dark/icon.jpeg",
      status: "coming"
    },
    { 
      name: "Fresha", 
      logo: "https://cdn.brandfetch.io/idD0IpXnME/theme/dark/logo.svg",
      status: "coming"
    },
  ];

  return (
    <div className={`py-12 border-b ${darkMode ? 'bg-white/5 border-slate-800/50' : 'bg-white/50 border-slate-200/50'}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-[#9AA3AF]">
            Integrates with the tools you already use
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className={`relative h-16 px-6 rounded-xl border flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-white/5 border-slate-800/50 hover:bg-white/10' 
                  : 'bg-white border-slate-200/50 hover:shadow-md'
              }`}
            >
              {integration.logo ? (
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="h-7 w-auto object-contain"
                />
              ) : (
                <span className={`text-sm font-semibold ${darkMode ? 'text-[#EDEFF2]' : 'text-slate-700'}`}>
                  {integration.name}
                </span>
              )}
              
              {integration.status === "coming" && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 border-0">
                  Soon
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}