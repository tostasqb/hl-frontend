import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

import HomeHero from './page-home/hero';
import HomeProducts from './page-home/products';
import HomeQuote from './page-home/quote';
import HomeAmbience from './page-home/ambience';

import ProductsMain from './page-products/main'
import AmbiencesMain from './page-ambiences/main'

import AboutUs from './page-about-us'
import ContactUs from './page-contact-us'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
            <React.Fragment>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/ambiences" component={Ambiences} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contact} />
            </React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

const Home = () => (
  <div className="hl-page-home">
    <HomeHero />
    <HomeProducts />
    <HomeQuote />
    <HomeAmbience />
  </div>
)

const Products = () => (
  <div className="hl-page-products">
    <ProductsMain />    
  </div>
)

const Ambiences = () => (
  <div className="hl-page-ambiences">
    <AmbiencesMain />    
  </div>
)

const About = () => (
  <div className="hl-page-about-us">
    <AboutUs />
  </div>
)

const Contact = () => (
  <div className="hl-page-contact-us">
    <ContactUs />
  </div>
)

export default App;
