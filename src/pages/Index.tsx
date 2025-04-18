
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServicePackages from "@/components/ServicePackages";
import SpecialOffer from '@/components/SpecialOffer';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <ServicePackages />
      <SpecialOffer />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
