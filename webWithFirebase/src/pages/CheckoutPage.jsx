import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CheckoutPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [orderSummary, setOrderSummary] = useState(null);

  const onSubmit = (data) => {
    // Simulate form submission and order summary
    setOrderSummary({
      name: data.name,
      address: data.address,
      paymentMethod: data.paymentMethod,
      items: [
        // Replace with actual cart items
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 39.99 },
      ],
    });
  };

  return (
    <div className="container mx-auto p-4">
      {orderSummary ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
            <p><strong>Name:</strong> {orderSummary.name}</p>
            <p><strong>Address:</strong> {orderSummary.address}</p>
            <p><strong>Payment Method:</strong> {orderSummary.paymentMethod}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Order Items</h2>
            <ul>
              {orderSummary.items.map(item => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">
              Total: ${orderSummary.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Address</label>
            <textarea
              {...register('address', { required: 'Address is required' })}
              className="w-full p-2 border rounded"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Payment Method</label>
            <select
              {...register('paymentMethod', { required: 'Payment method is required' })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
