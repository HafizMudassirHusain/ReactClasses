
import React from 'react';

function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome to Our Service
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Join us to access exclusive features and stay updated with the latest news.
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;




