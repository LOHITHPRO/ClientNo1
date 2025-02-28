import React from 'react';
import { Coffee, Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#1a0f00] py-12 border-t border-[#d4a574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Coffee className="h-8 w-8 text-[#d4a574]" />
            <span className="ml-2 text-2xl font-bold text-[#d4a574]">Tanjore Coffee</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#d4a574] hover:text-[#e5b584] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#d4a574] hover:text-[#e5b584] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Tanjore Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;