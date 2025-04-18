
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-green">Campus<span className="text-brand-orange">Kitchen</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-brand-dark hover:text-brand-green transition-colors">Home</Link>
          <Link to="/services" className="font-medium text-brand-dark hover:text-brand-green transition-colors">Services</Link>
          <Link to="/menu" className="font-medium text-brand-dark hover:text-brand-green transition-colors">Menu</Link>
          <Link to="/about" className="font-medium text-brand-dark hover:text-brand-green transition-colors">About Us</Link>
          <Link to="/contact" className="font-medium text-brand-dark hover:text-brand-green transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-brand-dark hover:bg-brand-dark/90">
            Get a Custom Quote
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
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="w-full text-brand-dark border-brand-dark hover:bg-brand-dark/10">
                Log In
              </Button>
              <Button className="w-full bg-brand-dark hover:bg-brand-dark/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
