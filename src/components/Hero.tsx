import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Leaf, Apple, Carrot } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const floatingElement1 = useRef(null);
  const floatingElement2 = useRef(null);
  const floatingElement3 = useRef(null);

  // 👇 Mouse-based gentle float
  useEffect(() => {
    let requestId;
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      const animate = () => {
        if (floatingElement1.current) {
          floatingElement1.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        }
        if (floatingElement2.current) {
          floatingElement2.current.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`;
        }
        if (floatingElement3.current) {
          floatingElement3.current.style.transform = `translate(${x * 8}px, ${-y * 8}px)`;
        }
        requestId = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-brand-green/5 via-white to-brand-orange/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="text-brand-green">Fresh & Healthy</span> Food for a
              <span className="text-brand-orange"> Better Future</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in">
              Providing nutritious, sustainable meals that fuel learning and create memorable experiences while caring for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-brand-dark hover:bg-brand-dark/90 text-white rounded-full px-8 group transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                >
                  View Our Services
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-brand-dark text-brand-dark hover:bg-brand-dark/10 group transition-all duration-300 transform hover:scale-105"
              >
                Today's menu <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md transition-transform hover:scale-110 hover:z-10"
                  >
                    <img
                      src={`/avatars/person${i}.jpg`}
                      alt={`Person ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-brand-green">50+</span> schools & colleges trust us
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/30 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Delicious healthy food"
                className="w-full h-full object-cover transform transition-all duration-10000 hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg z-20 transition-all duration-300 hover:bg-white">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-green/10 rounded-full p-4">
                    <Leaf className="text-brand-green h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-dark">Farm Fresh Ingredients</h3>
                    <p className="text-brand-dark/70">Locally sourced, sustainably grown</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Items */}
            <div ref={floatingElement1} className="absolute -top-10 -right-6 p-4 bg-brand-orange rounded-lg shadow-xl hidden lg:block transition-all duration-500">
              <div className="text-white text-center relative">
                <div className="font-bold text-xl">100%</div>
                <div className="text-sm">Fresh organic<br />ingredients</div>
              </div>
            </div>

            <div ref={floatingElement2} className="absolute -bottom-5 -left-5 p-3 rounded-full bg-brand-green/90 text-white shadow-lg hidden lg:block">
              <Apple size={24} />
            </div>

            <div ref={floatingElement3} className="absolute top-1/4 -right-8 p-3 rounded-full bg-brand-yellow/90 text-white shadow-lg hidden lg:block">
              <Carrot size={24} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Pulsing Orbs */}
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full bg-brand-yellow/20 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-brand-orange/20 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-brand-green/10 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;
