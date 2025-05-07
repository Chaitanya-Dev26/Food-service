import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const servicePackages = [
  {
    title: "School Lunch Program",
    subtitle: "Nutritious daily meals designed specifically for K-12 students",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80",
    tags: ["Balanced Nutrition", "Allergen-Free Options", "USDA Compliant"],
    menuFile: "/menus/school-lunch-menu.pdf",
    subtitleBgColor: "bg-blue-100", 
    subtitleTextColor: "text-black"
  },
  {
    title: "College Dining Solutions",
    subtitle: "Diverse meal plans catering to university campus life",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80",
    tags: ["24/7 Access", "International Cuisine", "Dietary Accommodations"],
    menuFile: "/menus/college-dining-menu.pdf",
    subtitleBgColor: "bg-orange-100", 
    subtitleTextColor: "text-black"
  },
  {
    title: "Corporate Event Catering",
    subtitle: "Professional catering for business meetings and corporate events",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    tags: ["Custom Menus", "Professional Service", "Setup Included"],
    menuFile: "/menus/corporate-menu.pdf",
    subtitleBgColor: "bg-gray-100", 
    subtitleTextColor: "text-black"
  },
  {
    title: "Special Events & Celebrations",
    subtitle: "Memorable dining experiences for your special occasions",
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&q=80",
    tags: ["Customizable", "Full-Service", "Theme-Based"],
    menuFile: "/menus/special-events-menu.pdf",
    subtitleBgColor: "bg-yellow-100", 
    subtitleTextColor: "text-black"
  }
];

const ServicePackages = () => {
  return (
    <section className="py-20 bg-white" id="packages">
      <div className="container mx-auto">
      <div className="text-center mb-16">
          <h2 className="section-heading text-gray-900">Our Delicious Menu</h2>
          <p className="section-subheading text-brand-dark/80">
            Explore our diverse offerings designed to satisfy all taste preferences and dietary requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicePackages.map((pkg, index) => (
            <Card
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 group border-0"
            >
              <div
                className="h-72 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Agrandir Tight, sans-serif' }}>
                    {pkg.title}
                  </h3>
                  <p className={`text-sm mt-1 p-2 rounded-md inline-block ${pkg.subtitleBgColor} ${pkg.subtitleTextColor}`} style={{ fontFamily: 'Agrandir Tight, sans-serif' }}>
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              <CardContent className="px-6 py-5 bg-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-brand-green/10 text-brand-green font-semibold uppercase tracking-wide text-[11px] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a
                  href={pkg.menuFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-sm font-medium text-brand-green hover:text-brand-green/90 transition-all"
                >
                  <FileText className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  <span className="relative">
                    Tap to download menu
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
                  </span>
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
