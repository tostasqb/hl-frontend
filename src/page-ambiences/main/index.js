import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import AmbienceGrid from '../ambience-grid'


class AmbiencesMain extends Component {
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

    axios.get(endpoint, {
      params: {
        per_page: 30,
        page: 1
      }
    }).then(res => {
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

  render() {
    const { error, isLoaded, ambiences } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <AmbienceGrid ambiences={ambiences} />
        </div>
      )
    }
  }
}

export default AmbiencesMain;
