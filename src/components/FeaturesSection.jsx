import React from 'react';

const FeaturesSection = () => (
  <section className="py-16 bg-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Streamlined Hotel Dining Management</h2>
          <p className="text-gray-600 mb-8">Our comprehensive system handles the complete internal food & beverage control process, ensuring a seamless experience for both guests and staff.</p>

          <div className="space-y-4">
            {[
              {
                title: 'Dual Order Management',
                description: 'Handle both direct customer orders and waiter-assisted orders efficiently'
              },
              {
                title: 'End-to-End Tracking',
                description: 'Monitor the entire process from ordering to delivery in real-time'
              },
              {
                title: 'Seamless Communication',
                description: 'Updates from customers, waiters, kitchen and related entities'
              },
              {
                title: 'Comprehensive Analytics',
                description: 'Gain insights with detailed reporting on all aspects of your operation'
              }
            ].map(({ title, description }, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">✓</div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                  <p className="mt-1 text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://png.pngtree.com/png-vector/20190626/ourmid/pngtree-adminconsolepanelrootsoftware-flat-color-icon-vector-png-image_1494043.jpg" 
              alt="Dashboard Preview" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Powerful Admin Dashboard</h3>
              <p className="text-gray-600 mb-4">Manage your entire restaurant operation from a single, intuitive interface</p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition">
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;