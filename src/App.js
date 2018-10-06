import React, { Component } from 'react';
import Header from './header';
import HomeMain from './home-main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeMain />
      </div>
    );
  }
}

export default App;
