import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// import img_main from './homepage.jpg';
import './main.scss';

class HomeHero extends Component {
  render() {
    return (
      <section className="hl-main hero is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Decore a sua casa com gosto
            </h1>
            <h2 className="subtitle">
              fale connosco, nós ajudamos
            </h2>
            <div className="hl-main__actions">
              <Link to="/contacts" className="hl-main__primary">Contacte-nos</Link>
              <span>ou</span>
              <Link to="/products" className="hl-main__secondary">Ver produtos</Link>
            </div>
            <h3>Exclusivo a Profissionais</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeHero;
