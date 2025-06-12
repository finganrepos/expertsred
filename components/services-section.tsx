"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Smartphone, Cloud, Brain, Users, Building } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, scalable web applications built with React, Next.js, and cutting-edge technologies.",
    features: [
      "React & Next.js Applications",
      "Node.js Backend Development",
      "Progressive Web Apps (PWA)",
      "API Development & Integration"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: [
      "React Native Applications",
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines for enterprise reliability.",
    features: [
      "AWS, Azure, GCP Solutions",
      "CI/CD Pipeline Setup",
      "Container Orchestration",
      "Performance Optimization"
    ]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by machine learning and artificial intelligence technologies.",
    features: [
      "Custom AI Model Development",
      "Data Analytics & Insights",
      "Natural Language Processing",
      "Computer Vision Solutions"
    ]
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Strategic guidance and hands-on mentoring to accelerate your development team's growth.",
    features: [
      "Architecture Reviews",
      "Code Quality Audits",
      "Team Training & Mentoring",
      "Technology Strategy"
    ]
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Large-scale applications designed for enterprise security, compliance, and performance requirements.",
    features: [
      "Enterprise Architecture",
      "Security & Compliance",
      "Legacy System Modernization",
      "Scalable Microservices"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-600">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Build What Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From cutting-edge web applications to enterprise mobile solutions, we deliver software that drives your business forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group animate-in fade-in slide-in-from-bottom duration-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <service.icon className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
