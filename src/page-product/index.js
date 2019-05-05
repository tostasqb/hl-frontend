import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';
import Loading from '../common/loading';

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
          <div key={image.id}>
            <img key={image.id} alt={image.filename} src={image.url} />
            <div className="hl-color">{image.filename}</div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    const { error, isLoaded, product } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />
    } else {

      let mail_to = {
        to: 'geral@highline.com.pt',
        subject: 'Pedir informação sobre ' + product.title,
        body: "Gostaria de obter mais informação sobre o produto que vi neste link:%0D%0A" + window.location.href
      }

      let info_link = ('mailto:' + mail_to.to + '?subject=' + mail_to.subject + '&body=' + mail_to.body);

      return (
        <React.Fragment>
          <div className="hl-product-wrapper container">
            {this.renderImages()}
            <div className="hl-product-description-wrapper">
              <h1>{product.title}</h1>
              <div className="hl-product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
              <a rel="noopener noreferrer" target="_blank" className="hl-ask-for-info" href={info_link}>Pedir + Informação</a>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Product;
