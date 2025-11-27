import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ScrollReveal from "../components/ScrollReveal";
import { 
  Phone, 
  Calendar, 
  Users, 
  BarChart3, 
  MessageSquare,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Voice Receptionist",
    description: "Advanced conversational AI that handles calls with human-like natural language processing",
    features: [
      "Natural conversation flow",
      "Multi-language support",
      "Accent recognition",
      "Context awareness",
      "Sentiment analysis"
    ],
    color: "from-blue-500 to-blue-600",
    status: "available"
  },
  {
    icon: Calendar,
    title: "Smart Booking Management",
    description: "Intelligent scheduling system that optimizes appointments and reduces no-shows",
    features: [
      "Real-time availability",
      "Automatic scheduling",
      "Calendar integration",
      "Conflict resolution",
      "Time zone handling"
    ],
    color: "from-green-500 to-green-600",
    status: "coming_soon"
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description: "Comprehensive client profiles with service history and preferences",
    features: [
      "Client profiles",
      "Service history",
      "Preference tracking",
      "Loyalty management",
      "Automated follow-ups"
    ],
    color: "from-purple-500 to-purple-600",
    status: "coming_soon"
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Communication",
    description: "Unified platform for phone, SMS, email, and web chat interactions",
    features: [
      "Omnichannel support",
      "SMS automation",
      "Email integration",
      "Web chat widget",
      "Social media sync"
    ],
    color: "from-pink-500 to-pink-600",
    status: "coming_soon"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Insights",
    description: "Comprehensive reporting and business intelligence for data-driven decisions",
    features: [
      "Revenue tracking",
      "Customer analytics",
      "Performance metrics",
      "Trend analysis",
      "Custom reports"
    ],
    color: "from-orange-500 to-orange-600",
    status: "coming_soon"
  },
  {
    icon: CreditCard,
    title: "Payment & Revenue Management",
    description: "Integrated payment processing with upselling and revenue optimization",
    features: [
      "Payment processing",
      "Deposit collection",
      "Gift card sales",
      "Package deals",
      "Revenue optimization"
    ],
    color: "from-indigo-500 to-indigo-600",
    status: "coming_soon"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                AI Voice Receptionist
                <span className="block bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] bg-clip-text text-transparent">
                  And More Coming Soon
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Automate customer interactions with our cutting-edge AI Voice Receptionist, 
                and get ready for a full suite of tools to streamline operations and grow your business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <Card className={`relative overflow-hidden border-0 shadow-lg transition-all duration-300 bg-white group h-full ${service.status === 'available' ? 'hover:shadow-xl hover:-translate-y-1' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center ${service.status === 'available' ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 mb-1">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 ${service.status === 'available' ? 'text-green-500' : 'text-slate-400'}`} />
                            <span className="text-sm text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  {service.status === 'coming_soon' && (
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/95 via-white/80 to-white/0 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-10">
                      <div className="bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-full mb-3 shadow-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        COMING SOON
                      </div>
                      <p className="text-sm text-slate-700 font-medium">This feature is in development and launching soon!</p>
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Simple Implementation
                <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Get your AI Voice Receptionist up and running in just a few days with our 
                streamlined onboarding process and dedicated support team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", description: "We analyze your business needs and customize the solution" },
              { step: "02", title: "Setup & Training", description: "We configure the system and train the AI on your specific processes" },
              { step: "03", title: "Testing", description: "Comprehensive testing to ensure everything works perfectly" },
              { step: "04", title: "Go Live", description: "Launch with full support and ongoing optimization" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Ready to Activate Your AI Receptionist?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Transform your customer service today with our state-of-the-art AI Voice Receptionist.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#355DFF] hover:bg-[#2F4FCC] text-white rounded-xl px-8 h-11"
                  asChild
                >
                  <a href="https://calendly.com/admin-zencall/30min" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-xl px-8 h-11"
                  asChild
                >
                  <Link to={createPageUrl("Demo")}>
                    Try AI Voice
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}