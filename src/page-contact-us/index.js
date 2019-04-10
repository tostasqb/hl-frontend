import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      contactUs: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'pieces';
    axios.get(endpoint, {
      params: {
        piece: 'contact-us'
      }
    }).then(res => {
      this.setState({ 
        isLoaded: true, 
        contactUs: res.data
      })
    }).catch(error => {
      this.setState({ 
        isLoaded: true, 
        error
      })
    });
  }

  render() {
    const { error, isLoaded, contactUs } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let html = contactUs[0] == null ? '' : contactUs[0].value;
      
      return (
        <React.Fragment>
          <div className="page-title">
            <div className="wrapper">
              <h1>Contactos</h1>
              <h2>Fale connosco, NÓS ajudamos</h2>
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

export default ContactUs;
