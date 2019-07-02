import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import DefaultMetatags from './common/metatags';

import Header from './header';
import Footer from './footer';

import HomeHero from './page-home/hero';
import HomeProducts from './page-home/products';
import HomeQuote from './page-home/quote';
import HomeAmbience from './page-home/ambience';
import HomePartners from './page-home/partners';

import ProductList from './page-product-list';
import Product from './page-product';
import Ambiences from './page-ambiences';

import AboutUs from './page-about-us';
import ContactUs from './page-contact-us';
import Terms from './page-terms';
import NotFound from './page-not-found';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <a className="skip-link" href="#maincontent">Skip to main</a>
          <Header />
            <main id="maincontent">
              <React.Fragment>
                <Switch>
                  <Route exact path="/" component={LinkHome} />
                  <Route exact path="/products" component={LinkProducts} />
                  <Route exact path="/ambiences" component={LinkAmbiences} />
                  <Route exact path="/about" component={LinkAbout} />
                  <Route exact path="/contacts" component={LinkContactUs} />
                  <Route exact path="/terms" component={LinkTerms} />
                  <Route path="/product/:productid/:slug" component={LinkProduct} />
                  <Route component={NoMatch} />
                </Switch>
              </React.Fragment>
            </main>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

const LinkHome = () => (
  <div className="hl-page-home">
    <DefaultMetatags />
    <HomeHero />
    <HomeProducts />
    <HomeQuote />
    <HomeAmbience />
    <HomePartners />
  </div>
)

const LinkProducts = () => (
  <div className="hl-page-products">
    <DefaultMetatags />
    <ProductList />
  </div>
)

const LinkProduct = () => (
  <div className="hl-page-product">
    <Product />
  </div>
)

const LinkAmbiences = () => (
  <div className="hl-page-ambiences">
    <DefaultMetatags />
    <Ambiences />
  </div>
)

const LinkAbout = () => (
  <div className="hl-page-about-us">
    <DefaultMetatags />
    <AboutUs />
  </div>
)

const LinkContactUs = () => (
  <div className="hl-page-contact-us">
    <DefaultMetatags />
    <ContactUs />
  </div>
)

const LinkTerms = () => (
  <div className="hl-page-terms">
    <DefaultMetatags />
    <Terms />
  </div>
)

const NoMatch = ({ location }) => (
  <div className="hl-page-not-found">
    <NotFound location={location} />
  </div>
)

export default App;
