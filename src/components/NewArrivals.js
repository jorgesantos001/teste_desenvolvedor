import React from 'react';

const NewArrivals = () => {
  return (
    <div className="mt-12 p-6 bg-gray-200 rounded-lg shadow-lg mx-auto w-4/5">
      <h2 className="text-3xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="flex space-x-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-end w-1/3 min-h-[300px]">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Product Name</h3>
            <p className="text-xl font-bold">$150.00</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-end w-1/3 min-h-[300px]">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Product Name</h3>
            <p className="text-xl font-bold">$150.00</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-end w-1/3 min-h-[300px]">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Product Name</h3>
            <p className="text-xl font-bold">$150.00</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href="/more-products"
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default NewArrivals;
