import React, {useState} from 'react';
import data from './storeData.json';
import {useSearchParams} from "react-router-dom";
import Modal from './Modal.jsx'

const Allproducts = {
  'all-products': [...data.Guitars["Electric-Guitars"], 
        ...data.Guitars["Acoustic-Guitars"], 
        ...data.Guitars["Bass-Guitars"], 
        ...data.Drums, 
        ...data.Synthesizers],
  'electric-guitars': data.Guitars["Electric-Guitars"],
  'acoustic-guitars': data.Guitars["Acoustic-Guitars"],
  'bass-guitars': data.Guitars["Bass-Guitars"],
  'drums': data.Drums,
  'synthesizers': data.Synthesizers
};

const productsPerPage = 10;

function ProductList(){

  const [modalActive, setModalActive] = useState(false);

  const [param, setParam] = useSearchParams();

  const[currentPage, setCurrentPage] = useState(1);

  const [searchItem, setSearchItem] = useState('');

  const btnPagination = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(products.length / productsPerPage)) return;
    setCurrentPage(pageNumber);
  };

  const btnCategorySelect = (e) => {
    setParam(`?category=${e.target.value}`);
    setCurrentPage(1); 
  };

  const Search = (search) => {
    setSearchItem(search.target.value);
    setCurrentPage(1);
  };

  const [selectedProduct, setSelectedProduct] = useState('');

  const products = Allproducts[param.get('category')].filter(product =>
    product.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div id='menu'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={Search}
          />
        </div>

        <select className="category-select" onChange={btnCategorySelect}>
          <option value='all-products'>All</option>
          <option value='electric-guitars'>Electric Guitars</option>
          <option value='acoustic-guitars'>Acoustic Guitars</option>
          <option value='bass-guitars'>Bass Guitars</option>
          <option value='drums'>Drums</option>
          <option value='synthesizers'>Synthesizers</option>
        </select>
      </div>
      
      <ul className="product-list">
        {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product) => (
          <li className="product-card" key={product.name} onClick={() => {
            setModalActive(true);
            setSelectedProduct(product);
          }}>
              <img src={product.photo} alt={product.name}/>
              <p>{product.name}</p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => btnPagination(currentPage - 1)}>{"<"}
        </button>
        <button
          onClick={() => btnPagination(currentPage + 1)}>{">"}
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} product={selectedProduct}/>
    </>
  );
};
export default ProductList;