import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  School,
  Utensils,
  GraduationCap,
  PartyPopper,
  Leaf,
  Clock
} from "lucide-react";
import { motion } from "framer-motion"; // ✅ Added for animation

const services = [
  {
    title: "School Cafeteria",
    description:
      "Nutritious meals designed to fuel growing minds. Our school meal programs follow dietary guidelines while keeping lunch exciting.",
    icon: School,
    color: "bg-blue-500"
  },
  {
    title: "College Dining",
    description:
      "Modern dining options that meet the diverse tastes and schedules of college students. Meal plans available for all budgets.",
    icon: GraduationCap,
    color: "bg-brand-green"
  },
  {
    title: "Event Catering",
    description:
      "From graduation ceremonies to conferences, we provide memorable food experiences for all types of academic and social events.",
    icon: PartyPopper,
    color: "bg-brand-orange"
  }
];

const features = [
  {
    title: "Fresh Ingredients",
    description: "We source local and organic ingredients whenever possible",
    icon: Leaf
  },
  {
    title: "On-Time Delivery",
    description: "Punctual service to maintain your institution's schedule",
    icon: Clock
  },
  {
    title: "Custom Menus",
    description: "Tailored meal plans that meet dietary requirements and preferences",
    icon: Utensils
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading text-brand-dark">Our Food Services</h2>
          <p className="section-subheading text-brand-dark/80">
            We provide high-quality food services customized to the specific needs of educational institutions and events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg card-hover">
              <CardHeader>
                <div
                  className={`p-3 rounded-lg w-14 h-14 flex items-center justify-center ${service.color} text-white mb-4`}
                >
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-brand-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brand-dark/60 min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                Why Choose Our Food Service?
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-brand-green/10 p-3 rounded-full h-12 w-12 flex items-center justify-center text-brand-green">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark">
                        {feature.title}
                      </h4>
                      <p className="text-brand-dark/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-brand-dark hover:bg-brand-dark/90 text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                Get a Custom Quote
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden h-[400px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Our food service in action"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 👇 Floating box with animation */}
              <motion.div
                initial={{ y: 0 }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg md:max-w-[200px] cursor-pointer transition-all"
              >
                <div className="text-sm font-medium text-gray-600">Trusted by</div>
                <div className="text-2xl font-bold text-brand-green">50+ Schools</div>
                <div className="text-sm text-gray-600">across the country</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
