import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Our Store</Link>
        <div>
          <Link to="/products" className="mx-4 hover:underline">Products</Link>
          <Link to="/checkout" className="mx-4 hover:underline">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
