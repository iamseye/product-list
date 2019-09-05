import React, { Component } from 'react';
import ProductCard from './productCard.js';
import '../styles/listContent.scss';
import ProductsData from '../products-data.js';

class ListContent extends Component {
  render() {
    return (
      <div className="listContent">
        <div className="listContent__searchBar">
          <div> search filter </div>
        </div>
        <div className="productCards">
          { ProductsData.products.map((item, i) => (
            <ProductCard
              key={i}
              title={item.title}
              type={item.type}
              image={`https:${item.images[0].small}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListContent;
