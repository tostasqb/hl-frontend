import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import Loading from '../common/loading';
import AmbienceGrid from './ambience-grid'


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
      return <Loading />
    } else {
      return (
        <React.Fragment>
          <div className="hl-page-title">
            <div className="wrapper">
              <h1>Ambientes</h1>
              <h2>Um ambiente feito de pequenas coisas</h2>
            </div>
          </div>

          <div className="hl-gray-wrapper">
            <div className="container gray">
              <AmbienceGrid ambiences={ambiences} />
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default AmbiencesMain;
