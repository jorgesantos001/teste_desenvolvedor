// src/components/NewArrivalsSection.js
import React from 'react';

const NewArrivalsSection = () => {
  return (
    <div className="mt-12 p-6 bg-gray-200 rounded-lg shadow-lg mx-auto w-4/5">
      <h2 className="text-3xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-end items-center min-h-[250px]">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-xl font-bold">$150.0</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="/more-products"
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
        >
          View More
        </a>
      </div>
      <div className="mt-12 flex flex-col md:flex-row md:justify-around items-center space-y-6 md:space-y-0">
        {[
          { title: 'Secured Payments' },
          { title: 'Free Shipping and Returns' },
          { title: '24/7 Customer Service' },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
