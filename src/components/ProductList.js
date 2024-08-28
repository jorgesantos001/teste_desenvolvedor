import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakeapi.platzi.com/products?_page=${currentPage}&_limit=5&_sort=${sortBy}`);
        setProducts(response.data);
        setTotalPages(10);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [currentPage, sortBy]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <select onChange={handleSortChange} value={sortBy} className="p-2 border border-gray-300 rounded">
          <option value="name">Nome</option>
          <option value="price">Preço</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1} className="bg-gray-800 text-white p-2 rounded">Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages} className="bg-gray-800 text-white p-2 rounded">Próximo</button>
      </div>
    </div>
  );
};

export default ProductList;