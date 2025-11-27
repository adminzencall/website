import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import VoiceAssistantButton from "@/components/VoiceAssistantButton";

const LOGO_LIGHT = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a67a80ef25071a588bb792/e39fe1f8d_Untitleddesign.png";
const LOGO_DARK = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a67a80ef25071a588bb792/c2c8b2165_Untitleddesign1.png";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home") },
    { title: "Services", url: createPageUrl("Services") },
    { title: "Demo", url: createPageUrl("Demo") },
    { title: "Pricing", url: createPageUrl("Pricing") },
    { title: "About", url: createPageUrl("About") },
    { title: "Contact", url: createPageUrl("Contact") },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0B0C0F]' : 'bg-[#FCFCFD]'}`}>
      <style>
        {`
          :root {
            --bg-light: #FCFCFD;
            --bg-dark: #0B0C0F;
            --ink-light: #0E1116;
            --ink-dark: #EDEFF2;
            --muted-ink: #9AA3AF;
            --accent-primary: #355DFF;
            --accent-secondary: #5A7CFF;
            --success: #36D399;
            --warning: #FFB020;
          }
          
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', system-ui, sans-serif;
          }
          
          h1 {
            font-size: 64px;
            line-height: 72px;
            letter-spacing: -0.02em;
            font-weight: 700;
          }
          
          h2 {
            font-size: 44px;
            line-height: 52px;
            letter-spacing: -0.015em;
            font-weight: 700;
          }
          
          h3 {
            font-size: 28px;
            line-height: 36px;
            letter-spacing: -0.01em;
            font-weight: 600;
          }
          
          @media (max-width: 768px) {
            h1 {
              font-size: 40px;
              line-height: 48px;
            }
            h2 {
              font-size: 32px;
              line-height: 40px;
            }
            h3 {
              font-size: 24px;
              line-height: 32px;
            }
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? `${darkMode ? 'bg-[#0B0C0F]/90 border-slate-800/50' : 'bg-white/95 border-slate-200/50'} backdrop-blur-lg border-b shadow-sm` 
          : "bg-transparent"
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center group">
              <img 
                src={darkMode ? LOGO_DARK : LOGO_LIGHT} 
                alt="Zencall" 
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {/* Desktop Navigation with improved spacing */}
            <div className="hidden lg:flex items-center gap-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`text-[15px] font-medium transition-all duration-200 hover:scale-105 ${
                    location.pathname === item.url
                      ? "text-[#355DFF]"
                      : `${darkMode ? 'text-[#EDEFF2] hover:text-[#355DFF]' : 'text-[#0E1116] hover:text-[#355DFF]'}`
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setDarkMode(!darkMode)}
                className={`w-9 h-9 p-0 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}
              >
                {darkMode ? "☀️" : "🌙"}
              </Button>
              <Button 
                variant="outline"
                className="border-[#355DFF] text-[#355DFF] hover:bg-[#355DFF]/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(53,93,255,0.3)] rounded-full px-5 h-10 transition-all duration-200"
                asChild
              >
                <a href="https://calendly.com/admin-zencall/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] text-white hover:opacity-90 hover:scale-105 hover:shadow-[0_0_30px_rgba(53,93,255,0.4)] rounded-full px-6 h-10 font-medium transition-all duration-200"
                asChild
              >
                <Link to={createPageUrl("Contact")}>Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t ${darkMode ? 'bg-[#0B0C0F] border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="px-6 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`block text-[15px] font-medium transition-colors ${
                    location.pathname === item.url
                      ? "text-[#355DFF]"
                      : `${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline"
                  className="w-full border-[#355DFF] text-[#355DFF] rounded-full"
                  asChild
                >
                  <a href="https://calendly.com/admin-zencall/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-[#355DFF] to-[#5A7CFF] text-white rounded-full"
                  asChild
                >
                  <Link to={createPageUrl("Contact")}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Voice Assistant Button */}
      <VoiceAssistantButton />

      {/* Footer */}
      <footer className={`border-t mt-16 ${darkMode ? 'bg-[#0B0C0F] border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Product */}
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>Product</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("Services")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Features
                </Link>
                <Link to={createPageUrl("Pricing")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Pricing
                </Link>
                <Link to={createPageUrl("Demo")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Demo
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>Solutions</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("Services")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Barbershops
                </Link>
                <Link to={createPageUrl("ComingSoon")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Law Firms
                </Link>
                <Link to={createPageUrl("ComingSoon")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Dental Clinics
                </Link>
                <Link to={createPageUrl("ComingSoon")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Salons & Spas
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>Resources</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("ComingSoon")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Documentation
                </Link>
                <Link to={createPageUrl("ComingSoon")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Help Center
                </Link>
                <Link to={createPageUrl("ComingSoon")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  API
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-[#EDEFF2]' : 'text-[#0E1116]'}`}>Company</h3>
              <div className="space-y-3">
                <Link to={createPageUrl("About")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  About
                </Link>
                <Link to={createPageUrl("Contact")} className="block text-sm text-[#9AA3AF] hover:text-[#355DFF] transition-colors">
                  Contact
                </Link>
                <p className="text-sm text-[#9AA3AF]">Privacy</p>
                <p className="text-sm text-[#9AA3AF]">Terms</p>
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <p className="text-sm text-[#9AA3AF]">Zencall © {new Date().getFullYear()} – Built in Canada for modern barbershops</p>
          </div>
        </div>
      </footer>
    </div>
  );
}