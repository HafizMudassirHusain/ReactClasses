import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Discover the best products at unbeatable prices. Explore our collection and find your next favorite item.</p>
        <Link to="/products" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Shop Now
        </Link>
      </header>
      
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for featured products */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Featured Product" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Product Name</h3>
              <p className="text-gray-600">Short description of the product goes here.</p>
              <p className="text-lg font-bold mt-2">$29.99</p>
            </div>
          </div>
          {/* Repeat above block for additional featured products */}
        </div>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p>We offer high-quality products that meet your needs and exceed expectations.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p>Get your orders delivered quickly and efficiently to your doorstep.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p>Our dedicated support team is here to help with any questions or concerns.</p>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <p className="text-sm">© 2024 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
