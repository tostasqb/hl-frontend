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
      <div>
        <Header />
        <HomeMain />
        <HomeProducts />
        <Quote />
        <HomeAmbience />
        <Footer />
      </div>
    );
  }
}

export default App;
