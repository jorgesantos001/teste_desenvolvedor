import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">Loja Virtual</div>
    <nav>
      <ul>
        <li><Link to="/category1">Categoria 1</Link></li>
        <li><Link to="/category2">Categoria 2</Link></li>
        <li><Link to="/category3">Categoria 3</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
