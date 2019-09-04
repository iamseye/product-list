import React, { Component } from 'react';
import '../styles/listContent.scss';

class ListContent extends Component {
  render() {
    return (
      <div className="listContent">
        <div className="listContent__searchBar">
          <div> search filter </div>
        </div>
        <div className="productCards">
          <div>products</div>
        </div>
      </div>
    );
  }
}

export default ListContent;
