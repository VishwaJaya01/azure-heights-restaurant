import React, { useState } from 'react';
import { Bell, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <h1 className="text-xl font-bold text-indigo-600 pb-2">Azure Heights Hotel</h1>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-indigo-600 hover:text-indigo-500 px-3 py-2 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-500 px-3 py-2 font-medium">Menu</a>
            <a href="#" className="text-gray-600 hover:text-indigo-500 px-3 py-2 font-medium">Orders</a>
            <a href="#" className="text-gray-600 hover:text-indigo-500 px-3 py-2 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-500 px-3 py-2 font-medium">Contact</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-indigo-600">
              <User size={20} /><span className="ml-1">Login</span>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4">
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2 text-indigo-600 font-medium">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-500 font-medium">Menu</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-500 font-medium">Orders</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-500 font-medium">About</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-500 font-medium">Contact</a>
            <div className="flex space-x-4 mt-4 px-3">
              <button className="text-gray-600 hover:text-indigo-600"><Bell size={20} /></button>
              <button className="text-gray-600 hover:text-indigo-600"><ShoppingCart size={20} /></button>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <User size={20} /><span className="ml-1">Login</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;