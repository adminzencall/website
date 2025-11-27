import React from "react";
import { X, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingPanel({ isOpen, onClose }) {
  if (!isOpen) return null;

  const industries = [
    { name: "Barbershops", icon: "💈" },
    { name: "Salons", icon: "💇" },
    { name: "Dental", icon: "🦷" },
    { name: "Law Firms", icon: "⚖️" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300 ease-out overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Book a Live Zencall Demo
              </h2>
              <p className="text-slate-600">
                See how Zencall handles real customer calls.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-slate-500 hover:text-slate-900"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Industries */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Trusted by businesses like yours:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-sm font-medium text-slate-700">
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Placeholder */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center mb-6">
            <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 font-medium mb-2">
              Cal.com Integration Placeholder
            </p>
            <p className="text-sm text-slate-500">
              Technical partner will embed Cal.com booking widget here
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            {[
              "15-minute personalized demo",
              "See Zencall handle live calls",
              "Custom setup for your business",
              "No commitment required"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-[#355DFF] to-[#5A7CFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}