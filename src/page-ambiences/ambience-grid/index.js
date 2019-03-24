import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import './main.scss';

class AmbienceGrid extends Component {
  renderAmbience(ambience) {
    const imageStyle = {
      backgroundImage: `url(${ambience.image})`
    }

    return(
      <a href="#" className="hl-column" key={`ambience-${ambience.id}`}>
        <div className="hl-ambience">
          <div className="hl-ambience-image" style={imageStyle}></div>
        </div>
      </a>
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
