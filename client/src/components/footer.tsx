import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-4">experts.red</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium software development consultancy delivering world-class applications and expert guidance to accelerate your business growth.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="bg-gray-800 hover:bg-red-600">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-800 hover:bg-red-600">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-800 hover:bg-red-600">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-800 hover:bg-red-600">
                <Dribbble className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI & ML</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#team" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Experts.Red. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
