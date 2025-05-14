import React from 'react';
import { Salad, School, Clock, ChefHat, Earth } from "lucide-react"; // Heart icon was imported but not used
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import about1 from "@/assets/about1.jpeg";
import CEO from "@/assets/CEO.png";
import aboutus3 from "@/assets/aboutus3.png";

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
            <div className="flex flex-col items-center">
              <Salad className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1 text-left">Fresh & Healthy</h3>
              <p className="text-black text-sm max-w-xs text-left">
                We serve nutritious meals made with fresh, quality ingredients—no compromises.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <School className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1 text-left">Student-Focused</h3>
              <p className="text-black text-sm max-w-xs text-left">
                Portions, menus, and nutrition tailored for school and college needs.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1 text-left">Reliable Delivery</h3>
              <p className="text-black text-sm max-w-xs text-left">
                On-time meal delivery and consistent quality—every single day.
              </p>
            </div>
          </div>

          {/* Bottom Row - 2 items centered */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-20 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Earth className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1 text-left">Sustainable Practices</h3>
              <p className="text-black text-sm max-w-xs text-left">
                Eco-conscious operations with minimal waste and responsible sourcing.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <ChefHat className="w-[171px] h-[160px] text-green-800 mb-6" />
              <h3 className="font-semibold text-lg mb-1 text-left">Professional Catering</h3>
              <p className="text-black text-sm max-w-xs text-left">
                Expert food service for school events, functions, and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center overflow-hidden bg-lime-400 min-h-[500px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1150px] min-h-[500px] bg-[#fdfcf8] shadow-lg overflow-hidden">
          
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-start items-center p-0">
              <img
                src={about1}
                alt="Family Meal Table" 
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover shadow-xl"
              />
            </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 p-6 lg:pr-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Here to Change the Way People Eat.
            </h2>
            <p className="text-base text-gray-700 mb-3">
              We believe everyone deserves honest, delicious food. That’s why we make it
              super simple to prepare fresh meals that bring out our inner creator and
              bring us together with loved ones.
            </p>
            <p className="text-base text-gray-700">
              Because good food nourishes our bodies. And great food nourishes happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Difference & Story Section */}
      <section className="bg-[#fdfcf8] py-20">
        <div className="container mx-auto px-4">
          {/* Our Difference */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-15">
            {/* Text Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 pl-[8px] lg:pl-[7rem]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Difference</h2>
              <p className="text-base text-gray-700 mb-6 max-w-lg">
                We’re here to change how students eat by delivering fresh, nutritious meals tailored for schools and colleges. 
                With a focus on sustainability, reliability, and care—we don’t just deliver food; we deliver better habits.
              </p>
              <div className="flex justify-start ">
                <button className="mt-8 bg-brand-dark px-[12rem] py-3 rounded-lg hover:bg-brand-dark/90 text-white">
                  Get a Custom Quote
                </button>
              </div>
            </div>

            {/* Optional Illustration */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={aboutus3}
                alt="Sustainability"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we got here */}
      <section className="w-full flex justify-center items-center overflow-hidden bg-custom-beige min-h-[500px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1150px] min-h-[500px] bg-[#fdfcf8] shadow-lg overflow-hidden">
          
          {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-start items-center p-0">
              <img
                src={CEO}
                alt="Family Meal Table" 
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover shadow-xl"/>
            </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 p-6 lg:pr-9">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              How We Got Here
            </h2>
            <p className="text-[15px] text-gray-700 mb-6">
            In 2011, our founders Dominik and Thomas spent afternoons
            packing pre-portioned recipe ingredients for their community. 
            Their purpose? To test a new way to get home cooked meals on tables 
            around the world.
            </p>
            <p className="text-[15px] text-gray-700 mb-6">
            Little by little, their experiment became a real business that changed
             the way people eat. With love and dedication, HelloFresh went from a small, 
             home-grown project to a meal kit service spanning 18 countries and over 1 
             billion meals—the biggest in the world.
            </p>
            <p className="text-[15px] text-gray-700">
            But despite its immense success, our philosophy remains the same: to make it easy 
            for everyone to prepare a delicious, home-cooked meal for them and their loved ones.
            </p>
          </div>
        </div>
      </section>

      <section>

      </section>
      <Footer />
    </div>
  );
};

export default About;
