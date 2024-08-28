import React from 'react';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Minha Loja</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#products" className="hover:underline">Produtos</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;