import React, { Component } from 'react';
import { string } from 'prop-types';

import './main.scss';

export default class Quote extends Component {
  render() {
    return (
      <section className="hl-quote">
        <div className="container">
          <div className="wrapper">
            <h3>{this.props.title}</h3>
            <h4>{this.props.subtitle}</h4>
          </div>
        </div>
      </section>
    );
  }
}

Quote.propTypes = {
  title: string,
  subtitle: string
}

Quote.defaultProps = {
  title: 'Novos conceitos de decoração, tecidos de qualidade superior, elegantes e fáceis de cuidar',
  subtitle: 'Coleções criadas com Design e sofisticação'
}

