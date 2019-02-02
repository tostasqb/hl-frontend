import React, { Component } from 'react';
import './main.scss';

class Footer extends Component {
  render() {
    var currYear = new Date().getFullYear();

    return (
      <footer className="hl-footer">
        <div className="container">
          <ul className="">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Contactos</a></li>
            <li><a href="#">Termos e Condições</a></li>
          </ul>
          
          <span className="hl-copyright">
            Todos os direitos reservados © {currYear} High Line
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
