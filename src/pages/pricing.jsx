import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { createPageUrl } from "@/utils";
import ScrollReveal from "../components/ScrollReveal";
import { Check, X, ArrowRight, Phone, Calendar, Users, BarChart3 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for small barbershops just getting started with AI",
    features: [
      "Up to 150 calls/month",
      "Basic appointment booking",
      "Business hours support",
      "Email notifications",
      "Basic analytics"
    ],
    limitations: [
      "No after-hours support",
      "Limited customization",
      "No CRM integration"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$449",
    period: "/month",
    description: "Ideal for growing barbershops that need more power",
    features: [
      "Up to 500 calls/month",
      "Advanced appointment booking",
      "24/7 AI availability",
      "SMS & email notifications",
      "Full analytics dashboard",
      "CRM integration",
      "Custom voice & scripts",
      "Priority support"
    ],
    limitations: [],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-location businesses with custom needs",
    features: [
      "Unlimited calls",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
      "SLA guarantees",
      "Custom training",
      "API access"
    ],
    limitations: [],
    popular: false
  }
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most barbershops are up and running within 48 hours. Our team handles all the setup and configuration, so you can focus on what you do best."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
  },
  {
    question: "What happens if I exceed my call limit?",
    answer: "We'll notify you when you're approaching your limit. Additional calls are billed at a competitive per-call rate, or you can upgrade your plan."
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts required. All plans are month-to-month and you can cancel anytime with no penalties."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial on our Professional plan so you can experience the full power of Zencall before committing."
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Simple, Transparent
                <span className="block bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Choose the plan that fits your barbershop. No hidden fees, no surprises.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className={`relative border-0 shadow-lg h-full flex flex-col ${plan.popular ? 'ring-2 ring-[#355DFF] shadow-xl' : 'bg-white'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#355DFF] text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4 pt-6">
                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-2 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          <span className="text-sm text-slate-400">{limitation}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full h-11 font-semibold rounded-xl ${
                        plan.popular
                          ? "bg-[#355DFF] hover:bg-[#2F4FCC] text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                      asChild
                    >
                      <a href="https://calendly.com/admin-zencall" target="_blank" rel="noopener noreferrer">
                        Book a Demo
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Choose Zencall?
              </h2>
              <p className="text-base text-slate-600 max-w-3xl mx-auto">
                Every plan includes our core AI technology that's revolutionizing how barbershops handle calls.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: "AI Voice Technology", description: "Natural, human-like conversations that customers love" },
              { icon: Calendar, title: "Smart Scheduling", description: "Intelligent booking that reduces no-shows" },
              { icon: Users, title: "Customer Insights", description: "Learn what your customers need most" },
              { icon: BarChart3, title: "Business Analytics", description: "Track performance and optimize operations" }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <Card className="border-0 shadow-lg bg-white text-center h-full">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-5 h-5 text-[#355DFF]" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm px-5">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 text-sm hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#355DFF] to-[#5A7CFF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Book a demo today and see how Zencall can transform your barbershop.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#355DFF] hover:bg-slate-50 rounded-xl px-10 h-11 font-semibold"
              asChild
            >
              <a href="https://calendly.com/admin-zencall" target="_blank" rel="noopener noreferrer">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}