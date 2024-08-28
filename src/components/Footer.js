import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Minha Loja</p>
        <div>
          <a href="#facebook" className="mx-2 hover:underline">Facebook</a>
          <a href="#twitter" className="mx-2 hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
