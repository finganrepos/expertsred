import { Button } from "@/components/ui/button";
import { Rocket, Calendar, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 lg:pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 animate-in fade-in slide-in-from-left duration-800">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Premium{" "}
              <span className="gradient-text">Software Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Our US-based team of elite software engineers builds, optimizes, and scales world-class applications while leveling up your team along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                500+ Projects Delivered
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                98% Client Satisfaction
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                24/7 Support
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Software development team collaborating" 
              className="rounded-2xl shadow-2xl w-full animate-in fade-in slide-in-from-right duration-800 delay-200" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
