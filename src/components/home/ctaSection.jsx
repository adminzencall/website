import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Transform
            <span className="block text-blue-200">
              Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of successful businesses that have revolutionized their customer service 
            with our AI voice receptionist. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-4 text-lg h-auto group font-semibold"
              asChild
            >
              <Link to={createPageUrl("Contact")}>
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl px-8 py-4 text-lg h-auto group font-semibold"
              asChild
            >
              <Link to={createPageUrl("Demo")}>
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}