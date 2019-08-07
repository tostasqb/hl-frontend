import React, { Component } from 'react';
import './main.scss';
import axios from 'axios';

import Loading from '../common/loading';

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24882.982611625113!2d-9.216576595032226!3d38.778086652871465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd835b59cff1%3A0xa90b94b4ff52217!2sH.L.+-+High+Line-Home+Decoration%2C+Lda!5e0!3m2!1spt-PT!2spt!4v1565164033739!5m2!1spt-PT!2spt"
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
      return <Loading />
    } else {
      return (
        <React.Fragment>
          <div className="hl-page-title">
            <div className="wrapper">
              <h1>Contactos</h1>
              <h2>Fale connosco, Nós ajudamos</h2>
            </div>
          </div>

          <div className="hl-gray-wrapper">
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
