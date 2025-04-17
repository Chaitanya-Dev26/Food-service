import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: string;
}
const menuCategories = [{
  value: "weekly",
  label: "Weekly Specials"
}, {
  value: "lunch",
  label: "Lunch Menu"
}, {
  value: "breakfast",
  label: "Breakfast"
}, {
  value: "catering",
  label: "Catering"
}];
const menuItems: Record<string, MenuItem[]> = {
  weekly: [{
    id: 1,
    name: "Mediterranean Bowl",
    description: "Quinoa, roasted vegetables, feta cheese, and hummus with olive oil dressing",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Vegetarian", "Gluten-Free"],
    price: "$8.99"
  }, {
    id: 2,
    name: "Chicken Teriyaki",
    description: "Grilled chicken breast with teriyaki sauce, served with rice and steamed vegetables",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["High-Protein", "Fan Favorite"],
    price: "$9.99"
  }, {
    id: 3,
    name: "Taco Tuesday Plate",
    description: "Three soft tacos with your choice of protein, topped with fresh salsa and guacamole",
    image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Customizable", "Tuesday Special"],
    price: "$7.99"
  }, {
    id: 4,
    name: "Seasonal Fruit Parfait",
    description: "Layers of Greek yogurt, granola, and seasonal fruits with a drizzle of honey",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Vegetarian", "Breakfast"],
    price: "$5.99"
  }],
  lunch: [{
    id: 5,
    name: "Classic Burger",
    description: "Beef patty with lettuce, tomato, cheese, and special sauce on a brioche bun",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Student Favorite"],
    price: "$7.99"
  }, {
    id: 6,
    name: "Caesar Salad Wrap",
    description: "Grilled chicken, romaine lettuce, parmesan, and caesar dressing in a whole wheat wrap",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Healthy Choice"],
    price: "$8.49"
  }],
  breakfast: [{
    id: 7,
    name: "Overnight Oats",
    description: "Rolled oats soaked in milk with fresh berries, nuts, and a touch of honey",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Vegan Option", "High Fiber"],
    price: "$4.99"
  }, {
    id: 8,
    name: "Breakfast Burrito",
    description: "Scrambled eggs, cheese, black beans, and salsa wrapped in a warm tortilla",
    image: "https://images.unsplash.com/photo-1553451333-73a4fabb2f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["High-Protein", "Morning Favorite"],
    price: "$6.99"
  }],
  catering: [{
    id: 9,
    name: "Sandwich Platter",
    description: "Assortment of gourmet sandwiches, perfect for meetings and events",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Serves 10-12", "Popular"],
    price: "$59.99"
  }, {
    id: 10,
    name: "Pasta Bar",
    description: "Choice of pastas and sauces with garlic bread and salad",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Serves 20+", "Event Favorite"],
    price: "$129.99"
  }]
};
const MenuShowcase = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  return <section className="py-20 bg-brand-gray/30" id="menu">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Delicious Menu</h2>
          <p className="section-subheading">
            Explore our diverse offerings designed to satisfy all taste preferences and dietary requirements
          </p>
        </div>
        
        <Tabs defaultValue="weekly" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-full">
              {menuCategories.map(category => <TabsTrigger key={category.value} value={category.value} className="rounded-full px-6 py-2 data-[state=active]:bg-brand-green data-[state=active]:text-white">
                  {category.label}
                </TabsTrigger>)}
            </TabsList>
          </div>
          
          {menuCategories.map(category => <TabsContent key={category.value} value={category.value} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {menuItems[category.value].map(item => <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row card-hover">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className="text-lg font-semibold text-brand-green">{item.price}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => <Badge key={idx} variant="outline" className="bg-brand-green/10 text-brand-green border-brand-green/20">
                            {tag}
                          </Badge>)}
                      </div>
                    </div>
                  </div>)}
              </div>
              <div className="text-center mt-12">
                <Button className="bg-brand-dark hover:bg-brand-dark/90">
                  View Full {category.label} Menu
                </Button>
              </div>
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};
export default MenuShowcase;