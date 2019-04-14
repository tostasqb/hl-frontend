import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'product';
    axios.get(endpoint, {
      params: {
        piece: 'contact-us'
      }
    }).then(res => {
      this.setState({ 
        isLoaded: true, 
        product: res.data
      })
    }).catch(error => {
      this.setState({ 
        isLoaded: true, 
        error
      })
    });
  }

  render() {
    const { error, isLoaded, product } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      
      return (
        <React.Fragment>
          <div className="page-title">
            <div className="wrapper">
              <h1>Detalhes</h1>
              <h2>Product Name</h2>
            </div>
          </div>

          <div className="gray-wrapper">
            <div className="container gray">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Product;
