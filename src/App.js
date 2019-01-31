import React, { Component } from 'react';
import Header from './header';
import HomeMain from './home-main';
import HomeProducts from './home-products';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeMain />
        <HomeProducts />
        <Footer />
      </div>
    );
  }
}

export default App;
