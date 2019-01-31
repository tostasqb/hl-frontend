import React, { Component } from 'react';
import './main.scss';

class Footer extends Component {
  render() {
    return (
      <section className="hl-footer">
        <div className="container">
          <ul className="">
            <li>Facebook</li>
            <li>Contactos</li>
            <li>Termos e Condições</li>
          </ul>

          <span className="hl-copyright">Todos os direitos reservados © 2018 High Line</span>
        </div>
      </section>
    );
  }
}

export default Footer;
