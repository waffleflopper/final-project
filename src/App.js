import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageform/ImageLinkForm';
import Rank from './components/rank/Rank';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Rank />
          <ImageLinkForm />
        </div>
        
      </div>
    );
  }
}

export default App;
