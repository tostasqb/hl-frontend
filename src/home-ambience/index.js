import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

class HomeAmbience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ambiences: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'ambiences';

    axios.get(endpoint)
      .then(res => {
        this.setState({ 
          isLoaded: true, 
          ambiences: res.data
        })
      }).catch(error => {
        this.setState({ 
          isLoaded: true, 
          error
        })
      });
  }

  renderAmbience(ambience) {
    const imageStyle = {
      backgroundImage: `url(https://placeimg.com/640/480/nature)`
    }

    return(
      <div className="column is-one-quarter-desktop" key={`ambience-${ambience.id}`}>
        <div className="hl-ambience">
          <div className="hl-ambience-image" style={imageStyle}></div>
        </div>
      </div>
    )
  }

  render() {
    const { error, isLoaded, ambiences } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="hl-home-ambience">
          <div className="container">
            <header className="hl-section-header">
              <h3 className="hl-title">Ambientes</h3>
              <h4 className="hl-subtitle">Porque é mais fácil ver as coisas num contexto</h4>
            </header>

            <div className="columns">
              {ambiences.map(ambience => (
                this.renderAmbience(ambience)
              ))}
            </div>

            <div className="hl-action">
              <Link to="/ambiences" className="hl-button">Ver ambientes</Link>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default HomeAmbience;
