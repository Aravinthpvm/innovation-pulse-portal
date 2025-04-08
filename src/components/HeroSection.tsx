
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-hero-pattern flex items-center justify-center section-padding overflow-hidden">
      {/* Abstract Shapes - Animated Decorations */}
      <div className="absolute top-1/4 left-[5%] w-64 h-64 rounded-full bg-innovation-100/30 blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 right-[5%] w-64 h-64 rounded-full bg-insight-100/30 blur-3xl animate-pulse-gentle"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-innovation-50/20 blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="hidden lg:block absolute top-[15%] right-[15%] w-24 h-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg rotate-12 animate-float"></div>
      <div className="hidden lg:block absolute bottom-[20%] left-[15%] w-16 h-16 bg-white/80 backdrop-blur-md rounded-md shadow-lg -rotate-12 animate-float"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Track <span className="text-gradient">Innovation</span> Metrics for Better Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive analytics platform tracking patents, R&D investments, and entrepreneurship rates to guide policy decisions and advocate for innovation-friendly infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gradient-to-r from-innovation-500 to-insight-500 hover:from-innovation-600 hover:to-insight-600 text-white px-6 py-6 rounded-lg">
                <Link to="/dashboard">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="px-6 py-6 rounded-lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-innovation-500/20 to-insight-500/20 rounded-xl transform rotate-3 scale-[0.97]"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl">Innovation Index</h3>
                  <span className="text-innovation-500 font-bold">+5.2%</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-500 h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-insight-500 h-full rounded-full" style={{ width: '62%' }}></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-innovation-300 h-full rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm">Patent Filings</p>
                    <p className="font-bold text-2xl text-innovation-700">1,245</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-500 text-sm">R&D Investment</p>
                    <p className="font-bold text-2xl text-insight-700">$12.4B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
