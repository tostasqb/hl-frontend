import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, object } from 'prop-types';
import './main.scss';

class ProductGrid extends Component {
  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      // eslint-disable-next-line no-useless-escape
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      // eslint-disable-next-line no-useless-escape
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  renderProduct(product) {
    const imageStyle = {
      backgroundImage: `url(${product.image})`
    }

    return(
      <Link to={`/product/${product.id}/${this.slugify(product.title)}`} className="hl-column" key={`product-${product.id}`}>
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
      </Link>
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
