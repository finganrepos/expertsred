"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your project and explore how our expertise can accelerate your success. Whether you have a detailed specification or just an idea, we're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">hello@experts.red</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gray-50 border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@company.com" 
                    required 
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Your Company" 
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="project">Project Type</Label>
                  <Select name="project">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="ai">AI/ML Solutions</SelectItem>
                      <SelectItem value="consulting">Technical Consulting</SelectItem>
                      <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 text-white hover:bg-red-700"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
