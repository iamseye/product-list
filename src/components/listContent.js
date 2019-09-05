import React, { Component } from 'react';
import ProductCard from './productCard.js';
import SearchBar from './searchBar.js';
import SelectFilter from './selectFilter.js';
import '../styles/listContent.scss';
import ProductsData from '../products-data.js';

class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductsData.products,
      filteredProducts: ProductsData.products,
      searchText: '',
      productsTypes: [
        'tights',
        'basic',
        'socks'
      ]
    };
  }

  searchText = (text) => {
    const { products } = this.state;
    const filteredProducts = products.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1
    });

    this.setState({ filteredProducts: filteredProducts});
  }

  selectFilter = (type) => {
    const filteredProducts = this.state.products.filter(item => {
        return type.includes(item.type.toLowerCase());
    });

    this.setState({ filteredProducts: filteredProducts});
  }

  render() {
    return (
      <div className="listContent">
        <div className="listContent__searchBar">
          <SearchBar
            searchText={this.searchText}
          />
        </div>
        <div className="listContent__searchBar">
          <SelectFilter
            productsTypes={this.state.productsTypes}
            selectFilter={this.selectFilter}
          />
        </div>
        <div className="productCards">
          { this.state.filteredProducts.map((item, i) => (
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
