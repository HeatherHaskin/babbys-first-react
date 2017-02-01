import React, { Component } from 'react';
//import logo from './logo.svg';
import HeaderContainer from './Header';
import './App.css';

// class Greetings extends Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.name}</h1>
//     );
//   }
// }

// class ProfileContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.profiles = []
//     for (let i=0; i<props.reps; i++) {
//       this.profiles.push(<Profile />)
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.profiles}
//       </div>
//     );
//   }
// }

// class Profile extends Component {
//   render() {
//     return (
//       <div className="FinnProfile">
//         <img src="http://s.gravatar.com/avatar/356bb2d17402e07f7086bcebbcdf15aa?s=120"
//              alt="finn"/>
//         <Greetings name="Finn" />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer num="6"/>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        {/* <div class="Finns-Gone-Wild">
          <ProfileContainer reps="3" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
