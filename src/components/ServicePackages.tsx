
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const servicePackages = [
  {
    title: "School Lunch Program",
    subtitle: "Nutritious daily meals designed specifically for K-12 students",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80",
    tags: ["Balanced Nutrition", "Allergen-Free Options", "USDA Compliant"],
    menuFile: "/menus/school-lunch-menu.pdf"
  },
  {
    title: "College Dining Solutions",
    subtitle: "Diverse meal plans catering to university campus life",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80",
    tags: ["24/7 Access", "International Cuisine", "Dietary Accommodations"],
    menuFile: "/menus/college-dining-menu.pdf"
  },
  {
    title: "Corporate Event Catering",
    subtitle: "Professional catering for business meetings and corporate events",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    tags: ["Custom Menus", "Professional Service", "Setup Included"],
    menuFile: "/menus/corporate-menu.pdf"
  },
  {
    title: "Special Events & Celebrations",
    subtitle: "Memorable dining experiences for your special occasions",
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&q=80",
    tags: ["Customizable", "Full-Service", "Theme-Based"],
    menuFile: "/menus/special-events-menu.pdf"
  }
];

const ServicePackages = () => {
  return (
    <section className="py-20 bg-white" id="packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Delicious Menu</h2>
          <p className="section-subheading">
          Explore our diverse offerings designed to satisfy all taste preferences and dietary requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicePackages.map((pkg, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-dark">{pkg.title}</CardTitle>
                <p className="text-brand-dark/60 mt-2">{pkg.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary" 
                      className="bg-brand-green/10 text-brand-green hover:bg-brand-green/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={pkg.menuFile}
                  className="inline-flex items-center text-sm text-brand-green hover:text-brand-green/80 transition-colors float-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  Tap to download menu
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;