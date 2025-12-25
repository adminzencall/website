import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import HeroMicButton from "../components/HeroMicButton";
import LiveConversationDemo from "../components/LiveConversationDemo";
import SocialProof from "../components/SocialProof";
import ScrollReveal from "../components/ScrollReveal";
import { 
  Phone, 
  Calendar, 
  Users, 
  Shield, 
  Clock,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [demoActive, setDemoActive] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
    
    const handleStorage = () => {
      const currentSavedMode = localStorage.getItem("darkMode");
      if (currentSavedMode !== null) {
        setDarkMode(currentSavedMode === "true");
      }
    };
    
    window.addEventListener('storage', handleStorage);
    const interval = setInterval(handleStorage, 100);
    
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mic First */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/10' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'}`}>
          {!darkMode && (
            <>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#355DFF]/5 to-transparent rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#5A7CFF]/5 to-transparent rounded-full blur-3xl" />
              </div>
            </>
          )}
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-12 pb-16">
          {/* Centered Mic Experience */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal>
              <h1 className={`mb-4 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>
                Your AI Voice Receptionist
                <span className="block bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] bg-clip-text text-transparent">
                  for Modern Barbershops
                </span>
              </h1>
              <p className="text-lg text-[#9AA3AF] mb-8">
                Try how Zencall answers your customers — live.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <HeroMicButton 
                onActivate={() => setDemoActive(true)}
                onDeactivate={() => setDemoActive(false)}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Conversation Demo Section */}
      <section className={`py-12 ${darkMode ? 'bg-white/5' : 'bg-slate-50/50'}`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>
                See How It Works
              </h2>
              <p className="text-sm text-[#9AA3AF]">
                Watch a real conversation between a customer and Zencall AI
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="max-w-xl mx-auto">
              <LiveConversationDemo darkMode={darkMode} autoPlay={true} />
            </div>
          </ScrollReveal>

          {/* Quick Stats */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "$25K", label: "Savings/Location" },
                { value: "156 hrs", label: "Saved/Barber" },
                { value: "24/7", label: "Always On" },
              ].map((stat, i) => (
                <div key={i} className={`text-center p-4 rounded-xl border ${darkMode ? 'bg-white/5 border-slate-800/50' : 'bg-white border-slate-200/50'}`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>{stat.value}</div>
                  <div className="text-xs text-[#9AA3AF] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Integration Logos */}
      <SocialProof darkMode={darkMode} />

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className={`mb-3 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>
                Proven to Make Every Call Count
              </h2>
              <p className="text-base text-[#9AA3AF] max-w-2xl mx-auto">
                Our AI doesn't just answer phones—it transforms your customer experience.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Book more appointments automatically", description: "Never miss a booking opportunity, even after hours" },
              { title: "Reduce no-shows with smart reminders", description: "Automated SMS and email confirmations" },
              { title: "Syncs with your tools", description: "No retraining your team—works with what you have" },
              { title: "Always on", description: "After-hours, weekends, holidays—we're there" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <Card className={`p-5 border hover:border-[#355DFF]/50 transition-all duration-300 h-full ${darkMode ? 'bg-white/5 border-slate-800/50' : 'bg-white border-slate-200/50'}`}>
                  <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>{item.title}</h3>
                  <p className="text-sm text-[#9AA3AF] leading-relaxed">{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-12 ${darkMode ? 'bg-white/5' : 'bg-white/50'}`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className={`mb-3 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>
                Everything Your Business Needs
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Phone, title: "24/7 Call Handling", description: "Call routing, voicemails to text, escalation rules" },
              { icon: Calendar, title: "Smart Booking System", description: "Reads real-time availability; reschedules instantly" },
              { icon: Users, title: "CRM & Notes", description: "Call summaries + dispositions pushed to your system" },
              { icon: Clock, title: "After-Hours & Overflow", description: "Failover rules; never miss peak times" },
              { icon: MessageSquare, title: "Multi-Language", description: "Natural accents, local greetings" },
              { icon: Shield, title: "Compliance & Privacy", description: "PIPEDA/GDPR-aligned operations; audit logs" }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 60}>
                <Card className={`p-5 border hover:border-[#355DFF]/50 transition-all duration-300 group h-full ${darkMode ? 'bg-white/5 border-slate-800/50' : 'bg-white border-slate-200/50'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 ${darkMode ? 'bg-gradient-to-br from-[#355DFF]/20 to-[#5A7CFF]/20' : 'bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/10'}`}>
                    <feature.icon className="w-5 h-5 text-[#355DFF]" />
                  </div>
                  <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>{feature.title}</h3>
                  <p className="text-sm text-[#9AA3AF] leading-relaxed">{feature.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <Card className="bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] border-0 p-10 text-center">
              <h2 className="text-white mb-3 text-3xl lg:text-4xl font-bold">
                Ready when your customers are.
              </h2>
              <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
                Transform your customer service today with our AI voice receptionist.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-[#355DFF] hover:bg-white/90 rounded-full px-8 h-11 text-[15px] font-medium"
                  asChild
                >
                  <a href="https://calendly.com/admin-zencall" target="_blank" rel="noopener noreferrer">Book a Demo</a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 h-11 text-[15px] font-medium"
                  asChild
                >
                  <Link to={createPageUrl("Contact")}>Get Started</Link>
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}