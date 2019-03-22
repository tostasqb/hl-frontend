import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

class ProductTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tags: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'tags';

    axios.get(endpoint)
      .then(res => {
        this.setState({ 
          isLoaded: true, 
          tags: res.data
        })
      }).catch(error => {
        this.setState({ 
          isLoaded: true, 
          error
        })
      });
  }

  render() {
    const { error, isLoaded, tags } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="hl-products">
          <div className="container">

          </div>
        </section>
      );
    }
  }
}

export default ProductTags;
