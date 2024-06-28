import React, {useState} from 'react';
import data from './storeData.json';

const Allproducts = {
  all: [...data.Guitars["Electric-Guitars"], 
        ...data.Guitars["Acoustic-Guitars"], 
        ...data.Guitars["Bass-Guitars"], 
        ...data.Drums, 
        ...data.Synthesizers],
  electric: data.Guitars["Electric-Guitars"],
  acoustic: data.Guitars["Acoustic-Guitars"],
  bass: data.Guitars["Bass-Guitars"],
  drums: data.Drums,
  synths: data.Synthesizers
};

function ProductList(){

  const [category, setCategory] = useState('all');
  const products = Allproducts[category];

  const[currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const btnPagination = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(products.length / productsPerPage)) return;
    setCurrentPage(pageNumber);
  };

  const btnCategorySelect = (newCategory) => {
    setCategory(newCategory.target.value);
    setCurrentPage(1); 
  };

  return (
    <>


      <select className="category-select" onChange={btnCategorySelect}>
        <option value='all'>All</option>
        <option value='electric'>Electric Guitars</option>
        <option value='acoustic'>Acoustic Guitars</option>
        <option value='bass'>Bass Guitars</option>
        <option value='drums'>Drums</option>
        <option value='synths'>Synthesizers</option>
      </select>

      <div className="product-list">
        {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.photo} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => btnPagination(currentPage - 1)}>{"<"}
        </button>
        <button
          onClick={() => btnPagination(currentPage + 1)}>{">"}
        </button>
      </div>
    </>
  );
};

export default ProductList;