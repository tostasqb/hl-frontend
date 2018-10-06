import React, { Component } from 'react';
import logo from './logo.jpg';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="hl-header">
        <img className="hl-logo" alt="logo" src={logo} />
        <nav>
          <ul>
            <li>Produtos</li>
            <li>Ambientes</li>
            <li>Sobre nós</li>
            <li>Contactos</li>
            <li><i className="icon-search"></i></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
