import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">N E W B R A N D</h1>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <nav className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#products" className="hover:underline">Store</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#pos" className="hover:underline">Point of Sale</a></li>
            </ul>
          </nav>
          <div className="flex items-center mt-4 md:mt-0 md:ml-6">
            <FaShoppingCart className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
