import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageform/ImageLinkForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <ImageLinkForm />
        </div>
        
      </div>
    );
  }
}

export default App;
