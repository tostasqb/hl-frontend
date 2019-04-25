import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import ProductTags from './tags'
import ProductGrid from './product-grid'
import Loading from '../common/loading';


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      pagination: {},
      filter: {}
    };

    this.handleTagChange = this.handleTagChange.bind(this);
  }

  handleTagChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let filter = Object.assign({}, this.state.filter);    //creating copy of object
    filter[name] = value;

    this.setState({ filter: filter });
    this.getData(filter);
  }

  getData(filter = {}) {
    let endpoint = process.env.REACT_APP_API_URL + 'products';

    axios.get(endpoint, {
      params: {
        per_page: 30,
        page: 1,
        filter: filter
      }
    }).then(res => {
      this.setState({ 
        isLoaded: true, 
        products: res.data.data,
        pagination: res.data.pagination
      })
    }).catch(error => {
      this.setState({ 
        isLoaded: true, 
        error
      })
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { error, isLoaded, products } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          <div className="hl-page-title">
            <div className="wrapper">
              <h1>Os nossos produtos</h1>
              <h2>Todas as nossas colecções num sítio só</h2>
            </div>
          </div>

          <div className="hl-gray-wrapper">
            <div className="container gray">
              <div className="left">
                <ProductTags onTagChange={this.handleTagChange} />
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
