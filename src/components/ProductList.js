import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import Pagination from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakeapi.platzi.com/products');
      setProducts(response.data);

      setTotalPages(Math.ceil(response.data.length / 5));
    };

    fetchProducts();
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) => 
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const productsToShow = products.slice((currentPage - 1) * 5, currentPage * 5);

  return (
    <div>
      <div>
        <button onClick={() => handleSort('asc')}>Ordenar por preço (Ascendente)</button>
        <button onClick={() => handleSort('desc')}>Ordenar por preço (Descendente)</button>
      </div>
      <div>
        {productsToShow.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
