"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-effect border-b border-gray-200" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection("home")}>
              experts.red
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("team")} 
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("work")} 
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Work
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <button 
                    onClick={() => scrollToSection("home")} 
                    className="text-left px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection("services")} 
                    className="text-left px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection("team")} 
                    className="text-left px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    Team
                  </button>
                  <button 
                    onClick={() => scrollToSection("work")} 
                    className="text-left px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    Work
                  </button>
                  <Button 
                    onClick={() => scrollToSection("contact")} 
                    className="mx-4 bg-red-600 text-white hover:bg-red-700"
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
