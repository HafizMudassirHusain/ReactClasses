import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-xl mb-8">This is a simple hero section to grab your attention.</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
