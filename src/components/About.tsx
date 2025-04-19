
import React from 'react';
import { motion } from "framer-motion";
import { Building, Users, Star, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-brand-green">
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
      <section className="py-20">
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building className="w-8 h-8 mx-auto mb-4 text-brand-green" />
              <div className="text-4xl font-bold text-brand-dark mb-2">200+</div>
              <div className="text-gray-600">Partner Institutions</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-brand-green" />
              <div className="text-4xl font-bold text-brand-dark mb-2">50,000+</div>
              <div className="text-gray-600">Students Served Daily</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-4 text-brand-green" />
              <div className="text-4xl font-bold text-brand-dark mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-4 text-brand-green" />
              <div className="text-4xl font-bold text-brand-dark mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 mx-auto mb-4 text-brand-green" />
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices in our operations and sourcing.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-brand-green" />
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our ingredients or service delivery.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-brand-green" />
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Community</h3>
              <p className="text-gray-600">
                We build lasting relationships with our partner institutions and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Food Service?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of institutions that trust Campus Kitchen Crafter for their food service needs.
          </p>
          <button className="bg-white text-brand-green px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;