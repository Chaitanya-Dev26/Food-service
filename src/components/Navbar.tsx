import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event to change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the quote form when button is clicked
  const handleQuoteClick = () => {
    const formSection = document.getElementById("quote-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-green">Campus<span className="text-brand-orange">Kitchen</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-brand-dark hover:text-brand-green transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/services" className="font-medium text-brand-dark hover:text-brand-green transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/menu" className="font-medium text-brand-dark hover:text-brand-green transition-colors relative group">
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="font-medium text-brand-dark hover:text-brand-green transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="font-medium text-brand-dark hover:text-brand-green transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full"></span>
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center">
          <Button 
            onClick={handleQuoteClick} // Trigger smooth scroll on click
            className="bg-brand-green hover:bg-brand-green/90 transition-all duration-300 hover:scale-105 group"
          >
            Get a Custom Quote
            <Quote className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-slide-in">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <Link to="/" 
              className="px-4 py-2 text-brand-dark hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/services" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/menu" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link to="/about" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link to="/contact" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4">
              <Button 
                onClick={handleQuoteClick} // Trigger smooth scroll on mobile as well
                className="w-full bg-brand-green hover:bg-brand-green/90"
              >
                Get a Custom Quote
                <Quote className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
