"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Mobile App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["React Native", "Node.js", "AWS"]
  },
  {
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with advanced analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Next.js", "PostgreSQL", "Stripe"]
  },
  {
    title: "AI Analytics Platform",
    description: "Machine learning-powered analytics platform with predictive insights and automation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "TensorFlow", "React"]
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful projects we've delivered for clients across various industries and scales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 animate-in fade-in slide-in-from-bottom duration-600"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" className="text-red-600 hover:text-red-700 p-0">
                  View Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-red-600 text-white hover:bg-red-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
