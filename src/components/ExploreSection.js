import React from 'react';

const ExploreSection = () => {
  return (
    <div className="mt-12 p-6 bg-gray-200 rounded-lg shadow-lg mx-auto w-4/5">
      <div className="flex flex-col items-center space-y-8">
        <div className="flex space-x-4 w-full max-w-screen-lg justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center w-1/2 min-h-[400px]">
            <h3 className="text-lg font-semibold">Our Story</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center w-1/2 min-h-[400px]">
            <h3 className="text-lg font-semibold">Our Blog</h3>
          </div>
        </div>
        <div className="flex space-x-4 w-full max-w-screen-lg justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center w-1/3 min-h-[200px]">
            <h3 className="text-lg font-semibold">Accessories</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center w-1/3 min-h-[200px]">
            <h3 className="text-lg font-semibold">Shoes</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center w-1/3 min-h-[200px]">
            <h3 className="text-lg font-semibold">Jackets</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
