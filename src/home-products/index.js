import React, { Component } from 'react';
import './main.scss';

class HomeProducts extends Component {
  callApi() {
    let endpoint = process.env.REACT_APP_API_URL + 'products';
  }

  render() {
    return (
      <section className="hl-home-products">
        <div className="container">
          <header className="hl-section-header">
            <h3 className="hl-title">Produtos</h3>
            <h4 className="hl-subtitle">Criamos e escolhemos marcas de confiança</h4>
          </header>
          <div>
            {this.callApi()}
            aaa
          </div>

          <div className="hl-action">
            <a href="#" className="hl-button">Ver produtos</a>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeProducts;
