import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Greetings extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div className="FinnProfile">
        <img src="http://s.gravatar.com/avatar/356bb2d17402e07f7086bcebbcdf15aa?s=120"
             alt="finn"/>
        <Greetings name="Finn" />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div class="Finns-Gone-Wild">
          <Profile /> <Profile /> <Profile /> <Profile />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
