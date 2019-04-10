import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      aboutUs: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'pieces';
    axios.get(endpoint, {
      params: {
        piece: 'about-us'
      }
    }).then(res => {
      this.setState({ 
        isLoaded: true, 
        aboutUs: res.data
      })
    }).catch(error => {
      this.setState({ 
        isLoaded: true, 
        error
      })
    });
  }

  render() {
    const { error, isLoaded, aboutUs } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let html = aboutUs[0] == null ? '' : aboutUs[0].value;
      return (
        <React.Fragment>
          <div className="page-title">
            <div className="wrapper">
              <h1>Sobre nós</h1>
              <h2>Decoração exclusiva a profissionais</h2>
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

export default AboutUs;
