import { Avatar, Badge, Image, Modal, Button } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import navlogo from '../assets/navLogo.png';
import Carts from '../pages/Cart'; // Import Carts component

export default function Header() {
  const isLogin = false;
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State for cart modal
  const navigate = useNavigate(); // For navigation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen); // Toggle modal
  };

  // Handle "Go to Cart" button click
  const handleGoToCart = () => {
    setIsCartModalOpen(false); // Close modal
    navigate("/cart"); // Navigate to Cart.js route
  };

  // Handle "Comparison" button click
  const handleComparison = () => {
    // Add your comparison logic here
    // You can either open another modal or navigate to a comparison page
    console.log("Comparison button clicked");
    // Example: navigate("/comparison");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={'/'} className="flex title-font text-2xl font-bold items-center text-gray-900 mb-4 md:mb-0">
              <Image width={40} height={40} className="rounded-full" preview={false} src={navlogo} />
              <span className="ml-3 text-xl">ECOM</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to={'/'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to={'/products'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </Link>
              <Link to={'/orders'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Orders
              </Link>
              <Link href="/deals" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Deals
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* User and Cart Icons */}
          <div className="hidden md:flex items-center">
            {isLogin ? (
              <button className="m-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
              </button>
            ) : (
              <div className="flex items-center">
                <button className="text-gray-600 hover:text-gray-900 p-2">
                  <User className="h-6 w-6" />
                </button>

                {/* Cart button that opens modal */}
                <button onClick={toggleCartModal} className="text-gray-600 hover:text-gray-900 p-2 ml-4 relative">
                  <Badge count={cartItems.length}>
                    <ShoppingCart className="h-6 w-6" style={{ fontSize: 30, color: "orange" }} />
                  </Badge>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={'/'} className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to={'/products'} className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Products
            </Link>
            <Link to={'/orders'} className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Orders
            </Link>
            <Link href="/deals" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Deals
            </Link>
          </div>
          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="px-4 py-3 ">
            {isLogin ? (
              <button className="m-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
              </button>
            ) : (
              <div className="px-4 flex justify-between">
                <button className="text-gray-600 hover:text-gray-900 p-2 flex items-center">
                  <User className="h-6 w-6 mr-2" />
                  <span>Account</span>
                </button>
                {/* Cart button for mobile */}
                <button onClick={toggleCartModal} className="text-gray-600 hover:text-gray-900 p-2 flex items-center relative">
                  <Badge count={cartItems.length}>
                    <ShoppingCart className="h-6 w-6 mr-2" style={{ fontSize: 30, color: "orange" }} />
                  </Badge>
                  <span>Cart</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart Modal */}
      <Modal
        title="Your Cart"
        open={isCartModalOpen}
        onOk={toggleCartModal}
        onCancel={toggleCartModal}
        footer={(
          <>
            <Button type="primary" onClick={handleGoToCart}>
              Go to Cart
            </Button>
            <Button type="default" onClick={handleComparison}>
              Comparison
            </Button>
          </>
        )}
        width={800}
      >
        <Carts isModal={true} />
      </Modal>
    </nav>
  );
}
