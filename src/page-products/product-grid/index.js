import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import './main.scss';

class ProductGrid extends Component {
  renderProduct(product) {
    const imageStyle = {
      backgroundImage: `url(${product.image})`
    }

    return(
      <a href="#" className="hl-column" key={`product-${product.id}`}>
        <div className="hl-product">
          <div className="hl-product-image" style={imageStyle}></div>
          <div className="hl-product-top">
            <span className="hl-product-title">{product.title}</span>
            <span className="hl-product-menu">{product.menu}</span>
          </div>
          <div className="hl-product-description">
            {product.description}
          </div>
        </div>
      </a>
    )
  }

  render() {
    return (
      <section className="hl-grid-products">
        <div className="hl-columns">
          {this.props.products.map(product => (
            this.renderProduct(product)
          ))}
        </div>
      </section>
    );
  }
}

ProductGrid.propTypes = {
  products: arrayOf(object)
};

ProductGrid.defaultProps = {
  products: []
};

export default ProductGrid;
