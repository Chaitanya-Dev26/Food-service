import React from 'react';
import { motion } from "framer-motion";
import { Building, Users, Star, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar"; // adjust the path if needed
import Footer from "@/components/Footer"; // adjust the path if needed

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-brand-green mt-16"> {/* Added mt-16 to avoid being hidden under fixed navbar */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforming School Food Service</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              We're reimagining institutional dining with fresh ingredients and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Campus Kitchen Crafter, we're on a mission to revolutionize institutional dining. 
                We believe that quality food service can transform the educational experience and build 
                stronger communities.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to fresh ingredients, sustainable practices, and innovative solutions 
                has made us a trusted partner for schools and institutions across the country.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Mission" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
