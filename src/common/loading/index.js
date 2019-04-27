import React, { Component } from 'react';

import './styles.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="hl-loading">
        <div className="hl-loader"></div>
      </div>
    );
  }
}
