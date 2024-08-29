import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="flex flex-col space-y-4 mb-8 md:mb-0">
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/store" className="hover:underline">Store</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/pos" className="hover:underline">Point of Sale</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 mb-8 md:mb-0">
            <p>810, Bay Area, San Francisco, CA 94158</p>
            <p>Email: <a href="mailto:info@NewBrand-shop.com" className="hover:underline">info@NewBrand-shop.com</a></p>
            <p>Call: <a href="tel:1-100-000-0000" className="hover:underline">1-100-000-0000</a></p>
          </div>

          <div className="flex flex-col space-y-4 mb-8 md:mb-0">
            <ul className="space-y-2">
              <li><a href="/shipping-returns" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 mb-8 md:mb-0">
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter className="text-2xl" /></a>
              <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook className="text-2xl" /></a>
              <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram className="text-2xl" /></a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 mb-8 md:mb-0">
            <p>Receive all our news and updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 rounded-l-lg w-2/3"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black p-2 rounded-r-lg hover:bg-yellow-400 transition"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 pt-4 mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} NewBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
