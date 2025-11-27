import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "../components/ScrollReveal";
import DemoScenarioSelector from "../components/DemoScenarioSelector";
import LiveConversationDemo from "../components/LiveConversationDemo";
import { Phone, CheckCircle, ArrowRight, Calendar, MessageSquare } from "lucide-react";

export default function Demo() {
  const [demoActive, setDemoActive] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState("booking");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Mic First */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                Test Zencall for Your Barbershop
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                See how our AI handles real customer calls.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Mic Interface */}
          <ScrollReveal delay={100}>
            <div className="mt-10">
              <DemoScenarioSelector 
                onActivate={() => setDemoActive(true)}
                onDeactivate={() => setDemoActive(false)}
                onScenarioChange={setSelectedScenario}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Live Conversation Output */}
      <section className="py-12 -mt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <LiveConversationDemo autoPlay={true} />
            </div>
          </ScrollReveal>
          
          {/* What's Happening Explanation */}
          {demoActive && (
            <ScrollReveal delay={100}>
              <div className="max-w-xl mx-auto mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl text-center">
                <p className="text-sm text-blue-700">
                  <strong>What's happening:</strong> Our AI is simulating a real customer call for the "{selectedScenario}" scenario.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                How Zencall Works
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Our AI voice receptionist seamlessly handles your incoming calls.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Customer Calls Your Business",
                description: "Zencall answers instantly with a friendly, professional greeting customized for your barbershop."
              },
              {
                step: "02",
                icon: MessageSquare,
                title: "AI Handles the Conversation",
                description: "Our AI understands natural speech, answers questions, and guides customers to book appointments."
              },
              {
                step: "03",
                icon: Calendar,
                title: "Booking Confirmed",
                description: "The appointment is automatically added to your calendar, and the customer receives confirmation."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <Card className="border-0 shadow-lg bg-white relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-5">
                    <div className="absolute top-2 right-3 text-4xl font-bold text-slate-100 group-hover:text-[#355DFF]/10 transition-colors">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] rounded-xl flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                What Makes Zencall Special?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-2xl mx-auto space-y-3">
              {[
                "Natural, human-like voice responses",
                "Understands context and follows up intelligently",
                "Books appointments in real-time",
                "Answers FAQs about your services",
                "Works 24/7, never takes a day off"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-[#355DFF] to-[#5A7CFF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to See Zencall in Action?
            </h2>
            <p className="text-base text-white/90 mb-6">
              Book a personalized demo and see how Zencall can transform your barbershop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#355DFF] hover:bg-white/90 rounded-full px-8 h-11 font-semibold"
                asChild
              >
                <a href="https://calendly.com/admin-zencall/30min" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 h-11 font-semibold"
                asChild
              >
                <a href="https://calendly.com/admin-zencall/30min" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}