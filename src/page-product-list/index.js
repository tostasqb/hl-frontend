import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import ProductTags from './tags'
import ProductGrid from './product-grid'


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    let endpoint = process.env.REACT_APP_API_URL + 'products';

    axios.get(endpoint, {
      params: {
        per_page: 30,
        page: 1
      }
    }).then(res => {
      this.setState({ 
        isLoaded: true, 
        products: res.data
      })
    }).catch(error => {
      this.setState({ 
        isLoaded: true, 
        error
      })
    });
  }

  render() {
    const { error, isLoaded, products } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="page-title">
            <div className="wrapper">
              <h1>Os nossos produtos</h1>
              <h2>Todas as nossas colecções num sítio só</h2>
            </div>
          </div>

          <div className="gray-wrapper">
            <div className="container gray">
              <div className="left">
                <ProductTags />
              </div>
              <div className="right">
                <ProductGrid products={products} />
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default ProductList;
