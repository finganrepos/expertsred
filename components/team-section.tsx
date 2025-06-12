"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Senior Full-Stack Engineer",
    skills: "React, Node.js, TypeScript, AWS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Sarah Chen",
    role: "Mobile Development Lead",
    skills: "React Native, iOS, Android, Flutter",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Marcus Rodriguez",
    role: "DevOps Architect",
    skills: "AWS, Docker, Kubernetes, CI/CD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Dr. Emily Johnson",
    role: "AI/ML Specialist",
    skills: "Python, TensorFlow, PyTorch, NLP",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry veterans with deep expertise across modern technologies and proven track records of delivering exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-xl transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom duration-600"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform" 
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.skills}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-red-600 text-white hover:bg-red-700">
            View Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
