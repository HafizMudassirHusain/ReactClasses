import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {product ? (
        <div className="flex flex-col md:flex-row">
          <img src={product.image} alt={product.title} className="w-full md:w-1/2 object-cover rounded-lg" />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
