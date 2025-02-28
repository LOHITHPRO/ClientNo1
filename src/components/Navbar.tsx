import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-[#1a0f00]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Coffee className="h-8 w-8 text-[#d4a574]" />
            <span className="ml-2 text-2xl font-bold text-[#d4a574]">Tanjore Coffee</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-[#d4a574] hover:text-[#e5b584] transition-colors ${
                location.pathname === '/' ? 'border-b-2 border-[#d4a574]' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`text-[#d4a574] hover:text-[#e5b584] transition-colors ${
                location.pathname === '/menu' ? 'border-b-2 border-[#d4a574]' : ''
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className={`text-[#d4a574] hover:text-[#e5b584] transition-colors ${
                location.pathname === '/contact' ? 'border-b-2 border-[#d4a574]' : ''
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/cart" 
              className="relative text-[#d4a574] hover:text-[#e5b584] transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Link 
              to="/cart" 
              className="relative text-[#d4a574] hover:text-[#e5b584] transition-colors mr-4"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#d4a574] hover:text-[#e5b584]"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1a0f00] border-t border-[#d4a574]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-[#d4a574] hover:text-[#e5b584]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 text-[#d4a574] hover:text-[#e5b584]"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-[#d4a574] hover:text-[#e5b584]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;