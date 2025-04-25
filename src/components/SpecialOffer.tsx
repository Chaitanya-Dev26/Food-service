import sampleDish1 from "../assets/sample-dish-1.png";
import sampleDish2 from "../assets/sample-dish-2.png";
import sampleDish3 from "../assets/sample-dish-3.png";

import { Button } from "@/components/ui/button";

const SpecialOffer = () => {
  return (
    <section className="relative bg-[#fdfaf3] w-full py-20 px-6 md:px-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="max-w-xl text-left z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
            Enjoy stress-free catering and meals with CampusKitchen
          </h2>
          <p className="text-lg text-[#333333] mt-6">
            Get delicious, freshly prepared meals delivered for your events,
            school/college canteens, and more.
          </p>
          <p className="text-lg text-[#333333] mt-2">
            Now with <span className="font-semibold">custom plans</span> and{" "}
            <span className="font-semibold">special offers</span> for institutions.
          </p>
          <p className="text-lg text-[#333333] mt-2">
            Save up to 40%* on bulk contracts and subscriptions!
          </p>

          <Button className="mt-8 bg-brand-dark hover:bg-brand-dark/90 text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
            Get a Custom Quote
          </Button>
        </div>

        {/* Right - Green Shape and Floating Images */}
        <div className="relative w-full md:w-[700px] h-[400px] mt-16 md:mt-0">
          {/* Green triangle background */}
          <div className="absolute -bottom-24 -left-24 w-[200%] h-[2000%] bg-green-700 rotate-45 origin-bottom-left z-0 rounded-none" />

          {/* Floating images */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-6 pr-10 z-10">
            <img
              src={sampleDish1}
              alt="Dish 1"
              className="w-48 h-48 rounded-full object-cover"
              style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)" }}
            />
            <img
              src={sampleDish2}
              alt="Dish 2"
              className="w-48 h-48 rounded-full object-cover"
              style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)" }}
            />
            <img
              src={sampleDish3}
              alt="Dish 3"
              className="w-48 h-48 rounded-full object-cover"
              style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
