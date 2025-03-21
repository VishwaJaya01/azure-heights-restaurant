import React from 'react';

const OrderProcess = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">How It Works</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our streamlined order process ensures a seamless dining experience</p>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            step: 1,
            title: 'Browse Menu',
            description: 'Explore our curated selection of dishes and beverages'
          },
          {
            step: 2,
            title: 'Place Order',
            description: 'Order directly or through our attentive waitstaff'
          },
          {
            step: 3,
            title: 'Track Preparation',
            description: 'Follow real-time updates as your order is prepared'
          },
          {
            step: 4,
            title: 'Enjoy',
            description: 'Savor your meal with our impeccable service'
          }
        ].map(({ step, title, description }) => (
          <div key={step} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrderProcess;