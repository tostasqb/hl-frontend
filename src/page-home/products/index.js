import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

class HomeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'products';

    axios.get(endpoint)
      .then(res => {
        this.setState({ 
          isLoaded: true, 
          products: res.data
        })
      }).catch(error => {
        this.setState({ 
          isLoaded: true, 
          error
        })
      });
  }

  renderProduct(product) {
    const imageStyle = {
      backgroundImage: `url(${product.image})`
    }

    return(
      <Link to={`/product/${product.id}/${this.slugify(product.title)}`} className="column is-one-third-desktop" key={`product-${product.id}`}>
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
    const { error, isLoaded, products } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="hl-home-products">
          <div className="container">
            <header className="hl-section-header">
              <h3 className="hl-title">Produtos</h3>
              <h4 className="hl-subtitle">Criamos e escolhemos marcas de confiança</h4>
            </header>

            <div className="columns">
              {products.map(product => (
                this.renderProduct(product)
              ))}
            </div>

            <div className="hl-action">
              <Link to="/products" className="hl-button">Ver produtos</Link>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default HomeProducts;
