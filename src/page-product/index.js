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
        id: window.location.pathname.split('/')[2]
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

  renderImages() {
    return (
      <div className="hl-product-image">
        {/* <img src={this.state.product.image} /> */}
        
        {this.state.product.more_images.map(image => (
          <img key={image.id} src={image.url} />
        ))}
      </div>
    )
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
          <div className="hl-product-wrapper container">
            {this.renderImages()}
            <div className="hl-product-description-wrapper">
              <h1>{product.title}</h1>
              <div className="hl-product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
              <a className="hl-ask-for-info" href="mailto:geral@highline.com.pt">Pedir + Informação</a>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Product;
