import React from 'react';
import { Salad, School, Clock, ChefHat, Earth, Heart } from "lucide-react"; // Added Heart for "Meaningful Moments"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[45vh] bg-brand-green mt-16">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bringing Flavor to Every Celebration</h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fdfcf8]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-20 text-gray-800">Our Values</h2>

          {/* Top Row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto mb-16">
            <div className="flex flex-col items-center text-center">
              <Salad className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1">Fresh & Healthy</h3>
              <p className="text-black text-sm max-w-xs">
                We serve nutritious meals made with fresh, quality ingredients—no compromises.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <School className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1">Student-Focused</h3>
              <p className="text-black text-sm max-w-xs">
                Portions, menus, and nutrition tailored for school and college needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Clock className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1">Reliable Delivery</h3>
              <p className="text-black text-sm max-w-xs">
                On-time meal delivery and consistent quality—every single day.
              </p>
            </div>
          </div>

          {/* Bottom Row - 2 items centered */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Earth className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1">Sustainable Practices</h3>
              <p className="text-black text-sm max-w-xs">
                Eco-conscious operations with minimal waste and responsible sourcing.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Heart className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1">Meaningful Moments</h3>
              <p className="text-black text-sm max-w-xs">
                Helping students bond over delicious meals and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
