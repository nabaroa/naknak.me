import React, { Component } from 'react';
import logo from './n.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
            <p>
              Reloaded<span className="dot"></span>
            </p>
        </header>
      </div>
    );
  }
}

export default App;
