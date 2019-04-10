import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

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
        piece: 'terms'
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
      return <div>Loading...</div>;
    } else {
      let html = terms[0] == null ? '' : terms[0].value;
      return (
        <React.Fragment>
          <div className="page-title">
            <div className="wrapper">
              <h1>Termos e condições</h1>
              <h2>Termos da utilização do website</h2>
            </div>
          </div>

          <div className="gray-wrapper">
            <div className="container gray" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Terms;
