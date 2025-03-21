import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Azure Heights Hotel</h3>
          <p className="mb-4">Elevating your dining experience with technology and exceptional service.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Reservations</a></li>
            <li><a href="#" className="hover:text-white">Orders</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>123 Luxury Lane, Cityville</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: dining@azureheights.com</li>
            <li>Hours: 6:00 AM - 11:00 PM</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to receive updates on special offers and events.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-indigo-600 px-4 rounded-r-md hover:bg-indigo-500 transition text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
        <p>&copy; 2025 Azure Heights Hotel. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;