import React from 'react';

function Features() {
  const features = [
    { title: 'Feature One', description: 'Description for feature one.' },
    { title: 'Feature Two', description: 'Description for feature two.' },
    { title: 'Feature Three', description: 'Description for feature three.' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Our Features</h3>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
