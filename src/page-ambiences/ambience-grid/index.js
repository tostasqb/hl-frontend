import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import './main.scss';

class AmbienceGrid extends Component {
  renderAmbience(ambience) {
    return(
      <img key={`ambience-${ambience.id}`} className="hl-ambience-image" src={ambience.image} />
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
