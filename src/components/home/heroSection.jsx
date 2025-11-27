import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Play, ArrowRight, Bot, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Revolutionary AI Technology
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Your AI Voice
                <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Receptionist
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your business with our sophisticated AI voice receptionist. 
                Handle bookings, manage customers, and grow your revenue 24/7 with 
                human-like conversations that never miss a call.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-auto group w-full sm:w-auto"
                asChild
              >
                <Link to={createPageUrl("Demo")}>
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Try Live Demo
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-auto border-2 hover:border-blue-600 hover:text-blue-600 group w-full sm:w-auto"
                asChild
              >
                <Link to={createPageUrl("Contact")}>
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white" />
                </div>
                <span className="text-sm text-slate-600 font-medium">200+ Happy Clients</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-600 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 max-w-md mx-auto lg:max-w-none">
              {/* Mock AI Interface */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Kairos AI Assistant</h3>
                    <p className="text-xs sm:text-sm text-slate-500">Online • Ready to help</p>
                  </div>
                  <div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-blue-50 rounded-2xl p-3 sm:p-4 max-w-xs ml-auto">
                    <p className="text-xs sm:text-sm text-slate-700">"Hi, I'd like to book a haircut for tomorrow."</p>
                    <span className="text-xs text-slate-500 mt-1 block">Customer • 2:30 PM</span>
                  </div>
                  
                  <div className="bg-slate-100 rounded-2xl p-3 sm:p-4 max-w-xs">
                    <p className="text-xs sm:text-sm text-slate-700">"Perfect! I have availability tomorrow at 2 PM, 3 PM, or 4 PM. Which works best for you?"</p>
                    <span className="text-xs text-slate-500 mt-1 block">AI Assistant • 2:30 PM</span>
                  </div>
                  
                  <div className="bg-blue-50 rounded-2xl p-3 sm:p-4 max-w-xs ml-auto">
                    <p className="text-xs sm:text-sm text-slate-700">"3 PM would be great!"</p>
                    <span className="text-xs text-slate-500 mt-1 block">Customer • 2:31 PM</span>
                  </div>
                  
                  <div className="bg-slate-100 rounded-2xl p-3 sm:p-4 max-w-xs">
                    <p className="text-xs sm:text-sm text-slate-700">"Excellent! I've booked you for 3 PM tomorrow. You'll receive a reminder text. See you then!"</p>
                    <span className="text-xs text-slate-500 mt-1 block">AI Assistant • 2:31 PM</span>
                  </div>
                </div>
                
                <div className="border-t pt-3 sm:pt-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Booking confirmed</span>
                    <span className="text-green-600 font-medium">✓ Automated</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">99.9% Uptime</p>
                  <p className="text-xs text-slate-500">Always available</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">3.2s Avg Response</p>
                  <p className="text-xs text-slate-500">Lightning fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}