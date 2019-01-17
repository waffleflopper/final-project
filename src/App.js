import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
      </div>
    );
  }
}

export default App;