import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import ScrollReveal from "../components/ScrollReveal";
import { 
  Target, 
  Lightbulb, 
  Bot,
  Zap,
  Heart,
  Users,
  Clock,
  DollarSign,
  Phone
} from "lucide-react";

const values = [
  {
    icon: Bot,
    title: "Innovation First",
    description: "We're constantly pushing the boundaries of what's possible with AI technology to create better customer experiences.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "Every feature we build is designed with our customers' success in mind. Their growth is our growth.",
    color: "from-red-500 to-red-600"  
  },
  {
    icon: Zap,
    title: "Relentless Execution", 
    description: "We move fast, iterate quickly, and deliver solutions that work reliably for businesses of all sizes.",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Users,
    title: "Human Connection",
    description: "Technology should enhance human relationships, not replace them. We build AI that brings people closer together.",
    color: "from-green-500 to-green-600"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Built for Modern
                <span className="block bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] bg-clip-text text-transparent">
                  Barbershops
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Zencall is designed to help barbers reclaim their time, capture more bookings, 
                and deliver a professional call experience without additional staffing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Zencall Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-5">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Why Zencall?
                </h2>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Every missed call is a missed opportunity. Barbershops lose thousands 
                    of dollars each year from calls that go unanswered—especially during 
                    busy hours and after closing time.
                  </p>
                  <p>
                    Zencall was built to solve this problem. Our AI voice receptionist 
                    answers every call, books appointments, and provides a professional 
                    experience that keeps your customers coming back.
                  </p>
                  <p>
                    No more voicemails. No more lost bookings. Just more revenue and 
                    happier customers—all while you focus on what you do best: cutting hair.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Phone, label: "24/7 Availability", value: "Never miss a call" },
                { icon: Clock, label: "Time Saved", value: "2+ hours/day" },
                { icon: DollarSign, label: "Revenue Recovered", value: "30%+ more bookings" },
                { icon: Users, label: "Happy Customers", value: "Professional service" },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <Card className="border-0 shadow-lg bg-white h-full">
                    <CardContent className="p-5 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-5 h-5 text-[#355DFF]" />
                      </div>
                      <p className="text-xs font-medium text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardContent className="p-10 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    To empower every barbershop with AI technology that captures every opportunity, 
                    delights every customer, and drives sustainable growth through intelligent automation.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardContent className="p-10 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    A world where every barbershop, regardless of size, has access to enterprise-level 
                    customer service capabilities through intelligent AI that feels authentically human.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Values
              </h2>
              <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do and every decision we make 
                as we build the future of barbershop communication.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <Card className="border-0 shadow-lg bg-white text-center group hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Ready to Transform Your Barbershop?
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Join the barbershops already using Zencall to capture more bookings 
                and deliver exceptional customer service around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 h-11 font-semibold"
                  asChild
                >
                  <a href="https://calendly.com/admin-zencall" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}