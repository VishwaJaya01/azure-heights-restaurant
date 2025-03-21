// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OrderProcess from '../components/OrderProcess';
import FeaturedMenu from '../components/FeaturedMenu';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-20"> {/* Adds padding to prevent content from hiding behind the fixed header */}
        <HeroSection />
        <OrderProcess />
        <FeaturedMenu />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
