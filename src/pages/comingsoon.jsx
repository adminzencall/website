import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="w-20 h-20 bg-gradient-to-br from-[#355DFF]/10 to-[#5A7CFF]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Clock className="w-10 h-10 text-[#355DFF]" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          We're working hard to bring you this feature. Check back soon for updates!
        </p>
        <Button 
          className="bg-[#355DFF] hover:bg-[#2F4FCC] text-white rounded-full px-6"
          asChild
        >
          <Link to={createPageUrl("Home")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}