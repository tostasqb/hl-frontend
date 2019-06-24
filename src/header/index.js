import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.jpg';
import './header.scss';

import $ from 'jquery';
window.jQuery = window.$ = $;

$(window).scroll(function(){
  $('.hl-header').toggleClass('mini', $(document).scrollTop() > 0);
});

class Header extends Component {
  render() {
    return (
      <nav className="hl-header navbar is-fixed-top is-transparent">
        <div className="container">
          <div className="navbar-brand animated pulse">
            <Link to="/" className="navbar-item" data-anchor="page-top" data-active="false">
              <img src={logo} className="hl-logo" alt="logo HighLine" />
              <div className="logo-text-wrapper">
                <span className="logo-text-name">High Line</span>
                <span className="logo-text-line">home decoration</span>
              </div>
            </Link>
            <span className="navbar-burger burger animated pulse" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/products" className="navbar-item" data-anchor="products">
                produtos
              </Link>
              <Link to="/ambiences" className="navbar-item" data-anchor="ambiences">
                ambientes
              </Link>
              <a className="navbar-item" href="https://walldesigner.rasch.de/gallery.do" rel="noopener noreferrer" target="_blank">rasch</a>
              <Link to="/about" className="navbar-item" data-anchor="about">
                sobre nós
              </Link>
              <Link to="/contacts" className="navbar-item" data-anchor="contact">
                contactos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  componentWillMount() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  }
}

export default Header;
