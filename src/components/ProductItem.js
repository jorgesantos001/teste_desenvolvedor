import React from 'react';

const ProductItem = ({ product }) => (
  <div>
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>R${product.price}</p>
  </div>
);

export default ProductItem;