import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

import HomeHero from './page-home/hero';
import HomeProducts from './page-home/products';
import HomeQuote from './page-home/quote';
import HomeAmbience from './page-home/ambience';

import ProductList from './page-product-list';
import Ambiences from './page-ambiences';

import AboutUs from './page-about-us';
import ContactUs from './page-contact-us';
import TermsConditions from './page-terms';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
            <React.Fragment>
              <Route exact path="/" component={LinkHome} />
              <Route exact path="/products" component={LinkProducts} />
              <Route exact path="/ambiences" component={LinkAmbiences} />
              <Route exact path="/about" component={LinkAbout} />
              <Route exact path="/contacts" component={LinkContactUs} />
              <Route exact path="/terms" component={LinkTerms} />
            </React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

const LinkHome = () => (
  <div className="hl-page-home">
    <HomeHero />
    <HomeProducts />
    <HomeQuote />
    <HomeAmbience />
  </div>
)

const LinkProducts = () => (
  <div className="hl-page-products">
    <ProductList />    
  </div>
)

const LinkAmbiences = () => (
  <div className="hl-page-ambiences">
    <Ambiences />    
  </div>
)

const LinkAbout = () => (
  <div className="hl-page-about-us">
    <AboutUs />
  </div>
)

const LinkContactUs = () => (
  <div className="hl-page-contact-us">
    <ContactUs />
  </div>
)

const LinkTerms = () => (
  <div className="hl-page-terms">
    <TermsConditions />
  </div>
)

export default App;
