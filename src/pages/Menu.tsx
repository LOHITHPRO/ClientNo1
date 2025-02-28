import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: 1,
    name: 'Filter Coffee',
    price: 120,
    description: 'Traditional South Indian filter coffee',
    category: 'coffee'
  },
  {
    id: 2,
    name: 'Masala Chai',
    price: 80,
    description: 'Spiced Indian tea with milk',
    category: 'tea'
  },
  {
    id: 3,
    name: 'Madras Coffee',
    price: 150,
    description: 'Strong coffee with chicory',
    category: 'coffee'
  },
  {
    id: 4,
    name: 'Mysore Coffee',
    price: 180,
    description: 'Premium blend with subtle notes',
    category: 'coffee'
  },
  {
    id: 5,
    name: 'Green Tea',
    price: 100,
    description: 'Pure green tea leaves',
    category: 'tea'
  },
  {
    id: 6,
    name: 'Cold Coffee',
    price: 160,
    description: 'Chilled coffee with ice cream',
    category: 'coffee'
  }
];

function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-[#1a0f00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#d4a574] mb-6">Our Menu</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#2a1f10] text-white border border-[#d4a574]/20 focus:outline-none focus:border-[#d4a574] transition-colors"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#d4a574] text-white'
                    : 'bg-[#2a1f10] text-[#d4a574] hover:bg-[#d4a574] hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('coffee')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'coffee'
                    ? 'bg-[#d4a574] text-white'
                    : 'bg-[#2a1f10] text-[#d4a574] hover:bg-[#d4a574] hover:text-white'
                }`}
              >
                Coffee
              </button>
              <button
                onClick={() => setSelectedCategory('tea')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'tea'
                    ? 'bg-[#d4a574] text-white'
                    : 'bg-[#2a1f10] text-[#d4a574] hover:bg-[#d4a574] hover:text-white'
                }`}
              >
                Tea
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#2a1f10] rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#d4a574]">{item.name}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white font-bold">₹{item.price}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-[#d4a574] text-white rounded-lg hover:bg-[#e5b584] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;