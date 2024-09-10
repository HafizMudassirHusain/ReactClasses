import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import ProductListing from './pages/ProductListing';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import AuthPage from './pages/auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
   
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<LoginPage />} />

        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
   
    </BrowserRouter>
  );
};

export default App;
