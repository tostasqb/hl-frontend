import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import Loading from '../common/loading';

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      terms: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'pieces';
    axios.get(endpoint, {
      params: {
        piece: ['terms']
      }
    }).then(res => {
      this.setState({ 
        isLoaded: true, 
        terms: res.data
      })
    }).catch(error => {
      this.setState({ 
        isLoaded: true, 
        error
      })
    });
  }

  render() {
    const { error, isLoaded, terms } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <React.Fragment>
          <div className="hl-page-title">
            <div className="wrapper">
              <h1>Termos e condições</h1>
              <h2>Termos da utilização do website</h2>
            </div>
          </div>

          <div className="hl-gray-wrapper">
            <div className="container gray" dangerouslySetInnerHTML={{ __html: terms['terms'] }} />
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Terms;
