import React, { Component } from 'react';
import ProductCard from '../components/productCard.js';
import SearchBar from '../components/searchBar.js';
import SelectFilter from '../components/selectFilter.js';
import '../styles/listContent.scss';
import ProductsData from '../products-data.js';
import { withRouter } from 'react-router-dom';

class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductsData.products,
      filteredProducts: ProductsData.products,
      searchText: '',
      selectFilter: [],
      productsTypes: [
        'tights',
        'leggings',
        'socks'
      ]
    };
  }

  searchText = (text) => {
    this.filterResult(text, this.state.selectFilter);
    this.setState({ searchText: text });
  }

  selectFilter = (type) => {
    this.filterResult(this.state.searchText, type);
    this.setState({ selectFilter: type });
  }

  filterResult(searchText, selectType) {
    const { products } = this.state;

    const filteredProducts = products.filter(item => {
      if (searchText !== '' && selectType.length > 0) {
        return (item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 &&
          selectType.includes(item.type.toLowerCase())) ;
      }

      if (searchText !== '') {
        return item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
      }

      if (selectType.length > 0) {
        return selectType.includes(item.type.toLowerCase());
      }

      return item;
    });

    this.setState({ filteredProducts: filteredProducts});
  }

  clickCard = (id) => {
    console.log(id);
    this.props.history.push(`/review/${id}`);
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
              id={item.id}
              title={item.title}
              type={item.type}
              image={`https:${item.images[0].small}`}
              toReview={this.clickCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ListContent);
