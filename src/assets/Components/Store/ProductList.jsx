import React from 'react';
import data from './storeData.json';

const products = [data.Guitars["Electric-Guitars"], 
              data.Guitars["Acoustic-Guitars"], 
              data.Guitars["Bass-Guitars"], 
              data.Drums, data.Synthesizers]

const ProductList = () => {
  return (
    <div className="product-list">
      {products[4].map((product) => (
        <div className="product-card">
          <img src={product.photo} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;