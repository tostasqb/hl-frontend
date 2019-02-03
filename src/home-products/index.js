import React, { Component } from 'react';
import './main.scss';

class HomeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'products';

    fetch(endpoint)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderProduct(product) {
    return(
      <li key={`product-${product.id}`}>
        {product.title}
      </li>
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
            <div>
              {products.map(product => (
                this.renderProduct(product)
              ))}
            </div>

            <div className="hl-action">
              <a href="#" className="hl-button">Ver produtos</a>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default HomeProducts;
