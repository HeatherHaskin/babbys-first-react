import React, { Component } from 'react';
import HeaderContainer from './Header';
import './App.css';

class App extends Component {
  render() {
    let navbaritems = [
      "Home",
      "About Me",
      "Portfolio",
      "Blog",
      "Archive",
    ]
    return (
      <div className="App">
        <HeaderContainer num={navbaritems} />

      </div>
    );
  }
}

export default App;
