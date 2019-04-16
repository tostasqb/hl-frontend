import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './main.scss';

class Footer extends Component {
  render() {
    var currYear = new Date().getFullYear();

    return (
      <footer className="hl-footer">
        <div className="container">
          <ul className="">
            <li><a href="https://web.facebook.com/highlinehomedecoration/" target="_blank">Facebook</a></li>
            <li><Link to="/contacts">Contactos</Link></li>
            <li><Link to="/terms">Termos e Condições</Link></li>
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
