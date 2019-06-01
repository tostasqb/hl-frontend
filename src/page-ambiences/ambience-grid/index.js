import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import LazyLoad from 'react-lazy-load';
import './main.scss';

class AmbienceGrid extends Component {
  renderAmbience(ambience) {
    return(
      <LazyLoad key={`ambience-${ambience.id}`} height={200}>
        <img alt={`ambiente ${ambience.id}`} className="hl-ambience-image" src={ambience.image} />
      </LazyLoad>
    )
  }

  render() {
    return (
      <section className="hl-grid-ambiences">
        <div className="hl-columns">
          {this.props.ambiences.map(ambience => (
            this.renderAmbience(ambience)
          ))}
        </div>
      </section>
    );
  }
}

AmbienceGrid.propTypes = {
  ambiences: arrayOf(object)
};

AmbienceGrid.defaultProps = {
  ambiences: []
};

export default AmbienceGrid;
