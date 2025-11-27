import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { SendEmail } from "@/integrations/Core";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await SendEmail({
        to: "hello@zencall.com",
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
          New contact form submission:
          
          Name: ${formData.name}
          Email: ${formData.email}
          Company: ${formData.company}
          Phone: ${formData.phone}
          Business Type: ${formData.businessType}
          
          Message:
          ${formData.message}
        `
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
        <Card className="max-w-md mx-auto text-center shadow-lg border-0">
          <CardContent className="p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Thank You!
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We've received your message and will get back to you within 24 hours. 
              Our team is excited to help transform your business with AI.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Get Started Today
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to transform your business with AI? Let's discuss how we can help you 
              grow your revenue and improve customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Let's Talk
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team is here to help you understand how Zencall can 
                  transform your business operations and boost your revenue.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">hello@zencall.com</p>
                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600">Toronto, Ontario</p>
                    <p className="text-sm text-slate-500">Remote-first company</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>
                    <p className="text-slate-600">Within 24 hours</p>
                    <p className="text-sm text-slate-500">Usually much faster!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    Tell Us About Your Business
                  </CardTitle>
                  <p className="text-slate-600">
                    Fill out this form and we'll get back to you with a customized solution.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="h-12"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Company Name
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="h-12"
                          placeholder="Your Business Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Business Type
                      </label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) => handleInputChange("businessType", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salon">Hair Salon</SelectItem>
                          <SelectItem value="barbershop">Barbershop</SelectItem>
                          <SelectItem value="spa">Spa & Wellness</SelectItem>
                          <SelectItem value="medical">Medical Practice</SelectItem>
                          <SelectItem value="dental">Dental Office</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="retail">Retail Store</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Tell us about your needs
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="min-h-32"
                        placeholder="What challenges are you facing with customer service? How many calls do you handle per day? Any specific requirements?"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Free Consultation"}
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting this form, you agree to receive communications from Zencall. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}