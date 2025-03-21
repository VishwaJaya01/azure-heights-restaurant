import React from 'react';

const HeroSection = () => (
  <section className="relative bg-indigo-600 text-white">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 opacity-90"></div>
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-20" 
      style={{ backgroundImage: "url('/api/placeholder/1920/600')" }}
    ></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="md:w-2/3">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Fine Dining & Exceptional Service</h2>
        <p className="text-xl md:text-2xl mb-8">Experience culinary excellence at Azure Heights Hotel's restaurant and bar.</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition">
            View Menu
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;