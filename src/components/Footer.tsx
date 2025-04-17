
import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Campus<span className="text-brand-orange">Kitchen</span></h3>
            <p className="text-gray-400 mb-6">
              Providing nutritious, delicious food services to educational institutions and events.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1877F2] text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-[#E4405F] text-white">
                <Instagram size={20} />
              </a>
                <a href="#" className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0077B5] text-white">
                <Linkedin size={20} />
              </a>
</div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#school" className="text-gray-400 hover:text-white transition-colors">School Cafeteria</Link>
              </li>
              <li>
                <Link to="/services#college" className="text-gray-400 hover:text-white transition-colors">College Dining</Link>
              </li>
              <li>
                <Link to="/services#catering" className="text-gray-400 hover:text-white transition-colors">Event Catering</Link>
              </li>
              <li>
                <Link to="/services#special" className="text-gray-400 hover:text-white transition-colors">Special Dietary Menus</Link>
              </li>
              <li>
                <Link to="/services#consultation" className="text-gray-400 hover:text-white transition-colors">Menu Consultation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-brand-green h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">123 Campus Drive, Suite 456<br />College Town, CT 12345</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-green h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-brand-green h-5 w-5 flex-shrink-0" />
                <span className="text-gray-400">info@campuskitchen.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Campus Kitchen Crafter. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-gray-500 text-sm hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
