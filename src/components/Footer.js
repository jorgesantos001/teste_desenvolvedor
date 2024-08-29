import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col mb-6 md:mb-0">
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/store" className="hover:underline">Store</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/pos" className="hover:underline">Point of Sale</a></li>
            </ul>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <p>810, Bay Area, San Francisco, CA 94158</p>
            <p>Email: <a href="mailto:info@NewBrand-shop.com" className="hover:underline">info@NewBrand-shop.com</a></p>
            <p>Call: <a href="tel:1-100-000-0000" className="hover:underline">1-100-000-0000</a></p>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <ul className="space-y-2">
              <li><a href="/shipping-returns" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com" className="hover:underline">Twitter</a>
              <a href="https://facebook.com" className="hover:underline">Facebook</a>
              <a href="https://instagram.com" className="hover:underline">Instagram</a>
            </div>
            <p>Receive all our news and updates</p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 rounded-l-lg w-full md:w-2/3 mb-2 md:mb-0"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black p-2 rounded-r-lg hover:bg-yellow-400 transition w-full md:w-auto"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
