import React, { Component } from 'react';
import './main.scss';

export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hl-page-title">
            <div className="wrapper">
              <h2>404 Página não encontrada</h2>
            </div>
          </div>

          <div className="hl-gray-wrapper">
            <div className="container gray">
              <h3>Está perdido, não há nada aqui...</h3>
              <a href="/" alt="go to homepage" className="hl-page-not-found-link">Ir para a página de início</a>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

