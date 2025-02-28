import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
            alt="Coffee beans background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#d4a574] mb-6">
              Experience the Rich Heritage of
              <span className="block text-white mt-2">South Indian Coffee</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover authentic filter coffee and traditional brewing methods passed down through generations
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#d4a574] hover:bg-[#e5b584] transition-colors"
            >
              View Menu
              <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-20 bg-[#2a1f10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#d4a574]">Our Specialties</h2>
            <p className="mt-4 text-gray-400">Handcrafted with passion and tradition</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a0f00] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80"
                alt="Traditional Filter Coffee"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#d4a574]">Traditional Filter Coffee</h3>
                <p className="mt-2 text-gray-400">Authentic South Indian filter coffee made with premium beans</p>
              </div>
            </div>

            <div className="bg-[#1a0f00] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80"
                alt="Masala Chai"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#d4a574]">Masala Chai</h3>
                <p className="mt-2 text-gray-400">Aromatic Indian tea with traditional spices</p>
              </div>
            </div>

            <div className="bg-[#1a0f00] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
                alt="Coffee Beans"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#d4a574]">Premium Coffee Beans</h3>
                <p className="mt-2 text-gray-400">Freshly roasted beans available for purchase</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;