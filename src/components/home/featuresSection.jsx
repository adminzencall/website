import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Calendar, 
  Users, 
  BarChart3, 
  Clock,
  MessageSquare,
  CreditCard,
  Globe,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description: "Never miss a call again. Our AI receptionist works around the clock, handling customer inquiries and bookings even when you're closed.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Calendar,
    title: "Smart Booking System",
    description: "Automatically schedule appointments, manage availability, and sync with your existing calendar. Reduces no-shows by 40%.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "CRM Integration",
    description: "Keep track of customer preferences, service history, and loyalty status. Personalize every interaction for better relationships.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get insights into peak hours, popular services, revenue trends, and customer behavior to optimize your business strategy.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Handle phone calls, SMS, and web chat from one unified system. Consistent experience across all touchpoints.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Clock,
    title: "Automated Reminders",
    description: "Send SMS and email reminders 24 hours before appointments. Reduce no-shows and improve customer experience.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept deposits, process payments, and handle gift cards. Increase revenue with upselling and package deals.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Serve customers in English, French, Spanish, and more. Perfect for diverse markets and expanding businesses.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliance, and secure data handling. Your customer data is always protected.",
    color: "from-red-500 to-red-600"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything Your Business
            <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Needs to Thrive
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our AI-powered platform combines cutting-edge voice technology with powerful business tools 
            to transform how you handle customer interactions and grow your revenue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}