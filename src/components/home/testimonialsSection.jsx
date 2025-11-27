import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Owner, Elite Cuts Salon",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
    content: "Kairos.ai has revolutionized how we handle bookings. Our no-show rate dropped by 45% and we're booking 30% more appointments. The AI sounds so natural that clients don't even realize they're not talking to a human!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Manager, Downtown Barbershop",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    content: "The 24/7 availability is a game-changer. We're capturing bookings from customers calling after hours, which has increased our revenue by 25%. The system learns our customers' preferences and makes personalized recommendations.",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    role: "Franchise Owner, Hair Studio Chain",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "Managing multiple locations was a nightmare before Kairos.ai. Now our AI handles bookings across all three shops, automatically routing customers to the right location. It's like having a perfect receptionist who never takes a day off.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Don't just take our word for it. See how businesses like yours are growing 
            with our AI voice receptionist technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-slate-700 leading-relaxed text-lg italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
                    </div>
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