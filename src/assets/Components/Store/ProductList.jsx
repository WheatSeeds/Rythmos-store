import React from 'react';
import ProductCard from './ProductCard';
import data from './storeData.json';

const ProductList = () => {
  const electricGuitars = data.Guitars["Electric-Guitars"];
  const acousticGuitars = data.Guitars["Acoustic-Guitars"];
  const bassGuitars = data.Guitars["Bass-Guitars"];
  const drums = data.Drums;
  const synthesizer = data.Synthesizers;

  return (
    <div className="product-list">
      {drums.map((product) => (
        <div className="product-card">
          <img src={product.photo} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;