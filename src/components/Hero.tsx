import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-brand-gray to-white hero-pattern">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-brand-green">Fresh Food</span> for Schools, Colleges & Events
            </h1>
            <p className="text-lg md:text-xl text-brand-dark mb-8 max-w-lg mx-auto lg:mx-0">
              Providing nutritious, delicious meals that fuel learning and create memorable experiences for any occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white rounded-full px-8">
                View Our Services
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-brand-dark text-brand-dark hover:bg-brand-dark/10">
                Today's Menu <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-brand-green">50+</span> schools & colleges trust us
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious healthy food" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-green rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M13 15c0 0.0-3.671 1.5-5.5 1.5-1.83 0-5.5-1.5-5.5-1.5V3c0 0 3.67-1.5 5.5-1.5 1.829 0 5.5 1.5 5.5 1.5v12z"></path><path d="M13 15V3"></path><path d="M22 16c0 0-3.671-1.5-5.5-1.5-1.83 0-5.5 1.5-5.5 1.5"></path><path d="M22 3a10 10 0 0 0-2-1"></path><path d="M22 6c-1.5-1-4-1-4-1"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-black">Diverse Menus</h3>
                    <p className="text-sm text-gray-700">Catering to different tastes and dietary needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 p-4 bg-brand-orange rounded-lg shadow-xl hidden lg:block">
              <div className="text-white text-center">
                <div className="font-bold text-xl">30%</div>
                <div className="text-sm">Fresh organic<br />ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full bg-brand-yellow/20 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-brand-orange/20 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-brand-green/10 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;
