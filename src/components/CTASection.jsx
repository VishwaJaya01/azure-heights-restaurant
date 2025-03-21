import React from 'react';

const CTASection = () => (
  <section className="bg-indigo-600 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Dining Experience?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">Join Azure Heights Hotel's restaurant management system for a seamless dining and ordering experience.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition">
          Register Now
        </button>
        <button className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;