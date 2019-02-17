import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './header';
import HomeMain from './home-main';
import HomeProducts from './home-products';
import Footer from './footer';
import Quote from './quote';
import HomeAmbience from './home-ambience';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/ambiences" component={Ambiences} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/terms" component={Terms} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div className="hl-page-home">
    <HomeMain />
    <HomeProducts />
    <Quote />
    <HomeAmbience />
  </div>
)

const Products = () => (
  <div className="hl-page-products">

  </div>
)

const Ambiences = () => (
  <div className="hl-page-ambiences">
    Ambiences
  </div>
)

const About = () => (
  <div className="hl-page-about">
    About
  </div>
)

const Contact = () => (
  <div className="hl-page-contact">
    Contact
  </div>
)

const Terms = () => (
  <div className="hl-page-terms">
    Terms and Conditions
  </div>
)

export default App;
