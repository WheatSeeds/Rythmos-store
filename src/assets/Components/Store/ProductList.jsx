import React, {useState} from 'react';
import data from './storeData.json';

const products = [data.Guitars["Electric-Guitars"], 
              data.Guitars["Acoustic-Guitars"], 
              data.Guitars["Bass-Guitars"], 
              data.Drums, data.Synthesizers]


function ProductList(){
  const[currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const btnClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="product-list">
        {products[0].slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.photo} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => btnClick(currentPage - 1)}>prev
        </button>
        <button
          onClick={() => btnClick(currentPage + 1)}>next
        </button>
      </div>
    </>
  );
};

export default ProductList;