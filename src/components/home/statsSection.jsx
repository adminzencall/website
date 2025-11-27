import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    description: "Businesses trust our AI"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime",
    description: "Always available for your customers"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Fewer No-Shows",
    description: "With automated reminders"
  },
  {
    icon: DollarSign,
    value: "25%",
    label: "Revenue Increase",
    description: "Average client growth"
  }
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven Results That
            <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of successful businesses that have transformed their customer service 
            and grown their revenue with our AI voice receptionist.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-blue-400">
                  {stat.label}
                </div>
                <p className="text-slate-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}