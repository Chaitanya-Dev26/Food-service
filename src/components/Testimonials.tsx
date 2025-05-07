
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Principal, Westview High School",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Campus Kitchen has transformed our school's lunch program. Students are more engaged in the afternoon, and we've seen a noticeable improvement in their focus and energy levels.",
    rating: 5,
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Dean of Student Life, Riverside College",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The variety and quality of food provided by Campus Kitchen has greatly enhanced our campus dining experience. Their team is responsive and accommodating to our students' diverse dietary needs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Event Coordinator, Education Conference",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Our annual conference catering was handled flawlessly. From setup to cleanup, the Campus Kitchen team was professional, and the food received countless compliments from attendees.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading text-brand-dark">What Our Costumers Say</h2>
          <p className="section-subheading text-brand-dark/80">
            Hear from schools, colleges, and event organizers who have experienced our services
          </p>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-xl card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 h-10 w-10 text-brand-green opacity-20" />
                    <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center gap-4">
            <button className="p-3 rounded-full border border-gray-200 text-gray-500 hover:border-brand-green hover:text-brand-green transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-200 text-gray-500 hover:border-brand-green hover:text-brand-green transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-brand-green/5 hidden lg:block"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-brand-orange/5 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
