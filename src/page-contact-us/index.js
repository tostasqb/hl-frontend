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
        piece: ['contact-us', 'lisboa', 'espinho']
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

  renderForm() {
    return(
      <div>
        <iframe src="https://www.powr.io/plugins/contact-form/view/19410018" 
        width="100%;"
        height="544" 
        frameBorder="0"></iframe>
      </div>
    )
  }

  renderMap() {
    return (
      <div className="hl-wrapper-splitter">
        <div className="hl-split">
          <iframe width="100%" height="500" id="gmap_canvas"
            src="https://maps.google.com/maps?q=H.L.%20-%20High%20Line-Home%20Decoration%2C%20Lda%2C%20Rua%20Marechal%20Gomes%20da%20Costa%2C%20Lote%202%20Quinta%20das%20Comendadeiras%2C%20Loja%206%2C%201685-901%20Fam%C3%B5es&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"> 
          </iframe>
          <div className="container gray" dangerouslySetInnerHTML={{ __html: this.state.contactUs['lisboa'] }} />
        </div>

        <div className="hl-split">
          <iframe width="100%" height="500" id="gmap_canvas2" 
            src="https://maps.google.com/maps?q=Rua%20de%20Castro%20de%20Ovil%20197%2C%204500-529%20Espinho&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0">
          </iframe>
          <div className="container gray" dangerouslySetInnerHTML={{ __html: this.state.contactUs['espinho'] }} />
        </div>
      </div>
    )
  }

  render() {
    const { error, isLoaded, contactUs } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="page-title">
            <div className="wrapper">
              <h1>Contactos</h1>
              <h2>Fale connosco, Nós ajudamos</h2>
            </div>
          </div>

          <div className="gray-wrapper">
            <div className="container gray">
              <div dangerouslySetInnerHTML={{ __html: contactUs['contact-us'] }} />
              {this.renderForm()}
            </div>
            <div className="container">
              {this.renderMap()}
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default ContactUs;
