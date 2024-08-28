import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <h1>Bem-vindo à Loja!</h1>
        <p>Navegue por nossa loja e aproveite as ofertas incríveis que preparamos para você!</p>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;