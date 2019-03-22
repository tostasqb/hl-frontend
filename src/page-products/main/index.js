import React, { Component } from 'react';
import './main.scss';

import ProductTags from '../tags'

class ProductsMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <ProductTags />
        </div>
        <div className="right">
        </div>
      </div>
    )
  }
}

export default ProductsMain;
