import React, { Component } from 'react';
// import img_main from './homepage.jpg';
import './main.scss';

class HomeMain extends Component {
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
              <a href="#" className="hl-main__primary">Contacte-nos</a> 
              <span>ou</span>
              <a href="#" className="hl-main__secondary">Ver produtos</a>
            </div>
            <h3>Exclusivo a Profissionais</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeMain;
