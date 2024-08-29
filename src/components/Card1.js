import React from 'react';

const Card1 = () => {
  return (
    <div className="bg-gray-300 text-black p-6 md:p-8 rounded-lg shadow-lg mx-auto w-full md:w-4/5 mt-8 min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">New Clothing Collection</h1>
      <p className="text-lg md:text-xl mb-6 md:mb-8">Discover the latest trends and styles.</p>
      <a
        href="/shop"
        className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
      >
        Shop Now
      </a>
    </div>
  );
};

export default Card1;
