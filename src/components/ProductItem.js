import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-2">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-600">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
