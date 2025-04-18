import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, School, GraduationCap, PartyPopper, Phone } from "lucide-react";

const CallToAction = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/your-number-here", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-green to-brand-green/90 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Food Service?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join the growing number of educational institutions and event organizers who trust Campus Kitchen Crafter for their food service needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <School className="h-5 w-5" />
                </div>
                <p className="text-white">Custom meal plans for K-12 schools</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-white">Diverse dining options for colleges and universities</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <PartyPopper className="h-5 w-5" />
                </div>
                <p className="text-white">Professional catering for academic and social events</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-brand-dark hover:bg-white/90">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-gray-200 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors duration-200 group"
              >
                Download Brochure 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-brand-dark text-xl font-bold mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-brand-dark mb-2 text-sm">Organization Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/50"
                    placeholder="Your school or organization"
                  />
                </div>
                <div>
                  <label className="block text-brand-dark mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/50"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-brand-dark mb-2 text-sm">Service Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/50">
                    <option>School Cafeteria Service</option>
                    <option>College Dining Service</option>
                    <option>Event Catering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-dark mb-2 text-sm">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/50 min-h-[100px]"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                {/* Submit + WhatsApp Section */}
                <div className="space-y-4">
                  <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">
                    Submit Request
                  </Button>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Prefer quick contact?</p>
                  </div>
                  <button 
                    type="button"
                    onClick={openWhatsApp}
                    className="group text-brand-green flex items-center justify-center gap-2 w-full py-2 transition-all hover:underline hover:scale-105"
                  >
                    <Phone className="h-4 w-4 transform transition-transform duration-300 group-hover:-rotate-12" />
                    Chat with us on WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Floating Badge with Motion */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-brand-yellow rounded-lg shadow-xl hidden md:block"
            >
              <div className="text-brand-dark text-center font-bold">
                <div className="text-xl">24hr</div>
                <div className="text-sm">Response Time</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
