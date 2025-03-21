import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { featuredItems } from '../data/featuredItems';

const FeaturedMenu = () => {
  const [activeTab, setActiveTab] = useState('all');
  const filteredItems = activeTab === 'all' 
    ? featuredItems 
    : featuredItems.filter(item => item.category === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Menu</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">Discover our chef's selection of exquisite culinary creations</p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {['all', 'breakfast', 'appetizer', 'dinner', 'drinks'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } ${index === 0 ? 'rounded-l-lg' : ''} ${index === 4 ? 'rounded-r-lg' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-indigo-600 font-medium">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition">
            View Full Menu
            <ChevronDown size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;